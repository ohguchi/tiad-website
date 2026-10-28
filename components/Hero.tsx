'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import DayCalendar from './DayCalendar'

const ease = [0.7, 0, 0.2, 1] as const

export default function Hero() {
  return (
    <section className="border-b border-line">
      <div className="wrap grid gap-10 pb-[72px] pt-14 lg:grid-cols-[1fr_216px] lg:items-end lg:gap-x-12 lg:pb-24 lg:pt-[72px]">
        <div>
          <div className="mb-7 flex flex-wrap gap-x-6 gap-y-2">
            <span className="eyebrow">TiAD LLC</span>
            <span className="eyebrow">Nagoya, Japan</span>
            <span className="eyebrow">Est. 2019</span>
          </div>
          <p className="en m-0 text-[clamp(54px,12vw,168px)]" aria-label="Tomorrow is Another Day.">
            {['Tomorrow', 'is Another', 'Day'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}
                >
                  {line}
                  {i === 2 && <span className="text-sky">.</span>}
                </motion.span>
              </span>
            ))}
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start lg:pt-[52px]">
          <DayCalendar />
        </div>

        <motion.div
          className="grid max-w-[640px] gap-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <h1 className="m-0 text-[clamp(22px,2.6vw,30px)] font-bold leading-[1.6] tracking-[0.04em]">
            ICTを最大限に活用し、
            <br />
            働き方の最適化を提案する。
          </h1>
          <p className="m-0 text-mute">
            人の持つ可能性を広げるために。人との結びつきを強くするために。
            <br className="hidden md:block" />
            私たちは新しい時代の技術を届けます。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="btn">
              TiADについて <span className="arr">→</span>
            </Link>
            <Link href="/services" className="btn btn-ghost">
              事業を見る <span className="arr">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
