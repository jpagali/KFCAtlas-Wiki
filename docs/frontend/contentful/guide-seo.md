---
title: "Guide: SEO Tags & Management"
sidebar_position: 9
---

# Guide: SEO Tags & Management

SEO fields in Contentful let markets control how KFC pages appear in search engine results — including page titles in browser tabs, descriptions in Google search snippets, and whether a page should be indexed at all.

---

## Where You See It in the Front-End

SEO fields don't appear visibly to customers on the page itself — they surface in two places:

**Browser tab** — The Meta Title is shown as the tab label when a customer has the page open in their browser.

**Google search results** — The Meta Title and Meta Description appear in Google's search snippet when a KFC page ranks for a query. A well-written description increases click-through from search results.

**Crawlability toggle** — Controls whether Google is permitted to index the page at all. When set to **Yes**, Google can discover and rank the page. Set to **No** to hide the page from search results (useful for pages not yet ready for public traffic).

---

## What to Configure in Contentful

SEO fields are embedded within several content types — you don't configure SEO in a separate standalone section. Look for the SEO block within:

- **Information Page** Content Type
- **Home Page** Content Type
- **Category** Content Type
- **Product Landing Page** *(on roadmap)*
- **Product** *(on roadmap)*

Within any of these entries, locate the **SEO** section and configure:

**Meta Title** — The title shown in the browser tab and as the heading in Google search results. Keep it concise (50–60 characters recommended) and include the key term for the page.

**Meta Description** — A short summary shown below the title in Google search results. Aim for 150–160 characters. Make it descriptive and compelling to encourage clicks.

**Crawlable toggle** — Set to **Yes** (default) to allow Google to index and rank the page. Set to **No** to prevent indexing.

All SEO fields are **locale-aware** — you can set different Meta Titles and Descriptions per language, which is important for markets operating in multiple languages.

---

## Use Cases

**Category page SEO** — Set a keyword-rich Meta Title and Description for each menu category (e.g. "KFC Chicken Burgers — Order Online") to improve organic search visibility.

**Homepage optimisation** — Craft a compelling Meta Description for the homepage that summarises the KFC experience and drives click-through from branded search queries.

**Hiding staging content** — When preparing a page for a future campaign, set the Crawlable toggle to **No** until the page is ready to go public, then switch it to **Yes** on launch day.

**Multi-language SEO** — Ensure each locale has its own Meta Title and Description so non-English markets appear correctly in local language search results.

**Information pages** — FAQs, about pages, and nutritional content pages can all have tailored SEO copy to capture long-tail search traffic.
