import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchBox from '@site/src/components/SearchBox';

const HOME_CONTENT = {
  'en-US': {
    description: 'KFC Atlas Platform Knowledge Center',
    badge: 'Atlas Platform · Knowledge Center',
    titleLead: 'The secret recipe for',
    titleAccent: 'running the platform.',
    summary:
      'Your complete guide to the KFC Atlas Platform — from the customer ordering experience to day-to-day restaurant operations across Japan and Australia.',
    heroSearchPlaceholder: 'Search guides, articles, and headings',
    heroPrimaryCta: 'Start with the Front-end Guide →',
    heroSecondaryCta: 'Start with the Admin Portal Guide →',
    sectionEyebrow: 'Three sections',
    sectionTitle: 'Built for everyone who operates the platform',
    marketsLabel: 'Markets',
    stats: [
      { value: 'stores', label: 'Stores', sub: 'Stores Onboard' },
      { value: '3', label: 'Core Modules', sub: 'Front-End · Admin · Martech' },
      { value: '1', label: 'Platform', sub: 'Atlas by KFC Global' },
    ],
    sections: [
      {
        emoji: '🖥️',
        label: 'Front-end Guide',
        title: 'What your customers experience',
        desc: 'Understand the end-to-end ordering journey — from discovery through checkout. Covers market-specific configurations for loyalty, promotions, and order channels in Japan and Australia.',
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
      { flag: '🇯🇵', name: 'Japan' },
      { flag: '🇦🇺', name: 'Australia' },
    ],
  },
  'ja-JP': {
    description: 'KFC Atlas Platform Knowledge Center',
    badge: 'Atlas Platform ・ Knowledge Center',
    titleLead: 'プラットフォーム運用に必要な',
    titleAccent: 'すべてを、ひとつに。',
    summary:
      'KFC Atlas Platformの総合ガイドです。お客様の注文体験から、日々の店舗運営まで、日本とオーストラリアの運用情報をまとめて確認できます。',
    heroSearchPlaceholder: 'ガイド、記事、見出しを検索',
    heroPrimaryCta: 'フロントエンドガイドから始める →',
    heroSecondaryCta: 'Admin Portal Guideから始める →',
    sectionEyebrow: '3つのセクション',
    sectionTitle: 'プラットフォームを運用するすべての人のために設計されています',
    marketsLabel: '市場',
    stats: [
      { value: 'stores', label: '店舗数', sub: '導入済み店舗' },
      { value: '3', label: '主要モジュール', sub: 'フロントエンド ・ Admin ・ Martech' },
      { value: '1', label: 'プラットフォーム', sub: 'Atlas by KFC Global' },
    ],
    sections: [
      {
        emoji: '🖥️',
        label: 'フロントエンドガイド',
        title: 'お客様が体験する内容',
        desc: '発見からチェックアウトまで、注文体験全体を理解できます。日本とオーストラリアにおけるロイヤルティ、プロモーション、注文チャネルの市場別設定もカバーしています。',
        link: '/docs/frontend/overview',
        cta: 'ガイドを見る',
        items: ['カスタマージャーニー', '注文チャネル', '顧客エンゲージメント調査'],
      },
      {
        emoji: '⚙️',
        label: 'Admin Portal Guide',
        title: 'プラットフォームの運用方法',
        desc: 'Byte Commerce Admin Portalの利用方法を、店舗チームと地域チーム向けに手順で案内します。店舗設定、メニュー管理、アクセス権限を確認できます。',
        link: '/docs/admin-portal-guide/',
        cta: 'ガイドを見る',
        items: ['店舗プロフィール設定', 'メニュー管理', 'ユーザーと権限'],
      },
      {
        emoji: '📋',
        label: 'プレイブック',
        title: 'KFC向けキャンペーン実行プレイブック',
        desc: 'Atlasでのプロモーション作成から、Brazeでのライフサイクル施策配信まで、KFC向けの実務フローをまとめたプレイブックです。',
        link: '/docs/playbooks/onboarding',
        cta: 'プレイブックを見る',
        items: ['プロモーションを作成する', 'Buy 1 Get 1 プロモ', 'Braze歓迎特典キャンバス'],
      },
    ],
    markets: [
      { flag: '🇯🇵', name: '日本' },
      { flag: '🇦🇺', name: 'オーストラリア' },
    ],
  },
};

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const locale = HOME_CONTENT[i18n.currentLocale] ? i18n.currentLocale : 'en-US';
  const content = HOME_CONTENT[locale];
  const isJapanese = locale === 'ja-JP';
  const [storeCount, setStoreCount] = useState(2000);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setStoreCount((currentCount) => currentCount + 1);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <Layout title="Home" description={content.description}>

      {/* ── HERO ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0705 0%, #1a0a08 50%, #0f0705 100%)',
        padding: '80px 24px 64px',
        textAlign: 'center',
        borderBottom: '3px solid #E4002B',
        position: 'relative',
        overflow: 'visible',
      }}>
        {/* Background texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(228,0,43,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(228,0,43,0.05) 0%, transparent 40%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(228,0,43,0.15)', border: '1px solid rgba(228,0,43,0.3)',
            borderRadius: 20, padding: '5px 16px', marginBottom: 28, flexWrap: 'wrap', justifyContent: 'center',
          }}>
            <div style={{ width: 6, height: 6, background: '#E4002B', borderRadius: '50%' }} />
            <span style={{ color: '#E4002B', fontSize: 11, fontWeight: 700, letterSpacing: isJapanese ? 1 : 2, textTransform: isJapanese ? 'none' : 'uppercase' }}>
              {content.badge}
            </span>
          </div>

          <h1 style={{
            color: 'white', fontSize: isJapanese ? 'clamp(2rem, 4.6vw, 3.2rem)' : 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: 900, margin: '0 0 16px',
            lineHeight: isJapanese ? 1.25 : 1.1, letterSpacing: isJapanese ? 0 : '-0.5px',
          }}>
            {content.titleLead}<br />
            <span style={{ color: '#E4002B' }}>{content.titleAccent}</span>
          </h1>

          <p style={{
            color: '#999', fontSize: isJapanese ? '1rem' : '1.1rem', maxWidth: 640,
            margin: '0 auto 28px', lineHeight: 1.7,
          }}>
            {content.summary}
          </p>

          <div style={{ maxWidth: 720, margin: '0 auto 30px', position: 'relative', zIndex: 2 }}>
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

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/docs/frontend/overview" style={{
              background: '#E4002B', color: 'white', padding: '13px 28px',
              borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', textAlign: 'center',
            }}>
              {content.heroPrimaryCta}
            </Link>
            <Link to="/docs/admin-portal-guide/" style={{
              background: 'white', color: '#13100C', padding: '13px 28px',
              borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem',
              border: '1.5px solid white', textAlign: 'center',
            }}>
              {content.heroSecondaryCta}
            </Link>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{
        background: '#E4002B', padding: '20px 24px',
        display: 'flex', justifyContent: 'center', gap: '64px', flexWrap: 'wrap',
      }}>
        {content.stats.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ color: 'white', fontSize: '1.6rem', fontWeight: 900, lineHeight: 1 }}>
              {s.value === 'stores' ? `${storeCount.toLocaleString(locale)}+` : s.value}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: isJapanese ? 0 : 1, textTransform: isJapanese ? 'none' : 'uppercase', marginTop: 2 }}>{s.label}</div>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem', marginTop: 1 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* ── MARKETS BANNER ── */}
      <div style={{ background: '#13100C', padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: isJapanese ? 0.6 : 2, textTransform: isJapanese ? 'none' : 'uppercase', color: '#E4002B', marginBottom: 12 }}>{content.marketsLabel}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {content.markets.map(m => (
            <div key={m.name} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8, padding: '16px 32px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 32 }}>{m.flag}</div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginTop: 6 }}>{m.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION CARDS ── */}
      <div style={{ background: '#f8f4ee', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: isJapanese ? 0.6 : 2, textTransform: isJapanese ? 'none' : 'uppercase', color: '#E4002B', marginBottom: 8 }}>{content.sectionEyebrow}</div>
            <h2 style={{ fontSize: isJapanese ? '1.8rem' : '2rem', fontWeight: 800, color: '#13100C', margin: 0, lineHeight: 1.3 }}>{content.sectionTitle}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {content.sections.map(s => (
              <div key={s.label} style={{
                background: 'white', borderRadius: 10,
                border: '1.5px solid #ece6dc',
                borderTop: '4px solid #E4002B',
                padding: 28, display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.emoji}</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: isJapanese ? 0.6 : 2, textTransform: isJapanese ? 'none' : 'uppercase', color: '#E4002B', marginBottom: 6 }}>{s.label}</div>
                <h3 style={{ fontSize: isJapanese ? '1.02rem' : '1.1rem', fontWeight: 800, color: '#13100C', margin: '0 0 10px', lineHeight: 1.4 }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.7, margin: '0 0 20px', flex: 1 }}>{s.desc}</p>
                <ul style={{ margin: '0 0 24px', paddingLeft: 16 }}>
                  {s.items.map(item => (
                    <li key={item} style={{ fontSize: '0.82rem', color: '#444', lineHeight: 1.8 }}>{item}</li>
                  ))}
                </ul>
                <Link to={s.link} style={{
                  display: 'inline-block', background: '#13100C', color: 'white',
                  padding: '10px 20px', borderRadius: 5, fontWeight: 600,
                  textDecoration: 'none', fontSize: '0.85rem', textAlign: 'center',
                }}>
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </Layout>
  );
}
