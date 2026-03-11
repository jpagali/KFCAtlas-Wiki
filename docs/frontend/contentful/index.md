---
title: Contentful Overview
sidebar_position: 1
---

# Contentful

Contentful is the content management system (CMS) that powers the editorial layer of the KFC Atlas web experience. It gives market teams — content creators, menu authors, and translators — the ability to manage front-end content without requiring a product deployment or engineering support.

Think of it as the control panel for what customers *see* across KFC digital touchpoints: what products are shown, how promotions appear, what copy is displayed, and how pages are structured — on both the **web** and the **mobile app**.

## Who Uses It

| Role | What They Do in Contentful |
|---|---|
| **Content Creator** | Publishes and updates homepage banners, promotional content, and page copy |
| **Menu Author** | Manages product listings, categories, bundles, and deals |
| **Translator** | Manages localised content for each supported language in a market |

## What Can Be Managed

| Content Area | Description |
|---|---|
| **Homepage** | Hero banners, featured products, campaign tiles |
| **Categories** | Menu category structure, labels, and imagery |
| **Products** | Individual product details, descriptions, and pricing display |
| **Bundles & Deals** | Meal deals, combo offers, and bundle configuration |
| **Promotions** | Time-limited promo banners and campaign content |
| **Cross-Sell in Cart** | Recommended products shown during checkout |
| **Footer** | Navigation links, legal text, and social icons |
| **SEO** | Page titles, meta descriptions, and canonical URLs |
| **Translations** | Multi-language content for all of the above |

## How Publishing Works

Contentful uses a structured publishing workflow:

1. Content is **drafted** by a content creator or menu author
2. It is **reviewed** and approved internally
3. It is **published via Launch** — Contentful's scheduled publishing tool — which coordinates when content goes live across multiple entries simultaneously

This allows markets to prepare campaigns in advance and publish them at a precise time, without needing to be online at the moment of go-live.

## Platform Support

Contentful-managed content surfaces across both Web and Mobile App. The same content entries — product descriptions, promotional copy, banners, and category labels — are consumed by both platforms via the Atlas API layer.

| Platform | Support |
|---|---|
| **Web** | ✅ Full support — all content types apply |
| **iOS / Android** | ✅ Supported — content is delivered to the app via the same API; some layout-specific fields (e.g. banner aspect ratios) may differ per platform |

> **Note:** Certain app-only configurations (such as push notification copy or app store metadata) are managed outside of Contentful. This guide covers content that appears within the KFC app experience itself.
