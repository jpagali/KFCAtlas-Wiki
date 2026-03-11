---
title: Menu Item Reservation
sidebar_position: 7
---

# Menu Item Reservation

## What It Does

Menu Item Reservation allows customers to **pre-order and guarantee specific menu items** before they are available for standard ordering. Instead of hoping a product is in stock when they arrive, customers reserve it in advance — selecting a pickup date, time slot, and completing payment upfront.

This feature is designed for situations where demand is predictable but supply is limited: seasonal campaigns, exclusive product launches, high-traffic events, or cultural moments where a specific meal has elevated significance.

## Why It Exists

Some menu items — particularly limited-edition products or culturally significant meal sets — generate demand that far exceeds a restaurant's real-time fulfillment capacity. Without a reservation system:

- Customers arrive to find items sold out
- Restaurants are overwhelmed by unpredictable walk-in demand
- Marketing campaigns drive intent that the ordering system can't capture

Menu Item Reservation converts that demand into confirmed, scheduled orders — giving customers a guarantee and giving restaurants the visibility to prepare accurately.

## How It Works

The reservation flow has four steps:

```
1. Browse        → Customer discovers a reservable item (product page, homepage banner, promo)
2. Reserve       → Customer selects pickup date and time slot, confirms quantity
3. Pay           → Full or partial payment is taken upfront to hold the reservation
4. Collect       → Customer arrives at the restaurant, presents reservation confirmation
```

### Reservation Window
Each reservable item has a configured **reservation window** — the period during which pre-orders are open. Outside this window, the item appears as a standard menu product (if available) or is hidden entirely.

### Time Slots
Restaurants are configured with available **pickup time slots** per day. Each slot has a capacity limit, preventing overbooking. Once a slot is full, customers are offered the next available time.

### Payment
Pre-payment is required to confirm a reservation. This reduces no-shows and ensures the restaurant only prepares confirmed orders. Cancellation and refund policies are configured per market.

## Configuration

Menu Item Reservation is enabled at the product level via **Contentful** (for web) and the market configuration layer. Operators can configure:

| Setting | Description |
|---|---|
| **Reservation window** | Open date and close date for pre-orders |
| **Pickup dates** | Which dates reservations are accepted for |
| **Time slots** | Available pickup windows and per-slot capacity |
| **Deposit / full payment** | Whether full payment or a deposit is charged at reservation |
| **Cancellation policy** | Whether customers can cancel and under what conditions |
| **Max quantity per order** | Limit on how many a single customer can reserve |

## Platforms

| Platform | Support |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ |

## Market-Specific Use Cases

- 🇯🇵 [Japan — Christmas Ordering](./menu-item-reservation-japan-christmas)

:::info
Menu Item Reservation is a market-activated feature. Contact your Atlas Enablement representative to enable it for your market and configure the reservation parameters.
:::
