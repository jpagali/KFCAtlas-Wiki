---
title: "Guide: Bundles & Deals"
sidebar_position: 5
---

# Guide: Bundles & Deals

Bundles are combo meals — a fixed set of products sold together. Deals are promotional groupings that combine products or bundles at a special price, often with a target link for deeper navigation. Both require content configuration in Contentful after being set up in Yum Admin.

:::info
Bundles and Deals **must be created in Yum Admin first** before they can be configured in Contentful. Items without content are **hidden from the menu**.
:::

---

## Where You See It in the Front-End

**Bundle cards** — Appear in the menu alongside individual products, showing a combo image, title, and price. Customers select a bundle and customise the included items.

**Deal cards** — Surface on the menu or on a dedicated Deals page. A Deal typically groups one or more Products or Bundles under promotional framing, and can deep-link to a specific page or menu section via a Target URI.

Both content types can be featured on the **Homepage** as promoted items when configured.

---

## What to Configure in Contentful

### Publishing a Bundle with Content

1. Click **Add Entry** → select **Bundle**
2. Click **Select from Yum** beneath the Bundle Code field to choose an already-created bundle
   - Contentful will not allow a second entry for a bundle that already has content — edit the existing entry instead
3. Click **+ Add Media** to add bundle images
4. Click the green **Publish** button — or use the dropdown arrow to schedule for a future date

### Publishing a Deal with Content

1. Click **Add Entry** → select **Deal**
2. Populate the required fields:
   - **Title in English** and **Title in Spanish** (or relevant second locale)
   - **Item(s)** — add existing Products or Bundles via **Add Existing Content**
   - **Target URI** — the path the deal card will link to when tapped
3. Click **+ Add Media** to assign deal images
4. You can click through to any linked Product or Bundle from within the Deal entry to make edits
5. Click **Publish** — or schedule via the dropdown

---

## Use Cases

**New combo meal** — When a bundle is created in Yum Admin, create its Contentful entry with imagery and a display title so it appears on the menu with the correct visual treatment.

**Promotional deal page** — Create a Deal entry that groups several products under a campaign name (e.g. "Family Feast") and links to a dedicated deals landing page.

**Scheduling a limited-time offer** — Use scheduled publishing to set a bundle or deal to go live at the start of a promotional window, and another publish to remove it at the end.

**Cross-market deals** — Different markets can configure separate Deal entries with localised titles and images for the same underlying product offering.
