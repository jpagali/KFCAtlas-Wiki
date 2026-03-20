---
title: Defining Dayparts
sidebar_label: Defining Dayparts
---

# Defining Dayparts

## Summary

Dayparts are configured at the top-level of an organization, at the same level as menus, products, and bundles. Once defined, these dayparts are immediately available for use at all stores within an organization.

Each daypart consists of a name, a unique daypart code, and a list of supported occasions, each with their own list of timeframes. For convenience when initially creating a daypart, a single set of timeframes can be applied to all supported occasions. Once a daypart has been created, occasion timeframes can be customized individually.

**Screenshot placeholder:** Put screenshot showing the defining dayparts hierarchy diagram with organization, dayparts, occasions, and timeframes here.

## Defining dayparts in Byte Portal

**Step 1:** Navigate to the **Menus** section using the left-hand navigation menu.

**Step 2:** Click the **Dayparts** tab to view all existing dayparts.

**Screenshot placeholder:** Put screenshot showing the Menus page with the Dayparts tab selected and the Create New Daypart button visible here.

**Step 3:** Click **Create New Daypart**.

**Step 4:** Provide a **name** and a unique **daypart code**.

| Field | What to enter | Notes |
|-------|--------------|-------|
| **Name** | A human-readable label for the daypart that’s visible to both data managers and end-users | For example, `Breakfast`. |
| **Daypart code** | A brand-provided, unique identifier intended for external systems to consume | This code will be provided in the published menu. |

**Screenshot placeholder:** Put screenshot showing the Create New Daypart drawer with Daypart Name and Daypart Code fields here.

**Step 5:** Click **Add time frame**.

**Step 6:** Select the **occasions** that this daypart should support. If the daypart should support all occasions, click **Select All** within the dropdown.

**Step 7:** Add the following details: **days of the week** (required), **start time** and **end time** (required), **start date** and **end date** (optional).

**Screenshot placeholder:** Put screenshot showing the Add Time Frame drawer with occasions, days of the week, start time, end time, start date, and end date fields here.

**Step 8:** Click **Create time frame**.

**Step 9:** All selected occasions will have the same timeframe(s) by default. Timeframes can be edited for individual occasions by clicking on the occasion name.

**Screenshot placeholder:** Put screenshot showing the created timeframes grouped by occasion inside the daypart editor here.

**Step 10:** Click **Save**.

The newly created daypart will now appear in the table in the **Dayparts** tab.

**Screenshot placeholder:** Put screenshot showing the Dayparts table with the newly created daypart row visible here.

## Editing dayparts

**Step 1:** Starting from the dashboard, click **Menus** in the sidebar.

**Step 2:** Click the **Dayparts** tab.

**Step 3:** On the daypart that should be edited, click the **kebab icon** in the rightmost cell of the table row and click **Edit**.

**Screenshot placeholder:** Put screenshot showing the Dayparts table row action menu with the Edit option selected here.

## Deleting dayparts

**Step 1:** Starting from the dashboard, click **Menus** in the sidebar.

**Step 2:** Click the **Dayparts** tab.

**Step 3:** On the daypart that should be edited, click the **kebab icon** in the rightmost cell of the table row and click **Delete**.

**Screenshot placeholder:** Put screenshot showing the Dayparts table row action menu with the Delete option selected here.

All configurations associated with this daypart, including prices and availability settings, will be removed.

:::tip
When first creating a daypart, apply a shared timeframe to all supported occasions if they behave the same way. You can always refine occasion-specific timeframes later.
:::

:::note
Dayparts are created at the **org level**, but their hours and supported occasions can be customized at the **store level**.
:::

## Related guides

- [Dayparts Overview](/docs/admin-portal-guide/dayparts/) — Learn how dayparts are used across Byte
- [Customizing Dayparts at the Store-level](/docs/admin-portal-guide/dayparts/customizing-dayparts-at-the-store-level/) — Adjust org-level dayparts for a store
- [Setting Daypart Prices and Availability](/docs/admin-portal-guide/dayparts/setting-daypart-prices-and-availability/) — Apply pricing and availability rules to entities

---

*Part of the [Admin Portal Guide](/docs/admin-portal-guide) · Section: Dayparts*
