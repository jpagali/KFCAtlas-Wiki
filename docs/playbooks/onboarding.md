---
title: Create Promotions
sidebar_position: 1
---

# Create Promotions

This playbook shows how KFC teams should create and launch a promotion in Atlas, from the initial campaign brief through store-group assignment and pre-launch checks.

**Estimated time:** 30-60 minutes for setup, plus approval and QA time
**Who does this:** Regional / BMU Admin, marketing operations, or campaign owners with Admin Portal access

---

## What This Playbook Covers

Use this playbook when KFC needs to:

- launch a new digital offer in Atlas
- configure eligibility and discount logic
- assign the promotion to the correct stores or store groups
- complete a basic QA pass before the campaign goes live

If you are specifically creating a Buy 1 Get 1 offer, use the dedicated subpage: [Buy 1 Get 1 Promo](/docs/playbooks/buy-one-get-one-promo).

## Prerequisites

- approved KFC campaign brief with offer details, dates, and target market
- promotion copy confirmed with the local marketing team
- store or store-group scope confirmed
- Admin Portal access to Promotions and Store Groups

## Step 1: Confirm the promotion structure

Before building anything in Atlas, confirm:

- the discount type
- qualifying products or bundles
- start and end date/time
- whether the promotion is automatic or code-based
- whether the campaign applies to all stores or selected store groups

:::tip
For KFC campaigns, always confirm whether the offer should appear in app, web, aggregator-linked flows, or a limited set of ordering channels before setup starts.
:::

## Step 2: Create the promotion shell

Use the Admin Portal guide page [Create a Promotion](/docs/admin-portal-guide/promotions/create-a-promotion/) to create the promotion record.

At this stage:

- choose the correct promotion flow
- add the internal promotion name
- add the customer-facing display name
- add a clear description for KFC operators and support teams

## Step 3: Add rules and effects

Define:

- the conditions that make a customer eligible
- the effect that should apply once the condition is met
- any limits, exclusions, or campaign windows

Examples:

- percentage discount on a meal bundle
- fixed-value discount for a threshold spend
- free item or upsell reward after a qualifying purchase

## Step 4: Assign the promotion to stores

If the offer does not apply to every store, assign it through store groups:

- use [Create a Store Group](/docs/admin-portal-guide/promotions/create-a-store-group/) if a new campaign group is needed
- use [Assign Promotions to Store Groups](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/) to link the promotion
- double-check that only the intended KFC restaurants are included

## Step 5: QA before launch

Before launch:

- verify the dates and times
- test the promotion against the target products
- confirm the discount displays correctly in the KFC customer journey
- confirm ineligible items do not trigger the reward
- make sure support teams know the live date and the expected customer-facing behaviour

## Step 6: Monitor after launch

Once live, monitor:

- redemption behaviour
- unexpected stacking with other promos
- store-group coverage
- any support tickets from operators or customers

If changes are required, update the promotion immediately in Atlas and notify the campaign owner.

## Related Admin Portal Guides

- [Create a Promotion](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Edit a Promotion](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [Assign Promotions to Store Groups](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)
- [Create a Store Group](/docs/admin-portal-guide/promotions/create-a-store-group/)
- [View Promotions for a Store Group](/docs/admin-portal-guide/promotions/view-promotions-for-a-store-group/)

## KFC Notes

- use campaign names that clearly identify market, mechanic, and date range
- align promotion display copy with local KFC marketing approval before launch
- for high-traffic campaigns, complete QA on both app and web before go-live
