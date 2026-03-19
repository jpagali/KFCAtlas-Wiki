---
title: Commerce Backend Reference
description: What the Atlas Commerce Backend (BCOM) does, its domain breakdown, and key data contracts.
sidebar_label: Commerce Backend
---

# 🗂 Commerce Backend — Feature Reference

> The Commerce Backend is invisible to customers but orchestrates everything that happens between the front-end and in-store systems.

---

## What It Does

The Commerce Backend (BCOM) is the engine that processes every digital order placed on the Atlas platform. It handles cart creation and maintenance, pricing and tax calculation, payment authorisation and capture, order state management, POS/KDS injection, aggregator order ingestion, and customer account linking.

Helium never directly orchestrates orders — it sends requests to BCOM, and BCOM manages the result.

---

## BCOM Domain Overview

| TRD Domain | What It Does | Owned By |
|---|---|---|
| Ordering & Cart Lifecycle | Cart creation, maintenance, pricing, order state machine | BCOM Product & Engineering |
| Menu Consumption, Pricing & Tax | Menu availability, dynamic pricing, tax calculation, promo application | Byte Menu & Pricing |
| Payments & Refunds | Payment auth, capture, refund processing, PSP integration | BCOM Payments |
| Customer Accounts & Auth | Identity via OIDC/OAuth2; customer profile | Byte Customer Platform |
| Preferences & Loyalty Linking | Favourites, loyalty account linking, consent tracking | Customer Platform / Loyalty |
| POS / KDS Integration | Order injection to in-store systems; status sync | BCOM + Ops |
| Aggregator Integration | Normalised ingestion from Uber Eats, DoorDash, etc. | BCOM + Byte Connect |
| Data Migration | Migrating legacy customers and order history | Migration Tooling / Customer Platform |
| Observability | Logging, tracing, health, metrics | Platform / SRE |

---

## BCOM Key Data Contracts

These are the versioned data contracts (DCI — Data Contracts & Interfaces) that govern how services communicate across the platform.

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

*Source: Commerce Backend FRD/TRD Master Index, Commerce Backend Functional Requirements, Commerce Backend Technical Requirements, Commerce Backend TRD Domain Catalogue.*
