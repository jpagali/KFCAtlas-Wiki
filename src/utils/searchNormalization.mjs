export function normalizeText(value) {
  return (value || '')
    .normalize('NFKC')
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildNormalizedSearchFields({title, headings, summary, section}) {
  return {
    normalizedTitle: normalizeText(title),
    normalizedHeadings: normalizeText(Array.isArray(headings) ? headings.join(' ') : headings),
    normalizedSummary: normalizeText(summary),
    normalizedSection: normalizeText(section),
  };
}
