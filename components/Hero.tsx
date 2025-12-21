'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import VideoBackground from './VideoBackground'
import AnimatedBackground from './AnimatedBackground'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 動的な背景 */}
      <VideoBackground
        imageSrc="/images/hero-pattern.svg"
        overlay={true}
        className="absolute inset-0"
      >
        <AnimatedBackground />
      </VideoBackground>

      {/* パララックス効果のあるコンテンツ */}
      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
              <motion.span
                className="block text-white mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                ICTを最大限に活用し
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
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
            <motion.p
              className="text-2xl md:text-4xl text-gray-200 mb-8 leading-relaxed font-light"
              animate={{
                textShadow: [
                  '0 0 20px rgba(14, 165, 233, 0.5)',
                  '0 0 30px rgba(14, 165, 233, 0.8)',
                  '0 0 20px rgba(14, 165, 233, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              人財 × テクノロジー = ∞
            </motion.p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              人の持つ可能性を広げるために
              <br />
              人との結びつきを強くするために
              <br />
              私たちは新時代の技術を提供していきます
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary-500/50 text-lg"
              >
                TiADとは
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-10 py-5 bg-transparent border-2 border-primary-500 text-primary-400 hover:bg-primary-600 hover:text-white hover:border-primary-600 font-semibold rounded-xl transition-all duration-300 text-lg"
              >
                お問い合わせ
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
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


