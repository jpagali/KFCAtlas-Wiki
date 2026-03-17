import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

// ── Page-aware context: maps doc paths to their topic
const PAGE_CONTEXT = {
  '/docs/frontend/overview':            'Front-end Overview — the Atlas platform customer-facing layer, markets in scope (Japan, Australia), audience roles.',
  '/docs/frontend/customer-journey':    'Customer Journey — the 6-step ordering flow, loyalty & promotions per market (Japan points-based, Australia voucher-based), market configuration matrix.',
  '/docs/frontend/order-channels':      'Order Channels — Dine-in, Delivery, Takeaway configuration per restaurant, channel capabilities, Japan and Australia channel status.',
  '/docs/frontend/customer-engagement-surveys': 'Customer Engagement Surveys — KFC Listens style guest feedback programmes, survey touchpoints, market operating model, and Qualtrics as the survey platform.',
  '/docs/frontend/customer-engagement-surveys/qualtrics': 'Qualtrics — survey delivery platform for KFC Listens style programmes, data capture, escalation flows, and CX reporting workflows.',
  '/docs/frontend/market-configurations': 'Market Configurations — feature flag architecture, what can be configured per market, Japan and Australia current settings, how to request changes.',
  '/docs/admin-portal-guide/':          'Admin Portal Guide — operational guide for stores, menus, products, promotions, and support workflows.',
  '/docs/admin-portal-guide/stores/':   'Stores — store setup, menu publishing, order toggles, taxes, and beneficiary management.',
  '/docs/admin-portal-guide/menus/':    'Menus — named prices, categories, patches, and menu publication workflows.',
  '/docs/admin-portal-guide/products/': 'Products — products, options, modifiers, slots, weights, and variants.',
  '/docs/playbooks/onboarding':         'Create Promotions — KFC campaign setup playbook covering promotion structure, rules, store-group assignment, QA, and launch monitoring.',
  '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo': 'Recipe 1 - Buy 1 Get 1 Free (BOGO) — exact KFC BOGO setup using Item Presence and Item Level pricing effects.',
  '/docs/playbooks/troubleshooting':    'Troubleshooting & Escalation — common issues and fixes, escalation path, severity levels (P1–P4), JIRA Service Desk, emergency Slack channel.',
  '/docs/playbooks/runbook':            'Braze Welcome Reward Canvas — KFC welcome reward journey setup covering audience entry, trigger timing, message flow, reward logic, and QA.',
};

const SUGGESTED_ARTICLES = {
  '/docs/frontend/customer-journey': [
    { label: 'How does loyalty work in Japan?', to: '/docs/frontend/customer-journey' },
    { label: 'What order channels are available?', to: '/docs/frontend/order-channels' },
    { label: 'What can be configured by market?', to: '/docs/frontend/market-configurations' },
  ],
  '/docs/frontend/order-channels': [
    { label: 'Read order channel details', to: '/docs/frontend/order-channels' },
    { label: 'See the customer journey', to: '/docs/frontend/customer-journey' },
    { label: 'Review market configurations', to: '/docs/frontend/market-configurations' },
  ],
  '/docs/frontend/customer-engagement-surveys': [
    { label: 'Open customer engagement surveys', to: '/docs/frontend/customer-engagement-surveys' },
    { label: 'Read the Qualtrics page', to: '/docs/frontend/customer-engagement-surveys/qualtrics' },
    { label: 'See the customer journey', to: '/docs/frontend/customer-journey' },
  ],
  '/docs/frontend/customer-engagement-surveys/qualtrics': [
    { label: 'Read the Qualtrics page', to: '/docs/frontend/customer-engagement-surveys/qualtrics' },
    { label: 'Open customer engagement surveys', to: '/docs/frontend/customer-engagement-surveys' },
    { label: 'Review market configurations', to: '/docs/frontend/market-configurations' },
  ],
  '/docs/admin-portal-guide/stores/': [
    { label: 'How do I create a store?', to: '/docs/admin-portal-guide/stores/create-a-store/' },
    { label: 'How do I edit store details?', to: '/docs/admin-portal-guide/stores/edit-store-details/' },
    { label: 'How do I assign a new menu?', to: '/docs/admin-portal-guide/stores/assign-new-menu/' },
  ],
  '/docs/admin-portal-guide/menus/': [
    { label: 'How do I create a menu?', to: '/docs/admin-portal-guide/menus/create-a-menu/' },
    { label: 'How do I assign a menu?', to: '/docs/admin-portal-guide/menus/assign-a-menu/' },
    { label: 'How do I publish a menu?', to: '/docs/admin-portal-guide/menus/publish-a-menu/' },
  ],
  '/docs/playbooks/onboarding': [
    { label: 'How do I create a KFC promotion in Atlas?', to: '/docs/playbooks/onboarding' },
    { label: 'How do I configure Buy 1 Get 1?', to: '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo' },
    { label: 'How do I assign promotions to store groups?', to: '/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/' },
  ],
  '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo': [
    { label: 'Read the BOGO recipe', to: '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo' },
    { label: 'How do I create a promotion?', to: '/docs/admin-portal-guide/promotions/create-a-promotion/' },
    { label: 'How do I edit a promotion?', to: '/docs/admin-portal-guide/promotions/edit-a-promotion/' },
  ],
  '/docs/playbooks/troubleshooting': [
    { label: 'Open troubleshooting playbook', to: '/docs/playbooks/troubleshooting' },
    { label: 'Check store guide', to: '/docs/admin-portal-guide/stores/' },
    { label: 'Check menu guide', to: '/docs/admin-portal-guide/menus/' },
  ],
  '/docs/playbooks/runbook': [
    { label: 'Read the Braze welcome reward canvas playbook', to: '/docs/playbooks/runbook' },
    { label: 'How do I create a promotion?', to: '/docs/admin-portal-guide/promotions/create-a-promotion/' },
    { label: 'View all playbooks', to: '/docs/playbooks/onboarding' },
  ],
};

const LOCALE_COPY = {
  'en-US': {
    assistantName: 'Atlas Assistant',
    online: 'AI inactive',
    expand: 'Expand',
    minimise: 'Minimise',
    close: 'Close',
    buttonTitle: 'Ask the Atlas Assistant',
    placeholder: 'AI chat coming soon',
    genericWelcome: 'Hi! I\'m the Atlas Assistant — your guide to the KFC Atlas Platform.',
    contextualWelcome: (topic) => `Hi! I'm the Atlas Assistant. I can see you're reading about **${topic}**.`,
    inactiveNotice: 'AI-powered chat is not active yet. It will be available once the API key is funded.\n\nFor now, use the quick links below to jump to the right article.',
    defaultSuggestions: [
      { label: 'Front-end overview', to: '/docs/frontend/overview' },
      { label: 'Admin Portal Guide', to: '/docs/admin-portal-guide/' },
      { label: 'Create Promotions playbook', to: '/docs/playbooks/onboarding' },
    ],
  },
  'ja-JP': {
    assistantName: 'Atlas Assistant',
    online: 'AI停止中',
    expand: '開く',
    minimise: '最小化',
    close: '閉じる',
    buttonTitle: 'Atlas Assistantに質問する',
    placeholder: 'AIチャットは準備中です',
    genericWelcome: 'こんにちは。Atlas Assistantです。KFC Atlas Platform のガイド役として案内します。',
    contextualWelcome: (topic) => `こんにちは。Atlas Assistantです。現在 **${topic}** をご覧になっています。`,
    inactiveNotice: 'AI チャットはまだ有効ではありません。API キーへの入金後に利用可能になります。\n\nそれまでは、下のクイックリンクから該当記事を確認してください。',
    defaultSuggestions: [
      { label: 'フロントエンド概要', to: '/docs/frontend/overview' },
      { label: 'Admin Portal Guide', to: '/docs/admin-portal-guide/' },
      { label: 'プロモーションを作成する', to: '/docs/playbooks/onboarding' },
    ],
  },
};

const JAPANESE_SUGGESTED_ARTICLES = {
  '/docs/frontend/customer-journey': [
    { label: '日本のロイヤルティについて読む', to: '/docs/frontend/customer-journey' },
    { label: '注文チャネルを確認する', to: '/docs/frontend/order-channels' },
    { label: '市場設定を見る', to: '/docs/frontend/market-configurations' },
  ],
  '/docs/frontend/order-channels': [
    { label: '注文チャネル詳細を読む', to: '/docs/frontend/order-channels' },
    { label: 'カスタマージャーニーを見る', to: '/docs/frontend/customer-journey' },
    { label: '市場設定を確認する', to: '/docs/frontend/market-configurations' },
  ],
  '/docs/frontend/customer-engagement-surveys': [
    { label: '顧客エンゲージメント調査を見る', to: '/docs/frontend/customer-engagement-surveys' },
    { label: 'Qualtricsページを読む', to: '/docs/frontend/customer-engagement-surveys/qualtrics' },
    { label: 'カスタマージャーニーを見る', to: '/docs/frontend/customer-journey' },
  ],
  '/docs/frontend/customer-engagement-surveys/qualtrics': [
    { label: 'Qualtricsページを読む', to: '/docs/frontend/customer-engagement-surveys/qualtrics' },
    { label: '顧客エンゲージメント調査を見る', to: '/docs/frontend/customer-engagement-surveys' },
    { label: '市場設定を確認する', to: '/docs/frontend/market-configurations' },
  ],
  '/docs/admin-portal-guide/stores/': [
    { label: '店舗を作成する', to: '/docs/admin-portal-guide/stores/create-a-store/' },
    { label: '店舗詳細を編集する', to: '/docs/admin-portal-guide/stores/edit-store-details/' },
    { label: '新しいメニューを割り当てる', to: '/docs/admin-portal-guide/stores/assign-new-menu/' },
  ],
  '/docs/admin-portal-guide/menus/': [
    { label: 'メニューを作成する', to: '/docs/admin-portal-guide/menus/create-a-menu/' },
    { label: 'メニューを割り当てる', to: '/docs/admin-portal-guide/menus/assign-a-menu/' },
    { label: 'メニューを公開する', to: '/docs/admin-portal-guide/menus/publish-a-menu/' },
  ],
  '/docs/playbooks/onboarding': [
    { label: 'KFCのプロモーション作成手順を読む', to: '/docs/playbooks/onboarding' },
    { label: 'BOGO レシピを見る', to: '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo' },
    { label: 'プロモーションをストアグループに割り当てる', to: '/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/' },
  ],
  '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo': [
    { label: 'BOGO レシピを読む', to: '/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo' },
    { label: 'プロモーションを作成する', to: '/docs/admin-portal-guide/promotions/create-a-promotion/' },
    { label: 'プロモーションを編集する', to: '/docs/admin-portal-guide/promotions/edit-a-promotion/' },
  ],
  '/docs/playbooks/troubleshooting': [
    { label: 'トラブル対応プレイブックを開く', to: '/docs/playbooks/troubleshooting' },
    { label: '店舗ガイドを見る', to: '/docs/admin-portal-guide/stores/' },
    { label: 'メニューガイドを見る', to: '/docs/admin-portal-guide/menus/' },
  ],
  '/docs/playbooks/runbook': [
    { label: 'Braze 歓迎特典キャンバスを読む', to: '/docs/playbooks/runbook' },
    { label: 'プロモーションを作成する', to: '/docs/admin-portal-guide/promotions/create-a-promotion/' },
    { label: 'プレイブック一覧を見る', to: '/docs/playbooks/onboarding' },
  ],
};

export default function AtlasChat() {
  const { i18n, siteConfig } = useDocusaurusContext();
  const chatLogoSrc = useBaseUrl('/img/atlas-chat-logo.svg');
  const { withBaseUrl } = useBaseUrlUtils();
  const locale = LOCALE_COPY[i18n.currentLocale] ? i18n.currentLocale : 'en-US';
  const copy = LOCALE_COPY[locale];
  const isJapanese = locale === 'ja-JP';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isMinimised, setIsMinimised] = useState(false);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const rawPath = location.pathname.replace(/\/$/, '') || '/';
  const basePath = (siteConfig.baseUrl || '/').replace(/\/$/, '');
  const pathWithoutBase =
    basePath && basePath !== '/' && rawPath.startsWith(basePath)
      ? (rawPath.slice(basePath.length) || '/')
      : rawPath;
  const localePrefix = `/${locale}`;
  const currentPath = pathWithoutBase.startsWith(localePrefix)
    ? (pathWithoutBase.slice(localePrefix.length) || '/')
    : pathWithoutBase;
  const normalizedPath = currentPath.endsWith('/docs/admin-portal-guide') ? '/docs/admin-portal-guide/' : currentPath;
  const hideOnRoute = normalizedPath === '/rna-sneak-peek';
  const pageContext = PAGE_CONTEXT[normalizedPath] || null;
  const suggestionsMap = isJapanese ? JAPANESE_SUGGESTED_ARTICLES : SUGGESTED_ARTICLES;
  const suggestions = suggestionsMap[normalizedPath] || copy.defaultSuggestions;

  // Reset to greeting when page changes
  useEffect(() => {
    setMessages([]);
  }, [currentPath]);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (hideOnRoute) {
    return null;
  }

  const getWelcomeMessage = () => {
    if (pageContext) {
      return `${copy.contextualWelcome(pageContext.split('—')[0].trim())}\n\n${copy.inactiveNotice}`;
    }
    return `${copy.genericWelcome}\n\n${copy.inactiveNotice}`;
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimised(false);
    if (messages.length === 0) {
      setMessages([{ role: 'assistant', content: getWelcomeMessage() }]);
    }
  };

  const navigateTo = (path) => {
    window.location.assign(withBaseUrl(path));
  };

  // ── Render markdown-lite (bold + line breaks)
  const renderContent = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part.split('\n').map((line, j) => (
        <React.Fragment key={`${i}-${j}`}>
          {j > 0 && <br />}
          {line}
        </React.Fragment>
      ));
    });
  };

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          title={copy.buttonTitle}
          style={{
            position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
            width: 56, height: 56, borderRadius: '50%',
            background: '#13100C', border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(19,16,12,0.28), 0 4px 14px rgba(228,0,43,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.2s, box-shadow 0.2s',
            overflow: 'hidden',
            padding: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = '0 10px 28px rgba(19,16,12,0.34), 0 6px 18px rgba(228,0,43,0.28)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(19,16,12,0.28), 0 4px 14px rgba(228,0,43,0.22)';
          }}
        >
          <img
            src={chatLogoSrc}
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
        </button>
      )}

      {/* ── CHAT WINDOW ── */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
          width: 380, maxWidth: 'calc(100vw - 40px)',
          background: 'white',
          borderRadius: 14,
          boxShadow: '0 8px 40px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.1)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.08)',
          height: isMinimised ? 'auto' : 520,
          maxHeight: 'calc(100vh - 56px)',
          fontFamily: "'DM Sans', system-ui, sans-serif",
          transition: 'height 0.2s ease',
        }}>

          {/* Header */}
          <div style={{
            background: '#13100C',
            padding: '14px 16px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: '#13100C',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                overflow: 'hidden',
              }}>
                <img
                  src={chatLogoSrc}
                  alt=""
                  aria-hidden="true"
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.2 }}>{copy.assistantName}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b' }} />
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem' }}>{copy.online}</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                onClick={() => setIsMinimised(!isMinimised)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: '4px 6px', borderRadius: 4, fontSize: '1rem', lineHeight: 1 }}
                title={isMinimised ? copy.expand : copy.minimise}
              >
                {isMinimised ? '▲' : '▼'}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: '4px 6px', borderRadius: 4, fontSize: '1.1rem', lineHeight: 1 }}
                title={copy.close}
              >
                ×
              </button>
            </div>
          </div>

          {!isMinimised && (
            <>
              {/* Messages */}
              <div style={{
                flex: 1, overflowY: 'auto', padding: '16px 14px',
                display: 'flex', flexDirection: 'column', gap: 12,
                background: '#faf8f5',
              }}>
                {messages.map((msg, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  }}>
                    <div style={{
                      maxWidth: '85%',
                      padding: '10px 13px',
                      borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                      background: msg.role === 'user' ? '#E4002B' : 'white',
                      color: msg.role === 'user' ? 'white' : '#2a2018',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                      border: msg.role === 'assistant' ? '1px solid #ece6dc' : 'none',
                    }}>
                      {renderContent(msg.content)}
                    </div>
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions (shown only at start) */}
              {messages.length <= 1 && (
                <div style={{
                  padding: '8px 14px 4px',
                  borderTop: '1px solid #ece6dc',
                  background: 'white',
                  display: 'flex', flexWrap: 'wrap', gap: 6,
                }}>
                  {suggestions.map((suggestion, i) => (
                    <button key={i} type="button" onClick={() => navigateTo(suggestion.to)} style={{
                      background: 'rgba(228,0,43,0.06)', border: '1px solid rgba(228,0,43,0.18)',
                      borderRadius: 20, padding: '5px 11px', fontSize: '0.75rem',
                      color: '#c20025', cursor: 'pointer', fontFamily: 'inherit',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(228,0,43,0.12)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(228,0,43,0.06)'}
                    >
                      {suggestion.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Inactive input state */}
              <div style={{
                padding: '10px 14px 14px',
                borderTop: '1px solid #ece6dc',
                background: 'white',
                display: 'flex', gap: 8, alignItems: 'flex-end',
                flexShrink: 0,
              }}>
                <div style={{
                  flex: 1, border: '1.5px solid #ece6dc', borderRadius: 8,
                  padding: '10px 12px', fontSize: '0.84rem', fontFamily: 'inherit',
                  lineHeight: 1.5, color: '#8a7f76', background: '#f5f2ee',
                }}>
                  {copy.placeholder}
                </div>
                <div style={{
                  width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                  background: '#ddd', display: 'flex', alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
