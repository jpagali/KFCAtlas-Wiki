---
title: Promotions & Loyalty
description: How the Atlas platform surfaces personalised offers, manages rewards, tracks challenges, and connects customer loyalty accounts to orders.
sidebar_label: Promotions & Loyalty
---

# Promotions & Loyalty

**What it does:** Surfaces personalised offers, manages rewards, tracks challenges, and connects the customer's loyalty account to their orders.

**Why it matters:** Loyalty and promos are key revenue and retention levers. Every mis-rendered offer or failed redemption erodes trust. This domain spans the full customer journey — from discovery to order completion.

:::caution Eligibility is always server-side
Byte Helium never computes promo or reward eligibility locally. All eligibility evaluation happens in the Promo Engine on the server. If an offer appears but fails at redemption, the fix is in the promo configuration in Byte Portal — not in Byte Helium.
:::

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **View Localised Offers & Rewards** | Customer needs to discover what deals are available | Shows personalised offers page for the customer's market and account | Byte Helium fetches offer feed from Promo Engine with market + user context; personalised if signed in | Promo Engine, Loyalty service | Localisation complete | Unauthenticated users see non-personalised offers; offers feed p95 ≤200ms | Offers page visits, offer click rate |
| **Loyalty Onboarding** | New customers don't know about the rewards programme | Introduces the loyalty programme and prompts enrolment | In-app flow guides customer to join; linked to account creation or post-order | Loyalty service | Customer signed in | Loyalty programme must be enabled for market | Loyalty enrolment rate |
| **Sign Up for Loyalty & Rewards** | Customer wants to join the rewards programme | Enrols customer in the market's loyalty programme | Enrolment call to Loyalty service; points balance initialised | Loyalty service | Customer signed in | Cannot join without an account; programme rules vary by market | Loyalty membership rate |
| **View Points Balance** | Loyalty member wants to know how many points they have | Displays the customer's current points balance | Loyalty service returns points balance with expiry dates | Loyalty service | Customer signed in and enrolled | Points accuracy depends on Loyalty service sync | Points engagement rate |
| **View All Rewards** | Loyalty member wants to browse available rewards | Lists all rewards in the catalogue with required points cost | Rewards feed from Loyalty service | Loyalty service | Enrolled in loyalty | Reward availability market-specific; cost in points varies | Rewards page views |
| **Redeem a Reward** | Customer wants to use earned points | Converts points into a reward benefit applied to the cart | Reward redemption call (idempotent); token applied to cart | Loyalty service, Cart Service | Points balance sufficient; cart active | Double-redemption prevented (409); reward may expire | Reward redemption rate |
| **View & Complete Challenges** | Gamification drives repeat visits | Shows challenges customers can complete for bonus points/rewards | Challenge feed from Loyalty/Gamification service; completion tracked | Loyalty/Gamification service | Enrolled in loyalty | Market must have challenges configured | Challenge participation rate |
| **Receive Rewards on Birthday / Sign-Up** | Triggered loyalty events drive engagement | Automatically grants reward on special dates | Loyalty service triggers grant events; customer notified | Loyalty service, Engagement platform | Enrolled; DOB captured (for birthday) | Requires correct profile data; market config controls which triggers are active | Reward grant rate, post-grant order rate |
| **View & Manage Communication Preferences** | Customer controls their marketing preferences | Lets customer opt in/out of email, push, SMS marketing | CRM Prefs API read/write; audit trail maintained; synced to CMP | CRM, CMP, Push provider | Signed in | Market-specific channels; audit trail required for compliance | Opt-in rate per channel |
| **In-App Messages (Inbox)** | Brand needs to reach customers in-app | Shows a feed of personalised in-app messages from CRM campaigns | Engagement platform provides message feed; messages paginated; deep links supported | Engagement platform | Signed in (personalised) or anonymous (global) | Message freshness ≤60s; deep link targets must be active | Inbox open rate, message click rate |

---

## Technical Sources

<details>
<summary>📎 Technical Source: Offers Feed / Reward Redemption</summary>

- **FRD References:** FRD-HEL-019, FRD-HEL-020, FRD-HEL-021, FRD-HEL-026, FRD-HEL-031–044
- **TRD Domain:** Promotions & Loyalty
- **Key Interfaces / APIs:** Offers Feed (personalised), Validate/Apply Promo, Rewards Feed/Detail, Redeem Reward, Challenges Feed/Complete, Comms Prefs Get/Update
- **Data Contracts:** Offer (id, title, eligibility, value); Reward (id, cost, expiry); Prefs (channel, status, timestamp)
- **Source Summary:**
  - Eligibility always server-side — Byte Helium never computes eligibility locally
  - Offers feed p95: ≤200ms; reward redemption p99: ≥99.8%
  - Idempotency on redemption (409 returns original token — no double-spend)
  - Expired offer (410): hidden and user notified
  - Promo/Loyalty APIs: additive changes only, 120-day deprecation

</details>

---

:::tip See it in the wiki
- How customers find deals and rewards in the front-end → [Find Deals and Rewards](/docs/frontend/customer-journey/find-deals-and-rewards/)
- Creating and managing promotions in Byte Portal → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) and [Store Groups](/docs/admin-portal-guide/store-groups/)
- Step-by-step promotion guides → [Playbooks: Promotions Setup Guide](/docs/playbooks/promotions-setup-guide) and [Promotion Recipes](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo)
:::
