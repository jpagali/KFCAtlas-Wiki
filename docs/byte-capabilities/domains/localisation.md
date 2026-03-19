---
title: Localisation & Order Mode
description: How the platform detects the customer's market, sets their language, and lets them choose delivery or collection.
sidebar_label: Localisation & Order Mode
---

# Localisation & Order Mode

**What it does:** Detects the customer's market and language, lets them choose how they want to order (delivery or collection), and selects their store or delivery address.

**Why it matters:** Every subsequent experience — menu, pricing, promotions, checkout — depends on the market context being correctly established first. Getting this wrong means customers see the wrong menu, wrong prices, or can't check out at all.

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **Start Localisation** | Customers need to be matched to the right market | Detects customer's market via geo-IP or explicit selection; sets locale | App calls Config service → gets available markets; Geo service resolves location → market confirmed | Geo service, Config service, Context service | Market must be configured in Portal | Context fetch must be ≤150ms p95; market detection can fail if geo blocked | Localisation success rate, drop-off rate |
| **Set Order Mode — Collection** | Customer wants to pick up from a store | Lets customer search for and select a KFC store for collection | Customer selects store → store ID stored in session context | Store Locator, Context service | Store must be active and open | Cannot collect from closed or limited stores | Collection order rate |
| **Set Order Mode — Delivery** | Customer wants food delivered | Lets customer enter a delivery address and validates coverage | Customer enters address → coverage check → delivery zone confirmed | Geo service, Coverage service, Context service | Store with delivery coverage must be available | No fallback if no stores cover address; coverage varies by market | Delivery order rate, coverage hit rate |
| **Find a KFC (Store Locator)** | Customer wants to find their nearest restaurant | Shows a map/list of KFC stores with hours, distance, and features | Calls Store Locator with customer location; returns store list with status and hours | Store Locator, Maps provider, Store data | GPS/location permission or manual address entry | Trading hours managed in Portal; real-time state (open/closed) must be accurate | Store locator engagement |
| **View & Edit Saved Addresses** | Registered customers want to reuse delivery addresses | Shows saved addresses and lets customers edit or delete them | Fetches address list from Address service; updates written back | Address service | Customer must be signed in | Not available to guest users | Address save rate, checkout speed |

---

## Technical Sources

<details>
<summary>📎 Technical Source: Start Localisation</summary>

- **FRD References:** FRD-HEL-005, FRD-HEL-082
- **TRD Domain:** Localisation & Order Mode
- **Key Interfaces / APIs:** Locale Config, Geo Resolve Market, Set Fulfilment Mode
- **Data Contracts:** Context (market, language, mode, storeId — signed context IDs)
- **Source Summary:**
  - Context persisted per user/device; signed for integrity
  - p95 fetch target: ≤150ms
  - Fallback: if coverage unavailable (5xx), offer collection mode with error telemetry
  - Context API: backward compatible minor, 90-day deprecation
  - Market config owned by Portal / Shared Catalogues

</details>

<details>
<summary>📎 Technical Source: Set Order Mode — Delivery</summary>

- **FRD References:** FRD-HEL-007
- **TRD Domain:** Localisation & Order Mode
- **Key Interfaces / APIs:** Set Fulfilment Mode, Coverage Check, Address Validate
- **Data Contracts:** Context (mode=delivery, storeId, coverageZoneId)
- **Source Summary:**
  - Coverage check runs before mode is confirmed
  - Failure (no coverage): user offered collection mode instead
  - Context signed and persisted across session
  - Delivery tracking availability is market-dependent (optional)
  - Trading hours from Portal Stores module must be accurate

</details>

---

:::tip See it in the wiki
- Customer-facing store locator and order mode flows → [Find a Store](/docs/frontend/customer-journey/find-a-store/) and [Setup Order](/docs/frontend/customer-journey/setup-order/)
- Configuring store hours and coverage in the Portal → [Admin Portal Guide: Stores](/docs/admin-portal-guide/stores/)
:::
