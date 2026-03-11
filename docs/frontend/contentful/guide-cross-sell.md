---
title: "Guide: Cross-Sell in Cart"
sidebar_position: 7
---

# Guide: Cross-Sell in Cart

Dynamic Cross-Sell lets menu authors configure which products are recommended to customers in the basket, based on what's already in their cart. It's a targeted upsell tool — the right suggestion at the right moment.

---

## Where You See It in the Front-End

**Cart / Basket section** — Below the list of items a customer has added, a "You might also like" or similarly labelled row surfaces recommended products. The products shown in this row are dynamic — they change based on the specific item(s) in the cart.

For example: if a customer adds a Zinger Burger, the cross-sell section might show Fries, a Drink, or a Dessert. A different item in the cart could trigger a completely different set of suggestions.

This surfaces on both **Web** and **Mobile App**.

---

## What to Configure in Contentful

1. In Contentful, filter by **Content Type: Dynamic Content Type**
2. Click **Add Entry** → select **Dynamic Cross Sell**

The entry has three fields:

**Name / Title** — An internal label for the entry (not shown to customers). Use something descriptive, e.g. "Cross-sell for Zinger Burger".

**Menu Item** — The trigger item. When this product is in the customer's cart, the cross-sell suggestions below will be shown. Click **Select from Yum** to choose the menu item.

**Cross Sell Products** — The list of products recommended when the trigger item is in the cart. Click **Add Products**, select multiple items if needed, and click **Save Selections**.

3. Click **Publish** to activate the cross-sell rule

---

## Use Cases

**Drink upsell** — Trigger a drink recommendation whenever a burger is added to the cart, nudging customers to complete a meal.

**Side item suggestion** — Show fries or a side salad as a cross-sell whenever a standalone protein (e.g. chicken strips) is in the basket.

**Dessert close** — Recommend an ice cream or pie when a main meal item is present, increasing average order value at a natural decision point.

**Campaign-specific pairings** — During a limited-time promotion, configure a cross-sell to highlight the promotional item whenever a qualifying product is in the cart.
