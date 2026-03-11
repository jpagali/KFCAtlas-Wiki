---
title: "Guide: Homepage Content"
sidebar_position: 2
---

# Guide: Homepage Content

The homepage is the first page customers land on when visiting the KFC website. It sets the tone for the entire experience — so keeping it visually up to date and locally relevant is key.

---

## Where You See It in the Front-End

The homepage surfaces in two main areas:

**Hero Banner** — the full-width banner at the top of the homepage. This is the most prominent real estate on the site and is typically used for campaign launches, seasonal promotions, or product spotlights. The banner is **locale-specific**, so each market can show a different image.

**Homepage Title** — the heading shown on the homepage, also editable per locale. This is often used to greet customers with market-specific copy.

:::tip Visual Merchandising Guideline
Homepage banners should have **simplified messages** — save the full deal construct for the Deals page. Focus on 1–2 core elements, limit on-image text, and ensure the hero is not distracting from the key homepage objective: localisation.
:::

The banner image is uploaded at a single resolution of **3840×606px (PNG)**. Within that, a centre 2:1 ratio defines the "safe zone":

- **Right side** — recommended for marketing text
- **Left side** — covered by the localisation widget on medium and large breakpoints
- **Grey bleed area** — crops or extends depending on screen width; use only for supporting imagery

---

## What to Configure in Contentful

### Updating the Homepage Title

1. In Contentful, search for the **Home page** Content Type
2. Open the Homepage entry
3. Locate the **Title - English** field and update the copy
4. Changes are reflected in preview instantly — double-check before publishing

### Updating the Hero Banner

1. Open the Homepage entry and scroll down to **Background Images**
2. Click the **Hero** entry for the locale you want to update — this opens a new editing window
3. You'll see **5 image size slots**: Extra Small, Small, Medium, Large, Extra Large
4. Click the image or the settings button to edit

**To replace the current asset (recommended):**

1. Click the image section to open the **Header Banner Asset** editor
2. Click **Open File Selector** to upload a new file
3. Contentful supports JPEG, PNG, WebP, and more
4. Upload or drag in your image
5. Click **Publish Changes** to make it live

Repeat this process for each locale that needs a different banner.

---

## Use Cases

**Seasonal campaign launch** — Upload a new hero banner when a major promotion (e.g. a new product launch or holiday campaign) begins. Use the Launch app to schedule it to go live at midnight without needing anyone online at that moment.

**Market localisation** — Each locale gets its own title and banner, so an Australian market can show a summer promotion while a UK market shows a winter one — simultaneously.

**A/B banner testing** — Swap banners between locales to test messaging approaches without a deployment.

**Keeping content fresh** — Regularly rotating the homepage hero improves customer engagement and ensures the site doesn't feel stale between major campaigns.
