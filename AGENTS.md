# AGENTS.md - TechnoTUT Official Website

豊橋技術科学大学 音楽技術部 (TechnoTUT) 公式Webサイトのリポジトリです。
本リポジトリで作業するAIアシスタント（Agent）は、以下のガイドラインおよび規約を遵守してください。

---

## 1. プロジェクト概要 & 技術スタック

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue 3, Composition API, `<script setup lang="ts">`)
- **Content Engine**: [@nuxt/content v2](https://content.nuxt.com/) (Markdown / Frontmatter管理)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **Node Environment**: Node.js 20+ / ESM (`"type": "module"`)
- **Hosting / SSG**: `npm run generate` による静的サイト生成 (SSG)

---

## 2. 開発・実行コマンド

- **開発サーバー起動**: `npm run dev` (デフォルトポート: 3000)
- **静的ビルド / SSG生成**: `npm run generate` (`dist` / `out` ディレクトリへ出力)
- **型チェック / Nuxt準備**: `npx nuxi prepare`
- **注意**: ユーザーが `npm run dev` でローカル監視している場合は、都度の静的ビルドは不要です。

---

## 3. ディレクトリ構成

- `components/`: 各セクションおよび共有コンポーネント（Hero, ConceptActivity, UtopiaTone, Gikadaifes, Access, HeaderNav, FooterNav）
- `pages/`: ページコンポーネント（`index.vue`, `activity.vue`, `access.vue`, `faq.vue`, `join-us.vue`, `gikadaifes/`）
- `content/`: Markdownコンテンツ（技科大祭告知、活動詳細など）
- `public/`: 静的アセット（画像、SVGアイコン、マップ、フライヤー等）
- `docs/`: ドキュメント・デザインガイドライン
- `assets/css/main.css`: グローバルCSSスタイル（共通ボタンスタイル `.common-btn` 等）

---

## 4. デザインシステム & スタイリング規約

デザインフィロソフィー、カラーパレット、タイポグラフィ、UIコンポーネント等の詳細規約は、以下のドキュメントを参照してください。

- **[docs/style-guide.md](docs/style-guide.md)**（スタイル・デザイン規約）

---

## 5. 実装ルール & ベストプラクティス

- **動的コンテンツ連携**:
  技科大祭などのコンテンツはハードコードを避け、`queryContent('gikadaifes')` 等を用いて最新データを自動取得・表示すること。
- **スパム対策**:
  公開メールアドレスをHTML上に生の `mailto:` やプレーンな文字列で記載せず、`contact [at] technotut.net` のように難読化すること。
- **Git運用**:
  コミットメッセージは英語の Conventional Commits（`feat:`, `fix:`, `refactor:` 等）を使用すること。
  リモートブランチへの push 先を必ず確認し、誤って他メンバーのブランチへ push しないこと。
