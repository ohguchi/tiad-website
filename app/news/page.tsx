'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import SectionDivider from '@/components/SectionDivider'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { newsItems } from '@/lib/newsData'

export default function NewsPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-light-800">
                お知らせ
              </h1>
              <p className="text-lg text-light-500">
                TiADからの最新情報をお届けします
              </p>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>

      <SectionDivider variant="curve" color="#fafafa" />

      {/* ニュース一覧 */}
      <section className="py-16 md:py-24 bg-light-50">
        <div className="container mx-auto px-4 lg:px-8">
          <ParallaxSection speed={0.1}>
            <div className="max-w-4xl mx-auto">
              {/* カテゴリフィルターなどを追加できる場所 */}
              <ScrollReveal>
                <div className="mb-12">
                  <p className="text-light-500 text-center">
                    {newsItems.length}件のお知らせがあります
                  </p>
                </div>
              </ScrollReveal>

              {/* ニュースカード一覧 */}
              <div className="space-y-6">
                {newsItems.map((item, index) => (
                  <ScrollReveal key={item.id} delay={index * 0.1} direction="up">
                    <Link href={`/news/${item.slug}`}>
                      <motion.article
                        whileHover={{ x: 8 }}
                        className="group bg-white rounded-2xl p-6 md:p-8 border border-light-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl cursor-pointer"
                      >
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          {/* 日付 */}
                          <div className="md:w-32 flex-shrink-0">
                            <span className="text-light-400 text-sm font-medium">
                              {item.date}
                            </span>
                          </div>

                          {/* カテゴリとタイトル */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-bold border border-primary-100">
                                {item.category}
                              </span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold text-light-800 group-hover:text-primary-600 transition-colors">
                              {item.title}
                            </h2>
                            <p className="text-light-500 text-sm mt-2 line-clamp-2">
                              {item.content}
                            </p>
                          </div>

                          {/* 矢印アイコン */}
                          <div className="flex-shrink-0 text-light-300 group-hover:text-primary-500 transition-colors">
                            <motion.div
                              className="w-10 h-10 rounded-full border border-light-200 group-hover:border-primary-300 group-hover:bg-primary-50 flex items-center justify-center transition-all"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ParallaxSection>
        </div>
      </section>

      <SectionDivider variant="diagonal" color="#ffffff" flip={true} />

      {/* CTAセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-light-800 mb-4">
                お問い合わせ
              </h2>
              <p className="text-light-500 mb-8">
                サービスに関するご質問やお見積もりのご依頼など、お気軽にお問い合わせください。
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  お問い合わせフォームへ
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
