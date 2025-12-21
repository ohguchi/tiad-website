# Git リモートブランチが見つからないエラーの解決

## エラー: couldn't find remote ref main

このエラーは、リモートリポジトリに `main` ブランチが存在しない場合に発生します。

---

## 原因

1. **リモートリポジトリが空**（まだ何もコミットされていない）
2. **デフォルトブランチが `master`**（古いGitHubリポジトリ）

---

## 解決方法

### 方法1: リモートリポジトリが空の場合（最も一般的）

リモートに何もコミットがない場合、そのままプッシュできます。

```bash
# 現在のブランチを確認
git branch

# mainブランチに切り替え（まだの場合）
git branch -M main

# そのままプッシュ（リモートが空なので問題なし）
git push -u origin main
```

### 方法2: デフォルトブランチが `master` の場合

GitHubのデフォルトブランチが `master` の場合。

#### オプションA: `master` にプッシュ（一時的）

```bash
# masterブランチにプッシュ
git push -u origin master
```

その後、GitHubでデフォルトブランチを `main` に変更してから：

```bash
# ローカルでmainブランチに切り替え
git branch -M main

# リモートもmainに変更
git push -u origin main

# 古いmasterブランチを削除（オプション）
git push origin --delete master
```

#### オプションB: GitHubでデフォルトブランチを変更

1. GitHubリポジトリの「Settings」を開く
2. 「Branches」を開く
3. 「Default branch」で「main」を選択
4. 確認ダイアログで「I understand, update the default branch」をクリック

その後、ローカルで：

```bash
# mainブランチに切り替え
git branch -M main

# プッシュ
git push -u origin main
```

### 方法3: リモートの状態を確認

```bash
# リモートのブランチ一覧を確認
git ls-remote --heads origin

# リモートの情報を取得（ブランチを作成）
git fetch origin
```

---

## 推奨される手順

### ステップ1: リモートの状態を確認

```bash
# リモートのブランチを確認
git ls-remote --heads origin
```

何も表示されない場合 → リモートリポジトリが空

### ステップ2: ローカルのブランチを確認

```bash
# 現在のブランチを確認
git branch
```

### ステップ3: プッシュ

リモートが空の場合：

```bash
# mainブランチに切り替え（必要に応じて）
git branch -M main

# プッシュ
git push -u origin main
```

---

## よくあるシナリオ

### シナリオ1: 新しく作成した空のリポジトリ

```bash
# そのままプッシュでOK
git push -u origin main
```

### シナリオ2: GitHubでREADMEを追加したリポジトリ

```bash
# リモートの変更を取得（ブランチ名を確認）
git fetch origin

# リモートのブランチ名を確認
git branch -r

# リモートがmasterの場合
git pull origin master --allow-unrelated-histories
git push -u origin main

# または、リモートもmainに変更
git push -u origin main --force
```

---

## トラブルシューティング

### まだエラーが出る場合

1. **リモートURLを確認**:
   ```bash
   git remote -v
   ```

2. **認証を確認**:
   - Personal Access Tokenが正しく設定されているか
   - SSHキーが設定されているか

3. **GitHubリポジトリの存在を確認**:
   - https://github.com/ohguchi/tiad-website にアクセス
   - リポジトリが存在するか確認

