---
title: "市場設定"
sidebar_position: 4
---

# 市場設定

Atlas Platformは **feature flag アーキテクチャ** を採用しています。共通コードベースを使いながら、市場ごとの差分は個別デプロイではなく設定で制御されます。地域チームはプロダクトリリースを待たずに、機能を個別に有効化または無効化できます。

## 市場ごとに設定できる項目

| 機能領域 | 設定可否 | 設定場所 |
|---|---|---|
| Loyalty programme type | ✅ | Market Settings → Loyalty |
| Loyalty earning rate | ✅ | Market Settings → Loyalty Rules |
| Promo code behaviour | ✅ | Market Settings → Promotions |
| Journey steps (show/hide) | ✅ | Market Settings → Customer Journey |
| Order channel availability | ✅ | Restaurant → Channel Settings |
| Delivery radius | ✅ | Restaurant → Channel Settings → Delivery |
| Minimum delivery order | ✅ | Restaurant → Channel Settings → Delivery |
| Payment methods | ✅ | Market Settings → Payments |
| Guest checkout | ✅ | Market Settings → Customer Journey |
| Scheduled future orders | ✅ | Market Settings → Customer Journey |

## Australia 🇦🇺 — 現在の設定

| 設定項目 | 値 |
|---|---|
| Loyalty type | Voucher-based (KFC App Deals) |
| Earning rate | N/A — voucher model |
| Promo codes | Enabled |
| Scheduled orders | Disabled |
| Guest checkout | Enabled |
| Aggregator integration | Uber Eats, DoorDash |

## 設定変更の依頼方法

既存機能の設定変更は、Admin Portalからセルフサービスで行えます。ある機能が **グレーアウト** している場合、次のいずれかです。
1. その市場向けにまだ実装されていないため、JIRA Service Desk から依頼が必要
2. Regional Admin 権限が必要なため、BMU に連絡が必要

:::info
すべての設定変更は **即時反映** されます。デプロイは不要で、他市場には影響しません。
:::
