---
title: Cart
description: How the Atlas platform manages what customers have selected — items, quantities, rewards, and promos — before checkout.
sidebar_label: Cart
---

# Cart

**What it does:** Manages what the customer has selected — items, quantities, rewards, and promos — before they proceed to checkout.

**Why it matters:** Cart integrity is critical to revenue. Pricing errors in the cart, lost cart state, or failed promo applications directly cause abandoned orders.

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **Add Item to Cart** | Customer wants to start an order | Adds a menu item (with chosen modifiers) to the cart | Helium sends add-line request to Cart Service; price is calculated by backend at add time | Cart Service, Menu Service | Localisation and order mode set | Cart tied to session; guest carts lost if session expires | Add-to-cart rate |
| **Update / Remove Cart Line** | Customer changes their mind | Updates quantity or removes an item from the cart | Cart Service update/remove line call; totals recalculated | Cart Service | Item must be in cart | Real-time repricing may surface price changes | Cart modification rate |
| **Apply Promo Code** | Customer has a promo code | Validates and attaches a promo code to the cart for a discount | Helium sends promo code to Cart/Promo service; eligibility validated server-side; cart repriced | Cart Service, Promo Engine | Cart must have items; promo must be valid for market | Invalid code returns error (400) but keeps cart intact; one promo code at a time (market config) | Promo redemption rate, discount rate |
| **Add Reward to Cart** | Loyalty member wants to use a reward | Attaches a loyalty reward to the cart (e.g., free item) | Reward validated with Loyalty service; reward token attached to cart | Loyalty service, Cart Service | Customer must be signed in and enrolled in Loyalty | Reward must not be expired; only one reward type per cart (market config) | Reward attach rate |
| **Remove Reward from Cart** | Customer changes their mind about a reward | Detaches the reward from the cart | Loyalty service reward removed; cart totals updated | Loyalty service, Cart Service | Reward must be in cart | Reward returns to available balance | Cart modification rate |

---

## Technical Sources

<details>
<summary>📎 Technical Source: Add Item to Cart / Apply Promo</summary>

- **FRD References:** FRD-HEL-011, FRD-HEL-048
- **TRD Domain:** Cart
- **Key Interfaces / APIs:** Add/Update/Remove Line (App → Cart), Apply/Remove Promo (App → Cart)
- **Data Contracts:** Cart (id, lines[], totals, benefits[]) — idempotent ops
- **Source Summary:**
  - All cart operations are idempotent (safe to retry)
  - Pricing correctness: 100% accuracy required (enforced via golden tests in backend)
  - Invalid promo (400): error shown, cart state preserved
  - Cart API: additive changes only, 90-day deprecation window
  - Promo eligibility is always server-side — never computed in Helium

</details>

---

:::tip See it in the wiki
- How customers experience the cart front-end → [Order and Get: Cart](/docs/frontend/customer-journey/order-and-get/cart)
- How to create and manage promotions → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) and [Promotion Recipes](/docs/playbooks/promotions-setup-guide)
:::
