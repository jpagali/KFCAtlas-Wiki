---
title: "Guide: Content Translations"
sidebar_position: 10
---

# Guide: Content Translations

Not every piece of text on the KFC website is tied to a specific Content Type like a product or a homepage banner. Some UI strings — widget labels, button copy, helper text, error messages — exist independently. The Translation system in Contentful lets you manage these strings and localise them per language, using **Translator Mode** to identify exactly which string you need to edit.

---

## Where You See It in the Front-End

Translations affect text that appears throughout the site — anywhere a label, heading, or UI string is displayed. Examples include:

- The location widget prompt: *"Enter your address to see local menu & deals"*
- Checkout step labels: *"Your Order", "Delivery Details"*
- Button text: *"Add to Cart", "Continue"*
- Error messages and empty state copy

If a string lives inside a known Content Type (like a product title or homepage heading), it will show an arrow indicator (→) in Translator Mode pointing you back to that content type entry. If there's no arrow, the string is managed via the Translation content type directly.

---

## What to Configure in Contentful

### Enabling Translator Mode

Translator Mode is a preview tool that overlays every piece of content on the KFC website with its Translation ID — letting you identify which Contentful entry controls that text.

1. Open an **incognito browser window**
2. Navigate to your KFC market's URL with the following parameter appended:
   ```
   https://{your_kfc_domain}/?previewContent=true
   ```
3. Toggle **Translator Mode ON** using the toggle that appears on the page
4. Hover over any piece of text — its **Translation ID** will be displayed (e.g. `locationWidget.Heading`)

To disable Translator Mode:
```
https://{your_kfc_domain}/?previewContent=false
```

### Updating a Translation

Once you have the Translation ID:

1. In Contentful, navigate to **Content** → **Translation** Content Type
2. Click **Add Entry**
3. Paste the **Translation ID** (e.g. `locationWidget.Heading`) into the ID field
4. Fill out the translation copy for **all languages / locales** your market supports
5. Click **Publish** — the updated text will appear on the live site

:::tip
If a piece of text shows an arrow indicator (→) in Translator Mode, it means it lives in a structured Content Type (e.g. Homepage, Category). Navigate to that content type entry instead to edit the text.
:::

---

## Use Cases

**Localising a widget label** — If the location search prompt needs to say something different in French vs English, use Translator Mode to find the ID and set translations for both locales.

**Fixing a UI string** — If a button or label has incorrect copy, use Translator Mode to locate it, then update the Translation entry in Contentful — no deployment required.

**Setting up a new language** — When onboarding a new locale for a market, use the Translation content type to ensure all generic UI strings are populated in the new language.

**Market-specific phrasing** — Even within the same language, different markets may need different copy (e.g. "Basket" vs "Cart", "Delivery" vs "Takeaway"). Translations let each market set its own values per locale.
