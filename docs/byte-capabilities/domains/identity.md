---
title: Identity & Sign-In
description: How customers create accounts, sign in, manage their profile, and control privacy settings on the Atlas platform.
sidebar_label: Identity & Sign-In
---

# Identity & Sign-In

**What it does:** Manages how customers create accounts, sign in, manage their profile, and control privacy settings.

**Why it matters:** Every loyalty interaction, order history, saved address, and personalised offer depends on a customer being authenticated. Without sign-in, customers can only use guest checkout — they have no access to rewards, order history, or saved preferences.

---

## Feature Table

| Feature | Problem It Solves | What It Does | How It Works | Dependencies | Prerequisites | Limitations | Impacted Metrics |
|---|---|---|---|---|---|---|---|
| **Create Account with Email** | New customers need a way to register | Lets customers sign up with an email address and a one-time PIN | Customer enters email → receives OTP → verifies → account created; session token issued | Identity/SSO service, Email delivery | Email service active for market | OTP rate-limited per device (prevents abuse) | Sign-up conversion rate |
| **Sign In with Email + OTP** | Returning customers need to access their account | Passwordless sign-in via email OTP | Customer enters email → receives OTP → verifies → session resumed | Identity/SSO service, Email delivery | Account must exist | OTP attempt limit with backoff | Login success rate, session duration |
| **Sign In / Register with Google** | Customers prefer social login over email | One-tap Google account link for sign-in or registration | Google OAuth2 flow → Identity service exchanges token → account created or linked | Google OAuth, Identity/SSO | Google OAuth enabled for market | Requires Google account; market enablement decision | Social login adoption rate |
| **Sign In / Register with Apple ID** | iOS users expect native Apple sign-in | Sign in with Apple for iOS/macOS customers | Apple OAuth flow → token exchanged → account created or linked | Apple Sign-In, Identity/SSO | Apple developer config per market | Apple only; requires Apple account | iOS sign-up rate |
| **Edit Profile** | Customers need to update their details | Lets signed-in customers update their name, DOB, and contact info | Profile update call to Identity service; changes persisted in CRM | Identity/SSO, CRM | Customer must be signed in | Fields vary by market configuration | Profile completion rate |
| **View & Change Communication Preferences** | Customers must control how they are contacted | Shows and updates email/push/SMS opt-in status per channel | Reads from CRM; customer updates trigger CMP sync and audit trail | CRM, CMP, Push provider | Signed in; consent framework active for market | Audit trail mandatory; changes logged | Email/push opt-in rate |
| **Delete Account** | Customers have a right to erasure (GDPR) | Initiates account deletion request across all connected systems | Sends deletion request to Identity; cascades to CRM, Loyalty | Identity/SSO, CRM, Loyalty service | Customer must be signed in; no pending orders | Deletion may take time to propagate; loyalty data deleted | Deletion request rate |
| **Sign Out** | Customers need to end their session securely | Ends the session, clears tokens, unregisters push | Session invalidated in Identity; push token unregistered | Identity/SSO, Push provider | Active session | None | N/A |
| **View Terms & Conditions / Privacy Policy** | Customers must be able to see what they agreed to | Renders the latest legal documents for the market's locale | Fetches versioned document from Legal CMS; CDN-cached | Legal CMS, CMP | None (available to guests) | Content managed by Legal team, not Helium | Legal compliance |
| **Cookie Consent Settings** | Regulatory requirement in many markets | Shows cookie categories; lets customers accept/reject | CMP provides consent widget; preferences stored with timestamp | CMP | None (available to guests) | Market must configure CMP categories | Consent acceptance rate |

---

## Technical Sources

<details>
<summary>📎 Technical Source: Create Account with Email</summary>

- **FRD References:** FRD-HEL-001
- **TRD Domain:** Identity & Sign-In
- **Key Interfaces / APIs:** Auth Email, OTP Verify, Session Mint
- **Data Contracts:** Session (accessToken, refreshToken, expiry)
- **Source Summary:**
  - OTP verified via Identity service; rate-limited per device (429 backoff)
  - Session token stored in device secure keystore (iOS/Android)
  - Auth endpoints SLO: 99.95% monthly availability
  - Backward compatible SemVer; 90-day deprecation window
  - PII masking applied in all logs

</details>

<details>
<summary>📎 Technical Source: Sign In with Google / Apple</summary>

- **FRD References:** FRD-HEL-003, FRD-HEL-004, FRD-HEL-027–030
- **TRD Domain:** Identity & Sign-In
- **Key Interfaces / APIs:** OAuth Google Callback, OAuth Apple Callback, Session Mint
- **Data Contracts:** Session (accessToken, refreshToken, expiry)
- **Source Summary:**
  - OAuth2 flow: IdP → Identity service → session token
  - Existing account: linked; new account: created in same flow
  - No PAN or sensitive data in OAuth payload
  - Market enablement: both providers configurable per market
  - 90-day API deprecation window

</details>

<details>
<summary>📎 Technical Source: Delete Account</summary>

- **FRD References:** FRD-HEL-067
- **TRD Domain:** Identity & Sign-In + CRM + Loyalty
- **Key Interfaces / APIs:** Account Delete Request/Status
- **Data Contracts:** Account erasure request (userId, timestamp, status)
- **Source Summary:**
  - GDPR-compliant erasure flow; cascades to CRM and Loyalty
  - Deletion is asynchronous; status available via polling
  - Loyalty balance and history permanently deleted
  - Audit log retained for compliance (anonymised)
  - Blocks re-use of same email for configurable period

</details>

---

:::tip See it in the wiki
The Identity domain maps to the customer-facing sign-in and account flows documented in the Front-end Guide: [Access Account & Manage Profile](/docs/frontend/customer-journey/access-account-and-manage-profile/)
:::
