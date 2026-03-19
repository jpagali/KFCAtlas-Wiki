---
title: Market Launch Checklist
description: A go/no-go checklist for market teams launching on the Atlas / Byte / Helium platform. Built from the reality layer — these are the things that actually fail if skipped.
sidebar_label: Market Launch Checklist
---

# ✅ Market Launch Checklist

> This checklist is built from the [Reality Check](/docs/byte-capabilities/enablement/reality-check) — the dependency gaps and failure patterns that appear in every rollout. Work through it in order. Do not start UAT until Phase 1 is complete.

---

## How to Use This Checklist

Each item has a **risk level** and a **go/no-go gate**. Items marked 🔴 are hard blockers — launch cannot proceed safely without them. Items marked 🟡 should be confirmed before UAT begins. Items marked 🟢 are polish items that should be done before launch day.

---

## Phase 1 — Foundation (Must be complete before any testing)

### 1.1 Portal Access & Users

:::danger Go / No-Go Gate
Testing cannot begin until the team has scoped Portal access.
:::

- [ ] Portal environment is provisioned for the market
- [ ] Market admin users invited and assigned correct roles (RBAC)
- [ ] Scope Guard verified — users cannot access out-of-market data
- [ ] MFA enabled for all Portal users

---

### 1.2 Store Configuration

:::danger Go / No-Go Gate
Customers cannot order if stores are missing or misconfigured.
:::

- [ ] All launch stores created in Portal with correct store data
- [ ] Trading hours entered in the **correct local timezone** (common failure point)
- [ ] Store real-time state integrated with POS (open/paused/closed reflects live state)
- [ ] Store groups configured with correct hierarchy — no cycles
- [ ] Throttling policies set (order limits per time window) if applicable

---

### 1.3 Menu

:::danger Go / No-Go Gate
Customers see no menu if the publication pipeline is not complete.
:::

- [ ] Menu content fully authored in **Byte Menu** (not Portal)
- [ ] Menu version published in Byte Menu for all launch channels
- [ ] Menu version assigned to the market in Portal
- [ ] Menu tested: correct items, prices, and modifiers show per store/channel
- [ ] Delivery-only and collection-only items correctly scoped by channel
- [ ] Nutrition and allergen data authored in Byte Menu (if required by market)

---

### 1.4 Tax Configuration

:::danger Go / No-Go Gate
Incorrect tax causes incorrect pricing at checkout — a financial and compliance risk.
:::

- [ ] Tax profile created for market with correct rates and categories
- [ ] Tax rules verified against local tax law with Finance sign-off
- [ ] Tax profile assigned to market in Portal
- [ ] End-to-end checkout test shows correct tax breakdown

---

### 1.5 Payments / PSP

:::danger Go / No-Go Gate
Payments cannot process if the PSP is not configured end-to-end.
:::

- [ ] PSP contract in place for market
- [ ] PSP credentials stored in the Vault (NOT in Portal directly)
- [ ] PSP profile created in Portal with correct payment methods enabled
- [ ] Routing rules configured (channel/market-specific routing)
- [ ] Surcharge and fee policies configured (if applicable)
- [ ] End-to-end card payment tested successfully in staging

---

## Phase 2 — Channels & Experiences (Must be complete before UAT)

### 2.1 Localisation

:::warning Pre-UAT Gate
Wrong localisation means customers see incorrect menus, prices, or text.
:::

- [ ] Market configured in Portal / Config service with correct locale
- [ ] Language/locale detection tested (geo-IP and explicit selection)
- [ ] Translation keys complete for all UI strings — run coverage report
- [ ] Missing translations confirmed to fall back to English correctly (not to blank fields)

---

### 2.2 Order Modes

:::warning Pre-UAT Gate
Order mode is the entry point — if this fails, no order can be placed.
:::

- [ ] Collection mode tested end-to-end: store selection → menu → checkout → order placed
- [ ] Delivery mode tested end-to-end: address entry → coverage check → menu → checkout → order placed
- [ ] Delivery coverage zones configured in Portal / Geo service (if delivery enabled)
- [ ] Delivery mode disabled for markets not supporting delivery
- [ ] Store state (open/closed) correctly blocks ordering from closed stores

---

### 2.3 Identity & Accounts

- [ ] OTP email sign-in tested (registration and login)
- [ ] Google OAuth tested (if enabled for market)
- [ ] Apple Sign-In tested (if enabled for market)
- [ ] Profile edit, communication preferences, and account deletion working
- [ ] Guest checkout path tested (no account required)

---

### 2.4 Promotions

:::warning Pre-UAT Gate
Mis-scoped promos can be redeemed by the wrong market or channel.
:::

- [ ] All launch promotions configured in Portal with correct:
  - Market scoping (not global unless intended)
  - Channel scoping (delivery vs. collection where applicable)
  - Date range (start and end dates set)
  - Budget limits (redemption caps configured)
- [ ] Promo code tested: applies correctly, invalid code returns error but keeps cart
- [ ] Promotion does not stack with other promos unless stacking is intended

---

### 2.5 Loyalty (If market is launching with Loyalty)

- [ ] Loyalty programme enabled for market with Global Loyalty team
- [ ] Loyalty onboarding flow tested for new sign-ups
- [ ] Points balance shows correctly post-order
- [ ] Rewards catalogue shows correct rewards for market
- [ ] Reward redemption tested end-to-end
- [ ] Challenges configured (if applicable)
- [ ] Birthday / sign-up reward triggers configured

---

### 2.6 Delivery Tracking (If market has real-time tracking)

- [ ] 3P logistics integration confirmed and tested
- [ ] Real-time ETA shown correctly on order tracking screen
- [ ] Fallback behaviour confirmed if tracking events are delayed

---

## Phase 3 — Content & Legal (Must be complete before launch day)

### 3.1 CMS Content

:::warning These will be visible to customers on day one.
:::

- [ ] Homepage content authored and published in CMS
- [ ] About / Our History page published
- [ ] FAQ content authored and published
- [ ] Careers / job board configured (if applicable)

---

### 3.2 Legal & Compliance

- [ ] Terms & Conditions published in Legal CMS for market locale and effective date
- [ ] Privacy Policy published for market locale
- [ ] Cookie categories configured in CMP per local cookie law
- [ ] Cookie consent banner tested — preferences correctly stored

---

## Phase 4 — Operations (Before go-live sign-off)

### 4.1 Feature Flags

- [ ] All market-specific feature flags reviewed and set correctly in Portal
- [ ] Kill-switch flags identified for critical features
- [ ] Flag configuration tested in staging — no unexpected features enabled or disabled

---

### 4.2 Webhooks & Integrations (If applicable)

- [ ] Webhook subscriptions configured for third-party systems
- [ ] Subscriber endpoints confirmed as idempotent (handle duplicate events safely)
- [ ] DLQ (Dead Letter Queue) monitored and alerts configured

---

### 4.3 Refunds & Ops

- [ ] Refund policy configured in Portal (caps, time limits, approver rules)
- [ ] Ops team has Portal access to process refunds
- [ ] Order search tested with correct role-based PII access

---

### 4.4 Observability

- [ ] Health checks and SLO dashboards configured for the market
- [ ] Alert rules active for checkout, payment, and tracking services
- [ ] Audit log access confirmed for compliance team

---

## Final Sign-Off

| Area | Owner | Signed Off |
|---|---|---|
| Store & Menu configuration | Market Portal Admin | ☐ |
| Tax configuration | Finance | ☐ |
| PSP / Payments | Payments team | ☐ |
| Promotions scoping | Marketing / Portal Admin | ☐ |
| Legal & compliance content | Legal team | ☐ |
| Translation completeness | Localisation team | ☐ |
| Feature flags | Product team | ☐ |
| End-to-end UAT passed | QA / Launch team | ☐ |

---

:::tip Related reading
- [Reality Check](/docs/byte-capabilities/enablement/reality-check) — the failure patterns this checklist is designed to prevent
- [Capability Boundaries](/docs/byte-capabilities/enablement/capability-boundaries) — who owns what before you raise the wrong ticket
:::
