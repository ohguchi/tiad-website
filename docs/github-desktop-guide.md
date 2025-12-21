# GitHub Desktop を使ったデプロイ手順

GitHub Desktopを使用してプロジェクトをGitHubにプッシュし、Vercelにデプロイする手順です。

---

## ステップ1: GitHub Desktopでリポジトリを開く

1. **GitHub Desktopを起動**
2. **「File」→「Add Local Repository」をクリック**
3. **プロジェクトフォルダを選択**
   - `C:\web` フォルダを選択
4. **「Add Repository」をクリック**

---

## ステップ2: 初回コミット

1. **左側のパネルで変更されたファイルを確認**
   - すべてのファイルが表示されているはずです

2. **下部の「Summary」にコミットメッセージを入力**
   ```
   Initial commit: TiAD website
   ```

3. **「Commit to main」をクリック**
   - 初回の場合、「Create a branch named main」と表示される場合は「Create branch」をクリック

---

## ステップ3: GitHubにプッシュ

1. **上部の「Publish branch」をクリック**
   - または「Push origin」ボタンをクリック

2. **リポジトリ名を確認**
   - 既にGitHubリポジトリが作成されている場合、自動的に検出されます
   - まだの場合、「Publish repository」で新規作成できます

3. **「Publish repository」または「Push origin」をクリック**

4. **プッシュが完了するまで待機**

---

## ステップ4: GitHubリポジトリの確認

1. **GitHub Desktopの「View on GitHub」をクリック**
   - またはブラウザで https://github.com/ohguchi/tiad-website にアクセス

2. **すべてのファイルがアップロードされているか確認**

---

## ステップ5: Vercelでプロジェクトをインポート

1. **[Vercelダッシュボード](https://vercel.com/dashboard) にアクセス**

2. **「Add New...」→「Project」をクリック**

3. **「Import Git Repository」でGitHubリポジトリを選択**
   - `ohguchi/tiad-website` を選択

4. **「Import」をクリック**

---

## ステップ6: プロジェクト設定

1. **Project Name**: `tiad-website`（そのまま）

2. **Framework Preset**: `Next.js`（自動検出されるはず）

3. **Root Directory**: `./`（そのまま）

4. **Build Command**: `npm run build`（自動設定）

5. **Output Directory**: `.next`（自動設定）

6. **Install Command**: `npm install`（自動設定）

7. **「Deploy」をクリック**

---

## ステップ7: デプロイの確認

1. **デプロイが完了するまで待機**（通常1-3分）

2. **デプロイ完了後、表示されるURLにアクセス**
   - 例: `https://tiad-website.vercel.app`

3. **サイトが正常に表示されるか確認**

---

## ステップ8: 環境変数の設定（重要）

問い合わせフォームを動作させるために、環境変数を設定します。

### 8-1. Resendアカウントの作成（まだの場合）

1. [Resend](https://resend.com/) にアクセス
2. 「Sign Up」でアカウント作成（無料）
3. ダッシュボードで「API Keys」を開く
4. 「Create API Key」をクリック
5. キー名を入力（例: "TiAD Website"）
6. APIキーをコピー（**この時だけ表示されるので注意**）

### 8-2. Vercelで環境変数を設定

1. **Vercelダッシュボードでプロジェクトを選択**

2. **「Settings」タブをクリック**

3. **「Environment Variables」を開く**

4. **以下の環境変数を追加**:

   | Key | Value | 環境 |
   |-----|-------|------|
   | `RESEND_API_KEY` | `re_xxxxx...`（Resendで取得） | Production, Preview, Development すべてにチェック |
   | `CONTACT_EMAIL` | `info@tiad.ai` | Production, Preview, Development すべてにチェック |
   | `FROM_EMAIL` | `onboarding@resend.dev`（テスト用） | Production, Preview, Development すべてにチェック |

5. **各変数を追加後、「Save」をクリック**

6. **環境変数追加後、再デプロイが必要な場合があります**
   - 「Deployments」タブで「Redeploy」をクリック

---

## ステップ9: 問い合わせフォームのテスト

1. **デプロイされたサイトの `/contact` ページにアクセス**
   - 例: `https://tiad-website.vercel.app/contact`

2. **フォームに入力して送信**

3. **指定したメールアドレス（`CONTACT_EMAIL`）にメールが届くか確認**

4. **Resendダッシュボードの「Logs」で送信履歴を確認**

---

## ステップ10: 独自ドメインの設定（オプション）

1. **Vercelダッシュボードでプロジェクトを選択**

2. **「Settings」→「Domains」を開く**

3. **「Add Domain」をクリック**

4. **ドメイン名を入力**（例: `tiad.ai`）

5. **表示されるDNS設定をコピー**

6. **ドメインのDNS設定に追加**:
   - **Aレコード**: Vercelが指定するIPアドレス
   - **CNAMEレコード**: `www` → `cname.vercel-dns.com`

7. **DNS設定後、Vercelで「Verify」をクリック**

8. **認証完了まで数時間かかる場合があります**

---

## 今後の更新方法

コードを更新した場合：

1. **GitHub Desktopで変更を確認**

2. **「Summary」にコミットメッセージを入力**

3. **「Commit to main」をクリック**

4. **「Push origin」をクリック**

5. **Vercelが自動的に再デプロイ**（通常1-3分）

---

## トラブルシューティング

### GitHub Desktopでリポジトリが見つからない

- 「File」→「Add Local Repository」で `C:\web` フォルダを選択

### プッシュが失敗する

- GitHub Desktopの「Repository」→「Repository Settings」→「Remote」でURLを確認
- 正しいURL: `https://github.com/ohguchi/tiad-website.git`

### Vercelでデプロイが失敗する

- 「Deployments」タブで「Build Logs」を確認
- エラーメッセージを確認して修正

### 問い合わせフォームが動作しない

- 環境変数が正しく設定されているか確認
- Resendダッシュボードの「Logs」でエラーを確認

---

## 次のステップ

1. ✅ GitHub Desktopでリポジトリを開く
2. ✅ 初回コミット
3. ✅ GitHubにプッシュ
4. ⬜ Vercelでプロジェクトをインポート
5. ⬜ 環境変数を設定
6. ⬜ 問い合わせフォームをテスト
7. ⬜ 独自ドメインを設定（オプション）

