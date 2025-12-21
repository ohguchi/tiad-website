# Vercelセットアップガイド

Vercelアカウント作成後の手順を説明します。

---

## 方法1: GitHub経由でデプロイ（推奨）

### ステップ1: GitHubリポジトリの作成

1. [GitHub](https://github.com/) にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力（例: `tiad-website`）
4. 「Public」または「Private」を選択
5. 「Create repository」をクリック

### ステップ2: プロジェクトをGitHubにプッシュ

**Gitがインストールされていない場合**:
- [Git for Windows](https://git-scm.com/download/win) をインストール
- または、GitHub Desktopを使用

**コマンドラインで実行**:

```bash
# Gitリポジトリの初期化（まだの場合）
git init

# すべてのファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: TiAD website"

# GitHubリポジトリをリモートとして追加
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git

# プッシュ
git branch -M main
git push -u origin main
```

### ステップ3: Vercelでプロジェクトをインポート

1. [Vercelダッシュボード](https://vercel.com/dashboard) にログイン
2. 「Add New...」→「Project」をクリック
3. 「Import Git Repository」でGitHubリポジトリを選択
4. リポジトリを選択して「Import」をクリック

### ステップ4: プロジェクト設定

1. **Project Name**: プロジェクト名を入力（例: `tiad-website`）
2. **Framework Preset**: Next.jsが自動検出されることを確認
3. **Root Directory**: `./` のまま（変更不要）
4. **Build Command**: `npm run build`（自動設定）
5. **Output Directory**: `.next`（自動設定）
6. 「Deploy」をクリック

### ステップ5: 環境変数の設定

デプロイ後、環境変数を設定します：

1. プロジェクトページで「Settings」をクリック
2. 「Environment Variables」を開く
3. 以下の環境変数を追加：

| Key | Value | 環境 |
|-----|-------|------|
| `RESEND_API_KEY` | `re_xxxxx...` | Production, Preview, Development |
| `CONTACT_EMAIL` | `info@tiad.ai` | Production, Preview, Development |
| `FROM_EMAIL` | `onboarding@resend.dev`（テスト用） | Production, Preview, Development |

4. 各変数を追加後、「Save」をクリック
5. 環境変数追加後、再デプロイが必要な場合があります

### ステップ6: 独自ドメインの設定（オプション）

1. プロジェクトページで「Settings」→「Domains」を開く
2. 「Add Domain」をクリック
3. ドメイン名を入力（例: `tiad.ai`）
4. 表示されるDNS設定をコピー
5. ドメインのDNS設定に以下を追加：
   - **Aレコード**: Vercelが指定するIPアドレス
   - **CNAMEレコード**: `www` → `cname.vercel-dns.com`
6. DNS設定後、Vercelで「Verify」をクリック
7. 認証完了まで数時間かかる場合があります

---

## 方法2: Vercel CLIでデプロイ

GitHubを使わない場合、Vercel CLIを使用できます。

### ステップ1: Vercel CLIのインストール

```bash
npm install -g vercel
```

### ステップ2: ログイン

```bash
vercel login
```

ブラウザが開き、Vercelアカウントでログインします。

### ステップ3: プロジェクトのデプロイ

プロジェクトディレクトリで実行：

```bash
vercel
```

初回デプロイ時は、いくつか質問されます：

- **Set up and deploy?**: `Y`
- **Which scope?**: アカウントを選択
- **Link to existing project?**: `N`（新規プロジェクト）
- **What's your project's name?**: プロジェクト名を入力
- **In which directory is your code located?**: `./`（そのままEnter）
- **Want to override the settings?**: `N`（デフォルト設定でOK）

### ステップ4: 環境変数の設定

CLIで環境変数を設定：

```bash
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL
vercel env add FROM_EMAIL
```

または、Vercelダッシュボードで設定（方法1のステップ5を参照）

### ステップ5: 本番環境へのデプロイ

```bash
vercel --prod
```

---

## デプロイ後の確認

### 1. デプロイの確認

- Vercelダッシュボードでデプロイ状況を確認
- 「Deployments」タブでログを確認
- エラーがあれば修正して再デプロイ

### 2. サイトの動作確認

- デプロイされたURLにアクセス
- 各ページが正常に表示されるか確認
- 問い合わせフォームをテスト

### 3. 問い合わせフォームのテスト

1. `/contact` ページにアクセス
2. フォームに入力して送信
3. 指定したメールアドレスにメールが届くか確認
4. Resendダッシュボードの「Logs」で送信履歴を確認

---

## トラブルシューティング

### ビルドエラーが発生する

1. **ログを確認**: Vercelダッシュボードの「Deployments」→「Build Logs」を確認
2. **依存関係**: `package.json`の依存関係が正しいか確認
3. **環境変数**: 必要な環境変数が設定されているか確認

### 問い合わせフォームが動作しない

1. **環境変数**: Resend APIキーが正しく設定されているか確認
2. **Resendダッシュボード**: 「Logs」でエラーを確認
3. **FROM_EMAIL**: テスト用は`onboarding@resend.dev`を使用

### ドメインが設定できない

1. **DNS設定**: DNSレコードが正しく設定されているか確認
2. **反映時間**: DNS設定の反映に数時間かかる場合があります
3. **Vercelサポート**: 問題が解決しない場合はVercelサポートに問い合わせ

---

## 次のステップ

1. ✅ Vercelアカウント作成（完了）
2. ⬜ GitHubリポジトリ作成
3. ⬜ プロジェクトをGitHubにプッシュ
4. ⬜ Vercelでプロジェクトをインポート
5. ⬜ 環境変数を設定
6. ⬜ デプロイの確認
7. ⬜ Resendアカウント作成とAPIキー取得
8. ⬜ 問い合わせフォームのテスト
9. ⬜ 独自ドメインの設定（オプション）

---

## 参考リンク

- [Vercelドキュメント](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Resend](https://resend.com/)

