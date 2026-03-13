import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';

const LOCALES = [
  { code: 'en-US', label: 'EN' },
  { code: 'ja-JP', label: 'JP' },
];

export default function NavbarLocaleSwitcher() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const {search, hash} = useLocation();
  const alternatePageUtils = useAlternatePageUtils();

  const navigateToLocale = (nextLocale) => {
    const nextPath = `${alternatePageUtils.createUrl({
      locale: nextLocale,
      fullyQualified: false,
    })}${search}${hash}`;

    if (typeof window !== 'undefined') {
      window.location.assign(nextPath);
    }
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'white',
        fontSize: '0.95rem',
        fontWeight: 600,
      }}
      aria-label="Locale switcher"
    >
      <span aria-hidden="true">文A</span>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        {LOCALES.map((locale) => {
          const isActive = locale.code === currentLocale;
          return (
            <button
              key={locale.code}
              type="button"
              onClick={() => navigateToLocale(locale.code)}
              aria-pressed={isActive}
              aria-label={`Switch to ${locale.label}`}
              style={{
                appearance: 'none',
                background: 'transparent',
                border: 'none',
                color: isActive ? 'white' : 'rgba(255,255,255,0.68)',
                cursor: 'pointer',
                font: 'inherit',
                fontWeight: isActive ? 700 : 500,
                padding: 0,
                lineHeight: 1,
              }}
            >
              {locale.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
