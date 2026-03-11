---
title: MarTech
sidebar_position: 4
---

# MarTech

## What It Does

The MarTech feature is the Atlas platform's marketing technology stack — the set of integrations that collect, route, and act on customer behaviour data across every touchpoint in the KFC experience.

It connects three systems:

- **Event Tracking** — captures what customers do in the app and on the web
- **mParticle** — acts as the customer data platform (CDP), receiving all events and routing them to downstream tools
- **Braze** — the customer engagement platform, used for push notifications, in-app messages, and marketing automation

Together, they allow KFC markets to run personalised, data-driven campaigns without engineering involvement for each one.

## How the Data Flows

```
Customer Action (app / web)
        ↓
  Event Tracking Layer
  (structured event fired)
        ↓
     mParticle
  (data collected + routed)
        ↓
      Braze
  (campaigns, push, in-app)
```

## Components

### Event Tracking
Every meaningful customer action in Atlas — viewing a product, adding to cart, completing an order, tapping a promo — fires a structured event. These events follow a consistent schema so that data is comparable across markets.

### mParticle
mParticle is the central hub. It receives all events from Atlas, normalises and enriches them, and forwards the relevant data to tools like Braze, analytics platforms, and any other configured destination.

### Braze
Braze receives customer profiles and event data from mParticle and uses them to power:

- Push notifications (order updates, promotions, re-engagement)
- In-app messages (personalised banners, onboarding prompts)
- Marketing automation (triggered campaigns based on customer behaviour)

## Platforms

| Platform | Support |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ |
