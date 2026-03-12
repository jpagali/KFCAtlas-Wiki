---
title: Troubleshooting & Escalation
sidebar_position: 2
---

# Troubleshooting & Escalation

This playbook covers the most common issues restaurant and regional teams encounter on the Atlas Platform, and the correct escalation path when self-service doesn't resolve the problem.

---

## Common Issues & Fixes

### Restaurant not appearing in the customer app

| Check | How |
|---|---|
| Is the restaurant set to Live? | Admin Portal → Profile → Status |
| Are all channels disabled? | Channel Settings — at least one must be active |
| Were GPS coordinates set correctly? | Profile → Location — confirm pin placement |

If all checks pass and the restaurant is still not visible after 30 minutes, escalate to your BMU.

---

### Customer cannot complete checkout

**Most common causes:**
1. The selected item has been deactivated since the customer added it to cart
2. A promo code has expired or reached its usage limit
3. The delivery address is outside the restaurant's delivery radius

**Franchisee action:** Check Menu → Items for any recently deactivated items. Check Channel Settings → Delivery Radius if delivery orders are failing.

---

### Menu item showing incorrect price

1. Check **Menu → Items → [Item] → Pricing** to confirm the price in the portal
2. If the portal price is correct but the app shows differently, wait 15 minutes for cache refresh
3. If the issue persists after 15 minutes, raise a ticket via the JIRA Service Desk

---

### Franchisee locked out of Admin Portal

1. Go to the login page and use **Forgot Password** — this sends a reset link to their registered email
2. If the email is not received within 5 minutes, check spam folders
3. If the account has been deactivated, a Regional Admin must reinstate it under Settings → Users

---

### Orders not coming through on delivery

1. Confirm the Delivery channel is **enabled** in Channel Settings
2. Check that operating hours include the current time for the Delivery channel
3. Confirm the Temporarily Closed toggle is **off**
4. If integrated with an aggregator (Uber Eats / DoorDash), check the aggregator platform directly — the issue may be on their side

---

## Escalation Path

Use this path when self-service does not resolve the issue:

```
Franchisee
    ↓  (cannot resolve in 15 mins)
Regional / BMU Admin
    ↓  (cannot resolve in 30 mins)
Atlas Platform Support (JIRA Service Desk)
    ↓  (P1 / production down)
Yum! Brands Tech — Emergency Line
```

### Severity Levels

| Level | Definition | Target Response |
|---|---|---|
| **P1** | Restaurant fully unable to take orders | 30 minutes |
| **P2** | One channel down, others working | 2 hours |
| **P3** | Single feature issue, workaround available | Next business day |
| **P4** | Question or configuration request | 3 business days |

### JIRA Service Desk

Raise tickets at: `support.atlas.yum.com`

Include in every ticket:
- Restaurant ID
- Market (Japan / Australia)
- Issue description
- Steps already taken
- Screenshot or screen recording if possible

:::tip
P1 issues can also be raised via the **emergency Slack channel** — `#atlas-p1-support`. Tag `@atlas-oncall` to page the on-call engineer directly.
:::
