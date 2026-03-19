---
title: Platform Layers
description: What each layer of the Atlas / Byte / Helium platform does in plain English, and what markets can configure in each.
sidebar_label: Platform Layers
---

# 🌍 Platform Layers

The Atlas platform has three core layers plus a set of external services. This page gives a plain-English breakdown of what each layer does and — critically — what markets can and cannot configure.

:::caution Key principle
Helium *renders* but doesn't *own* most things. Pricing, eligibility, state, and content all live in the backend or external services. When something looks wrong in the app, the fix is almost always in the backend configuration — not the front-end.
:::

---

## Layer Responsibilities

| Layer | Role | What Markets Configure |
|---|---|---|
| **Helium** | The UI customers use to browse, order, pay | Cannot configure — it is the UI rendering engine |
| **Commerce Backend** | Processes every order — pricing, tax, payment, POS injection | Via Portal — promos, taxes, payment routing |
| **Portal** | Admin tool for markets and ops teams | Store hours, menus, promos, taxes, payments, refunds, users |
| **Menu Service** | Provides item catalogue, prices, options | Via Byte Menu authoring tool (outside Atlas) |
| **Identity / SSO** | Manages customer accounts and sign-in sessions | OTP, Google, Apple — configured per market |
| **PSP / Vault** | Handles card tokenisation and payment capture | PSP profiles configured in Portal |
| **Loyalty & Promo Engine** | Evaluates offer eligibility, rewards, challenges | Promotions authored in Portal |
| **Order Tracking** | Provides real-time delivery status | Optional per market; depends on 3P logistics |
| **POS / KDS** | Receives digital orders in-store | Integration configured per market/vendor |

---

## What Each Layer Does in More Detail

### Helium — Front-End
Helium is the customer-facing web and app experience. It receives data from the Commerce Backend, Menu Service, CMS, and external services, and renders it into the UI the customer sees. Helium does not calculate prices, does not evaluate promo eligibility, and does not own any order state. It is a rendering and orchestration layer only.

### Commerce Backend (BCOM)
BCOM is the engine behind every transaction. When a customer adds an item to their cart, BCOM calculates the price. When they apply a promo code, BCOM validates eligibility server-side. When they pay, BCOM orchestrates the payment intent through the PSP. When an order is placed, BCOM injects it to the in-store POS/KDS. Nothing transactional happens without BCOM.

### Portal — Admin Control Plane
The Portal is where every market-level configuration lives. Markets configure their stores (hours, state, POS mapping), menus (assigning published menu versions, applying patches and price overrides), promotions (eligibility rules, codes, budgets, scoping), tax profiles, payment routing rules, users and access roles, and operational settings. **Without correct Portal configuration, markets cannot go live.**

### Menu Service / Byte Menu
Menu authoring — creating items, setting descriptions and images, managing prices and options — happens in **Byte Menu**, a separate tool outside the Atlas platform. The Portal assigns already-published menu versions to markets and channels. The Portal can apply patches and overrides on top of a published menu, but it cannot create menu content from scratch.

### External Services
The platform depends on a set of external services that are integrated per market: Identity/SSO for customer authentication, a PSP for payment processing, a Loyalty & Promo Engine for offer evaluation, an Order Tracking service for delivery status, a CMS for brand and legal content, and a Geo/Store Locator service. Each of these must be configured and tested per market before launch.

---

:::tip See it in the wiki
- Configuring stores and menus in the Portal → [Admin Portal Guide: Stores](/docs/admin-portal-guide/stores/) and [Menus](/docs/admin-portal-guide/menus/)
- Configuring promotions → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/)
:::
