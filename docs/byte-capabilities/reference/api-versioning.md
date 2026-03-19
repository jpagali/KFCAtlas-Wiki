---
title: API Versioning & Deprecation
description: How the Atlas platform APIs are versioned and how much notice markets get before breaking changes.
sidebar_label: API Versioning
---

# 🔗 API Versioning & Deprecation Reference

> All platform APIs use Semantic Versioning. Breaking changes require major version bumps. Markets are notified ahead of deprecation windows.

Understanding deprecation windows matters for market launch planning — integrations built before a deprecation window ends are safe. After the window, breaking changes may apply.

---

## Deprecation Windows by API Domain

| API Domain | Compatibility Policy | Deprecation Notice |
|---|---|---|
| Identity | Backward compatible minor | 90 days |
| Context / Localisation | Backward compatible minor | 90 days |
| Menu | Backward compatible minor | 120 days (markets need stage rollout time) |
| Cart | Additive changes only | 90 days |
| Checkout Orchestrator | Additive changes only | 120 days |
| Payments / PSP | Additive changes only | 180 days (schema mandates apply — longest window in platform) |
| Promo / Loyalty | Additive changes only | 120 days |
| Donations / Tips | Additive changes only | 90 days |
| Orders / Tracking | Additive changes only | 120 days |
| CMS / Legal CMS | Additive; locale/version-aware | 180 days |
| Engagement Platform | Additive changes only | 120 days |

---

## Notes

**Payments (180 days)** — The longest deprecation window in the platform. Payment schema changes affect PSP integrations, vaulted tokens, and compliance requirements — all of which require extended market coordination.

**CMS / Legal (180 days)** — Legal documents are versioned by effective date per locale. Changes to the Legal CMS API require corresponding legal review cycles before markets can adopt new versions.

**Menu (120 days)** — Markets often need full stage rollouts (dev → staging → prod) before adopting menu API changes, so the window is longer than Cart or Identity.

**Additive changes only** — means new fields or endpoints can be added without a version bump. Existing fields and behaviours are not changed or removed during the deprecation window.
