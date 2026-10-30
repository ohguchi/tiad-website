'use client'

import { motion } from 'framer-motion'

// LINK でつながる3者（営業・バックヤード・エンドユーザー）
const roles = [
  { key: 'sales', en: 'Sales', ja: '営業', flow: '案件・顧客を登録' },
  { key: 'backyard', en: 'Backyard', ja: 'バックヤード', flow: '履歴・タスクを管理' },
  { key: 'user', en: 'End User', ja: 'エンドユーザー', flow: '予約・アンケート・問い合わせ' },
]

const ease = [0.7, 0, 0.2, 1] as const

// 3者をつなぐ線（画面に入ると伸びる）
function Line({ vertical = false, delay = 0 }: { vertical?: boolean; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className={`block bg-ink ${vertical ? 'h-10 w-px origin-top' : 'h-px flex-1 origin-left'}`}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease }}
    />
  )
}

function Hub({ size = 'lg' }: { size?: 'sm' | 'lg' }) {
  return (
    <div
      className={`relative grid shrink-0 place-items-center rounded-full bg-brand text-white ${
        size === 'lg' ? 'h-[168px] w-[168px]' : 'h-[120px] w-[120px]'
      }`}
    >
      <span className={`en ${size === 'lg' ? 'text-[44px]' : 'text-[32px]'}`}>LINK</span>
      {/* 差し色の点（ごく少量） */}
      <span aria-hidden className="absolute right-[18%] top-[18%] h-2 w-2 rounded-full bg-sky" />
    </div>
  )
}

function Node({ role, index }: { role: (typeof roles)[number]; index: number }) {
  return (
    <div className="border border-ink bg-white px-5 py-4">
      <p className="eyebrow m-0 tabular-nums">
        {String(index + 1).padStart(2, '0')} / {role.en}
      </p>
      <p className="m-0 mt-1 text-lg font-bold tracking-[0.06em]">{role.ja}</p>
      <p className="m-0 mt-1 text-sm text-mute">{role.flow}</p>
    </div>
  )
}

/**
 * LINK の概念図
 * PC：営業 ─ LINK ─ バックヤード、LINK の下にエンドユーザー
 * スマホ：LINK を上に置き、3者を縦の線でつなぐ
 */
export default function LinkDiagram() {
  const [sales, backyard, user] = roles

  return (
    <div role="img" aria-label="営業・バックヤード・エンドユーザーの3者が、LINKを中心につながる図">
      {/* PC */}
      <div className="hidden md:block">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <Node role={sales} index={0} />
          <div className="flex w-[360px] items-center">
            <Line />
            <Hub />
            <Line delay={0.15} />
          </div>
          <Node role={backyard} index={1} />
        </div>
        <div className="flex flex-col items-center">
          <Line vertical delay={0.3} />
          <div className="w-full max-w-[320px]">
            <Node role={user} index={2} />
          </div>
        </div>
      </div>

      {/* スマホ */}
      <div className="md:hidden">
        <Hub size="sm" />
        {/* LINK の中心（幅120pxの半分）から縦の線を下ろす */}
        <div className="ml-[60px] h-6 w-px bg-ink" aria-hidden />
        <ul className="m-0 ml-[60px] grid list-none gap-4 border-l border-ink p-0 pl-5">
          {roles.map((r, i) => (
            <li key={r.key} className="relative">
              <span aria-hidden className="absolute -left-5 top-1/2 h-px w-5 bg-ink" />
              <Node role={r} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
