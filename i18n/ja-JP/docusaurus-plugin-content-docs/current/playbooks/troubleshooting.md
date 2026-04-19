---
title: "トラブル対応とエスカレーション"
sidebar_position: 2
---

# トラブル対応とエスカレーション

このプレイブックでは、店舗チームや地域チームが Atlas Platform 上でよく直面する問題と、セルフ対応で解決しない場合の適切なエスカレーション経路をまとめています。

---

## よくある問題と対処

### 店舗が顧客向けアプリに表示されない

| 確認項目 | 確認方法 |
|---|---|
| 店舗が Live になっているか | Admin Portal → Profile → Status |
| すべてのチャネルが無効化されていないか | Channel Settings — 少なくとも 1 つは有効である必要があります |
| GPS 座標が正しく設定されているか | Profile → Location — ピン位置を確認します |

すべて確認しても 30 分後に店舗が表示されない場合は、BMU にエスカレーションしてください。

---

### 顧客がチェックアウトを完了できない

**よくある原因:**
1. The selected item has been deactivated since the customer added it to cart
2. A promo code has expired or reached its usage limit
3. The delivery address is outside the restaurant's delivery radius

**フランチャイジー側の対応:** Menu → Items で最近無効化された商品がないか確認します。配達注文が失敗している場合は Channel Settings → Delivery Radius も確認します。

---

### メニュー商品に誤った価格が表示される

1. Check **Menu → Items → [Item] → Pricing** to confirm the price in the portal
2. If the portal price is correct but the app shows differently, wait 15 minutes for cache refresh
3. If the issue persists after 15 minutes, raise a ticket via the JIRA Service Desk

---

### フランチャイジーが Admin Portal にログインできない

1. ログインページで **Forgot Password** を使います。登録メールアドレスにリセットリンクが送信されます
2. 5 分以内にメールが届かない場合は、迷惑メールフォルダを確認します
3. アカウントが無効化されている場合は、Regional Admin が Settings → Users で再有効化する必要があります

---

### 配達注文が入ってこない

1. Confirm the Delivery channel is **enabled** in Channel Settings
2. Check that operating hours include the current time for the Delivery channel
3. Confirm the Temporarily Closed toggle is **off**
4. If integrated with an aggregator (Uber Eats / DoorDash), check the aggregator platform directly — the issue may be on their side

---

## エスカレーション経路

セルフ対応で解決しない場合は、次の経路でエスカレーションします。

```
Franchisee
    ↓  (cannot resolve in 15 mins)
Regional / BMU Admin
    ↓  (cannot resolve in 30 mins)
Atlas Platform Support (JIRA Service Desk)
    ↓  (P1 / production down)
Yum! Brands Tech — Emergency Line
```

### 重要度レベル

| レベル | 定義 | 目標初動時間 |
|---|---|---|
| **P1** | Restaurant fully unable to take orders | 30 minutes |
| **P2** | One channel down, others working | 2 hours |
| **P3** | Single feature issue, workaround available | Next business day |
| **P4** | Question or configuration request | 3 business days |

### JIRA Service Desk

チケット起票先: `support.atlas.yum.com`

すべてのチケットに次を含めてください:
- Restaurant ID
- Market
- Issue description
- Steps already taken
- Screenshot or screen recording if possible

:::tip
P1 issues can also be raised via the **emergency Slack channel** — `#atlas-p1-support`. Tag `@atlas-oncall` to page the on-call engineer directly.
:::
