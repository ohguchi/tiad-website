'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ServicesPage() {
  const services = [
    {
      id: 'datacenter',
      title: 'データセンターサーバー保守業務',
      subtitle: 'Infrastructure Maintenance',
      description: 'VMwareや仮想ルーターの保守・メンテナンスを中心に、データセンターの安定稼働を支えるインフラ保守サービスを提供します。24時間365日の監視体制で、お客様のビジネス継続をサポートします。',
      image: '/images/datacenter.png',
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
      image: '/images/apartment.png',
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
      image: '/images/app-dev.png',
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
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team.png"
            alt="Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-transparent" />
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
            <div className="text-center mb-20">
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

          <div className="space-y-40">
            {services.map((service, index) => (
              <ParallaxSection key={service.id} speed={0.1}>
                <ScrollReveal delay={0.1}>
                  <div className="relative" id={service.id}>
                    {/* サービスカード */}
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-dark-600 hover:border-primary-500/30 transition-all duration-500`}>
                      {/* 画像セクション */}
                      <motion.div
                        className={`relative h-[300px] lg:h-auto min-h-[400px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-transparent via-dark-900/50 to-dark-900 lg:bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'}`} />

                        {/* オーバーレイアイコン */}
                        <motion.div
                          className={`absolute ${index % 2 === 0 ? 'right-8' : 'left-8'} bottom-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <span className="text-4xl font-bold text-white">0{index + 1}</span>
                        </motion.div>
                      </motion.div>

                      {/* コンテンツセクション */}
                      <div className={`relative p-8 md:p-12 lg:p-16 bg-gradient-to-br ${service.bgColor} ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="absolute inset-0 bg-dark-900/90" />

                        <div className="relative z-10">
                          <p className="text-sm text-primary-400 tracking-widest mb-2">{service.subtitle}</p>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            {service.description}
                          </p>

                          {/* 特徴リスト */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: featureIndex * 0.1 }}
                                className="flex items-start space-x-3"
                              >
                                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5`}>
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="text-white font-semibold">{feature.title}</h4>
                                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vision.png"
            alt="Vision Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-900/80" />
        </div>
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
