---
title: Byte Helium Capabilities
description: All customer-facing capabilities owned by Byte Helium — the web and app front-end of the KFC Atlas platform.
sidebar_label: Overview
---

# 🎨 Byte Helium Capabilities

**Byte Helium** is the customer-facing front-end — the web and app experience every KFC customer interacts with. It covers everything from sign-in and menu browsing through to checkout, payment, and post-order tracking.

Byte Helium renders what the backend provides. It does not own pricing, promo eligibility, order state, or content — those belong to the Commerce Backend, Promo Engine, and CMS respectively. Byte Helium's job is to present information clearly and capture customer intent reliably.

---

## Byte Helium Capability Domains

| Domain | What It Covers |
|---|---|
| [Identity & Sign-In](/docs/byte-capabilities/domains/identity) | Account creation, OTP sign-in, Google/Apple OAuth, profile, privacy |
| [Localisation & Order Mode](/docs/byte-capabilities/domains/localisation) | Market detection, delivery vs. collection mode, store locator |
| [Menu Browse & PDP](/docs/byte-capabilities/domains/menu) | Product listing, item detail, modifiers, nutrition/allergens |
| [Cart](/docs/byte-capabilities/domains/cart) | Add/update/remove items, apply promo codes, attach loyalty rewards |
| [Checkout](/docs/byte-capabilities/domains/checkout) | Guest and registered checkout, delivery and collection variants |
| [Payments & Tenders](/docs/byte-capabilities/domains/payments) | Card, saved card, voucher, split tender, gift card |
| [Promotions & Loyalty](/docs/byte-capabilities/domains/promotions-loyalty) | Offers feed, rewards, challenges, loyalty onboarding, comms prefs |
| [Donations & Tips](/docs/byte-capabilities/domains/donations-tips) | Add-Hope charitable donations, delivery driver tips |
| [Order Tracking & History](/docs/byte-capabilities/domains/order-tracking) | Real-time delivery tracking, order history, receipts, reorder, favourites |
| [Content & Legal](/docs/byte-capabilities/domains/content-legal) | CMS brand pages, legal documents, cookie consent |
| [Engagement & Messaging](/docs/byte-capabilities/domains/engagement) | In-app inbox, push and email notification preferences |

---

:::caution What Byte Helium does not own
Byte Helium renders but does not own: pricing (Commerce Backend), promo eligibility (Promo Engine), loyalty points (Loyalty service), payment capture (PSP), menu content (Byte Menu), legal content (Legal CMS), or store state (Byte Portal + POS). See [Capability Boundaries](/docs/byte-capabilities/enablement/capability-boundaries) for the full ownership map.
:::
