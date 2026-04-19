import useBaseUrl from '@docusaurus/useBaseUrl';

# KFC Atlasデザインシステム
### プラットフォームがどう作られているか — ビジュアルアイデンティティから画面表示まで

---

## デザインシステムとは

デザインシステムは、KFC のデジタル体験がどこでも同じ基準で見え、同じように動くための**共通ルールブック**です。たとえば、KFC Australia のアプリにあるボタンが、Web とネイティブアプリの両方で一貫した見た目と振る舞いになるように支える仕組みです。

これがなければ、市場ごとに似た UI を何度も作り直し、少しずつ異なるものになってしまいます。デザインシステムがあることで、すべてのチームが同じ土台の上で開発できます。

KFC Atlas プラットフォームでは、Yum! のエンタープライズデザインシステムである **Helium** を使っています。以下で、その全体像を説明します。

---

## 3つのレイヤー

### レイヤー1 — Design（見た目を定義する）

すべては、Atlas UI/UX チームが使うデザインツール **Figma** から始まります。Figma の中では、**Tokens Studio** というプラグインを使って *design tokens* を管理します。これは、KFC のブランドカラー、文字サイズ、余白、角丸などを定義する元データです。

その tokens をもとに、チームは **UI Kit** を組み立てます。UI Kit は、ボタン、カード、ナビゲーションバー、入力欄など、すぐ使える部品のライブラリです。デザイナーはそれらを組み合わせて新しい画面を作ります。各コンポーネントは tokens に紐づいているため、1つの色を変えるだけで全体へ一括反映できます。

> **簡単に言うと:** Tokens Studio はブランドルール、UI Kit はブランド化された Lego パーツ集です。デザイナーはその部品を組み合わせて画面を作ります。

---

### レイヤー2 — Code（実装に変換する）

デザインが承認されると、エンジニアは同じ design tokens を使って実装を進めます。この時点で tokens はソフトウェアで使える形にエクスポートされます。

**style build process** によって、tokens から 2 種類の出力が生成されます。

- **Native styles** — iOS / Android アプリ向け
- **Web styles** — ブラウザ体験向け

これらのスタイルは **Design System Components（DSC）** に取り込まれます。DSC は、デザイン上の UI Kit をコード化した実装部品です。Atlas の新機能を作るとき、エンジニアはこの部品を使います。これにより、市場ごとに勝手に異なるフォントやブランド外の色が入ることを防げます。

> **簡単に言うと:** design tokens はコードへ「コンパイル」され、各市場のエンジニアが共通で使うブランド準拠コンポーネント集になります。

---

### レイヤー3 — Market Applications（実際に公開されるもの）

スタックの一番下には、お客様が実際に使うアプリケーションがあります。

| アプリケーション | 内容 |
|---|---|
| **KFC Web App** | Atlas 上に構築された、KFC 市場向けの主要 Web 注文体験 |
| **Core Web App** | KFC Web App などの土台になる共通 Web 基盤 |
| **Core Native App** | ネイティブ iOS / Android 体験の共通モバイル基盤 |

各市場のフロントエンドは、上記の Core アプリと DSC Components を組み合わせて構築されます。これにより、各市場は自然に一貫性を得られ、カスタマイズも制御された方法で行えます。

---

## Atlas 市場にとっての意味

**Australia、UK、Germany、Singapore** のような市場にとって、この構造には次の価値があります。

- **Speed** — 共通要素を毎回作り直さなくてよいため、新機能をより早く出せる
- **Consistency** — あらゆる市場、あらゆるデバイスで KFC ブランドらしい見た目を保てる
- **Scalability** — Yum! がブランド token を更新すると、その変更を市場全体へ広げられる
- **Quality** — コンポーネントはプラットフォームレベルで検証され、市場側はその品質を引き継げる

KFC Global Enablement and Market Success の役割は、この仕組みを各市場が最大限活用できるようにすることです。つまり、プラットフォーム機能を市場で使える形へ翻訳し、逆に市場ニーズを構造化してエンジニアリングチームへ戻すことにあります。

---

## プラットフォームアーキテクチャ図

以下の図は、Helium デザインシステムが Figma 上の design tokens から始まり、style build process を経て、プラットフォームコンポーネントになり、最終的に KFC 各市場のアプリケーションへ流れていく構造を示しています。

<iframe
  src={useBaseUrl('/kfc-atlas-design-system-diagram-ja.html')}
  width="100%"
  height="900px"
  style={{border: 'none', borderRadius: '12px'}}
/>
---

*Document prepared by KFC Global Enablement and Market Success — KFC Global*
