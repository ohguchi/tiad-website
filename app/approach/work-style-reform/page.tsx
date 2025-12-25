'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import { IconClock, IconTrendingUp, IconUsers } from '@/components/Icons'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function WorkStyleReformPage() {
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
                        src="/images/approach/work-reform-bg.jpg"
                        alt="働き方改革"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/90 via-yellow-500/85 to-orange-400/90" />
                </div>

                {/* 装飾パターン */}
                <div className="absolute inset-0 opacity-10 z-0">
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
                                className="text-primary-200 text-sm md:text-base mb-4 tracking-widest font-medium"
                            >
                                APPROACH
                            </motion.p>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                                働き方改革
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                                真の生産性向上へ
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
                    <div className="max-w-4xl mx-auto">
                        {/* イントロセクション */}
                        <ScrollReveal>
                            <section className="mb-20">
                                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-10 md:p-14 border border-light-200">
                                    <h2 className="text-3xl md:text-4xl font-bold text-light-800 mb-8">
                                        今、求められる働き方改革とは
                                    </h2>
                                    <div className="space-y-6 text-lg text-light-600 leading-relaxed">
                                        <p>
                                            今日本ではしきりに『働き方改革』が叫ばれています。
                                            特に２０１９年から働き方改革関連法が導入されたことにより一段と『働き方』について考える必要が出てきたのではないでしょうか？
                                        </p>
                                        <p>
                                            ただ現在の働き方改革は時間外労働の制限や有給休暇取得の義務化など「労働時間の削減」にばかり目を向けられており、このままでは本来目指すべき「労働力不足の解消」「生産性の向上」を図ることがますます難しくなってしまうのではないかと思います。
                                        </p>
                                        <p className="text-primary-600 font-semibold text-xl">
                                            私たちはAI・IoT・RPAなど新しい労働力となりうるICT技術を用いて、まずは労働そのものの削減、そして人がすべき業務の最適化を提案することが真の働き方改革へとつながっていくと考えています。
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* 問題点セクション */}
                        <ScrollReveal>
                            <section className="mb-20">
                                <h2 className="text-3xl md:text-4xl font-bold text-light-800 mb-12 text-center">
                                    現状の課題
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-red-50 border border-red-200 rounded-2xl p-8"
                                    >
                                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                                            <IconClock size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-red-900 mb-3">
                                            労働時間の削減のみに注目
                                        </h3>
                                        <p className="text-red-700">
                                            時間外労働の制限や有給休暇取得の義務化など、時間を減らすことだけが焦点となっている
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-orange-50 border border-orange-200 rounded-2xl p-8"
                                    >
                                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                                            <IconTrendingUp size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-orange-900 mb-3">
                                            生産性向上の課題
                                        </h3>
                                        <p className="text-orange-700">
                                            本来目指すべき「労働力不足の解消」「生産性の向上」が達成困難になっている
                                        </p>
                                    </motion.div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* ソリューションセクション */}
                        <section className="mb-20 relative overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-100 rounded-full blur-3xl opacity-30" />

                            <ScrollReveal>
                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-bold text-light-800 mb-12 text-center">
                                        TiADの<span className="text-primary-500">アプローチ</span>
                                    </h2>
                                    <div className="bg-white rounded-3xl p-10 md:p-14 border-2 border-primary-200 shadow-xl">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="text-center"
                                            >
                                                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                                    <span className="text-3xl font-bold text-white">1</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-light-800 mb-2">
                                                    労働の削減
                                                </h3>
                                                <p className="text-light-600">
                                                    AI・IoT・RPAを活用し、労働そのものを削減
                                                </p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="text-center"
                                            >
                                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                                    <span className="text-3xl font-bold text-white">2</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-light-800 mb-2">
                                                    業務の最適化
                                                </h3>
                                                <p className="text-light-600">
                                                    人がすべき業務を明確にし、最適化を図る
                                                </p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="text-center"
                                            >
                                                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                                    <span className="text-3xl font-bold text-white">3</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-light-800 mb-2">
                                                    真の改革
                                                </h3>
                                                <p className="text-light-600">
                                                    生産性向上と労働力不足の解消を実現
                                                </p>
                                            </motion.div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-lg text-light-700 leading-relaxed mb-6">
                                                単なる労働時間の削減ではなく、ICT技術による業務そのものの変革を通じて、真の働き方改革を実現します。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </section>

                        {/* 技術スタックセクション */}
                        <ScrollReveal>
                            <section className="mb-20">
                                <h2 className="text-3xl md:text-4xl font-bold text-light-800 mb-12 text-center">
                                    活用技術
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
                                    >
                                        <h3 className="text-2xl font-bold text-blue-900 mb-3">AI</h3>
                                        <p className="text-blue-700">
                                            機械学習による業務自動化と意思決定支援
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200"
                                    >
                                        <h3 className="text-2xl font-bold text-purple-900 mb-3">IoT</h3>
                                        <p className="text-purple-700">
                                            デバイス連携によるリアルタイムデータ活用
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200"
                                    >
                                        <h3 className="text-2xl font-bold text-green-900 mb-3">RPA</h3>
                                        <p className="text-green-700">
                                            定型業務の自動化による効率化
                                        </p>
                                    </motion.div>
                                </div>
                            </section>
                        </ScrollReveal>

                        {/* CTAセクション */}
                        <ScrollReveal>
                            <section className="text-center">
                                <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 rounded-3xl p-12 text-white">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        働き方改革について相談する
                                    </h2>
                                    <p className="text-xl mb-8 text-white/90">
                                        貴社の業務課題をお聞かせください
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link
                                                href="/contact"
                                                className="inline-block px-10 py-4 bg-white text-amber-600 font-bold text-lg rounded-full hover:bg-light-50 transition-all duration-300 shadow-lg"
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
