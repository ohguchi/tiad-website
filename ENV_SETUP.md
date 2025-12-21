# 環境変数設定ガイド

## 必要な環境変数

問い合わせフォームを使用するには、以下の環境変数を設定してください。

### ローカル開発環境

プロジェクトルートに `.env.local` ファイルを作成し、以下を記述：

```env
# Resend API Key
# Resendのダッシュボード（https://resend.com/api-keys）で取得
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# お問い合わせメールの送信先
# 複数のメールアドレスを指定する場合はカンマ区切り: "email1@example.com,email2@example.com"
CONTACT_EMAIL=info@tiad.ai

# 送信元メールアドレス
# Resendで認証済みのドメインから送信する必要があります
# 例: noreply@tiad.ai または onboarding@resend.dev（テスト用）
FROM_EMAIL=noreply@tiad.ai
```

### Vercel環境変数の設定

1. Vercelダッシュボードにログイン
2. プロジェクトを選択
3. 「Settings」→「Environment Variables」を開く
4. 以下の環境変数を追加：

| Key | Value | 説明 |
|-----|-------|------|
| `RESEND_API_KEY` | `re_xxxxx...` | ResendのAPIキー |
| `CONTACT_EMAIL` | `info@tiad.ai` | お問い合わせの送信先 |
| `FROM_EMAIL` | `noreply@tiad.ai` | 送信元メールアドレス |

5. 各環境（Production, Preview, Development）に適用するか選択
6. 「Save」をクリック

## Resend APIキーの取得方法

1. [Resend](https://resend.com/) にアクセス
2. 「Sign Up」でアカウント作成（無料）
3. ダッシュボードで「API Keys」を開く
4. 「Create API Key」をクリック
5. キー名を入力（例: "TiAD Website"）
6. 権限を選択（「Sending access」でOK）
7. APIキーをコピー（**この時だけ表示されるので注意**）

## ドメイン認証（本番環境用）

独自ドメイン（tiad.ai）からメールを送信するには、Resendでドメイン認証が必要です。

1. Resendダッシュボードで「Domains」を開く
2. 「Add Domain」をクリック
3. ドメイン名を入力（例: `tiad.ai`）
4. 表示されるDNSレコードをコピー
5. ドメインのDNS設定に追加
6. 認証完了まで数時間かかる場合があります

**テスト用**: ドメイン認証が完了するまでは、`onboarding@resend.dev` を使用できます。

詳細は [Vercelデプロイガイド](docs/vercel-deployment-guide.md) を参照してください。


