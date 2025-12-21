# Vercelデプロイガイド

## 問い合わせフォームの実装

Vercelでは、Next.jsのAPI Routesを使用して問い合わせフォームを実装しています。
メール送信には **Resend** を使用しています。

---

## Resendとは

- **Next.js/Vercelと相性が良い** メール送信サービス
- **無料プラン**: 月3,000通まで送信可能
- **簡単な設定**: APIキーを設定するだけ
- **高配信率**: メールの到達率が高い

---

## セットアップ手順

### 1. Resendアカウントの作成

1. [Resend](https://resend.com/) にアクセス
2. 「Sign Up」でアカウント作成（無料）
3. ダッシュボードにログイン

### 2. APIキーの取得

1. Resendダッシュボードで「API Keys」を開く
2. 「Create API Key」をクリック
3. キー名を入力（例: "TiAD Website"）
4. 権限を選択（「Sending access」でOK）
5. APIキーをコピー（**この時だけ表示されるので注意**）

### 3. ドメインの認証（本番環境用）

**重要**: 独自ドメイン（tiad.ai）からメールを送信するには、ドメイン認証が必要です。

#### 手順

1. Resendダッシュボードで「Domains」を開く
2. 「Add Domain」をクリック
3. ドメイン名を入力（例: `tiad.ai`）
4. 表示されるDNSレコードをコピー
5. ドメインのDNS設定に以下を追加：
   - **TXTレコード**: SPF認証用
   - **TXTレコード**: DKIM認証用
   - **CNAMEレコード**: ドメイン検証用
6. DNS設定後、Resendで「Verify」をクリック
7. 認証完了まで数時間かかる場合があります

#### テスト用（開発環境）

ドメイン認証が完了するまでは、Resendのテスト用ドメイン `onboarding@resend.dev` を使用できます。

### 4. 環境変数の設定

#### ローカル開発環境

1. プロジェクトルートに `.env.local` ファイルを作成
2. 以下の内容を記述：

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@tiad.ai
FROM_EMAIL=noreply@tiad.ai
```

または、テスト用：

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@tiad.ai
FROM_EMAIL=onboarding@resend.dev
```

#### Vercel環境変数の設定

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

### 5. 依存関係のインストール

```bash
npm install
```

### 6. 動作確認

#### ローカル環境

```bash
npm run dev
```

ブラウザで `http://localhost:3000/contact` を開き、フォームを送信してテストします。

#### Vercel環境

1. GitHubにプッシュ
2. Vercelが自動デプロイ
3. デプロイ完了後、本番URLでフォームをテスト

---

## メール送信の仕組み

```
ユーザーがフォーム送信
    ↓
ContactForm.tsx (フロントエンド)
    ↓
POST /api/contact (API Route)
    ↓
app/api/contact/route.ts
    ↓
Resend API
    ↓
指定されたメールアドレスに送信
```

### メールの内容

- **送信先**: `CONTACT_EMAIL` で指定したメールアドレス
- **送信元**: `FROM_EMAIL` で指定したメールアドレス
- **返信先**: フォーム送信者のメールアドレス（`replyTo`に設定）
- **件名**: `【TiAD.LLC】お問い合わせ: [種別] - [お名前]様`
- **本文**: HTML形式とテキスト形式の両方

---

## トラブルシューティング

### メールが届かない

1. **Resendダッシュボードを確認**
   - 「Logs」で送信履歴を確認
   - エラーがあれば内容を確認

2. **環境変数を確認**
   - Vercelの環境変数が正しく設定されているか
   - APIキーが有効か

3. **ドメイン認証を確認**
   - 独自ドメインを使用する場合、認証が完了しているか
   - DNSレコードが正しく設定されているか

4. **スパムフォルダを確認**
   - メールがスパムフォルダに入っている可能性

### APIエラーが発生する

1. **コンソールログを確認**
   - Vercelの「Functions」タブでログを確認
   - エラーメッセージを確認

2. **バリデーションエラー**
   - 必須項目が入力されているか
   - メールアドレスの形式が正しいか

3. **Resend APIキーの権限**
   - APIキーに「Sending access」権限があるか

---

## コスト

### Resend無料プラン

- **月3,000通まで**: 無料
- **それ以上**: 有料プラン（月額$20〜）

### 使用量の確認

Resendダッシュボードの「Usage」で送信数を確認できます。

---

## セキュリティ

### レート制限

API Routeにレート制限を追加することを推奨します。

```typescript
// app/api/contact/route.ts に追加
// 簡単なレート制限の実装例（本番環境ではより堅牢な実装を推奨）
```

### スパム対策

- reCAPTCHAの追加を検討
- フォーム送信の頻度制限
- 入力値のバリデーション強化

---

## 参考リンク

- [Resend公式サイト](https://resend.com/)
- [Resendドキュメント](https://resend.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Vercel環境変数](https://vercel.com/docs/concepts/projects/environment-variables)

---

## 次のステップ

1. ✅ Resendアカウント作成
2. ✅ APIキー取得
3. ✅ ドメイン認証（本番環境用）
4. ✅ 環境変数設定
5. ✅ 動作テスト
6. ⬜ レート制限の実装（オプション）
7. ⬜ reCAPTCHAの追加（オプション）

