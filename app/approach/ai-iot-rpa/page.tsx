'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import { IconCpu, IconNetwork, IconZap } from '@/components/Icons'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AIIoTRPAPage() {
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
                        src="/images/approach/ai-iot-rpa-bg.jpg"
                        alt="AI・IoT・RPA"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-blue-900/85 to-purple-900/90" />
                </div>

                {/* グリッドパターン */}
                <div className="absolute inset-0 opacity-20 z-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(to right, cyan 1px, transparent 1px), linear-gradient(to bottom, cyan 1px, transparent 1px)`,
                            backgroundSize: '50px 50px',
                        }}
                    />
                </div>

                {/* アニメーション要素 */}
                <motion.div
                    className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-48 h-48 border-2 border-purple-400 rounded-full"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.6, 0.3, 0.6],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
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
                                className="text-cyan-200 text-sm md:text-base mb-4 tracking-widest font-medium"
                            >
                                APPROACH
                            </motion.p>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                AI・IoT・RPA
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                                新時代のテクノロジー活用
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
            <div className="bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-4 lg:px-8 py-24">
                    <div className="max-w-6xl mx-auto">
                        {/* イントロセクション */}
                        <ScrollReveal>
                            <section className="mb-24 text-center max-w-4xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-bold text-light-800 mb-6">
                                    次世代技術で<span className="text-cyan-500">ビジネスを加速</span>
                                </h2>
                                <p className="text-xl text-light-600 leading-relaxed">
                                    AI、IoT、RPAは単なる流行語ではありません。これらは実際のビジネス課題を解決し、
                                    競争力を高めるための強力なツールです。TiADは最新のテクノロジーを駆使して、
                                    お客様のビジネスに真の価値をもたらします。
                                </p>
                            </section>
                        </ScrollReveal>

                        {/* 3つの技術セクション */}
                        <div className="space-y-16 mb-24">
                            {/* AI Section */}
                            <ScrollReveal>
                                <section className="relative overflow-hidden">
                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30" />
                                    <div className="bg-white rounded-3xl p-10 md:p-14 border border-blue-200 shadow-xl relative z-10">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                    <IconCpu size={40} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-3xl md:text-4xl font-bold text-light-800 mb-4">
                                                    AI（人工知能）
                                                </h3>
                                                <p className="text-lg text-light-600 leading-relaxed mb-6">
                                                    機械学習とディープラーニングを活用し、膨大なデータから価値ある洞察を引き出します。
                                                    予測分析、パターン認識、自然言語処理などにより、人間の判断を支援し、業務の質を向上させます。
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">予測分析</h4>
                                                            <p className="text-sm text-light-600">過去データから未来を予測</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">自動判断</h4>
                                                            <p className="text-sm text-light-600">ルールベースの意思決定自動化</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">画像認識</h4>
                                                            <p className="text-sm text-light-600">視覚情報の自動処理</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">自然言語処理</h4>
                                                            <p className="text-sm text-light-600">チャットボットや文書分析</p>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </ScrollReveal>

                            {/* IoT Section */}
                            <ScrollReveal>
                                <section className="relative overflow-hidden">
                                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30" />
                                    <div className="bg-white rounded-3xl p-10 md:p-14 border border-purple-200 shadow-xl relative z-10">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                    <IconNetwork size={40} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-3xl md:text-4xl font-bold text-light-800 mb-4">
                                                    IoT（モノのインターネット）
                                                </h3>
                                                <p className="text-lg text-light-600 leading-relaxed mb-6">
                                                    あらゆるデバイスをインターネットに接続し、リアルタイムでデータを収集・分析。
                                                    製造現場の監視、在庫管理、エネルギー最適化など、物理世界とデジタル世界を統合します。
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">リアルタイム監視</h4>
                                                            <p className="text-sm text-light-600">設備やプロセスの常時監視</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">予知保全</h4>
                                                            <p className="text-sm text-light-600">故障前に異常を検知</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">遠隔制御</h4>
                                                            <p className="text-sm text-light-600">離れた場所から操作</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">データ可視化</h4>
                                                            <p className="text-sm text-light-600">センサーデータの視覚化</p>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </ScrollReveal>

                            {/* RPA Section */}
                            <ScrollReveal>
                                <section className="relative overflow-hidden">
                                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-30" />
                                    <div className="bg-white rounded-3xl p-10 md:p-14 border border-green-200 shadow-xl relative z-10">
                                        <div className="flex flex-col md:flex-row gap-8 items-start">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                    <IconZap size={40} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-3xl md:text-4xl font-bold text-light-800 mb-4">
                                                    RPA（ロボティック・プロセス・オートメーション）
                                                </h3>
                                                <p className="text-lg text-light-600 leading-relaxed mb-6">
                                                    反復的で時間のかかる定型業務を自動化。人間が行っていた作業をソフトウェアロボットが代行することで、
                                                    ミスを削減し、従業員はより価値の高い業務に集中できます。
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">データ入力自動化</h4>
                                                            <p className="text-sm text-light-600">手作業入力をゼロに</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">レポート作成</h4>
                                                            <p className="text-sm text-light-600">定型レポートの自動生成</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">システム連携</h4>
                                                            <p className="text-sm text-light-600">複数システム間のデータ転送</p>
                                                        </div>
                                                    </motion.div>
                                                    <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                                                        <div>
                                                            <h4 className="font-semibold text-light-800">業務フロー最適化</h4>
                                                            <p className="text-sm text-light-600">プロセス全体の効率化</p>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </ScrollReveal>
                        </div>

                        {/* 統合ソリューションセクション */}
                        <ScrollReveal>
                            <section className="mb-24">
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                                            統合的なアプローチで最大効果を
                                        </h2>
                                        <p className="text-xl text-white/80 text-center mb-10 max-w-3xl mx-auto">
                                            AI、IoT、RPAは個別でも価値がありますが、これらを統合することで
                                            シナジー効果が生まれ、ビジネスインパクトが飛躍的に向上します。
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                            >
                                                <div className="text-4xl font-bold text-cyan-400 mb-2">30%</div>
                                                <p className="text-white/90">業務時間削減</p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                            >
                                                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                                                <p className="text-white/90">エラー率低減</p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ y: -5 }}
                                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                            >
                                                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                                                <p className="text-white/90">無人稼働可能</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* CTAセクション */}
                        <ScrollReveal>
                            <section className="text-center">
                                <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-3xl p-12 text-white">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        最新テクノロジーで競争力を高める
                                    </h2>
                                    <p className="text-xl mb-8 text-white/90">
                                        AI・IoT・RPAの導入をご検討ください
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link
                                                href="/contact"
                                                className="inline-block px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-light-50 transition-all duration-300 shadow-lg"
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
