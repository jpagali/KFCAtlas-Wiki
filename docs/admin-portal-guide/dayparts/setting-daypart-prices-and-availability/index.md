---
title: Setting Daypart Prices and Availability
sidebar_label: Setting Daypart Prices and Availability
---

# Setting Daypart Prices and Availability

## Summary

Dayparts are available globally throughout Byte Portal and can be used to define daypart-specific prices and daypart-based availability.

**Screenshot placeholder:** Put screenshot showing the daypart pricing and availability concept diagram linking organization dayparts to products, variants, and bundles here.

## Pricing

Within variants and bundles, a default, all-day price can be set as well prices for each daypart. If an item is ordered in a timeframe outside of the configured dayparts, the default price will be charged. For example, let’s say you have an item with following configuration:

**Item A**

- Default price: `$10`
- Daypart prices:
  - Happy Hour: `$8`
  - Late Night: `$12`

Item A will be `$8` during the **Happy Hour** daypart, `$12` during the **Late Night** daypart, and `$10` in any timeframe not covered by **Happy Hour** and **Late Night**.

**Screenshot placeholder:** Put screenshot showing an example price matrix with default price and daypart-specific prices for a single item here.

## Availability

Within products, variants, and bundles, dayparts can be used to configure availability. By default, items are available all day. If specific dayparts are selected, the item will only be available during the selected dayparts. For example, an item that only has the **Breakfast** daypart selected will only be available during the **Breakfast** daypart. This item will not be orderable outside of the timeframes specified in the **Breakfast** daypart.

**Screenshot placeholder:** Put screenshot showing an availability configuration where only the Breakfast daypart is selected here.

## Setting daypart prices on variants

**Step 1:** Starting from the dashboard, click **Products** in the sidebar.

**Step 2:** Select a specific product.

**Step 3:** Click step 3 of the wizard - **Variants & Pricing**.

**Step 4:** On the desired variant, click the cell within the **Pricing** column.

**Screenshot placeholder:** Put screenshot showing the product wizard on Variants & Pricing with a variant pricing cell selected here.

**Step 5:** If this variant should have the same price all day, click **Fixed Pricing** and provide a price.

**Step 6:** If this variant should have different prices during specific dayparts, click **Daypart Pricing**.

**Step 7:** Provide a **default price**.

**Step 8:** Select a daypart from the dropdown and provide a price. Like all other price fields, this can be either a static value or a named price variable.

**Screenshot placeholder:** Put screenshot showing the variant pricing drawer with Daypart Pricing selected, a default price, and one or more daypart-specific prices here.

You may provide a unique price for as many or as few dayparts as you wish. There does not need to be an explicit price for each daypart. Items will be priced at the default price unless they’re ordered within one of the specified dayparts.

**Step 9:** Click **Save**.

Variants that utilize **Daypart Pricing** will have a **clock symbol** in the pricing cell. Only the default price is shown in the cell. To see the full list of daypart prices, click on the cell.

## Setting daypart prices on bundles

**Step 1:** Starting from the dashboard, click **Bundles** in the sidebar.

**Step 2:** Select a specific bundle.

**Step 3:** Click step 2 of the wizard - **Pricing Mode**.

**Step 4:** In the **Pricing Mode** dropdown, select **Daypart Pricing**.

**Screenshot placeholder:** Put screenshot showing the bundle wizard Pricing Mode step with Daypart Pricing selected here.

**Step 5:** Provide a **default price**.

**Step 6:** Select a daypart from the dropdown and provide a price. Like all other price fields, this can be either a static value or a named price variable.

**Screenshot placeholder:** Put screenshot showing the bundle daypart pricing form with default price and daypart-specific price entries here.

You may provide a unique price for as many or as few dayparts as you wish. There does not need to be an explicit price for each daypart. Items will be priced at the default price unless they’re ordered within one of the specified dayparts.

**Step 7:** Click **Save**.

## Setting daypart availability on products

**Step 1:** Starting from the dashboard, click **Products** in the sidebar.

**Step 2:** Select a specific product.

**Step 3:** Click step 2 of the wizard - **Name & Description**.

**Step 4:** Scroll down to the **Item Availability** section.

**Step 5:** Click **Add Daypart**.

**Screenshot placeholder:** Put screenshot showing the product Name & Description step with the Item Availability section and Add Daypart action here.

**Step 6:** Select the dayparts that you would like this product to be available during. Multiple dayparts can be selected. Note that if no dayparts are selected, the product will be available throughout the entire business day.

**Screenshot placeholder:** Put screenshot showing the product availability drawer with multiple dayparts selected here.

**Step 7:** Click **Save** in the drawer form.

**Step 8:** Click **Save** in the top right of the wizard.

## Setting daypart availability on variants

**Step 1:** Starting from the dashboard, click **Products** in the sidebar.

**Step 2:** Select a specific product.

**Step 3:** Click step 3 of the wizard - **Variants & Pricing**.

**Step 4:** On the desired variant, click the link within the **Availability** column. You may need to scroll the table to the right to bring the **Availability** column into view. The link will be labeled as either **Add** or **View / Edit** depending on whether availability has already been configured for this variant.

**Screenshot placeholder:** Put screenshot showing the variant row with the Availability column link labeled Add or View / Edit here.

**Step 5:** Scroll down to the **Item Availability** section.

**Step 6:** Select the dayparts that you would like this variant to be available during. Multiple dayparts can be selected. Note that if no dayparts are selected, the variant will be available throughout the entire business day.

**Screenshot placeholder:** Put screenshot showing the variant availability editor with selected dayparts here.

**Step 7:** Click **Save** in the drawer form.

**Step 8:** Click **Save** in the top right of the wizard.

## Setting daypart availability on bundles

**Step 1:** Starting from the dashboard, click **Bundles** in the sidebar.

**Step 2:** Select a specific bundle.

**Step 3:** Click step 2 of the wizard - **Name & Description**.

**Step 4:** Scroll down to the **Item Availability** section.

**Step 5:** Click **Add Daypart**.

**Screenshot placeholder:** Put screenshot showing the bundle Name & Description step with the Item Availability section and Add Daypart action here.

**Step 6:** Select the dayparts that you would like this bundle to be available during. Multiple dayparts can be selected. Note that if no dayparts are selected, the bundle will be available throughout the entire business day.

**Screenshot placeholder:** Put screenshot showing the bundle availability drawer with selected dayparts here.

**Step 7:** Click **Save** in the drawer form.

**Step 8:** Click **Save** in the top right of the wizard.

:::tip
There does not need to be an explicit price for every daypart. The default price will be used whenever an order falls outside the configured daypart prices.
:::

:::note
If no dayparts are selected for availability, the product, variant, or bundle will remain available throughout the entire business day.
:::

## Related guides

- [Defining Dayparts](/docs/admin-portal-guide/dayparts/define-dayparts/) — Create the daypart before assigning menu behavior to it
- [Create a Patch](/docs/admin-portal-guide/menus/create-a-patch/) — Apply targeted overrides at scale

---

*Part of the [Admin Portal Guide](/docs/admin-portal-guide) · Section: Dayparts*
