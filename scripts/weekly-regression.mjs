import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';

const rootDir = process.cwd();
const docsDir = path.join(rootDir, 'docs');
const buildDir = path.join(rootDir, 'build');
const localeConfigs = [
  {
    locale: 'en-US',
    docsDir,
    searchIndexPath: path.join(rootDir, 'static', 'search-index.en-US.json'),
    buildAssetPath: path.join(buildDir, 'search-index.en-US.json'),
    sizeBudgetBytes: 250 * 1024,
  },
];

const criticalPaths = [
  '/',
  '/docs/about-knowledge-center/',
  '/docs/admin-portal-guide/',
  '/docs/release-notes/',
  '/docs/admin-portal-guide/agents/',
  '/docs/frontend/customer-journey/',
];

const failures = [];
const warnings = [];

function logSection(title) {
  console.log(`\n=== ${title} ===`);
}

function pass(message) {
  console.log(`PASS  ${message}`);
}

function warn(message) {
  warnings.push(message);
  console.warn(`WARN  ${message}`);
}

function fail(message) {
  failures.push(message);
  console.error(`FAIL  ${message}`);
}

function runStep(command, args, label) {
  logSection(label);
  const result = spawnSync(command, args, {
    cwd: rootDir,
    encoding: 'utf8',
    stdio: 'pipe',
  });

  if (result.stdout?.trim()) {
    console.log(result.stdout.trim());
  }

  if (result.status !== 0) {
    if (result.stderr?.trim()) {
      console.error(result.stderr.trim());
    }
    fail(`${label} exited with code ${result.status ?? 'unknown'}`);
    return false;
  }

  pass(`${label} completed`);
  return true;
}

function walkMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdownFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith('.md')) return [fullPath];
    return [];
  });
}

function toDocUrl(locale, filePath) {
  const docsRoot = docsDir;
  const relativePath = path.relative(docsRoot, filePath).replace(/\\/g, '/');
  const withoutExtension = relativePath.replace(/\.md$/, '');
  const normalizedPath = withoutExtension.replace(/\/index$/, '');
  const prefix = '/docs';
  return normalizedPath ? `${prefix}/${normalizedPath}/` : `${prefix}/`;
}

function urlToBuildPath(sitePath) {
  const trimmed = sitePath.replace(/^\/+/, '').replace(/\/+$/, '');
  return trimmed ? path.join(buildDir, trimmed, 'index.html') : path.join(buildDir, 'index.html');
}

function ensureFileExists(filePath, label) {
  if (!fs.existsSync(filePath)) {
    fail(`${label} missing at ${path.relative(rootDir, filePath)}`);
    return false;
  }

  pass(`${label} present`);
  return true;
}

function ensureFileMissing(filePath, label) {
  if (fs.existsSync(filePath)) {
    fail(`${label} should not exist at ${path.relative(rootDir, filePath)}`);
    return false;
  }

  pass(`${label} absent`);
  return true;
}

function validateSearchIndex() {
  logSection('Validate search index');

  ensureFileMissing(path.join(rootDir, 'static', 'search-index.json'), 'legacy combined search index');

  localeConfigs.forEach(({locale, docsDir: localeDocsDir, searchIndexPath, sizeBudgetBytes}) => {
    if (!ensureFileExists(searchIndexPath, `${locale} search index`)) return;

    let records;
    try {
      records = JSON.parse(fs.readFileSync(searchIndexPath, 'utf8'));
    } catch (error) {
      fail(`${locale} search index is not valid JSON: ${error.message}`);
      return;
    }

    if (!Array.isArray(records) || records.length === 0) {
      fail(`${locale} search index does not contain any records`);
      return;
    }

    pass(`${locale} search index contains ${records.length} records`);

    const fileSizeBytes = fs.statSync(searchIndexPath).size;
    if (fileSizeBytes > sizeBudgetBytes) {
      fail(
        `${locale} search index exceeds size budget (${fileSizeBytes} bytes > ${sizeBudgetBytes} bytes)`,
      );
    } else {
      pass(`${locale} search index is within size budget (${fileSizeBytes} bytes)`);
    }

    const expectedDocs = walkMarkdownFiles(localeDocsDir).map((filePath) => ({
      locale,
      url: toDocUrl(locale, filePath),
    }));

    const expectedKeys = new Set(expectedDocs.map(({locale, url}) => `${locale}:${url}`));
    const actualKeys = new Set(records.map(({locale, url}) => `${locale}:${url}`));

    const missingRecords = expectedDocs.filter(({locale, url}) => !actualKeys.has(`${locale}:${url}`));
    const unexpectedRecords = records.filter(({locale, url}) => !expectedKeys.has(`${locale}:${url}`));
    const duplicateKeys = records
      .map(({locale, url}) => `${locale}:${url}`)
      .filter((key, index, source) => source.indexOf(key) !== index);

    if (missingRecords.length > 0) {
      fail(`${locale} search index is missing ${missingRecords.length} doc records`);
    } else {
      pass(`${locale} search index covers every markdown doc`);
    }

    if (unexpectedRecords.length > 0) {
      warn(`${locale} search index has ${unexpectedRecords.length} unexpected records`);
    } else {
      pass(`${locale} search index contains no unexpected records`);
    }

    if (duplicateKeys.length > 0) {
      fail(`${locale} search index contains ${new Set(duplicateKeys).size} duplicate locale/url pairs`);
    } else {
      pass(`${locale} search index contains no duplicate locale/url pairs`);
    }

    const invalidRecords = records.filter((record) => {
      if (!record || typeof record !== 'object') return true;
      if (record.locale !== locale) return true;
      const requiredFields = [
        'locale',
        'title',
        'summary',
        'section',
        'url',
        'normalizedTitle',
        'normalizedSummary',
        'normalizedSection',
      ];
      const hasInvalidString = requiredFields.some(
        (field) => typeof record[field] !== 'string' || record[field].trim().length === 0,
      );
      return (
        hasInvalidString ||
        !Array.isArray(record.headings) ||
        typeof record.normalizedHeadings !== 'string'
      );
    });

    if (invalidRecords.length > 0) {
      fail(`${locale} search index contains ${invalidRecords.length} malformed records`);
    } else {
      pass(`${locale} search index records have required fields`);
    }
  });
}

function validateBuildOutput() {
  logSection('Validate build output');

  if (!ensureFileExists(buildDir, 'build directory')) return;

  criticalPaths.forEach((sitePath) => {
    ensureFileExists(urlToBuildPath(sitePath), `built page ${sitePath}`);
  });

  const requiredAssets = [
    path.join(buildDir, 'img', 'atlas-logo.png'),
    ...localeConfigs.map(({buildAssetPath}) => buildAssetPath),
  ];

  requiredAssets.forEach((assetPath) => {
    ensureFileExists(assetPath, `build asset ${path.relative(buildDir, assetPath)}`);
  });

  ensureFileMissing(path.join(buildDir, 'search-index.json'), 'legacy combined build search index');
}

function printSummary() {
  logSection('Summary');
  if (warnings.length === 0) {
    pass('No warnings');
  } else {
    warnings.forEach((message) => console.warn(`WARN  ${message}`));
  }

  if (failures.length === 0) {
    pass('Weekly regression passed');
    return 0;
  }

  failures.forEach((message) => console.error(`FAIL  ${message}`));
  console.error(`\nWeekly regression failed with ${failures.length} issue(s).`);
  return 1;
}

logSection('Weekly regression');
console.log('Running Atlas portal release-gate checks for docs integrity, search coverage, and production output.');

if (runStep('node', ['scripts/generate-search-index.mjs'], 'Generate search index')) {
  validateSearchIndex();
}

if (runStep('npm', ['run', 'build'], 'Production build')) {
  validateBuildOutput();
}

process.exitCode = printSummary();
