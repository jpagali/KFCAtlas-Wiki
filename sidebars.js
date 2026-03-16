/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  // ─── FRONT-END GUIDE ───────────────────────────────────────────────────────
  // For restaurant teams + BMUs who need to understand the customer-facing product
  frontendSidebar: [
    {
      type: 'category',
      label: 'Front-end Overview',
      link: { type: 'doc', id: 'frontend/overview' },
      collapsed: false,
      items: [
        'frontend/design-system',
        {
          type: 'category',
          label: 'Customer Experience',
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'Customer Journey',
              link: { type: 'doc', id: 'frontend/customer-journey/index' },
              collapsed: false,
              items: [
                {
                  type: 'category',
                  label: 'Step 1 - Setup Order',
                  link: { type: 'doc', id: 'frontend/customer-journey/setup-order/index' },
                  items: [
                    'frontend/customer-journey/setup-order/set-order-mode',
                    'frontend/customer-journey/setup-order/address-or-store-selection',
                    'frontend/customer-journey/setup-order/change-order-mode',
                    'frontend/customer-journey/setup-order/reorder',
                    'frontend/customer-journey/setup-order/review-order-settings',
                    'frontend/customer-journey/setup-order/store-unavailable-handling',
                  ],
                },
                {
                  type: 'category',
                  label: 'Step 2 - Find Products',
                  link: { type: 'doc', id: 'frontend/customer-journey/find-products/index' },
                  items: [
                    'frontend/customer-journey/find-products/home-page',
                    'frontend/customer-journey/find-products/menu-landing',
                    'frontend/customer-journey/find-products/menu-listing',
                    'frontend/customer-journey/find-products/format-options',
                    'frontend/customer-journey/find-products/byob-select',
                    'frontend/customer-journey/find-products/childrens-only',
                    'frontend/customer-journey/find-products/catering-menu',
                  ],
                },
                {
                  type: 'category',
                  label: 'Step 3 - Find Deals and Rewards',
                  link: { type: 'doc', id: 'frontend/customer-journey/find-deals-and-rewards/index' },
                  items: [
                    'frontend/customer-journey/find-deals-and-rewards/loyalty-tile',
                    'frontend/customer-journey/find-deals-and-rewards/rewards-listing',
                    'frontend/customer-journey/find-deals-and-rewards/promo-options',
                    'frontend/customer-journey/find-deals-and-rewards/challenge',
                  ],
                },
                {
                  type: 'category',
                  label: 'Step 4 - Preview Product and Customize',
                  link: { type: 'doc', id: 'frontend/customer-journey/preview-product-and-customize/index' },
                  items: [
                    'frontend/customer-journey/preview-product-and-customize/product-detail',
                    'frontend/customer-journey/preview-product-and-customize/add-on-and-cross-sell',
                    'frontend/customer-journey/preview-product-and-customize/customize',
                    'frontend/customer-journey/preview-product-and-customize/nutrition-and-allergen',
                  ],
                },
                {
                  type: 'category',
                  label: 'Step 5 - Order and Get',
                  link: { type: 'doc', id: 'frontend/customer-journey/order-and-get/index' },
                  items: [
                    'frontend/customer-journey/order-and-get/cart',
                    'frontend/customer-journey/order-and-get/checkout',
                  ],
                },
                {
                  type: 'category',
                  label: 'Step 6 - Track Order',
                  link: { type: 'doc', id: 'frontend/customer-journey/track-order/index' },
                  items: [
                    'frontend/customer-journey/track-order/pickup',
                    'frontend/customer-journey/track-order/delivery',
                  ],
                },
                {
                  type: 'category',
                  label: 'Supporting Journeys',
                  items: [
                    {
                      type: 'category',
                      label: 'Access Account and Manage Profile',
                      link: { type: 'doc', id: 'frontend/customer-journey/access-account-and-manage-profile/index' },
                      items: [
                        'frontend/customer-journey/access-account-and-manage-profile/sign-up',
                        'frontend/customer-journey/access-account-and-manage-profile/sign-in',
                        'frontend/customer-journey/access-account-and-manage-profile/account',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Get Help',
                      link: { type: 'doc', id: 'frontend/customer-journey/get-help/index' },
                      items: [
                        'frontend/customer-journey/get-help/faqs',
                        'frontend/customer-journey/get-help/contact-kfc',
                        'frontend/customer-journey/get-help/enquiry-form',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Find a Store',
                      link: { type: 'doc', id: 'frontend/customer-journey/find-a-store/index' },
                      items: [
                        'frontend/customer-journey/find-a-store/find-a-kfc',
                        'frontend/customer-journey/find-a-store/kfc-store-details',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Learn About KFC',
                      link: { type: 'doc', id: 'frontend/customer-journey/learn-about-kfc/index' },
                      items: [
                        'frontend/customer-journey/learn-about-kfc/content-landing',
                        'frontend/customer-journey/learn-about-kfc/nutrition-and-allergen',
                        'frontend/customer-journey/learn-about-kfc/app-tour',
                      ],
                    },
                  ],
                },
              ],
            },
            'frontend/order-channels',
            {
              type: 'category',
              label: 'Customer Engagement Surveys',
              link: { type: 'doc', id: 'frontend/customer-engagement-surveys/index' },
              collapsed: false,
              items: [
                'frontend/customer-engagement-surveys/qualtrics',
              ],
            },
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
    },
  ],

  // ─── ADMIN PORTAL GUIDE ────────────────────────────────────────────────────
  // For restaurant teams + regional office — how to operate Byte Commerce Admin
  adminSidebar: [
    {
      type: 'category',
      label: 'Admin Portal Guide',
      link: { type: 'doc', id: 'admin-portal-guide/index' },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Stores',
          key: 'admin-root-stores',
          link: { type: 'doc', id: 'admin-portal-guide/stores/index' },
          items: [
            {
              type: 'category',
              label: 'Publish History',
              items: [
                'admin-portal-guide/stores/view-a-stores-publish-history-copy-menu-publish-job-id/index',
              ],
            },
            {
              type: 'category',
              label: 'Stores',
              key: 'admin-stores-section',
              items: [
                'admin-portal-guide/stores/create-a-store/index',
                'admin-portal-guide/stores/edit-store-details/index',
                'admin-portal-guide/stores/view-a-stores-menu/index',
                'admin-portal-guide/stores/add-metafields-to-a-menu/index',
                'admin-portal-guide/stores/publish-a-menu/index',
                'admin-portal-guide/stores/item-snooze/index',
                'admin-portal-guide/stores/view-taxes/index',
                'admin-portal-guide/stores/pos/index',
                'admin-portal-guide/stores/view-promotions/index',
                'admin-portal-guide/stores/viewunassign-a-stores-store-groups/index',
                'admin-portal-guide/stores/2a-accept-online-orders-turn-on-or-off/index',
                'admin-portal-guide/stores/2b-appear-in-search-result-turn-on-or-off/index',
                'admin-portal-guide/stores/assign-new-menu/index',
                'admin-portal-guide/stores/edit-patch-list/index',
                'admin-portal-guide/stores/publish-menu/index',
                'admin-portal-guide/stores/transfer-patch-list/index',
                'admin-portal-guide/stores/2c-allow-future-orders-turn-on-or-off/index',
              ],
            },
            {
              type: 'category',
              label: 'Beneficaries',
              items: [
                'admin-portal-guide/stores/create-a-beneficiary/index',
                'admin-portal-guide/stores/editdelete-a-beneficiary/index',
                'admin-portal-guide/stores/view-a-stores-beneficiaries/index',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Menus',
          key: 'admin-root-menus',
          link: { type: 'doc', id: 'admin-portal-guide/menus/index' },
          items: [
            {
              type: 'category',
              label: 'Named Prices',
              items: [
                'admin-portal-guide/menus/create-a-named-price/index',
                'admin-portal-guide/menus/edit-named-price/index',
                'admin-portal-guide/menus/delete-named-price/index',
              ],
            },
            {
              type: 'category',
              label: 'Categories',
              items: [
                'admin-portal-guide/menus/create-a-category/index',
                'admin-portal-guide/menus/edit-a-category/index',
                'admin-portal-guide/menus/copy-a-category/index',
                'admin-portal-guide/menus/add-metafields-to-a-category/index',
                'admin-portal-guide/menus/delete-a-category/index',
              ],
            },
            {
              type: 'category',
              label: 'Patches',
              items: [
                'admin-portal-guide/menus/create-a-patch/index',
                'admin-portal-guide/menus/assign-a-patch-add-to-patch-list/index',
                'admin-portal-guide/menus/edit-a-patch/index',
                'admin-portal-guide/menus/copy-a-patch/index',
                'admin-portal-guide/menus/delete-a-patch/index',
                'admin-portal-guide/menus/assign-a-patch-replace-existing-list/index',
              ],
            },
            {
              type: 'category',
              label: 'Menus',
              key: 'admin-menus-section',
              items: [
                'admin-portal-guide/menus/publish-a-menu/index',
                'admin-portal-guide/menus/create-a-menu/index',
                'admin-portal-guide/menus/edit-a-menu/index',
                'admin-portal-guide/menus/copy-a-menu/index',
                'admin-portal-guide/menus/assign-a-menu/index',
                'admin-portal-guide/menus/delete-a-menu/index',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Products',
          key: 'admin-root-products',
          link: { type: 'doc', id: 'admin-portal-guide/products/index' },
          items: [
            {
              type: 'category',
              label: 'Products',
              key: 'admin-products-section',
              items: [
                'admin-portal-guide/products/edit-a-product/index',
                'admin-portal-guide/products/copy-a-product/index',
                'admin-portal-guide/products/add-metafields-to-a-product/index',
                'admin-portal-guide/products/add-an-image-to-a-product/index',
                'admin-portal-guide/products/delete-a-product/index',
                'admin-portal-guide/products/create-a-product/index',
              ],
            },
            {
              type: 'category',
              label: 'Options',
              items: [
                'admin-portal-guide/products/create-an-option/index',
                'admin-portal-guide/products/edit-an-option/index',
                'admin-portal-guide/products/copy-an-option/index',
                'admin-portal-guide/products/delete-an-option/index',
              ],
            },
            {
              type: 'category',
              label: 'Option Value',
              items: [
                'admin-portal-guide/products/create-an-option-value/index',
                'admin-portal-guide/products/edit-an-option-value/index',
                'admin-portal-guide/products/add-metafields-to-an-option-value/index',
                'admin-portal-guide/products/copy-an-option-value/index',
                'admin-portal-guide/products/delete-an-option-value/index',
              ],
            },
            {
              type: 'category',
              label: 'Slots',
              items: [
                'admin-portal-guide/products/create-a-slot/index',
                'admin-portal-guide/products/edit-a-slot/index',
                'admin-portal-guide/products/copy-a-slot/index',
                'admin-portal-guide/products/add-metafields-to-a-slot/index',
                'admin-portal-guide/products/delete-a-slot/index',
              ],
            },
            {
              type: 'category',
              label: 'Modifier',
              items: [
                'admin-portal-guide/products/create-a-modifier/index',
                'admin-portal-guide/products/edit-a-modifier/index',
                'admin-portal-guide/products/copy-a-modifier/index',
                'admin-portal-guide/products/edit-item-availability/index',
                'admin-portal-guide/products/delete-a-modifier/index',
                'admin-portal-guide/products/add-metafields-to-a-modifier/index',
              ],
            },
            {
              type: 'category',
              label: 'Weights',
              items: [
                'admin-portal-guide/products/create-a-weight/index',
                'admin-portal-guide/products/edit-a-weight/index',
                'admin-portal-guide/products/copy-a-weight/index',
                'admin-portal-guide/products/delete-a-weight/index',
                'admin-portal-guide/products/add-metafields-to-a-weight/index',
              ],
            },
            {
              type: 'category',
              label: 'Variants',
              items: [
                'admin-portal-guide/products/edit-a-variant/index',
                'admin-portal-guide/products/add-metafields-to-a-variant/index',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Promotions',
          key: 'admin-root-promotions',
          link: { type: 'doc', id: 'admin-portal-guide/promotions/index' },
          items: [
            {
              type: 'category',
              label: 'Promotions',
              key: 'admin-promotions-section',
              items: [
                'admin-portal-guide/promotions/create-a-promotion/index',
                'admin-portal-guide/promotions/edit-a-promotion/index',
                'admin-portal-guide/promotions/copy-promotion-id/index',
                'admin-portal-guide/promotions/copy-promotion/index',
                'admin-portal-guide/promotions/add-metadata-to-promotion/index',
                'admin-portal-guide/promotions/archive-a-promotion/index',
                'admin-portal-guide/promotions/assign-promotions-to-store-groups/index',
                'admin-portal-guide/promotions/find-serialized-code/index',
                'admin-portal-guide/promotions/create-serialized-code/index',
              ],
            },
            {
              type: 'category',
              label: 'Store Groups',
              key: 'admin-promotions-store-groups-section',
              items: [
                'admin-portal-guide/promotions/create-a-store-group/index',
                'admin-portal-guide/promotions/edit-a-store-group/index',
                'admin-portal-guide/promotions/view-promotions-for-a-store-group/index',
                'admin-portal-guide/promotions/import-promotions-for-a-store-group/index',
                'admin-portal-guide/promotions/delete-a-store-group/index',
              ],
            },
            {
              type: 'category',
              label: 'Advanced Promotions Search',
              items: [
                'admin-portal-guide/promotions/advanced-promotions-search/index',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Store Groups',
          key: 'admin-root-store-groups',
          link: { type: 'doc', id: 'admin-portal-guide/store-groups/index' },
          items: [
            'admin-portal-guide/store-groups/create-a-store-group/index',
            'admin-portal-guide/store-groups/assign-promotions/index',
            'admin-portal-guide/store-groups/edit-a-store-group/index',
            'admin-portal-guide/store-groups/view-stores-in-a-store-group/index',
            'admin-portal-guide/store-groups/import-promotions-for-a-store-group/index',
            'admin-portal-guide/store-groups/delete-a-store-group/index',
            'admin-portal-guide/store-groups/copy-a-store-group/index',
            {
              type: 'category',
              label: 'Store Groups - Taxes',
              items: [
                'admin-portal-guide/store-groups/create-tax-rules/index',
                'admin-portal-guide/store-groups/create-tax-rule-group/index',
              ],
            },
            {
              type: 'category',
              label: 'Store Groups - Promotions',
              items: [
                'admin-portal-guide/store-groups/edit-promotions/index',
                'admin-portal-guide/store-groups/unassign-promotions-from-store-group/index',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'In-Store Devices',
          link: { type: 'doc', id: 'admin-portal-guide/in-store-devices/index' },
          items: [
            'admin-portal-guide/in-store-devices/generate-one-time-password/index',
            'admin-portal-guide/in-store-devices/view-in-store-device-details/index',
            'admin-portal-guide/in-store-devices/deactivate-in-store/index',
          ],
        },
        {
          type: 'category',
          label: 'Bundles',
          key: 'admin-root-bundles',
          link: { type: 'doc', id: 'admin-portal-guide/bundles/index' },
          items: [
            {
              type: 'category',
              label: 'Bundles',
              key: 'admin-bundles-section',
              items: [
                'admin-portal-guide/bundles/create-a-bundle/index',
                'admin-portal-guide/bundles/edit-a-bundle/index',
                'admin-portal-guide/bundles/copy-a-bundle/index',
                'admin-portal-guide/bundles/add-metafields-to-a-bundle/index',
                'admin-portal-guide/bundles/add-an-image-to-a-bundle/index',
                'admin-portal-guide/bundles/delete-a-bundle/index',
              ],
            },
            {
              type: 'category',
              label: 'Choices',
              items: [
                'admin-portal-guide/bundles/create-a-choice/index',
                'admin-portal-guide/bundles/edit-a-choice/index',
                'admin-portal-guide/bundles/copy-a-choice/index',
                'admin-portal-guide/bundles/delete-a-choice/index',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Agents',
          link: { type: 'doc', id: 'admin-portal-guide/agents/index' },
          items: [
            'admin-portal-guide/agents/create-an-agent/index',
            'admin-portal-guide/agents/edit-an-agent/index',
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
                'admin-portal-guide/customer-support/order-search/index',
              ],
            },
            {
              type: 'category',
              label: 'Customers',
              items: [
                'admin-portal-guide/customer-support/customer-search/index',
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
      label: 'Promotions',
      collapsed: false,
      items: [
        'playbooks/onboarding',
        'playbooks/promotions-setup-guide',
        {
          type: 'category',
          label: 'Promotion Recipes',
          collapsed: false,
          items: [
            'playbooks/promotion-recipes/buy-1-get-1-free-bogo',
            'playbooks/promotion-recipes/minimum-spend-discount',
            'playbooks/promotion-recipes/app-exclusive-deal',
            'playbooks/promotion-recipes/lunch-special-time-limited',
            'playbooks/promotion-recipes/free-delivery-on-large-orders',
            'playbooks/promotion-recipes/registered-customer-exclusive',
            'playbooks/promotion-recipes/coupon-code-discount',
            'playbooks/promotion-recipes/drive-thru-only-deal',
            'playbooks/promotion-recipes/daily-deal-once-per-customer-per-day',
            'playbooks/promotion-recipes/stacked-multi-condition-promotion',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Braze & Rewards',
      collapsed: false,
      items: ['playbooks/runbook'],
    },
  ],

};

module.exports = sidebars;
