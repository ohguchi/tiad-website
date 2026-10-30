# 計画書：SEO基盤の整備と、サイトの洗練（第1弾）

作成日：2026.10.30　　対象ブランチ：`claude/zealous-johnson-ysnfxh`

## 0. 目的

1. 検索エンジン向けの土台（ページごとのtitle・sitemap・構造化データなど）を整え、
   「TiAD」「TiAD 名古屋」で確実に1位を取り、「名古屋 ◯◯（業務名）」系で上位を狙える状態にする
2. 既存コンセプト（日めくり・年表・NOW・1pxの線）を「徹底」して、サイトの統一感と独自性を上げる
3. お知らせタイトル・Worksの年・所在地など、内容の正確さを揃える

実装はこの計画書に沿って行い、完了後にプルリクエストを作成する。

## 1. 確定した情報（ユーザー提供）

| 項目 | 値 |
|---|---|
| 会社名 | TiAD合同会社（ティアド合同会社）／ 英文名 TiAD.LLC |
| 所在地 | 愛知県名古屋市北区八龍町1丁目77番地 |
| 設立 | 2019年4月 |
| 代表 | 代表社員 大口 貴正 |
| メール | info@tiad.ai |
| 公開URL | https://tiad.ai |
| 郵便番号・電話番号 | 未提供（構造化データには入れない。後日追記可） |

## 2. SEOの実装項目

### 2-1. ページごとの title / description

`app/layout.tsx` の metadata を次のように拡張する。

```ts
metadataBase: new URL('https://tiad.ai'),
title: {
  default: 'TiAD合同会社｜名古屋のDX推進・AI/RPA導入・インフラ保守',
  template: '%s｜TiAD合同会社',
},
description: '名古屋市北区のTiAD合同会社。データセンターのサーバー保守、VMware運用、集合住宅向けインターネット回線導入、中小企業向けの業務改善アプリ開発とAI・RPA導入を行うDX推進企業です。',
openGraph: { type: 'website', locale: 'ja_JP', siteName: 'TiAD合同会社', images: ['/images/og.png'] },
twitter: { card: 'summary_large_image' },
alternates: { canonical: '/' },
```

各ページに `export const metadata` を追加する（title は template が付くので社名を書かない）。

| ページ | title | description（要約） |
|---|---|---|
| `/about` | 会社概要 | 名古屋市北区のTiAD合同会社の会社情報。2019年4月設立。代表挨拶、ビジョン、所在地 |
| `/services` | 事業案内（データセンター保守・回線導入・業務アプリ開発） | 3事業の説明。名古屋を拠点に全国のデータセンター案件に対応 |
| `/services/portfolio` | 実績 | 2019年からの受注・提供実績 |
| `/news` | お知らせ | TiAD合同会社の受注・サービスのお知らせ一覧 |
| `/news/[slug]` | 記事タイトル＋日付（generateMetadata で生成） | 記事本文の先頭 |
| `/contact` | お問い合わせ | ICT活用・システム開発・インフラ保守のご相談窓口 |
| `/privacy-policy` | プライバシーポリシー | 個人情報の取扱い |
| `/approach/ai-iot-rpa` | AI・IoT・RPAの活用 | 中小企業向けの自動化支援 |
| `/approach/ict-utilization` | ICT活用 | クラウドとデータで会社の動きを見える化 |
| `/approach/work-style-reform` | 働き方改革 | 成果で働ける仕組みづくり |

各ページに `alternates: { canonical: '/そのパス' }` を付ける。

### 2-2. sitemap / robots

- `app/sitemap.ts`：全静的ページ＋ `lib/newsData.ts` の全slug（lastModified は記事の日付を Date に変換）
- `app/robots.ts`：全許可、`/api/` は禁止、`sitemap: 'https://tiad.ai/sitemap.xml'`

### 2-3. OG画像（SNS共有時の画像）

- `public/images/og.png`（1200×630）を作成する
- デザイン：ink（#0B0D1A）背景、左上に小さく等幅で「TiAD.LLC — Nagoya」、中央に白の極太英字「Tomorrow is Another Day.」（ピリオドは sky #0A85CC）、下部に1pxの線と「名古屋のDX推進・AI/RPA導入・インフラ保守」
- 作り方：HTMLを書いて Playwright でスクリーンショットを撮る（フォントはGoogle Fonts の Archivo / Zen Kaku Gothic New をHTML内で読み込む）。グラデーション・影・角丸は使わない

### 2-4. 構造化データ（JSON-LD）

- `components/JsonLd.tsx`（`<script type="application/ld+json">` を出す小さな部品）を作る
- `app/layout.tsx`：`Organization` と `ProfessionalService`（LocalBusiness系）を1つの `@graph` で出す
  - name: TiAD合同会社、alternateName: TiAD.LLC、url、logo（/images/logo.png）、email、foundingDate: 2019-04
  - address: PostalAddress（addressCountry JP、addressRegion 愛知県、addressLocality 名古屋市北区、streetAddress 八龍町1丁目77番地）
  - areaServed: 名古屋市・愛知県・日本
- `components/PageHero.tsx`：パンくずから `BreadcrumbList` を出す（Home → parents → 現在ページ）
- `app/news/[slug]/page.tsx`：`NewsArticle`（headline、datePublished、publisher = Organization）

### 2-5. お知らせ詳細ページをサーバー側に作り直す

- `'use client'` と `useParams` を外し、`params.slug` を受けるサーバーコンポーネントにする
- `generateStaticParams`（`getAllNewsSlugs`）と `generateMetadata` を追加
  - title：`${title}（${date}）`　例：「データセンターのVM移行業務を受注しました（2025.10.01）」
  - description：content の先頭80文字程度
- 表示・前後記事のロジックはそのまま保つ

### 2-6. お知らせタイトルの書き換え（`lib/newsData.ts`）

タイトルを「何を受注したか」が分かる形にする。本文の表記ゆれも直す（「仮想ルータ」→「仮想ルーター」、「VMware ESXi の」→「VMware ESXiの」）。

| id | 新しいタイトル |
|---|---|
| 26 | データセンターのFW切替業務を受注しました |
| 25, 23, 21, 2 | VMware ESXiのアップグレード業務を受注しました |
| 24 | データセンターのVMwareバージョンアップ業務を受注しました |
| 22, 20, 17, 13, 3, 5, 9 | データセンターのVM移行業務を受注しました |
| 19, 18, 16, 14, 7 | データセンターのクラウド仮想ルーター切替業務を受注しました |
| 15 | 公営集合住宅向け光サービス更新の申請業務を受注しました |
| 12 | データセンターのネットワーク監視機器切替業務を受注しました |
| 11 | データセンターのVLAN切替業務を受注しました |
| 10 | 静岡エリアの通信基地局保守業務を受注しました |
| 6 | 業務用ソフトウェア29台の一斉入替業務を受注しました |
| 1, 4, 8 | 変更なし |

id 6 の本文「守山区の大手水道工事会社」はそのまま（名古屋市守山区であることが地域の手がかりになる）。

### 2-7. 「名古屋」を自然に本文へ

- `/services` の PageHero の lead：「名古屋を拠点に、データセンターの保守から中小企業の業務改善まで。」のように1文入れる
- `/about` の PageHero の lead：「名古屋市北区から、ICTの力で明日の働き方をつくる会社です。」
- トップのヒーロー本文は変更しない（意匠優先）

### 2-8. 所在地の更新

- `app/about/page.tsx` companyInfo：`愛知県名古屋市北区八龍町1丁目77番地`
- `components/Footer.tsx`：`愛知県名古屋市北区八龍町1丁目77番地 ／ info@tiad.ai`（名古屋の時計と同じ行に並べる。2-9参照）

## 3. Works（実績）の修正

`app/services/portfolio/page.tsx` のデータを、お知らせに基づく内容に差し替える。年は該当するお知らせの年。

| year | category | title | description |
|---|---|---|---|
| 2019– | インフラ保守 | データセンターのVM移行・仮想ルーター切替・FW切替 | 大手通信事業者のデータセンターで、2019年から継続して受注。VMware ESXiのアップグレード、ネットワーク監視機器やVLANの切替も含む |
| 2019 | ソフトウェア開発 | 中小企業向けソフトウェアのリリース | 主要機能をパッケージ化し、業界特有のルールを事前に適用できる業務支援ソフトウェア |
| 2020 | 導入支援 | 業務用ソフトウェア29台の一斉入替 | 名古屋市守山区の水道工事会社。業務を止めない入替計画と実施 |
| 2020 | ネットワーク構築 | 2拠点間IPsec VPNの提供 | オンプレミスサーバー利用企業の新拠点展開に合わせ、設計から運用保守まで一元対応 |
| 2021 | 業務立ち上げ | コールセンター部門の立ち上げ | 大手通信会社のインターネット開通サポート。調査・折衝を専門スタッフが運用 |
| 2021 | インフラ保守 | 静岡エリアの通信基地局保守 | キャリア通信基地局の保守業務 |
| 2022 | 申請業務 | 公営集合住宅向け光サービス更新の申請 | 大手通信事業者の公営集合住宅向け光サービス更新に伴う申請業務 |

並び順は新しい年が上。「2019–」の表記は等幅のまま。

## 4. デザインの実装項目

### 4-1. 名古屋の現在時刻（フッター）

- `components/LocalClock.tsx`（client）を新設。日本時間を `Nagoya 14:32 JST` の形で表示、1分ごとに更新
- サーバーとクライアントで表示がずれないよう、マウント後に表示する（初期描画は幅を確保した空の span）
- 書式は `.eyebrow`（等幅・大文字）。フッター最下段の左に「所在地 ／ メール」、その右隣に時計を置く
- `prefers-reduced-motion` には関係しないので特別処理不要

### 4-2. 折（フォリオ）番号

- `components/SectionHead.tsx` に `index?: string` を追加。指定時は英字見出しの上に `.eyebrow` で `01` を表示（年表のカウンター `01 / 15` と同じ書式：等幅、tabular-nums）
- 付ける場所と番号
  - トップ：Services `01`、Approach `02`、News `03`（年表はカウンターを持つので付けない）
  - 会社概要：Message `01`、Vision（bg-paper セクションの見出し）`02`、Profile `03`、Team `04`
  - 事業案内：各事業 `01`〜`03`（事業セクションの見出し構造を確認し、SectionHead を使っていなければ同じ書式の span を置く）、Why TiAD `04`
- 下層ページの PageHero には付けない（パンくずがあるため）

### 4-3. 404ページ

- `app/not-found.tsx` を新設
- 構成：`.eyebrow` で「404 — Not Found」、日めくりと同じ大きな数字の意匠で「404」を表示（`DayCalendar` の CalendarPage を流用できなければ同じクラス構成で描く）、日本語で「この日は、まだ来ていません。」、英語の小さな補助文「The page you are looking for is not here yet.」、`.btn` でトップへ戻る
- metadata：title「ページが見つかりません」、`robots: { index: false }`

## 5. 守ること（デザインルール）

- グラデーション・角丸・影を使わない。線は1px、色はトークン（ink / brand / sky / paper / line / mute / sun）のみ
- 新しい文言はすべて日本語（英字ラベルは既存の書式に合わせる）
- 既存の挙動（年表のスクロール連動、写真の白黒→カラー、日めくり）を壊さない
- 画像を差し替える場合はファイル名を変える（キャッシュ対策、`docs/how-to-replace-images.md` 参照）

## 6. 確認手順（実装後）

1. `npm run build` が警告なく通る（`'use client'` ページで metadata を export していないか確認）
2. `npm run start` で全11ページ＋404＋ `/sitemap.xml` ＋ `/robots.txt` を開き、
   - `<title>` がページごとに異なる
   - `<script type="application/ld+json">` が出ている（JSONとして parse できる）
   - OG画像のURLが `https://tiad.ai/images/og.png` になっている
3. Playwright で 1440px / 390px のスクリーンショットを撮り、横スクロールが出ていない・コンソールエラーがないことを確認
4. 変更点を日本語のコミットメッセージでコミット（プッシュは確認後に行う）

## 7. 今回やらないこと（次回以降）

- Googleサーチコンソール・ビジネスプロフィールの登録（ユーザー側の作業）
- 事例ページ（Works）の詳細ページ化、技術メモ「Notes」の新設
- ページ切替の演出、お知らせ一覧の日付主体レイアウト
- 郵便番号・電話番号の構造化データへの追記（情報が揃ったら）
