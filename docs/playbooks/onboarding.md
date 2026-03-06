---
title: Onboarding a New Restaurant
sidebar_position: 1
---

# Onboarding a New Restaurant

This playbook walks through everything needed to bring a new KFC restaurant live on the Atlas Platform — from initial setup through to first order. Follow the steps in order.

**Estimated time:** 2–4 hours (spread across 2–3 days for approvals)
**Who does this:** Regional / BMU Admin, with input from the franchisee

---

## Phase 1 — Platform Setup (Regional Admin)

### Step 1: Create the restaurant in the Admin Portal

**Admin Portal → Restaurants → Add New Restaurant**

Fill in:
- Restaurant name (as it should appear to customers)
- Full address (street, suburb/city, postcode)
- Phone number
- Market assignment (Japan or Australia)
- Franchise group (if applicable)

Save. The system generates a **Restaurant ID** — note this down.

### Step 2: Set GPS coordinates

**Restaurants → [New Restaurant] → Profile → Location**

Search for the address and confirm the pin is placed correctly on the map. This is critical — it controls delivery zone eligibility and restaurant discovery in the customer app.

:::warning
Coordinates can only be set by Regional Admins. Once saved, they are locked. Double-check the pin placement before saving.
:::

### Step 3: Configure operating hours

**Restaurants → [Restaurant] → Profile → Operating Hours**

Set hours for each day of the week. If Delivery and Dine-in run different hours, configure each channel separately under the **Channel Settings** tab.

### Step 4: Enable order channels

**Restaurants → [Restaurant] → Channel Settings**

Enable the relevant channels (Dine-in / Delivery / Takeaway). For Delivery:
- Set the delivery radius (km)
- Set the minimum order value (if applicable)

---

## Phase 2 — Menu Setup

### Step 5: Assign the base menu

**Restaurants → [Restaurant] → Menu → Assign Menu Template**

Select the market base menu template (Japan Standard or Australia Standard). This gives you the full product catalogue as a starting point.

### Step 6: Deactivate unavailable items

Review the menu and deactivate any items not available at this location. Do this before go-live to avoid customers ordering items you cannot fulfil.

### Step 7: Verify pricing

Spot-check key items against the approved price list for your market. Prices are inherited from the market template but can be adjusted per restaurant.

---

## Phase 3 — Access Setup

### Step 8: Create the franchisee admin account

**Settings → Users → Invite User**

Invite the franchisee using their email address. Assign the **Franchisee Admin** role and link to the new restaurant.

### Step 9: Franchisee confirms access

Ask the franchisee to log in, review their profile, and confirm all details are correct. This is a formal sign-off step before go-live.

---

## Phase 4 — Go-Live

### Step 10: Test order

Place a test order through the customer app (using a test account) to confirm the restaurant appears, the menu loads correctly, and checkout completes.

### Step 11: Set the restaurant to live

**Restaurants → [Restaurant] → Profile → Status → Set to Live**

The restaurant will appear in the customer app within 15 minutes.

### Step 12: Notify the team

Send the franchisee the portal URL and their login details. Share the [Front-end Guide](/docs/frontend/overview) and [Admin Portal Guide](/docs/admin/overview) links.

---

## Onboarding Checklist

| Task | Done? |
|---|---|
| Restaurant created in portal | ☐ |
| GPS coordinates confirmed | ☐ |
| Operating hours set | ☐ |
| Channels enabled and configured | ☐ |
| Menu template assigned | ☐ |
| Unavailable items deactivated | ☐ |
| Pricing verified | ☐ |
| Franchisee admin account created | ☐ |
| Franchisee confirmed access | ☐ |
| Test order completed | ☐ |
| Restaurant set to live | ☐ |
| Franchisee notified with portal links | ☐ |
