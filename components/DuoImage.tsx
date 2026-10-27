'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

interface DuoImageProps {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  caption?: string
}

// 中身（画像）だけを切り抜いて開く。外枠は切り抜かないので「画面に入ったか」の判定が正しく働く
const reveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  show: { clipPath: 'inset(0 0% 0 0)' },
}

// 紺のモノトーンに揃えた画像。画面に入ると左から四角く開いて現れる
export default function DuoImage({
  src,
  alt,
  className = '',
  sizes = '(min-width: 900px) 50vw, 100vw',
  priority = false,
  caption,
}: DuoImageProps) {
  const reduce = useReducedMotion()

  return (
    <motion.figure
      className={`relative m-0 ${className}`}
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
    >
      <motion.div
        className="duotone absolute inset-0"
        variants={reveal}
        transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1] }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
      {caption && (
        <figcaption className="absolute bottom-0 left-0 z-10 bg-white px-3 py-2 font-mono text-[11px] tracking-[0.1em]">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}
