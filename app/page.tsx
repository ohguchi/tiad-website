'use client'

import Hero from '@/components/Hero'
import NewsSlider from '@/components/NewsSlider'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import BusinessPillars from '@/components/BusinessPillars'
import CounterSection from '@/components/CounterSection'
import SectionDivider from '@/components/SectionDivider'
import HoverRevealCard from '@/components/HoverRevealCard'
import { IconArrowRight } from '@/components/Icons'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const messageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: messageScroll } = useScroll({
    target: messageRef,
    offset: ['start end', 'end start'],
  })
  const messageY = useTransform(messageScroll, [0, 1], [50, -50])

  return (
    <div className="pt-0">
      <Hero />

      {/* 斜め区切り: Hero(白) → メッセージ(light-50/#fafafa) */}
      <SectionDivider variant="diagonal" color="#fafafa" />

      {/* メッセージセクション */}
      <section
        ref={messageRef}
        className="relative py-24 md:py-32 bg-light-50 overflow-hidden"
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            style={{ y: messageY }}
            className="text-center max-w-4xl mx-auto"
          >
            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-light-800">
                人財 × テクノロジー = <span className="text-primary-500">∞</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-xl md:text-2xl text-light-600 leading-relaxed mb-4">
                人の持つ可能性を広げるために
              </p>
              <p className="text-xl md:text-2xl text-light-600 leading-relaxed mb-4">
                人との結びつきを強くするために
              </p>
              <p className="text-lg md:text-xl text-light-500 leading-relaxed">
                私たちは新時代の技術を提供していきます
              </p>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>

      {/* 斜め区切り: メッセージ(light-50) → コンセプト(白) */}
      <SectionDivider variant="diagonal" color="#ffffff" flip={true} />

      {/* 会社コンセプトセクション */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ParallaxSection speed={0.1}>
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="text-primary-500 text-sm tracking-widest mb-4 font-medium">WHY TiAD</p>
                  <h2 className="text-3xl md:text-5xl font-bold text-light-800 mb-8">
                    私たちの<span className="text-primary-500">ミッション</span>
                  </h2>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 border border-light-200">
                  <p className="text-xl md:text-2xl text-light-700 leading-relaxed mb-6">
                    人とICTの共創により、
                    <span className="text-primary-600 font-semibold">ビジネスの生産性を革命的に向上させる</span>
                    DX活用を提案します。
                  </p>
                  <p className="text-lg text-light-600 leading-relaxed">
                    私たちは単なるシステム導入ではなく、お客様のビジネスを根本から変革するパートナーとして、
                    最新のICT技術を活用した真の働き方改革を実現します。
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* 斜め区切り: コンセプト(白) → SERVICE(light-50) */}
      <SectionDivider variant="diagonal" color="#fafafa" />

      {/* 3本の事業柱 - 参考サイトSERVICE風 */}
      <section className="py-24 bg-light-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* ヘッダー部分 - 左右分割レイアウト */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-light-800 mb-2">
                  SERVICE
                </h2>
                <p className="text-primary-500 text-sm font-medium">私たちが取り組む事業</p>
              </div>
              <p className="text-light-500 max-w-lg text-base leading-relaxed">
                ICTを活用したビジネスの生産性向上を実現するための取り組みです。
                お客様と協力し、新たなビジネスシステムを作り上げていきます。
              </p>
            </div>
          </ScrollReveal>

          {/* 事業カード */}
          <ScrollReveal delay={0.2}>
            <BusinessPillars />
          </ScrollReveal>

          {/* CTA部分 */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-end mt-12">
              <motion.div whileHover={{ x: 5 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors text-lg font-medium group"
                >
                  私たちの事業内容について
                  <motion.div
                    className="ml-3 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center group-hover:bg-primary-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconArrowRight size={18} className="text-white" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 斜め区切り: SERVICE(light-50) → 実績統計(白) */}
      <SectionDivider variant="diagonal" color="#ffffff" flip={true} />

      {/* 実績統計セクション */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ParallaxSection speed={0.1}>
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary-500 text-sm tracking-widest mb-4 font-medium">ACHIEVEMENTS</p>
                <h2 className="text-3xl md:text-5xl font-bold text-light-800">
                  数字で見る<span className="text-primary-500">TiAD</span>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <CounterSection />
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </section>

      {/* 斜め区切り */}
      <SectionDivider variant="diagonal" color="#fafafa" />

      {/* ニュースセクション */}
      <section className="relative py-24 bg-light-50">
        <ParallaxSection speed={0.1}>
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary-500 text-sm tracking-widest mb-4 font-medium">NEWS</p>
                <h2 className="text-3xl md:text-5xl font-bold text-light-800">
                  お知らせ
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <NewsSlider />
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </section>

      {/* 斜め区切り: ニュース(light-50) → APPROACH(白) */}
      <SectionDivider variant="diagonal" color="#ffffff" flip={true} />

      {/* アプローチセクション - ホバーで画像が現れるカード */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-light-800 mb-2">
                  APPROACH
                </h2>
                <p className="text-primary-500 text-sm font-medium">私たちのアプローチ</p>
              </div>
              <p className="text-light-500 max-w-lg text-base leading-relaxed">
                ICT技術を活用した働き方改革のソリューションを提供します
              </p>
            </div>
          </ScrollReveal>

          {/* ホバーで画像が現れるカード */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-light-200">
              <HoverRevealCard
                title="AI・IoT・RPA"
                subtitle="新時代のテクノロジー活用"
                image="/images/approach-ai.png"
                href="/services"
              />
              <HoverRevealCard
                title="働き方改革"
                subtitle="真の生産性向上へ"
                image="/images/approach-work.png"
                href="/services"
              />
              <HoverRevealCard
                title="ICT活用"
                subtitle="デジタルトランスフォーメーション"
                image="/images/approach-ict.png"
                href="/services"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="relative py-24 bg-gradient-to-br from-primary-500 to-primary-600 overflow-hidden">
        {/* 装飾パターン */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <ParallaxSection speed={0.2}>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                お問い合わせ
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                DX推進や業務改善について、お気軽にご相談ください
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-white text-primary-600 font-bold text-lg rounded-full hover:bg-light-50 transition-all duration-300 shadow-lg"
                >
                  お問い合わせフォームへ
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </section>
    </div>
  )
}
