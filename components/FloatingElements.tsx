'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 浮遊する装飾要素（3個に削減） */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400 rounded-full"
          style={{
            left: `${25 + i * 25}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* 大きな浮遊する円（アニメーション時間を長くして負荷軽減） */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary-500/30 rounded-full"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-primary-400/20 rounded-full"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

