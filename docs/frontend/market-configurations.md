---
title: Market Configurations
sidebar_position: 4
---

# Market Configurations

The Atlas Platform uses a **feature flag architecture** — a single shared codebase where market-level differences are controlled by configuration, not separate deployments. Regional teams can activate or deactivate features independently without waiting for a product release.

## What Can Be Configured Per Market

| Feature Area | Configurable? | Where |
|---|---|---|
| Loyalty programme type | ✅ | Market Settings → Loyalty |
| Loyalty earning rate | ✅ | Market Settings → Loyalty Rules |
| Promo code behaviour | ✅ | Market Settings → Promotions |
| Journey steps (show/hide) | ✅ | Market Settings → Customer Journey |
| Order channel availability | ✅ | Restaurant → Channel Settings |
| Delivery radius | ✅ | Restaurant → Channel Settings → Delivery |
| Minimum delivery order | ✅ | Restaurant → Channel Settings → Delivery |
| Payment methods | ✅ | Market Settings → Payments |
| Guest checkout | ✅ | Market Settings → Customer Journey |
| Scheduled future orders | ✅ | Market Settings → Customer Journey |

## Japan 🇯🇵 — Current Configuration

| Setting | Value |
|---|---|
| Loyalty type | Points-based (KFC Japan Rewards) |
| Earning rate | 1 point per ¥100 spent |
| Promo codes | Enabled |
| Scheduled orders | Enabled (up to 7 days ahead) |
| Guest checkout | Enabled |
| Aggregator integration | Uber Eats, Demae-can |

## Australia 🇦🇺 — Current Configuration

| Setting | Value |
|---|---|
| Loyalty type | Voucher-based (KFC App Deals) |
| Earning rate | N/A — voucher model |
| Promo codes | Enabled |
| Scheduled orders | Disabled |
| Guest checkout | Enabled |
| Aggregator integration | Uber Eats, DoorDash |

## Requesting a Configuration Change

Configuration changes for existing features are self-serve through the Admin Portal. If a feature is **greyed out**, it either:
1. Has not been built for your market yet — raise a request via the JIRA Service Desk
2. Requires regional admin access — contact your BMU

:::info
All configuration changes take effect **immediately** — no deployment is required and no other market is affected.
:::
