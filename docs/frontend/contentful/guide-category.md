---
title: "Guide: Category Content"
sidebar_position: 3
---

# Guide: Category Content

Categories are how the KFC menu is organised — grouping products into sections like Chicken, Sides, Drinks, or Desserts. Contentful lets you control the **sequence** of products within a category and manage **subcategories** for more granular menu structure.

:::info
Categories themselves are created and managed in **Yum Admin**. Contentful is where you control sequencing and subcategory structure. Products that haven't been configured in Contentful are **hidden from the menu**.
:::

---

## Where You See It in the Front-End

**Menu navigation** — Categories appear as top-level navigation items in the menu (e.g. "Burgers", "Sides", "Drinks"). Clicking a category takes the customer to a product grid.

**Subcategories** — Within a category page, subcategories act as tabs or filter groups (e.g. within "Chicken" you might have "Original Recipe", "Zinger", "Wraps"). Products are nested within each subcategory.

**Product sequence** — The order in which products appear within a category or subcategory is controlled in Contentful. If no sequence is set in Contentful, the order falls back to whatever is defined in Yum Admin.

---

## What to Configure in Contentful

### Sequencing Products in a Category

1. Once the category has been created in Yum Admin with products assigned, navigate to the **Category** entry in Contentful
2. Scroll down to the **Menu Items** section
3. Click **Add Existing Content** and select the products or bundles you want to include — click **Select Entries** to confirm
4. Drag the right-hand handle of each entry to reorder them
5. Click **Publish Changes**

### Creating a Subcategory

1. Click **Add Entry** (the blue button on the right)
2. Search for and select **Subcategory**
3. Fill in all required fields (name, display labels, etc.)
4. Click **Publish**

### Adding a Subcategory to a Category

1. Navigate to the relevant Category entry
2. Click **Content**, then **Add Entry** and search for **Category**
3. Select the desired category code, fill in the required fields, and add the existing subcategory as a linked entry
4. Click **Publish**

### Sequencing Subcategories

1. Navigate to the desired Category entry
2. Click the three-dot handle on the right side of each subcategory entry
3. Drag and drop to the desired position
4. Click **Publish Changes**

### Sequencing Products Within a Subcategory

1. Navigate to the category that contains the subcategory
2. Click on the desired subcategory
3. Use the three-dot handle to drag and drop products into order
4. Click **Publish**

---

## Use Cases

**New product launch** — When a new item is added in Yum Admin, add and position it in the correct Contentful category so it appears in the right place on the menu immediately.

**Seasonal menu restructure** — Reorder products or promote a subcategory (e.g. move "Holiday Specials" to the top of the menu) for a promotional period without a code deployment.

**Market-specific sequencing** — Different markets may want different orderings for the same category. Each market's Contentful space can be configured independently.

**Subcategory introduction** — Add a new product group (e.g. "Plant-Based" or "Shareboxes") as a subcategory under an existing category without engineering support.
