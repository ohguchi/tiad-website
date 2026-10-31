// IRIS の画面イメージ（実際の画面ではなく、雰囲気を伝えるための簡易イメージ）
// データ・写真はすべて架空のサンプル

// PC 画面の枠（ブラウザ風）。上部にタブを並べる
function Browser({ tabs, active, children }: { tabs: string[]; active: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden border border-ink bg-white text-[11px] leading-[1.6] md:text-xs">
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </div>
      <div className="flex items-center gap-5 bg-brand px-4 py-2 text-white">
        <span className="en text-base">IRIS</span>
        <span className="flex gap-4 overflow-hidden whitespace-nowrap">
          {tabs.map((t) => (
            <span key={t} className={t === active ? 'font-bold' : 'text-brand-light'}>
              {t}
            </span>
          ))}
        </span>
      </div>
      {children}
    </div>
  )
}

// 写真の代わりの図柄（形の組み合わせで「投稿写真」らしく見せる）
function PhotoMock({ variant = 0, className = '' }: { variant?: number; className?: string }) {
  const shapes = [
    // 商品が並ぶ棚
    <>
      <span className="absolute bottom-[18%] left-[12%] h-[38%] w-[22%] rounded-t-md bg-brand/70" />
      <span className="absolute bottom-[18%] left-[39%] h-[50%] w-[22%] rounded-t-md bg-sky/70" />
      <span className="absolute bottom-[18%] left-[66%] h-[30%] w-[22%] rounded-t-md bg-brand/40" />
      <span className="absolute bottom-[14%] left-[8%] h-[4%] w-[84%] bg-ink/30" />
    </>,
    // 店舗の外観
    <>
      <span className="absolute bottom-0 left-[14%] h-[58%] w-[72%] bg-white/80" />
      <span className="absolute bottom-[58%] left-[10%] h-[10%] w-[80%] bg-brand/70" />
      <span className="absolute bottom-0 left-[40%] h-[30%] w-[20%] bg-brand/40" />
      <span className="absolute right-[12%] top-[10%] h-[14%] w-[14%] rounded-full bg-sky/60" />
    </>,
    // 人物（スタッフ）と商品
    <>
      <span className="absolute bottom-[34%] left-[22%] h-[20%] w-[20%] rounded-full bg-brand/50" />
      <span className="absolute bottom-0 left-[14%] h-[34%] w-[36%] rounded-t-full bg-brand/70" />
      <span className="absolute bottom-[16%] right-[14%] h-[34%] w-[28%] rounded-md bg-sky/70" />
    </>,
    // 料理・商品のアップ
    <>
      <span className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
      <span className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/70" />
      <span className="absolute left-[44%] top-[34%] h-[12%] w-[12%] rounded-full bg-brand/70" />
    </>,
  ]
  return (
    <div className={`relative aspect-square overflow-hidden bg-gradient-to-br from-brand-light/60 to-paper ${className}`} aria-hidden>
      {shapes[variant % shapes.length]}
    </div>
  )
}

type Tone = 'plus' | 'minus' | 'check' | 'mute'

function Chip({ children, tone }: { children: React.ReactNode; tone: Tone }) {
  const cls = {
    plus: 'border-brand bg-brand text-white',
    minus: 'border-ink text-ink',
    check: 'border-sky text-sky',
    mute: 'border-line text-mute',
  }[tone]
  return <span className={`inline-block whitespace-nowrap border px-1.5 text-[10px] ${cls}`}>{children}</span>
}

// 01 投稿一覧：店舗の投稿とAIの評価
function PostsScreen() {
  const posts = [
    { store: 'サンプル店舗A', score: 115, tone: 'plus' as const, status: '確認済み' },
    { store: 'サンプル店舗B', score: 105, tone: 'check' as const, status: '要確認' },
    { store: 'サンプル店舗C', score: 110, tone: 'plus' as const, status: '未確認' },
    { store: 'サンプル店舗D', score: 90, tone: 'minus' as const, status: '未確認' },
  ]
  return (
    <Browser tabs={['投稿一覧', '規定', '店舗', 'レポート']} active="投稿一覧">
      <div className="p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-bold">投稿一覧</span>
          <span className="flex gap-1.5">
            <Chip tone="plus">すべて</Chip>
            <Chip tone="mute">未確認</Chip>
            <Chip tone="mute">要確認</Chip>
            <Chip tone="mute">高評価</Chip>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {posts.map((p, i) => (
            <div key={p.store} className="border border-line">
              <PhotoMock variant={i} />
              <div className="grid gap-1 p-2">
                <span className="truncate font-bold">{p.store}</span>
                <span className="flex items-center justify-between gap-1">
                  <span className="font-mono text-sm font-bold tabular-nums">{p.score}</span>
                  <Chip tone={p.tone}>{p.status}</Chip>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  )
}

// 02 AI評価の詳細：どの規定に当てはまったか
function EvaluationScreen() {
  const items = [
    { kind: '推奨事項', code: 'R01', text: '商品が明るく、見やすく写っている', point: '+10', tone: 'plus' as const },
    { kind: '推奨事項', code: 'R02', text: '店舗名と地域のハッシュタグがある', point: '+5', tone: 'plus' as const },
    { kind: '要確認', code: 'G01', text: 'スタッフの顔が写っている（掲載の同意を確認）', point: '±0', tone: 'check' as const },
  ]
  return (
    <Browser tabs={['投稿一覧', '規定', '店舗', 'レポート']} active="投稿一覧">
      <div className="grid gap-4 p-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="grid content-start gap-2">
          <PhotoMock variant={2} />
          <p className="m-0 text-mute">新商品が入荷しました！スタッフおすすめの… #サンプル店舗A</p>
        </div>
        <div className="grid content-start gap-3">
          <div className="flex items-end justify-between border-b border-ink pb-2">
            <span>
              <span className="eyebrow block !text-[10px]">AI Score</span>
              <span className="font-mono text-[28px] font-bold leading-none tabular-nums">115</span>
              <span className="ml-1 text-mute">/ 基準点 100</span>
            </span>
            <Chip tone="check">要確認 1件</Chip>
          </div>
          <ul className="m-0 grid list-none gap-2 p-0">
            {items.map((it) => (
              <li key={it.code} className="grid grid-cols-[auto_1fr_auto] items-start gap-2 border-b border-line pb-2">
                <Chip tone={it.tone}>{it.kind}</Chip>
                <span>
                  <span className="font-mono text-mute">{it.code}</span> {it.text}
                </span>
                <span className="font-mono font-bold tabular-nums">{it.point}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-2">
            <span className="bg-ink py-1.5 text-center font-bold text-white">評価を確定</span>
            <span className="border border-ink py-1.5 text-center font-bold">却下（誤検知）</span>
          </div>
        </div>
      </div>
    </Browser>
  )
}

// 03 月次レポート：店舗別のランキング
function RankingScreen() {
  const rows = [
    { rank: 1, store: 'サンプル店舗A', posts: 18, plus: 24, minus: 0, score: 112 },
    { rank: 2, store: 'サンプル店舗C', posts: 15, plus: 19, minus: 1, score: 108 },
    { rank: 3, store: 'サンプル店舗B', posts: 12, plus: 11, minus: 1, score: 103 },
    { rank: 4, store: 'サンプル店舗D', posts: 9, plus: 4, minus: 3, score: 94 },
  ]
  const max = 120
  return (
    <Browser tabs={['投稿一覧', '規定', '店舗', 'レポート']} active="レポート">
      <div className="overflow-x-auto p-4">
        <div className="min-w-[320px]">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-bold">店舗別ランキング</span>
            <span className="font-mono text-mute">2026.11</span>
          </div>
          {rows.map((r) => (
            <div key={r.store} className="grid grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-x-3 border-b border-line py-2">
              <span className={`font-mono font-bold tabular-nums ${r.rank === 1 ? 'text-brand' : ''}`}>{r.rank}</span>
              <span className="min-w-0">
                <span className="block truncate font-bold">{r.store}</span>
                <span className="mt-1 block h-1.5 bg-paper">
                  <span className="block h-full bg-brand" style={{ width: `${(r.score / max) * 100}%` }} />
                </span>
                <span className="mt-0.5 block text-[10px] text-mute">
                  投稿 {r.posts}件 ・ 加点 {r.plus} ・ 違反 {r.minus}
                </span>
              </span>
              <span className="font-mono text-sm font-bold tabular-nums">{r.score}</span>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  )
}

function Caption({ index, en, ja }: { index: number; en: string; ja: string }) {
  return (
    <figcaption className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-mute">
      <b className="font-medium text-ink">
        {String(index).padStart(2, '0')} / {en}
      </b>
      <span>{ja}</span>
    </figcaption>
  )
}

export default function IrisScreens() {
  return (
    <div className="grid gap-10">
      <figure className="m-0 grid min-w-0 gap-2.5">
        <PostsScreen />
        <Caption index={1} en="Posts" ja="投稿一覧：店舗の投稿とAIのスコア" />
      </figure>
      <div className="grid gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <figure className="m-0 grid min-w-0 content-start gap-2.5">
          <EvaluationScreen />
          <Caption index={2} en="Evaluation" ja="AI評価：当てはまった規定と理由" />
        </figure>
        <figure className="m-0 grid min-w-0 content-start gap-2.5">
          <RankingScreen />
          <Caption index={3} en="Report" ja="月次レポート：店舗別ランキング" />
        </figure>
      </div>
      <p className="m-0 text-xs text-mute">※画面はイメージです。表示している店舗名・写真・スコアなどはすべて架空のものです。</p>
    </div>
  )
}
