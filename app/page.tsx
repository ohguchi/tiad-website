'use client'

import Hero from '@/components/Hero'
import NewsSlider from '@/components/NewsSlider'
import ServiceCard from '@/components/ServiceCard'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import BusinessPillars from '@/components/BusinessPillars'
import CounterSection from '@/components/CounterSection'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const services = [
    {
      title: 'AI・IoT・RPA',
      description: '新しい労働力となりうるICT技術を用いて、労働そのものの削減と業務の最適化を提案します。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: '働き方改革',
      description: '労働時間の削減だけでなく、真の働き方改革を実現するためのソリューションを提供します。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'ICT活用',
      description: 'ICTを最大限に活用し、働き方の最適化を提案。人の持つ可能性を広げる技術を提供します。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const messageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: messageScroll } = useScroll({
    target: messageRef,
    offset: ['start end', 'end start'],
  })
  const messageY = useTransform(messageScroll, [0, 1], [50, -50])

  return (
    <div className="pt-0">
      <Hero />

      {/* メッセージセクション */}
      <section
        ref={messageRef}
        className="relative py-24 md:py-32 bg-light-50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white to-light-50" />
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
                    人とICTの掛け合わせにより、
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

      {/* 3本の事業柱 */}
      <section className="py-24 bg-light-50">
        <div className="container mx-auto px-4 lg:px-8">
          <ParallaxSection speed={0.1}>
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-primary-500 text-sm tracking-widest mb-4 font-medium">BUSINESS</p>
                <h2 className="text-3xl md:text-5xl font-bold text-light-800 mb-6">
                  3つの<span className="text-primary-500">事業領域</span>
                </h2>
                <p className="text-lg text-light-500 max-w-2xl mx-auto">
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
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors text-lg font-medium"
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

      {/* アプローチセクション */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary-500 text-sm tracking-widest mb-4 font-medium">APPROACH</p>
              <h2 className="text-3xl md:text-5xl font-bold text-light-800 mb-6">
                私たちのアプローチ
              </h2>
              <p className="text-lg text-light-500">
                ICT技術を活用した働き方改革のソリューション
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 border border-light-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl text-center h-full"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 text-primary-500 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-light-800 mb-4">{service.title}</h3>
                  <p className="text-light-500 leading-relaxed">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="relative py-24 bg-gradient-to-br from-primary-500 to-primary-600 overflow-hidden">
        {/* 装飾 */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
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
