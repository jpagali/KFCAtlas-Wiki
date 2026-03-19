---
title: Payments & Tenders
description: How the Atlas platform handles card payments, vouchers, split tender, and gift cards in a PCI-compliant way.
sidebar_label: Payments & Tenders
---

# Payments & Tenders

**What it does:** Handles how customers pay — cards, vouchers, split tender, and gift cards — in a PCI-compliant and fraud-resistant way.

**Why it matters:** Payment is the final barrier to revenue. Failed payments or poor payment UX directly reduce order completion. This domain is also the highest security-sensitivity area of the platform.

:::caution Helium does not handle card data
The PSP SDK captures card details directly — no PAN (card number) ever passes through Helium or is stored in Atlas. Helium handles tokens only. Any payment configuration (PSP credentials, routing rules, surcharge policies) lives in the Portal and the PSP Vault.
:::

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **Pay with Card** | Customer wants to use a debit or credit card | Tokenises the card and processes payment through the PSP | PSP SDK handles card capture (no PAN in Helium); token sent to Checkout Orchestrator; 3DS authentication where required | PSP / Vault, Checkout Orchestrator | Valid checkout session | 3DS may add friction; failure → retry or switch tender | Payment success rate |
| **Pay with Saved Card** | Customer wants to reuse a stored card | Lists saved cards; customer selects one for payment | Saved card tokens fetched from PSP Vault; selected token used in payment intent | PSP / Vault | Customer signed in; card previously saved | Card must not be expired; vault managed by PSP (not Helium) | Saved card usage rate |
| **Delete Saved Card** | Customer wants to remove a stored card | Removes the card from the customer's saved payment methods | Delete call to PSP Vault via Helium | PSP / Vault | Customer signed in | Cannot undo deletion | Vault management activity |
| **Pay with Voucher** | Customer has a digital voucher | Applies a voucher code as full or partial payment | Voucher validated with Voucher service; value attached as tender to order | Voucher service, Checkout Orchestrator | Valid voucher code; not expired or redeemed | Voucher rules vary by market; server-side validation; double-spend prevented (409) | Voucher redemption rate |
| **Split Tender (Card + Voucher)** | Voucher covers part of the bill | Lets customer pay the remainder with a card after applying a voucher | Voucher applied first; remaining balance tendered via card payment intent | Voucher service, PSP, Checkout Orchestrator | Valid voucher; active checkout session | Tender sequencing managed by Orchestrator | Split tender rate |
| **Buy a Voucher** | Customer wants to purchase a digital voucher (gift) | Lets customer purchase a voucher via card | Payment via PSP; voucher generated and delivered by email/SMS | Voucher service, PSP | Active payment method | Voucher purchase flow is market-enabled; separate from order checkout | Voucher sales volume |
| **Resend Gift Card Details** | Customer lost their gift card email | Re-sends gift card delivery to customer's registered contact | Rate-limited resend call to Gift Card service; delivered via configured channel | Gift Card service, Messaging | Customer signed in; gift card purchased | Rate-limited per card ID to prevent abuse | Resend request rate |

---

## Technical Sources

<details>
<summary>📎 Technical Source: Pay with Card / Split Tender</summary>

- **FRD References:** FRD-HEL-016, FRD-HEL-017, FRD-HEL-018
- **TRD Domain:** Payments & Tenders
- **Key Interfaces / APIs:** Card Tokenise/Pay (PSP SDK), Voucher Apply/Redeem, Submit Payment Intent (Orchestrator)
- **Data Contracts:** PaymentIntent (amount, currency, tenders[]); TenderCard (token, scheme, 3dsStatus — no PAN in logs)
- **Source Summary:**
  - PCI-DSS compliant: SDK handles card capture; no PAN stored in Helium or logs
  - 3DS supported; 3DS outcome tracked via telemetry
  - Auth capture success target: ≥99.5%
  - Voucher double-spend prevented via idempotency (409 returns original token)
  - Payment APIs: additive only, 180-day deprecation window (longest in platform — schema mandates apply)

</details>
