---
title: Branch Deeplink
sidebar_position: 3
---

# Branch Deeplink

## What It Does

Branch Deeplink extends the Atlas platform's linking capabilities using the **Branch.io SDK** — a third-party deep linking and attribution platform used widely across mobile apps.

Where KFC Universal Links route users to in-app content, Branch adds a layer of intelligence on top: it tracks *where* a user came from, handles deferred deep links for users who don't have the app yet, and provides attribution data that connects marketing activity to app installs and orders.

## Key Capabilities

| Capability | Description |
|---|---|
| **Deferred deep linking** | A user clicks a Branch link, installs the app, and is taken to the correct in-app screen on first launch — even though the app wasn't installed when they clicked |
| **Attribution** | Links track which campaign, channel, or creative drove the install or session |
| **Cross-platform routing** | Branch handles iOS, Android, and web fallbacks from a single link |
| **Unified link management** | Marketing teams can create and manage deep links via the Branch dashboard without engineering involvement |

## How It Relates to Universal Links

KFC Universal Links and Branch Deeplinks serve complementary purposes:

| | Universal Link | Branch Deeplink |
|---|---|---|
| **Primary use** | Direct routing (app installed) | Attribution + deferred linking |
| **App not installed** | Web fallback | Can trigger App Store redirect + deferred deep link |
| **Marketing attribution** | No | Yes |
| **Managed by** | Engineering | Marketing + Engineering |

## Platforms

| Platform | Support |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ (fallback) |
