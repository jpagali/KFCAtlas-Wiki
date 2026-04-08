import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function RenegadeAtlasParityQrgPage() {
  const embeddedQrgUrl = useBaseUrl('/renegade-atlas-parity-qrg-embed/index.html');

  return (
    <Layout
      title="Renegade-Atlas Parity QRG"
      description="Quick reference guide comparing Renegade and Atlas parity across the KFC full customer journey."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Quick Reference Guide</p>
          <h1 className={styles.title}>Renegade-Atlas Parity QRG</h1>
          <p className={styles.subtitle}>
            Full customer journey parity view across Renegade, Byte Commerce, and Helium.
          </p>
        </section>

        <section className={styles.viewerSection}>
          <iframe
            title="Renegade-Atlas Parity QRG"
            src={embeddedQrgUrl}
            className={styles.viewer}
          />
        </section>
      </main>
    </Layout>
  );
}
