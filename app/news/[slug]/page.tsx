'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import SectionDivider from '@/components/SectionDivider'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { getNewsItemBySlug, getAllNewsSlugs } from '@/lib/newsData'

interface PageProps {
    params: Promise<{ slug: string }>
}

export default function NewsDetailPage({ params }: PageProps) {
    const { slug } = use(params)
    const newsItem = getNewsItemBySlug(slug)

    const heroRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    if (!newsItem) {
        notFound()
    }

    return (
        <div className="pt-0 pb-0">
            {/* ヒーローセクション */}
            <section
                ref={heroRef}
                className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-light-100 via-white to-white"
            >
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="container mx-auto px-4 lg:px-8 relative z-10 py-24"
                >
                    <ScrollReveal>
                        <div className="text-center">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-primary-500 text-sm md:text-base mb-4 tracking-widest font-medium"
                            >
                                NEWS
                            </motion.p>
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <span className="px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold">
                                    {newsItem.category}
                                </span>
                                <span className="text-light-500 text-base">{newsItem.date}</span>
                            </div>
                            <h1 className="text-2xl md:text-4xl font-bold text-light-800">
                                {newsItem.title}
                            </h1>
                        </div>
                    </ScrollReveal>
                </motion.div>
            </section>

            <SectionDivider variant="curve" color="#ffffff" />

            <div className="container mx-auto px-4 lg:px-8 py-16 bg-white">
                <div className="max-w-3xl mx-auto">
                    {/* コンテンツ */}
                    <ScrollReveal>
                        <article className="prose prose-lg max-w-none">
                            <div className="bg-light-50 rounded-2xl p-8 border border-light-200">
                                <p className="text-light-700 leading-relaxed text-lg whitespace-pre-wrap">
                                    {newsItem.content}
                                </p>
                            </div>
                        </article>
                    </ScrollReveal>

                    {/* 戻るリンク */}
                    <ScrollReveal>
                        <div className="mt-12 text-center">
                            <motion.div whileHover={{ x: -5 }} className="inline-block">
                                <Link
                                    href="/news"
                                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors font-medium"
                                >
                                    ← ニュース一覧に戻る
                                </Link>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}
