'use client'

import ScrollReveal from '@/components/ScrollReveal'
import HoverRevealCard from '@/components/HoverRevealCard'
import { IconInfinity } from '@/components/Icons'
import Link from 'next/link'
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

  const companyInfo = [
    { label: '会社名', value: 'TiAD合同会社（ティアド合同会社）' },
    { label: '英文名', value: 'TiAD.LLC' },
    { label: '代表者', value: '代表社員 大口 貴正' },
    { label: '設立', value: '2019年4月' },
    { label: '所在地', value: '愛知県名古屋市' },
    { label: '事業内容', value: 'ICTコンサルティング、システム開発、インフラ保守' },
    { label: 'メール', value: 'info@tiad.ai' },
  ]

  return (
    <div className="pt-0 pb-0">
      {/* ヒーローセクション */}
      <section
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary-50 via-white to-white"
      >
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
                COMPANY
              </motion.p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light-800">
                会社概要
              </h1>
              <p className="text-lg text-light-500">Company Outline</p>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-16 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* 代表挨拶セクション */}
          <ScrollReveal>
            <section className="mb-20">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-light-800 mb-2">
                    MESSAGE
                  </h2>
                  <p className="text-primary-500 text-sm font-medium">代表挨拶</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 border border-light-200">
                <ScrollReveal delay={0.2}>
                  <h3 className="text-2xl md:text-3xl font-bold text-light-800 mb-6">
                    Tomorrow is Another Day
                  </h3>
                  <div className="space-y-6 text-light-600 leading-relaxed text-lg">
                    <p>
                      「明日は明日の風が吹く」ということわざがあります。
                    </p>
                    <p>
                      この言葉には様々な解釈がありますが、平成から令和に変わり、私たちの環境も目まぐるしく変わる今まさに『明日は別の日が来る』ような時代が訪れたのではないでしょうか？
                    </p>
                    <p>
                      特に昨今のICT（情報通信技術）の革新は著しく、その一方で せっかくの新しい技術を十分に活用しきれていない企業様も多いのではないでしょうか？
                    </p>
                    <p className="text-primary-600 font-medium">
                      私たちは日々更新されるICTの情報をいち早く取り込み、実際の事業形態に合わせた最適なサービスの提案を目指します。
                    </p>
                  </div>
                  <div className="mt-8 text-right">
                    <p className="text-light-700 font-semibold">TiAD合同会社　代表</p>
                    <p className="text-2xl font-bold text-light-800">大口 貴正</p>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </ScrollReveal>

          {/* 区切り線 */}
          <div className="border-b border-light-200 my-12" />

          {/* コンセプトセクション */}
          <section className="relative bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 rounded-3xl p-10 md:p-14 my-20 border border-light-200 overflow-hidden">
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
                  <p className="text-light-500">人の持つ可能性を広げるために</p>
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
                  <p className="text-light-500">人との結びつきを強くするために</p>
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
                <p className="text-light-600 text-lg">私たちは新時代の技術を提供していきます</p>
              </ScrollReveal>
            </div>
          </section>

          {/* 会社情報テーブル */}
          <ScrollReveal>
            <section className="mb-20">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-light-800 mb-2">
                    COMPANY INFO
                  </h2>
                  <p className="text-primary-500 text-sm font-medium">会社情報</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-light-200 overflow-hidden">
                {companyInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row ${index < companyInfo.length - 1 ? 'border-b border-light-200' : ''}`}
                  >
                    <div className="bg-light-50 px-6 py-4 md:w-48 flex-shrink-0">
                      <span className="font-semibold text-light-700">{item.label}</span>
                    </div>
                    <div className="px-6 py-4 text-light-600">
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* 区切り線 */}
          <div className="border-b border-light-200 my-12" />

          {/* ビジョンセクション - ホバーエフェクト */}
          <section className="py-16 bg-light-50 -mx-4 lg:-mx-8 px-4 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8 max-w-4xl mx-auto">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-light-800 mb-2">
                    VISION
                  </h2>
                  <p className="text-primary-500 text-sm font-medium">私たちのビジョン</p>
                </div>
                <p className="text-light-500 max-w-lg text-base leading-relaxed">
                  ICT技術を活用し、人とテクノロジーの融合による持続可能な成長を支援します
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-light-200 max-w-4xl mx-auto">
                <HoverRevealCard
                  title="ICTを最大限に活用"
                  subtitle="業務効率化と生産性向上"
                  image="/images/vision-ict.png"
                  href="/services"
                />
                <HoverRevealCard
                  title="働き方の最適化"
                  subtitle="真の働き方改革を実現"
                  image="/images/vision-work.png"
                  href="/services"
                />
                <HoverRevealCard
                  title="持続可能な成長"
                  subtitle="人とテクノロジーの融合"
                  image="/images/vision-growth.png"
                  href="/services"
                />
              </div>
            </ScrollReveal>
          </section>

          {/* リンクセクション */}
          <ScrollReveal>
            <section className="py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -5 }}>
                  <Link
                    href="/privacy-policy"
                    className="block bg-white rounded-2xl p-8 border border-light-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg group"
                  >
                    <h3 className="text-xl font-bold text-light-800 mb-2 group-hover:text-primary-500 transition-colors">
                      プライバシーポリシー
                    </h3>
                    <p className="text-light-500 text-sm">個人情報の取り扱いについて</p>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <Link
                    href="/contact"
                    className="block bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      お問い合わせ
                    </h3>
                    <p className="text-white/80 text-sm">お気軽にご連絡ください</p>
                  </Link>
                </motion.div>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
