---
title: Front-end Overview
sidebar_position: 1
---

# Front-end Overview

**KFC Atlas** is KFC's global front-end for digital ordering — what your guests interact with when they order online, through the KFC app, or via a third-party aggregator.

Atlas is built on **Byte Helium**, Yum!'s enterprise design system and front-end foundation. In the broader Atlas platform picture, Atlas works with **Byte Commerce + Byte Portal**, and with **Byte Connect** whenever a market POS is not Byte POS.

This guide is for **restaurant teams and BMUs** who need to understand what the platform delivers to customers, how it behaves in each market, and what is configurable without requiring a product deployment.

## What the Front-end Covers

The Atlas front-end spans four areas:

- **Customer Journey** — the end-to-end flow from discovery to order confirmation
- **Order Channels** — how Dine-in, Delivery, and Takeaway are presented and managed per restaurant
- **Customer Engagement Surveys** — how KFC Listens-style feedback programmes collect post-order sentiment
- **Market Configurations** — what can be switched on or off per market (loyalty, promos, scheduling)

## Design System

The KFC Atlas front-end is built on **Byte Helium**, Yum!'s enterprise design system and front-end foundation. Helium provides the shared design tokens, UI components, and structural patterns; Atlas applies the KFC brand on top of that foundation so the experience feels KFC-native while still using the shared Yum! system underneath.

### Design Philosophy

Atlas is intentionally designed around a **focused buying flow**, not simply the fewest possible clicks. As Tim Marshall has explained, some journeys may use more steps when that gives customers clearer choices, makes the product easier to understand, and presents relevant trade-up options at the moment they are deciding what to buy.

That means the front-end should be judged by whether the journey is clear, confident, and commercially useful — not only by whether it is short. A meal flow, for example, may expose size upgrades, add-ons, or customization choices step by step because those decisions are easier to understand in context than if every option is collapsed into one dense screen.

See [Design System](/docs/frontend/design-system) for a full explanation of how the visual identity flows from Figma all the way to the screen.

## Markets in Scope

| Market | App Platform |
|---|---|
| 🇦🇺 Australia | KFC Australia App + Web |

## Who Should Read This

| Role | Why it's relevant |
|---|---|
| Restaurant Operator / Market Team | Understand what your customers experience and what you can configure |
| BMU / Regional Office | Understand market-level configuration options and how to activate features |
| Pre-sales / New Market Onboarding | Understand the baseline platform capabilities before go-live |

:::info
The front-end is built on a shared codebase across all markets. Market differences are controlled by configuration — not separate builds.
:::
