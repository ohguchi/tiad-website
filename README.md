# TiAD.LLC ウェブサイト

TiAD.LLCのリニューアルウェブサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **アニメーション**: Framer Motion
- **デプロイ**: 静的エクスポート（XServer対応）

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 環境変数の設定

問い合わせフォームを使用するには、環境変数を設定する必要があります。

1. プロジェクトルートに `.env.local` ファイルを作成
2. 以下の内容を記述：

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@tiad.ai
FROM_EMAIL=noreply@tiad.ai
```

**環境変数の説明**:
- `RESEND_API_KEY`: ResendのAPIキー（[Resend](https://resend.com/)で取得）
- `CONTACT_EMAIL`: お問い合わせの送信先メールアドレス
- `FROM_EMAIL`: 送信元メールアドレス（Resendで認証済みのドメイン）

詳細は [Vercelデプロイガイド](docs/vercel-deployment-guide.md) を参照してください。

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

## デプロイ

### Vercelへのデプロイ（推奨）

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com/)でプロジェクトをインポート
3. 環境変数を設定（Vercelダッシュボードの「Settings」→「Environment Variables」）
4. 自動デプロイが開始されます

詳細は [Vercelデプロイガイド](docs/vercel-deployment-guide.md) を参照してください。

### XServerへのデプロイ（静的エクスポート）

**注意**: 現在の実装はVercel用です。XServerにデプロイする場合は、`next.config.js`で`output: 'export'`を有効にする必要があります（問い合わせフォームは動作しません）。

## プロジェクト構造

```
web/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── about/             # 会社概要
│   ├── services/          # 事業案内
│   ├── news/              # お知らせ
│   └── contact/           # お問い合わせ
├── components/            # Reactコンポーネント
│   ├── Header.tsx         # ヘッダー
│   ├── Footer.tsx         # フッター
│   ├── Hero.tsx           # ヒーローセクション
│   ├── NewsSlider.tsx     # ニューススライダー
│   └── ContactForm.tsx    # お問い合わせフォーム
├── lib/                   # ユーティリティ
├── public/                # 静的ファイル
└── styles/                # グローバルスタイル
```

## 特徴

- モダンでミニマルなデザイン
- レスポンシブ対応（モバイル・タブレット・デスクトップ）
- スムーズなアニメーション
- ダークテーマ
- SEO最適化

## ライセンス

Copyright © 2019-2025 TiAD.LLC All Rights Reserved.

