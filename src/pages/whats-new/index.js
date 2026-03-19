import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const CONTENT = {
  'en-US': {
    title: "What's New",
    description: 'See the latest Atlas launches, improvements, and upcoming capabilities.',
    eyebrow: "What's new in Atlas",
    heroTitle: 'Discover what shipped',
    heroAccent: 'and why it matters',
    heroBody:
      'A dedicated launch page for helping markets quickly see the latest platform capabilities, understand the business problem behind each launch, and decide where each feature fits in day-to-day operations.',
    metrics: [
      { value: '5', label: 'trend-led feature launches highlighted right now' },
      { value: '3', label: 'coming-soon themes with clear rollout intent' },
    ],
    roadmapTitle: 'Roadmap Snapshot',
    roadmapLabel: 'Now / Next / Later',
    roadmap: [
      { title: 'Now', items: ['Guest Checkout OTP', 'Admin Portal Bulk Editing'] },
      { title: 'Next', items: ['Address Autocomplete', 'Promotion Eligibility API'] },
      { title: 'Later', items: ['Menu Personalization', 'Smart Recommendations'] },
    ],
    featuredTitle: 'Featured Launch',
    featuredLabel: 'High impact',
    featured: {
      kicker: 'Starred launch',
      note: 'KFC-branded launch story with richer visuals for higher scan appeal',
      name: 'Passwordless Authentication',
      body:
        'Removes password dependency and enables OTP login for faster, more secure customer authentication, especially in high-friction mobile flows.',
      impact: 'Higher login conversion and reduced password reset friction for customers returning to order.',
      fit: 'Markets focused on conversion, repeat ordering, and simplifying authentication support overhead.',
      problem: 'Passwords create login abandonment and customer support friction during checkout and re-engagement.',
      how: 'Enable OTP-based authentication and configure the login experience for supported flows.',
      market: 'Teams prioritizing reduced friction in sign-in and better mobile conversion performance.',
      cta: 'Read Product Guide',
      impactLabel: 'Expected impact',
      fitLabel: 'Where it fits',
      problemLabel: 'Business problem',
      howLabel: 'How to use it',
      marketLabel: 'Best-fit markets',
    },
    statusNewLabel: 'New',
    statusRollingLabel: 'Rolling Out',
    bestForLabel: 'Best for',
    cardCta: 'Read Product Guide',
    newFeaturesTitle: 'New Features',
    newFeaturesLabel: 'Adoption-focused cards',
    newFeatures: [
      {
        status: 'new',
        name: 'AI Menu Personalization',
        body: 'Reorders menu recommendations based on past orders, time of day, and likely next-best items.',
        tags: ['Personalization', 'Revenue lift'],
        fit: 'Markets trying to increase conversion, upsell attach rate, and repeat ordering.',
      },
      {
        status: 'new',
        name: 'One-Tap Wallet Checkout',
        body: 'Accelerates checkout with Apple Pay, Google Pay, and saved-wallet flows tuned for mobile conversion.',
        tags: ['Checkout', 'Mobile-first'],
        fit: 'Markets where checkout speed and reduced payment friction directly affect order completion.',
      },
      {
        status: 'rolling',
        name: 'Conversational Shopping Assistant',
        body: 'Guides customers to meals, bundles, and offers through natural-language prompts instead of rigid navigation.',
        tags: ['AI discovery', 'Engagement'],
        fit: 'Markets exploring Gen Z-friendly discovery and faster path-to-basket experiences.',
      },
      {
        status: 'rolling',
        name: 'Passwordless + OTP Identity',
        body: 'Combines passwordless sign-in with guest-order verification to reduce fraud and remove login friction.',
        tags: ['Identity', 'Fraud reduction'],
        fit: 'Markets balancing high-volume campaigns with trust, security, and repeat-user convenience.',
      },
      {
        status: 'new',
        name: 'Loyalty Wallet and Offer Hub',
        body: 'Centralizes points, rewards, and personalized offers in one mobile-friendly wallet experience.',
        tags: ['Loyalty', 'Retention'],
        fit: 'Markets trying to drive more repeat purchase behavior and clearer customer value exchange.',
      },
    ],
    recentTitle: 'Recent Improvements',
    recentLabel: 'Smaller shipped wins',
    recent: [
      {
        title: 'Promotion API Enhancement',
        items: ['Cleaner campaign rule support', 'Better extensibility for future promo logic'],
      },
      {
        title: 'Checkout Address Autocomplete',
        items: ['Fewer address entry errors', 'Faster delivery checkout flow'],
      },
      {
        title: 'Admin Portal Bulk Configuration',
        items: ['Reduced repeated manual updates', 'Faster operational setup across stores'],
      },
    ],
    comingTitle: 'Coming Soon',
    comingLabel: 'High-confidence upcoming work',
    coming: [
      {
        status: 'planned',
        statusLabel: 'Planned',
        title: 'Menu Personalization',
        body: 'Customers will see more relevant menu items based on past ordering behavior and repeat-purchase patterns.',
        tags: ['Growth', 'Personalization'],
      },
      {
        status: 'planned',
        statusLabel: 'In Development',
        title: 'Delivery ETA Improvements',
        body: 'More accurate delivery time predictions to set better expectations and reduce customer uncertainty.',
        tags: ['Operations', 'Delivery'],
      },
      {
        status: 'planned',
        statusLabel: 'Planned',
        title: 'Localization Enhancements',
        body: 'Improved language support and stronger market-specific controls for regional teams managing local needs.',
        tags: ['Market enablement', 'Localization'],
      },
    ],
    note:
      'This page is the production entry point for launch communication. Some examples remain illustrative, but the surface is now wired into the real app and localized routing.',
  },
  'ja-JP': {
    title: '最新情報',
    description: 'Atlas の最新リリース、改善、今後の機能をまとめて確認できます。',
    eyebrow: 'Atlas の最新情報',
    heroTitle: '何がリリースされ',
    heroAccent: 'なぜ重要かを知る',
    heroBody:
      '市場チームが最新のプラットフォーム機能をすばやく把握し、各リリースがどんな業務課題を解決するのか、日々の運用でどこに当てはまるのかを理解するための専用ページです。',
    metrics: [
      { value: '5', label: '注目中のトレンド機能を掲載' },
      { value: '3', label: '明確な意図を持つ今後のテーマ' },
    ],
    roadmapTitle: 'ロードマップ概要',
    roadmapLabel: 'Now / Next / Later',
    roadmap: [
      { title: '現在', items: ['ゲストチェックアウト OTP', 'Admin Portal 一括編集'] },
      { title: '次', items: ['住所オートコンプリート', 'Promotion Eligibility API'] },
      { title: '今後', items: ['メニューパーソナライズ', 'スマートレコメンド'] },
    ],
    featuredTitle: '注目リリース',
    featuredLabel: '高インパクト',
    featured: {
      kicker: 'Starred launch',
      note: 'KFC ブランドの見せ方で、より視認性の高いローンチストーリーを表現',
      name: 'パスワードレス認証',
      body:
        'パスワード依存をなくし、OTP ログインにより、より速く安全な顧客認証を実現します。特にモバイルの高離脱フローに有効です。',
      impact: 'ログイン転換率の向上と、パスワード再設定による摩擦の削減が期待できます。',
      fit: '転換率改善、再注文増加、認証サポート負荷の軽減を重視する市場に適しています。',
      problem: 'パスワードはログイン離脱や、チェックアウト再訪時のサポート負荷を生みます。',
      how: 'OTP ベースの認証を有効化し、対象フローでログイン体験を設定します。',
      market: 'サインイン摩擦を下げ、モバイル転換率を高めたいチーム向けです。',
      cta: 'プロダクトガイドを見る',
      impactLabel: '期待される効果',
      fitLabel: 'どこで活きるか',
      problemLabel: '解決したい課題',
      howLabel: '使い方',
      marketLabel: '向いている市場',
    },
    statusNewLabel: '新機能',
    statusRollingLabel: '展開中',
    bestForLabel: '向いているケース',
    cardCta: 'プロダクトガイドを見る',
    newFeaturesTitle: '新機能',
    newFeaturesLabel: '導入促進向けカード',
    newFeatures: [
      {
        status: 'new',
        name: 'AI メニューパーソナライズ',
        body: '過去注文、時間帯、次に買われやすい商品をもとにおすすめ順を最適化します。',
        tags: ['パーソナライズ', '売上向上'],
        fit: 'CVR、アップセル率、再注文率を高めたい市場に適しています。',
      },
      {
        status: 'new',
        name: 'ワンタップ Wallet Checkout',
        body: 'Apple Pay、Google Pay、保存済みウォレットにより、モバイルチェックアウトを高速化します。',
        tags: ['チェックアウト', 'モバイル重視'],
        fit: '支払い摩擦の削減が注文完了率に直結する市場に適しています。',
      },
      {
        status: 'rolling',
        name: '会話型ショッピングアシスタント',
        body: '固定ナビゲーションではなく、自然言語の案内で商品、セット、オファーへ導きます。',
        tags: ['AI 発見', 'エンゲージメント'],
        fit: 'Gen Z 向けの発見体験や、より速いカゴ投入を試したい市場に適しています。',
      },
      {
        status: 'rolling',
        name: 'パスワードレス + OTP ID',
        body: 'パスワードレスサインインとゲスト注文認証を組み合わせ、詐欺を減らしつつログイン摩擦を削減します。',
        tags: ['ID', '不正対策'],
        fit: '大型キャンペーン時でも信頼性と利便性を両立したい市場に適しています。',
      },
      {
        status: 'new',
        name: 'Loyalty Wallet と Offer Hub',
        body: 'ポイント、リワード、パーソナライズオファーをモバイル中心の 1 つの体験に集約します。',
        tags: ['ロイヤルティ', '継続利用'],
        fit: '再購入を増やし、顧客価値をわかりやすく見せたい市場に適しています。',
      },
    ],
    recentTitle: '最近の改善',
    recentLabel: '小さくても効く改善',
    recent: [
      {
        title: 'Promotion API 強化',
        items: ['キャンペーン条件の扱いを整理', '今後のプロモロジック拡張に対応しやすく改善'],
      },
      {
        title: '住所オートコンプリート',
        items: ['住所入力ミスを削減', 'デリバリーチェックアウトを高速化'],
      },
      {
        title: 'Admin Portal 一括設定',
        items: ['繰り返し更新の手間を削減', '複数店舗での運用設定をより迅速に実施'],
      },
    ],
    comingTitle: '近日公開',
    comingLabel: '確度の高い今後の機能',
    coming: [
      {
        status: 'planned',
        statusLabel: 'Planned',
        title: 'メニューパーソナライズ',
        body: '過去の注文傾向をもとに、より関連性の高いメニュー項目を表示します。',
        tags: ['成長', 'パーソナライズ'],
      },
      {
        status: 'planned',
        statusLabel: 'In Development',
        title: '配達 ETA 改善',
        body: '配達時間予測をより正確にし、顧客の期待値を適切に設定します。',
        tags: ['運用', 'デリバリー'],
      },
      {
        status: 'planned',
        statusLabel: 'Planned',
        title: 'ローカライズ強化',
        body: '地域チーム向けに、より強い言語対応と市場別コントロールを提供します。',
        tags: ['市場展開', 'ローカライズ'],
      },
    ],
    note:
      'このページは最新情報の本番導線です。掲載内容の一部は例示を含みますが、実際のアプリ導線とローカライズ済みルーティングに接続されています。',
  },
};

function statusClass(status) {
  if (status === 'rolling') return `${styles.status} ${styles.statusRolling}`;
  if (status === 'planned') return `${styles.status} ${styles.statusPlanned}`;
  return `${styles.status} ${styles.statusNew}`;
}

function KfcBadge() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="64" height="64" rx="18" fill="#ffffff" />
      <rect x="0" y="0" width="16" height="64" fill="#E4002B" />
      <rect x="24" y="0" width="16" height="64" fill="#E4002B" />
      <circle cx="44" cy="20" r="8" fill="#17120E" />
      <path d="M42 30c-9 0-14 5-14 10v4h24v-4c0-5-5-10-10-10Z" fill="#17120E" />
      <path d="M28 46h24v6H28z" fill="#17120E" />
    </svg>
  );
}

function LaunchVisual() {
  return (
    <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="phoneBgReal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#170F0F" />
          <stop offset="100%" stopColor="#3A0D16" />
        </linearGradient>
        <clipPath id="overlayClip">
          <rect x="280" y="58" width="280" height="184" rx="24" />
        </clipPath>
      </defs>
      <rect width="640" height="300" fill="url(#phoneBgReal)" />
      <circle cx="570" cy="46" r="90" fill="rgba(228,0,43,0.18)" />
      <rect x="52" y="30" width="180" height="240" rx="28" fill="#0D0A09" stroke="rgba(255,255,255,0.16)" />
      <rect x="68" y="54" width="148" height="188" rx="20" fill="#FFF7F3" />
      <rect x="84" y="70" width="116" height="18" rx="9" fill="#E4002B" />
      <rect x="84" y="102" width="116" height="32" rx="16" fill="#17120E" />
      <text x="142" y="123" textAnchor="middle" fill="#FFF7F3" fontSize="14" fontFamily="DM Sans, sans-serif">Send OTP</text>
      <rect x="84" y="148" width="116" height="22" rx="11" fill="#F2E6DD" />
      <rect x="84" y="178" width="90" height="22" rx="11" fill="#F2E6DD" />
      <g clipPath="url(#overlayClip)">
        <rect x="280" y="58" width="280" height="184" rx="24" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" />
        <text x="308" y="100" fill="#FFF8F2" fontSize="20" fontFamily="Bebas Neue, sans-serif">Launch Story</text>
        <text x="308" y="128" fill="rgba(255,248,242,0.82)" fontSize="13" fontFamily="DM Sans, sans-serif">Faster sign-in for</text>
        <text x="308" y="146" fill="rgba(255,248,242,0.82)" fontSize="13" fontFamily="DM Sans, sans-serif">high-intent customers</text>
        <text x="308" y="170" fill="rgba(255,248,242,0.62)" fontSize="12" fontFamily="DM Sans, sans-serif">OTP-first login reduces password friction</text>
        <text x="308" y="190" fill="rgba(255,248,242,0.62)" fontSize="12" fontFamily="DM Sans, sans-serif">and helps markets recover more repeat users.</text>
      </g>
    </svg>
  );
}

export default function WhatsNewPage() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const content = CONTENT[currentLocale] ?? CONTENT['en-US'];
  const releaseNotesUrl = useBaseUrl('/docs/release-notes');

  return (
    <Layout title={content.title} description={content.description}>
      <main className={styles.page}>
        <div className={styles.shell}>
          <div className={styles.content}>
            <section className={styles.hero}>
              <div className={`${styles.card} ${styles.heroCard}`}>
                <p className={styles.eyebrow}>{content.eyebrow}</p>
                <h1 className={styles.heroTitle}>
                  {content.heroTitle} <span className={styles.heroAccent}>{content.heroAccent}</span>
                </h1>
                <p className={styles.heroBody}>{content.heroBody}</p>
              </div>

              <div className={styles.heroMetrics}>
                {content.metrics.map((metric) => (
                  <div className={styles.metricCard} key={metric.label}>
                    <strong className={styles.metricValue}>{metric.value}</strong>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>{content.roadmapTitle}</h2>
                <span className={styles.label}>{content.roadmapLabel}</span>
              </div>
              <div className={`${styles.card} ${styles.roadmap}`}>
                {content.roadmap.map((column) => (
                  <div className={styles.roadmapColumn} key={column.title}>
                    <h3>{column.title}</h3>
                    <ul>
                      {column.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>{content.featuredTitle}</h2>
                <span className={styles.label}>{content.featuredLabel}</span>
              </div>
              <div className={`${styles.card} ${styles.featured}`}>
                <div className={styles.featuredMain}>
                  <div className={styles.kicker}>{content.featured.kicker}</div>
                  <div className={styles.brandStrip}>
                    <div className={styles.logoBadge}>
                      <KfcBadge />
                    </div>
                    <div className={styles.brandNote}>{content.featured.note}</div>
                  </div>
                  <h3>{content.featured.name}</h3>
                  <p>{content.featured.body}</p>
                  <div className={styles.impactList}>
                    <div className={styles.impactItem}>
                      <strong>{content.featured.impactLabel}</strong>
                      <span>{content.featured.impact}</span>
                    </div>
                    <div className={styles.impactItem}>
                      <strong>{content.featured.fitLabel}</strong>
                      <span>{content.featured.fit}</span>
                    </div>
                  </div>
                  <span className={styles.buttonDisabled} title="Coming soon">
                    Coming Soon
                  </span>
                  <div className={styles.visualStack}>
                    <div className={styles.visualCard}>
                      <LaunchVisual />
                    </div>
                  </div>
                </div>

                <div className={styles.detailList}>
                  <div className={styles.detailItem}>
                    <strong>{content.featured.problemLabel}</strong>
                    <span>{content.featured.problem}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>{content.featured.howLabel}</strong>
                    <span>{content.featured.how}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <strong>{content.featured.marketLabel}</strong>
                    <span>{content.featured.market}</span>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>{content.newFeaturesTitle}</h2>
                <span className={styles.label}>{content.newFeaturesLabel}</span>
              </div>
              <div className={styles.grid}>
                {content.newFeatures.map((feature) => (
                  <article className={`${styles.card} ${styles.featureCard}`} key={feature.name}>
                    <div className={statusClass(feature.status)}>
                      {feature.status === 'rolling' ? content.statusRollingLabel : content.statusNewLabel}
                    </div>
                    <h3>{feature.name}</h3>
                    <p>{feature.body}</p>
                    <div className={styles.meta}>
                      {feature.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <p><strong>{content.bestForLabel}:</strong> {feature.fit}</p>
                    <span className={styles.buttonDisabled} title="Coming soon">Coming Soon</span>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>{content.recentTitle}</h2>
                <span className={styles.label}>{content.recentLabel}</span>
              </div>
              <div className={styles.simpleList}>
                {content.recent.map((item) => (
                  <div className={styles.listBox} key={item.title}>
                    <h3>{item.title}</h3>
                    <ul>
                      {item.items.map((subItem) => (
                        <li key={subItem}>{subItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>{content.comingTitle}</h2>
                <span className={styles.label}>{content.comingLabel}</span>
              </div>
              <div className={styles.comingSoon}>
                {content.coming.map((item) => (
                  <article className={`${styles.card} ${styles.comingCard}`} key={item.title}>
                    <div className={statusClass(item.status)}>{item.statusLabel}</div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div className={styles.meta}>
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className={styles.footerNote}>{content.note}</div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
