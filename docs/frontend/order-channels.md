---
title: Order Channels
sidebar_position: 3
---

# Order Channels

The Atlas Platform supports three order channels per restaurant: **Dine-in**, **Delivery**, and **Takeaway**. Each channel can be independently enabled, configured, and scheduled without affecting the others.

## Channel Capabilities

| Configuration | Dine-in | Delivery | Takeaway |
|---|---|---|---|
| Enable / disable per restaurant | ✅ | ✅ | ✅ |
| Separate operating hours | ✅ | ✅ | ✅ |
| Minimum order value | — | ✅ | — |
| Delivery radius (km) | — | ✅ | — |
| Promo codes | ✅ | ✅ | ✅ |
| Loyalty points | ✅ | ✅ | ✅ |
| Table number capture | ✅ | — | — |
| Estimated wait time display | — | ✅ | ✅ |

## Market Channel Status

### Japan 🇯🇵
All three channels are available. Delivery operates through both the KFC Japan platform and aggregator integrations (Uber Eats, Demae-can). Dine-in table ordering is active in select high-traffic locations.

### Australia 🇦🇺
Delivery and Takeaway are the primary channels. Dine-in ordering is available but less widely deployed. Delivery integrates with Uber Eats and DoorDash in addition to the native KFC app.

## Configuring Channels

All channel settings are managed per restaurant in the **Admin Portal → Restaurants → [Restaurant] → Channel Settings**.

:::tip
Disabling a channel for one restaurant has no effect on any other restaurant. All channel settings are scoped per-location.
:::

:::warning
If all three channels are disabled simultaneously, the restaurant will appear as **Temporarily Closed** in the customer app. Make sure at least one channel is active during trading hours.
:::
