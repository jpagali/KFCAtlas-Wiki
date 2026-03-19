---
title: Content & Legal
description: How the Atlas platform renders brand pages, FAQs, legal documents, and cookie consent for each market and locale.
sidebar_label: Content & Legal
---

# Content & Legal

**What it does:** Renders all non-transactional content — brand pages, FAQs, legal documents, and cookie consent — for each market and locale.

**Why it matters:** Legal compliance and brand trust depend on accurate, up-to-date, localised content. Helium renders what the Portal and CMS provide — content quality is a market responsibility.

:::caution Helium renders; markets own the content
Every page in this domain is managed outside Helium. Legal documents are authored by the Legal team in the Legal CMS. Brand pages and FAQs are authored in the CMS (accessible via Portal). Cookie categories are configured in the CMP. If content is wrong or missing, the fix is in the source system — not in Helium.
:::

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **Homepage** | Customer needs a landing experience | Renders the localised homepage with featured items, promos, and content | CMS, Localisation, and Promo contexts combined; spotlight sections driven by CMS config | CMS, Context service, Promo Engine | Localisation complete | Homepage layout and content managed in Portal/CMS — not Helium | Homepage engagement, bounce rate |
| **About / Our History** | Brand storytelling pages | Renders static brand pages | CMS page fetched by slug and locale; CDN-cached | CMS / CDN | Content published in CMS | Content changes require CMS publish — not a code change | Page views |
| **Nutrition & Allergens Guide** | Regulatory requirement and customer expectation | Shows nutritional values and allergen info for all menu items | Nutrition index/detail fetched per item or category | Nutrition service | Nutrition data authored in Byte Menu | Data accuracy is a Byte Menu / market responsibility | Guide engagement |
| **Terms & Conditions** | Legal obligation to display T&Cs | Renders the current T&Cs for the customer's locale | Legal CMS provides versioned documents by locale and effective date | Legal CMS | T&Cs published for market locale | Helium renders only — Legal team manages content | T&C acceptance rate |
| **Privacy Policy** | GDPR and local data law requirement | Renders the current Privacy Policy for the locale | Legal CMS versioned document | Legal CMS | Privacy Policy published | Same as T&Cs — content is Legal's responsibility | Policy view rate |
| **Cookie Settings** | Cookie law compliance (EU and others) | Shows cookie categories; lets customer update consent | CMP widget integrated; preferences stored with timestamp and source | CMP | CMP configured for market | Categories and legal text must be set up in CMP — not in Helium | Consent acceptance rate |

---

## Technical Sources

<details>
<summary>📎 Technical Source: Legal Pages / CMS / Cookie Consent</summary>

- **FRD References:** FRD-HEL-070, FRD-HEL-074, FRD-HEL-075, FRD-HEL-076, FRD-HEL-071, FRD-HEL-072
- **TRD Domain:** Content & Legal Pages
- **Key Interfaces / APIs:** CMS Page List/Render, FAQ List/Search, Legal Docs List/Render, CMP Get/Update
- **Data Contracts:** Page (id, title, slug, locale, contentUrl); LegalDoc (type, version, effectiveDate); Consent (category, status, ts)
- **Source Summary:**
  - CMS render p95: ≤150ms (CDN-cached)
  - CMS failure (5xx): fallback to cached version; CDN metrics monitored
  - Legal docs versioned by effective date per locale; Helium renders current version
  - Consent preferences stored with source and timestamp for audit
  - CMS/Legal APIs: additive, 180-day deprecation (longest after Payments)

</details>

---

:::tip See it in the wiki
- How customers access brand content in the front-end → [Learn About KFC](/docs/frontend/customer-journey/learn-about-kfc/)
- Managing homepage and CMS content → [Contentful Guide](/docs/frontend/contentful/)
:::
