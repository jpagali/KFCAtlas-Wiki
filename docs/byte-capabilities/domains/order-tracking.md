---
title: Order Tracking & History
description: How the Atlas platform lets customers see delivery status, view past orders, reorder, and access receipts.
sidebar_label: Order Tracking & History
---

# Order Tracking & History

**What it does:** Lets customers see where their delivery is, view past orders, reorder, and access receipts.

**Why it matters:** Post-order experience shapes NPS and repeat purchase rate. Real-time tracking reduces customer service contacts. Order history drives reorder behaviour.

:::warning Real-time tracking is market-optional
Live GPS delivery tracking is **not automatically available** for every market. It requires integration with a third-party logistics provider. Without this integration, customers see POS order status only (accepted/ready/completed). This must be decided and configured before go-live.
:::

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **Delivery Order Tracking** | Customer wants to know when food arrives | Shows real-time delivery status and estimated arrival time | Tracking Gateway provides delivery events and ETA; polled or pushed depending on market | Order Tracking service, 3P logistics (optional) | Delivery order placed | Real-time tracking is optional per market; fallback is POS order status | Tracking engagement rate, CS contacts avoided |
| **Receive Delivery Order** | Customer needs confirmation order is received | Shows order confirmed screen with next steps | Delivery Confirm event from Tracking; confirmation rendered | Order Tracking service | Order placed | N/A | Order confirmation rate |
| **View Order History** | Registered customer wants to see past orders | Lists all previous orders with dates, items, and totals | Orders service returns paginated list of user's orders | Orders service | Customer signed in | Guest orders not accessible via history | Order history engagement rate |
| **View Order Details / Receipt** | Customer wants to see what they ordered and paid | Shows full order breakdown with itemised receipt | Order detail fetched; receipt rendered from Receipt service; CDN link available | Orders service, Receipt service | Signed in; order completed | Guest orders can be sent via email receipt only | Receipt access rate |
| **Order Again** | Customer wants to repeat a favourite order | Repopulates cart with items from a past order and starts checkout | Previous order fetched; available items added to new cart | Orders service, Cart Service, Menu Service | Signed in; previous order exists | Items removed from current menu are excluded with warning | Reorder rate |
| **Favourite Orders** | Customer has a go-to order | Lets customer save and quickly access a favourite order configuration | Favourite saved against customer profile; loaded back into cart on demand | Orders service, Cart Service | Signed in | Favourites are account-linked — not available to guests | Favourite save rate, reorder-from-favourite rate |

---

## Technical Sources

<details>
<summary>📎 Technical Source: Delivery Tracking / Order History</summary>

- **FRD References:** FRD-HEL-024, FRD-HEL-025, FRD-HEL-052–056
- **TRD Domain:** Order Tracking (Delivery)
- **Key Interfaces / APIs:** Order List (paginated), Order Detail, Delivery Events/ETA (poll/push), Receipt Render
- **Data Contracts:** Order (id, status, items[], totals); DeliveryEvent (ts, type, eta); Receipt (url, type, amount)
- **Source Summary:**
  - Tracking availability target: 99.9%
  - Real-time tracking optional per market; 3P logistics integration market-dependent
  - Event gap fallback: POS order status used; sequence IDs tracked for telemetry
  - Order list p95: ≤200ms
  - Orders/Tracking APIs: additive only, 120-day deprecation

</details>

---

:::tip See it in the wiki
- How customers track their delivery in the front-end → [Track Order: Delivery](/docs/frontend/customer-journey/track-order/delivery) and [Pickup](/docs/frontend/customer-journey/track-order/pickup)
:::
