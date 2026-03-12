---
title: Buy 1 Get 1 Promo
sidebar_position: 2
---

# Buy 1 Get 1 Promo

This playbook walks through how KFC teams should configure a Buy 1 Get 1 promotion in Atlas using the existing promotion tools in the Admin Portal.

**Estimated time:** 20-40 minutes, plus QA time
**Who does this:** Regional / BMU Admin or campaign operations owner

---

## When to Use This Playbook

Use this playbook when the KFC campaign mechanic is:

- Buy 1 Get 1 free
- Buy 1 get the second item at a reduced price
- buy one qualifying item and unlock a matching bonus item

## Step 1: Confirm the offer design

Before setup, confirm:

- the qualifying item or bundle
- whether the free item must match the purchased item
- whether the discount applies to the cheapest item, same item, or a selected reward item
- the campaign dates and eligible stores

## Step 2: Create the promotion

Start with [Create a Promotion](/docs/admin-portal-guide/promotions/create-a-promotion/).

Recommended setup:

- use a clear internal name such as `KFC JP BOGO Zinger Week 1`
- use customer-facing copy that matches the approved campaign language
- choose the promotion flow that best matches a multi-item reward mechanic

## Step 3: Configure the requirement

Set the requirement so Atlas recognizes the qualifying purchase.

Typical KFC examples:

- buy 1 Zinger Burger
- buy 1 Box Meal
- buy 1 selected bucket and unlock 1 reward item

Make sure the minimum quantity is correct. For a true BOGO, the customer usually needs at least one qualifying item in cart before the reward can apply.

## Step 4: Configure the effect

Set the effect to match the offer:

- free same item
- free selected reward item
- discounted second item

Double-check whether tax, modifiers, and bundle logic are expected to follow the base product or the reward item.

## Step 5: Assign to the right stores

If the BOGO is not national:

- create or reuse a store group
- assign the promotion only to the intended KFC restaurants
- confirm the campaign is not active in excluded stores

Use:

- [Create a Store Group](/docs/admin-portal-guide/promotions/create-a-store-group/)
- [Assign Promotions to Store Groups](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)

## Step 6: Run QA

Test the promotion before launch:

1. add one qualifying item to cart and confirm the reward appears correctly
2. add non-qualifying items and confirm the reward does not trigger
3. test in the intended channels only
4. confirm campaign dates and cut-off times
5. confirm the promotion does not stack in an unintended way with other live KFC offers

## Common KFC Checks

- does the offer wording match the menu item names customers actually see?
- does the free item inherit the correct modifiers?
- is the offer limited to app/web only, or should restaurant teams expect questions from aggregator customers too?
- have support teams been briefed on the offer rules?

## Related Admin Portal Guides

- [Create a Promotion](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Edit a Promotion](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [View Promotions for a Store Group](/docs/admin-portal-guide/promotions/view-promotions-for-a-store-group/)
