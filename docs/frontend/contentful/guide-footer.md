---
title: "Guide: Footer Content"
sidebar_position: 8
---

# Guide: Footer Content

The **Global Footer** appears at the bottom of every page on the KFC website. Contentful lets markets configure the footer's navigation sections, links, and linked assets (including PDFs) without requiring engineering support.

---

## Where You See It in the Front-End

The footer is divided into **navigation sections**, each containing a group of links. Common sections across markets include:

| Section | Typical contents |
|---------|-----------------|
| **Menu** | Links to menu category pages (e.g., Chicken, Sides, Drinks) |
| **Policies / Políticas** | Privacy Policy, Terms of Use |
| **Delivery Policies** | Delivery terms, FAQs |
| **FAQ** | Frequently asked questions |
| **Nutritional Content** | Nutritional information pages or downloadable PDFs |
| **Help and Service / Ayuda y Servicio** | Customer support contact links |

Each link in a section can point to an internal page path (within the KFC site) or an external URL.

---

## Content Types Overview

Before editing, it helps to understand the three Contentful content types involved:

| Content Type | What it is | Where it lives |
|---|---|---|
| **Global Footer** | The top-level container — holds all sections | Contentful → Content → Global Footer |
| **Footer Navigation Section** | A named group of links (e.g., "Policies") | Created inside the Global Footer |
| **Footer Link** | A single clickable link with text and destination | Created inside a Footer Navigation Section |

---

## Adding a New Section to the Footer

**Step 1:** In Contentful, navigate to **Content** and search for **Global Footer**. Open the entry.

**Step 2:** Inside the Global Footer entry, click **Add Content** to add a new section.

**Step 3:** Select **Footer Navigation Section** from the content options.

**Step 4:** Fill in the section details:

| Field | What to enter | Notes |
|-------|--------------|-------|
| **Section Name (English)** | The label for this group of links | e.g., "Policies", "FAQ", "Help" |
| **Section Name (Spanish)** | Localised label, if your market uses Spanish | e.g., "Políticas". Leave blank if not applicable. |

**Step 5:** Once the section is saved, you can begin adding Footer Links inside it (see [Creating a Footer Link](#creating-a-footer-link) below).

:::note
Section order in the footer matches the order of sections in the Global Footer entry. Drag sections up or down to reorder them.
:::

---

## Creating a Footer Link

**Step 1:** Inside a **Footer Navigation Section**, click **Add Content** → **New Content** → **Footer Link**.

**Step 2:** Fill in the Footer Link fields:

| Field | What to enter | Notes |
|-------|--------------|-------|
| **Link Text** | The visible label displayed in the footer | e.g., "Privacy Policy", "Allergen Information" |
| **Link** | Where clicking goes — see the **Link entry** fields below | Required |
| **Image** | An optional icon or logo to accompany the link | Consult your developer before using — not all footer layouts support images. |

**Step 3:** Inside the **Link** entry, fill in:

| Field | What to enter | Notes |
|-------|--------------|-------|
| **Identifier** | An internal reference name (not shown to customers) | e.g., `footer-privacy-link`. Helps editors find the entry later. |
| **Link Text** | The text label for this link | Should match the Footer Link's **Link Text** field |
| **Internal Path** | Path to a page within the KFC website | e.g., `/privacy`, `/faq`. Use this for pages hosted on the KFC site. |
| **URL** | Full external URL | e.g., `https://partner.com/delivery-terms`. Use this for third-party pages. |

:::caution
Use either **Internal Path** or **URL** — not both. If both are filled in, consult your developer to confirm which takes priority in your market's implementation.
:::

**Step 4:** Publish in this order to ensure changes go live correctly:

1. Publish the **Link** entry
2. Publish the **Footer Link** entry
3. Publish the **Footer Navigation Section**
4. **Re-publish the Global Footer** — this final step is required for changes to appear on the live site.

:::caution
Forgetting to re-publish the **Global Footer** is the most common reason footer changes don't appear on the live site. Always complete all four publish steps.
:::

---

## Adding a Linked PDF to the Footer

Use this when you need to link to a downloadable document (e.g., nutritional information, allergen tables, or terms PDFs) from the footer.

**Step 1:** In Contentful, go to **Media** and click **Add New Asset** → **Single Asset**.

**Step 2:** Give the asset a descriptive title (e.g., "Nutritional Information PDF – AU 2024") and upload the PDF file.

**Step 3:** Once uploaded, click the **download icon** next to the asset to copy the direct URL to the file.

**Step 4:** Use this URL as the **URL** field in a Footer Link entry (see [Creating a Footer Link](#creating-a-footer-link) above).

:::tip
Name your PDF assets clearly and include the market and date in the title — this makes it much easier to find and replace them when they're updated.
:::

---

## Use Cases

**New policy page** — A new Privacy Policy or Terms of Service page has been published on the KFC site. Add it as a Footer Link in the Policies section using its internal path (e.g., `/privacy-policy`), so customers can always find the latest version.

**Nutritional PDF** — Upload an updated nutritional information PDF to Contentful Media, copy its direct URL, and link it from the Nutritional Content section. No engineering work needed.

**Regional footer structure** — Markets can configure different section names and link sets to match local legal requirements, language preferences, and navigation needs. Each market manages its own Global Footer entry independently.

**External campaign landing page** — Temporarily add a footer link pointing to a campaign microsite or external landing page during a promotional period. Remove or update the link when the campaign ends.

---

## Related Guides

- [Guide: SEO](/docs/frontend/contentful/guide-seo) — Manage page titles and meta descriptions
- [Contentful Overview](/docs/frontend/contentful/) — How Contentful works across the platform
- [Front-end Overview](/docs/frontend/overview) — The broader front-end platform context
