---
title: デプロイ運用ランブック
---

# デプロイ運用ランブック

このリポジトリでは、`staging` を先に、`main` を後に進めるプロモーション運用を標準とします。

## 基本ルール

- ユーザー影響のある変更は、まず `staging` に入れる
- `main` に入れるのは、`staging` で検証済みの変更だけにする
- staging で安定性確認やクラウド検証が終わっていない変更は、`main` に進めない

## 標準フロー

1. 変更をまず `staging` にコミット、または cherry-pick する
2. `staging` を push する
3. staging 上で確認する:
   - `npm run build`
   - ルーティング、ローカライズ、UI 状態に関わる変更は必要に応じてローカル preview
   - クラウドや環境依存のチェックが必要なら確認する
4. staging が安定してから、同じ変更を `main` に昇格する
5. release note は staging 専用の理由がない限り、`main` 昇格時に更新する
6. `main` を push する

## 昇格ルール

- できるだけ `staging` で確認した同じコミットを `main` に持っていく
- staging 未検証の修正を `main` に直接作る運用は避ける
- もし誤って `main` に先にローカルコミットした場合は、`origin/main` に戻してから `staging` から昇格し直す

## リリースノート

- エンドユーザー向け release note は基本的に `main` 昇格時に載せる
- staging 向けの内部メモが必要なら、短く、プロダクション公開のように見せない
- 英語と日本語の両方に影響する変更は、昇格前に両ロケールをそろえて更新する

## クイックチェック

- 変更は `staging` にある
- `staging` の build が通っている
- 必要な spot check を staging で終えている
- release note の準備ができている
- 昇格先は `main`
- 本番デプロイはそのあとに行う
