import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import {normalizeText} from '@site/src/utils/searchNormalization.mjs';

const MAX_SOURCES = 4;
const searchIndexCache = new Map();
const searchIndexRequests = new Map();

const PAGE_CONTEXT = {
  '/docs/frontend/overview/':
    'Front-end Overview — the Atlas platform customer-facing layer, markets in scope, and audience roles.',
  '/docs/frontend/customer-journey/':
    'Customer Journey — the six-step ordering flow, loyalty and promotions by market, and the market configuration matrix.',
  '/docs/frontend/order-channels/':
    'Order Channels — dine-in, delivery, and takeaway configuration per restaurant, including channel capability differences.',
  '/docs/frontend/customer-engagement-surveys/':
    'Customer Engagement Surveys — KFC Listens-style survey programmes, touchpoints, and operating model context.',
  '/docs/frontend/customer-engagement-surveys/qualtrics/':
    'Qualtrics — survey delivery platform details, data capture, escalation flow, and reporting context.',
  '/docs/frontend/market-configurations/':
    'Market Configurations — feature flags, market-level differences, and what can be changed without a deployment.',
  '/docs/admin-portal-guide/':
    'Admin Portal Guide — operational guidance for stores, menus, products, promotions, and support workflows.',
  '/docs/admin-portal-guide/stores/':
    'Stores — store setup, menu publishing, order toggles, taxes, and beneficiary management.',
  '/docs/admin-portal-guide/menus/':
    'Menus — named prices, categories, patches, and publication workflows.',
  '/docs/admin-portal-guide/products/':
    'Products — products, options, modifiers, slots, weights, and variants.',
  '/docs/playbooks/onboarding/':
    'Create Promotions — campaign setup, store-group assignment, QA, and launch monitoring.',
  '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/':
    'Recipe 1 - Buy 1 Get 1 Free (BOGO) — exact KFC BOGO setup using item presence and item-level pricing effects.',
  '/docs/playbooks/troubleshooting/':
    'Troubleshooting & Escalation — common issues, fixes, escalation paths, severity levels, and support channels.',
  '/docs/playbooks/runbook/':
    'Braze Welcome Reward Canvas — audience entry, trigger timing, reward flow, and QA guidance.',
};

const SUGGESTED_QUERIES = {
  '/docs/frontend/customer-journey/': [
    'How does loyalty work by market?',
    'What order channels are available?',
    'What can be configured by market?',
  ],
  '/docs/frontend/order-channels/': [
    'What order channels are available?',
    'How do channels differ by market?',
    'What should operators know before launch?',
  ],
  '/docs/frontend/customer-engagement-surveys/': [
    'What does this survey capability cover?',
    'How does Qualtrics fit in?',
    'What teams use this?',
  ],
  '/docs/frontend/customer-engagement-surveys/qualtrics/': [
    'How does Qualtrics fit in?',
    'What survey data is captured?',
    'What follow-up ownership is needed?',
  ],
  '/docs/admin-portal-guide/stores/': [
    'How do I create a store?',
    'How do I assign a new menu?',
    'What store tasks are most common?',
  ],
  '/docs/admin-portal-guide/menus/': [
    'How do I create a menu?',
    'How do I publish a menu?',
    'What menu tasks are most common?',
  ],
  '/docs/playbooks/onboarding/': [
    'How do I create a KFC promotion in Atlas?',
    'How do I assign promotions to store groups?',
    'What should I QA before launch?',
  ],
  '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/': [
    'How do I configure Buy 1 Get 1?',
    'What admin pages support this recipe?',
    'What should I verify before launch?',
  ],
  '/docs/playbooks/troubleshooting/': [
    'How do I escalate a platform issue?',
    'What severity levels are defined?',
    'Where should I start troubleshooting?',
  ],
  '/docs/playbooks/runbook/': [
    'How do I set up a welcome reward canvas?',
    'What should I confirm before launch?',
    'What audience definition is needed?',
  ],
};

const JAPANESE_SUGGESTED_QUERIES = {
  '/docs/frontend/customer-journey/': [
    '日本でのロイヤルティはどうなっていますか？',
    '利用できる注文チャネルは？',
    '市場ごとに何を設定できますか？',
  ],
  '/docs/frontend/order-channels/': [
    '利用できる注文チャネルは？',
    '市場ごとの違いは？',
    '公開前に何を確認すべきですか？',
  ],
  '/docs/frontend/customer-engagement-surveys/': [
    'この調査機能は何をカバーしますか？',
    'Qualtrics はどう関係しますか？',
    'どのチームが使いますか？',
  ],
  '/docs/frontend/customer-engagement-surveys/qualtrics/': [
    'Qualtrics はどう関係しますか？',
    'どんな調査データを取得しますか？',
    '運用上のフォロー体制は？',
  ],
  '/docs/admin-portal-guide/stores/': [
    '店舗を作成するには？',
    '新しいメニューを割り当てるには？',
    'よくある店舗タスクは？',
  ],
  '/docs/admin-portal-guide/menus/': [
    'メニューを作成するには？',
    'メニューを公開するには？',
    'よくあるメニュータスクは？',
  ],
  '/docs/playbooks/onboarding/': [
    'Atlas で KFC のプロモーションを作成するには？',
    'プロモーションをストアグループに割り当てるには？',
    '公開前に何を QA すべきですか？',
  ],
  '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/': [
    'BOGO を設定するには？',
    'このレシピに関連する管理画面は？',
    '公開前に何を確認すべきですか？',
  ],
  '/docs/playbooks/troubleshooting/': [
    '障害をエスカレーションするには？',
    '重大度レベルはどう定義されていますか？',
    'まずどこから確認すべきですか？',
  ],
  '/docs/playbooks/runbook/': [
    'Welcome Reward Canvas を設定するには？',
    '公開前に何を確認すべきですか？',
    'どんな audience 定義が必要ですか？',
  ],
};

const LOCALE_COPY = {
  'en-US': {
    assistantName: 'Atlas Assistant',
    status: 'Grounded in Atlas Wiki',
    trustLabel: 'Retrieval-first help',
    buttonTitle: 'Ask Atlas Assistant',
    placeholder: 'Ask about a task, guide, or market difference',
    searching: 'Searching Atlas Wiki',
    loadingIndex: 'Loading Atlas Wiki index…',
    openTopSource: 'Open top source',
    askAnother: 'Ask another question',
    noResultsTitle: 'No grounded answer found',
    noResultsBody:
      'I could not find a strong Atlas Wiki match for that question. Try a more specific task, product area, or market name.',
    lowConfidenceTitle: 'Closest grounded matches',
    highConfidenceTitle: 'Best Atlas Wiki match',
    sourcesLabel: 'Sources',
    relatedLabel: 'Next helpful pages',
    suggestedLabel: 'Suggested asks',
    askLabel: 'Ask about this area',
    pageLabel: 'Current context',
    sourceCount: (count) => `Grounded in ${count} Atlas Wiki source${count === 1 ? '' : 's'}`,
    currentContext: (topic) => `You are viewing ${topic}.`,
    welcome:
      'Ask a task-shaped question and I will search the local Atlas Wiki, return the strongest matching pages, and keep every answer anchored to source articles.',
    answerLead: (title) => `Start with **${title}**.`,
    answerBody: (summary) => summary,
    answerFollowUp: (title) => `Then use **${title}** for the next adjacent step or supporting detail.`,
    lowConfidenceBody:
      'I found related Atlas Wiki pages, but none looks like a complete end-to-end answer on its own.',
    sourceOpen: 'Open',
    sourceBestMatch: 'Best match',
    sourceRelated: 'Related',
    close: 'Close',
    minimise: 'Minimise',
    expand: 'Expand',
  },
  'ja-JP': {
    assistantName: 'Atlas Assistant',
    status: 'Atlas Wiki に基づく回答',
    trustLabel: '検索ベースの案内',
    buttonTitle: 'Atlas Assistant に質問する',
    placeholder: 'タスク、ガイド、市場差分について質問する',
    searching: 'Atlas Wiki を検索しています',
    loadingIndex: 'Atlas Wiki の索引を読み込んでいます…',
    openTopSource: '最上位ソースを開く',
    askAnother: '別の質問をする',
    noResultsTitle: '根拠のある回答が見つかりませんでした',
    noResultsBody:
      '質問に強く一致する Atlas Wiki のページが見つかりませんでした。もう少し具体的なタスク名、機能領域、市場名で試してください。',
    lowConfidenceTitle: '近い関連ページ',
    highConfidenceTitle: '最も関連性の高いページ',
    sourcesLabel: 'ソース',
    relatedLabel: '次に役立つページ',
    suggestedLabel: 'おすすめの質問',
    askLabel: 'この領域について質問する',
    pageLabel: '現在の文脈',
    sourceCount: (count) => `${count} 件の Atlas Wiki ソースに基づく回答`,
    currentContext: (topic) => `現在 **${topic}** を表示しています。`,
    welcome:
      'タスクに近い形で質問してください。Atlas Wiki をローカル検索し、最も近いページを返しながら、必ずソース記事に結び付けて案内します。',
    answerLead: (title) => `まず **${title}** から確認してください。`,
    answerBody: (summary) => summary,
    answerFollowUp: (title) => `次の手順や補足として **${title}** も確認すると役立ちます。`,
    lowConfidenceBody:
      '関連ページは見つかりましたが、単独で質問全体に答えきれるページは見当たりませんでした。',
    sourceOpen: '開く',
    sourceBestMatch: '最適候補',
    sourceRelated: '関連ページ',
    close: '閉じる',
    minimise: '最小化',
    expand: '開く',
  },
};

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

function normalizeDocPath(path) {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

function pathWithoutLocale(path) {
  return normalizeDocPath((path || '').replace(/^\/ja-JP(?=\/)/, ''));
}

function extractTopic(pageContext) {
  if (!pageContext) return null;
  return pageContext.split('—')[0].trim();
}

function prettySection(section) {
  return (section || 'docs')
    .split('-')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ');
}

function scoreRecord(record, normalizedQuery, tokens, currentPath, currentSection) {
  const title = record.normalizedTitle || '';
  const headings = record.normalizedHeadings || '';
  const summary = record.normalizedSummary || '';
  const section = record.normalizedSection || '';
  const recordPath = pathWithoutLocale(record.url);

  let score = 0;

  if (title.startsWith(normalizedQuery)) score += 140;
  else if (title.includes(normalizedQuery)) score += 100;

  if (headings.includes(normalizedQuery)) score += 52;
  if (summary.includes(normalizedQuery)) score += 36;
  if (section.includes(normalizedQuery)) score += 24;

  tokens.forEach((token) => {
    if (title.includes(token)) score += 30;
    if (headings.includes(token)) score += 15;
    if (summary.includes(token)) score += 10;
    if (section.includes(token)) score += 8;
  });

  if (recordPath === currentPath) score += 24;
  if (currentPath !== '/' && recordPath.startsWith(currentPath)) score += 16;
  if (record.section === currentSection) score += 12;

  return score;
}

function dedupeByUrl(records) {
  const seen = new Set();
  return records.filter((record) => {
    if (seen.has(record.url)) return false;
    seen.add(record.url);
    return true;
  });
}

function buildRelatedLinks(matches, suggestions) {
  const relatedMatches = matches.slice(1, 4).map((record) => ({
    label: record.title,
    to: record.url,
  }));

  const combined = [...relatedMatches, ...suggestions.map((item) => ({label: item, to: null}))];
  const seen = new Set();

  return combined.filter((item) => {
    const key = `${item.label}|${item.to || ''}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 4);
}

function buildAssistantReply({query, matches, copy, promptSuggestions}) {
  if (matches.length === 0) {
    return {
      kind: 'empty',
      title: copy.noResultsTitle,
      body: copy.noResultsBody,
      promptSuggestions: promptSuggestions.slice(0, 3),
    };
  }

  const sources = matches.slice(0, MAX_SOURCES);
  const bestMatch = sources[0];
  const lowConfidence = bestMatch.score < 95;
  const answerParagraphs = [];

  if (lowConfidence) {
    answerParagraphs.push(copy.lowConfidenceBody);
  }

  answerParagraphs.push(copy.answerLead(bestMatch.title));

  if (bestMatch.summary) {
    answerParagraphs.push(copy.answerBody(bestMatch.summary));
  }

  if (sources[1]) {
    answerParagraphs.push(copy.answerFollowUp(sources[1].title));
  }

  return {
    kind: 'answer',
    title: lowConfidence ? copy.lowConfidenceTitle : copy.highConfidenceTitle,
    body: answerParagraphs,
    sources,
    relatedLinks: buildRelatedLinks(sources, promptSuggestions),
    query,
    lowConfidence,
  };
}

function TextBubble({children}) {
  return (
    <div
      style={{
        maxWidth: '88%',
        padding: '11px 13px',
        borderRadius: '14px 14px 14px 4px',
        background: 'white',
        color: '#2a2018',
        fontSize: '0.875rem',
        lineHeight: 1.6,
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        border: '1px solid #ece6dc',
      }}>
      {children}
    </div>
  );
}

function renderInlineMarkdown(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return (
      <React.Fragment key={index}>
        {part.split('\n').map((line, lineIndex) => (
          <React.Fragment key={`${index}-${lineIndex}`}>
            {lineIndex > 0 ? <br /> : null}
            {line}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  });
}

function AnswerCard({message, copy, navigateTo, setQuery}) {
  return (
    <div
      style={{
        maxWidth: '92%',
        borderRadius: 16,
        background: 'white',
        color: '#2a2018',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        border: '1px solid #ece6dc',
        overflow: 'hidden',
      }}>
      <div style={{padding: '14px 14px 12px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, flexWrap: 'wrap'}}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              borderRadius: 999,
              padding: '4px 8px',
              fontSize: '0.7rem',
              fontWeight: 700,
              background: message.lowConfidence ? 'rgba(245,158,11,0.12)' : 'rgba(12,166,120,0.12)',
              color: message.lowConfidence ? '#9a5b00' : '#0a7a59',
            }}>
            {message.title}
          </span>
          <span style={{fontSize: '0.72rem', color: '#746b63'}}>
            {copy.sourceCount(message.sources.length)}
          </span>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: 9}}>
          {message.body.map((paragraph) => (
            <div key={paragraph} style={{fontSize: '0.88rem', lineHeight: 1.6}}>
              {renderInlineMarkdown(paragraph)}
            </div>
          ))}
        </div>
      </div>

      <div style={{padding: '0 14px 12px'}}>
        <div style={{fontSize: '0.76rem', fontWeight: 700, color: '#574d45', marginBottom: 8}}>
          {copy.sourcesLabel}
        </div>
        <div style={{display: 'grid', gap: 8}}>
          {message.sources.map((source, index) => (
            <button
              key={source.url}
              type="button"
              onClick={() => navigateTo(source.url)}
              style={{
                textAlign: 'left',
                border: '1px solid #ece6dc',
                borderRadius: 12,
                padding: '10px 11px',
                background: index === 0 ? '#fbf7ef' : '#faf8f5',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}>
              <div style={{display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start'}}>
                <div>
                  <div style={{fontSize: '0.84rem', fontWeight: 700, color: '#2a2018'}}>{source.title}</div>
                  <div style={{fontSize: '0.75rem', color: '#746b63', marginTop: 3}}>
                    {source.summary || prettySection(source.section)}
                  </div>
                </div>
                <div
                  style={{
                    flexShrink: 0,
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: index === 0 ? '#b45309' : '#6b625a',
                  }}>
                  {index === 0 ? copy.sourceBestMatch : copy.sourceRelated}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {message.relatedLinks.length > 0 ? (
        <div style={{padding: '0 14px 12px'}}>
          <div style={{fontSize: '0.76rem', fontWeight: 700, color: '#574d45', marginBottom: 8}}>
            {copy.relatedLabel}
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 7}}>
            {message.relatedLinks.map((link) => (
              <button
                key={`${link.label}-${link.to || 'query'}`}
                type="button"
                onClick={() => (link.to ? navigateTo(link.to) : setQuery(link.label))}
                style={{
                  background: 'rgba(19,16,12,0.04)',
                  border: '1px solid rgba(19,16,12,0.1)',
                  borderRadius: 999,
                  padding: '6px 10px',
                  fontSize: '0.74rem',
                  color: '#423932',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div
        style={{
          padding: '0 14px 14px',
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
        }}>
        <button
          type="button"
          onClick={() => navigateTo(message.sources[0].url)}
          style={{
            background: '#13100C',
            color: 'white',
            border: 'none',
            borderRadius: 10,
            padding: '8px 10px',
            fontSize: '0.74rem',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}>
          {copy.openTopSource}
        </button>
        <button
          type="button"
          onClick={() => setQuery('')}
          style={{
            background: 'white',
            color: '#423932',
            border: '1px solid #d8d0c7',
            borderRadius: 10,
            padding: '8px 10px',
            fontSize: '0.74rem',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}>
          {copy.askAnother}
        </button>
      </div>
    </div>
  );
}

function LoadingCard({copy}) {
  return (
    <div
      style={{
        maxWidth: '84%',
        borderRadius: 16,
        background: 'white',
        color: '#2a2018',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        border: '1px solid #ece6dc',
        padding: '12px 13px',
      }}>
      <div style={{fontSize: '0.84rem', fontWeight: 700, marginBottom: 6}}>{copy.searching}</div>
      <div style={{fontSize: '0.8rem', color: '#746b63'}}>Checking the local Atlas Wiki index and ranking the closest matching pages.</div>
    </div>
  );
}

export default function AtlasChat() {
  const {i18n, siteConfig} = useDocusaurusContext();
  const chatLogoSrc = useBaseUrl('/img/atlas-chat-logo.svg');
  const searchIndexUrl = useBaseUrl(`/search-index.${i18n.currentLocale}.json`, {forcePrependBaseUrl: true});
  const {withBaseUrl} = useBaseUrlUtils();
  const locale = LOCALE_COPY[i18n.currentLocale] ? i18n.currentLocale : 'en-US';
  const copy = LOCALE_COPY[locale];
  const isJapanese = locale === 'ja-JP';
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimised, setIsMinimised] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [isIndexReady, setIsIndexReady] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const rawPath = location.pathname.replace(/\/$/, '') || '/';
  const basePath = (siteConfig.baseUrl || '/').replace(/\/$/, '');
  const pathWithoutBase =
    basePath && basePath !== '/' && rawPath.startsWith(basePath)
      ? rawPath.slice(basePath.length) || '/'
      : rawPath;
  const pathWithoutAnyLocale = pathWithoutBase.replace(/^\/(?:en-US|ja-JP)(?=\/|$)/, '') || '/';
  const localePrefix = `/${locale}`;
  const currentPath = pathWithoutBase.startsWith(localePrefix)
    ? pathWithoutBase.slice(localePrefix.length) || '/'
    : pathWithoutBase;
  const normalizedPath = normalizeDocPath(currentPath);
  const currentSection = normalizedPath.split('/')[2] || 'docs';
  const hideOnRoute = pathWithoutAnyLocale === '/sneak-peek';
  const pageContext = PAGE_CONTEXT[normalizedPath] || null;
  const topic = extractTopic(pageContext);
  const promptSuggestionsMap = isJapanese ? JAPANESE_SUGGESTED_QUERIES : SUGGESTED_QUERIES;
  const promptSuggestions =
    promptSuggestionsMap[normalizedPath] ||
    (isJapanese
      ? ['このページの要点は？', '次に読むべきガイドは？', '市場差分はありますか？']
      : ['What does this page cover?', 'What should I read next?', 'Are there market differences?']);

  const welcomeMessage = useMemo(
    () => ({
      role: 'assistant',
      kind: 'welcome',
      content: `${topic ? copy.currentContext(topic) : copy.welcome}\n\n${topic ? copy.welcome : ''}`.trim(),
    }),
    [copy, topic],
  );

  useEffect(() => {
    let active = true;
    setIsIndexReady(false);

    getCachedSearchIndex(searchIndexUrl)
      .then((data) => {
        if (!active) return;
        setSearchIndex(Array.isArray(data) ? data : []);
        setIsIndexReady(true);
      })
      .catch(() => {
        if (!active) return;
        setSearchIndex([]);
        setIsIndexReady(true);
      });

    return () => {
      active = false;
    };
  }, [searchIndexUrl]);

  useEffect(() => {
    setMessages([welcomeMessage]);
    setQuery('');
    setIsSearching(false);
  }, [welcomeMessage, normalizedPath]);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [messages, isOpen, isSearching]);

  if (hideOnRoute) {
    return null;
  }

  function navigateTo(path) {
    window.location.assign(withBaseUrl(path));
  }

  function openAssistant() {
    setIsOpen(true);
    setIsMinimised(false);
    if (messages.length === 0) {
      setMessages([welcomeMessage]);
    }
  }

  function runRetrieval(nextQuery) {
    const trimmedQuery = nextQuery.trim();
    if (!trimmedQuery || isSearching || !isIndexReady) return;

    const normalizedQuery = normalizeText(trimmedQuery);
    if (!normalizedQuery) return;

    const tokens = normalizedQuery.split(' ').filter(Boolean);
    const scoredMatches = dedupeByUrl(
      searchIndex
        .map((record) => ({
          ...record,
          score: scoreRecord(record, normalizedQuery, tokens, normalizedPath, currentSection),
        }))
        .filter((record) => record.score > 0)
        .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title)),
    );

    const userMessage = {
      role: 'user',
      kind: 'text',
      content: trimmedQuery,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setIsSearching(true);
    setQuery('');

    window.setTimeout(() => {
      const assistantMessage = {
        role: 'assistant',
        ...buildAssistantReply({
          query: trimmedQuery,
          matches: scoredMatches,
          copy,
          promptSuggestions,
        }),
      };

      setMessages((currentMessages) => [...currentMessages, assistantMessage]);
      setIsSearching(false);
    }, 180);
  }

  function handleSubmit(event) {
    event.preventDefault();
    runRetrieval(query);
  }

  return (
    <>
      {!isOpen ? (
        <button
          onClick={openAssistant}
          title={copy.buttonTitle}
          style={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            zIndex: 9999,
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#13100C',
            border: '1px solid rgba(255,255,255,0.08)',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(19,16,12,0.28), 0 4px 14px rgba(228,0,43,0.22)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s, box-shadow 0.2s',
            overflow: 'hidden',
            padding: 0,
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.transform = 'scale(1.08)';
            event.currentTarget.style.boxShadow =
              '0 10px 28px rgba(19,16,12,0.34), 0 6px 18px rgba(228,0,43,0.28)';
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.transform = 'scale(1)';
            event.currentTarget.style.boxShadow =
              '0 8px 24px rgba(19,16,12,0.28), 0 4px 14px rgba(228,0,43,0.22)';
          }}>
          <img
            src={chatLogoSrc}
            alt=""
            aria-hidden="true"
            style={{width: '100%', height: '100%', display: 'block'}}
          />
        </button>
      ) : null}

      {isOpen ? (
        <div
          style={{
            position: 'fixed',
            bottom: 28,
            right: 28,
            zIndex: 9999,
            width: 404,
            maxWidth: 'calc(100vw - 32px)',
            background: 'white',
            borderRadius: 16,
            boxShadow: '0 8px 40px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.08)',
            height: isMinimised ? 'auto' : 620,
            maxHeight: 'calc(100vh - 44px)',
            fontFamily: "'DM Sans', system-ui, sans-serif",
            transition: 'height 0.2s ease',
          }}>
          <div
            style={{
              background: '#13100C',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}>
                <img
                  src={chatLogoSrc}
                  alt=""
                  aria-hidden="true"
                  style={{width: '100%', height: '100%', display: 'block'}}
                />
              </div>
              <div>
                <div style={{color: 'white', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.2}}>
                  {copy.assistantName}
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 6, marginTop: 3}}>
                  <div style={{width: 6, height: 6, borderRadius: '50%', background: '#0f9f6e'}} />
                  <span style={{color: 'rgba(255,255,255,0.72)', fontSize: '0.73rem'}}>{copy.status}</span>
                </div>
                <div style={{color: 'rgba(255,255,255,0.45)', fontSize: '0.68rem', marginTop: 2}}>
                  {copy.trustLabel}
                </div>
              </div>
            </div>
            <div style={{display: 'flex', gap: 4}}>
              <button
                onClick={() => setIsMinimised((current) => !current)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.62)',
                  padding: '4px 6px',
                  borderRadius: 4,
                  fontSize: '1rem',
                  lineHeight: 1,
                }}
                title={isMinimised ? copy.expand : copy.minimise}>
                {isMinimised ? '▲' : '▼'}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.62)',
                  padding: '4px 6px',
                  borderRadius: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1,
                }}
                title={copy.close}>
                ×
              </button>
            </div>
          </div>

          {!isMinimised ? (
            <>
              <div
                style={{
                  padding: '12px 14px',
                  background: '#f4efe7',
                  borderBottom: '1px solid #ece6dc',
                }}>
                <div style={{fontSize: '0.72rem', fontWeight: 700, color: '#6a5f56', marginBottom: 5}}>
                  {copy.pageLabel}
                </div>
                <div style={{fontSize: '0.84rem', color: '#2a2018', lineHeight: 1.5}}>
                  {pageContext || copy.welcome}
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '16px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  background: '#faf8f5',
                }}>
                {messages.map((message, index) => (
                  <div
                    key={`${message.kind}-${index}`}
                    style={{
                      display: 'flex',
                      justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                    }}>
                    {message.role === 'user' ? (
                      <div
                        style={{
                          maxWidth: '82%',
                          padding: '10px 13px',
                          borderRadius: '14px 14px 4px 14px',
                          background: '#E4002B',
                          color: 'white',
                          fontSize: '0.875rem',
                          lineHeight: 1.6,
                          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                        }}>
                        {message.content}
                      </div>
                    ) : null}

                    {message.role === 'assistant' && message.kind === 'welcome' ? (
                      <TextBubble>{renderInlineMarkdown(message.content)}</TextBubble>
                    ) : null}

                    {message.role === 'assistant' && message.kind === 'answer' ? (
                      <AnswerCard
                        message={message}
                        copy={copy}
                        navigateTo={navigateTo}
                        setQuery={setQuery}
                      />
                    ) : null}

                    {message.role === 'assistant' && message.kind === 'empty' ? (
                      <div style={{maxWidth: '88%'}}>
                        <TextBubble>
                          <strong>{message.title}</strong>
                          <br />
                          {message.body}
                        </TextBubble>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 10}}>
                          {message.promptSuggestions.map((prompt) => (
                            <button
                              key={prompt}
                              type="button"
                              onClick={() => runRetrieval(prompt)}
                              style={{
                                background: 'white',
                                border: '1px solid #d8d0c7',
                                borderRadius: 999,
                                padding: '6px 10px',
                                fontSize: '0.74rem',
                                color: '#423932',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                              }}>
                              {prompt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}

                {isSearching ? <LoadingCard copy={copy} /> : null}
                <div ref={messagesEndRef} />
              </div>

              <div
                style={{
                  padding: '10px 14px 8px',
                  borderTop: '1px solid #ece6dc',
                  background: 'white',
                }}>
                <div style={{fontSize: '0.72rem', fontWeight: 700, color: '#6a5f56', marginBottom: 8}}>
                  {copy.suggestedLabel}
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 7}}>
                  {promptSuggestions.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => runRetrieval(prompt)}
                      style={{
                        background: 'rgba(228,0,43,0.06)',
                        border: '1px solid rgba(228,0,43,0.18)',
                        borderRadius: 20,
                        padding: '5px 11px',
                        fontSize: '0.74rem',
                        color: '#c20025',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}>
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                style={{
                  padding: '10px 14px 14px',
                  borderTop: '1px solid #ece6dc',
                  background: 'white',
                  display: 'flex',
                  gap: 8,
                  alignItems: 'flex-end',
                  flexShrink: 0,
                }}>
                <div style={{flex: 1}}>
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={isIndexReady ? copy.placeholder : copy.loadingIndex}
                    disabled={!isIndexReady || isSearching}
                    style={{
                      width: '100%',
                      border: '1.5px solid #ece6dc',
                      borderRadius: 10,
                      padding: '11px 12px',
                      fontSize: '0.84rem',
                      fontFamily: 'inherit',
                      lineHeight: 1.5,
                      color: '#2a2018',
                      background: !isIndexReady || isSearching ? '#f5f2ee' : 'white',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!query.trim() || !isIndexReady || isSearching}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    flexShrink: 0,
                    border: 'none',
                    background: !query.trim() || !isIndexReady || isSearching ? '#d8d0c7' : '#13100C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: !query.trim() || !isIndexReady || isSearching ? 'default' : 'pointer',
                  }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
