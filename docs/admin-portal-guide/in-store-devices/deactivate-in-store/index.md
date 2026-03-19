---
title: Deactivate In-Store
sidebar_label: Deactivate In-Store
---

# Deactivate In-Store

## What this guide covers

Disables a POS terminal or kiosk from receiving menu updates and processing orders. This action is reversible — the device can be reactivated at any time.

:::note Byte POS Caveat
This guide assumes the device is managed as part of a **Byte POS** deployment in Admin Portal.

If the market is not using Byte POS, **Byte Connect** must be part of Byte Commerce onboarding, and the operational controls for the market POS may differ from the device deactivation flow shown here.
:::

## Steps

**Step 1:** Navigate to the **In-Store Devices** section using the left-hand navigation menu.

**Step 2:** Find the device you want to deactivate. You can search or filter by Station Type, Store Number, or Device Status.

**Step 3:** Click the **⋮** (three-dot menu) button in the same row as the device, then select **Deactivate**.

![Step 2](./img/step-2.png)

**Step 4:** A confirmation modal appears asking you to confirm deactivation. Review the device name to ensure you are deactivating the correct device.

**Step 5:** Click **Confirm** to deactivate the device. The device will immediately stop receiving menu updates and cannot process orders. Click **Cancel** or click outside the modal to keep the device active.

![Step 3](./img/step-3.png)

:::caution
Deactivating a device prevents it from receiving menu updates and processing orders until it is reactivated. Customers at that location will not be able to order.
:::

:::tip
Deactivation is reversible. If you need to reactivate the device later, you can do so using the same menu. You may need to generate a new one-time password to re-authenticate the device.
:::

## Related guides

- [Generate One-Time Password](/docs/admin-portal-guide/in-store-devices/generate-one-time-password/)
- [View In-Store Device Details](/docs/admin-portal-guide/in-store-devices/view-in-store-device-details/)
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)

---

*Part of the [Admin Portal Guide](/docs/admin-portal-guide) · Section: In-Store Devices*
