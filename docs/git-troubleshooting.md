# Git プッシュエラーの解決方法

## エラー: failed to push some refs

このエラーは通常、以下の原因で発生します：

### 1. リモートリポジトリに既にコミットがある場合

GitHubでリポジトリを作成する際に、READMEやLICENSEファイルを追加した場合、リモートとローカルの履歴が異なります。

#### 解決方法A: リモートの変更をマージ

```bash
# リモートの変更を取得
git pull origin main --allow-unrelated-histories

# コンフリクトがあれば解決後、再度プッシュ
git push -u origin main
```

#### 解決方法B: 強制プッシュ（注意: リモートの履歴を上書き）

**警告**: リモートに重要なコミットがある場合は使用しないでください。

```bash
git push -u origin main --force
```

### 2. ブランチ名が異なる場合

ローカルが `master` でリモートが `main` の場合など。

```bash
# 現在のブランチ名を確認
git branch

# mainブランチに切り替え（または作成）
git branch -M main

# プッシュ
git push -u origin main
```

### 3. 認証の問題

GitHubの認証が必要な場合。

#### Personal Access Tokenを使用する場合

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 「Generate new token」をクリック
3. 必要な権限を選択（repo）
4. トークンをコピー
5. プッシュ時にパスワードの代わりにトークンを入力

#### SSHを使用する場合

```bash
# SSH URLに変更
git remote set-url origin git@github.com:ohguchi/tiad-website.git

# プッシュ
git push -u origin main
```

### 4. リモートリポジトリが空でない場合

GitHubでリポジトリを作成する際にREADMEを追加した場合。

```bash
# リモートの変更を取得してマージ
git pull origin main --allow-unrelated-histories

# マージ後、プッシュ
git push -u origin main
```

---

## 推奨される手順

### ステップ1: 現在の状態を確認

```bash
# リモートの状態を確認
git remote -v

# 現在のブランチを確認
git branch

# コミット履歴を確認
git log --oneline
```

### ステップ2: リモートの変更を取得

```bash
# リモートの変更を取得（初回は --allow-unrelated-histories が必要）
git pull origin main --allow-unrelated-histories
```

### ステップ3: コンフリクトがあれば解決

マージコンフリクトが発生した場合：

1. コンフリクトファイルを開く
2. コンフリクトマーカー（`<<<<<<<`, `=======`, `>>>>>>>`）を確認
3. 必要な内容を残して編集
4. ファイルを保存

```bash
# コンフリクト解決後
git add .
git commit -m "Merge remote and local changes"
```

### ステップ4: プッシュ

```bash
git push -u origin main
```

---

## よくあるエラーメッセージと対処法

### "Updates were rejected"

リモートに新しいコミットがある場合。

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### "Authentication failed"

認証情報の問題。

- Personal Access Tokenを使用
- またはSSHキーを設定

### "Permission denied"

リポジトリへのアクセス権限がない。

- GitHubでリポジトリの設定を確認
- コラボレーターとして追加されているか確認

---

## 安全な方法: 新しく始める

もしリモートリポジトリが空で、ローカルの履歴をそのまま使いたい場合：

```bash
# リモートを削除
git remote remove origin

# 再度追加
git remote add origin https://github.com/ohguchi/tiad-website.git

# 強制プッシュ（リモートが空の場合のみ安全）
git push -u origin main --force
```

**注意**: `--force` はリモートの履歴を上書きするため、他の人が作業している場合は使用しないでください。

