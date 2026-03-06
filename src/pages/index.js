import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const stats = [
  { value: '2', label: 'Markets', sub: 'Japan · Australia' },
  { value: '3', label: 'Core Modules', sub: 'Front-end · Admin · Playbooks' },
  { value: '1', label: 'Platform', sub: 'Atlas by Yum! Brands' },
];

const sections = [
  {
    emoji: '🖥️',
    label: 'Front-end Guide',
    title: 'What your customers experience',
    desc: 'Understand the end-to-end ordering journey — from discovery through checkout. Covers market-specific configurations for loyalty, promotions, and order channels in Japan and Australia.',
    link: '/docs/frontend/overview',
    cta: 'Read the guide',
    items: ['Customer Journey', 'Order Channels', 'Market Configurations'],
  },
  {
    emoji: '⚙️',
    label: 'Admin Portal Guide',
    title: 'How to operate the platform',
    desc: 'Step-by-step guidance for franchisees and regional teams on using the Yum Commerce Admin Portal — restaurant setup, menu management, and access controls.',
    link: '/docs/admin/overview',
    cta: 'Read the guide',
    items: ['Restaurant Profile Setup', 'Menu Management', 'Users & Permissions'],
  },
  {
    emoji: '📋',
    label: 'Playbooks',
    title: 'Operational guides for your team',
    desc: 'Structured, step-by-step playbooks covering the full lifecycle — onboarding a new restaurant, running the platform day-to-day, and resolving issues fast.',
    link: '/docs/playbooks/onboarding',
    cta: 'View playbooks',
    items: ['Onboarding a New Restaurant', 'Platform Runbook', 'Troubleshooting & Escalation'],
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description="KFC Atlas Platform Knowledge Portal">

      {/* ── HERO ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0705 0%, #1a0a08 50%, #0f0705 100%)',
        padding: '80px 24px 64px',
        textAlign: 'center',
        borderBottom: '3px solid #E4002B',
        position: 'relative',
        overflow: 'hidden',
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
            borderRadius: 20, padding: '5px 16px', marginBottom: 28,
          }}>
            <div style={{ width: 6, height: 6, background: '#E4002B', borderRadius: '50%' }} />
            <span style={{ color: '#E4002B', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              Atlas Platform · Knowledge Portal
            </span>
          </div>

          <h1 style={{
            color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: 900, margin: '0 0 16px',
            lineHeight: 1.1, letterSpacing: '-0.5px',
          }}>
            Everything you need to<br />
            <span style={{ color: '#E4002B' }}>operate the platform.</span>
          </h1>

          <p style={{
            color: '#999', fontSize: '1.1rem', maxWidth: 540,
            margin: '0 auto 40px', lineHeight: 1.7,
          }}>
            Your complete guide to the KFC Atlas Platform — from the customer ordering experience to day-to-day restaurant operations across Japan and Australia.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/docs/frontend/overview" style={{
              background: '#E4002B', color: 'white', padding: '13px 28px',
              borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
            }}>
              Start with the Front-end Guide →
            </Link>
            <Link to="/docs/playbooks/onboarding" style={{
              background: 'transparent', color: 'white', padding: '13px 28px',
              borderRadius: 6, fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem',
              border: '1.5px solid rgba(255,255,255,0.2)',
            }}>
              View Playbooks
            </Link>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{
        background: '#E4002B', padding: '20px 24px',
        display: 'flex', justifyContent: 'center', gap: '64px', flexWrap: 'wrap',
      }}>
        {stats.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ color: 'white', fontSize: '1.6rem', fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>{s.label}</div>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem', marginTop: 1 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* ── SECTION CARDS ── */}
      <div style={{ background: '#f8f4ee', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E4002B', marginBottom: 8 }}>Three sections</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#13100C', margin: 0 }}>Built for everyone who operates the platform</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {sections.map(s => (
              <div key={s.label} style={{
                background: 'white', borderRadius: 10,
                border: '1.5px solid #ece6dc',
                borderTop: '4px solid #E4002B',
                padding: 28, display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.emoji}</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E4002B', marginBottom: 6 }}>{s.label}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#13100C', margin: '0 0 10px', lineHeight: 1.3 }}>{s.title}</h3>
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

      {/* ── MARKETS BANNER ── */}
      <div style={{ background: '#13100C', padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#E4002B', marginBottom: 12 }}>Active Markets</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {[
            { flag: '🇯🇵', name: 'Japan', detail: 'KFC Japan · Nihon KFC Holdings' },
            { flag: '🇦🇺', name: 'Australia', detail: 'KFC Australia · Collins Foods' },
          ].map(m => (
            <div key={m.name} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8, padding: '16px 32px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 32 }}>{m.flag}</div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginTop: 6 }}>{m.name}</div>
              <div style={{ color: '#666', fontSize: '0.75rem', marginTop: 2 }}>{m.detail}</div>
            </div>
          ))}
        </div>
      </div>

    </Layout>
  );
}
