---
title: Customer Journey
sidebar_position: 2
---

# Customer Journey

The customer journey on the Atlas Platform is a **six-step configurable flow**. The core steps are consistent across all markets — but key touchpoints (loyalty, promotions, scheduling) are switched on or off per market by the regional team.

## The Six Steps

| Step | Name | Description |
|---|---|---|
| 1 | **Discovery** | Customer finds KFC via the app, website, or aggregator |
| 2 | **Restaurant Selection** | Customer selects a restaurant by location or delivery address |
| 3 | **Menu Browse** | Customer browses the menu, localised per restaurant |
| 4 | **Cart & Customise** | Customer adds items, selects modifiers and combos |
| 5 | **Loyalty & Promotions** | Market-configured — points, vouchers, promo codes |
| 6 | **Checkout** | Payment, order confirmation, and digital receipt |

## Step 5 — Loyalty & Promotions

This is the most market-variable step. Each market controls its own loyalty and promotion rules independently.

### Japan 🇯🇵
KFC Japan operates a **points-based loyalty programme** integrated into the KFC Japan app. Customers earn points on every order and redeem them at checkout. Promo codes are also supported and can be stacked with points in most campaigns.

### Australia 🇦🇺
KFC Australia uses a **voucher-based system** delivered through the KFC app. Customers browse active deals, select a voucher before ordering, and it is applied automatically at checkout. A separate promo code field supports campaign-specific codes.

## Market Configuration Matrix

| Feature | Japan 🇯🇵 | Australia 🇦🇺 |
|---|---|---|
| Loyalty points earn & redeem | ✅ | — |
| Voucher selection at ordering | — | ✅ |
| Promo code at checkout | ✅ | ✅ |
| Combo upsell prompt | ✅ | ✅ |
| Scheduled future orders | ✅ | — |
| Guest checkout (no login) | ✅ | ✅ |
| Digital receipt via email | ✅ | ✅ |

## FAQs

**Can a customer use a loyalty reward AND a promo code together?**
Yes — if both are enabled for that market. The promo code is applied first, and loyalty points are calculated on the post-discount total. This behaviour is configurable per market under Admin Portal → Market Settings → Loyalty Rules.

**What happens if a customer is offline during checkout?**
The app caches the menu and cart locally. Checkout requires connectivity. If the customer loses connection, the order is held in the cart and they are prompted to retry when connectivity is restored.

**Can we turn off guest checkout for a specific market?**
Yes — this is a market-level toggle in the Admin Portal under Market Settings → Customer Journey.
