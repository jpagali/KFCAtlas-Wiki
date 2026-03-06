---
title: Users & Permissions
sidebar_position: 4
---

# Users & Permissions

The Admin Portal uses a **role-based access model** — each user is assigned a role that defines what they can see and do. Access is scoped to the restaurants and markets a user is assigned to.

## Roles

| Role | Scope | Permissions |
|---|---|---|
| **Franchisee Admin** | Assigned restaurants only | Edit profile, menu, channels, hours |
| **Regional / BMU Admin** | Entire market | All franchisee permissions + market settings, user management |
| **Read-only** | Assigned restaurants | View reports and data only — no editing |
| **Support** | All markets (internal) | Diagnostic access — view only, no configuration |

## Adding a New User

**Admin Portal → Settings → Users → Invite User**

1. Enter the user's email address
2. Select their role
3. Assign them to one or more restaurants (for Franchisee Admin) or a market (for Regional Admin)
4. Click **Send Invite** — the user receives an email to set up their login

:::tip
Users must have a valid Yum! Brands email domain to be invited. If an external franchisee partner needs access, contact your BMU to provision a guest account.
:::

## Removing a User

**Settings → Users → [User] → Revoke Access**

Access is removed immediately. The user will be logged out of any active sessions within 15 minutes.

## Audit Log

Every action taken in the Admin Portal is logged — who did what, and when. Regional admins can access the full audit log under **Settings → Audit Log**.

This is particularly useful for:
- Investigating unexpected menu or hour changes
- Confirming that a franchisee completed their onboarding setup
- Compliance and accountability reviews

## FAQs

**Can a franchisee admin manage users for their own restaurant?**
No — user management is restricted to Regional / BMU Admins. This ensures consistent access control across the market.

**What if a team member leaves and we need to remove their access urgently?**
Contact your regional admin immediately. They can revoke access in under 2 minutes. For after-hours emergencies, use the escalation path in the [Troubleshooting Playbook](/docs/playbooks/troubleshooting).
