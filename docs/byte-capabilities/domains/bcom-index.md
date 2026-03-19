---
title: Byte Commerce Backend Capabilities
description: All capabilities owned by the Byte Commerce Backend — the order processing engine of the KFC Atlas platform.
sidebar_label: Overview
---

# ⚙️ Byte Commerce Backend Capabilities

**Byte Commerce Backend** is the engine behind every transaction on the Atlas platform. It is invisible to customers but orchestrates everything between the front-end and in-store systems — cart management, pricing, tax calculation, payment processing, order state, POS injection, and aggregator order ingestion.

:::note Byte POS Caveat
Byte Commerce talks directly to **Byte POS**. If a market is not using Byte POS, **Byte Connect** must be included in the Byte Commerce onboarding bundle so Byte Commerce can reach the market POS through the path **Byte Commerce -> Byte Connect -> POS**.
:::

Every order placed through Byte Helium is processed by Commerce Backend. Every price the customer sees was calculated by Commerce Backend. Every payment was authorised through Commerce Backend's payment orchestrator.

---

## What Commerce Backend Owns

| Domain | What It Does |
|---|---|
| **Ordering & Cart Lifecycle** | Cart creation, maintenance, pricing, order state machine |
| **Menu Consumption, Pricing & Tax** | Menu availability, dynamic pricing, tax calculation, promo application |
| **Payments & Refunds** | Payment auth, capture, refund processing, PSP integration |
| **Customer Accounts & Auth** | Identity via OIDC/OAuth2; customer profile |
| **Preferences & Loyalty Linking** | Favourites, loyalty account linking, consent tracking |
| **POS / KDS Integration** | Order injection to in-store systems; status sync, using Byte Connect when the market POS is not Byte POS |
| **Aggregator Integration (Byte Connect)** | Normalised ingestion from Uber Eats, DoorDash, and other aggregators |
| **Data Migration** | Migrating legacy customers and order history |
| **Observability** | Logging, tracing, health monitoring, metrics |

---

## Key Data Contracts

These are the versioned API/event schemas that govern how Commerce Backend communicates with Byte Helium, Byte Portal, POS systems, and aggregators.

| Contract ID | What It Describes |
|---|---|
| DCI#BCOM-Cart-API-v1 | Cart structure: lines, totals, benefits |
| DCI#BCOM-Order-API-v1 | Order record: items, status, totals, idempotency key |
| DCI#BCOM-Menu-Projection-v1 | Menu data projected for store/channel |
| DCI#BCOM-Pricing-API-v1 | Pricing request/response with tax breakdown |
| DCI#BCOM-POS-Order-API-v1 | Order payload sent to POS systems |
| DCI#BCOM-KDS-Order-Event-v1 | KDS ticket event with item/station breakdown |
| DCI#BCOM-Order-Status-Event-v1 | Fulfillment status updates from POS/KDS |
| DCI#BCOM-Aggregator-Order-API-v1 | Normalised aggregator order format |
| DCI#BCOM-Aggregator-Status-Event-v1 | Status updates back to aggregators |

---

:::tip Related
- Full technical reference → [Commerce Backend Reference](/docs/byte-capabilities/reference/commerce-backend)
- Need the onboarding caveat? Start with [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)
:::
