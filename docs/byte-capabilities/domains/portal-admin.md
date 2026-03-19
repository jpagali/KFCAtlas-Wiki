---
title: Byte Portal — Admin & Configuration
description: What Byte Portal does — the full control plane for market and ops teams covering stores, menus, promotions, taxes, payments, and more.
sidebar_label: Byte Portal — Admin & Config
---

# Byte Portal — Admin & Configuration

**What it does:** Byte Portal is the control plane for all markets and ops teams. It is where everything about the platform is configured — from store hours and menus to promotions, taxes, payments, and refunds.

**Why it matters:** Without Byte Portal, markets cannot go live. Every feature in Byte Helium depends on something being correctly configured in Byte Portal. Misconfiguration in Byte Portal has direct customer impact.

:::danger Byte Portal does not author menus
Menu authoring (creating items, descriptions, prices, options) happens in **Byte Menu** — a separate tool outside the Atlas platform. Byte Portal assigns already-published menu versions to markets and channels. It can apply patches and price overrides, but cannot create menu content from scratch.
:::

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **Users & Roles (RBAC)** | Market teams need scoped access | Invites users, assigns roles, enforces scope-based access (market/group/store) | SSO + MFA for login; RBAC with policy engine; scope guard blocks out-of-scope access | Identity Provider, RBAC service, Audit store | IdP configured per market | Custom roles use approved action whitelist only; all actions audited | Access violation rate, user onboarding time |
| **Store & Group Configuration** | Markets need to configure their restaurants | Manages store admin data, group hierarchies, trading hours, real-time state, and throttling policies | Stores linked to POS; groups define inheritance; trading hours timezone-aware; state (open/paused/closed) affects channels | POS integration, Shared Catalogues | Store data seeded | No cycles in group hierarchy; state is real-time source of truth for all channels | Store data accuracy, downtime events |
| **Menu Assignment & Patching** | Markets need to control which menu is shown where | Assigns published menu versions to market/store/channel; applies patches, dayparts, and overrides | Byte Portal consumes Byte Menu published versions; assignments with validity windows; patch templates for price/availability rules; dayparts for time-based availability and pricing | Byte Menu service, Menu Assignment engine | Menu version published in Byte Menu | Byte Portal does NOT author menus — that's Byte Menu. Conflicting patches are blocked. Daypart behavior still depends on the published menu structure supporting the target entities. | Menu publish success rate |
| **Promotions Configuration** | Marketing teams need to create and manage offers | Creates promotions with eligibility, benefits, schedules, codes, and budgets | Promotion definition → evaluation by Commerce Backend at checkout | Commerce Backend, Promo Engine | Promotion configuration complete | Stacking conflicts resolved by policy; expired budgets auto-block new redemptions | Promotion redemption rate, budget burn rate |
| **Tax Configuration** | Finance teams need to set correct tax rates | Defines tax profiles, categories, rates, rules, and rounding per market | Tax profiles assigned to markets; pricing engine applies at checkout | Tax engine, Pricing service | Tax profile created and assigned | Overlapping rates blocked; must align with local law | Tax accuracy, compliance audit pass rate |
| **Payments Configuration** | Markets need to set up their payment methods | Configures PSP profiles, payment methods, routing rules, surcharge policies, and risk rules | PSP credentials stored in vault (not in Byte Portal); routing engine uses channel/market rules | PSP, Vault, Routing engine | PSP contract in place; credentials in vault | Secrets never exposed in Byte Portal; routing changes must not interrupt payment flows | Payment method availability, routing error rate |
| **Orders & Refunds (Ops)** | Ops teams need to manage customer issues | Search orders (PII-redacted), process refunds, manage non-monetary adjustments | Order search with role-based PII access; refund validated against policy; optional multi-step approval | Orders service, PSP, Audit store | Refund policy configured | Refund caps, time limits, and approver rules set in policy; permanent deletion not allowed | Refund processing time, refund rejection rate |
| **Localisation & Content Management** | Markets need localised content | Manages locales, translation keys, content blocks, announcements, and legal notices | Translation entries per locale; content blocks scheduled by scope; legal notices versioned | CMS, Legal CMS, CMP | Locale enabled for market | Missing translations fall back to default locale | Translation coverage, locale enablement rate |
| **Feature Flags & Settings** | Engineering and product need controlled rollouts | Creates feature flags with targeting rules; manages system settings hierarchy | Flags evaluated at runtime by market/channel/segment; settings inherit global → environment → market | Settings service, Feature flag engine | Flag created and targeted | Bad config rollback via version history or flag kill-switch | Flag adoption rate, configuration error rate |
| **Reporting & Exports** | Teams need data from the platform | Defines reports, saves views, exports data to file or scheduled delivery | Report engine queries data warehouse; exports materialised asynchronously; delivered to S3/FTP/Email/Webhook | Data warehouse, Export engine | Report defined and access granted | Large exports async with progress tracking; RBAC controls what each role can export | Report usage, export job success rate |
| **Webhooks & Integrations** | Third-party systems need platform events | Manages webhook subscriptions for platform events; monitors delivery and DLQ | At-least-once delivery; signed with HMAC/OAuth; DLQ for failed events | Integration/Event platform | Event type subscribed; endpoint configured | At-least-once (not exactly-once); subscribers must handle idempotency | Webhook delivery success rate, DLQ size |
| **Audit & Observability** | Compliance and ops need visibility | Records all admin actions with who/what/when; monitors health checks and SLOs | Structured audit events; access logs; health checks and alert rules; SLO tracking with error budget | Audit store, Observability platform | Observability configured | Audit logs tamper-resistant; modifications not allowed | SLO compliance, audit completeness |

---

:::tip See it in the wiki
Byte Portal features above map directly to the Admin Portal Guide:

- [Stores](/docs/admin-portal-guide/stores/) — Store & Group Configuration
- [Menus](/docs/admin-portal-guide/menus/) and [Products](/docs/admin-portal-guide/products/) — Menu Assignment & Patching
- [Promotions](/docs/admin-portal-guide/promotions/) and [Store Groups](/docs/admin-portal-guide/store-groups/) — Promotions Configuration
- [Bundles](/docs/admin-portal-guide/bundles/) — Bundle & Choice management
- [Agents](/docs/admin-portal-guide/agents/) — Automation Agents
- [Customer Support](/docs/admin-portal-guide/customer-support/) — Orders & Refunds
- [In-Store Devices](/docs/admin-portal-guide/in-store-devices/) — POS device management
:::
