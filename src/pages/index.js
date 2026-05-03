import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import SearchBox from '@site/src/components/SearchBox';
import styles from './index.module.css';

const HOME_CONTENT = {
  'en-US': {
    description: 'KFC Atlas Platform Wiki',
    badge: 'Atlas Platform · Wiki',
    titleLead: 'Atlas.',
    titleAccent: 'Done right.',
    summary:
      'Everything you need to launch, operate, and scale Atlas — from customer experience to restaurant operations.',
    heroSearchPlaceholder: 'Search guides, articles, and headings',
    heroPrimaryCta: 'Start with the Front-end Guide →',
    heroSecondaryCta: 'Start with the Byte Portal Guide →',
    heroCapabilitiesCta: 'Explore Byte Capabilities →',
    sectionEyebrow: 'Three sections',
    sectionTitle: 'Built for everyone who operates the platform',
    prototypeCardEyebrow: 'Interactive preview',
    prototypeCardTitle: 'Atlas Peek',
    prototypeCardBody:
      'Explore a stateful multilingual customer journey prototype that behaves like a mini app instead of a linear slideshow.',
    prototypeCardCta: 'Open the sneak peek',
    marketsLabel: 'Markets',
    marketsSublabel: 'Onboarding — rolling out through end of 2026',
    upcomingMarketsLabel: 'Coming after',
    upcomingMarkets: [
      { flagCode: 'ca', name: 'Canada' },
      { flagCode: 'fr', name: 'France' },
      { flagCode: 'de', name: 'Germany' },
      { flagCode: 'es', name: 'Spain' },
      { flagCode: 'th', name: 'Thailand' },
    ],
    stats: [
      { value: 2000, suffix: '+', label: 'Stores', sub: 'Stores Onboard' },
      { value: '3', label: 'Core Modules', subItems: ['Front-End', 'Byte Commerce', 'Byte Connect'] },
      { value: '1', label: 'Platform', sub: 'Atlas by KFC Global - Brand Experience Team' },
    ],
    sections: [
      {
        emoji: '🖥️',
        label: 'Front-end Guide',
        title: 'What your customers experience',
        desc: 'Understand the end-to-end ordering journey — from discovery through checkout. Covers market-specific configurations for loyalty, promotions, and order channels in Australia and future rollout markets.',
        link: '/docs/frontend/overview',
        cta: 'Read the guide',
        items: ['Customer Journey', 'Order Channels', 'Customer Engagement Surveys'],
      },
      {
        emoji: '⚙️',
        label: 'Admin Portal Guide',
        title: 'How to operate the platform',
        desc: 'Step-by-step guidance for restaurant and regional teams on using the Byte Commerce Admin Portal — restaurant setup, menu management, and access controls.',
        link: '/docs/admin-portal-guide/',
        cta: 'Read the guide',
        items: ['Restaurant Profile Setup', 'Menu Management', 'Users & Permissions'],
      },
      {
        emoji: '📋',
        label: 'Playbooks',
        title: 'KFC-ready campaign playbooks',
        desc: 'Operational playbooks for campaign execution — from creating promotions in Atlas to launching lifecycle rewards in Braze for KFC customers.',
        link: '/docs/playbooks/onboarding',
        cta: 'View playbooks',
        items: ['Create Promotions', 'Buy 1 Get 1 Promo', 'Braze Welcome Reward Canvas'],
      },
    ],
    markets: [
      { flagCode: 'au', name: 'Australia' },
    ],
  },
};

function formatStatValue(stat, locale) {
  if (typeof stat.value === 'number') {
    return `${stat.value.toLocaleString(locale)}${stat.suffix ?? ''}`;
  }

  return `${stat.value}${stat.suffix ?? ''}`;
}

function localeClass(baseClass) {
  return baseClass;
}

function MarketFlag({ flagCode, name, compact = false }) {
  const flagSrc = useBaseUrl(`/img/flags/${flagCode}.svg`);
  const frameClassName = compact ? styles.upcomingMarketFlag : styles.marketFlag;
  const imageClassName = compact ? styles.upcomingMarketFlagImage : styles.marketFlagImage;

  return (
    <div className={frameClassName}>
      <img className={imageClassName} src={flagSrc} alt={`${name} flag`} loading="lazy" />
    </div>
  );
}

export default function Home() {
  const locale = 'en-US';
  const content = HOME_CONTENT[locale];
  const heroVideoSrc = useBaseUrl('/video/colonel-sanders-cooking-chicken.mp4');

  return (
    <Layout title="Home" description={content.description}>
      <div className={styles.hero}>
        <div className={styles.heroTexture} />
        <div className={styles.heroMedia} aria-hidden="true">
          <video className={styles.heroVideo} autoPlay muted loop playsInline preload="metadata">
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
          <div className={styles.heroMediaOverlay} />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <div className={styles.badgeDot} />
              <span className={localeClass(styles.badgeText)}>{content.badge}</span>
            </div>

            <h1 className={localeClass(styles.heroTitle)}>
              {content.titleLead}
              <br />
              <span className={styles.heroTitleAccent}>{content.titleAccent}</span>
            </h1>

            <p className={localeClass(styles.heroSummary)}>{content.summary}</p>

            <div className={styles.searchWrap}>
              <SearchBox
                className="hero-search"
                inputClassName="hero-search__input"
                dropdownClassName="hero-search__dropdown"
                resultClassName="hero-search__result"
                titleClassName="hero-search__title"
                metaClassName="hero-search__meta"
                emptyClassName="hero-search__empty"
                placeholder={content.heroSearchPlaceholder}
              />
            </div>

            <div className={styles.heroActions}>
              <Link to="/docs/frontend/overview" className={`${styles.button} ${styles.buttonPrimary}`}>
                {content.heroPrimaryCta}
              </Link>
              <Link to="/docs/admin-portal-guide/" className={`${styles.button} ${styles.buttonSecondary}`}>
                {content.heroSecondaryCta}
              </Link>
              <Link to="/docs/byte-capabilities/" className={`${styles.button} ${styles.buttonTertiary}`}>
                {content.heroCapabilitiesCta}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        {content.stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statValue}>{formatStatValue(stat, locale)}</div>
            <div className={localeClass(styles.statLabel)}>{stat.label}</div>
            <div className={styles.statSub}>
              {stat.subItems ? (
                <span className={styles.statSubList}>
                  {stat.subItems.map((item) => (
                    <span key={item} className={styles.statSubItem}>
                      {item}
                    </span>
                  ))}
                </span>
              ) : (
                stat.sub
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.marketsSection}>
        <div className={styles.prototypeCallout}>
          <div className={localeClass(styles.prototypeEyebrow)}>{content.prototypeCardEyebrow}</div>
          <h2 className={localeClass(styles.prototypeTitle)}>{content.prototypeCardTitle}</h2>
          <p className={styles.prototypeBody}>{content.prototypeCardBody}</p>
          <Link to="/sneak-peek" className={`${styles.button} ${styles.prototypeButton}`}>
            {content.prototypeCardCta} →
          </Link>
        </div>
        <div className={localeClass(styles.sectionLabel)}>{content.marketsLabel}</div>
        <div className={styles.marketsSublabel}>{content.marketsSublabel}</div>
        <div className={styles.marketsGrid}>
          {content.markets.map((market) => (
            <div key={market.name} className={styles.marketCard}>
              <MarketFlag flagCode={market.flagCode} name={market.name} />
              <div className={styles.marketName}>{market.name}</div>
            </div>
          ))}
        </div>
        <div className={styles.upcomingDivider} />
        <div className={styles.upcomingMarketsLabel}>{content.upcomingMarketsLabel}</div>
        <div className={styles.upcomingMarketsGrid}>
          {content.upcomingMarkets.map((market) => (
            <div key={market.name} className={styles.upcomingMarketCard}>
              <MarketFlag flagCode={market.flagCode} name={market.name} compact />
              <div className={styles.upcomingMarketName}>{market.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sectionsSection}>
        <div className={styles.sectionsInner}>
          <div className={styles.sectionHeader}>
            <div className={localeClass(styles.sectionLabel)}>{content.sectionEyebrow}</div>
            <h2 className={localeClass(styles.sectionTitle)}>{content.sectionTitle}</h2>
          </div>

          <div className={styles.sectionGrid}>
            {content.sections.map((section) => (
              <div key={section.label} className={styles.sectionCard}>
                <div className={styles.sectionEmoji}>{section.emoji}</div>
                <div className={localeClass(styles.cardLabel)}>{section.label}</div>
                <h3 className={localeClass(styles.cardTitle)}>{section.title}</h3>
                <p className={styles.cardDescription}>{section.desc}</p>
                <ul className={styles.cardList}>
                  {section.items.map((item) => (
                    <li key={item} className={styles.cardListItem}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={section.link} className={`${styles.button} ${styles.cardButton}`}>
                  {section.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
