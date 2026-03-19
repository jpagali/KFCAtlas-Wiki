---
title: Byte Capabilities
description: Start here — what the KFC Atlas / Byte / Helium platform does, how it works, and what markets need to know before going live.
sidebar_label: Start Here
---

# 🧩 Byte Capabilities

> **Audience:** Market Enablement, Launch Teams, Product Managers, Cross-functional Stakeholders
> **Purpose:** Single source of truth for what the Atlas / Byte / Helium platform does, how it's structured, and what's needed to go live.

This section lives outside the operational guides by design. The [Front-end Guide](/docs/frontend/overview) and [Admin Portal Guide](/docs/admin-portal-guide/) tell you *how to operate* the platform — Byte Capabilities tells you *what the platform is and what it can do*.

---

## How to Use This Section

| If you want to… | Go to… |
|---|---|
| Understand the full platform in 5 minutes | [Mental Model](/docs/byte-capabilities/mental-model) |
| See what each layer (Helium / BCOM / Portal) does | [Platform Layers](/docs/byte-capabilities/platform-layers) |
| Find a specific feature | [Domains](/docs/byte-capabilities/domains/identity) — pick your domain |
| Know what can and can't be done | [Capability Boundaries](/docs/byte-capabilities/enablement/capability-boundaries) |
| Prepare for a market rollout | [Reality Check](/docs/byte-capabilities/enablement/reality-check) |
| Get a go/no-go launch checklist | [Market Launch Checklist](/docs/byte-capabilities/enablement/market-launch-checklist) |
| Look up a technical term | [Glossary](/docs/byte-capabilities/reference/glossary) |
| Check performance SLOs | [Performance SLOs](/docs/byte-capabilities/reference/performance-slos) |

---

## The Platform in One Paragraph

**KFC Atlas** is a global digital ordering platform with three interdependent layers. **Helium** is what customers see — the web and app front-end. The **Commerce Backend (BCOM)** is the engine that processes every order, calculating pricing, applying tax, routing payments, and injecting orders to in-store systems. The **Portal** is the admin control plane where market and ops teams configure everything: stores, menus, promotions, taxes, payments, and users.

These three layers depend on a set of external services — Menu, Identity/SSO, PSP (payments), Loyalty/Promos, Order Tracking, CMS, and Analytics. Understanding how these layers interact is the foundation for every launch and operational decision.

---

## The 12 Capability Domains

The platform is organised into 12 functional domains. Each domain has its own page with a feature table, how it works, dependencies, limitations, and links to related wiki guides.

| Domain | What It Covers |
|---|---|
| [Identity & Sign-In](/docs/byte-capabilities/domains/identity) | Account creation, OTP sign-in, Google/Apple OAuth, profile, privacy |
| [Localisation & Order Mode](/docs/byte-capabilities/domains/localisation) | Market detection, delivery vs. collection mode, store locator |
| [Menu Browse & PDP](/docs/byte-capabilities/domains/menu) | Product listing, item detail, modifiers, nutrition/allergens |
| [Cart](/docs/byte-capabilities/domains/cart) | Add/update/remove items, apply promo codes, attach loyalty rewards |
| [Checkout](/docs/byte-capabilities/domains/checkout) | Guest and registered checkout, delivery and collection variants |
| [Payments & Tenders](/docs/byte-capabilities/domains/payments) | Card, saved card, voucher, split tender, gift card |
| [Promotions & Loyalty](/docs/byte-capabilities/domains/promotions-loyalty) | Offers feed, rewards, challenges, loyalty onboarding, comms prefs |
| [Donations & Tips](/docs/byte-capabilities/domains/donations-tips) | Add-Hope donations, delivery driver tips |
| [Order Tracking & History](/docs/byte-capabilities/domains/order-tracking) | Real-time tracking, order history, receipts, reorder, favourites |
| [Content & Legal](/docs/byte-capabilities/domains/content-legal) | CMS pages, legal docs, cookie consent |
| [Engagement & Messaging](/docs/byte-capabilities/domains/engagement) | In-app inbox, push and email notification preferences |
| [Portal — Admin & Configuration](/docs/byte-capabilities/domains/portal-admin) | RBAC, stores, menus, promos, tax, payments, reporting, audit |

---

## What This Section Doesn't Cover

This section is intentionally conceptual. For step-by-step guides on *doing* things in the platform, go to the relevant operational section:

- How to set up and manage stores → [Admin Portal Guide: Stores](/docs/admin-portal-guide/stores/)
- How to create and configure promotions → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/)
- How to build and run promotions campaigns → [Playbooks](/docs/playbooks/onboarding)
- How customers experience the front-end → [Front-end Guide](/docs/frontend/overview)
