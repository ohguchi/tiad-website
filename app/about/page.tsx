'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import SectionDivider from '@/components/SectionDivider'
import { IconComputer, IconClock, IconRocket, IconInfinity } from '@/components/Icons'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="pt-0 pb-0">
      {/* ヒーローセクション */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary-50 via-white to-white"
      >
        {/* 装飾 */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary-100/50 to-primary-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

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
                className="text-primary-500 text-sm md:text-base mb-4 tracking-widest font-medium"
              >
                ABOUT US
              </motion.p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light-800">
                TiADとは
              </h1>
              <p className="text-lg text-light-500">What TiAD</p>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>

      <SectionDivider variant="diagonal" color="#ffffff" />

      <div className="container mx-auto px-4 lg:px-8 py-16 bg-white">

        {/* メインコンテンツ */}
        <div className="max-w-4xl mx-auto">
          <ParallaxSection speed={0.1}>
            <ScrollReveal>
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-light-800">
                  私たちの目指す<span className="text-primary-500">働き方改革</span>
                </h2>
                <div className="space-y-6">
                  <ScrollReveal delay={0.2}>
                    <p className="text-light-600 leading-relaxed text-lg">
                      今日本ではしきりに『働き方改革』が叫ばれています。
                      特に２０１９年から働き方改革関連法が導入されたことにより一段と『働き方』について考える必要が出てきたのではないでしょうか？
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4}>
                    <p className="text-light-600 leading-relaxed text-lg">
                      ただ現在の働き方改革は時間外労働の制限や有給休暇取得の義務化など「労働時間の削減」にばかり目を向けられており、このままでは本来目指すべき「労働力不足の解消」「生産性の向上」を図ることがますます難しくなってしまうのではないかと思います。
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.6}>
                    <p className="text-light-600 leading-relaxed text-lg">
                      私たちはAI・IoT・RPAなど新しい労働力となりうるICT技術を用いて、まずは労働そのものの削減、そして人がすべき業務の最適化を提案することが真の働き方改革へとつながっていくと考えています。
                    </p>
                  </ScrollReveal>
                </div>
              </section>
            </ScrollReveal>
          </ParallaxSection>

          {/* コンセプトセクション */}
          <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl p-10 md:p-14 mb-20 border border-light-200 overflow-hidden">
            {/* 動的装飾 */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-primary-200/30 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary-200/30 rounded-full blur-2xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <ScrollReveal>
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <IconInfinity size={80} className="text-primary-500" />
                </motion.div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-light-800">
                人財 × テクノロジー = <span className="text-primary-500">∞</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
              <ScrollReveal delay={0.2}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">人財</div>
                  <p className="text-light-500">
                    人の持つ可能性を広げるために
                  </p>
                </motion.div>
              </ScrollReveal>
              <div className="flex items-center justify-center">
                <ScrollReveal delay={0.3}>
                  <motion.span
                    className="text-4xl md:text-5xl text-secondary-500 font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ×
                  </motion.span>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={0.4}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-4">テクノロジー</div>
                  <p className="text-light-500">
                    人との結びつきを強くするために
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>
            <div className="text-center mt-10">
              <ScrollReveal delay={0.5}>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-6xl md:text-8xl font-bold text-primary-500 mb-4">= ∞</div>
                </motion.div>
                <p className="text-light-600 text-lg">
                  私たちは新時代の技術を提供していきます
                </p>
              </ScrollReveal>
            </div>
          </section>

          <SectionDivider variant="wave" color="#fafafa" />

          {/* ビジョンセクション */}
          <ParallaxSection speed={0.1}>
            <section className="py-16">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-light-800">
                  私たちの<span className="text-primary-500">ビジョン</span>
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <IconComputer size={32} className="text-blue-500" />,
                    title: 'ICTを最大限に活用',
                    desc: '最新のICT技術を活用し、業務効率化と生産性向上を実現します。',
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: <IconClock size={32} className="text-emerald-500" />,
                    title: '働き方の最適化',
                    desc: '単なる労働時間の削減ではなく、真の働き方改革を実現します。',
                    gradient: 'from-emerald-500 to-teal-500'
                  },
                  {
                    icon: <IconRocket size={32} className="text-violet-500" />,
                    title: '持続可能な成長',
                    desc: '人とテクノロジーの融合により、持続可能な成長を支援します。',
                    gradient: 'from-violet-500 to-purple-500'
                  },
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.15} direction="up">
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-2xl p-8 border border-light-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg h-full"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 text-white`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-light-800 mb-3">{item.title}</h3>
                      <p className="text-light-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ParallaxSection>
        </div>
      </div>
    </div>
  )
}
