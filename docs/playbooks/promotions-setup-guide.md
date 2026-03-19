---
title: Promotions Setup Guide
sidebar_label: Promotions Setup Guide
---

# Promotions Setup Guide

A practical, field-by-field reference for building promotions in the Byte Commerce Byte Portal. This guide walks you through every step of the wizard, explains every option, and ends with a recipe sheet of the most common promotion types you can build with the platform today.

:::note
Promotions are always assigned to a **Store Group**, never to a single store. Make sure your target stores are already grouped before creating a promotion.
:::

:::note
Screenshots for this guide are being refreshed. The written setup guidance below remains the source of truth for the flow and field definitions.
:::

---

## What You Can Build

The Byte Commerce promotions engine supports the following promotion types out of the box:

| Promotion Type | How It Works |
|---|---|
| **Percentage Discount** | Take X% off an item, a group of items, or the entire order |
| **Fixed Amount Off** | Reduce the cart or item price by a set dollar/currency amount |
| **Fixed Price** | Set a specific price for a qualifying item (e.g., $5 burgers) |
| **Buy One Get One (BOGO)** | Require item presence + apply a 100% discount or fixed price to a second item |
| **Minimum Spend Discount** | Trigger a discount only when the cart reaches a subtotal threshold |
| **Channel-Exclusive Deal** | Restrict a promotion to specific ordering platforms (e.g., app-only, delivery-only) |
| **Time-Limited Promotion** | Run a deal only during specific dates, days, or hours |
| **Occasion-Specific Deal** | Limit a promotion to a specific order type (e.g., Drive Thru only, Delivery only) |
| **Free Delivery / Fee Waiver** | Discount or zero out delivery, service, or regulatory fees |
| **Loyalty Member Discount** | Restrict a promotion to registered customers only |
| **Coupon Code Promotion** | Require a redemption code for the customer to unlock the deal |
| **Manager Override Discount** | Require a manager PIN or signature at POS to apply the discount |
| **Serialised / Unique Codes** | Generate individual one-time-use redemption codes per customer |

## Recipe Pages

Use these dedicated recipe pages when you want a faster starting point for the most common KFC promotion patterns:

- [Recipe 1 - Buy 1 Get 1 Free (BOGO)](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/)
- [Minimum Spend Discount](/docs/playbooks/promotion-recipes/minimum-spend-discount/)
- [Recipe 3 - App-Exclusive Deal](/docs/playbooks/promotion-recipes/app-exclusive-deal/)
- [Recipe 4 - Lunch Special (Time-Limited)](/docs/playbooks/promotion-recipes/lunch-special-time-limited/)
- [Recipe 5 - Free Delivery on Large Orders](/docs/playbooks/promotion-recipes/free-delivery-on-large-orders/)
- [Recipe 6 - Registered Customer Exclusive](/docs/playbooks/promotion-recipes/registered-customer-exclusive/)
- [Recipe 7 - Coupon Code Discount](/docs/playbooks/promotion-recipes/coupon-code-discount/)
- [Recipe 8 - Drive-Thru Only Deal](/docs/playbooks/promotion-recipes/drive-thru-only-deal/)
- [Recipe 9 - Daily Deal (Once Per Customer Per Day)](/docs/playbooks/promotion-recipes/daily-deal-once-per-customer-per-day/)
- [Recipe 10 - Stacked Multi-Condition Promotion](/docs/playbooks/promotion-recipes/stacked-multi-condition-promotion/)

---

## The 4-Step Wizard

Every promotion is created through a 4-step wizard: **Basic Information → Requirements → Effects → Review**. You can navigate between steps using the left-hand step panel, and jump back to any completed step from the Review screen.

---

## Step 1 — Basic Information

This step defines the promotion's identity, how it is triggered, and how many times it can be used.

### Required Fields

| Field | What to enter |
|---|---|
| **Promotion Name** * | Internal name for operators — not shown to customers. Be descriptive: e.g., `BOGO Zinger – May 2024` |
| **Combinable with other Promotions** * | `No` — the promotion cannot stack with others in the same cart. `Yes` — it can. Defaults to `No`. |

### Standard Fields

| Field | What to enter |
|---|---|
| **Display Name** | The customer-facing name shown on ordering channels. Keep it short and compelling: e.g., `Buy 1 Get 1 Free Zinger` |
| **Description** | Explains the promotion to customers on the ordering interface |
| **Max Promo Uses Per Cart** | How many times this promotion can apply within a single order. Defaults to `1`. Set higher for promotions that can apply to multiple items in the same cart |
| **Max Total Promotion Amount** | Caps the total discount value that can be applied from this promotion in a single cart. Leave blank for no cap |

### Automatic vs. Redemption Code

| Setting | When to use |
|---|---|
| **Automatic: No** (default) | A customer must enter a redemption code to trigger the promotion |
| **Automatic: Yes** | The promotion fires automatically when requirements are met — no code needed |

:::caution
Switching **Automatic** from `No` to `Yes` will **permanently remove** any redemption codes you have already added. Do this before adding codes, not after.
:::

Click **ADD REDEMPTION CODE** to attach one or more codes when Automatic is set to `No`.

### Additional Options

Click **SHOW ADDITIONAL OPTIONS** to reveal these fields:

| Field | What to enter |
|---|---|
| **Legal Text** | Any legal disclaimer shown alongside the promotion (e.g., terms and conditions) |
| **Reporting Code** | An internal code used for tracking and analytics in external reporting systems |
| **Catalog Tags** | Tags used to categorise this promotion in catalog integrations |
| **Display POS Button** | Toggle `Yes` to make this promotion appear as a shortcut button in the Yum! POS interface |
| **Public** | Toggle `Yes` to allow this promotion to surface on web and mobile channels |

---

## Step 2 — Requirements

Requirements define the **conditions** a customer must meet before the promotion activates. You can add multiple requirements to a single promotion — all must be satisfied for the promotion to fire. Click **ADD REQUIREMENT** to stack additional conditions.

---

### Channel

Restricts the promotion to one or more specific ordering platforms. Select all channels where this promotion should be active.

| Field | Options |
|---|---|
| **Select Channels** * | Web, Mobile, iOS, Android, POS, Kiosk, DoorDash, Uber Eats, Grubhub, Deliveroo, Just Eat, Call Center |

**When to use:** App-exclusive deals, delivery aggregator promotions, or POS/kiosk-only offers.

---

### Item Exclusion

Prevents specific items from being eligible for the promotion. Items listed here are explicitly excluded from whatever the promotion targets.

| Field | Options |
|---|---|
| **Item Type** * | Product, Variant, Bundle, Promo Tag |
| **Select Code** * | Search and select the specific item to exclude |

**When to use:** A site-wide discount that should not apply to premium or already-discounted items.

---

### Item Presence

The cart must contain at least a minimum quantity of one or more specified items. Use this to require that a customer actually has the qualifying product in their cart.

| Field | What to enter |
|---|---|
| **Minimum Quantity** * | The minimum combined quantity of the qualifying items that must be in the cart |
| **Equal or Lesser Value** | A comparator for the price check — items of equal or lesser value qualify |
| **Qualifying Items — Item Type** * | Product, Variant, Bundle, or Promo Tag |
| **Qualifying Items — Select Code** * | Search and select the specific qualifying item |
| **OPTION VALUE FILTER** | Further filter by option values (e.g., only a specific size or flavour) |

Click **ADD ITEM TYPE** to add multiple qualifying items — the customer needs at least one of them in their cart.

**When to use:** BOGO setups, meal deal requirements, or "buy product X to get discount on Y."

---

### Item Quantity

The cart must contain a minimum total number of items across the entire order — no specific product required.

| Field | What to enter |
|---|---|
| **Minimum Total Items** * | The minimum number of individual items the cart must contain |

**When to use:** "Order 3 or more items and get a discount" type promotions.

---

### Manager Approval

Requires a manager to authorise the promotion at the point of sale before it is applied. POS-only use case.

| Field | Options |
|---|---|
| **Occasion** * | `PIN` — manager enters their PIN on the POS device. `SIGNATURE` — manager physically signs to approve |

**When to use:** Discretionary discounts, complaint resolutions, or any promotion that should not be self-served by the customer.

---

### Max Number of Times a Promotion Can Be Used

Sets a global hard cap on total redemptions across all customers and all time. Once the limit is reached, the promotion stops working for everyone.

| Field | What to enter |
|---|---|
| **Max Number of Times a Promotion Can Be Used** * | Enter a whole number — e.g., `1000` for a first-come-first-served promotion |

**When to use:** Flash sales, limited-run promotions, or any offer with a fixed inventory of discounts.

---

### Max Total Uses Per Customer

Limits how many times a single customer account can redeem this promotion across their lifetime (no daily reset).

| Field | What to enter |
|---|---|
| **Max Total Uses Per Customer** * | Enter a whole number — e.g., `1` for a one-time-use-per-customer promotion |

**When to use:** Welcome offers, one-time birthday promotions, or "first order only" deals.

---

### Max Total Uses Per Customer Per Day

Same as above, but the counter resets every day at midnight.

| Field | What to enter |
|---|---|
| **Max Total Uses Per Customer Per Day** * | Enter a whole number — e.g., `1` for a once-per-day offer |

**When to use:** Daily deals, recurring loyalty rewards, or "one free item per day" promotions.

---

### Max Total Uses Per Redemption Code

Caps how many times a specific redemption code can be used, regardless of which customer uses it.

| Field | What to enter |
|---|---|
| **Max Total Uses Per Redemption Code** * | Enter a whole number — e.g., `1` for a single-use code, or `50` for a shared code with limited uses |

**When to use:** Batch coupon codes, influencer promo codes with a use cap, or serialised codes issued to a specific number of customers.

---

### Occasion

Restricts the promotion to a specific order fulfilment type. Different from Channel — this is about *how* the customer is picking up their order, not where they placed it.

| Field | Options |
|---|---|
| **Occasion** * | Carryout, Catering, Delivery, Dine In, Drive Thru |

**When to use:** Drive-Thru-only deals, Delivery promotions, or Dine-In specials.

---

### Subtotal

The cart must reach a minimum total value before the promotion triggers.

| Field | What to enter |
|---|---|
| **Minimum Subtotal** * | The threshold cart value, e.g., `$20.00`. Defaults to `$0.00` |
| **Calculation Mode** | **Actual Subtotal** — checks the cart value *before* any other discounts are applied (default). **Discounted Subtotal** — checks the value *after* factoring in all other active promotions |
| **Excluded Items** (toggle) | Toggle on to specify items that should *not* count toward the subtotal threshold. Set **Item Type**, **Select Code**, and **Quantity to be excluded** for each |

**When to use:** "Spend $30 and get $5 off" or "free delivery on orders over $25."

---

### Time Frame

Restricts the promotion to specific date ranges, days of the week, and hours of the day. Multiple time frames can be added to cover different windows (e.g., lunch hours Mon–Fri and all day Saturday).

| Field | What to enter |
|---|---|
| **Validate against current time** | Check this to validate when the order is *placed* |
| **Validate against requested fulfillment time** | Check this to validate when the order is *scheduled to be fulfilled*. At least one must be selected |
| **Start Date** | The first date the promotion is active. Leave blank for no start date restriction |
| **End Date** | The last date the promotion is active. Leave blank for no end date restriction |
| **Day Range** * | Select individual days (Su Mo Tu We Th Fr Sa) or check **All Week** |
| **Interval Start Time** * | The time the promotion becomes active each day — format `HH:MM:SS` (e.g., `11:00:00`) |
| **Interval End Time** * | The time the promotion stops each day — format `HH:MM:SS` (e.g., `14:00:00`) |
| **Weight** * | A priority value used when multiple time frames overlap — higher weight takes precedence |
| **Is Blackout Timeframe?** | Toggle `Yes` to *invert* this window — the promotion is valid *outside* this period instead of inside it |
| **Use UTC** | Check this box to enter all times in UTC instead of the store's local time zone |

Click **ADD ANOTHER TIME FRAME** to define additional windows within the same requirement.

**When to use:** Lunch deals (11am–2pm weekdays), weekend specials, limited-time campaigns with a defined start and end date.

---

### User Status

Restricts the promotion based on whether the customer has a registered account.

| Field | Options |
|---|---|
| **Is Registered Customer?** | `Yes` — promotion is only available to logged-in account holders. `No` — promotion is only available to guest customers |

**When to use:** Loyalty member exclusives, new-user welcome offers (guest only), or account-based reward programs.

---

## Step 3 — Effects

Effects define **what discount or reward the customer receives** when all requirements are met. You can add multiple effects using the **ADD EFFECT** button at the top right. Each effect has a trash icon to delete it.

:::caution
The warning banner — *"There are issues with the following effects that must be resolved before the promotion can be saved"* — appears when a required field in an effect is incomplete. All effects must be fully configured before you can proceed to Review.
:::

There are three Effect Types:

---

### Effect Type: Order Level

Applies the discount to the **entire order subtotal**, not to individual items.

| Field | What to enter |
|---|---|
| **Pricing Effect Type** * | See table below — Order Level supports 4 types |
| **Discount value** * | The percentage or amount depending on the Pricing Effect Type selected |
| **Discount Distribution** | **Subtotal Price** — applies the discount as a single reduction to the subtotal (default). **Distribute across all items in the cart** — spreads the discount proportionally across all cart items |
| **Excluded Items** * | Items listed here will not count towards or receive the order-level discount. Set Item Type + Code for each. Click **ADD ANOTHER ITEM TYPE** to exclude multiple items |
| **Included Items** | Limits the effect to only the specified items. **Note:** Included Items is disabled as long as any Excluded Items are present — remove all excluded items first to enable this section |

**Pricing Effect Types available for Order Level:**

| Type | What it does |
|---|---|
| **Percent Off** | Reduces the order subtotal by a fixed percentage — e.g., 10% off |
| **Amount Off** | Reduces the order subtotal by a fixed currency amount — e.g., $5 off |
| **Variable Percent Off** | Percentage discount that varies — typically used with serialised or dynamic codes |
| **Variable Amount Off** | Fixed amount discount that varies by code or condition |

---

### Effect Type: Item Level

Applies the discount to **specific qualifying items only**, not the whole order. Offers the most granular control over what gets discounted and by how much.

| Field | What to enter |
|---|---|
| **Pricing Effect Type** * | See table below — Item Level supports 6 types |
| **Discount value** * | The percentage, amount, or fixed price depending on the type selected |
| **Item Target Price** | **Lowest** — the discount targets the cheapest qualifying item in the cart (default). **Highest** — the discount targets the most expensive qualifying item |
| **Target All Items** | **No** — the effect applies to only one instance of the first matching item (default). **Yes** — the effect applies to every matching item in the cart |
| **Qualifying Items** * | The items this discount applies to. Click **+ ADD ITEMS AND DEFINE EFFECTS** to open the item selection drawer |

**Qualifying Items drawer — Select Qualifying Items and Define Target Effects:**

| Section | Field | What to enter |
|---|---|---|
| **Select Items** | Item Type | Product, Variant, Bundle |
| **Select Items** | Select Product / Variant / Bundle | Search and select the qualifying item. Selected items appear in a table showing Product Name and Product Code |
| **Define Target Effects** | Base Price | The discount applies to the item's base price only (modifiers excluded) |
| **Define Target Effects** | Base Price With Modifiers | The discount applies to the base price plus any selected modifiers (default) |
| **Define Target Effects** | Target Modifiers to Discount | Toggle `Yes` to include the cost of modifiers in the discounted amount |

Click **ADD PRODUCTS AND EFFECTS** to confirm.

**Pricing Effect Types available for Item Level:**

| Type | What it does |
|---|---|
| **Percent Off** | Reduces the qualifying item's price by a fixed percentage |
| **Amount Off** | Reduces the qualifying item's price by a fixed currency amount |
| **Fixed Price** | Sets the qualifying item to a specific price — e.g., $5 flat |
| **Variable Percent Off** | Percentage discount that varies by code or condition |
| **Variable Amount Off** | Amount discount that varies by code or condition |
| **Variable Fixed Price** | Fixed price that varies by code or condition |

---

### Effect Type: Delivery, Service, and Regulatory Fees

Applies the discount to **fees** rather than the cart items themselves. Use this to offer free delivery or waive other charges.

| Field | What to enter |
|---|---|
| **Delivery, Service, and Regulatory Fees Type** * | **Delivery Fee** — discounts the delivery charge. **Service Fee** — discounts the platform service fee. **Regulatory Fee** — discounts any regulatory surcharge |
| **Pricing Effect Type** * | Percent Off, Amount Off, or Fixed Price |
| **Discount value** * | The percentage, amount, or fixed fee amount depending on the type selected |

**Pricing Effect Types available for Fees:**

| Type | What it does |
|---|---|
| **Percent Off** | Reduces the fee by a percentage — e.g., 100% off = free delivery |
| **Amount Off** | Reduces the fee by a fixed amount |
| **Fixed Price** | Sets the fee to a specific value — e.g., $0.00 for free delivery |

---

### Pricing Effect Types — Full Comparison

| Pricing Effect Type | Order Level | Item Level | Fees |
|---|:---:|:---:|:---:|
| Percent Off | ✅ | ✅ | ✅ |
| Amount Off | ✅ | ✅ | ✅ |
| Fixed Price | — | ✅ | ✅ |
| Variable Percent Off | ✅ | ✅ | — |
| Variable Amount Off | ✅ | ✅ | — |
| Variable Fixed Price | — | ✅ | — |

---

## Step 4 — Review

A read-only summary of everything you have configured. Each section shows its current values and has an **EDIT** link on the right to jump directly back and make changes without losing any other progress.

The Review screen shows:

- **Basic Information** — Combinable with other Promotions, Max Promo Uses Per Cart, Automatic, Redemption Codes, Display POS Button, Public
- **Requirements** — each requirement type and its configured values
- **Effects** — Effect Type, Discount Distribution, Excluded Items

When everything looks correct, click **CREATE** (top right) to save and publish the promotion.

:::caution
The **CREATE** button remains greyed out if any effect has unresolved validation errors. Check the warning banner on Step 3 and resolve all flagged effects before proceeding.
:::

---

## Common Promotion Recipes

The detailed recipe pages now live in the dedicated recipe section above so markets can keep adding new patterns without making this setup guide too long.

---

## Related Guides

- [Create a Promotion](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Edit a Promotion](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [Assign Promotions to Store Groups](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)
- [Create Serialised Codes](/docs/admin-portal-guide/promotions/create-serialized-code/)
- [Advanced Promotions Search](/docs/admin-portal-guide/promotions/advanced-promotions-search/)

---

*Part of the [Admin Portal Guide](/docs/admin-portal-guide) · Section: Promotions*
