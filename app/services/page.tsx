'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import VideoBackground from '@/components/VideoBackground'
import AnimatedBackground from '@/components/AnimatedBackground'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  const services = [
    {
      title: 'AI・IoT・RPAソリューション',
      description: '最新のAI、IoT、RPA技術を活用した業務自動化と効率化のソリューションを提供します。',
      features: [
        '業務プロセスの自動化',
        'データ分析と予測',
        'IoTデバイス連携',
        'RPAによる定型業務の効率化',
      ],
    },
    {
      title: '働き方改革コンサルティング',
      description: 'ICT技術を活用した真の働き方改革を実現するためのコンサルティングサービスです。',
      features: [
        '業務フロー分析',
        'ICT活用提案',
        '導入支援',
        '効果測定と改善',
      ],
    },
    {
      title: 'システム開発',
      description: 'お客様のニーズに合わせたカスタムシステムの開発を行います。',
      features: [
        'Webアプリケーション開発',
        'モバイルアプリ開発',
        'クラウドシステム構築',
        '既存システムのリニューアル',
      ],
    },
    {
      title: 'ネットワーク構築',
      description: '安全で効率的なネットワークインフラの構築と運用をサポートします。',
      features: [
        'VPN構築（IPsec等）',
        'セキュリティ対策',
        'ネットワーク設計',
        '運用・保守サポート',
      ],
    },
  ]

  return (
    <div className="pt-0 pb-0">
      {/* ヒーローセクション */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <VideoBackground
          imageSrc="/images/hero-pattern.svg"
          overlay={true}
          className="absolute inset-0"
        >
          <AnimatedBackground />
        </VideoBackground>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                  事業案内
                </span>
              </h1>
              <p className="text-2xl text-gray-300">Business Information</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">

        {/* サービス一覧 */}
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, index) => (
            <ParallaxSection key={index} speed={0.2}>
              <ScrollReveal delay={index * 0.2} direction="up">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-3xl p-10 md:p-16 border border-dark-600 hover:border-primary-500/50 transition-all duration-500 overflow-hidden group"
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
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-primary-400 transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-gray-200 text-xl mb-8 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-start space-x-4 text-gray-200"
                        >
                          <svg
                            className="w-7 h-7 text-primary-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-lg">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {/* ホバー時の光るエフェクト */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ScrollReveal>
            </ParallaxSection>
          ))}
        </div>

        {/* CTAセクション */}
        <ParallaxSection speed={0.3}>
          <div className="mt-32 text-center">
            <ScrollReveal>
              <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-12 md:p-16 overflow-hidden border border-primary-700">
                <div className="absolute inset-0 opacity-10">
                  <AnimatedBackground />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">お問い合わせ</h2>
                  <p className="text-gray-200 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                    サービスに関するご質問やお見積もりは、お気軽にお問い合わせください
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="inline-block px-12 py-6 bg-white text-primary-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-2xl hover:shadow-primary-500/50"
                    >
                      お問い合わせフォームへ
                    </Link>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ParallaxSection>

        {/* 制作実績へのリンク */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/services/portfolio"
                className="inline-block text-primary-400 hover:text-primary-300 transition-colors text-xl font-semibold"
              >
                制作実績を見る →
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}


