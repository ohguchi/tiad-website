'use client'

import { motion } from 'framer-motion'

// 会社の歩み（お知らせ・会社概要の実際の出来事から抜粋）
const events = [
  { date: '2019.04', lines: ['TiAD合同会社 設立'] },
  { date: '2019.08', lines: ['データセンターの', 'VM移行業務を受注'] },
  { date: '2019.09', lines: ['中小企業向け', 'ソフトウェアをリリース'] },
  { date: '2019.11', lines: ['クラウド仮想ルーター', '切替業務を受注'] },
  { date: '2020.12', lines: ['2拠点間IPsec VPN', 'を提供'] },
  { date: '2021.01', lines: ['コールセンター部門を', '立ち上げ'] },
]

/**
 * 年表の帯
 * 日めくりカレンダー（今日→明日）の続きとして、2019年からの歩みを並べ、
 * 最後を「TOMORROW」で締める。画面に入ると、線が左から一度だけ伸びる。
 */
export default function Timeline() {
  return (
    <section className="border-b border-line py-10 md:py-14" aria-label="TiADの歩み">
      <div className="wrap">
        <p className="eyebrow mb-7 mt-0">Since 2019 — Our days so far</p>

        {/* スマホでは横にスクロールして見る */}
        <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden">
          {/* 「画面に入ったか」は年表全体で判定する（幅ゼロから伸ばす線そのものでは判定できないため） */}
          <motion.ol
            className="relative m-0 grid min-w-max list-none auto-cols-[184px] grid-flow-col p-0 md:min-w-0 md:grid-flow-row md:grid-cols-7"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
          >
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px origin-left bg-ink"
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
              transition={{ duration: 1.6, ease: [0.7, 0, 0.2, 1] }}
            />
            {events.map((e) => (
              <li key={e.date} className="relative pr-5 pt-5">
                <span aria-hidden="true" className="absolute -top-[3px] left-0 h-[7px] w-[7px] bg-ink" />
                <time className="font-mono text-xs tracking-[0.08em] text-mute tabular-nums">{e.date}</time>
                {/* 意味の切れ目で改行する */}
                <p className="m-0 mt-2 text-[13px] leading-[1.7]">
                  {e.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </li>
            ))}
            <li className="relative pt-5">
              <span aria-hidden="true" className="absolute -top-[3px] left-0 h-[7px] w-[7px] bg-sky" />
              <span className="font-mono text-xs tracking-[0.08em] text-brand">TOMORROW</span>
              <p className="m-0 mt-2 font-display text-[15px] font-extrabold leading-[1.5] [font-stretch:112%]">
                Another day<span className="text-sky">.</span>
              </p>
            </li>
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
