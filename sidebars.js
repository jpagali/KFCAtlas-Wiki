/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // ─── FRONT-END GUIDE ───────────────────────────────────────────────────────
  // For franchisees + BMUs who need to understand the customer-facing product
  frontendSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['frontend/overview'],
    },
    {
      type: 'category',
      label: 'Customer Experience',
      collapsed: false,
      items: [
        'frontend/customer-journey',
        'frontend/order-channels',
      ],
    },
    {
      type: 'category',
      label: 'Market Configurations',
      collapsed: false,
      items: [
        'frontend/market-configurations',
      ],
    },
    
    {
  type: 'category',
  label: 'Atlas Design System',
  collapsed: false,
  items: ['frontend/design-system'],
},

  ],

  // ─── ADMIN PORTAL GUIDE ────────────────────────────────────────────────────
  // For franchisees + regional office — how to operate Yum Commerce Admin
  adminSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['admin/overview'],
    },
    {
      type: 'category',
      label: 'Restaurant Setup',
      collapsed: false,
      items: [
        'admin/restaurant-profile',
        'admin/menu-management',
      ],
    },
    {
      type: 'category',
      label: 'Access & Permissions',
      collapsed: false,
      items: [
        'admin/users-permissions',
      ],
    },
  ],

  // ─── PLAYBOOKS ─────────────────────────────────────────────────────────────
  // Step-by-step operational guides
  playbooksSidebar: [
    {
      type: 'category',
      label: 'Onboarding',
      collapsed: false,
      items: ['playbooks/onboarding'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: false,
      items: ['playbooks/troubleshooting'],
    },
    {
      type: 'category',
      label: 'Platform Runbook',
      collapsed: false,
      items: ['playbooks/runbook'],
    },
  ],

};

module.exports = sidebars;