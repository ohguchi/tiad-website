'use client'

import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

// 画面に入ったら、少しだけ下から現れる（控えめな動き）
export default function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.7, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
