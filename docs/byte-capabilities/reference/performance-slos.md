---
title: Performance SLOs
description: Quick reference for service level objectives and performance targets across the Atlas / Byte / Helium platform.
sidebar_label: Performance SLOs
---

# 📐 Performance SLOs

> Quick reference for SLOs and performance targets across the platform. These are the benchmarks each service is held to — use them for expectation-setting during launch and escalation triage.

---

## Platform Performance Targets

| Domain / Service | Metric | Target |
|---|---|---|
| Identity — Auth endpoints | Availability | 99.95% monthly |
| Localisation — Context fetch | Latency p95 | ≤150ms |
| Menu — Product Listing Page (PLP) | Latency p95 | ≤200ms |
| CMS content render | Latency p95 | ≤150ms (CDN-cached) |
| Offers feed | Latency p95 | ≤200ms |
| Order list | Latency p95 | ≤200ms |
| Checkout submit | Success p99 | ≥99.5% |
| Payment auth capture | Success rate | ≥99.5% |
| Loyalty reward redemption | Success p99 | ≥99.8% |
| Order tracking | Availability | 99.9% |
| In-app message feed freshness | Staleness max | ≤60 seconds |
| Portal user/role queries | Latency p95 | ≤500ms |

---

## Notes

**Checkout submit (≥99.5% p99 success)** — Idempotency keys ensure that retried submissions don't create duplicate orders. A 409 on resubmit returns the original orderRef.

**Loyalty reward redemption (≥99.8% p99 success)** — This is the tightest success SLO in the platform, reflecting the revenue and trust sensitivity of failed reward redemptions.

**In-app message freshness (≤60s)** — Feed is considered stale after 60 seconds. A pull-to-refresh is triggered on TTL expiry.

**CMS render (≤150ms CDN-cached)** — On CDN cache miss, the fallback is the cached version rather than a live fetch failure.

---

:::tip Related
- [API Versioning & Deprecation](/docs/byte-capabilities/reference/api-versioning) — deprecation windows that affect planning
:::
