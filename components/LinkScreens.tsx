// LINK の画面イメージ（実際の画面ではなく、雰囲気を伝えるための簡易イメージ）
// データはすべて架空のサンプル

// PC 画面の枠（ブラウザ風）
function Browser({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden border border-ink bg-white text-[11px] leading-[1.6] md:text-xs">
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </div>
      <div className="flex items-center justify-between bg-brand px-4 py-2 text-white">
        <span className="en text-base">LINK</span>
        <span className="font-bold tracking-[0.06em]">{title}</span>
      </div>
      {children}
    </div>
  )
}

function Sidebar({ active }: { active: string }) {
  const items = ['案件', '顧客', 'イベント', '問い合わせ', 'タスク']
  return (
    <ul className="m-0 hidden w-24 shrink-0 list-none border-r border-line p-0 py-2 sm:block">
      {items.map((it) => (
        <li key={it} className={`px-3 py-1.5 ${it === active ? 'border-l-2 border-brand bg-paper font-bold text-brand' : 'text-mute'}`}>
          {it}
        </li>
      ))}
    </ul>
  )
}

function Chip({ children, tone = 'line' }: { children: React.ReactNode; tone?: 'brand' | 'line' | 'mute' }) {
  const cls = {
    brand: 'border-brand bg-brand text-white',
    line: 'border-brand text-brand',
    mute: 'border-line text-mute',
  }[tone]
  return <span className={`inline-block whitespace-nowrap border px-1.5 text-[10px] ${cls}`}>{children}</span>
}

// 01 営業：案件一覧
function SalesScreen() {
  const rows = [
    { name: 'サンプル案件A', customers: 128, status: '予約受付中', tone: 'brand' as const, owner: '営業1' },
    { name: 'サンプル案件B', customers: 86, status: 'アンケート中', tone: 'line' as const, owner: '営業2' },
    { name: 'サンプル案件C', customers: 214, status: '予約受付中', tone: 'brand' as const, owner: '営業1' },
    { name: 'サンプル案件D', customers: 42, status: '準備中', tone: 'mute' as const, owner: '営業3' },
  ]
  return (
    <Browser title="案件一覧">
      <div className="flex">
        <Sidebar active="案件" />
        <div className="min-w-0 flex-1 p-4">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-sm font-bold">案件一覧</span>
            <span className="bg-ink px-2.5 py-1 font-bold text-white">＋ 案件登録</span>
          </div>
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 border-b border-ink pb-1 text-mute sm:grid-cols-[1fr_auto_auto_auto]">
            <span>案件名</span>
            <span className="text-right">顧客数</span>
            <span>状況</span>
            <span className="hidden sm:block">担当</span>
          </div>
          {rows.map((r) => (
            <div key={r.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 border-b border-line py-2 sm:grid-cols-[1fr_auto_auto_auto]">
              <span className="truncate font-bold">{r.name}</span>
              <span className="text-right font-mono tabular-nums">{r.customers}</span>
              <Chip tone={r.tone}>{r.status}</Chip>
              <span className="hidden text-mute sm:block">{r.owner}</span>
            </div>
          ))}
        </div>
      </div>
    </Browser>
  )
}

// 02 エンドユーザー：イベント予約（スマホ）
function UserScreen() {
  const slots = [
    { time: '10:00 – 11:00', left: '残り3', state: 'open' },
    { time: '13:00 – 14:00', left: '満席', state: 'full' },
    { time: '15:00 – 16:00', left: '残り5', state: 'selected' },
  ]
  return (
    <div className="mx-auto w-full max-w-[250px] rounded-[28px] border border-ink bg-white p-2 text-[11px] leading-[1.6]">
      <div className="overflow-hidden rounded-[20px] border border-line">
        <div className="bg-brand px-4 pb-3 pt-4 text-white">
          <p className="m-0 text-[10px] text-brand-light">サンプル案件A</p>
          <p className="m-0 font-bold tracking-[0.04em]">説明会のご予約</p>
        </div>
        <div className="grid gap-3 p-3">
          <div className="flex gap-1.5">
            <span className="flex-1 border border-ink bg-ink py-1 text-center font-bold text-white">2/14 土</span>
            <span className="flex-1 border border-line py-1 text-center">2/15 日</span>
          </div>
          <div className="grid gap-1.5">
            {slots.map((s) => (
              <div
                key={s.time}
                className={`flex items-center justify-between border px-2.5 py-1.5 ${
                  s.state === 'selected' ? 'border-brand bg-paper font-bold text-brand' : s.state === 'full' ? 'border-line text-line' : 'border-line'
                }`}
              >
                <span className="font-mono tabular-nums">{s.time}</span>
                <span className="text-[10px]">{s.left}</span>
              </div>
            ))}
          </div>
          <span className="block bg-ink py-2 text-center font-bold text-white">予約する</span>
          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <span className="border border-line py-1 text-center">アンケート</span>
            <span className="border border-line py-1 text-center">コールバック予約</span>
          </div>
          <span className="block text-center text-[10px] text-mute">Webで問い合わせる →</span>
        </div>
      </div>
    </div>
  )
}

// 03 バックヤード：顧客詳細（履歴とタスク）
function BackyardScreen() {
  const history = [
    { date: '02.10', type: 'Web問い合わせ', note: '説明会の日程について' },
    { date: '02.11', type: 'コールバック', note: '架電済み・日程をご案内' },
    { date: '02.12', type: 'イベント予約', note: '2/14 15:00 説明会' },
    { date: '02.12', type: 'アンケート', note: '回答あり（5問）' },
  ]
  const tasks = [
    { title: '予約確認の連絡', done: true },
    { title: '説明会の資料を送付', done: false },
    { title: '説明会後のフォロー架電', done: false },
  ]
  return (
    <Browser title="顧客詳細">
      <div className="flex">
        <Sidebar active="顧客" />
        <div className="grid min-w-0 flex-1 gap-4 p-4 md:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,4fr)]">
          <div>
            <p className="eyebrow m-0 !text-[10px]">Customer</p>
            <p className="m-0 mt-1 text-sm font-bold">サンプル 顧客 様</p>
            <dl className="m-0 mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
              <dt className="text-mute">案件</dt>
              <dd className="m-0">サンプル案件A</dd>
              <dt className="text-mute">状況</dt>
              <dd className="m-0">
                <Chip tone="brand">説明会予約済み</Chip>
              </dd>
              <dt className="text-mute">担当</dt>
              <dd className="m-0">営業1</dd>
            </dl>
          </div>
          <div>
            <p className="eyebrow m-0 !text-[10px]">History</p>
            <ol className="m-0 mt-1 list-none border-l border-ink p-0 pl-3">
              {history.map((h, i) => (
                <li key={i} className="relative py-1">
                  <span className="absolute -left-[15.5px] top-[11px] h-1.5 w-1.5 rounded-full bg-brand" />
                  <span className="font-mono text-mute tabular-nums">{h.date}</span> <b>{h.type}</b>
                  <span className="block text-mute">{h.note}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow m-0 !text-[10px]">Tasks</p>
            <ul className="m-0 mt-1 list-none p-0">
              {tasks.map((t) => (
                <li key={t.title} className="flex items-center gap-2 border-b border-line py-1.5">
                  <span className={`grid h-3 w-3 shrink-0 place-items-center border text-[8px] ${t.done ? 'border-brand bg-brand text-white' : 'border-ink'}`}>
                    {t.done ? '✓' : ''}
                  </span>
                  <span className={t.done ? 'text-mute line-through' : ''}>{t.title}</span>
                </li>
              ))}
            </ul>
          </div>
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

export default function LinkScreens() {
  return (
    <div className="grid gap-10">
      <div className="grid gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] md:items-end">
        <figure className="m-0 grid gap-2.5">
          <SalesScreen />
          <Caption index={1} en="Sales" ja="営業：案件一覧" />
        </figure>
        <figure className="m-0 grid gap-2.5">
          <UserScreen />
          <Caption index={2} en="End User" ja="エンドユーザー：イベント予約" />
        </figure>
      </div>
      <figure className="m-0 grid gap-2.5">
        <BackyardScreen />
        <Caption index={3} en="Backyard" ja="バックヤード：顧客詳細" />
      </figure>
      <p className="m-0 text-xs text-mute">※画面はイメージです。表示している案件名・顧客名などはすべて架空のものです。</p>
    </div>
  )
}
