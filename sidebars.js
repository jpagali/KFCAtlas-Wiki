/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // ─── FRONT-END GUIDE ───────────────────────────────────────────────────────
  // For franchisees + BMUs who need to understand the customer-facing product
  frontendSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'frontend/overview',
        'frontend/design-system',
      ],
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
      label: 'Features',
      collapsed: false,
      items: [
        'frontend/features/index',
        'frontend/features/kfc-deeplink-universal-link',
        'frontend/features/branch-deeplink',
        'frontend/features/martech',
        'frontend/features/social-sign-in',
        {
          type: 'category',
          label: 'Menu Item Reservation',
          link: { type: 'doc', id: 'frontend/features/menu-item-reservation' },
          collapsed: false,
          items: [
            'frontend/features/menu-item-reservation-japan-christmas',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contentful',
      collapsed: false,
      items: [
        'frontend/contentful/index',
        'frontend/contentful/guide-homepage',
        'frontend/contentful/guide-category',
        'frontend/contentful/guide-product',
        'frontend/contentful/guide-bundles-deals',
        'frontend/contentful/guide-promo',
        'frontend/contentful/guide-cross-sell',
        'frontend/contentful/guide-footer',
        'frontend/contentful/guide-seo',
        'frontend/contentful/guide-translations',
      ],
    },
  ],

  // ─── ADMIN PORTAL GUIDE ────────────────────────────────────────────────────
  // For franchisees + regional office — how to operate Yum Commerce Admin
  adminSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Admin Portal Guide',
          link: { type: 'doc', id: 'admin-portal-guide/index' },
          items: [
            {
              type: 'category',
              label: 'Stores',
              link: { type: 'doc', id: 'admin-portal-guide/stores/index' },
              items: [
                {
                  type: 'category',
                  label: 'Publish History',
                  items: [
                    'admin-portal-guide/stores/view-a-stores-publish-history-copy-menu-publish-job-id',
                  ],
                },
                {
                  type: 'category',
                  label: 'Stores',
                  items: [
                    'admin-portal-guide/stores/create-a-store',
                    'admin-portal-guide/stores/edit-store-details',
                    'admin-portal-guide/stores/view-a-stores-menu',
                    'admin-portal-guide/stores/add-metafields-to-a-menu',
                    'admin-portal-guide/stores/publish-a-menu',
                    'admin-portal-guide/stores/item-snooze',
                    'admin-portal-guide/stores/view-taxes',
                    'admin-portal-guide/stores/pos',
                    'admin-portal-guide/stores/view-promotions',
                    'admin-portal-guide/stores/viewunassign-a-stores-store-groups',
                    'admin-portal-guide/stores/2a-accept-online-orders-turn-on-or-off',
                    'admin-portal-guide/stores/2b-appear-in-search-result-turn-on-or-off',
                    'admin-portal-guide/stores/assign-new-menu',
                    'admin-portal-guide/stores/edit-patch-list',
                    'admin-portal-guide/stores/publish-menu',
                    'admin-portal-guide/stores/transfer-patch-list',
                    'admin-portal-guide/stores/2c-allow-future-orders-turn-on-or-off',
                  ],
                },
                {
                  type: 'category',
                  label: 'Beneficaries',
                  items: [
                    'admin-portal-guide/stores/create-a-beneficiary',
                    'admin-portal-guide/stores/editdelete-a-beneficiary',
                    'admin-portal-guide/stores/view-a-stores-beneficiaries',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Menus',
              link: { type: 'doc', id: 'admin-portal-guide/menus/index' },
              items: [
                {
                  type: 'category',
                  label: 'Named Prices',
                  items: [
                    'admin-portal-guide/menus/create-a-named-price',
                    'admin-portal-guide/menus/edit-named-price',
                    'admin-portal-guide/menus/delete-named-price',
                  ],
                },
                {
                  type: 'category',
                  label: 'Categories',
                  items: [
                    'admin-portal-guide/menus/create-a-category',
                    'admin-portal-guide/menus/edit-a-category',
                    'admin-portal-guide/menus/copy-a-category',
                    'admin-portal-guide/menus/add-metafields-to-a-category',
                    'admin-portal-guide/menus/delete-a-category',
                  ],
                },
                {
                  type: 'category',
                  label: 'Patches',
                  items: [
                    'admin-portal-guide/menus/create-a-patch',
                    'admin-portal-guide/menus/assign-a-patch-add-to-patch-list',
                    'admin-portal-guide/menus/edit-a-patch',
                    'admin-portal-guide/menus/copy-a-patch',
                    'admin-portal-guide/menus/delete-a-patch',
                    'admin-portal-guide/menus/assign-a-patch-replace-existing-list',
                  ],
                },
                {
                  type: 'category',
                  label: 'Menus',
                  items: [
                    'admin-portal-guide/menus/publish-a-menu',
                    'admin-portal-guide/menus/create-a-menu',
                    'admin-portal-guide/menus/edit-a-menu',
                    'admin-portal-guide/menus/copy-a-menu',
                    'admin-portal-guide/menus/assign-a-menu',
                    'admin-portal-guide/menus/delete-a-menu',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Products',
              link: { type: 'doc', id: 'admin-portal-guide/products/index' },
              items: [
                {
                  type: 'category',
                  label: 'Products',
                  items: [
                    'admin-portal-guide/products/edit-a-product',
                    'admin-portal-guide/products/copy-a-product',
                    'admin-portal-guide/products/add-metafields-to-a-product',
                    'admin-portal-guide/products/add-an-image-to-a-product',
                    'admin-portal-guide/products/delete-a-product',
                    'admin-portal-guide/products/create-a-product',
                  ],
                },
                {
                  type: 'category',
                  label: 'Options',
                  items: [
                    'admin-portal-guide/products/create-an-option',
                    'admin-portal-guide/products/edit-an-option',
                    'admin-portal-guide/products/copy-an-option',
                    'admin-portal-guide/products/delete-an-option',
                  ],
                },
                {
                  type: 'category',
                  label: 'Option Value',
                  items: [
                    'admin-portal-guide/products/create-an-option-value',
                    'admin-portal-guide/products/edit-an-option-value',
                    'admin-portal-guide/products/add-metafields-to-an-option-value',
                    'admin-portal-guide/products/copy-an-option-value',
                    'admin-portal-guide/products/delete-an-option-value',
                  ],
                },
                {
                  type: 'category',
                  label: 'Slots',
                  items: [
                    'admin-portal-guide/products/create-a-slot',
                    'admin-portal-guide/products/edit-a-slot',
                    'admin-portal-guide/products/copy-a-slot',
                    'admin-portal-guide/products/add-metafields-to-a-slot',
                    'admin-portal-guide/products/delete-a-slot',
                  ],
                },
                {
                  type: 'category',
                  label: 'Modifier',
                  items: [
                    'admin-portal-guide/products/create-a-modifier',
                    'admin-portal-guide/products/edit-a-modifier',
                    'admin-portal-guide/products/copy-a-modifier',
                    'admin-portal-guide/products/edit-item-availability',
                    'admin-portal-guide/products/delete-a-modifier',
                    'admin-portal-guide/products/add-metafields-to-a-modifier',
                  ],
                },
                {
                  type: 'category',
                  label: 'Weights',
                  items: [
                    'admin-portal-guide/products/create-a-weight',
                    'admin-portal-guide/products/edit-a-weight',
                    'admin-portal-guide/products/copy-a-weight',
                    'admin-portal-guide/products/delete-a-weight',
                    'admin-portal-guide/products/add-metafields-to-a-weight',
                  ],
                },
                {
                  type: 'category',
                  label: 'Variants',
                  items: [
                    'admin-portal-guide/products/edit-a-variant',
                    'admin-portal-guide/products/add-metafields-to-a-variant',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Promotions',
              link: { type: 'doc', id: 'admin-portal-guide/promotions/index' },
              items: [
                {
                  type: 'category',
                  label: 'Promotions',
                  items: [
                    'admin-portal-guide/promotions/create-a-promotion',
                    'admin-portal-guide/promotions/edit-a-promotion',
                    'admin-portal-guide/promotions/copy-promotion-id',
                    'admin-portal-guide/promotions/copy-promotion',
                    'admin-portal-guide/promotions/add-metadata-to-promotion',
                    'admin-portal-guide/promotions/archive-a-promotion',
                    'admin-portal-guide/promotions/assign-promotions-to-store-groups',
                    'admin-portal-guide/promotions/find-serialized-code',
                    'admin-portal-guide/promotions/create-serialized-code',
                  ],
                },
                {
                  type: 'category',
                  label: 'Store Groups',
                  items: [
                    'admin-portal-guide/promotions/create-a-store-group',
                    'admin-portal-guide/promotions/edit-a-store-group',
                    'admin-portal-guide/promotions/view-promotions-for-a-store-group',
                    'admin-portal-guide/promotions/import-promotions-for-a-store-group',
                    'admin-portal-guide/promotions/delete-a-store-group',
                  ],
                },
                {
                  type: 'category',
                  label: 'Advanced Promotions Search',
                  items: [
                    'admin-portal-guide/promotions/advanced-promotions-search',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Store Groups',
              link: { type: 'doc', id: 'admin-portal-guide/store-groups/index' },
              items: [
                'admin-portal-guide/store-groups/create-a-store-group',
                'admin-portal-guide/store-groups/assign-promotions',
                'admin-portal-guide/store-groups/edit-a-store-group',
                'admin-portal-guide/store-groups/view-stores-in-a-store-group',
                'admin-portal-guide/store-groups/import-promotions-for-a-store-group',
                'admin-portal-guide/store-groups/delete-a-store-group',
                'admin-portal-guide/store-groups/copy-a-store-group',
                {
                  type: 'category',
                  label: 'Store Groups - Taxes',
                  items: [
                    'admin-portal-guide/store-groups/create-tax-rules',
                    'admin-portal-guide/store-groups/create-tax-rule-group',
                  ],
                },
                {
                  type: 'category',
                  label: 'Store Groups - Promotions',
                  items: [
                    'admin-portal-guide/store-groups/edit-promotions',
                    'admin-portal-guide/store-groups/unassign-promotions-from-store-group',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'In-Store Devices',
              link: { type: 'doc', id: 'admin-portal-guide/in-store-devices/index' },
              items: [
                'admin-portal-guide/in-store-devices/generate-one-time-password',
                'admin-portal-guide/in-store-devices/view-in-store-device-details',
                'admin-portal-guide/in-store-devices/deactivate-in-store',
              ],
            },
            {
              type: 'category',
              label: 'Bundles',
              link: { type: 'doc', id: 'admin-portal-guide/bundles/index' },
              items: [
                {
                  type: 'category',
                  label: 'Bundles',
                  items: [
                    'admin-portal-guide/bundles/create-a-bundle',
                    'admin-portal-guide/bundles/edit-a-bundle',
                    'admin-portal-guide/bundles/copy-a-bundle',
                    'admin-portal-guide/bundles/add-metafields-to-a-bundle',
                    'admin-portal-guide/bundles/add-an-image-to-a-bundle',
                    'admin-portal-guide/bundles/delete-a-bundle',
                  ],
                },
                {
                  type: 'category',
                  label: 'Choices',
                  items: [
                    'admin-portal-guide/bundles/create-a-choice',
                    'admin-portal-guide/bundles/edit-a-choice',
                    'admin-portal-guide/bundles/copy-a-choice',
                    'admin-portal-guide/bundles/delete-a-choice',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Agents',
              link: { type: 'doc', id: 'admin-portal-guide/agents/index' },
              items: [
                'admin-portal-guide/agents/create-an-agent',
                'admin-portal-guide/agents/edit-an-agent',
              ],
            },
            {
              type: 'category',
              label: 'Customer Support',
              link: { type: 'doc', id: 'admin-portal-guide/customer-support/index' },
              items: [
                {
                  type: 'category',
                  label: 'Orders',
                  items: [
                    'admin-portal-guide/customer-support/order-search',
                  ],
                },
                {
                  type: 'category',
                  label: 'Customers',
                  items: [
                    'admin-portal-guide/customer-support/customer-search',
                  ],
                },
              ],
            },
          ],
        },
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