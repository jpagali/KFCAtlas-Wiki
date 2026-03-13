---
title: Order Channels
sidebar_position: 3
---

# Order Channels

:::warning
All content below should be treated as placeholder product framing based on what is currently supported in the Admin Portal Guide. Validate market-specific deployment details before using this page as a final source of truth.
:::

Atlas supports a **multi-channel ordering model per store**, allowing teams to shape how menus, availability, and ordering experiences are delivered across customer touchpoints.

Rather than treating order channels as a fixed global trio like `Dine-in / Delivery / Takeaway`, Atlas is better understood as a **channel-based distribution platform**. Stores can publish different menus to different destinations such as **Digital**, **Kiosk**, and **In-Store**, while the frontend experience adapts accordingly.

For the front-end, this creates two layers of experience design:

- the **ordering channel** the store is configured to serve
- the **order mode** the customer selects inside that experience, such as delivery, pickup, or dine-in

## Product View

### Digital is the core customer ordering surface
The digital channel is the foundation for app and web ordering. It is where menu availability becomes customer-visible, where online ordering is operationally controlled, and where the storefront experience becomes actionable.

From a product perspective, this gives teams a clear operating model:

- customers only see live menus that have been assigned and published to that store's digital channel
- turning off **Accepting Online Orders** suppresses ordering without requiring broader menu changes
- storefront availability can be managed at the store level without changing the overall product experience

This makes Atlas operationally flexible while keeping the customer journey simple.

### Order modes live inside the channel experience
The frontend journey already treats **delivery**, **pickup**, **dine-in**, **catering**, and **scheduled ordering** as customer choices. The Admin Portal Guide, however, describes channel labels such as **Digital**, **Kiosk**, and **In-Store**.

The cleanest product interpretation is:

- **Digital** is the operational channel
- **delivery** and **pickup** sit within that digital channel as customer order modes
- **Kiosk** and **In-Store** can carry their own menu strategy and experience rules

This distinction matters because it allows the platform to separate **operational distribution** from **customer fulfillment choice**.

### Channel-based menu strategy is a strength
The Admin Portal Guide confirms that stores can assign different menus to different channels and publish them independently.

That creates strong product value on the frontend:

- product availability may differ between app/web, kiosk, and in-store ordering
- pricing, bundles, or category structure may differ by channel
- a menu change can appear on one surface before it appears on another if publishing is done channel by channel

This is especially useful when the business wants to tailor the experience by touchpoint instead of forcing one menu to serve every use case.

### Scheduled ordering is controlled, not assumed
The Admin Portal Guide documents an **Allows Future Orders** toggle and notes that it depends on a supported ordering channel.

For the frontend, this positions scheduled ordering as a managed experience:

- scheduled ordering exists as a configurable capability
- it appears only where the store and channel setup support it
- it can be introduced selectively without redefining the whole journey

That gives markets room to launch the feature intentionally instead of making it mandatory everywhere.

### Store operations directly shape the customer experience
The Admin Portal exposes store controls such as **Accepting Online Orders** and store-specific menu publishing.

This means the frontend is store-sensitive by design:

- one store may be orderable while another is temporarily unavailable
- one store may show a digital menu while another has no live digital menu published
- temporary closures or operational pauses may be explained by store settings rather than a platform outage

This is a valuable product characteristic because it allows operations teams to react quickly while preserving a consistent platform pattern.

## Recommended Positioning

The strongest way to position Atlas today is:

- Atlas supports multiple ordering channels per store
- channel names are implementation-specific, with examples including **Digital**, **Kiosk**, and **In-Store**
- the digital customer journey sits on top of a store's digital channel configuration
- customer-facing order modes such as **delivery** and **pickup** are experiences within that digital layer, not the same thing as admin publishing channels
- menu visibility and ordering availability are shaped by per-store channel assignment, publish state, and operational toggles

:::tip
If you need to document market-specific frontend behavior, verify the actual channel labels and menu assignments in the store's **Menus** view first, then describe the customer journey on top of that operational setup.
:::

## What We Should Avoid Overstating

- that all markets use the same three customer channels
- that every channel supports the same capabilities
- that aggregator behaviour can be inferred from the current Admin Portal Guide alone
- that any specific market has dine-in, delivery, and takeaway deployed in the same way at every store

## Admin Portal Sources Behind These Presumptions

- [View a Store’s Menu](/docs/admin-portal-guide/stores/view-a-stores-menu/)
- [Assign New Menu](/docs/admin-portal-guide/stores/assign-new-menu/)
- [Publish a Menu](/docs/admin-portal-guide/stores/publish-a-menu/)
- [Edit Store Details](/docs/admin-portal-guide/stores/edit-store-details/)
- [Accept Online Orders (Turn On or Off)](/docs/admin-portal-guide/stores/2a-accept-online-orders-turn-on-or-off/)
- [Allow Future Orders (Turn On or Off)](/docs/admin-portal-guide/stores/2c-allow-future-orders-turn-on-or-off/)
