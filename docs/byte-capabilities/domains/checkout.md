---
title: Checkout
description: How the Atlas platform guides customers from cart to placed order — collecting delivery details, validating everything, and submitting the order intent.
sidebar_label: Checkout
---

# Checkout

**What it does:** Guides the customer from cart to placed order — collecting delivery details, validating everything, and submitting the order intent.

**Why it matters:** Checkout is the highest-stakes step. Any failure here means a lost sale. Checkout must handle guest users, delivery vs. collection differences, and be resilient to submission errors.

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **Guest Checkout** | Not every customer wants to create an account | Lets customers place an order without signing in | Session-based checkout: OTP email or anonymous session used; cart tied to session | Checkout Orchestrator, Address service | Valid cart with items | No order history or loyalty for guest sessions; addresses not saved | Guest checkout conversion rate |
| **Checkout — Delivery** | Customer wants food delivered to their address | Collects delivery address, shows fees, submits order | Address validated → delivery fees quoted → order submitted with delivery info attached | Checkout Orchestrator, Address service, Geo service | Delivery mode set; store with delivery coverage active | Address must be within coverage zone; fees are backend-calculated (not Byte Helium-owned) | Delivery checkout rate |
| **Checkout — Collection** | Customer picking up in store | Simplified checkout with store selection and pickup time | Store confirmed → no address needed → order submitted | Checkout Orchestrator | Collection mode set; store open | Store must be in open state; throttling policies may limit orders | Collection checkout rate |
| **Checkout Delivery Variants** | Different markets/scenarios have different checkout flows | Supports market-specific checkout step configurations | Orchestrator manages variant-aware checkout sessions; steps vary by context | Checkout Orchestrator | Market variant configured | Variants must be configured by the market team — not self-serve from Byte Helium | Checkout completion rate by variant |
| **Order Again** | Customer wants to repeat a previous order | Repopulates cart with items from a past order | Previous order detail fetched → items added back to cart → checkout resumed | Orders service, Cart Service | Customer must be signed in; previous orders must exist | Items unavailable in current menu will be excluded with a warning | Reorder rate |

---

## Technical Sources

<details>
<summary>📎 Technical Source: Guest Checkout / Delivery Checkout</summary>

- **FRD References:** FRD-HEL-012, FRD-HEL-013, FRD-HEL-014, FRD-HEL-015
- **TRD Domain:** Checkout (Core)
- **Key Interfaces / APIs:** Start/Resume Checkout, Address Create/Validate, Fees & Taxes Quote, Submit Order
- **Data Contracts:** CheckoutSession (id, cartRef, mode, steps); OrderIntent (totals, tenders, deliveryInfo — with idempotency keys)
- **Source Summary:**
  - Checkout submission p99: ≥99.5% success
  - Idempotency keys prevent duplicate orders on resubmit (409 replay returns original orderRef)
  - Fees and taxes calculated by backend — Byte Helium displays only
  - Orchestrator APIs: additive changes only, 120-day deprecation
  - Correlation IDs tracked for all submission events

</details>

---

:::tip See it in the wiki
- How customers experience checkout in the front-end → [Order and Get: Checkout](/docs/frontend/customer-journey/order-and-get/checkout)
:::
