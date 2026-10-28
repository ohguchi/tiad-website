# 画像の差し替え方法

このドキュメントでは、サイトの写真を新しい画像に差し替える方法を説明します。

## 仕組み

サイト上の写真は、表示するときに自動で**彩度を少し落とし、やや淡いトーン**に整えられます（`app/globals.css` の `.photo-tone`）。
写真ごとの色味の差が目立ちにくくなります。**事前に画像を加工する必要はありません。**

## 手順

### 1. 画像を用意する

下の「使用している画像の一覧」のファイル名と**同じ名前**で保存します。

- 形式：PNG または JPG（一覧のファイル名に合わせる）
- サイズ：長辺 2048px 以上を推奨
- 表示サイズへの縮小やWebPへの変換は、Next.js が自動で行います

### 2. `public/images/` の同じ名前のファイルを上書きする

### 3. 表示を確認する

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認します。

## 使用している画像の一覧

| ファイル | 使っている場所 | 比率 |
|---|---|---|
| `public/images/service-datacenter.jpg` | トップ・事業案内（インフラ保守事業） | 16:10 |
| `public/images/service-apartment.jpg` | トップ・事業案内（通信コンサル事業） | 16:10 |
| `public/images/service-development.jpg` | トップ・事業案内（アプリ開発事業） | 16:10 |
| `public/images/approach-work.jpg` | トップ（アプローチ欄） | 4:5 |
| `public/images/approach/ai-iot-rpa.jpg` | AI・IoT・RPA ページ | 16:9 |
| `public/images/approach/work-reform.jpg` | 働き方改革ページ | 16:9 |
| `public/images/approach/ict-utilization.jpg` | ICT活用ページ | 16:9 |
| `public/images/vision-work.jpg` | 会社概要（ビジョン欄） | 3:2 |

## 画像生成AI用のプロンプト

### 全画像に共通で付けるスタイル指定（各プロンプトの末尾に付ける）

```
Documentary-style editorial photograph, shot on a full-frame camera with a 35mm lens, natural daylight, soft realistic shadows, muted neutral colors, clean composition with generous negative space, set in Japan, candid and unposed, high contrast between subject and background. No neon lighting, no holograms, no glowing lines, no floating UI elements, no text, no logos, no watermark.
```

### ネガティブプロンプト（入力欄があるツールのみ）

```
neon, hologram, glowing particles, futuristic HUD, purple lighting, lens flare, text, letters, logo, watermark, 3D render, illustration, cartoon, oversaturated
```

### 個別のプロンプト

**service-datacenter.jpg**
```
A Japanese infrastructure engineer in a plain navy work jacket checking cables on a server rack in a quiet data center aisle, side view, neat cable management, cool even overhead lighting, engineer occupies the right third of the frame.
```

**service-apartment.jpg**
```
A clean modern mid-rise apartment building in a residential district of Nagoya at blue hour, photographed from street level, some windows warmly lit, utility poles with fiber optic cables along the street in the foreground.
```

**service-development.jpg**
```
Two Japanese software developers discussing work at a simple wooden desk in a small office, one pointing at a laptop screen, screen content out of focus, sticky notes on the wall behind them, over-the-shoulder view.
```

**approach-work.jpg**
```
A Japanese office worker in business casual working on a laptop beside a large window in a bright minimal office, calm focused expression, a few green plants, soft morning light from the left.
```

**approach/ai-iot-rpa.jpg**
```
Close-up of small IoT sensors mounted on machinery in a tidy small Japanese manufacturing workshop, shallow depth of field, the left half of the frame is calm and out of focus to leave space for text.
```

**approach/work-reform.jpg**
```
A small Japanese team holding a short standing meeting around a whiteboard in an open office, natural poses, whiteboard content blurred, wide shot with empty space on the left side for text.
```

**approach/ict-utilization.jpg**
```
Top-down view of a tidy desk where a laptop sits next to a neat stack of paper documents and a closed binder, hands typing on the laptop, screen content out of focus, plenty of empty desk surface on the left for text.
```

**vision-work.jpg**
```
Japanese colleagues talking casually in a bright office hallway, walking side by side, natural laughter, shot from a slight distance, faces partly turned away from the camera.
```

## 注意事項

- AIで生成した人物を「当社の社員」として見せると、事実と異なる印象を与えます。人物が写る画像は雰囲気を伝えるイメージ写真として使い、社員紹介や代表挨拶には使わないでください。
- 画像の比率が一覧と違っても表示はされますが、端が切れることがあります。
- 同じファイル名で上書きすると、公開先や手元のサーバーに縮小済みの古い画像が残り、新しい画像が表示されないことがあります。その場合は、ファイル名を変えてからコード側の参照も合わせて変更してください（例：`ai-iot-rpa-bg.jpg` → `ai-iot-rpa.jpg`）。
- 端が切れて大事な部分が見えない場合は、切り抜き位置を指定できます。`Photo` なら `position`、ページ上部の画像（`PageHero`）なら `imagePosition` に、`"68% center"`（右寄りを残す）や `"center 30%"`（上寄りを残す）のように指定します。
