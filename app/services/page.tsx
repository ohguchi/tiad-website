'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import VideoBackground from '@/components/VideoBackground'
import AnimatedBackground from '@/components/AnimatedBackground'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ServicesPage() {
  const services = [
    {
      id: 'datacenter',
      title: 'データセンターサーバー保守業務',
      subtitle: 'Infrastructure Maintenance',
      description: 'VMwareや仮想ルーターの保守・メンテナンスを中心に、データセンターの安定稼働を支えるインフラ保守サービスを提供します。24時間365日の監視体制で、お客様のビジネス継続をサポートします。',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      features: [
        { title: 'VMware環境保守', desc: '仮想マシンの構築・運用・最適化' },
        { title: '仮想ルーター管理', desc: 'ネットワーク機器の設定・監視' },
        { title: '24/7監視体制', desc: '障害の早期検知と迅速な対応' },
        { title: '予防保全', desc: '定期点検によるトラブル未然防止' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      id: 'apartment',
      title: '集合住宅向けインターネット回線導入',
      subtitle: 'Fiber Optic Consulting',
      description: '集合住宅への光ファイバー設備導入により、物件の資産価値向上をご提案します。インターネット環境は今や入居者にとって必須のインフラ。入居率向上と差別化を実現します。',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        { title: '資産価値向上', desc: '高速インターネット完備物件として差別化' },
        { title: '入居者満足度UP', desc: '快適なネット環境で長期入居促進' },
        { title: '導入コンサルティング', desc: '最適な設備プランをご提案' },
        { title: 'ワンストップサービス', desc: '調査から工事、保守まで一貫対応' },
      ],
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-500/10 to-teal-500/10',
    },
    {
      id: 'app-development',
      title: '中小企業向け業務改善アプリケーション',
      subtitle: 'Custom Application Development',
      description: '中小企業の業務に合わせたアプリケーションをフルスクラッチで作成します。既製品では対応できない独自の業務フローを、お客様専用のシステムで効率化。DX推進を強力にサポートします。',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        { title: 'フルスクラッチ開発', desc: 'お客様専用のオーダーメイドシステム' },
        { title: '業務フロー最適化', desc: '現場の声を反映した使いやすさ' },
        { title: 'DX推進支援', desc: 'デジタル化による生産性革命' },
        { title: '継続的サポート', desc: '導入後の改善・機能追加も対応' },
      ],
      gradient: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-500/10 to-purple-500/10',
    },
  ]

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
        <VideoBackground
          imageSrc="/images/hero-pattern.svg"
          overlay={true}
          className="absolute inset-0"
        >
          <AnimatedBackground />
        </VideoBackground>
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
                SERVICE
              </motion.p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                  事業案内
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                人とICTの掛け合わせにより<br className="md:hidden" />
                ビジネスの生産性を革命的に向上させる
              </p>
            </div>
          </ScrollReveal>
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 40">
            <rect x="1" y="1" width="22" height="38" rx="11" strokeWidth="2" />
            <motion.circle
              cx="12"
              cy="12"
              r="4"
              fill="currentColor"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </section>

      {/* 3本柱セクション */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  3本の事業柱
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                私たちはこれらの事業を通じて<br />
                お客様のビジネスに貢献します
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-32">
            {services.map((service, index) => (
              <ParallaxSection key={service.id} speed={0.15}>
                <ScrollReveal delay={0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className={`relative rounded-3xl overflow-hidden border border-dark-600 hover:border-primary-500/30 transition-all duration-500`}
                  >
                    {/* 背景グラデーション */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-50`} />

                    {/* パターン背景 */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23000'/%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%230ea5e9'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    <div className="relative z-10 p-8 md:p-12 lg:p-16">
                      <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                        {/* 左側：アイコンと基本情報 */}
                        <div className="lg:w-1/3 text-center lg:text-left">
                          <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
                          >
                            <div className="text-white">{service.icon}</div>
                          </motion.div>
                          <p className="text-sm text-primary-400 tracking-widest mb-2">{service.subtitle}</p>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* 右側：特徴リスト */}
                        <div className="lg:w-2/3">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: featureIndex * 0.1 }}
                                whileHover={{ x: 5 }}
                                className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-dark-600 hover:border-primary-500/50 transition-all duration-300"
                              >
                                <div className={`flex items-center mb-3`}>
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-3`}>
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                                </div>
                                <p className="text-gray-400">{feature.desc}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 下部のアクセントライン */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-50`} />
                  </motion.div>
                </ScrollReveal>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* なぜTiADを選ぶのか */}
      <section className="py-32 bg-dark-800 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <ParallaxSection speed={0.2}>
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    なぜTiADを選ぶのか
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  number: '01',
                  title: 'ワンストップ対応',
                  desc: 'コンサルティングから開発、保守まで一貫して対応。複数業者との調整不要でスムーズなプロジェクト進行を実現。',
                },
                {
                  number: '02',
                  title: '中小企業に特化',
                  desc: '大手ベンダーでは対応しにくい中小規模案件も丁寧にサポート。お客様目線での最適な提案を心がけています。',
                },
                {
                  number: '03',
                  title: 'DX推進パートナー',
                  desc: '単なるシステム導入ではなく、業務改善・生産性向上を実現するDX推進のパートナーとして伴走します。',
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.2} direction="up">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 h-full"
                  >
                    <div className="text-6xl font-bold text-primary-500/20 mb-4">{item.number}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="relative py-32 overflow-hidden">
        <VideoBackground
          imageSrc="/images/hero-pattern.svg"
          overlay={true}
          className="absolute inset-0"
        >
          <AnimatedBackground />
        </VideoBackground>
        <ParallaxSection speed={0.3}>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                お問い合わせ
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                サービスに関するご質問やお見積もりは<br />
                お気軽にお問い合わせください
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

      {/* 制作実績へのリンク */}
      <section className="py-16 bg-dark-900">
        <ScrollReveal>
          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/services/portfolio"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors text-xl font-semibold"
              >
                制作実績を見る
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
