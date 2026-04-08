import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const PAGE_CONTENT = {
  'en-US': {
    title: 'Atlas Peek',
    description: 'A multilingual, stateful Atlas prototype preview inside Atlas Wiki.',
    eyebrow: 'Interactive prototype',
    heroTitle: 'Atlas Peek',
    heroBody:
      'This page turns the prototype into a miniature product sandbox inside Atlas Wiki so stakeholders can inspect flows, locale behavior, and navigation state in one place.',
    bullets: [
      'Demonstrates a real session model: store, fulfillment mode, timing, cart, and checkout all stay connected.',
      'Keeps the localized prototype content ready so we can bring Japanese review flows back quickly when needed.',
      'Frames Atlas as a preview surface, not production, with explicit simulated-data labeling.',
    ],
    disclaimer:
      'This is a clickable simulation for planning and review. It does not connect to live APIs, production content, or real order processing.',
    backLink: 'Return to homepage',
  },
  'ja-JP': {
    title: 'Atlas Peek',
    description: 'Atlas Wiki 内で確認できる、多言語対応の状態保持型 Atlas プロトタイプです。',
    eyebrow: 'インタラクティブ プロトタイプ',
    heroTitle: 'Atlas Peek',
    heroBody:
      'このページでは、Atlas Wiki 内で Atlas Peek プロトタイプを小さな製品サンドボックスとして体験でき、フロー、ロケール挙動、ナビゲーション状態を 1 か所で確認できます。',
    bullets: [
      '店舗、受取方法、時間帯、カート、チェックアウトがつながった実セッション型の状態を確認できます。',
      '必要になったときにすぐ戻せるよう、日本語向けのプロトタイプ内容も維持しています。',
      'シミュレーションデータであることを明示しつつ、Atlas をレビュー用プレビューとして位置づけます。',
    ],
    disclaimer:
      'これは計画とレビューのためのクリック可能なシミュレーションです。実際の API、プロダクションコンテンツ、注文処理には接続していません。',
    backLink: 'ホームへ戻る',
  },
};

export default function SneakPeekPage() {
  const { i18n } = useDocusaurusContext();
  const locale = PAGE_CONTENT[i18n.currentLocale] ? i18n.currentLocale : 'en-US';
  const content = PAGE_CONTENT[locale];

  return (
    <Layout title={content.title} description={content.description}>
      <SneakPeekContent content={content} locale={locale} />
    </Layout>
  );
}

function SneakPeekContent({content, locale}) {
  const {colorMode} = useColorMode();
  const [immersiveMode, setImmersiveMode] = React.useState(false);
  const frameShellRef = React.useRef(null);
  const iframeRef = React.useRef(null);
  const prototypeTheme = colorMode === 'light' ? 'light' : 'dark';

  React.useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type !== 'sneak-peek-prototype-fullscreen') return;
      setImmersiveMode(Boolean(event.data.enabled));
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (immersiveMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow || '';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [immersiveMode]);

  React.useEffect(() => {
    const frameWindow = iframeRef.current?.contentWindow;
    if (!frameWindow) {
      return undefined;
    }

    const syncTheme = () => {
      frameWindow.postMessage(
        {
          type: 'sneak-peek-prototype-theme',
          theme: prototypeTheme,
        },
        window.location.origin,
      );
    };

    syncTheme();
    const timeoutId = window.setTimeout(syncTheme, 120);

    return () => window.clearTimeout(timeoutId);
  }, [prototypeTheme, locale]);

  const prototypeSrc = useBaseUrl(
    `/rna-sneak-peek-prototype.html?theme=${prototypeTheme}&locale=${encodeURIComponent(locale)}`,
  );

  const handleResetJourney = React.useCallback(() => {
    iframeRef.current?.contentWindow?.postMessage(
      {
        type: 'sneak-peek-prototype-reset',
      },
      window.location.origin,
    );
  }, []);

  return (
    <div className={styles.page}>
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

      <div className={styles.prototypeWrap}>
        <div className={styles.prototypeStage}>
          <div
            ref={frameShellRef}
            className={`${styles.frameShell} ${immersiveMode ? styles.frameShellImmersive : ''}`}
          >
            <iframe
              key={`${locale}-${prototypeTheme}`}
              ref={iframeRef}
              className={styles.prototypeFrame}
              src={prototypeSrc}
              title={content.title}
              loading="lazy"
              allow="fullscreen"
              allowFullScreen
            />
          </div>

          {!immersiveMode ? (
            <aside className={styles.sideControls} aria-label="Prototype controls">
              <div className={styles.sideControlsKicker}>Prototype Controls</div>
              <p className={styles.sideControlsCopy}>
                Reset auth, store, delivery, cart, and checkout state so you can replay the journey from the start.
              </p>
              <button className={styles.sideControlsButton} type="button" onClick={handleResetJourney}>
                Reset Journey
              </button>
            </aside>
          ) : null}
        </div>
      </div>
    </div>
  );
}
