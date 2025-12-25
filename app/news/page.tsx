'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import SectionDivider from '@/components/SectionDivider'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef, useMemo } from 'react'
import { newsItems, NewsItem } from '@/lib/newsData'

// 年ごとにニュースをグルーピングする関数
function groupNewsByYear(items: NewsItem[]): Record<string, NewsItem[]> {
  return items.reduce((groups, item) => {
    const year = item.date.split('.')[0]
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(item)
    return groups
  }, {} as Record<string, NewsItem[]>)
}

export default function NewsPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // ニュースを年ごとにグループ化
  const groupedNews = useMemo(() => groupNewsByYear(newsItems), [])
  const years = useMemo(() => Object.keys(groupedNews).sort((a, b) => Number(b) - Number(a)), [groupedNews])

  return (
    <div className="pt-0 pb-0">
      {/* ヒーローセクション */}
      <section
        ref={heroRef}
        className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-light-100 via-white to-white"
      >
        {/* 装飾的な背景パターン */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100 rounded-full blur-3xl" />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 lg:px-8 relative z-10 py-24"
        >
          <ScrollReveal>
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-400 text-white text-sm font-bold rounded-full shadow-lg">
                  NEWS
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4 text-light-800"
              >
                お知らせ
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-light-500"
              >
                TiADからの最新情報をお届けします
              </motion.p>
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
              {/* 件数表示 */}
              <ScrollReveal>
                <div className="mb-12 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-light-200 shadow-sm">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                    <span className="text-light-600 text-sm">
                      {newsItems.length}件のお知らせ
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* 年ごとのニュースグループ */}
              <div className="space-y-16">
                {years.map((year, yearIndex) => (
                  <ScrollReveal key={year} delay={yearIndex * 0.1}>
                    <div>
                      {/* 年ヘッダー */}
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '3rem' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
                          className="h-0.5 bg-gradient-to-r from-primary-500 to-primary-300"
                        />
                        <h2 className="text-3xl md:text-4xl font-bold text-light-300">
                          {year}
                        </h2>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: yearIndex * 0.1 + 0.2 }}
                          className="flex-1 h-0.5 bg-gradient-to-r from-primary-300 to-transparent"
                        />
                      </div>

                      {/* 該当年のニュースカード */}
                      <div className="space-y-4">
                        {groupedNews[year].map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                          >
                            <Link href={`/news/${item.slug}`}>
                              <motion.article
                                whileHover={{ x: 8, scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                className="group relative bg-white rounded-2xl overflow-hidden border border-light-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl"
                              >
                                {/* カテゴリに応じたアクセントライン */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.category === 'サービス' ? 'bg-gradient-to-b from-secondary-400 to-secondary-500' : 'bg-gradient-to-b from-primary-400 to-primary-500'}`} />

                                <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 md:p-8 pl-6 md:pl-10">
                                  {/* 日付 - 月.日表示 */}
                                  <div className="md:w-24 flex-shrink-0">
                                    <div className="flex md:flex-col items-baseline md:items-start gap-1">
                                      <span className="text-2xl md:text-3xl font-bold text-primary-500">
                                        {item.date.split('.').slice(1).join('.')}
                                      </span>
                                    </div>
                                  </div>

                                  {/* 縦区切り線 (デスクトップのみ) */}
                                  <div className="hidden md:block w-px h-16 bg-light-200" />

                                  {/* カテゴリとタイトル */}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${item.category === 'サービス' ? 'bg-secondary-50 text-secondary-600 border-secondary-200' : 'bg-primary-50 text-primary-600 border-primary-200'}`}>
                                        {item.category}
                                      </span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-light-800 group-hover:text-primary-600 transition-colors line-clamp-1">
                                      {item.title}
                                    </h3>
                                    <p className="text-light-500 text-sm mt-2 line-clamp-2">
                                      {item.content}
                                    </p>
                                  </div>

                                  {/* 矢印アイコン */}
                                  <div className="flex-shrink-0 text-light-300 group-hover:text-primary-500 transition-colors">
                                    <motion.div
                                      className="w-10 h-10 rounded-full border border-light-200 group-hover:border-primary-300 group-hover:bg-primary-50 flex items-center justify-center transition-all"
                                      whileHover={{ scale: 1.1 }}
                                    >
                                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </motion.div>
                                  </div>
                                </div>
                              </motion.article>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ParallaxSection>
        </div>
      </section>

      <SectionDivider variant="diagonal" color="#ffffff" flip={true} />

      {/* CTAセクション */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* 装飾的な背景 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-100 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  お問い合わせフォームへ
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
