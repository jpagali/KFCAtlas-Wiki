import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import {Table} from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import styles from './styles.module.css';

const MARKUP_SYNC_DELAY_MS = 30000;

const DEFAULT_EDITOR_HTML = `
  <h1>How to complete the task</h1>
  <p>Start with a short overview that explains the goal and the outcome.</p>
  <h2>Before you begin</h2>
  <ul>
    <li>List prerequisites</li>
    <li>List permissions or tools needed</li>
  </ul>
  <h2>Steps</h2>
  <ol>
    <li>Describe the first step clearly.</li>
    <li>Describe the next step and expected outcome.</li>
    <li>Close with what success looks like.</li>
  </ol>
`.trim();

const LOCATION_PRESETS = [
  {
    key: 'byte-capabilities',
    path: '/docs/byte-capabilities/',
    label: {
      'en-US': 'Byte Capabilities',
      'ja-JP': 'Byte Capabilities',
    },
  },
  {
    key: 'admin-portal-guide',
    path: '/docs/admin-portal-guide/',
    label: {
      'en-US': 'Byte Admin Portal',
      'ja-JP': 'Byte Admin Portal',
    },
  },
  {
    key: 'frontend',
    path: '/docs/frontend/overview',
    label: {
      'en-US': 'Front-End Guide',
      'ja-JP': 'Front-End Guide',
    },
  },
  {
    key: 'playbooks',
    path: '/docs/playbooks/',
    label: {
      'en-US': 'Playbooks',
      'ja-JP': 'Playbooks',
    },
  },
  {
    key: 'release-notes',
    path: '/docs/release-notes/',
    label: {
      'en-US': 'Release Notes',
      'ja-JP': 'Release Notes',
    },
  },
  {
    key: 'brand-experience-team',
    path: '/docs/brand-experience-team',
    label: {
      'en-US': 'Brand Experience Team',
      'ja-JP': 'Brand Experience Team',
    },
  },
  {
    key: 'deployment-runbook',
    path: '/docs/deployment-runbook',
    label: {
      'en-US': 'Deployment Runbook',
      'ja-JP': 'Deployment Runbook',
    },
  },
];

const COPY = {
  'en-US': {
    title: 'Contribute to Atlas Wiki',
    subtitle:
      'Turn your process, guide, or operating insight into a publish-ready article with a familiar writing surface and a guided submission flow.',
    metadata: 'Article Setup',
    content: 'Contribution Studio',
    editor: 'Editor',
    preview: 'Preview',
    markup: 'Markup',
    readiness: 'Submission Readiness',
    modalTitle: 'Send Publishing Request',
    download: 'Download Markdown File',
    email: 'Open Email Draft',
    send: 'Send Publishing Request',
    linkedImageError: 'Please upload the images in the publishing request',
    previewHelp: 'Preview your article as it will appear after publishing.',
    markupHelp: 'Paste or edit markdown here. The studio auto-syncs it back into the editor every 30 seconds while you type.',
    markupSyncPending: 'Markup changes waiting to sync',
    markupSyncReady: 'Markup synced',
    markupSyncButton: 'Sync now',
    markupSyncBodyLabel: 'Article markdown',
    fieldLabels: {
      title: 'Document Title',
      author: 'Author Name',
      team: 'Team / Function',
      summary: 'Summary',
      audience: 'Intended Audience',
      location: 'Suggested Atlas Wiki Location',
      locationTree: 'Suggested Atlas Wiki Section',
      locationOther: 'Other location URL',
      videoLinks: 'Video Links',
      notes: 'Notes to Reviewer',
    },
    fieldHelp: {
      location:
        'Choose the closest doc tree first. If the right section is not listed, select Other and paste the exact target URL.',
      videoLinks: 'Add one video URL per line if the article references recordings or demos.',
    },
    locationPlaceholder: 'Select a doc tree',
    locationOther: 'Other',
    readinessItems: {
      metadata: 'Required metadata complete',
      location: 'Suggested location URL is valid',
      markdown: 'Markdown is ready to export',
      images: 'Linked images are valid or flagged for attachment',
    },
    modalSteps: [
      'Download the Markdown file.',
      'Open the email draft to jyp4013@yum.com.',
      'Attach the Markdown file and any relevant images.',
      'Send the publishing request.',
    ],
    helperBar: 'Use the current WYSIWYG editor, switch into Preview when you want final rendering, or paste directly into Markup when source markdown is easier to work with.',
    imageHealthEmpty: 'No linked images in the article yet.',
    close: 'Close',
    draftTitle: 'Untitled draft',
    draftSummary: 'Add a short summary so reviewers understand the article intent.',
    authorPending: 'Author pending',
    teamPending: 'Team pending',
    audiencePending: 'Audience pending',
    checking: 'Checking...',
    ready: 'Ready',
    heroEyebrow: 'Atlas Wiki 公開スタジオ',
    heroFlow: 'Editor ↔ Preview ↔ Markup',
    required: 'Required',
    live: 'Live',
    rendered: 'Rendered',
    modalReminder: 'Attach the downloaded Markdown file and any relevant local images before sending.',
    modalReminderDownload: 'Download the Markdown file first to enable the email draft action.',
    emailNone: 'None provided',
    editorBadge: 'WYSIWYG',
    previewBadge: 'Rendered',
    markupBadge: 'Markdown',
  },
  'ja-JP': {
    title: 'Atlas Wiki に寄稿する',
    subtitle:
      '親しみやすい編集画面で記事を作成し、プレビュー確認後に Markdown とメールで公開依頼を送信できます。',
    metadata: '記事設定',
    content: 'Contribution Studio',
    editor: 'Editor',
    preview: 'Preview',
    markup: 'Markup',
    readiness: '公開依頼の準備状況',
    modalTitle: '公開依頼を送信',
    download: 'Markdown をダウンロード',
    email: 'メール下書きを開く',
    send: '公開依頼を送信',
    linkedImageError: '画像が表示されない場合は、公開依頼メールに画像を添付してください',
    previewHelp: '公開後の見え方をここで確認できます。',
    markupHelp:
      'ここに Markdown を貼り付けるか編集してください。編集中は 30 秒ごとにエディタへ自動同期し、必要ならすぐに手動同期もできます。',
    markupSyncPending: 'Markup の変更を同期待ちです',
    markupSyncReady: 'Markup は同期済みです',
    markupSyncButton: '今すぐ同期',
    markupSyncBodyLabel: '記事 Markdown',
    fieldLabels: {
      title: 'ドキュメントタイトル',
      author: '作成者名',
      team: 'チーム / 部門',
      summary: '概要',
      audience: '想定読者',
      location: '掲載先の候補 URL',
      locationTree: '掲載先の候補セクション',
      locationOther: 'その他の掲載先 URL',
      videoLinks: '動画リンク',
      notes: 'レビュー担当者へのメモ',
    },
    fieldHelp: {
      location:
        'まず Atlas Wiki の文書ツリーから近い場所を選択してください。該当がない場合は Other を選び、正確な URL を入力します。',
      videoLinks: '録画やデモを参照する場合は、1 行に 1 件ずつ URL を入力してください。',
    },
    locationPlaceholder: 'ドキュメントツリーを選択',
    locationOther: 'Other',
    readinessItems: {
      metadata: '必須メタデータの入力完了',
      location: '掲載先 URL が有効',
      markdown: 'Markdown を生成可能',
      images: '画像リンクの確認または添付案内が完了',
    },
    modalSteps: [
      'Markdown ファイルをダウンロードします。',
      'jyp4013@yum.com 宛てのメール下書きを開きます。',
      'Markdown ファイルと必要な画像を添付します。',
      '公開依頼メールを送信します。',
    ],
    helperBar:
      '現在の WYSIWYG editor をそのまま使いながら、Preview で最終表示を確認し、必要なら Markup に直接 Markdown を貼り付けて同期できます。',
    imageHealthEmpty: 'まだ画像リンクは追加されていません。',
    close: '閉じる',
    draftTitle: '無題の下書き',
    draftSummary: 'レビュー担当者が内容を理解できるよう、短い概要を追加してください。',
    authorPending: '作成者未入力',
    teamPending: 'チーム未入力',
    audiencePending: '想定読者未入力',
    checking: '確認中...',
    ready: '準備完了',
    heroEyebrow: 'Atlas Wiki Publishing Studio',
    heroFlow: 'Editor ↔ Preview ↔ Markup',
    required: '必須',
    live: 'ライブ',
    rendered: 'レンダリング',
    modalReminder: '送信前に、ダウンロードした Markdown ファイルと必要なローカル画像を添付してください。',
    modalReminderDownload: '先に Markdown ファイルをダウンロードすると、メール下書きボタンが有効になります。',
    emailNone: '未入力',
    editorBadge: 'WYSIWYG',
    previewBadge: 'Rendered',
    markupBadge: 'Markdown',
  },
};

const INITIAL_META = {
  title: '',
  author: '',
  team: '',
  summary: '',
  audience: '',
  location: '',
  videoLinks: '',
  notes: '',
};

function slugify(value) {
  return (value || 'knowledge-base-submission')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function yamlValue(value) {
  return JSON.stringify((value || '').trim());
}

function extractText(node) {
  return node.textContent.replace(/\s+/g, ' ').trim();
}

function wrapParagraphs(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n\n');
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function parseInlineMarkdown(text) {
  const tokens = [];
  let html = escapeHtml(text);

  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
    const token = `__IMAGE_${tokens.length}__`;
    tokens.push(`<img src="${escapeHtml(src.trim())}" alt="${escapeHtml(alt.trim())}" />`);
    return token;
  });

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const token = `__LINK_${tokens.length}__`;
    tokens.push(`<a href="${escapeHtml(href.trim())}">${label.trim()}</a>`);
    return token;
  });

  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
  html = html.replace(/&lt;u&gt;([\s\S]*?)&lt;\/u&gt;/g, '<u>$1</u>');

  tokens.forEach((tokenHtml, index) => {
    html = html.replace(`__IMAGE_${index}__`, tokenHtml);
    html = html.replace(`__LINK_${index}__`, tokenHtml);
  });

  return html;
}

function convertNodeToMarkdown(node, depth = 0) {
  if (node.nodeType === 3) {
    return node.textContent.replace(/\s+/g, ' ');
  }

  if (node.nodeType !== 1) {
    return '';
  }

  const tag = node.tagName.toLowerCase();
  const children = Array.from(node.childNodes)
    .map((child) => convertNodeToMarkdown(child, depth + 1))
    .join('');
  const text = children.trim();

  switch (tag) {
    case 'h1':
      return `# ${text}\n\n`;
    case 'h2':
      return `## ${text}\n\n`;
    case 'h3':
      return `### ${text}\n\n`;
    case 'p':
      return `${wrapParagraphs(text)}\n\n`;
    case 'strong':
    case 'b':
      return `**${text}**`;
    case 'em':
    case 'i':
      return `*${text}*`;
    case 'u':
      return `<u>${text}</u>`;
    case 'blockquote':
      return `${text
        .split('\n')
        .filter(Boolean)
        .map((line) => `> ${line.trim()}`)
        .join('\n')}\n\n`;
    case 'a': {
      const href = node.getAttribute('href') || '';
      return href ? `[${text || href}](${href})` : text;
    }
    case 'img': {
      const src = node.getAttribute('src') || '';
      const alt = node.getAttribute('alt') || 'Image';
      return `![${alt}](${src})\n\n`;
    }
    case 'ul': {
      const items = Array.from(node.children)
        .filter((child) => child.tagName?.toLowerCase() === 'li')
        .map((child) => `${'  '.repeat(Math.max(depth - 1, 0))}- ${extractText(child)}`);
      return `${items.join('\n')}\n\n`;
    }
    case 'ol': {
      const items = Array.from(node.children)
        .filter((child) => child.tagName?.toLowerCase() === 'li')
        .map((child, index) => `${'  '.repeat(Math.max(depth - 1, 0))}${index + 1}. ${extractText(child)}`);
      return `${items.join('\n')}\n\n`;
    }
    case 'li':
      return `${text}\n`;
    case 'code':
      if (node.parentElement?.tagName?.toLowerCase() === 'pre') {
        return text;
      }
      return `\`${text}\``;
    case 'pre':
      return `\`\`\`\n${node.textContent.trim()}\n\`\`\`\n\n`;
    case 'hr':
      return `---\n\n`;
    case 'table': {
      const rows = Array.from(node.querySelectorAll('tr')).map((row) =>
        Array.from(row.children).map((cell) => extractText(cell)),
      );

      if (!rows.length) {
        return '';
      }

      const [headerRow, ...bodyRows] = rows;
      const header = `| ${headerRow.join(' | ')} |`;
      const divider = `| ${headerRow.map(() => '---').join(' | ')} |`;
      const body = bodyRows.map((row) => `| ${row.join(' | ')} |`).join('\n');
      return `${header}\n${divider}${body ? `\n${body}` : ''}\n\n`;
    }
    default:
      return children;
  }
}

function parseArticleHtml(html) {
  if (typeof window === 'undefined') {
    return null;
  }

  const parser = new window.DOMParser();
  return parser.parseFromString(`<article>${html}</article>`, 'text/html');
}

function buildBodyMarkdownFromHtml(html) {
  const articleDoc = parseArticleHtml(html);
  if (!articleDoc?.body?.firstChild) {
    return '';
  }

  return Array.from(articleDoc.body.firstChild.childNodes)
    .map((node) => convertNodeToMarkdown(node))
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function buildMarkdown(meta, bodyMarkdown) {
  const videos = meta.videoLinks
    .split('\n')
    .map((link) => link.trim())
    .filter(Boolean);

  return `---
title: ${yamlValue(meta.title || 'Untitled')}
author: ${yamlValue(meta.author || 'Unknown')}
team: ${yamlValue(meta.team || 'Unknown')}
summary: ${yamlValue(meta.summary)}
audience: ${yamlValue(meta.audience)}
suggested_location: ${yamlValue(meta.location)}
---

${bodyMarkdown.trim()}

${videos.length ? `## Video Links\n\n${videos.map((link) => `- ${link}`).join('\n')}\n\n` : ''}${meta.notes ? `## Notes to Reviewer\n\n${meta.notes.trim()}\n` : ''}`.trim();
}

function parseYamlScalar(value) {
  const trimmed = value.trim();
  if (!trimmed) {
    return '';
  }

  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    try {
      return JSON.parse(trimmed);
    } catch (error) {
      return trimmed.slice(1, -1);
    }
  }

  return trimmed;
}

function extractFrontMatter(markdown) {
  const normalized = markdown.replace(/\r\n/g, '\n');
  if (!normalized.startsWith('---\n')) {
    return {meta: {}, body: normalized};
  }

  const endIndex = normalized.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    return {meta: {}, body: normalized};
  }

  const frontMatterBlock = normalized.slice(4, endIndex);
  const body = normalized.slice(endIndex + 5);
  const meta = {};

  frontMatterBlock.split('\n').forEach((line) => {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) {
      return;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = parseYamlScalar(line.slice(separatorIndex + 1));
    meta[key] = value;
  });

  return {meta, body};
}

function markdownToHtml(markdown) {
  const normalized = markdown.replace(/\r\n/g, '\n').trim();
  if (!normalized) {
    return '';
  }

  const lines = normalized.split('\n');
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith('```')) {
      const codeLines = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) {
        index += 1;
      }
      blocks.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push('<hr />');
      index += 1;
      continue;
    }

    if (/^#{1,3}\s+/.test(trimmed)) {
      const level = trimmed.match(/^#+/)[0].length;
      blocks.push(`<h${level}>${parseInlineMarkdown(trimmed.replace(/^#{1,3}\s+/, ''))}</h${level}>`);
      index += 1;
      continue;
    }

    if (trimmed.startsWith('>')) {
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith('>')) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ''));
        index += 1;
      }
      blocks.push(`<blockquote><p>${quoteLines.map(parseInlineMarkdown).join('<br />')}</p></blockquote>`);
      continue;
    }

    if (
      trimmed.includes('|') &&
      index + 1 < lines.length &&
      /^\s*\|?[\-:\s|]+\|?\s*$/.test(lines[index + 1])
    ) {
      const headerCells = splitTableRow(trimmed);
      const bodyRows = [];
      index += 2;
      while (index < lines.length && lines[index].trim().includes('|')) {
        bodyRows.push(splitTableRow(lines[index].trim()));
        index += 1;
      }

      const headHtml = `<tr>${headerCells.map((cell) => `<th>${parseInlineMarkdown(cell)}</th>`).join('')}</tr>`;
      const bodyHtml = bodyRows
        .map((row) => `<tr>${row.map((cell) => `<td>${parseInlineMarkdown(cell)}</td>`).join('')}</tr>`)
        .join('');
      blocks.push(`<table><thead>${headHtml}</thead>${bodyHtml ? `<tbody>${bodyHtml}</tbody>` : ''}</table>`);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*[-*]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*]\s+/, ''));
        index += 1;
      }
      blocks.push(`<ul>${items.map((item) => `<li>${parseInlineMarkdown(item.trim())}</li>`).join('')}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ''));
        index += 1;
      }
      blocks.push(`<ol>${items.map((item) => `<li>${parseInlineMarkdown(item.trim())}</li>`).join('')}</ol>`);
      continue;
    }

    const paragraphLines = [trimmed];
    index += 1;
    while (index < lines.length) {
      const nextLine = lines[index].trim();
      if (
        !nextLine ||
        nextLine.startsWith('```') ||
        nextLine.startsWith('>') ||
        /^#{1,3}\s+/.test(nextLine) ||
        /^---+$/.test(nextLine) ||
        /^\s*[-*]\s+/.test(lines[index]) ||
        /^\s*\d+\.\s+/.test(lines[index]) ||
        (nextLine.includes('|') && index + 1 < lines.length && /^\s*\|?[\-:\s|]+\|?\s*$/.test(lines[index + 1]))
      ) {
        break;
      }

      paragraphLines.push(nextLine);
      index += 1;
    }

    blocks.push(`<p>${paragraphLines.map(parseInlineMarkdown).join(' ')}</p>`);
  }

  return blocks.join('');
}

function collectLinkedImages(articleDoc, imageStatuses) {
  if (!articleDoc) {
    return [];
  }

  const linkedImages = [];
  articleDoc.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src') || '';
    if (!src) return;

    linkedImages.push({
      src,
      status: imageStatuses[src] || 'pending',
    });
  });

  return linkedImages;
}

function renderPreviewNodes(articleDoc, onImageStateChange) {
  if (!articleDoc?.body?.firstChild) {
    return null;
  }
  const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

  const renderNode = (node, key) => {
    if (node.nodeType === 3) {
      return node.textContent;
    }

    if (node.nodeType !== 1) {
      return null;
    }

    const tag = node.tagName.toLowerCase();
    const children = Array.from(node.childNodes).map((child, childIndex) =>
      renderNode(child, `${key}-${childIndex}`),
    );

    if (tag === 'img') {
      const src = node.getAttribute('src') || '';
      const alt = node.getAttribute('alt') || 'Linked reference';
      return (
        <figure key={key} className={styles.previewImageCard}>
          <img
            src={src}
            alt={alt}
            onLoad={() => onImageStateChange(src, true)}
            onError={() => onImageStateChange(src, false)}
          />
          <figcaption>{alt}</figcaption>
        </figure>
      );
    }

    if (tag === 'table') {
      return (
        <div key={key} className={styles.previewTableWrap}>
          {React.createElement(tag, {}, children)}
        </div>
      );
    }

    if (voidTags.has(tag)) {
      return React.createElement(tag, {key});
    }

    const props = tag === 'a'
      ? {key, href: node.getAttribute('href') || '#', target: '_blank', rel: 'noreferrer'}
      : {key};

    return React.createElement(tag, props, children);
  };

  return Array.from(articleDoc.body.firstChild.childNodes).map((node, index) =>
    renderNode(node, `preview-${index}`),
  );
}

function isValidUrl(value) {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (error) {
    return false;
  }
}

function getAtlasWikiOrigin() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }

  return 'https://atlas-wiki.yum.com';
}

function buildLocationUrl(path) {
  return `${getAtlasWikiOrigin()}${path}`;
}

function deriveLocationChoice(location) {
  if (!location) {
    return '';
  }

  const preset = LOCATION_PRESETS.find((option) => location.startsWith(buildLocationUrl(option.path)));
  return preset ? preset.key : 'other';
}

function deriveCustomLocation(location) {
  if (!location) {
    return '';
  }

  return deriveLocationChoice(location) === 'other' ? location : '';
}

function ToolbarGroup({children}) {
  return <div className={styles.toolbarGroup}>{children}</div>;
}

function IconBold() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3.5 2.5h4a2.5 2.5 0 0 1 0 5H3.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M3.5 7.5h4.5a2.5 2.5 0 0 1 0 5H3.5V7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function IconItalic() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5.5 2.5h5M3.5 11.5h5M8.5 2.5 5.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconUnderline() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3.5 2.5v4a3.5 3.5 0 0 0 7 0v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2.5 12.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconBulletList() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="2.5" cy="4" r="1.2" fill="currentColor"/>
      <circle cx="2.5" cy="7" r="1.2" fill="currentColor"/>
      <circle cx="2.5" cy="10" r="1.2" fill="currentColor"/>
      <rect x="5.5" y="3.25" width="6.5" height="1.5" rx="0.75" fill="currentColor"/>
      <rect x="5.5" y="6.25" width="6.5" height="1.5" rx="0.75" fill="currentColor"/>
      <rect x="5.5" y="9.25" width="6.5" height="1.5" rx="0.75" fill="currentColor"/>
    </svg>
  );
}

function IconOrderedList() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <text x="0.5" y="5" fontSize="4.5" fontWeight="700" fill="currentColor" fontFamily="sans-serif">1.</text>
      <text x="0.5" y="8.5" fontSize="4.5" fontWeight="700" fill="currentColor" fontFamily="sans-serif">2.</text>
      <text x="0.5" y="12" fontSize="4.5" fontWeight="700" fill="currentColor" fontFamily="sans-serif">3.</text>
      <rect x="5.5" y="3.25" width="6.5" height="1.5" rx="0.75" fill="currentColor"/>
      <rect x="5.5" y="6.25" width="6.5" height="1.5" rx="0.75" fill="currentColor"/>
      <rect x="5.5" y="9.25" width="6.5" height="1.5" rx="0.75" fill="currentColor"/>
    </svg>
  );
}

function IconLink() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5.5 8.5a3 3 0 0 0 4.24 0l1.77-1.77a3 3 0 0 0-4.24-4.24l-.88.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8.5 5.5a3 3 0 0 0-4.24 0L2.49 7.27a3 3 0 0 0 4.24 4.24l.88-.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconImage() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="4.75" cy="5.5" r="1.1" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1.5 9.5 5 6.5l2.5 2.5 2-1.5 3 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M4.5 4 1.5 7l3 3M9.5 4l3 3-3 3M8 2.5l-2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconTable() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="2" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1.5 5.5h11" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5.5 5.5V12" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M9 5.5V12" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  );
}

function IconRule() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="6.25" width="11" height="1.5" rx="0.75" fill="currentColor"/>
    </svg>
  );
}

function IconUndo() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 4.5H8a3.5 3.5 0 0 1 0 7H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 2.5v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconRedo() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M11 4.5H6a3.5 3.5 0 0 0 0 7h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 2.5v4H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UrlPopover({id, label, placeholder, hint, onApply, applyLabel = 'Apply', children}) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleApply = () => {
    if (!value.trim()) return;
    onApply(value.trim());
    setValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleApply();
    }
  };

  useEffect(() => {
    const el = document.getElementById(id);
    if (el) {
      el._focusInput = () => {
        setValue('');
        setTimeout(() => inputRef.current?.focus(), 30);
      };
      el._setValue = (v) => {
        setValue(v);
        setTimeout(() => inputRef.current?.focus(), 30);
      };
    }
  });

  return (
    <div className={styles.urlPopover} id={id} role="dialog" aria-label={label}>
      <span className={styles.urlPopoverLabel}>{label}</span>
      <div className={styles.urlPopoverRow}>
        <input
          ref={inputRef}
          type="url"
          className={styles.urlPopoverInput}
          placeholder={placeholder}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
        />
        <button type="button" className={styles.urlPopoverApply} onClick={handleApply}>
          {applyLabel}
        </button>
      </div>
      {children}
      {hint && <span className={styles.urlPopoverHint}>{hint}</span>}
    </div>
  );
}

function ImagePopover({id, onApply}) {
  const [url, setUrl] = useState('');
  const [previewState, setPreviewState] = useState('empty');
  const inputRef = useRef(null);

  const handleApply = () => {
    if (!url.trim()) return;
    onApply(url.trim());
    setUrl('');
    setPreviewState('empty');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleApply();
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setUrl(value);
    setPreviewState(value.trim() ? 'loading' : 'empty');
  };

  useEffect(() => {
    const el = document.getElementById(id);
    if (el) {
      el._focusInput = () => {
        setUrl('');
        setPreviewState('empty');
        setTimeout(() => inputRef.current?.focus(), 30);
      };
    }
  });

  return (
    <div className={styles.urlPopover} id={id} role="dialog" aria-label="Insert image">
      <span className={styles.urlPopoverLabel}>Insert image</span>
      <div className={styles.urlPopoverRow}>
        <input
          ref={inputRef}
          type="url"
          className={styles.urlPopoverInput}
          placeholder="https://..."
          value={url}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck={false}
        />
        <button type="button" className={styles.urlPopoverApply} onClick={handleApply}>
          Insert
        </button>
      </div>
      {previewState !== 'empty' && (
        <div className={styles.imagePreviewStrip}>
          <img
            key={url}
            src={url}
            alt="preview"
            className={styles.imagePreviewImg}
            onLoad={() => setPreviewState('ok')}
            onError={() => setPreviewState('error')}
            style={{display: previewState === 'error' ? 'none' : 'block'}}
          />
          {previewState === 'error' && (
            <span className={styles.imagePreviewError}>Could not load image, check the URL.</span>
          )}
        </div>
      )}
      <span className={styles.urlPopoverHint}>
        Images must be publicly accessible. Broken URLs are flagged in the Submission Readiness panel.
      </span>
    </div>
  );
}

function TbBtn({active, disabled, title, onClick, children}) {
  return (
    <button
      type="button"
      className={clsx(styles.tbBtn, active && styles.tbBtnActive)}
      title={title}
      disabled={disabled}
      onMouseDown={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function TiptapEditor({contentHtml, onChange}) {
  const [openPopover, setOpenPopover] = useState(null);
  const popoverRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {levels: [1, 2, 3]},
        link: false,
        underline: false,
      }),
      Underline,
      Link.configure({openOnClick: false}),
      Image,
      Table.configure({resizable: false}),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: contentHtml,
    onUpdate({editor: currentEditor}) {
      onChange(currentEditor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    const nextHtml = contentHtml || '';
    if (nextHtml !== editor.getHTML()) {
      editor.commands.setContent(nextHtml, false);
    }
  }, [contentHtml, editor]);

  useEffect(() => {
    if (!openPopover) return undefined;
    const handler = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpenPopover(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openPopover]);

  useEffect(() => {
    if (!openPopover) return undefined;
    const handler = (event) => {
      if (event.key === 'Escape') setOpenPopover(null);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [openPopover]);

  const togglePopover = useCallback(
    (name) => {
      if (openPopover === name) {
        setOpenPopover(null);
        return;
      }
      setOpenPopover(name);
      requestAnimationFrame(() => {
        const el = document.getElementById(`popover-${name}`);
        if (el?._focusInput) el._focusInput();
        if (name === 'link' && el?._setValue) {
          const href = editor?.getAttributes('link').href || '';
          if (href) el._setValue(href);
        }
      });
    },
    [editor, openPopover],
  );

  const handleInsertLink = useCallback(
    (href) => {
      if (!editor) return;
      editor.chain().focus().setLink({href}).run();
      setOpenPopover(null);
    },
    [editor],
  );

  const handleInsertImage = useCallback(
    (src) => {
      if (!editor) return;
      editor.chain().focus().setImage({src}).run();
      setOpenPopover(null);
    },
    [editor],
  );

  const handleInsertTable = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().insertTable({rows: 2, cols: 2, withHeaderRow: true}).run();
  }, [editor]);

  const currentBlockType = (() => {
    if (!editor) return 'p';
    if (editor.isActive('heading', {level: 1})) return 'h1';
    if (editor.isActive('heading', {level: 2})) return 'h2';
    if (editor.isActive('heading', {level: 3})) return 'h3';
    if (editor.isActive('blockquote')) return 'blockquote';
    return 'p';
  })();

  const applyBlockType = (value) => {
    if (!editor) return;
    if (value === 'p') {
      editor.chain().focus().setParagraph().run();
    } else if (value === 'blockquote') {
      editor.chain().focus().setBlockquote().run();
    } else {
      const level = parseInt(value.replace('h', ''), 10);
      editor.chain().focus().toggleHeading({level}).run();
    }
  };

  return (
    <div>
      <div className={styles.toolbar} ref={popoverRef}>
        <ToolbarGroup>
          <select
            className={styles.toolbarSelect}
            value={currentBlockType}
            onChange={(event) => applyBlockType(event.target.value)}
          >
            <option value="p">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="blockquote">Quote</option>
          </select>
        </ToolbarGroup>

        <ToolbarGroup>
          <TbBtn active={editor?.isActive('bold')} title="Bold (Cmd+B)" onClick={() => editor?.chain().focus().toggleBold().run()}>
            <IconBold />
          </TbBtn>
          <TbBtn active={editor?.isActive('italic')} title="Italic (Cmd+I)" onClick={() => editor?.chain().focus().toggleItalic().run()}>
            <IconItalic />
          </TbBtn>
          <TbBtn active={editor?.isActive('underline')} title="Underline (Cmd+U)" onClick={() => editor?.chain().focus().toggleUnderline().run()}>
            <IconUnderline />
          </TbBtn>
        </ToolbarGroup>

        <ToolbarGroup>
          <TbBtn active={editor?.isActive('bulletList')} title="Bullet list" onClick={() => editor?.chain().focus().toggleBulletList().run()}>
            <IconBulletList />
          </TbBtn>
          <TbBtn active={editor?.isActive('orderedList')} title="Ordered list" onClick={() => editor?.chain().focus().toggleOrderedList().run()}>
            <IconOrderedList />
          </TbBtn>
        </ToolbarGroup>

        <ToolbarGroup>
          <div className={styles.popoverAnchor}>
            <TbBtn active={openPopover === 'link' || editor?.isActive('link')} title="Insert link" onClick={() => togglePopover('link')}>
              <IconLink />
              <span className={styles.tbBtnLabel}>Link</span>
            </TbBtn>
            {openPopover === 'link' && (
              <UrlPopover
                id="popover-link"
                label="Insert link"
                placeholder="https://..."
                hint="Select text first to wrap it in a link. Enter or Apply confirms."
                onApply={handleInsertLink}
                applyLabel="Apply"
              />
            )}
          </div>

          <div className={styles.popoverAnchor}>
            <TbBtn active={openPopover === 'image'} title="Insert image by URL" onClick={() => togglePopover('image')}>
              <IconImage />
              <span className={styles.tbBtnLabel}>Image</span>
            </TbBtn>
            {openPopover === 'image' && <ImagePopover id="popover-image" onApply={handleInsertImage} />}
          </div>

          <TbBtn active={editor?.isActive('codeBlock')} title="Code block" onClick={() => editor?.chain().focus().toggleCodeBlock().run()}>
            <IconCode />
          </TbBtn>
          <TbBtn title="Insert table" onClick={handleInsertTable}>
            <IconTable />
          </TbBtn>
          <TbBtn title="Horizontal rule" onClick={() => editor?.chain().focus().setHorizontalRule().run()}>
            <IconRule />
          </TbBtn>
        </ToolbarGroup>

        <ToolbarGroup>
          <TbBtn title="Undo (Cmd+Z)" disabled={!editor?.can().undo()} onClick={() => editor?.chain().focus().undo().run()}>
            <IconUndo />
          </TbBtn>
          <TbBtn title="Redo (Cmd+Shift+Z)" disabled={!editor?.can().redo()} onClick={() => editor?.chain().focus().redo().run()}>
            <IconRedo />
          </TbBtn>
        </ToolbarGroup>
      </div>

      <EditorContent editor={editor} className={styles.editorSurface} />
    </div>
  );
}

function PreviewImageHealth({images, warningText, emptyText, readyText, checkingText}) {
  if (!images.length) {
    return <p className={styles.readinessHint}>{emptyText}</p>;
  }

  return (
    <div className={styles.imageHealthList}>
      {images.map((image) => (
        <div
          key={image.src}
          className={clsx(
            styles.imageHealthRow,
            image.status === 'loaded' && styles.imageHealthRowOk,
            image.status === 'error' && styles.imageHealthRowError,
          )}
        >
          <span className={styles.imageHealthUrl}>{image.src}</span>
          <span className={styles.imageHealthStatus}>
            {image.status === 'loaded'
              ? readyText
              : image.status === 'error'
                ? warningText
                : checkingText}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ContributePage() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const copy = COPY[currentLocale] ?? COPY['en-US'];
  const [meta, setMeta] = useState(INITIAL_META);
  const [editorHtml, setEditorHtml] = useState(DEFAULT_EDITOR_HTML);
  const [markupBody, setMarkupBody] = useState(() => buildBodyMarkdownFromHtml(DEFAULT_EDITOR_HTML));
  const [imageStatuses, setImageStatuses] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [activeTab, setActiveTab] = useState('editor');
  const [markupDirty, setMarkupDirty] = useState(false);
  const [locationChoice, setLocationChoice] = useState('');
  const [customLocation, setCustomLocation] = useState('');
  const parsedArticle = useMemo(() => parseArticleHtml(editorHtml), [editorHtml]);
  const linkedImages = useMemo(
    () => collectLinkedImages(parsedArticle, imageStatuses),
    [imageStatuses, parsedArticle],
  );
  const updateImageStatus = useCallback((src, loaded) => {
    setImageStatuses((current) => {
      const nextStatus = loaded ? 'loaded' : 'error';
      if (current[src] === nextStatus) {
        return current;
      }

      return {
        ...current,
        [src]: nextStatus,
      };
    });
  }, []);

  const previewNodes = useMemo(
    () => renderPreviewNodes(parsedArticle, updateImageStatus),
    [parsedArticle, updateImageStatus],
  );

  const markdown = useMemo(() => buildMarkdown(meta, markupBody), [meta, markupBody]);

  useEffect(() => {
    setDownloaded(false);
  }, [markdown]);

  useEffect(() => {
    if (activeTab !== 'markup' && markupDirty) {
      applyMarkupToStudio(markupBody, {source: 'tab-switch'});
    }
  }, [activeTab, markupBody, markupDirty]);

  useEffect(() => {
    if (!markupDirty) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      applyMarkupToStudio(markupBody, {source: 'timer'});
    }, MARKUP_SYNC_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [markupBody, markupDirty]);

  const metadataComplete = Boolean(
    meta.title.trim() &&
      meta.author.trim() &&
      meta.team.trim() &&
      meta.summary.trim() &&
      meta.audience.trim(),
  );
  const locationValid = isValidUrl(meta.location.trim());
  const markdownReady = Boolean(markdown.trim());
  const imagesReady = linkedImages.every((image) => image.status !== 'error');

  function updateMetaField(field, value) {
    setMeta((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleEditorHtmlChange(nextHtml) {
    setEditorHtml(nextHtml);
    const nextMarkdown = buildBodyMarkdownFromHtml(nextHtml);
    setMarkupBody(nextMarkdown);
    setMarkupDirty(false);
    setImageStatuses({});
  }

  function updateLocationState(nextLocation) {
    setMeta((current) => ({
      ...current,
      location: nextLocation,
    }));
    setLocationChoice(deriveLocationChoice(nextLocation));
    setCustomLocation(deriveCustomLocation(nextLocation));
  }

  function applyFrontMatterToMeta(frontMatterMeta) {
    const nextMeta = {
      title: frontMatterMeta.title,
      author: frontMatterMeta.author,
      team: frontMatterMeta.team,
      summary: frontMatterMeta.summary,
      audience: frontMatterMeta.audience,
      location: frontMatterMeta.suggested_location,
    };

    setMeta((current) => ({
      ...current,
      title: nextMeta.title ?? current.title,
      author: nextMeta.author ?? current.author,
      team: nextMeta.team ?? current.team,
      summary: nextMeta.summary ?? current.summary,
      audience: nextMeta.audience ?? current.audience,
      location: nextMeta.location ?? current.location,
    }));

    if (nextMeta.location !== undefined) {
      setLocationChoice(deriveLocationChoice(nextMeta.location));
      setCustomLocation(deriveCustomLocation(nextMeta.location));
    }
  }

  function applyMarkupToStudio(sourceMarkdown) {
    const {meta: frontMatterMeta, body} = extractFrontMatter(sourceMarkdown);
    const normalizedBody = body.trim();
    const nextHtml = markdownToHtml(normalizedBody);

    if (Object.keys(frontMatterMeta).length) {
      applyFrontMatterToMeta(frontMatterMeta);
    }

    setEditorHtml(nextHtml);
    setMarkupBody(normalizedBody);
    setMarkupDirty(false);
    setImageStatuses({});
  }

  const handleMarkupChange = (event) => {
    setMarkupBody(event.target.value);
    setMarkupDirty(true);
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], {type: 'text/markdown;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${slugify(meta.title)}.md`;
    link.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  const openEmailDraft = () => {
    const lines = [
      `Document Title: ${meta.title}`,
      `Author Name: ${meta.author}`,
      `Team / Function: ${meta.team}`,
      `Summary: ${meta.summary}`,
      `Intended Audience: ${meta.audience}`,
      `Suggested Atlas Wiki Location: ${meta.location}`,
      '',
      'Video Links:',
      meta.videoLinks || copy.emailNone,
      '',
      'Notes to Reviewer:',
      meta.notes || copy.emailNone,
      '',
      'Please attach the generated Markdown file and any relevant images before sending.',
    ];

    const subject = `Knowledge Base Submission: ${meta.title || 'Untitled'}`;
    window.location.href = `mailto:jyp4013@yum.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join('\n'))}`;
  };

  const readiness = [
    {
      label: copy.readinessItems.metadata,
      ready: metadataComplete,
    },
    {
      label: copy.readinessItems.location,
      ready: locationValid,
    },
    {
      label: copy.readinessItems.markdown,
      ready: markdownReady,
    },
    {
      label: copy.readinessItems.images,
      ready: linkedImages.length ? imagesReady : true,
    },
  ];

  const tabItems = [
    {key: 'editor', label: copy.editor, badge: copy.editorBadge},
    {key: 'preview', label: copy.preview, badge: copy.previewBadge},
    {key: 'markup', label: copy.markup, badge: copy.markupBadge},
  ];

  return (
    <Layout title={copy.title} description={copy.subtitle}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.heroEyebrow}</p>
            <h1>{copy.title}</h1>
            <p>{copy.subtitle}</p>
          </div>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeLabel}>Studio Mode</span>
            <strong>{copy.heroFlow}</strong>
          </div>
        </section>

        <section className={styles.studioStrip}>
          <div className={styles.studioStripHeader}>
            <h2>{copy.content}</h2>
            <p>{copy.helperBar}</p>
          </div>
        </section>

        <section className={styles.workspace}>
          <aside className={styles.sidebar}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>{copy.metadata}</h2>
                <span className={styles.panelPill}>{copy.required}</span>
              </div>
              <div className={styles.fieldList}>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.title}</span>
                  <input
                    value={meta.title}
                    onChange={(event) => updateMetaField('title', event.target.value)}
                    placeholder="e.g. How to update a promo configuration"
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.author}</span>
                  <input
                    value={meta.author}
                    onChange={(event) => updateMetaField('author', event.target.value)}
                    placeholder="Your name"
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.team}</span>
                  <input
                    value={meta.team}
                    onChange={(event) => updateMetaField('team', event.target.value)}
                    placeholder="e.g. Product, Support, Ops"
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.audience}</span>
                  <input
                    value={meta.audience}
                    onChange={(event) => updateMetaField('audience', event.target.value)}
                    placeholder="Who should read this?"
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.summary}</span>
                  <textarea
                    rows="4"
                    value={meta.summary}
                    onChange={(event) => updateMetaField('summary', event.target.value)}
                    placeholder="Summarize the outcome and what the article helps the reader do."
                  />
                </label>
                <div className={styles.field}>
                  <span>{copy.fieldLabels.locationTree}</span>
                  <select
                    className={styles.fieldSelect}
                    value={locationChoice}
                    onChange={(event) => {
                      const nextChoice = event.target.value;
                      setLocationChoice(nextChoice);

                      if (!nextChoice) {
                        updateLocationState('');
                        return;
                      }

                      if (nextChoice === 'other') {
                        setMeta((current) => ({
                          ...current,
                          location: customLocation,
                        }));
                        return;
                      }

                      const preset = LOCATION_PRESETS.find((option) => option.key === nextChoice);
                      updateLocationState(preset ? buildLocationUrl(preset.path) : '');
                    }}
                  >
                    <option value="">{copy.locationPlaceholder}</option>
                    {LOCATION_PRESETS.map((option) => (
                      <option key={option.key} value={option.key}>
                        {option.label[currentLocale] ?? option.label['en-US']}
                      </option>
                    ))}
                    <option value="other">{copy.locationOther}</option>
                  </select>
                  <small>{copy.fieldHelp.location}</small>
                </div>
                {locationChoice === 'other' ? (
                  <label className={styles.field}>
                    <span>{copy.fieldLabels.locationOther}</span>
                    <input
                      value={customLocation}
                      onChange={(event) => {
                        const value = event.target.value;
                        setCustomLocation(value);
                        setMeta((current) => ({
                          ...current,
                          location: value,
                        }));
                      }}
                      placeholder={`${getAtlasWikiOrigin()}/docs/...`}
                    />
                  </label>
                ) : null}
                <label className={styles.field}>
                  <span>{copy.fieldLabels.location}</span>
                  <input value={meta.location} readOnly className={styles.readOnlyInput} />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.videoLinks}</span>
                  <textarea
                    rows="4"
                    value={meta.videoLinks}
                    onChange={(event) => updateMetaField('videoLinks', event.target.value)}
                    placeholder="https://..."
                  />
                  <small>{copy.fieldHelp.videoLinks}</small>
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.notes}</span>
                  <textarea
                    rows="4"
                    value={meta.notes}
                    onChange={(event) => updateMetaField('notes', event.target.value)}
                    placeholder="Add any placement context or reviewer notes."
                  />
                </label>
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>{copy.readiness}</h2>
                <span className={styles.panelPill}>{copy.live}</span>
              </div>
              <div className={styles.readinessList}>
                {readiness.map((item) => (
                  <div
                    key={item.label}
                    className={clsx(styles.readinessItem, item.ready ? styles.ready : styles.notReady)}
                  >
                    <span className={styles.readinessDot} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <PreviewImageHealth
                images={linkedImages}
                warningText={copy.linkedImageError}
                emptyText={copy.imageHealthEmpty}
                readyText={copy.ready}
                checkingText={copy.checking}
              />
              <div className={styles.panelAction}>
                <button
                  type="button"
                  className={styles.primaryAction}
                  onClick={() => setModalOpen(true)}
                  disabled={!markdownReady}
                >
                  {copy.send}
                </button>
              </div>
            </div>
          </aside>

          <div className={styles.editorColumn}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>{copy.content}</h2>
                <span className={styles.panelPill}>
                  {tabItems.find((tab) => tab.key === activeTab)?.badge}
                </span>
              </div>

              <div className={styles.tabBar} role="tablist" aria-label="Contribution Studio views">
                {tabItems.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.key}
                    className={clsx(styles.tabButton, activeTab === tab.key && styles.tabButtonActive)}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 'editor' ? (
                <TiptapEditor contentHtml={editorHtml} onChange={handleEditorHtmlChange} />
              ) : null}

              {activeTab === 'preview' ? (
                <>
                  <p className={styles.previewHelp}>{copy.previewHelp}</p>
                  <article className={clsx('markdown', styles.previewSurface)}>
                    <header className={styles.previewHeader}>
                      <p className={styles.previewTitle}>{meta.title || copy.draftTitle}</p>
                      <p className={styles.previewSummary}>{meta.summary || copy.draftSummary}</p>
                      <div className={styles.previewMeta}>
                        <span>{meta.author || copy.authorPending}</span>
                        <span>{meta.team || copy.teamPending}</span>
                        <span>{meta.audience || copy.audiencePending}</span>
                      </div>
                    </header>
                    {previewNodes}
                    {linkedImages.some((image) => image.status === 'error') ? (
                      <p className={styles.previewWarning}>{copy.linkedImageError}</p>
                    ) : null}
                    {meta.videoLinks.trim() ? (
                      <section className={styles.previewVideos}>
                        <h2>Video Links</h2>
                        <ul>
                          {meta.videoLinks
                            .split('\n')
                            .map((link) => link.trim())
                            .filter(Boolean)
                            .map((link) => (
                              <li key={link}>
                                <a href={link} target="_blank" rel="noreferrer">
                                  {link}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </section>
                    ) : null}
                  </article>
                </>
              ) : null}

              {activeTab === 'markup' ? (
                <div className={styles.markupPanel}>
                  <div className={styles.markupHeader}>
                    <p className={styles.previewHelp}>{copy.markupHelp}</p>
                    <div className={styles.markupActions}>
                      <span className={clsx(styles.syncStatus, markupDirty ? styles.syncStatusPending : styles.syncStatusReady)}>
                        {markupDirty ? copy.markupSyncPending : copy.markupSyncReady}
                      </span>
                      <button
                        type="button"
                        className={styles.secondaryAction}
                        onClick={() => applyMarkupToStudio(markupBody)}
                        disabled={!markupDirty}
                      >
                        {copy.markupSyncButton}
                      </button>
                    </div>
                  </div>
                  <label className={styles.markupLabel} htmlFor="markup-body">
                    {copy.markupSyncBodyLabel}
                  </label>
                  <textarea
                    id="markup-body"
                    className={styles.markupSurface}
                    value={markupBody}
                    onChange={handleMarkupChange}
                    spellCheck={false}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {modalOpen ? (
          <div className={styles.modalBackdrop} role="presentation" onClick={() => setModalOpen(false)}>
            <div
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="submission-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h2 id="submission-modal-title">{copy.modalTitle}</h2>
                <button type="button" className={styles.modalClose} onClick={() => setModalOpen(false)}>
                  {copy.close}
                </button>
              </div>
              <ol className={styles.modalSteps}>
                {copy.modalSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className={styles.modalActions}>
                <button type="button" className={styles.secondaryAction} onClick={downloadMarkdown}>
                  {copy.download}
                </button>
                <button
                  type="button"
                  className={styles.primaryAction}
                  onClick={openEmailDraft}
                  disabled={!downloaded}
                >
                  {copy.email}
                </button>
              </div>
              <div className={styles.modalReminder}>
                <p>{copy.modalReminder}</p>
                {!downloaded ? <p>{copy.modalReminderDownload}</p> : null}
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </Layout>
  );
}
