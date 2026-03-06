---
title: Platform Runbook
sidebar_position: 3
---

# Platform Runbook

This runbook covers everything a franchisee or regional team needs to know to run the Atlas Platform day-to-day — routine tasks, scheduled maintenance, and how to keep the platform operating smoothly.

---

## Daily Tasks

### Opening Checklist (before trading hours)

| Task | Where | Time |
|---|---|---|
| Confirm restaurant is set to Live | Profile → Status | 1 min |
| Check Temporarily Closed is off | Profile → Temporarily Closed toggle | 30 sec |
| Verify today's operating hours are correct | Profile → Operating Hours | 1 min |
| Check for any deactivated items that need restoring | Menu → Items | 2 mins |

### Closing Checklist (end of trading)

| Task | Where | Time |
|---|---|---|
| Confirm no pending orders are unactioned | Order Management → Pending | 2 mins |
| Check tomorrow's hours (especially before public holidays) | Profile → Operating Hours | 1 min |

---

## Weekly Tasks

### Menu Review
- Check that all active items are available and correctly priced
- Deactivate any seasonal or promotional items that have ended
- Review any customer feedback flagged by your BMU

### Reporting
- Review the weekly performance report under **Reporting → Weekly Summary**
- Channel breakdown: which channels drove the most orders?
- Check average order value vs. market benchmark

---

## Monthly Tasks

### User Access Review
Ask your regional admin to run an access audit — confirm all active users should still have access, and remove any former staff.

### Profile Accuracy Check
- Confirm address, phone number, and operating hours are all still accurate
- Update public holiday hours for the coming month

---

## Japan-Specific 🇯🇵 Operations

### Loyalty Programme Maintenance
- KFC Japan Rewards points are issued automatically — no manual action required
- If a customer reports missing points, direct them to the KFC Japan app → Support → Missing Points
- Bulk point corrections require BMU approval

### Aggregator Pause Procedure
If you need to pause Uber Eats or Demae-can orders:
1. Pause directly in the aggregator's restaurant portal (not Atlas)
2. Notify your BMU so they can monitor order flow
3. When resuming, confirm Atlas Delivery channel is still enabled

---

## Australia-Specific 🇦🇺 Operations

### App Deals / Voucher Management
- Active vouchers are managed at the market level by Collins Foods / BMU — franchisees do not control which deals are live
- If a customer presents an expired voucher, direct them to the KFC Australia app → Help

### Aggregator Pause Procedure
To pause Uber Eats or DoorDash:
1. Pause in the aggregator's tablet/portal at the restaurant
2. In Atlas Admin: Channel Settings → Delivery → toggle off temporarily
3. Remember to re-enable when resuming — orders will not flow while the channel is disabled in Atlas

---

## Key Contacts

| Contact | Purpose | How to Reach |
|---|---|---|
| Regional / BMU Admin | Market-level issues, user access, configuration | Your market Slack channel |
| Atlas Platform Support | Technical issues, bugs, feature requests | JIRA Service Desk |
| Yum! Brands Tech (Emergency) | P1 production issues only | `#atlas-p1-support` Slack |
