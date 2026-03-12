---
title: "Guide: Product Content"
sidebar_position: 4
---

# Guide: Product Content

Product Content is where you bring individual menu items to life — assigning images, titles, and display details to products that have already been created in Byte Admin Portal.

:::info
Products **must exist in Byte Admin Portal first** before they can be configured in Contentful. Products without Contentful content are **hidden from the menu**.
:::

---

## Where You See It in the Front-End

**Menu product cards** — Each item displayed in a category grid (name, image, and price tile) is powered by Contentful product content.

**Product detail page** — When a customer taps or clicks a product, the detail view shows the product image, title, and description sourced from Contentful.

**Variant selection** (for pizza markets) — Pizza crust, size, and topping options each have their own content entries in Contentful, which power the modifier selection UI.

---

## What to Configure in Contentful

### Publishing a Product with Content

1. Click **Add Entry** (the blue button on the right side of the screen)
2. From the drop-down list of content types, select **Product**
3. Click **Select from Yum** to choose an already-created product
   - Products show a status badge: **PUBLISHED** (green), **DRAFT** (yellow), or **NEW** (purple)
   - Selecting a PUBLISHED product will prompt you to confirm before overwriting existing content
4. Populate the **Title** and **Display Order**
5. Click **+ Add Media** to assign images — use **Add Existing Media** for previously uploaded assets, or **Add New Media** to upload fresh images
6. Click the green **Publish** button — or use the dropdown arrow to schedule publishing at a later time

### Publishing Pizza Crust Content

1. Add Entry → select **Pizza Crust**
2. Click the **Option Value Code** field to select the crust variant
3. Populate the title and assign images via **+ Add Media**
4. Publish

### Publishing Pizza Size Content

1. Add Entry → select **Pizza Size**
2. Click the **Option Value Code** field to select the size
3. Populate the title and assign images
4. Publish

### Publishing Pizza Topping Content

1. Add Entry → select **Topping**
2. Click the **Modifier Internal Name** field to select the topping
3. Populate the title and assign images
4. Publish

:::note
Contentful will not allow you to create a duplicate entry for a product, crust, size, or topping that already has published content. Edit the existing entry instead.
:::

---

## Use Cases

**New menu item launch** — When a product is created in Byte Admin Portal, create its Contentful entry to bring it live on the menu with imagery and a display name.

**Updating product photography** — Refresh images on existing products during brand refreshes or seasonal campaigns without touching any data in Byte Admin Portal.

**Localising product names** — Enter market-specific titles per locale (e.g. "Zinger Burger" vs "Zinger Sandwich" depending on the market).

**Scheduling a product reveal** — Use the scheduled publish dropdown to queue a new product to go live at a specific date and time, aligned with a campaign launch.

**Managing pizza variants** — For pizza markets, configure each crust and size option with its own image so customers see an accurate visual when customising their order.
