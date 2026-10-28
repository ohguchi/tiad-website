'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { timelineEvents } from '@/lib/timelineData'

// 上部に固定しているヘッダーの高さ（Header.tsx の h-[68px] と合わせる）
const HEADER_H = 68

/**
 * 年表の帯
 * 年表の区間ではページが止まり、下へのスクロールが横の動きに変わる。
 * 縦線（NOW）を通り過ぎた出来事が黒くなり、右上の年が進む。最後は「TOMORROW」で止まる。
 */
export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLOListElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)
  const progressRef = useRef<HTMLSpanElement>(null)
  const layoutRef = useRef({ distance: 0, playhead: 0, padLeft: 0 })
  const [current, setCurrent] = useState(0)
  const [playhead, setPlayhead] = useState(0)

  const total = timelineEvents.length + 1 // 最後の TOMORROW を含む

  // スクロール位置から、年表をどれだけ横に進めるかを決める
  const update = useCallback(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return
    const { distance, playhead, padLeft } = layoutRef.current
    const top = section.getBoundingClientRect().top - HEADER_H
    const p = distance > 0 ? Math.min(1, Math.max(0, -top / distance)) : 1
    const x = p * distance
    track.style.transform = `translate3d(${-x}px,0,0)`

    // トラック上での NOW の位置。これより左にある出来事は「過ぎた日」
    const now = x + playhead - padLeft
    if (fillRef.current) fillRef.current.style.width = `${Math.max(0, now)}px`
    if (progressRef.current) progressRef.current.style.width = `${p * 100}%`

    let index = 0
    track.querySelectorAll<HTMLElement>('[data-item]').forEach((item) => {
      if (item.offsetLeft <= now) index = Number(item.dataset.item)
    })
    setCurrent(index)
  }, [])

  // 画面幅に合わせて、NOW の位置と横に動く距離を計算する
  const layout = useCallback(() => {
    const section = sectionRef.current
    const sticky = stickyRef.current
    const stage = stageRef.current
    const track = trackRef.current
    if (!section || !sticky || !stage || !track) return
    const vw = document.documentElement.clientWidth
    const wrap = track.parentElement as HTMLElement
    const padLeft =
      wrap.getBoundingClientRect().left - stage.getBoundingClientRect().left + parseFloat(getComputedStyle(wrap).paddingLeft)
    const ph = Math.round(vw * (vw < 768 ? 0.42 : 0.38))
    const items = track.querySelectorAll<HTMLElement>('[data-item]')
    const last = items[items.length - 1]
    // 最後の項目（TOMORROW）が NOW の線に届くまでの距離
    const distance = Math.max(0, padLeft + last.offsetLeft - ph + 1)
    layoutRef.current = { distance, playhead: ph, padLeft }
    setPlayhead(ph)
    // 横に動く距離の分だけ区間を縦に伸ばす（スクロール量と横の移動量を 1:1 にする）
    section.style.height = `${sticky.offsetHeight + distance}px`
    update()
  }, [update])

  useEffect(() => {
    layout()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', layout)
    // フォントの読み込みで文字幅が変わったら計算し直す
    document.fonts?.ready.then(layout)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', layout)
    }
  }, [layout, update])

  const isTomorrow = current === total - 1
  const yearLabel = isTomorrow ? 'TOMORROW' : timelineEvents[current].date.slice(0, 4)

  return (
    <section ref={sectionRef} className="relative border-b border-line" aria-label="TiADの歩み">
      <div
        ref={stickyRef}
        className="sticky top-[68px] flex h-[calc(100svh-68px)] max-h-[860px] min-h-[480px] flex-col justify-center overflow-hidden"
      >
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 md:mb-14">
            <p className="eyebrow m-0">Since 2019 — Our days so far</p>
            <span
              className={`inline-block min-w-[4.2ch] font-display font-extrabold leading-[.85] tracking-[-0.04em] tabular-nums [font-stretch:112%] ${
                isTomorrow ? 'text-[clamp(40px,6vw,84px)] text-brand' : 'text-[clamp(64px,11vw,150px)]'
              }`}
              aria-live="polite"
            >
              {yearLabel}
            </span>
          </div>
        </div>

        <div ref={stageRef} className="relative w-full">
          {/* NOW の縦線 */}
          <span
            aria-hidden="true"
            className="absolute -bottom-[18px] -top-[22px] z-[3] w-px bg-brand"
            style={{ left: playhead }}
          >
            <span className="absolute -top-[18px] left-1.5 font-mono text-[10px] tracking-[0.14em] text-brand">NOW</span>
          </span>

          <div className="wrap">
            <ol ref={trackRef} className="relative m-0 flex w-max list-none p-0 will-change-transform">
              {/* 未来側の線と、過ぎた日々の線 */}
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line" />
              <span ref={fillRef} aria-hidden="true" className="absolute left-0 top-0 h-px w-0 bg-ink" />

              {timelineEvents.map((e, i) => {
                const past = i <= current
                return (
                  <li
                    key={`${e.date}-${i}`}
                    data-item={i}
                    className={`relative w-[196px] pr-6 pt-5 transition-colors duration-500 md:w-[248px] ${past ? 'text-ink' : 'text-mute/50'}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute -top-[3px] left-0 h-[7px] w-[7px] border transition-colors duration-300 ${
                        past ? 'border-ink bg-ink' : 'border-mute/50 bg-white'
                      }`}
                    />
                    <time className={`block font-mono text-xs tracking-[0.08em] tabular-nums ${past ? 'text-mute' : ''}`}>{e.date}</time>
                    <p className="m-0 mt-2 text-[13px] leading-[1.7]">
                      {e.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </li>
                )
              })}

              <li data-item={total - 1} className="relative w-[196px] pt-5 md:w-[248px]">
                <span
                  aria-hidden="true"
                  className={`absolute -top-[3px] left-0 h-[7px] w-[7px] border border-sky ${isTomorrow ? 'bg-sky' : 'bg-white'}`}
                />
                <span className="block font-mono text-xs tracking-[0.08em] text-brand">TOMORROW</span>
                <p className="m-0 mt-2 font-display text-[15px] font-extrabold leading-[1.5] [font-stretch:112%]">
                  Another day<span className="text-sky">.</span>
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="wrap">
          <div className="mt-12 flex items-center justify-between gap-4 md:mt-14">
            <span className="eyebrow tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span aria-hidden="true" className="relative h-px w-full max-w-[240px] bg-line">
              <span ref={progressRef} className="absolute inset-y-0 left-0 w-0 bg-ink" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
