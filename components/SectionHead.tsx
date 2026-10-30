'use client'

import { motion } from 'framer-motion'

interface SectionHeadProps {
  en: string
  ja: string
  desc?: string
  as?: 'h1' | 'h2'
  light?: boolean
  // 折（フォリオ）番号。指定すると英字見出しの上に表示する
  index?: string
}

// セクション見出し：大きな英字＋伸びる罫線＋日本語
export default function SectionHead({ en, ja, desc, as = 'h2', light = false, index }: SectionHeadProps) {
  const Heading = as

  return (
    <div className="mb-12 grid gap-5 md:mb-16 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        {index && <p className={`eyebrow m-0 mb-4 tabular-nums ${light ? '!text-brand-light' : ''}`}>{index}</p>}
        <Heading className="m-0">
          <span className="en block text-[clamp(44px,7vw,88px)]">{en}</span>
          <span className={`mt-3 flex items-center gap-3 text-sm font-bold tracking-[0.1em] ${light ? 'text-brand-light' : ''}`}>
            <motion.span
              className={`inline-block h-px w-10 origin-left ${light ? 'bg-brand-light' : 'bg-ink'}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
            />
            {ja}
          </span>
        </Heading>
      </div>
      {desc && <p className={`m-0 max-w-[440px] ${light ? 'text-brand-light' : 'text-mute'}`}>{desc}</p>}
    </div>
  )
}
