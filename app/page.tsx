'use client'

import Hero from '@/components/Hero'
import NewsSlider from '@/components/NewsSlider'
import ServiceCard from '@/components/ServiceCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import VideoBackground from '@/components/VideoBackground'
import BusinessPillars from '@/components/BusinessPillars'
import CounterSection from '@/components/CounterSection'
import AnimatedBackground from '@/components/AnimatedBackground'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const services = [
    {
      title: 'AI・IoT・RPA',
      description: '新しい労働力となりうるICT技術を用いて、労働そのものの削減と業務の最適化を提案します。',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: '働き方改革',
      description: '労働時間の削減だけでなく、真の働き方改革を実現するためのソリューションを提供します。',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'ICT活用',
      description: 'ICTを最大限に活用し、働き方の最適化を提案。人の持つ可能性を広げる技術を提供します。',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const messageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: messageScroll } = useScroll({
    target: messageRef,
    offset: ['start end', 'end start'],
  })
  const messageY = useTransform(messageScroll, [0, 1], [100, -100])

  return (
    <div className="pt-0">
      <Hero />

      {/* メッセージセクション - パララックス効果付き */}
      <section
        ref={messageRef}
        className="relative py-32 md:py-40 overflow-hidden"
      >
        <VideoBackground
          imageSrc="/images/hero-pattern.svg"
          overlay={true}
          className="absolute inset-0"
        />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            style={{ y: messageY }}
            className="text-center max-w-5xl mx-auto"
          >
            <ScrollReveal delay={0.2}>
              <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                人財 × テクノロジー = ∞
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-6">
                人の持つ可能性を広げるために
              </p>
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-6">
                人との結びつきを強くするために
              </p>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                私たちは新時代の技術を提供していきます
              </p>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>

      {/* 会社コンセプトセクション */}
      <section className="relative py-32 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.5) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ParallaxSection speed={0.2}>
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <p className="text-primary-400 text-lg tracking-widest mb-4">WHY TiAD</p>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    私たちの<span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">ミッション</span>
                  </h2>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="bg-gradient-to-br from-dark-800/80 to-dark-700/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-dark-600">
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
                    人とICTの掛け合わせにより、<br className="hidden md:block" />
                    <span className="text-primary-400 font-semibold">ビジネスの生産性を革命的に向上させる</span>
                    DX活用を提案します。
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    私たちは単なるシステム導入ではなく、お客様のビジネスを根本から変革するパートナーとして、
                    最新のICT技術を活用した真の働き方改革を実現します。
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* 3本の事業柱 */}
      <section className="py-32 bg-dark-800">
        <div className="container mx-auto px-4 lg:px-8">
          <ParallaxSection speed={0.15}>
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary-400 text-lg tracking-widest mb-4">BUSINESS</p>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  3つの<span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">事業領域</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  インフラからアプリケーションまで<br />
                  ICTに関するあらゆるニーズにお応えします
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <BusinessPillars />
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="text-center mt-12">
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-lg font-semibold"
                >
                  すべてのサービスを見る
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </section>

      {/* 実績統計セクション */}
      <section className="relative py-32 overflow-hidden">
        <VideoBackground
          imageSrc="/images/hero-pattern.svg"
          overlay={true}
          className="absolute inset-0"
        >
          <AnimatedBackground />
        </VideoBackground>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ParallaxSection speed={0.2}>
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary-400 text-lg tracking-widest mb-4">ACHIEVEMENTS</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  数字で見る<span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">TiAD</span>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <CounterSection />
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </section>

      {/* ニュースセクション - スクロールアニメーション */}
      <section className="relative py-32 bg-dark-800">
        <ParallaxSection speed={0.3}>
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary-400 text-lg tracking-widest mb-4">NEWS</p>
                <h2 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    お知らせ
                  </span>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <NewsSlider />
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </section>

      {/* サービス紹介セクション - ダイナミックなレイアウト */}
      <section className="relative py-32 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23000'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%230ea5e9' stroke-width='0.5'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-primary-400 text-lg tracking-widest mb-4">APPROACH</p>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  私たちのアプローチ
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400">
                ICT技術を活用した働き方改革のソリューション
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="up">
                <motion.div
                  whileHover={{ y: -20, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション - 視差効果付き */}
      <section className="relative py-32 overflow-hidden">
        <VideoBackground
          imageSrc="/images/hero-pattern.svg"
          overlay={true}
          className="absolute inset-0"
        />
        <ParallaxSection speed={0.5}>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                お問い合わせ
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                DX推進や業務改善について、<br className="md:hidden" />お気軽にご相談ください
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block px-12 py-6 bg-white text-primary-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-primary-500/50"
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
