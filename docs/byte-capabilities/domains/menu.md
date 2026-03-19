---
title: Menu Browse & PDP
description: How the Atlas platform shows customers the localised menu, item details, modifiers, and nutritional information.
sidebar_label: Menu Browse & PDP
---

# Menu Browse & PDP

**What it does:** Shows customers the localised menu for their market and selected store, with full item details, modifiers, and nutritional information.

**Why it matters:** The menu is the top of the funnel — every order starts here. Menu accuracy, speed, and relevance directly drive add-to-cart rates and average order value.

:::caution Byte Helium does not own the menu
Byte Helium renders the menu it receives from the Menu Service. Prices, item descriptions, availability, and modifiers are all managed in **Byte Menu** (the menu authoring tool) and assigned via the **Byte Portal**. If something is wrong with the menu, the fix is not in Byte Helium.
:::

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **View Localised Menu (PLP)** | Customers need to see what's available | Displays the product listing page with categories and items for the selected store/channel | Byte Helium calls Menu Service with store context → gets category/item list → renders | Menu Service, Context service | Localisation must be completed first | Pricing is market-specific; Byte Helium does NOT own pricing; PLP p95 ≤200ms | Menu impression rate, scroll depth |
| **View Item Detail (PDP)** | Customer needs full item info before ordering | Shows item name, description, image, price, modifiers, and nutritional info | Byte Helium calls Menu Service with item ID + context → gets full item detail | Menu Service | PLP viewed; item in menu | Options filtered by context (e.g., delivery-only items hidden for collection) | PDP view rate, modifier selection rate |
| **Modify Selected Menu Item** | Customer wants to customise their order | Lets customer choose size, add-ons, remove ingredients, and adjust quantity | Modifier options fetched from Menu Service; selections captured before add-to-cart | Menu Service | Item must have modifiers configured in Menu | Not all items are customisable; modifier config is a Byte Menu / market responsibility | Modifier attachment rate |
| **Nutrition & Allergens Guide** | Customers need dietary information | Shows full nutritional breakdown and allergen information for menu items | Nutrition data fetched from dedicated Nutrition index/detail endpoints | Nutrition service (via Menu) | Menu must include nutrition data (configured in Byte Menu) | Data must be authored and maintained in Byte Menu — not a Byte Helium responsibility | Guide engagement rate |
| **FAQ** | Customers have questions that aren't orders | Renders a searchable FAQ page | CMS API returns FAQ entries for the market locale; search is client-side | CMS service | FAQ content authored in CMS (Byte Portal) | Content quality depends on what markets publish in CMS | FAQ page visits, search queries |
| **View Job Board** | KFC uses its app/web as a recruitment channel | Lists open roles in the market | Pulls from ATS (Applicant Tracking System) via CMS proxy | ATS integration, CMS | ATS integration active for market | Job data managed externally — not in Atlas | Career page views |

---

## Technical Sources

<details>
<summary>📎 Technical Source: View Localised Menu (PLP)</summary>

- **FRD References:** FRD-HEL-008
- **TRD Domain:** Menu Browse & PDP
- **Key Interfaces / APIs:** PLP Menu Feed (App → Menu), PDP Item Detail (App → Menu)
- **Data Contracts:** MenuItem (id, name, price, options[] — market-specific pricing)
- **Source Summary:**
  - PLP filtered by store context and channel (delivery vs. collection items differ)
  - Soft-refresh triggered on cache age detection; no hard reload
  - PLP p95: ≤200ms; cache telemetry monitored
  - Pricing is market-specific and owned by Commerce Backend — Byte Helium renders only
  - Menu APIs: SemVer backward compatible minor, 120-day deprecation (markets need stage rollout time)

</details>

---

:::tip See it in the wiki
- How customers browse the menu front-end → [Find Products](/docs/frontend/customer-journey/find-products/)
- Managing menu items and modifiers in Byte Portal → [Admin Portal Guide: Products](/docs/admin-portal-guide/products/) and [Menus](/docs/admin-portal-guide/menus/)
:::
