---
title: Capability Boundaries
description: Who owns what on the Atlas platform — the unambiguous reference for what Helium does and doesn't do.
sidebar_label: Capability Boundaries
---

# 🚫 Capability Boundaries

> Use this table to answer: *"Can Helium do X?"* and *"Who actually owns this?"*

This makes ownership unambiguous. The most common mistakes in planning and scoping come from assuming Helium owns something it doesn't. When in doubt — check this table first.

---

## Ownership Table

| Capability | Owned By | NOT Owned By | Notes |
|---|---|---|---|
| Pricing calculation | Commerce Backend | Helium | Helium displays prices it receives |
| Menu content authoring | Byte Menu (external tool) | Portal, Helium | Portal assigns; Helium renders |
| Promo eligibility logic | Promo Engine (server-side) | Helium | Helium never computes eligibility |
| Loyalty points calculation | Loyalty service | Helium | Helium displays balance only |
| Payment processing / capture | PSP (via Vault) | Helium | Helium sends tokens; PSP does the rest |
| Card data handling (PAN) | PSP SDK | Helium | SDK captures; no PAN in Helium |
| Tax calculation | Tax Engine / Commerce Backend | Helium | Tax rates set in Portal; calculated at checkout |
| Address validation | Address service | Helium | Helium calls Address service |
| Store state (open/closed) | Portal + POS | Helium | Helium reads state from Store service |
| Trading hours | Portal (Stores module) | Helium | Configured in Portal; Helium renders |
| Delivery coverage zones | Portal / Geo service | Helium | Coverage validated at delivery mode selection |
| Push notification delivery | Push provider (external) | Helium | Helium manages preferences; provider sends |
| CMS content creation | CMS (via Portal) | Helium | Portal publishes; Helium renders |
| Legal document authoring | Legal team via Legal CMS | Helium | Helium renders what Legal CMS provides |
| Cookie categories | CMP (configured per market) | Helium | Helium renders CMP widget |
| Acquiring / settlement | PSP | Helium, BCOM | Out of scope for Atlas |
| POS/KDS integration | Commerce Backend + Portal | Helium | Helium has no direct POS connection |
| Aggregator order ingestion | Byte Connect (BCOM) | Helium | Aggregator orders enter via BCOM gateway |
| Audit log creation | Portal + all services | Markets can configure | Audit is system-generated; immutable |
| Feature flag targeting | Portal (Settings module) | Helium | Helium respects flags; Portal targets them |
| Webhook delivery guarantee | Integration platform | Markets | At-least-once; subscribers handle idempotency |

---

## The Core Principle

Helium is a **rendering and orchestration layer**. It requests data from backend services, renders it to the customer, and captures customer inputs to send back to the backend. It does not own state, does not perform calculations, and does not hold secrets.

Everything that looks like "app behaviour" to a customer is actually a backend decision that Helium presents. This is by design — it means behaviour can be changed by configuration without redeploying the front-end.

---

:::tip Related
- [Reality Check](/docs/byte-capabilities/enablement/reality-check) — the most common misconceptions that trip up rollouts
- [Platform Layers](/docs/byte-capabilities/platform-layers) — plain-English breakdown of what each layer does
:::
