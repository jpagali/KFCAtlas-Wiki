---
title: Capability Boundaries
description: Who owns what on the Atlas platform — the unambiguous reference for what Byte Helium does and doesn't do.
sidebar_label: Capability Boundaries
---

# 🚫 Capability Boundaries

> Use this table to answer: *"Can Byte Helium do X?"* and *"Who actually owns this?"*

This makes ownership unambiguous. The most common mistakes in planning and scoping come from assuming Byte Helium owns something it doesn't. When in doubt — check this table first.

---

## Ownership Table

| Capability | Owned By | NOT Owned By | Notes |
|---|---|---|---|
| Pricing calculation | Commerce Backend | Byte Helium | Byte Helium displays prices it receives |
| Menu content authoring | Byte Menu (external tool) | Byte Portal, Byte Helium | Byte Portal assigns; Byte Helium renders |
| Promo eligibility logic | Promo Engine (server-side) | Byte Helium | Byte Helium never computes eligibility |
| Loyalty points calculation | Loyalty service | Byte Helium | Byte Helium displays balance only |
| Payment processing / capture | PSP (via Vault) | Byte Helium | Byte Helium sends tokens; PSP does the rest |
| Card data handling (PAN) | PSP SDK | Byte Helium | SDK captures; no PAN in Byte Helium |
| Tax calculation | Tax Engine / Commerce Backend | Byte Helium | Tax rates set in Byte Portal; calculated at checkout |
| Address validation | Address service | Byte Helium | Byte Helium calls Address service |
| Store state (open/closed) | Byte Portal + POS | Byte Helium | Byte Helium reads state from Store service |
| Trading hours | Byte Portal (Stores module) | Byte Helium | Configured in Byte Portal; Byte Helium renders |
| Delivery coverage zones | Byte Portal / Geo service | Byte Helium | Coverage validated at delivery mode selection |
| Push notification delivery | Push provider (external) | Byte Helium | Byte Helium manages preferences; provider sends |
| CMS content creation | CMS (via Byte Portal) | Byte Helium | Byte Portal publishes; Byte Helium renders |
| Legal document authoring | Legal team via Legal CMS | Byte Helium | Byte Helium renders what Legal CMS provides |
| Cookie categories | CMP (configured per market) | Byte Helium | Byte Helium renders CMP widget |
| Acquiring / settlement | PSP | Byte Helium, Commerce Backend | Out of scope for Atlas |
| POS/KDS integration | Commerce Backend + Portal | Byte Helium | Byte Helium has no direct POS connection; non-Byte POS markets require Byte Connect between Byte Commerce and the market POS |
| Aggregator order ingestion | Byte Connect (Commerce Backend) | Byte Helium | Aggregator orders enter via Commerce Backend gateway |
| Audit log creation | Byte Portal + all services | Markets can configure | Audit is system-generated; immutable |
| Feature flag targeting | Byte Portal (Settings module) | Byte Helium | Byte Helium respects flags; Portal targets them |
| Webhook delivery guarantee | Integration platform | Markets | At-least-once; subscribers handle idempotency |

---

## The Core Principle

Byte Helium is a **rendering and orchestration layer**. It requests data from backend services, renders it to the customer, and captures customer inputs to send back to the backend. It does not own state, does not perform calculations, and does not hold secrets.

Everything that looks like "app behaviour" to a customer is actually a backend decision that Byte Helium presents. This is by design — it means behaviour can be changed by configuration without redeploying the front-end.

:::note Byte POS Caveat
Commerce Backend is wired to talk directly to **Byte POS**. If a market is not using Byte POS, **Byte Connect** must be onboarded as the bridge between Byte Commerce and that market's POS.
:::

---

:::tip Related
- [Reality Check](/docs/byte-capabilities/enablement/reality-check) — the most common misconceptions that trip up rollouts
- [Platform Layers](/docs/byte-capabilities/platform-layers) — plain-English breakdown of what each layer does
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect) — when and why Byte Connect is required
:::
