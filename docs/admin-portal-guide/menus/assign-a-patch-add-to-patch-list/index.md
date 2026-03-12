---
title: "Assign a Patch (Add to Patch List)"
sidebar_label: "Assign a Patch (Add to Patch List)"
---

# Assign a Patch (Add to Patch List)

## What this guide covers

Adds a patch to a store's active patch list without removing existing patches. Patches are applied in order, with each patch layering its overrides on top of the base menu and previous patches.

## Steps

**Step 1:** Navigate to the **Menus** section using the left-hand navigation menu.

**Step 2:** Click on the **Patches** tab to view all patches.

![Step 2](./img/step-2.png)

**Step 3:** Click the **Create New** button to begin a new patch assignment.

![Step 3](./img/step-3.png)

**Step 4:** Select **Add Patch to List** to add a patch to existing patch lists.

![Step 4](./img/step-4.png)

**Step 5:** Select the **Patch** you want to assign from the dropdown.

| Field | What to enter | Notes |
|-------|--------------|-------|
| **Patch** * | Select from the list of available patches | Choose the patch with the overrides you want to apply. |

![Step 5](./img/step-5.png)

**Step 6:** Choose the **Patch Position** in the list. Patches are applied in order, so position matters if multiple patches target the same items.

| Field | What to enter | Notes |
|-------|--------------|-------|
| **Position** * | Select where in the patch list to add this patch | "First" applies this patch before others, "Last" applies it after. Choose based on the priority of your overrides. |

![Step 6](./img/step-6.png)

**Step 7:** Select the **Channel** where this patch assignment applies.

| Field | What to enter | Notes |
|-------|--------------|-------|
| **Channel** * | Select the ordering channel | e.g., "Web", "Mobile", "Delivery Platform". The patch will only apply on the selected channel. |

**Step 8:** Select the **Stores** that will receive this patch.

| Field | What to enter | Notes |
|-------|--------------|-------|
| **Stores** * | Select one or more stores | Use search to find stores, or select entire store groups. Only selected stores will get this patch. |

**Step 9:** Review your selections on the **Summary** page, then click **Save** to add the patch to the selected stores' patch lists.

![Step 7](./img/step-7.png)

:::note
The patch is now added to the store's active patch list. If the store had other patches, this new patch is added in addition to them based on the position you selected.
:::

## Related guides

- [Assign a Patch (Replace Existing List)](/docs/admin-portal-guide/menus/assign-a-patch-replace-existing-list/) — Replace a store's entire patch list
- [Edit a Patch](/docs/admin-portal-guide/menus/edit-a-patch/) — Update a patch before assigning it
- [Create a Patch](/docs/admin-portal-guide/menus/create-a-patch/) — Create a new patch to assign

---

*Part of the [Admin Portal Guide](/docs/admin-portal-guide) · Section: Menus*