# スタイル・デザイン規約 (Design System & Styling Guide)

豊橋技術科学大学 音楽技術部 (TechnoTUT) 公式Webサイトのデザインシステムおよびスタイリング規約です。  
新規コンポーネントの作成や既存ページの修正を行う際は、トップページの実装および本規約に沿って統一感のあるデザインを維持してください。

---

## 1. デザインフィロソフィー

1. **Cyber-Minimal & Sophisticated Dark（洗練されたダークテーマ）**:
   - ベース背景は `#050505` の漆黒に近いダークカラー。過度なグラデーションや派手な装飾を排し、モノトーンを基調にタイポグラフィと余白で魅せるミニマルな構成を追求します。
2. **直線のグリッドと有機的・ピル型UIの対比**:
   - セクション区切り線、グリッドレイアウト、フライヤーやジャケット画像、マップコンテナは「直角・シャープなボーダー」でソリッドに構成します。
   - 一方で、ボタンや操作系（`.common-btn`、SNSリンク、スライダー矢印など）は対照的に「角丸（ピル型 / `rounded-full`）」を採用し、クリック・タップしやすい有機的なインタラクションを提供します。
3. **タイポグラフィ重視の階層設計**:
   - 欧文・見出し・ナビゲーションには細身で幾何学的な `Quicksand`、和文・本文には可読性の高い `Noto Sans JP` を使い分けます。
   - 見出しは大ぶりかつ `font-light`（細め）を基調とし、広めの字間（`tracking-widest` など）で知的な緊張感を演出します。
4. **滑らかで洗練されたマイクロインタラクション**:
   - 見出しの出現アニメーション（フリッカーを伴う白マスクのスライド `block-reveal`）。
   - ホバー時の上品な字間拡張（`hero-choice`）、アンダーラインの伸長、微細な浮き上がり（`transform: translateY(-1px)`）など、過度な主張を避けた上品な演出を用います。

---

## 2. カラーパレット

Tailwind CSS の設定（`tailwind.config.js`）および共通定義に準拠します。

| 用途 | クラス名 / 値 | 説明 |
| :--- | :--- | :--- |
| **全体背景色** | `bg-dark` (`#050505`) | サイト全体のベース背景色。画像コンテナ背景も原則統一 |
| **パネル / カード** | `bg-dark-panel` (`#0c0c0c`) | コントラストを抑えつつわずかに浮き立たせるパネル・カード背景 |
| **ブランド / シンボル** | `brand` (`#C7000A`) | 部のシンボルカラー。重要なアクセントやロゴ、ローディング等 |
| **ブランド（ライト）** | `brand-light` (`#E0202A`) | ホバー時や明るめの強調用シンボルカラー |
| **プライマリテキスト** | `text-white` (`#FFFFFF`) | セクション大見出し、メインタイトル、強調テキスト |
| **本文・リード文** | `text-gray-dim` (`#c2c2c2`) | 概要説明文、段落本文。柔らかい視認性を確保 |
| **セカンダリ・メタ** | `text-gray-400`, `text-gray-300` | カテゴリ小見出し、英字ラベル、日付、補足情報 |
| **ボーダー / 境界線** | `border-white/10`, `border-dark-border` | セクション区切り線、外枠（ホバー時は `border-white/20` や `30`） |
| **テキスト選択** | `selection:bg-white/20 selection:text-white` | 反転選択時のハイライトカラー |

---

## 3. タイポグラフィ

フォントファミリーおよびスタイルの使い分け規約です。

### フォントファミリー

- **欧文・英数字・見出し・ナビゲーション**: `font-quicksand` (`'Quicksand', sans-serif`)
  - セクション大見出し、ヘッダーメニュー、英字サブタイトル、日付、ボタンテキストなどに使用。
  - 大見出しには `font-light`（細め）を適用し、大文字サブタイトルには `tracking-widest` や `tracking-[0.2em]` で十分な字間を確保。
- **和文・本文・コンテンツ**: `font-noto` (`'Noto Sans JP', sans-serif`)
  - 日本語の文章、リード文、説明文、Markdownコンテンツ全般、大学名表記（`豊橋技術科学大学 音楽技術部`）に使用。
  - 文字の太さは `font-light` または `font-[350]`、行間は `leading-relaxed` や `leading-8` で読みやすい余白を維持。

### ルートフォントスケーリング（大画面対応）

`assets/css/main.css` にて、フルHD超のディスプレイ（WQHD / 4Kなど）向けにルートフォントサイズが段階的にスケーリングされています。
- WQHD（2560px〜）: `html { font-size: 20px; }`
- 4K（3840px〜）: `html { font-size: 24px; }`

大画面でもレイアウトが極端に縮退せず、迫力と視認性が保たれる設計になっています。

---

## 4. セクション構造 & レイアウトパターン

トップページ（root）の各セクションは、共通のグリッド・見出し設計パターンで統一されています。

### 共通セクションヘッダー

主要セクション（The Utopia Tone, 技科大祭, Discography, Access など）は、以下の4層構造で構成されます：

1. **英字カテゴリラベル**: `font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 mb-2 uppercase`
2. **大見出し**: `font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight pb-1 sm:pb-2`（後述の `block-reveal-mask` を適用）
3. **リード文（任意）**: `font-noto text-sm sm:text-base text-gray-dim font-light mt-4 max-w-2xl leading-relaxed tracking-wide`
4. **アクションボタン（ヘッダー右端）**: `.common-btn text-xs py-2 px-5 inline-flex` で詳細ページや外部リンクへ誘導

```html
<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
  <div>
    <p class="font-quicksand text-xs sm:text-sm tracking-widest text-gray-400 mb-2 uppercase">
      TechnoTUT Presents - School Festival
    </p>
    <div class="relative inline-block overflow-hidden">
      <h2 class="font-quicksand font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-tight pb-1 sm:pb-2">
        技科大祭
      </h2>
      <div aria-hidden="true" class="block-reveal-mask" :class="isVisible ? 'block-reveal-active' : ''" />
    </div>
    <p class="font-noto text-sm sm:text-base text-gray-dim font-light mt-4 max-w-2xl leading-relaxed">
      概要説明テキスト...
    </p>
  </div>
  <div class="self-start md:self-end">
    <NuxtLink to="/gikadaifes" class="common-btn text-xs py-2 px-5 inline-flex">
      <span>ARCHIVE &amp; DETAIL</span>
      <span>&rarr;</span>
    </NuxtLink>
  </div>
</div>
```

---

## 5. UIコンポーネント & スタイルクラス

`assets/css/main.css` で定義されている共通ユーティリティを活用してください。

### 1. 共通ボタン (`.common-btn`)
- **形状**: ピル型（カプセル型 / `border-radius: 9999px`）
- **スタイル**: 透明背景、白枠線（`border: 1px solid rgba(255, 255, 255, 0.8)`）、フォントは `Quicksand`、`letter-spacing: 0.05em`
- **ホバー挙動**: 背景が半透明白（`rgba(255, 255, 255, 0.15)`）に変化し、わずかに浮上（`translateY(-1px)`）
- **用途**: ページ遷移ボタン、外部リンク、アクションボタン全般

### 2. 丸型アイコンボタン
- **形状**: 正円（`w-9 h-9 rounded-full border border-white/20` または `w-12 h-12`）
- **ホバー挙動**: `hover:border-white hover:text-white`、スライダー矢印では `hover:bg-white/15 hover:scale-110 active:scale-95`
- **用途**: SNSリンク（X, Instagram, SoundCloud, Bandcamp）、ギャラリースライダーの左右矢印

### 3. タグ・ラベル (`.rounded-outline-text`)
- **形状**: `border-radius: 8px`、`border: 1px solid rgba(255, 255, 255, 0.4)`
- **文字**: `text-white/70 text-sm tracking-[0.05em]`
- **用途**: カテゴリタグ、補助ラベル

### 4. ライン付き見出し (`.title-with-line`)
- 見出しの右側に1pxの水平白半透明ライン（`rgba(255, 255, 255, 0.4)`）がフレックス伸長する見出しスタイル。

---

## 6. 画像・カード・コンテナの造形ルール

- **フライヤー・ジャケット・グリッド・マップ**:
  - 直角・シャープなエッジ（角丸なし）を基本とし、`border border-white/10` やシームレスな `gap-0` グリッドで構成します。
  - 背景には `bg-dark` や `bg-neutral-900` を敷き、画像の読み込み前後でコントラストを維持します。
- **写真・活動紹介画像**:
  - 必要に応じて角丸（`rounded-2xl`）を用い、親しみやすさと視覚的な柔らかさを与えます。
- **アスペクト比**:
  - フライヤーは原寸比率（`aspect-[1/1.414]` やバナー比率 `aspect-[2527/1072]`）、ジャケットは `aspect-square`、写真は `aspect-[16/10]` を基本とします。

---

## 7. アニメーション & インタラクション

1. **Block Reveal Mask（矩形マスク点滅＆スライド）**:
   - 見出し文字等の登場時に使用されるシグネチャー演出。
   - 白色マスクが一瞬チカチカと点滅（フリッカー）したのち、右方向へスライドして文字を出現させます（`.block-reveal-mask` + `.block-reveal-active`）。
2. **Hero Choice（ヒーロー大リンク）**:
   - ヒーローセクションの大文字ナビゲーション（`.hero-choice`）。
   - ホバー時に文字間隔が `letter-spacing: 0.08em` から `0.14em` へ滑らかに広がり、わずかに透過（`opacity: 0.75`）。
3. **Orbit & Floating（旋回・浮遊）**:
   - `ConceptActivitySection` などに見られる、ゆっくりとした浮遊アニメーションやアンダーラインの横伸長エフェクト。
4. **アクセシビリティ（Reduced Motion）**:
   - `prefers-reduced-motion: reduce` 指定時は、アニメーション・トランジションを停止し、マスクを非表示（`display: none !important;`）にして静的表示にフォールバックします。
