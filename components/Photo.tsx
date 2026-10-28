'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useInView } from 'framer-motion'

interface PhotoProps {
  src: string
  alt: string
  // 写真と撮影メモ全体にかけるクラス（並び順など）
  className?: string
  // 写真の枠にかけるクラス（縦横比や大きさ）
  frameClassName?: string
  sizes?: string
  priority?: boolean
  // 切り抜くときに残したい位置（例：'70% center' なら右寄りを残す）
  position?: string
  // 写真の下に添える撮影メモ（title：事業名など、scene：場面）
  caption?: { title: string; scene: string }
}

/**
 * サイト共通の写真
 * 普段は白黒で、画面の中央あたりに来ると色が戻る（マウスを乗せても戻る）。
 * 四隅に撮影・印刷の目印（トンボ）を入れ、下に撮影メモを添える。
 */
export default function Photo({
  src,
  alt,
  className = '',
  frameClassName = '',
  sizes = '(min-width: 900px) 50vw, 100vw',
  priority = false,
  position = 'center',
  caption,
}: PhotoProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  // 画面の上下30%を除いた中央の帯に入っている間だけ「色を戻す」
  const lit = useInView(frameRef, { margin: '-30% 0px -30% 0px' })

  return (
    <figure className={`group m-0 grid min-w-0 content-start gap-2.5 ${className}`}>
      <div ref={frameRef} data-lit={lit} className={`photo-tone ${frameClassName}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" style={{ objectPosition: position }} />
      </div>
      {caption && (
        <figcaption className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-mute">
          <b className="font-medium text-ink">{caption.title}</b>
          <span>{caption.scene}</span>
        </figcaption>
      )}
    </figure>
  )
}
