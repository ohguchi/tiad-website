// NEXUS の画面イメージ（実際の画面ではなく、雰囲気を伝えるための簡易イメージ）
// データはすべて架空のサンプル

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
        <span className="en text-base">NEXUS</span>
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

// 01 工程管理：案件ごとの工程表
function ProcessScreen() {
  const days = Array.from({ length: 14 }, (_, i) => i + 1)
  // from / to は日付の列（1〜14日）。tone は棒の色
  const rows = [
    { label: 'サンプル工事A', head: true },
    { label: '試掘・事前調査', from: 1, to: 3, tone: 'done' },
    { label: '本工事（協力会社）', from: 4, to: 9, tone: 'sub' },
    { label: '写真台帳・完了報告', from: 10, to: 12, tone: 'main' },
    { label: 'サンプル工事B', head: true },
    { label: '道路使用・警備手配', from: 2, to: 4, tone: 'done' },
    { label: '本工事（自社班）', from: 5, to: 12, tone: 'main' },
  ]
  const toneClass: Record<string, string> = { done: 'bg-mute/40', sub: 'bg-sky', main: 'bg-brand' }

  return (
    <Browser tabs={['工程表', '案件', '発注', '手配']} active="工程表">
      <div className="overflow-x-auto">
        <div className="min-w-[540px] p-4">
          <div className="grid grid-cols-[140px_repeat(14,minmax(0,1fr))] border-b border-ink pb-1 font-mono text-[10px] text-mute">
            <span>案件 / 工程</span>
            {days.map((d) => (
              <span key={d} className="text-center tabular-nums">
                {d}
              </span>
            ))}
          </div>
          {rows.map((r) => (
            <div key={r.label} className="grid min-h-[30px] grid-cols-[140px_repeat(14,minmax(0,1fr))] items-center border-b border-dashed border-line">
              <span className={`truncate pr-2 ${r.head ? 'font-bold' : 'pl-3'}`}>{r.label}</span>
              {r.from && r.to && (
                <span className={`h-3.5 ${toneClass[r.tone!]}`} style={{ gridColumn: `${r.from + 1} / ${r.to + 2}` }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </Browser>
  )
}

// 02 現場：打刻・日報・経費（スマホ）
function FieldScreen() {
  const fields = [
    { k: '案件', v: 'サンプル工事A' },
    { k: '作業内容', v: '本工事 2日目／舗装復旧' },
    { k: '経費', v: '駐車場代 ¥800（領収書添付済）' },
  ]
  return (
    <div className="mx-auto w-full max-w-[250px] rounded-[28px] border border-ink bg-white p-2 text-[11px] leading-[1.6]">
      <div className="grid gap-3 rounded-[20px] border border-line p-3">
        <p className="eyebrow m-0 !text-[10px]">10.31 Sat</p>
        <p className="m-0 text-center font-mono text-[28px] tracking-[0.04em] tabular-nums">08:12</p>
        <div className="grid grid-cols-2 gap-1.5">
          <span className="border border-ink bg-ink py-1.5 text-center font-bold text-white">出勤</span>
          <span className="border border-ink py-1.5 text-center font-bold">退勤</span>
        </div>
        {fields.map((f) => (
          <div key={f.k} className="border-b border-line pb-1.5">
            <span className="block font-mono text-[10px] tracking-[0.08em] text-mute">{f.k}</span>
            {f.v}
          </div>
        ))}
        <span className="block bg-ink py-2 text-center font-bold text-white">日報を提出</span>
      </div>
    </div>
  )
}

// 03 経理：現場の入力から自動集計される案件別損益
function AccountingScreen() {
  const rows = [
    { name: 'サンプル工事A', sales: '4,800,000', labor: '1,120,000', outsource: '2,050,000', expense: '186,400', profit: '1,443,600' },
    { name: 'サンプル工事B', sales: '2,350,000', labor: '640,000', outsource: '980,000', expense: '72,300', profit: '657,700' },
  ]
  // 数字の出どころ（どの業務の入力から集計されたか）
  const Src = ({ children }: { children: React.ReactNode }) => (
    <span className="ml-1.5 inline-block border border-line px-1 font-mono text-[9px] text-mute">{children}</span>
  )
  const th = 'border-b border-ink px-2.5 py-1.5 text-right font-mono text-[10px] font-normal tracking-[0.08em] text-mute'
  const td = 'whitespace-nowrap border-b border-line px-2.5 py-2 text-right tabular-nums'

  return (
    <Browser tabs={['案件別損益', '仕訳', '支払締め', '月次締め']} active="案件別損益">
      <div className="overflow-x-auto p-4">
        <table className="w-full min-w-[620px] border-collapse">
          <thead>
            <tr>
              <th className={`${th} text-left`}>案件</th>
              <th className={th}>売上</th>
              <th className={th}>労務費</th>
              <th className={th}>外注費</th>
              <th className={th}>経費</th>
              <th className={th}>粗利</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name}>
                <td className={`${td} text-left font-bold`}>{r.name}</td>
                <td className={td}>{r.sales}</td>
                <td className={td}>
                  {r.labor}
                  <Src>勤怠・日報</Src>
                </td>
                <td className={td}>
                  {r.outsource}
                  <Src>発注</Src>
                </td>
                <td className={td}>
                  {r.expense}
                  <Src>経費精算</Src>
                </td>
                <td className={`${td} font-bold text-brand`}>{r.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default function NexusScreens() {
  return (
    <div className="grid gap-10">
      <div className="grid gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] md:items-end">
        <figure className="m-0 grid min-w-0 gap-2.5">
          <ProcessScreen />
          <Caption index={1} en="Process" ja="工程管理：案件ごとの工程表" />
        </figure>
        <figure className="m-0 grid gap-2.5">
          <FieldScreen />
          <Caption index={2} en="Field" ja="現場：打刻・日報・経費" />
        </figure>
      </div>
      <figure className="m-0 grid min-w-0 gap-2.5">
        <AccountingScreen />
        <Caption index={3} en="Accounting" ja="経理：現場の入力から自動集計される案件別損益" />
      </figure>
      <p className="m-0 text-xs text-mute">※画面はイメージです。表示している案件名・金額などはすべて架空のものです。</p>
    </div>
  )
}
