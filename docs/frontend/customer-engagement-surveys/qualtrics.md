---
title: Qualtrics
sidebar_position: 5
---

# Qualtrics

**Feature area:** [Customer Engagement Surveys](./)

Qualtrics is used as the survey platform for **KFC Listens** style customer engagement surveys. It handles survey delivery, branching logic, response capture, and reporting workflows used by customer experience and market operations teams.

## What Qualtrics Handles

Within the Atlas ecosystem, Qualtrics typically supports:

- Survey forms presented through web links or QR codes
- Conditional survey questions based on channel, market, or response type
- Satisfaction metrics such as CSAT, NPS, and reason codes
- Response exports and dashboards for CX reporting
- Alerts for low-score responses that may require follow-up

## Typical KFC Listens Flow

```text
1. Customer completes an order or visit
2. KFC shares a survey invitation (receipt, email, push, or QR code)
3. Customer opens the Qualtrics survey
4. Qualtrics collects ratings, comments, and store experience details
5. Market teams review dashboards and act on service-recovery cases
```

## Common Data Captured

| Data Point | Example |
|---|---|
| Visit or order reference | Order number, store ID, visit date |
| Channel | Dine-in, Takeaway, Delivery, App, Web |
| Satisfaction score | Overall visit or order rating |
| Issue category | Food quality, missing items, speed, staff service |
| Free-text feedback | Customer comments in their own words |

## Operational Considerations

### Survey Triggering
Markets choose when to invite customers. Common patterns include immediately after checkout, after fulfilment, or from printed receipt links used in-store.

### Incentives
Some programmes include an incentive, such as a validation code or offer after survey completion. Incentive rules are managed at the market level and may require coordination with promotions or CRM teams.

### Escalations
Low-scoring responses can be routed into customer support or CX review workflows. Markets should define:

- What score threshold creates an alert
- Which team owns follow-up
- How quickly customers should be contacted

## Integration Notes

Qualtrics is adjacent to Atlas rather than a core ordering flow dependency. The survey experience can reference Atlas order data, but the survey platform itself is managed separately from the main customer ordering application.

:::tip
When launching or changing a KFC Listens programme, align the survey wording, trigger timing, and service-recovery SLA before going live. A well-timed survey with unclear follow-up ownership usually creates operational noise instead of useful insight.
:::
