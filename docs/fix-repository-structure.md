# リポジトリ構造の修正方法

## 問題

エラーメッセージから、プロジェクトファイルが `tiad-web/` サブフォルダに入っている可能性があります。

正しい構造：
```
C:\Users\ohguc\Documents\GitHub\tiad-website\
├── package.json
├── next.config.js
├── app/
├── components/
└── ...
```

現在の構造（問題あり）：
```
C:\Users\ohguc\Documents\GitHub\tiad-website\
├── tiad-web/
│   ├── package.json
│   ├── app/
│   └── ...
```

---

## 解決方法

### 方法1: ファイルを正しい場所に移動（推奨）

1. **エクスプローラーで `C:\Users\ohguc\Documents\GitHub\tiad-website` を開く**

2. **`tiad-web` フォルダの中身を確認**
   - `package.json`, `app/`, `components/` などがあるか確認

3. **`tiad-web` フォルダの中身をすべて選択（Ctrl+A）**

4. **親フォルダ（`tiad-website`）に移動（Ctrl+X → Ctrl+V）**

5. **`tiad-web` フォルダを削除**（空になったら）

6. **GitHub Desktopで変更を確認**
   - 左側のパネルに変更が表示されるはず

7. **コミット**
   - Summary: `Fix repository structure`
   - 「Commit to main」をクリック

### 方法2: GitHub Desktopで直接追加

1. **GitHub Desktopで「Changes」タブを確認**

2. **`tiad-web/` フォルダを右クリック**

3. **「Add」を選択**（すべてのファイルをステージング）

4. **コミット**
   - Summary: `Initial commit: TiAD website`
   - 「Commit to main」をクリック

---

## 確認方法

正しい構造になっているか確認：

1. **エクスプローラーで `C:\Users\ohguc\Documents\GitHub\tiad-website` を開く**

2. **以下のファイルが直接見えるか確認**:
   - `package.json`
   - `next.config.js`
   - `tsconfig.json`
   - `app` フォルダ
   - `components` フォルダ

3. **`tiad-web` フォルダがないことを確認**

---

## 正しい構造の例

```
C:\Users\ohguc\Documents\GitHub\tiad-website\
├── .git/
├── .gitignore
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── contact/
│   └── ...
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── docs/
├── lib/
├── public/
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## 次のステップ

構造を修正した後：

1. **GitHub Desktopで変更を確認**
2. **コミット**
3. **「Publish repository」をクリック**（まだの場合）
4. **または「Push origin」をクリック**（既にリモートがある場合）


