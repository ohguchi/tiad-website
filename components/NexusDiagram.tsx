'use client'

import { motion } from 'framer-motion'

// NEXUS でつながる5つの業務
const modules = [
  { key: 'process', en: 'Process', ja: '工程管理', desc: '案件・工程表・発注・手配' },
  { key: 'people', en: 'People', ja: '従業員管理', desc: '従業員台帳・権限・休暇・車両/備品' },
  { key: 'time', en: 'Time', ja: '勤怠管理', desc: '打刻・申請承認・残業/有給の管理' },
  { key: 'report', en: 'Report', ja: '日報作成・経費精算', desc: '作業日報・協力会社日報・経費申請' },
  { key: 'accounting', en: 'Accounting', ja: '経理・会計', desc: '売上・支払・仕訳・月次決算' },
]

const ease = [0.7, 0, 0.2, 1] as const

function Hub({ size = 'lg' }: { size?: 'sm' | 'lg' }) {
  return (
    <div
      className={`relative grid shrink-0 place-items-center rounded-full bg-brand text-white ${
        size === 'lg' ? 'h-[176px] w-[176px]' : 'h-[120px] w-[120px]'
      }`}
    >
      <span className={`en ${size === 'lg' ? 'text-[38px]' : 'text-[26px]'}`}>NEXUS</span>
      {/* 差し色の点（ごく少量） */}
      <span aria-hidden className="absolute right-[22%] top-[20%] h-2 w-2 rounded-full bg-sky" />
    </div>
  )
}

function Node({ module, index }: { module: (typeof modules)[number]; index: number }) {
  return (
    <div className="border border-ink bg-white px-5 py-4">
      <p className="eyebrow m-0 tabular-nums">
        {String(index + 1).padStart(2, '0')} / {module.en}
      </p>
      <p className="m-0 mt-1 text-lg font-bold tracking-[0.06em]">{module.ja}</p>
      <p className="m-0 mt-1 text-sm text-mute">{module.desc}</p>
    </div>
  )
}

// PC で左右に並べる4業務の枠。高さをそろえて、線の位置（上下25%・75%）と合わせる
function Cell({ children }: { children: React.ReactNode }) {
  return <div className="flex h-[136px] items-center">{children}</div>
}

/**
 * NEXUS の概念図
 * PC：NEXUS を中心に、左右に2業務ずつ、下に経理・会計
 * スマホ：NEXUS を上に置き、5業務を縦の線でつなぐ
 */
export default function NexusDiagram() {
  const [process, people, time, report, accounting] = modules

  return (
    <div role="img" aria-label="工程管理・従業員管理・勤怠管理・日報作成と経費精算・経理と会計の5つの業務が、NEXUSを中心につながる図">
      {/* PC */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[minmax(0,1fr)_320px_minmax(0,1fr)]">
          <div className="col-start-1 row-start-1">
            <Cell>
              <div className="w-full">
                <Node module={process} index={0} />
              </div>
            </Cell>
          </div>
          <div className="col-start-1 row-start-2">
            <Cell>
              <div className="w-full">
                <Node module={time} index={2} />
              </div>
            </Cell>
          </div>

          {/* 中央：線と NEXUS */}
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
              <line x1={50} y1={50} x2={50} y2={100} stroke="#0B0D1A" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            </motion.svg>
            <div className="relative">
              <Hub />
            </div>
          </div>

          <div className="col-start-3 row-start-1">
            <Cell>
              <div className="w-full">
                <Node module={people} index={1} />
              </div>
            </Cell>
          </div>
          <div className="col-start-3 row-start-2">
            <Cell>
              <div className="w-full">
                <Node module={report} index={3} />
              </div>
            </Cell>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <motion.span
            aria-hidden
            className="block h-8 w-px origin-top bg-ink"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
          />
          <div className="w-full max-w-[320px]">
            <Node module={accounting} index={4} />
          </div>
        </div>
      </div>

      {/* スマホ */}
      <div className="md:hidden">
        <Hub size="sm" />
        {/* NEXUS の中心（幅120pxの半分）から縦の線を下ろす */}
        <div className="ml-[60px] h-6 w-px bg-ink" aria-hidden />
        <ul className="m-0 ml-[60px] grid list-none gap-4 border-l border-ink p-0 pl-5">
          {modules.map((m, i) => (
            <li key={m.key} className="relative">
              <span aria-hidden className="absolute -left-5 top-1/2 h-px w-5 bg-ink" />
              <Node module={m} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
