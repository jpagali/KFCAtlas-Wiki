---
title: Engagement & Messaging
description: How the Atlas platform delivers in-app messages and manages push notification preferences.
sidebar_label: Engagement & Messaging
---

# Engagement & Messaging

**What it does:** Delivers in-app messages and manages push notification preferences, connecting CRM campaigns to the customer's in-app experience.

**Why it matters:** In-app messaging and push notifications are the primary retention channel between orders. Poor preference management erodes trust and causes opt-outs.

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **In-App Message Inbox** | Brand wants to communicate with customers inside the app | Shows personalised messages, promotions, and updates in a feed | Engagement platform provides paginated message feed; messages can deep-link to app sections | Engagement platform, CRM | Signed in for personalised; anonymous for global | Feed freshness ≤60s; deep-link targets must exist and be active | Inbox open rate, message click rate, deep link conversion |
| **Push Notification Preferences** | Customer controls what notifications they receive | Lets customer toggle push notifications on or off per channel | Push prefs read/written to CRM; device token synced on change | CRM / Push provider, Push device token | Signed in; push permission granted | Device-level and user-level scope; changes require CRM sync | Push opt-in rate, opt-out rate |
| **Email Marketing Preferences** | Customer controls email marketing | Subscribe or unsubscribe from email marketing | CRM Prefs API updated; audit trail recorded | CRM | Signed in | Audit trail mandatory; CMP sync if consent-linked | Email opt-in rate |

---

## Technical Sources

<details>
<summary>📎 Technical Source: In-App Inbox / Push Preferences</summary>

- **FRD References:** FRD-HEL-051, FRD-HEL-065, FRD-HEL-066
- **TRD Domain:** Engagement & Messaging
- **Key Interfaces / APIs:** In-App Feed (paginated), Message Acknowledge, Push Prefs Get/Update
- **Data Contracts:** InAppMessage (id, title, body, deeplink, expiry); PushPrefs (enabled, ts, source)
- **Source Summary:**
  - In-app feed freshness target: ≤60s (real-time or near-real-time)
  - Preference audit trail required (CRM compliance)
  - Stale feed (TTL exceeded): pull-to-refresh triggered
  - Push token synced on preference update
  - Engagement APIs: additive changes, 120-day deprecation

</details>
