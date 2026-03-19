---
title: Glossary
description: Definitions for all technical and platform terms used across the Atlas / Byte / Helium Knowledge Center.
sidebar_label: Glossary
---

# 📋 Platform Glossary

> Definitions for all terms used across the Byte Capabilities documentation. When in doubt about what a term means, start here.

---

| Term | Definition |
|---|---|
| **Helium** | The customer-facing web/app front-end for KFC ordering |
| **BCOM / Commerce Backend** | The engine that processes orders, pricing, payments, and POS injection |
| **Portal** | The admin interface for market and ops teams to configure the platform |
| **Byte Menu** | The menu authoring tool — external to Atlas; Portal assigns published menus |
| **Byte Connect** | The aggregator gateway that normalises third-party delivery orders into BCOM |
| **PSP** | Payment Service Provider — handles card tokenisation and capture |
| **Vault** | Secure storage for card tokens and PSP credentials |
| **PLP** | Product Listing Page — the menu browse view |
| **PDP** | Product Detail Page — single item view with options |
| **OTP** | One-Time PIN — used for passwordless sign-in |
| **SSO** | Single Sign-On — centralised authentication service |
| **CMP** | Consent Management Platform — manages cookie and marketing consent |
| **CRM** | Customer Relationship Management — manages customer profiles and comms prefs |
| **KDS** | Kitchen Display System — the screen in-store showing incoming orders |
| **POS** | Point of Sale — the in-store order management system |
| **DCI** | Data Contracts & Interfaces — the versioned registry of all API/event schemas |
| **RBAC** | Role-Based Access Control — how Portal user permissions are managed |
| **Scope Guard** | Portal security mechanism that blocks out-of-scope access at UI and API level |
| **Add-Hope** | KFC's global charitable donation programme integrated at checkout |
| **Split Tender** | Paying with two payment methods — e.g., voucher + card |
| **Idempotency Key** | A unique ID that prevents duplicate orders or payments if a request is retried |
| **TRD** | Technical Requirements Document |
| **FRD** | Functional Requirements Document |
| **SLO** | Service Level Objective — the performance target for a system |
| **DLQ** | Dead Letter Queue — where failed webhook events are held for review |
| **3DS** | 3D Secure — card authentication protocol for fraud prevention |
| **Byte** | The programme name for the overall KFC e-commerce initiative |
| **Atlas** | The project/platform codename for KFC's global digital ordering system |
| **Context** | The platform's record of a customer's market, language, order mode, and store |
| **BCOM** | Short form of Commerce Backend — see Commerce Backend |
| **Patch** | A menu override applied on top of a published menu version — used for price or availability changes at store or group level |
| **Store Group** | A logical grouping of stores in Portal used for menu assignment, promotions scoping, and tax rule inheritance |
| **Coverage Zone** | A delivery geographic boundary configured in Portal / Geo service that determines which addresses can receive delivery orders |
| **Feature Flag** | A runtime toggle in Portal that enables or disables a feature for a specific market, channel, or customer segment without redeployment |
| **Aggregator** | A third-party delivery platform (e.g., Uber Eats, DoorDash) whose orders are ingested via Byte Connect into BCOM |
