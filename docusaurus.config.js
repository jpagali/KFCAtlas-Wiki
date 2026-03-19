// @ts-check

/** @type {import('@docusaurus/types').Config} */
const isGitHubPagesBuild =
  process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true';
const githubRepository = process.env.GITHUB_REPOSITORY ?? 'jpagali/KFCAtlas-Wiki';
const [, githubProjectName = 'KFCAtlas-Wiki'] = githubRepository.split('/');
const buildUpdatedDate = new Intl.DateTimeFormat('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
}).format(new Date());

const config = {
  title: 'KFC Atlas Wiki',
  tagline: 'Everything you need to operate the KFC Atlas Platform.',
  customFields: {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  },
  favicon: 'img/atlas-favicon.png',
  organizationName: 'jpagali',
  projectName: githubProjectName,

  url: isGitHubPagesBuild
    ? 'https://jpagali.github.io'
    : 'https://kfc-atlas-portal.vercel.app',
  baseUrl: isGitHubPagesBuild ? `/${githubProjectName}/` : '/',

  onBrokenLinks: 'warn',
  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'ja-JP'],
    localeConfigs: {
      'en-US': {
        htmlLang: 'en-US',
        label: 'EN',
      },
      'ja-JP': {
        htmlLang: 'ja-JP',
        label: 'JP',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/atlas-social-card.png',

      announcementBar: {
        id: 'welcome',
        content: '👋 Welcome to the KFC Atlas Wiki — your guide to operating the platform.',
        backgroundColor: '#13100C',
        textColor: '#ffffff',
        isCloseable: true,
      },

      navbar: {
        title: 'Atlas Wiki',
        style: 'dark',
        logo: {
          alt: 'KFC Atlas Logo',
          src: 'img/atlas-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'frontendSidebar',
            position: 'left',
            label: '🖥️ Front-end Guide',
            className: 'navbar-item--frontend',
          },
          {
            type: 'doc',
            docId: 'admin-portal-guide/index',
            position: 'left',
            label: 'Admin Portal (KFC)',
            className: 'navbar-item--admin',
          },
          {
            type: 'docSidebar',
            sidebarId: 'playbooksSidebar',
            position: 'left',
            label: '📋 Playbooks',
            className: 'navbar-item--playbooks',
          },
          {
            type: 'docSidebar',
            sidebarId: 'byteCapabilitiesSidebar',
            position: 'left',
            label: '🧩 Byte Capabilities',
            className: 'navbar-item--byte-capabilities',
          },
          {
            to: '/whats-new',
            position: 'left',
            label: "What's New",
            className: 'navbar-item--whats-new',
          },
          {
            to: '/rna-sneak-peek',
            position: 'left',
            label: 'Atlas Peek',
            className: 'navbar__cta navbar__cta--sneak-peek navbar-item--rna',
          },
          {
            type: 'custom-search',
            position: 'right',
            className: 'navbar-item--search',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            className: 'navbar-item--locale',
          },
          {
            type: 'custom-theme-toggle',
            position: 'right',
            className: 'navbar-item--theme',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: '🖥️ Front-end Guide',
            items: [
              { label: 'Overview', to: '/docs/frontend/overview' },
              { label: 'Customer Journey', to: '/docs/frontend/customer-journey' },
              { label: 'Order Channels', to: '/docs/frontend/order-channels' },
              { label: 'Customer Engagement Surveys', to: '/docs/frontend/customer-engagement-surveys' },
              { label: 'Market Configurations', to: '/docs/frontend/market-configurations' },
              { label: 'Design System', to: '/docs/frontend/design-system' },
              { label: 'Contentful', to: '/docs/frontend/contentful/' },
            ],
          },
          {
            title: '⚙️ Admin Portal Guide',
            items: [
              { label: 'Overview', to: '/docs/admin-portal-guide/' },
              { label: 'Stores', to: '/docs/admin-portal-guide/stores/' },
              { label: 'Menus', to: '/docs/admin-portal-guide/menus/' },
              { label: 'Products', to: '/docs/admin-portal-guide/products/' },
              { label: 'Promotions', to: '/docs/admin-portal-guide/promotions/' },
              { label: 'Store Groups', to: '/docs/admin-portal-guide/store-groups/' },
              { label: 'Bundles', to: '/docs/admin-portal-guide/bundles/' },
              { label: 'Agents', to: '/docs/admin-portal-guide/agents/' },
              { label: 'Customer Support', to: '/docs/admin-portal-guide/customer-support/' },
              { label: 'In-Store Devices', to: '/docs/admin-portal-guide/in-store-devices/' },
            ],
          },
          {
            title: '📋 Playbooks',
            items: [
              { label: 'Create Promotions', to: '/docs/playbooks/onboarding' },
              { label: 'Promotion Recipes', to: '/docs/playbooks/promotions-setup-guide' },
              { label: 'Braze Welcome Reward Canvas', to: '/docs/playbooks/runbook' },
              { label: 'Troubleshooting & Escalation', to: '/docs/playbooks/troubleshooting' },
            ],
          },
          {
            title: '🧩 Byte Capabilities',
            items: [
              { label: 'Start Here', to: '/docs/byte-capabilities/' },
              { label: 'Mental Model', to: '/docs/byte-capabilities/mental-model' },
              { label: 'Domains', to: '/docs/byte-capabilities/domains/identity' },
              { label: 'Reality Check', to: '/docs/byte-capabilities/enablement/reality-check' },
              { label: 'Market Launch Checklist', to: '/docs/byte-capabilities/enablement/market-launch-checklist' },
              { label: 'Glossary', to: '/docs/byte-capabilities/reference/glossary' },
            ],
          },
          {
            title: 'About',
            items: [
              { label: 'About Atlas Wiki', to: '/docs/about-knowledge-center' },
              { label: 'Changelog', to: '/docs/release-notes' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Yum! Brands. KFC Atlas Platform. Updated: ${buildUpdatedDate}`,
      },

      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
