'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景画像 */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* オーバーレイグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-transparent" />
      </motion.div>

      {/* 動的なパーティクル効果 */}
      <div className="absolute inset-0 z-[1]">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary-400 text-lg md:text-xl tracking-[0.3em] mb-6"
            >
              TOMORROW IS ANOTHER DAY
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <motion.span
                className="block text-white mb-2"
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
            <motion.div
              className="inline-block mb-8"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(14, 165, 233, 0.3)',
                  '0 0 60px rgba(14, 165, 233, 0.6)',
                  '0 0 20px rgba(14, 165, 233, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-3xl md:text-5xl text-white font-bold px-8 py-4 bg-dark-900/50 backdrop-blur-sm rounded-2xl border border-primary-500/30">
                人財 × テクノロジー = <span className="text-primary-400">∞</span>
              </p>
            </motion.div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              人の持つ可能性を広げるために、人との結びつきを強くするために
              <br className="hidden md:block" />
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
                className="px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary-500/50 text-lg inline-block"
              >
                TiADとは
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-dark-900 font-semibold rounded-xl transition-all duration-300 text-lg inline-block"
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
          <span className="text-xs text-gray-400 mb-2 tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center">
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
