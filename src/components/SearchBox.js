import React, {useDeferredValue, useEffect, useMemo, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import {normalizeText} from '@site/src/utils/searchNormalization.mjs';

const MAX_RESULTS = 8;
const searchIndexCache = new Map();
const searchIndexRequests = new Map();

function getCachedSearchIndex(searchIndexUrl) {
  if (searchIndexCache.has(searchIndexUrl)) {
    return Promise.resolve(searchIndexCache.get(searchIndexUrl));
  }

  if (!searchIndexRequests.has(searchIndexUrl)) {
    const request = fetch(searchIndexUrl)
      .then((response) => response.json())
      .then((data) => {
        const records = Array.isArray(data) ? data : [];
        searchIndexCache.set(searchIndexUrl, records);
        searchIndexRequests.delete(searchIndexUrl);
        return records;
      })
      .catch(() => {
        searchIndexRequests.delete(searchIndexUrl);
        return [];
      });

    searchIndexRequests.set(searchIndexUrl, request);
  }

  return searchIndexRequests.get(searchIndexUrl);
}

function scoreRecord(record, query, tokens) {
  const title = record.normalizedTitle || '';
  const headings = record.normalizedHeadings || '';
  const summary = record.normalizedSummary || '';
  const section = record.normalizedSection || '';
  let score = 0;

  if (title.startsWith(query)) score += 120;
  else if (title.includes(query)) score += 80;

  if (headings.includes(query)) score += 40;
  if (summary.includes(query)) score += 24;
  if (section.includes(query)) score += 18;

  tokens.forEach((token) => {
    if (title.includes(token)) score += 25;
    if (headings.includes(token)) score += 12;
    if (summary.includes(token)) score += 8;
    if (section.includes(token)) score += 6;
  });

  return score;
}

export default function SearchBox({
  className,
  inputClassName,
  dropdownClassName,
  resultClassName,
  titleClassName,
  metaClassName,
  emptyClassName,
  placeholder,
  emptyMessage,
}) {
  const {
    i18n: {currentLocale},
    siteConfig,
  } = useDocusaurusContext();
  const searchIndexUrl = useBaseUrl(`/search-index.${currentLocale}.json`, {forcePrependBaseUrl: true});
  const [searchIndex, setSearchIndex] = useState([]);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    let active = true;

    getCachedSearchIndex(searchIndexUrl)
      .then((data) => {
        if (active) setSearchIndex(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (active) setSearchIndex([]);
      });

    return () => {
      active = false;
    };
  }, [searchIndexUrl]);

  function buildSiteUrl(path) {
    const cleanBaseUrl = (siteConfig.baseUrl || '/').replace(/\/$/, '');
    return `${cleanBaseUrl}${path}`;
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const messages = {
    placeholder: placeholder || "What's on your mind?",
    empty: emptyMessage || 'No matching articles found.',
  };

  const results = useMemo(() => {
    const normalizedQuery = normalizeText(deferredQuery);
    if (!normalizedQuery) return [];

    const tokens = normalizedQuery.split(' ').filter(Boolean);
    const matches = [];

    searchIndex.forEach((record) => {
      const score = scoreRecord(record, normalizedQuery, tokens);
      if (score <= 0) return;
      matches.push({
        ...record,
        score,
      });
    });

    matches.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
    return matches.slice(0, MAX_RESULTS);
  }, [deferredQuery, searchIndex]);

  function handleSubmit(event) {
    if (event.key !== 'Enter' || results.length === 0) return;
    window.location.assign(buildSiteUrl(results[0].url));
  }

  return (
    <div className={clsx('navbar-search', className)} ref={containerRef}>
      <input
        className={clsx('navbar-search__input', inputClassName)}
        type="search"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleSubmit}
        placeholder={messages.placeholder}
        aria-label={messages.placeholder}
      />
      {isOpen && query.trim() ? (
        <div className={clsx('navbar-search__dropdown', dropdownClassName)}>
          {results.length > 0 ? (
            results.map((result) => (
              <Link
                key={result.url}
                className={clsx('navbar-search__result', resultClassName)}
                to={buildSiteUrl(result.url)}
                onClick={() => setIsOpen(false)}>
                <span className={clsx('navbar-search__title', titleClassName)}>{result.title}</span>
                <span className={clsx('navbar-search__meta', metaClassName)}>
                  {result.summary || result.section}
                </span>
              </Link>
            ))
          ) : (
            <div className={clsx('navbar-search__empty', emptyClassName)}>{messages.empty}</div>
          )}
        </div>
      ) : null}
    </div>
  );
}
