---
title: "Japan — Christmas Ordering"
sidebar_position: 8
---

# Japan — Christmas Ordering

**Feature:** [Menu Item Reservation](./menu-item-reservation) · **Market:** 🇯🇵 Japan

---

## Background

KFC Japan's Christmas campaign is one of the most iconic fast food traditions in the world. Since 1974, KFC Japan has run a *"Kurisumasu ni wa Kentakkii"* (ケンタッキーフォークリスマス — "Kentucky for Christmas") campaign that has made KFC the go-to Christmas meal for Japanese families.

On December 24th and 25th, KFC Japan serves approximately **3.6 million customers** — roughly ten times its normal daily volume. To manage this extraordinary demand, the market has operated a **pre-order reservation system** for decades, allowing customers to secure their Christmas meals weeks or months in advance.

The Menu Item Reservation feature in Atlas is the platform's native implementation of this pre-order capability, replacing legacy point-of-sale reservation workflows with a seamless in-app and web experience.

---

## The Product: KFC Christmas Party Barrel

The centrepiece of the Christmas campaign is the **Party Barrel** — a limited-edition set exclusive to the Christmas season. It is not available for standard ordering at any other time of year.

| Set | Contents (example) | Price Range (approx.) |
|---|---|---|
| **Party Barrel (Standard)** | Fried chicken pieces, sides, dessert | ¥3,000–¥4,500 |
| **Party Barrel (Premium)** | Larger chicken selection, premium sides, cake | ¥5,000–¥7,000 |
| **Whole Roast Chicken Set** | Full roast chicken, sides, holiday packaging | ¥4,000–¥6,000 |

:::note
Exact products, contents, and prices are configured annually in Contentful and the Atlas product catalogue. The above are illustrative examples.
:::

---

## How the Reservation Flow Works in Japan

### 1. Campaign Opens (October–November)

The Christmas reservation window opens approximately **6–8 weeks** before December 24th. During this period:

- The KFC Japan app and website surface the Christmas campaign prominently — homepage banners, push notifications, and a dedicated campaign landing page
- The Party Barrel product page shows a **"Reserve Now"** CTA instead of the standard "Add to Cart"
- Customers are informed of the pickup date range (typically December 23–25) and available time slots

### 2. Customer Reserves

The customer completes the reservation flow:

1. **Select set** — choose from available Christmas sets (Standard Barrel, Premium Barrel, etc.)
2. **Select restaurant** — choose their preferred pickup location
3. **Select pickup date and time slot** — December 23, 24, or 25 with a specific time window (e.g., 12:00–13:00)
4. **Select quantity** — subject to a per-order maximum (typically 2–3 sets)
5. **Review and pay** — full payment is taken upfront to confirm the reservation

### 3. Confirmation

After payment, the customer receives:

- An in-app confirmation screen with a reservation reference number
- A push notification confirming their booking
- An email confirmation with restaurant address, pickup time, and what to show on arrival

### 4. Pickup (December 23–25)

The customer arrives at their chosen restaurant within their booked time slot, shows their confirmation (app or printed), and collects their Christmas meal. Their order is prepared in advance based on confirmed reservation volume — no waiting, no uncertainty.

---

## Why Pre-Payment Is Required

Japan's Christmas reservation system uses **full upfront payment** rather than a deposit. This is a deliberate design choice for this use case:

| Reason | Detail |
|---|---|
| **Eliminates no-shows** | Party Barrels are prepared to order — a no-show wastes premium ingredients |
| **Manages stock precisely** | Restaurants know exactly how many sets to prepare per time slot |
| **Reduces peak-day chaos** | Pre-paid customers are processed faster than new orders on the day |
| **Protects limited inventory** | Without payment commitment, high-demand slots would be reserved speculatively |

---

## Volume and Capacity Management

The Atlas platform manages demand through **per-slot capacity limits** configured for each restaurant:

- Each restaurant defines the number of sets it can fulfil per time slot
- When a slot reaches capacity, it is automatically marked as full and removed from the selection interface
- Customers are guided to the next available slot or a different restaurant

This prevents overbooking at the restaurant level and distributes demand across the pickup window.

---

## Configuration Summary

| Parameter | Japan Christmas Setting |
|---|---|
| **Reservation window open** | ~6–8 weeks before December 24 |
| **Pickup dates** | December 23, 24, 25 |
| **Time slots** | Hourly windows during trading hours |
| **Per-slot capacity** | Set per restaurant based on kitchen capacity |
| **Payment at reservation** | Full payment required |
| **Cancellation** | Market-configured (typically restricted within 1 week of pickup) |
| **Max quantity per order** | 2–3 sets (market configured) |

---

## Learnings for Other Markets

The Japan Christmas campaign demonstrates how the Menu Item Reservation feature can be used for **culturally significant, high-volume events** beyond standard ordering. Key principles that transfer to other markets:

- Open the reservation window early enough to spread demand — 6–8 weeks works for Japan; adjust for your market's consumer behaviour
- Full upfront payment reduces no-shows dramatically, especially for premium or limited sets
- Per-slot capacity at the restaurant level is essential — don't just cap total volume
- Push notifications and homepage takeovers are critical to driving reservation awareness before walk-in intent builds
- Confirm via multiple channels (in-app, push, email) — customers need certainty for a planned occasion

:::info Want to enable Menu Item Reservation for your market?
Contact **KFC Global Enablement and Market Success** to discuss activation and configuration for your next seasonal campaign.
:::
