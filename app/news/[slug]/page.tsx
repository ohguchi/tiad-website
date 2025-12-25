'use client'

import { notFound, useParams } from 'next/navigation'
import ScrollReveal from '@/components/ScrollReveal'
import SectionDivider from '@/components/SectionDivider'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { getNewsItemBySlug, newsItems } from '@/lib/newsData'

export default function NewsDetailPage() {
    const params = useParams()
    const slug = params.slug as string
    const newsItem = getNewsItemBySlug(slug)

    const heroRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    // 前後の記事を取得
    const navigation = useMemo(() => {
        if (!newsItem) return { prev: null, next: null }
        const currentIndex = newsItems.findIndex(item => item.slug === slug)
        return {
            prev: currentIndex > 0 ? newsItems[currentIndex - 1] : null,
            next: currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null,
        }
    }, [newsItem, slug])

    if (!newsItem) {
        notFound()
    }

    const isService = newsItem.category === 'サービス'

    return (
        <div className="pt-0 pb-0">
            {/* ヒーローセクション */}
            <section
                ref={heroRef}
                className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-light-100 via-white to-white"
            >
                {/* 装飾的な背景 */}
                <div className="absolute inset-0 opacity-30">
                    <div className={`absolute top-20 left-10 w-72 h-72 ${isService ? 'bg-secondary-200' : 'bg-primary-200'} rounded-full blur-3xl`} />
                    <div className={`absolute bottom-20 right-10 w-96 h-96 ${isService ? 'bg-secondary-100' : 'bg-primary-100'} rounded-full blur-3xl`} />
                </div>

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="container mx-auto px-4 lg:px-8 relative z-10 py-24"
                >
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto">
                            {/* パンくずリスト */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center justify-center gap-2 text-sm text-light-400 mb-6"
                            >
                                <Link href="/" className="hover:text-primary-500 transition-colors">
                                    ホーム
                                </Link>
                                <span>/</span>
                                <Link href="/news" className="hover:text-primary-500 transition-colors">
                                    ニュース
                                </Link>
                                <span>/</span>
                                <span className="text-light-600">詳細</span>
                            </motion.div>

                            {/* カテゴリと日付 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center justify-center gap-4 mb-6"
                            >
                                <span className={`px-4 py-2 rounded-full text-sm font-bold ${isService ? 'bg-secondary-100 text-secondary-600' : 'bg-primary-100 text-primary-600'}`}>
                                    {newsItem.category}
                                </span>
                                <span className="text-light-500 text-base font-medium">{newsItem.date}</span>
                            </motion.div>

                            {/* タイトル */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl md:text-4xl lg:text-5xl font-bold text-light-800 leading-tight"
                            >
                                {newsItem.title}
                            </motion.h1>
                        </div>
                    </ScrollReveal>
                </motion.div>
            </section>

            <SectionDivider variant="curve" color="#ffffff" />

            <div className="container mx-auto px-4 lg:px-8 py-16 bg-white">
                <div className="max-w-3xl mx-auto">
                    {/* コンテンツ */}
                    <ScrollReveal>
                        <article className="relative">
                            {/* 装飾的なボーダー */}
                            <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${isService ? 'from-secondary-200 via-secondary-100 to-secondary-200' : 'from-primary-200 via-primary-100 to-primary-200'} opacity-50`} />

                            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-sm">
                                {/* 装飾的なアイコン */}
                                <div className={`absolute -top-6 left-8 w-12 h-12 rounded-2xl ${isService ? 'bg-gradient-to-br from-secondary-400 to-secondary-500' : 'bg-gradient-to-br from-primary-400 to-primary-500'} flex items-center justify-center shadow-lg`}>
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>

                                <div className="pt-4">
                                    <p className="text-light-700 leading-relaxed text-lg whitespace-pre-wrap">
                                        {newsItem.content}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </ScrollReveal>

                    {/* 前後の記事ナビゲーション */}
                    <ScrollReveal>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {navigation.prev ? (
                                <Link href={`/news/${navigation.prev.slug}`}>
                                    <motion.div
                                        whileHover={{ x: -5 }}
                                        className="group p-6 bg-light-50 rounded-2xl border border-light-200 hover:border-primary-300 hover:bg-white transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 text-light-400 text-sm mb-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                            前の記事
                                        </div>
                                        <h3 className="text-light-700 font-medium group-hover:text-primary-600 transition-colors line-clamp-1">
                                            {navigation.prev.title}
                                        </h3>
                                    </motion.div>
                                </Link>
                            ) : (
                                <div />
                            )}

                            {navigation.next ? (
                                <Link href={`/news/${navigation.next.slug}`}>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="group p-6 bg-light-50 rounded-2xl border border-light-200 hover:border-primary-300 hover:bg-white transition-all duration-300 text-right"
                                    >
                                        <div className="flex items-center justify-end gap-3 text-light-400 text-sm mb-2">
                                            次の記事
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-light-700 font-medium group-hover:text-primary-600 transition-colors line-clamp-1">
                                            {navigation.next.title}
                                        </h3>
                                    </motion.div>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>
                    </ScrollReveal>

                    {/* 一覧に戻る */}
                    <ScrollReveal>
                        <div className="mt-12 text-center">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/news"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-light-100 hover:bg-light-200 text-light-700 font-medium rounded-full transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                    ニュース一覧に戻る
                                </Link>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}
