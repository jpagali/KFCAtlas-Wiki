---
title: Reality Check
description: The most expensive rollout problems come from misunderstandings, not missing features. Read this before going live.
sidebar_label: Reality Check
---

# ⚠️ Reality Check — What Markets Need to Know

> The most expensive rollout problems come from misunderstandings, not missing features. Read this before going live.

---

## The Big Misconceptions

These are the assumptions teams most commonly bring into rollout — and the reality behind each one.

---

### ❌ "Helium owns pricing"

**Reality:** Helium displays prices — it does not own, calculate, or control them. Pricing is entirely owned by the Commerce Backend and Menu Service. If prices are wrong in the app, the fix is in the backend or menu configuration — not in Helium.

---

### ❌ "We can configure the checkout flow in Helium"

**Reality:** Checkout flows (variants, steps, fees) are orchestrated by the Commerce Backend's Checkout Orchestrator. Markets define which variant to use via Portal configuration. Helium renders what the backend tells it.

---

### ❌ "The Portal lets us author our menu"

**Reality:** The Portal assigns and patches already-published menus. Menu authoring (creating items, descriptions, prices) happens in **Byte Menu** — a separate tool outside the Atlas platform. The Portal cannot create menu content from scratch.

---

### ❌ "Promotions are configured in Helium"

**Reality:** Promotion rules, eligibility, codes, and budgets are all configured in the **Portal**. Helium only renders what the Promo Engine returns. Eligibility is always computed server-side.

---

### ❌ "Real-time delivery tracking is always available"

**Reality:** Delivery tracking is **optional per market**. It requires integration with a third-party logistics provider. Without this, customers see POS order status only (accepted/ready/completed), not live GPS tracking.

---

### ❌ "Loyalty works automatically when a market goes live"

**Reality:** Loyalty requires three things: (1) the loyalty programme configured for the market, (2) the customer to be signed in, and (3) the customer to have enrolled. Guest users get no loyalty benefits.

---

## Hidden Dependencies

These are features that silently depend on other things being in place first. If the dependency is missing, the feature either fails at runtime or doesn't appear at all.

| Feature | What It Silently Depends On | Impact if Missing |
|---|---|---|
| Promo eligibility | Server-side Promo Engine per market | Promos may appear but fail at redemption |
| Delivery tracking | 3P logistics integration per market | Tracking shows as unavailable |
| Saved addresses | Customer being signed in | Guest users lose their addresses each session |
| Order history | Customer account existing and linked | Orders not visible in history |
| Challenges & gamification | Loyalty programme enabled per market | Challenges tab doesn't appear |
| Cookie consent | CMP configured per market | Consent banner may not comply with local law |
| Webhook subscribers | Idempotent handling on their end | Events may be processed twice (at-least-once delivery) |
| Refund processing | Refund policy configured in Portal | Refund requests will fail validation |
| Tip feature | Delivery mode active; PSP configured for separate capture | Tip not available to all markets |
| Tax accuracy | Tax profile assigned to market in Portal | Orders may show incorrect tax or fail at checkout |

---

## Common Failure Points During Rollout

### Store configuration issues
Trading hours set in wrong timezone. Real-time store state not integrated with POS. Result: customers try to order from closed stores.

### Menu not published
Menu version authored in Byte Menu but not assigned/published to the market in Portal. Result: customers see no menu.

### Promo codes not scoped correctly
Promos created without correct market/channel/date scoping. Result: promos visible globally when they're meant to be local.

### PSP credentials not in vault
Portal configured but PSP secrets not placed in the secrets vault. Result: card payments fail silently.

### Locale/translation incomplete
Market launched with incomplete translation keys. Result: customers see English fallback text or empty fields.

### Delivery coverage zone not configured
Delivery mode enabled but no coverage zones defined for the market. Result: all delivery addresses rejected.

### Loyalty not enabled for market
Loyalty UI visible in Helium but programme not enabled for market in Loyalty service. Result: enrolment fails.

---

## Where Markets Will Struggle Most

| Area | Risk Level | What to Do |
|---|---|---|
| Tax configuration | 🔴 High | Work with Finance + Portal tax specialist before go-live |
| Menu publication workflow | 🔴 High | Ensure Byte Menu and Portal teams aligned on publish → assign → preview → publish to channels pipeline |
| PSP / Payment setup | 🔴 High | PSP contract, vault secrets, routing rules, and surcharge all need to be in place before checkout testing |
| Delivery tracking | 🟡 Medium | Decide early if market will have real-time tracking; affects customer expectation setting |
| Loyalty enablement | 🟡 Medium | Loyalty is market-opt-in; needs coordination with Global Loyalty team |
| CMS content readiness | 🟡 Medium | About pages, FAQs, legal docs must be authored before launch |
| Feature flag configuration | 🟡 Medium | Features gated by flags; confirm which flags are on for market and test them |
| Translation completeness | 🟢 Low (but visible) | Run translation coverage report before UAT; missing keys fall back to English |

---

:::tip Use the checklist
The [Market Launch Checklist](/docs/byte-capabilities/enablement/market-launch-checklist) turns everything on this page into concrete go/no-go gates for your launch.
:::
