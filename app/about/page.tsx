'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="pt-0 pb-0">
      {/* ヒーローセクション */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team.png"
            alt="About Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900" />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 lg:px-8 relative z-10 py-32"
        >
          <ScrollReveal>
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary-400 text-lg md:text-xl mb-4 tracking-widest"
              >
                ABOUT US
              </motion.p>
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                  TiADとは
                </span>
              </h1>
              <p className="text-2xl text-gray-300">What TiAD</p>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">

        {/* メインコンテンツ */}
        <div className="max-w-5xl mx-auto">
          <ParallaxSection speed={0.3}>
            <ScrollReveal>
              <section className="mb-24">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                  <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                    私たちの目指す働き方改革
                  </span>
                </h2>
                <div className="space-y-6">
                  <ScrollReveal delay={0.2}>
                    <p className="text-gray-200 leading-relaxed text-xl">
                      今日本ではしきりに『働き方改革』が叫ばれています。
                      特に２０１９年から働き方改革関連法が導入されたことにより一段と『働き方』について考える必要が出てきたのではないでしょうか？
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4}>
                    <p className="text-gray-200 leading-relaxed text-xl">
                      ただ現在の働き方改革は時間外労働の制限や有給休暇取得の義務化など「労働時間の削減」にばかり目を向けられており、このままでは本来目指すべき「労働力不足の解消」「生産性の向上」を図ることがますます難しくなってしまうのではないかと思います。
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.6}>
                    <p className="text-gray-200 leading-relaxed text-xl">
                      私たちはAI・IoT・RPAなど新しい労働力となりうるICT技術を用いて、まずは労働そのものの削減、そして人がすべき業務の最適化を提案することが真の働き方改革へとつながっていくと考えています。
                    </p>
                  </ScrollReveal>
                </div>
              </section>
            </ScrollReveal>
          </ParallaxSection>

          {/* コンセプトセクション - 画像付き */}
          <section className="relative rounded-3xl overflow-hidden mb-24">
            <div className="absolute inset-0">
              <Image
                src="/images/vision.png"
                alt="Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark-900/80" />
            </div>

            <div className="relative z-10 p-12 md:p-16">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-white">
                  <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    人財 × テクノロジー = ∞
                  </span>
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <ScrollReveal delay={0.2}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <div className="text-5xl md:text-6xl font-bold text-primary-400 mb-6">人財</div>
                    <p className="text-gray-300 text-lg">
                      人の持つ可能性を広げるために
                    </p>
                  </motion.div>
                </ScrollReveal>
                <div className="flex items-center justify-center">
                  <ScrollReveal delay={0.3}>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="text-5xl md:text-6xl text-primary-500"
                    >
                      ×
                    </motion.div>
                  </ScrollReveal>
                </div>
                <ScrollReveal delay={0.4}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <div className="text-5xl md:text-6xl font-bold text-primary-400 mb-6">テクノロジー</div>
                    <p className="text-gray-300 text-lg">
                      人との結びつきを強くするために
                    </p>
                  </motion.div>
                </ScrollReveal>
              </div>
              <div className="text-center mt-12">
                <ScrollReveal delay={0.5}>
                  <motion.div
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(14, 165, 233, 0.5)',
                        '0 0 60px rgba(14, 165, 233, 0.8)',
                        '0 0 20px rgba(14, 165, 233, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-7xl md:text-9xl font-bold text-primary-500 mb-6">= ∞</div>
                  </motion.div>
                  <p className="text-gray-200 text-xl">
                    私たちは新時代の技術を提供していきます
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* ビジョンセクション */}
          <ParallaxSection speed={0.2}>
            <section>
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white">
                  <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                    私たちのビジョン
                  </span>
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ScrollReveal delay={0.2} direction="up">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">ICTを最大限に活用</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      最新のICT技術を活用し、業務効率化と生産性向上を実現します。
                    </p>
                  </motion.div>
                </ScrollReveal>
                <ScrollReveal delay={0.4} direction="up">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">働き方の最適化</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      単なる労働時間の削減ではなく、真の働き方改革を実現します。
                    </p>
                  </motion.div>
                </ScrollReveal>
                <ScrollReveal delay={0.6} direction="up">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">持続可能な成長</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      人とテクノロジーの融合により、持続可能な成長を支援します。
                    </p>
                  </motion.div>
                </ScrollReveal>
              </div>
            </section>
          </ParallaxSection>
        </div>
      </div>
    </div>
  )
}
