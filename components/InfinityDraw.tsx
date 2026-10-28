'use client'

import { motion } from 'framer-motion'

// レムニスケート（∞の曲線）を計算してSVGのパスにする
function buildPath() {
  const pts: string[] = []
  for (let i = 0; i <= 200; i++) {
    const t = (2 * Math.PI * i) / 200
    const den = 1 + Math.sin(t) ** 2
    const x = 120 + (108 * Math.cos(t)) / den
    const y = 50 + (108 * Math.sin(t) * Math.cos(t)) / den
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return `M${pts.join(' L')} Z`
}

const PATH = buildPath()

// 画面に入ると、∞が線で一筆描きされる（1回だけ）
export default function InfinityDraw({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="-6 -6 252 112" role="img" aria-label="無限大" className={`h-auto overflow-visible ${className}`}>
      <motion.path
        d={PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 2.2, ease: [0.7, 0, 0.2, 1] }}
      />
    </svg>
  )
}
