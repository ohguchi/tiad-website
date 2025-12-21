'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import SectionDivider from '@/components/SectionDivider'
import VideoHero from '@/components/VideoHero'
import { IconServer, IconBuilding, IconCode, IconCheck, IconArrowRight } from '@/components/Icons'
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
      icon: <IconServer size={32} className="text-white" />,
      features: [
        { title: 'VMware環境保守', desc: '仮想マシンの構築・運用・最適化' },
        { title: '仮想ルーター管理', desc: 'ネットワーク機器の設定・監視' },
        { title: '24/7監視体制', desc: '障害の早期検知と迅速な対応' },
        { title: '予防保全', desc: '定期点検によるトラブル未然防止' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'apartment',
      title: '集合住宅向けインターネット回線導入',
      subtitle: 'Fiber Optic Consulting',
      description: '集合住宅への光ファイバー設備導入により、物件の資産価値向上をご提案します。インターネット環境は今や入居者にとって必須のインフラ。入居率向上と差別化を実現します。',
      image: '/images/apartment.png',
      icon: <IconBuilding size={32} className="text-white" />,
      features: [
        { title: '資産価値向上', desc: '高速インターネット完備物件として差別化' },
        { title: '入居者満足度UP', desc: '快適なネット環境で長期入居促進' },
        { title: '導入コンサルティング', desc: '最適な設備プランをご提案' },
        { title: 'ワンストップサービス', desc: '調査から工事、保守まで一貫対応' },
      ],
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'app-development',
      title: '中小企業向け業務改善アプリケーション',
      subtitle: 'Custom Application Development',
      description: '中小企業の業務に合わせたアプリケーションをフルスクラッチで作成します。既製品では対応できない独自の業務フローを、お客様専用のシステムで効率化。DX推進を強力にサポートします。',
      image: '/images/app-dev.png',
      icon: <IconCode size={32} className="text-white" />,
      features: [
        { title: 'フルスクラッチ開発', desc: 'お客様専用のオーダーメイドシステム' },
        { title: '業務フロー最適化', desc: '現場の声を反映した使いやすさ' },
        { title: 'DX推進支援', desc: 'デジタル化による生産性革命' },
        { title: '継続的サポート', desc: '導入後の改善・機能追加も対応' },
      ],
      gradient: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
    },
  ]

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
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <VideoHero className="absolute inset-0" overlayOpacity={0.2} />

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
                SERVICE
              </motion.p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-light-800">
                事業案内
              </h1>
              <p className="text-lg md:text-xl text-light-500 max-w-2xl mx-auto">
                人とICTの掛け合わせにより<br className="md:hidden" />
                ビジネスの生産性を革命的に向上させる
              </p>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>

      <SectionDivider variant="diagonal" color="#ffffff" />

      {/* 3本柱セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-800">
                3本の<span className="text-primary-500">事業柱</span>
              </h2>
              <p className="text-lg text-light-500 max-w-xl mx-auto">
                私たちはこれらの事業を通じてお客様のビジネスに貢献します
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {services.map((service, index) => (
              <ParallaxSection key={service.id} speed={0.05}>
                <ScrollReveal delay={0.1}>
                  <div className="relative" id={service.id}>
                    <motion.div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-light-200 hover:shadow-2xl transition-all duration-500`}
                      whileHover={{ y: -5 }}
                    >
                      {/* 画像セクション */}
                      <motion.div
                        className={`relative h-[280px] lg:h-auto min-h-[350px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent lg:hidden" />
                        <div className={`absolute inset-0 hidden lg:block bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-transparent via-white/30 to-white`} />

                        {/* アイコン */}
                        <motion.div
                          className={`absolute ${index % 2 === 0 ? 'right-6' : 'left-6'} bottom-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          {service.icon}
                        </motion.div>
                      </motion.div>

                      {/* コンテンツセクション */}
                      <div className={`relative p-8 md:p-12 ${service.bgColor} ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="relative z-10">
                          <p className="text-xs text-primary-500 tracking-widest mb-2 font-medium">{service.subtitle}</p>
                          <h3 className="text-2xl md:text-3xl font-bold text-light-800 mb-4">
                            {service.title}
                          </h3>
                          <p className="text-light-600 text-base leading-relaxed mb-8">
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
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5`}>
                                  <IconCheck size={12} className="text-white" />
                                </div>
                                <div>
                                  <h4 className="text-light-800 font-semibold text-sm">{feature.title}</h4>
                                  <p className="text-light-500 text-xs">{feature.desc}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </ScrollReveal>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="#fafafa" />

      {/* なぜTiADを選ぶのか */}
      <section className="py-24 bg-light-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <ParallaxSection speed={0.1}>
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-light-800">
                  なぜ<span className="text-primary-500">TiAD</span>を選ぶのか
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { number: '01', title: 'ワンストップ対応', desc: 'コンサルティングから開発、保守まで一貫して対応。スムーズなプロジェクト進行を実現。' },
                { number: '02', title: '中小企業に特化', desc: '中小規模案件も丁寧にサポート。お客様目線での最適な提案を心がけています。' },
                { number: '03', title: 'DX推進パートナー', desc: '業務改善・生産性向上を実現するDX推進のパートナーとして伴走します。' },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.15} direction="up">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-8 border border-light-200 hover:border-primary-300 transition-all duration-300 h-full hover:shadow-lg"
                  >
                    <div className="text-5xl font-bold text-primary-100 mb-4">{item.number}</div>
                    <h3 className="text-xl font-bold text-light-800 mb-3">{item.title}</h3>
                    <p className="text-light-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="relative py-24 bg-gradient-to-br from-primary-500 to-primary-600 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
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
        <ParallaxSection speed={0.1}>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                お問い合わせ
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                サービスに関するご質問やお見積もりはお気軽にお問い合わせください
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-light-50 transition-all duration-300 shadow-lg"
                >
                  お問い合わせフォームへ
                </Link>
              </motion.div>
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </section>

      <SectionDivider variant="curve" color="#ffffff" flip={true} />

      {/* 制作実績へのリンク */}
      <section className="py-12 bg-white">
        <ScrollReveal>
          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/services/portfolio"
                className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors text-lg font-medium"
              >
                制作実績を見る
                <IconArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
