---
title: "機能概要"
sidebar_position: 1
---

# 機能概要

このセクションでは、KFC Atlas プラットフォームに組み込まれている各機能を紹介します。各機能には専用ページがあり、何をする機能なのか、プラットフォームごとにどう動くのか、市場ごとの注意点は何かを確認できます。

## Atlas での「機能」とは

Atlas における機能とは、ユーザー向けまたは運用者向けの独立した機能で、次の条件を満たすものです。

- 明確なプロダクト価値または運用価値を提供する
- iOS、Android、Web での挙動が定義されている
- 市場ごとに有効化、設定、拡張ができる

## 現在の機能一覧

| 機能 | 説明 | 対応プラットフォーム |
|---|---|---|
| [KFC Deeplink \| Universal Link](./kfc-deeplink-universal-link) | KFC の URL からアプリ内の特定コンテンツを直接開く | iOS、Android、Web |
| [Branch Deeplink](./branch-deeplink) | Branch.io を利用したアトリビューション対応ディープリンクと deferred routing | iOS、Android |
| [MarTech](./martech) | イベント計測、顧客データ、マーケティング自動化連携 | iOS、Android、Web |
| [Social Sign In](./social-sign-in) | Google、Facebook、Apple を使った Web / アプリ共通ログイン | iOS、Android、Web |
| [Menu Item Reservation](./menu-item-reservation) | 特定メニューを事前予約・事前購入できるようにする | iOS、Android、Web |

:::info
機能は市場ごとの設定で有効化されます。個別のコードデプロイで切り替える方式ではありません。詳細は [Market Configurations](/docs/frontend/market-configurations) を参照してください。
:::

## 機能ごとの依存関係

Atlas の各機能は市場横断で再利用できるように設計されていますが、一部機能は外部システムへの依存があります。たとえば市場で利用している POS や Delivery Management System（DMS）との連携が必要な場合は、本番導入前に統合可否の確認が必要です。

Menu Item Reservation はその代表例です。市場固有の予約フローは、対象市場の POS または在庫システムが提供する在庫 API と timeslot API に依存します。同等の API を持たない市場では、その連携を整備したうえで機能を有効化する必要があります。
