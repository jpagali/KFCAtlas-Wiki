---
title: Features Overview
sidebar_position: 1
---

# Features

This section documents each capability built into the KFC Atlas platform. Every feature has its own dedicated page covering what it does, how it behaves across platforms, and any market-specific considerations.

## What Counts as a Feature?

A feature in Atlas is a distinct, user-facing or operator-facing capability that:

- Delivers a specific piece of product or operational value
- Has defined behaviour across iOS, Android, and Web
- Can be enabled, configured, or extended per market

## Current Features

| Feature | Description | Platforms |
|---|---|---|
| [KFC Deeplink \| Universal Link](./kfc-deeplink-universal-link) | Open specific KFC content directly in the app via any KFC URL | iOS, Android, Web |
| [Branch Deeplink](./branch-deeplink) | Attribution-aware deep linking and deferred routing via Branch.io | iOS, Android |
| [MarTech](./martech) | Event tracking, customer data, and marketing automation integrations | iOS, Android, Web |
| [Social Sign In](./social-sign-in) | Google, Facebook, and Apple login across web and native app | iOS, Android, Web |
| [Menu Item Reservation](./menu-item-reservation) | Allow customers to pre-order and reserve specific menu items in advance | iOS, Android, Web |

:::info
Features are enabled per market via configuration — not separate code deployments. See [Market Configurations](/docs/frontend/market-configurations) for details.
:::

## Feature Dependencies

Each feature in Atlas is built to be reusable across markets. That said, some features may carry dependencies on third-party systems — such as a market's Point of Sale (POS) or Delivery Management System (DMS) — and will require an integration assessment before they can go live.

Menu Item Reservation is an example: KFC Japan's Christmas Ordering flow depends on stock and timeslot APIs from **C-BOH**, their bespoke POS system. Markets without equivalent API support from their POS would need to complete that integration before the feature could be enabled.
