'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import { IconCloud, IconDatabase, IconRefresh } from '@/components/Icons'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ICTUtilizationPage() {
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
                className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
            >
                {/* 背景画像 */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/approach/ict-utilization-bg.jpg"
                        alt="ICT活用"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-emerald-900/85 to-blue-900/90" />
                </div>

                {/* コネクションライン装飾 */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* アニメーション円 */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-3 h-3 bg-teal-400 rounded-full"
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full"
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-blue-400 rounded-full"
                    animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="container mx-auto px-4 lg:px-8 relative z-10 py-32"
                >
                    <ScrollReveal>
                        <div className="text-center max-w-4xl mx-auto">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-teal-200 text-sm md:text-base mb-4 tracking-widest font-medium"
                            >
                                APPROACH
                            </motion.p>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                ICT活用
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                                デジタルトランスフォーメーション
                            </p>
                        </div>
                    </ScrollReveal>
                </motion.div>

                {/* スクロールインジケーター */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-3 bg-white/70 rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* メインコンテンツ */}
            <div className="bg-white">
                <div className="container mx-auto px-4 lg:px-8 py-24">
                    <div className="max-w-6xl mx-auto">
                        {/* イントロセクション */}
                        <ScrollReveal>
                            <section className="mb-24 text-center max-w-4xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-bold text-light-800 mb-6">
                                    ICTが拓く<span className="text-teal-500">ビジネスの未来</span>
                                </h2>
                                <p className="text-xl text-light-600 leading-relaxed">
                                    情報通信技術（ICT）は、現代のビジネスにおいて不可欠な要素です。
                                    クラウド、データ分析、システム統合など、ICTを戦略的に活用することで、
                                    業務効率化、意思決定の高度化、新たなビジネスモデルの創出が可能になります。
                                </p>
                            </section>
                        </ScrollReveal>

                        {/* DXの重要性 */}
                        <ScrollReveal>
                            <section className="mb-24">
                                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-10 md:p-14 border border-teal-200">
                                    <h2 className="text-3xl md:text-4xl font-bold text-light-800 mb-8 text-center">
                                        なぜデジタルトランスフォーメーションが必要なのか
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-white rounded-2xl p-6 border border-teal-100"
                                        >
                                            <div className="text-3xl font-bold text-teal-600 mb-3">市場の変化</div>
                                            <p className="text-light-600">
                                                顧客のニーズや競争環境が急速に変化する中、デジタル技術による迅速な対応が求められています
                                            </p>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-white rounded-2xl p-6 border border-teal-100"
                                        >
                                            <div className="text-3xl font-bold text-emerald-600 mb-3">競争力強化</div>
                                            <p className="text-light-600">
                                                デジタル技術を活用した企業とそうでない企業の差は拡大しており、DXは生き残りの鍵となっています
                                            </p>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-white rounded-2xl p-6 border border-teal-100"
                                        >
                                            <div className="text-3xl font-bold text-blue-600 mb-3">生産性向上</div>
                                            <p className="text-light-600">
                                                労働人口の減少に伴い、テクノロジーによる業務効率化と生産性向上が不可欠です
                                            </p>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-white rounded-2xl p-6 border border-teal-100"
                                        >
                                            <div className="text-3xl font-bold text-cyan-600 mb-3">新価値創出</div>
                                            <p className="text-light-600">
                                                データとテクノロジーを組み合わせることで、これまでにない製品やサービスを創出できます
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* ICTの主要領域 */}
                        <ScrollReveal>
                            <section className="mb-24">
                                <h2 className="text-3xl md:text-4xl font-bold text-light-800 mb-12 text-center">
                                    ICT活用の主要領域
                                </h2>
                                <div className="space-y-8">
                                    {/* クラウドコンピューティング */}
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="bg-white rounded-2xl p-8 border-l-4 border-teal-500 shadow-lg"
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                                                    <IconCloud size={32} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-light-800 mb-3">
                                                    クラウドコンピューティング
                                                </h3>
                                                <p className="text-light-600 mb-4">
                                                    オンプレミスからクラウドへの移行により、初期投資を抑え、柔軟なスケーリングとグローバルなアクセスを実現。
                                                    運用コストの削減とビジネスの俊敏性を同時に達成します。
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">AWS</span>
                                                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Azure</span>
                                                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">GCP</span>
                                                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">SaaS導入</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* データ活用 */}
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="bg-white rounded-2xl p-8 border-l-4 border-emerald-500 shadow-lg"
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                                                    <IconDatabase size={32} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-light-800 mb-3">
                                                    データドリブン経営
                                                </h3>
                                                <p className="text-light-600 mb-4">
                                                    ビジネスデータを収集・分析し、意思決定を支援。BI（ビジネスインテリジェンス）ツールやデータウェアハウスにより、
                                                    データを資産として活用し、戦略的な判断を可能にします。
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">BIツール</span>
                                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">データ分析</span>
                                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">可視化</span>
                                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">予測分析</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* システム統合 */}
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="bg-white rounded-2xl p-8 border-l-4 border-blue-500 shadow-lg"
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                                                    <IconRefresh size={32} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-light-800 mb-3">
                                                    システム統合・連携
                                                </h3>
                                                <p className="text-light-600 mb-4">
                                                    既存システムと新しいツールをシームレスに統合。API連携やマイクロサービスアーキテクチャにより、
                                                    各システムの強みを活かしながら、全体最適化を実現します。
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">API連携</span>
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ERP統合</span>
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">レガシー移行</span>
                                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">マイクロサービス</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* DX推進プロセス */}
                        <ScrollReveal>
                            <section className="mb-24">
                                <h2 className="text-3xl md:text-4xl font-bold text-light-800 mb-12 text-center">
                                    TiADのDX推進プロセス
                                </h2>
                                <div className="relative">
                                    {/* プロセスフロー */}
                                    <div className="space-y-6">
                                        {[
                                            {
                                                step: '01',
                                                title: '現状分析',
                                                description: '既存システムと業務フローを詳細に分析し、課題と改善機会を特定します',
                                                colorClass: 'bg-gradient-to-br from-teal-400 to-teal-600',
                                            },
                                            {
                                                step: '02',
                                                title: '戦略立案',
                                                description: 'ビジネス目標に沿ったICT活用戦略とロードマップを策定します',
                                                colorClass: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
                                            },
                                            {
                                                step: '03',
                                                title: 'ソリューション設計',
                                                description: '最適な技術スタックを選定し、実装計画を設計します',
                                                colorClass: 'bg-gradient-to-br from-blue-400 to-blue-600',
                                            },
                                            {
                                                step: '04',
                                                title: '導入・実装',
                                                description: 'アジャイル手法により、段階的にシステムを構築・導入します',
                                                colorClass: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
                                            },
                                            {
                                                step: '05',
                                                title: '運用・改善',
                                                description: '継続的なモニタリングと改善により、効果を最大化します',
                                                colorClass: 'bg-gradient-to-br from-teal-400 to-teal-600',
                                            },
                                        ].map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-6"
                                            >
                                                <div className={`flex-shrink-0 w-16 h-16 ${item.colorClass} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                                    {item.step}
                                                </div>
                                                <div className="flex-1 bg-white rounded-2xl p-6 border border-light-200 shadow">
                                                    <h3 className="text-xl font-bold text-light-800 mb-2">{item.title}</h3>
                                                    <p className="text-light-600">{item.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* 成功事例の指標 */}
                        <ScrollReveal>
                            <section className="mb-24">
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
                                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                                            ICT活用による成果
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                                            >
                                                <div className="text-4xl font-bold text-teal-400 mb-2">50%</div>
                                                <p className="text-white/90">運用コスト削減</p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                                            >
                                                <div className="text-4xl font-bold text-emerald-400 mb-2">3倍</div>
                                                <p className="text-white/90">意思決定スピード向上</p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                                            >
                                                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                                                <p className="text-white/90">システム稼働率</p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                                            >
                                                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                                                <p className="text-white/90">生産性向上</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* CTAセクション */}
                        <ScrollReveal>
                            <section className="text-center">
                                <div className="bg-gradient-to-br from-teal-500 via-emerald-500 to-blue-500 rounded-3xl p-12 text-white">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        デジタルトランスフォーメーションを始めましょう
                                    </h2>
                                    <p className="text-xl mb-8 text-white/90">
                                        ICT活用で、ビジネスを次のステージへ
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link
                                                href="/contact"
                                                className="inline-block px-10 py-4 bg-white text-teal-600 font-bold text-lg rounded-full hover:bg-light-50 transition-all duration-300 shadow-lg"
                                            >
                                                お問い合わせ
                                            </Link>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link
                                                href="/services"
                                                className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300"
                                            >
                                                サービス一覧
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    )
}
