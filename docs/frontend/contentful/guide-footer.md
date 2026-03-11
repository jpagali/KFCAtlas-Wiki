---
title: "Guide: Footer Content"
sidebar_position: 8
---

# Guide: Footer Content

The Global Footer appears at the bottom of every page on the KFC website. Contentful lets markets configure the footer's navigation sections, links, and linked assets (including PDFs) — without engineering support.

---

## Where You See It in the Front-End

The footer is divided into **navigation sections**, each containing a group of links. Typical sections include:

- **Menu** — links to menu category pages
- **Policies / Políticas** — Privacy Policy, Terms of Use
- **Delivery Policies** — delivery terms and FAQs
- **FAQ** — frequently asked questions
- **Nutritional Content** — nutritional information pages or PDFs
- **Help and Service / Ayuda y Servicio** — customer support links

Each link in a section can point to an internal page path or an external URL.

---

## What to Configure in Contentful

### Navigating to the Footer Entry

1. In Contentful, locate the **Global Footer** Content Type
2. Click on the **Global Footer** entry to open the editor

### Adding a New Section to the Footer

1. Inside the Global Footer entry, click **Add Content** to add a new section
2. Select **Footer Navigation Section** from the content options
3. Enter a section name in English (and Spanish, if applicable)
4. Within the new section, click **Add Content** → **New Content** → **Footer Link** to begin adding links

### Creating a Footer Link

A footer link has the following fields:

- **Link Text** — the label displayed in the footer (e.g. "Privacy Policy")
- **Link** — where clicking it goes (internal path or external URL)
- **Image** — optional; consult your developer before using images to ensure they render correctly

To create a link:

1. Inside a Footer Link or Footer Navigation Section entry, click **New Content** → **Link**
2. Fill in:
   - **Identifier** — an internal reference name
   - **Link Text** — visible label
   - **Internal Path** — for links to pages within the KFC site (e.g. `/privacy`)
   - **URL** — for external links (e.g. a third-party delivery page)
3. Publish the Link → Publish the Footer Link → Publish the Footer Navigation Section → **Re-publish the Global Footer**

### Adding a Linked PDF to the Footer

1. Go to **Media** in Contentful and click **Add New Asset** → **Single Asset**
2. Add a title for the asset, then upload the PDF file
3. Once uploaded, click the **download icon** to get the direct URL to the file
4. Use this URL as the link in a Footer Link entry

---

## Use Cases

**New policy page** — Add a link to a newly published Privacy Policy or Terms of Service page without a code change.

**Nutritional PDF** — Upload a nutritional information PDF to Contentful Media and link it from the footer's Nutritional Content section.

**Regional footer structure** — Markets can configure different section names and link sets to match local legal requirements and navigation needs.

**External campaign landing page** — Temporarily add a footer link to a campaign microsite or external landing page for a promotional period.
