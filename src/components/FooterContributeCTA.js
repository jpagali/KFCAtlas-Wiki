import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const COPY = {
  'en-US': {
    contribute: {
      eyebrow: 'The 12th Secret',
      title: 'Contribute to Atlas Wiki',
      body: 'Share the next playbook, guide, or process your team should know.',
      cta: 'Open the Studio',
    },
    whatsNew: {
      eyebrow: "What's New",
      title: 'See the latest Atlas launches',
      body: 'Catch recent releases, improvements, and upcoming capabilities in one place.',
      cta: 'Open What’s New',
    },
  },
};

export default function FooterContributeCTA() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const content = COPY[currentLocale] ?? COPY['en-US'];
  const contributeTo = useBaseUrl('/contribute');
  const whatsNewTo = useBaseUrl('/whats-new');

  return (
    <div className="footer-entry-rail">
      <section className="footer-contribute-cta" aria-label={content.contribute.eyebrow}>
        <div className="footer-contribute-cta__content">
          <p className="footer-contribute-cta__eyebrow">{content.contribute.eyebrow}</p>
          <h2 className="footer-contribute-cta__title">{content.contribute.title}</h2>
          <p className="footer-contribute-cta__body">{content.contribute.body}</p>
        </div>
        <Link className="footer-contribute-cta__button" to={contributeTo}>
          {content.contribute.cta}
        </Link>
      </section>

      <section className="footer-whats-new-cta" aria-label={content.whatsNew.eyebrow}>
        <div className="footer-contribute-cta__content">
          <p className="footer-contribute-cta__eyebrow">{content.whatsNew.eyebrow}</p>
          <h2 className="footer-contribute-cta__title">{content.whatsNew.title}</h2>
          <p className="footer-contribute-cta__body">{content.whatsNew.body}</p>
        </div>
        <Link className="footer-contribute-cta__button footer-whats-new-cta__button" to={whatsNewTo}>
          {content.whatsNew.cta}
        </Link>
      </section>
    </div>
  );
}
