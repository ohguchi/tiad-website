'use client'

import { motion } from 'framer-motion'

// IRIS を中心にめぐる4つの要素（投稿 → 規定 → 確認 → 横展開 の順。PC では時計回りに並ぶ）
const parts = [
  { key: 'post', en: 'Post', ja: '店舗の投稿', desc: '写真・キャプション・ハッシュタグ' },
  { key: 'guideline', en: 'Guideline', ja: '本部の規定', desc: '禁止事項・要確認・推奨事項' },
  { key: 'review', en: 'Review', ja: '本部の確認', desc: 'AIの評価を確定・フィードバック' },
  { key: 'share', en: 'Share', ja: '他店舗への横展開', desc: '高評価の投稿を好事例として共有' },
]

const ease = [0.7, 0, 0.2, 1] as const

// 中央の IRIS。目の虹彩に見立てて輪を重ねる
function Hub({ size = 'lg' }: { size?: 'sm' | 'lg' }) {
  return (
    <div
      className={`relative grid shrink-0 place-items-center rounded-full border border-brand bg-white ${
        size === 'lg' ? 'h-[184px] w-[184px]' : 'h-[120px] w-[120px]'
      }`}
    >
      <div className={`grid place-items-center rounded-full bg-brand text-white ${size === 'lg' ? 'h-[148px] w-[148px]' : 'h-[96px] w-[96px]'}`}>
        <span className={`en ${size === 'lg' ? 'text-[40px]' : 'text-[26px]'}`}>IRIS</span>
      </div>
      {/* 差し色の点（瞳のハイライト） */}
      <span aria-hidden className="absolute right-[24%] top-[22%] h-2 w-2 rounded-full bg-sky" />
    </div>
  )
}

function Node({ part, index }: { part: (typeof parts)[number]; index: number }) {
  return (
    <div className="border border-ink bg-white px-5 py-4">
      <p className="eyebrow m-0 tabular-nums">
        {String(index + 1).padStart(2, '0')} / {part.en}
      </p>
      <p className="m-0 mt-1 text-lg font-bold tracking-[0.06em]">{part.ja}</p>
      <p className="m-0 mt-1 text-sm text-mute">{part.desc}</p>
    </div>
  )
}

// PC で左右に並べる枠。高さをそろえて、線の位置（上下25%・75%）と合わせる
function Cell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[136px] items-center">
      <div className="w-full">{children}</div>
    </div>
  )
}

/**
 * IRIS の概念図
 * PC：IRIS を中心に、左に店舗側（投稿・横展開）、右に本部側（規定・確認）
 * スマホ：IRIS を上に置き、4つの要素を縦の線でつなぐ
 */
export default function IrisDiagram() {
  const [post, guideline, review, share] = parts

  return (
    <div role="img" aria-label="店舗の投稿・本部の規定・本部の確認・他店舗への横展開の4つが、IRISを中心につながる図">
      {/* PC */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[minmax(0,1fr)_320px_minmax(0,1fr)]">
          <div className="col-start-1 row-start-1">
            <Cell>
              <Node part={post} index={0} />
            </Cell>
          </div>
          <div className="col-start-1 row-start-2">
            <Cell>
              <Node part={share} index={3} />
            </Cell>
          </div>

          {/* 中央：線と IRIS */}
          <div className="relative col-start-2 row-span-2 row-start-1 grid place-items-center">
            <motion.svg
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
            >
              {[
                [0, 25],
                [0, 75],
                [100, 25],
                [100, 75],
              ].map(([x, y]) => (
                <line key={`${x}-${y}`} x1={x} y1={y} x2={50} y2={50} stroke="#0B0D1A" strokeWidth={1} vectorEffect="non-scaling-stroke" />
              ))}
            </motion.svg>
            <div className="relative">
              <Hub />
            </div>
          </div>

          <div className="col-start-3 row-start-1">
            <Cell>
              <Node part={guideline} index={1} />
            </Cell>
          </div>
          <div className="col-start-3 row-start-2">
            <Cell>
              <Node part={review} index={2} />
            </Cell>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 font-mono text-[11px] uppercase tracking-[0.1em] text-mute">
          <span>Stores — 店舗</span>
          <span className="text-right">Headquarters — 本部</span>
        </div>
      </div>

      {/* スマホ */}
      <div className="md:hidden">
        <Hub size="sm" />
        {/* IRIS の中心（幅120pxの半分）から縦の線を下ろす */}
        <div className="ml-[60px] h-6 w-px bg-ink" aria-hidden />
        <ul className="m-0 ml-[60px] grid list-none gap-4 border-l border-ink p-0 pl-5">
          {parts.map((p, i) => (
            <li key={p.key} className="relative">
              <span aria-hidden className="absolute -left-5 top-1/2 h-px w-5 bg-ink" />
              <Node part={p} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
