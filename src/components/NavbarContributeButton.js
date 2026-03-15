import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LABELS = {
  'en-US': 'Contribute',
  'ja-JP': '寄稿',
};

function getViewportMode() {
  if (typeof window === 'undefined') {
    return 'desktop';
  }

  if (window.matchMedia('(max-width: 720px)').matches) {
    return 'mobile';
  }

  if (window.matchMedia('(max-width: 996px)').matches) {
    return 'tablet';
  }

  return 'desktop';
}

export default function NavbarContributeButton() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const to = useBaseUrl('/contribute');
  const [viewportMode, setViewportMode] = useState(getViewportMode);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleResize = () => {
      setViewportMode(getViewportMode());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (viewportMode === 'mobile') {
    return null;
  }

  const isCompact = viewportMode === 'tablet';

  return (
    <Link
      className={`navbar-contribute-button${isCompact ? ' navbar-contribute-button--compact' : ''}`}
      to={to}
    >
      {!isCompact ? <span className="navbar-contribute-button__spark" aria-hidden="true" /> : null}
      <span>{LABELS[currentLocale] ?? LABELS['en-US']}</span>
    </Link>
  );
}
