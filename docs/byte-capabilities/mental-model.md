---
title: Platform Mental Model
description: The hierarchy, structure, and architecture of the Byte Stack platform in plain English.
sidebar_label: Mental Model
---

import ThemeSyncedIframe from '@site/src/components/ThemeSyncedIframe';

# 🧠 Platform Mental Model

Understanding the platform starts with understanding the three-layer hierarchy — what each layer is responsible for, and how they relate to each other.

---

## The Three Layers

**Byte Stack** has three major layers:

- **Byte Helium** — The customer-facing front-end (web + app). What customers see and interact with. Byte Helium renders everything but owns very little — pricing, eligibility, and state all come from the backend.
- **Commerce Backend** — The engine behind every order. Handles cart state, pricing, tax calculation, payment processing, and POS injection. It talks directly to Byte POS, and uses Byte Connect when a market POS is not Byte POS. Invisible to customers, critical to everything.
- **Byte Portal** — The admin control plane. Market and ops teams use this to configure stores, menus, promotions, taxes, payments, users, and content.

These three layers connect to a set of **external services**: Menu, Identity/SSO, PSP (payments), Loyalty/Promos Engine, Order Tracking, CMS, and Analytics.

:::note Byte POS Caveat
Readers often assume Byte Commerce talks directly to any market POS. The intended model is narrower: **Byte Commerce -> Byte POS** by default, or **Byte Commerce -> Byte Connect -> POS** when the market is not on Byte POS.
:::

---

## Platform Hierarchy

<ThemeSyncedIframe
  src="/byte-stack-hierarchy.html"
  title="Byte Stack Platform Hierarchy"
  height={860}
  messageType="byte-stack-hierarchy-theme"
/>

---

## System Architecture Diagram

This diagram shows how the three platform layers connect to each other and to external services.

```mermaid
graph TD
    subgraph Customer["👤 Customer"]
        U[User — Web / App]
    end

    subgraph Byte Helium["🎨 HELIUM — Front-End"]
        HEL_ID[Identity & Sign-In]
        HEL_LOC[Localisation & Order Mode]
        HEL_MENU[Menu Browse & PDP]
        HEL_CART[Cart]
        HEL_CHK[Checkout]
        HEL_PAY[Payments & Tenders]
        HEL_PROMO[Promotions & Loyalty]
        HEL_TRACK[Order Tracking]
        HEL_ENG[Engagement & Messaging]
        HEL_CMS[Content & Legal]
    end

    subgraph CB["⚙️ COMMERCE BACKEND"]
        CB_CART[Cart & Order Engine]
        CB_MENU[Menu / Pricing / Tax]
        CB_PAY[Payment Orchestrator]
        CB_ORDER[Order Service]
        CB_POS[POS/KDS Integration]
        CB_AGG[Aggregator Gateway]
    end

    subgraph Portal["🛠 PORTAL — Admin"]
        PORT_MENU[Menu Config]
        PORT_PROMO[Promos Config]
        PORT_TAX[Tax Config]
        PORT_PAY[Payments Config]
        PORT_OPS[Orders & Refunds]
        PORT_USER[Users & Roles]
    end

    subgraph External["🌐 External Systems"]
        EXT_ID[Identity / SSO]
        EXT_MENU[Menu Service]
        EXT_PSP[PSP / Vault]
        EXT_LOYALTY[Loyalty & Promo Engine]
        EXT_TRACKING[Order Tracking]
        EXT_CMS[CMS / Legal CMS / CMP]
        EXT_GEO[Geo / Store Locator]
        EXT_BPOS[Byte POS]
        EXT_CONNECT[Byte Connect]
        EXT_MPOS[Market POS]
        EXT_AGG[Aggregators — Uber Eats etc]
    end

    U --> Byte Helium
    Byte Helium --> CB
    Portal --> CB
    Portal --> EXT_MENU

    HEL_ID --> EXT_ID
    HEL_MENU --> EXT_MENU
    HEL_PROMO --> EXT_LOYALTY
    HEL_TRACK --> EXT_TRACKING
    HEL_CMS --> EXT_CMS
    HEL_LOC --> EXT_GEO

    CB_PAY --> EXT_PSP
    CB_POS --> EXT_BPOS
    CB_POS --> EXT_CONNECT
    EXT_CONNECT --> EXT_MPOS
    CB_AGG --> EXT_AGG
    CB_MENU --> EXT_MENU
```

---

:::tip Read next
See [Platform Layers](/docs/byte-capabilities/platform-layers) for a plain-English breakdown of what each layer does and what markets can configure.
Need the POS integration caveat? Read [Byte Connect](/docs/byte-capabilities/enablement/byte-connect).
:::
