import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const PAGE_CONTENT = {
  'en-US': {
    title: 'RNA Sneak Peek',
    description: 'A multilingual, stateful RNA prototype preview inside the Knowledge Center.',
    eyebrow: 'Interactive prototype',
    heroTitle: 'RNA Sneak Peek',
    heroBody:
      'This page turns the prototype into a miniature product sandbox inside the Knowledge Center so stakeholders can inspect flows, locale behavior, and navigation state in one place.',
    bullets: [
      'Demonstrates a real session model: store, fulfillment mode, timing, cart, and checkout all stay connected.',
      'Lets reviewers switch between English and Japanese inside the same prototype without restarting.',
      'Frames RNA as a preview surface, not production, with explicit simulated-data labeling.',
    ],
    disclaimer:
      'This is a clickable simulation for planning and review. It does not connect to live APIs, production content, or real order processing.',
    backLink: 'Return to homepage',
  },
  'ja-JP': {
    title: 'RNA Sneak Peek',
    description: 'Knowledge Center 内で確認できる、多言語対応の状態保持型 RNA プロトタイプです。',
    eyebrow: 'インタラクティブ プロトタイプ',
    heroTitle: 'RNA Sneak Peek',
    heroBody:
      'このページでは、Knowledge Center 内で RNA プロトタイプを小さな製品サンドボックスとして体験でき、フロー、ロケール挙動、ナビゲーション状態を 1 か所で確認できます。',
    bullets: [
      '店舗、受取方法、時間帯、カート、チェックアウトがつながった実セッション型の状態を確認できます。',
      'プロトタイプ内で英語と日本語を切り替えても、セッションをやり直さずに確認できます。',
      'シミュレーションデータであることを明示しつつ、RNA をレビュー用プレビューとして位置づけます。',
    ],
    disclaimer:
      'これは計画とレビューのためのクリック可能なシミュレーションです。実際の API、プロダクションコンテンツ、注文処理には接続していません。',
    backLink: 'ホームへ戻る',
  },
};

export default function RnaSneakPeekPage() {
  const { i18n } = useDocusaurusContext();
  const locale = PAGE_CONTENT[i18n.currentLocale] ? i18n.currentLocale : 'en-US';
  const content = PAGE_CONTENT[locale];
  const prototypeSrc = useBaseUrl('/rna-sneak-peek-prototype.html');

  return (
    <Layout title={content.title} description={content.description}>
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
          <div className={styles.frameShell}>
            <iframe
              className={styles.prototypeFrame}
              src={prototypeSrc}
              title={content.title}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
