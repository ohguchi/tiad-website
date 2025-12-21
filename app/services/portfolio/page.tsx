'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import VideoBackground from '@/components/VideoBackground'
import AnimatedBackground from '@/components/AnimatedBackground'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PortfolioPage() {
  const portfolios = [
    {
      title: 'コールセンター部門の立ち上げ',
      description: 'コールセンター業務の効率化と顧客対応品質向上のためのシステム構築',
      category: 'システム開発',
      year: '2024',
    },
    {
      title: '2拠点間IPsec VPNの提供',
      description: 'セキュアな拠点間通信を実現するVPNネットワークの構築',
      category: 'ネットワーク構築',
      year: '2024',
    },
    {
      title: 'ソフトウェア販売開始',
      description: '業務効率化ソフトウェアの開発と販売開始',
      category: 'ソフトウェア開発',
      year: '2024',
    },
    {
      title: '新規案件受注',
      description: '複数の企業様から新規案件を承り、システム構築を実施',
      category: 'システム開発',
      year: '2024',
    },
  ]

  return (
    <div className="pt-0 pb-0">
      {/* ヒーローセクション */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <VideoBackground
          imageSrc="/images/hero-pattern.svg"
          overlay={true}
          className="absolute inset-0"
        >
          <AnimatedBackground />
        </VideoBackground>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                  制作実績
                </span>
              </h1>
              <p className="text-2xl text-gray-300">Production Results</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* 実績一覧 */}
        <ParallaxSection speed={0.2}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {portfolios.map((portfolio, index) => (
                <ScrollReveal key={index} delay={index * 0.15} direction="up">
                  <motion.div
                    whileHover={{ y: -15, scale: 1.03 }}
                    className="relative bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-3xl p-10 border border-dark-600 hover:border-primary-500/50 transition-all duration-500 overflow-hidden group"
                  >
                    {/* 背景パターン */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23000'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%230ea5e9' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <span className="px-5 py-2 bg-primary-600/30 backdrop-blur-sm text-primary-300 rounded-full text-sm font-bold border border-primary-500/50">
                          {portfolio.category}
                        </span>
                        <span className="text-gray-400 text-base">{portfolio.year}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-primary-400 transition-colors duration-300">
                        {portfolio.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{portfolio.description}</p>
                    </div>
                    {/* ホバー時の光るエフェクト */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* お問い合わせセクション */}
        <ParallaxSection speed={0.3}>
          <div className="mt-32 text-center">
            <ScrollReveal>
              <div className="relative bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-3xl p-12 md:p-16 max-w-4xl mx-auto border border-dark-600 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <AnimatedBackground />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">お問い合わせ</h2>
                  <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                    実績に関するご質問や、同様のプロジェクトのご相談はお気軽にお問い合わせください
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="inline-block px-12 py-6 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-xl transition-colors shadow-2xl hover:shadow-primary-500/50"
                    >
                      お問い合わせフォームへ
                    </Link>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </div>
    </div>
  )
}

