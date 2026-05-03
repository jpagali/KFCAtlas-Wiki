import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

const PAGE_CONTENT = {
  'en-US': {
    title: 'Atlas Peek',
    description: 'The current KFC AU prototype preview inside Atlas Wiki.',
    eyebrow: 'KFC AU prototype',
    heroTitle: 'Atlas Peek',
    heroBody:
      'This page hosts the current KFC Australia prototype inside Atlas Wiki so stakeholders can review the latest local interaction model in one place.',
    bullets: [
      'Uses the current AU menu-driven prototype state promoted from the local working file.',
      'Preserves the current browsing, cart, checkout WIP treatment, and order-context behavior as implemented in the local prototype.',
      'Keeps this route as a review surface only, not a production commerce experience.',
    ],
    disclaimer:
      'This is a clickable simulation for planning and review. It does not connect to live APIs, production content, or real order processing.',
    backLink: 'Return to homepage',
  },
};

export default function SneakPeekPage() {
  const { i18n } = useDocusaurusContext();
  const location = useLocation();
  const locale = PAGE_CONTENT[i18n.currentLocale] ? i18n.currentLocale : 'en-US';
  const content = PAGE_CONTENT[locale];
  const isPrototypeOnly = React.useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('view') === 'prototype-only';
  }, [location.search]);

  return (
    <Layout title={content.title} description={content.description}>
      <SneakPeekContent content={content} isPrototypeOnly={isPrototypeOnly} />
    </Layout>
  );
}

function SneakPeekContent({content, isPrototypeOnly}) {
  const prototypeSrc = useBaseUrl('/rna-sneak-peek-prototype.html');
  const iframeRef = React.useRef(null);
  const prototypeOnlyHref = useBaseUrl('/sneak-peek?view=prototype-only');
  const standardViewHref = useBaseUrl('/sneak-peek');

  const handleRestartJourney = React.useCallback(() => {
    const frameWindow = iframeRef.current?.contentWindow;
    if (!frameWindow) return;
    frameWindow.postMessage({type: 'prototype-restart'}, window.location.origin);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle('prototype-only-view', isPrototypeOnly);
    return () => {
      document.body.classList.remove('prototype-only-view');
    };
  }, [isPrototypeOnly]);

  return (
    <div className={`${styles.page} ${isPrototypeOnly ? styles.pagePrototypeOnly : ''}`}>
      {!isPrototypeOnly ? (
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>{content.eyebrow}</span>
            <h1>{content.heroTitle}</h1>
            <p>{content.heroBody}</p>
            <ul className={styles.bullets}>
              {content.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className={styles.notice}>{content.disclaimer}</div>
            <Link to="/" className={styles.backLink}>
              {content.backLink}
            </Link>
          </div>
        </div>
      ) : null}

      <div className={`${styles.prototypeWrap} ${isPrototypeOnly ? styles.prototypeWrapPrototypeOnly : ''}`}>
        <div className={styles.prototypeToolbar}>
          {isPrototypeOnly ? (
            <Link to={standardViewHref} className={styles.secondaryButton}>
              Exit Fullscreen
            </Link>
          ) : (
            <Link to={prototypeOnlyHref} className={styles.secondaryButton}>
              Fullscreen Prototype
            </Link>
          )}
          <button className={styles.restartButton} type="button" onClick={handleRestartJourney}>
            Restart Journey
          </button>
        </div>
        <div className={styles.prototypeStage}>
          <div className={`${styles.frameShell} ${isPrototypeOnly ? styles.frameShellPrototypeOnly : ''}`}>
            <iframe
              ref={iframeRef}
              className={styles.prototypeFrame}
              src={prototypeSrc}
              title={content.title}
              loading="lazy"
              allow="fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
