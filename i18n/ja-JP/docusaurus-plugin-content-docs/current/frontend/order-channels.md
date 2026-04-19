---
title: "注文チャネル"
sidebar_position: 3
---

# 注文チャネル

Atlas Platformでは、各店舗ごとに **店内飲食**、**デリバリー**、**持ち帰り** の3つの注文チャネルをサポートしています。各チャネルは相互に影響を与えることなく、個別に有効化、設定、スケジュール管理が可能です。

## チャネルごとの機能

| 設定項目 | 店内飲食 | デリバリー | 持ち帰り |
|---|---|---|---|
| Enable / disable per restaurant | ✅ | ✅ | ✅ |
| Separate operating hours | ✅ | ✅ | ✅ |
| Minimum order value | — | ✅ | — |
| Delivery radius (km) | — | ✅ | — |
| Promo codes | ✅ | ✅ | ✅ |
| Loyalty points | ✅ | ✅ | ✅ |
| Table number capture | ✅ | — | — |
| Estimated wait time display | — | ✅ | ✅ |

## 市場別チャネル状況

### Australia 🇦🇺
主要チャネルはデリバリーと持ち帰りです。店内注文も利用可能ですが、導入範囲は比較的限定的です。デリバリーはKFCアプリに加え、Uber Eats と DoorDash にも連携しています。

## チャネル設定

すべてのチャネル設定は、店舗単位で **Admin Portal → Restaurants → [Restaurant] → Channel Settings** から管理します。

:::tip
1店舗のチャネルを無効にしても、他の店舗には影響しません。すべてのチャネル設定は店舗単位で管理されます。
:::

:::warning
3つすべてのチャネルを同時に無効にすると、その店舗はお客様向けアプリ上で **Temporarily Closed** と表示されます。営業時間中は少なくとも1つのチャネルが有効になっていることを確認してください。
:::
