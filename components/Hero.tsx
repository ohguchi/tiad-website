'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import VideoHero from './VideoHero'
import { IconInfinity } from './Icons'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <VideoHero className="absolute inset-0" overlayOpacity={0.1} />

      {/* パララックス効果のあるコンテンツ */}
      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-4 lg:px-8 relative z-10 pt-20"
      >
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary-500 text-sm md:text-base tracking-[0.3em] mb-6 font-medium"
            >
              TOMORROW IS ANOTHER DAY
            </motion.p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-light-800">
              <motion.span
                className="block mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                ICTを最大限に活用し
              </motion.span>
              <motion.span
                className="block text-primary-500"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                働き方の最適化を提案
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-8 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-light-200 shadow-lg"
            >
              <span className="text-2xl md:text-4xl font-bold text-light-700">人財</span>
              <span className="text-2xl md:text-3xl text-secondary-500">×</span>
              <span className="text-2xl md:text-4xl font-bold text-light-700">テクノロジー</span>
              <span className="text-2xl md:text-3xl text-light-400">=</span>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <IconInfinity size={48} className="text-primary-500" />
              </motion.div>
            </motion.div>
            <p className="text-lg md:text-xl text-light-500 max-w-3xl mx-auto leading-relaxed">
              人の持つ可能性を広げるために、人との結びつきを強くするために
              <br className="hidden md:block" />
              私たちは新時代の技術を提供していきます
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                TiADとは
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="px-8 py-4 bg-white border-2 border-light-300 text-light-700 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-full transition-all duration-300 inline-block"
              >
                サービス一覧
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-light-400 mb-2 tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-light-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
