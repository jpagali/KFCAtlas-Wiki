// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KFC Atlas Knowledge Center',
  tagline: 'Everything you need to operate the KFC Atlas Platform.',
  customFields: {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  },
  favicon: 'img/favicon.ico',

  // Update this after Vercel deployment
  url: 'https://kfc-atlas-portal.vercel.app',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
        content: '👋 Welcome to the KFC Atlas Knowledge Center — your guide to operating the platform.',
        backgroundColor: '#13100C',
        textColor: '#ffffff',
        isCloseable: true,
      },

      navbar: {
        title: 'Atlas Knowledge Center',
        style: 'dark',
        logo: {
          alt: 'KFC Atlas Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'frontendSidebar',
            position: 'left',
            label: '🖥️ Front-end Guide',
          },
          {
            href: 'https://yumkb.yumconnect.dev',
            position: 'left',
            label: '⚙️ Admin Portal Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'playbooksSidebar',
            position: 'left',
            label: '📋 Playbooks',
          },
          {
            type: 'search',
            position: 'right',
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
              { label: 'Market Configurations', to: '/docs/frontend/market-configurations' },
            ],
          },
          {
            title: '⚙️ Admin Portal Guide',
            items: [
              { label: 'Overview', to: '/docs/admin/overview' },
              { label: 'Restaurant Profile Setup', to: '/docs/admin/restaurant-profile' },
              { label: 'Menu Management', to: '/docs/admin/menu-management' },
              { label: 'Users & Permissions', to: '/docs/admin/users-permissions' },
            ],
          },
          {
            title: '📋 Playbooks',
            items: [
              { label: 'Onboarding a New Restaurant', to: '/docs/playbooks/onboarding' },
              { label: 'Troubleshooting & Escalation', to: '/docs/playbooks/troubleshooting' },
              { label: 'Platform Runbook', to: '/docs/playbooks/runbook' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Yum! Brands. KFC Atlas Platform.`,
      },

      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;