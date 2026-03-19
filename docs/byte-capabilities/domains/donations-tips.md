---
title: Donations & Tips
description: How the Atlas platform lets customers add a charitable donation or a delivery driver tip during checkout.
sidebar_label: Donations & Tips
---

# Donations & Tips

**What it does:** Allows customers to add a charitable donation (Add Hope) or a tip for their delivery driver during checkout.

**Why it matters:** Add Hope is a globally significant KFC CSR programme. Tips improve driver satisfaction and delivery quality perception. Both require careful payment handling and per-market enablement.

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **Add-Hope Donation** | Customers want to donate to a cause at checkout | Lets customer add a donation to their order total | Donation service provides cause options; customer selects amount or rounding; donation line added to order | Donation service, PSP | Active checkout; Add-Hope enabled for market | Market must enable Add-Hope; if donation service fails (5xx), donation skipped and order flagged | Donation attachment rate, average donation value |
| **Add Delivery Driver Tip** | Customer wants to tip their driver | Lets customer add a tip amount to their delivery order | Tip service attaches tip tender to order; may be separate PSP capture | Tip service, PSP | Delivery mode active; checkout in progress | Tips only available for delivery orders; tip may be a separate payment capture | Tip attachment rate, average tip value |
| **View About Add Hope** | Customer wants to know what they're donating to | Renders the Add-Hope information page | CMS page fetched and rendered | CMS service, Donation config | None | Content managed in CMS — not Helium | Page engagement, donation conversion |

---

## Technical Sources

<details>
<summary>📎 Technical Source: Add-Hope Donation / Driver Tip</summary>

- **FRD References:** FRD-HEL-022, FRD-HEL-023, FRD-HEL-073
- **TRD Domain:** Donations & Tips
- **Key Interfaces / APIs:** Donation Config/Collect, Add Tip (Bearer auth)
- **Data Contracts:** DonationLine (amount, causeId); TipTender (amount, method)
- **Source Summary:**
  - Add-Hope market-enabled via Portal configuration
  - Donation service failure (5xx): donation skipped, order tagged for reporting
  - Tip may be a separate PSP capture (market and PSP dependent)
  - Reporting fields required for compliance (donation amounts tracked)
  - APIs: additive changes only, 90-day deprecation

</details>
