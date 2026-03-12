---
title: Braze Welcome Reward Canvas
sidebar_position: 3
---

# Braze Welcome Reward Canvas

This playbook explains how KFC teams can set up a welcome reward canvas in Braze for new customers. Content assumptions are treated as verified for now, so the focus is on structure, timing, and execution flow.

---

## Goal

Use this playbook when KFC wants to welcome a newly identified or newly registered customer with an automated reward journey.

Typical examples:

- first app signup reward
- first loyalty registration reward
- first purchase incentive after account creation

## Prerequisites

- verified reward content and offer logic
- approved KFC message copy for push, email, or in-app message
- agreed audience definition
- Braze access to create or edit the canvas
- tracking or deeplink destination confirmed

## Step 1: Define the entry audience

Common KFC welcome audience options:

- customers who complete app registration
- customers who join loyalty
- customers who opt in to marketing during account setup

Make sure the audience only includes genuinely new customers, not existing users re-entering the journey.

## Step 2: Define the trigger and delay

Choose:

- the trigger event that starts the canvas
- any delay before the reward message sends
- whether the customer should receive the reward immediately or after a wait period

For KFC, a short delay is often useful if you want the message to feel welcome-oriented rather than transactional.

## Step 3: Set the message sequence

Recommended canvas flow:

1. welcome message
2. reward explanation
3. CTA into the KFC app or ordering flow
4. optional reminder if the reward is not redeemed within the active window

Keep the first message simple and branded. The reward details should be easy for customers to understand at a glance.

## Step 4: Attach the reward logic

Confirm:

- what reward the customer receives
- how long it stays valid
- whether it should deep link to a specific menu item, category, or landing page
- whether any market exclusions apply

If the reward depends on a live Atlas promotion, confirm the promotion is already configured and assigned to the correct stores before the Braze canvas launches.

## Step 5: QA the customer journey

Before launch:

1. test audience entry
2. verify message timing
3. validate copy, branding, and links
4. check fallback handling if the reward is unavailable
5. confirm the CTA lands in the expected KFC experience

## Step 6: Launch and monitor

Once live, monitor:

- entry volume
- delivery rates
- click-through to app or ordering destination
- reward redemption
- support tickets or customer confusion

## KFC Notes

- match tone and copy to current KFC brand campaigns
- keep welcome rewards easy to redeem; avoid heavy explanation in the first touch
- if the reward is market-specific, confirm that Braze audience rules and Atlas promotion coverage match exactly
