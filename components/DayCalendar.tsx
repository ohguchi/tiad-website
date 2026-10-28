'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const MONTH = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const LABEL = ['TODAY', 'TOMORROW']

// 日本時間の「今日」を求める
function jstToday() {
  const now = new Date()
  const jst = new Date(now.getTime() + (now.getTimezoneOffset() + 540) * 60000)
  return new Date(jst.getFullYear(), jst.getMonth(), jst.getDate())
}

function CalendarPage({ base, offset }: { base: Date; offset: number }) {
  const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + offset)
  const w = d.getDay()
  const dayColor = w === 0 ? 'text-sun' : w === 6 ? 'text-sky' : ''

  return (
    <>
      <span className="flex justify-between font-mono text-xs tracking-[0.1em]">
        <span>
          {d.getFullYear()}.{String(d.getMonth() + 1).padStart(2, '0')}
        </span>
        <span className={dayColor}>{WEEKDAY[w]}</span>
      </span>
      <span className={`self-center font-display text-[112px] font-extrabold leading-none tracking-[-0.05em] tabular-nums ${dayColor}`}>
        {d.getDate()}
      </span>
      <span className="border-t border-line pt-2.5 font-mono text-[11px] tracking-[0.14em] text-mute">
        {LABEL[offset] ?? 'ANOTHER DAY'} · {MONTH[d.getMonth()]}
      </span>
    </>
  )
}

/**
 * 日めくりカレンダー
 * 「Tomorrow is Another Day」にちなみ、今日のページが破れて明日になる。
 * 押すたびに次の日へ進む。
 */
export default function DayCalendar() {
  const reduce = useReducedMotion()
  // 日付はブラウザで決める（サーバーとの表示ずれを防ぐため、初回は空にしておく）
  const [base, setBase] = useState<Date | null>(null)
  const [offset, setOffset] = useState(0)
  const [tearing, setTearing] = useState(false)
  const busy = useRef(false)

  const next = useCallback(() => {
    if (busy.current) return
    if (reduce) {
      setOffset((n) => n + 1)
      return
    }
    busy.current = true
    setTearing(true)
  }, [reduce])

  useEffect(() => {
    setBase(jstToday())
  }, [])

  // 表示から少し待って、一度だけ自動でめくる
  useEffect(() => {
    if (!base) return
    const t = setTimeout(next, 1400)
    return () => clearTimeout(t)
  }, [base, next])

  const onTearEnd = () => {
    setOffset((n) => n + 1)
    setTearing(false)
    busy.current = false
  }

  const pageClass =
    'absolute inset-x-0 bottom-0 top-[22px] grid grid-rows-[auto_1fr_auto] border border-t-0 border-ink bg-white px-4 pb-4 pt-3.5 [backface-visibility:hidden] [transform-origin:50%_0]'

  return (
    <div className="flex flex-col items-start gap-3">
      <button
        type="button"
        onClick={next}
        className="relative aspect-[4/5] w-[216px] max-w-full cursor-pointer text-left [perspective:900px]"
        aria-label="日めくりカレンダー。押すと次の日へ進みます"
      >
        {/* 綴じ部分と綴じ穴 */}
        <span className="absolute inset-x-0 top-0 z-[3] flex h-[22px] items-center justify-center gap-6 bg-ink">
          <span className="h-[5px] w-[5px] rounded-full bg-white" />
          <span className="h-[5px] w-[5px] rounded-full bg-white" />
        </span>

        {base && (
          <>
            <span className={`${pageClass} z-[1]`}>
              <CalendarPage base={base} offset={offset + 1} />
            </span>
            <span
              className={`${pageClass} z-[2] ${tearing ? 'animate-tear' : ''}`}
              onAnimationEnd={onTearEnd}
            >
              <CalendarPage base={base} offset={offset} />
            </span>
          </>
        )}
      </button>
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute/60">Turn the page</span>
    </div>
  )
}
