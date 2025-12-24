'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import VideoBackground from '@/components/VideoBackground'
import AnimatedBackground from '@/components/AnimatedBackground'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { newsItems } from '@/lib/newsData'

export default function NewsPage() {
  return (
    <div className="pt-0 pb-0">
      {/* ヒーローセクション */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <VideoBackground
          imageSrc="/images/hero-pattern.svg"
          overlay={true}
          className="absolute inset-0"
        >
          <AnimatedBackground />
        </VideoBackground>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                  NEWS
                </span>
              </h1>
              <p className="text-2xl text-gray-300">お知らせ</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* ニュース一覧 */}
        <ParallaxSection speed={0.2}>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.1} direction="up">
                  <Link href={`/news/${item.slug}`}>
                    <motion.article
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            {item.category && (
                              <span className="px-4 py-2 bg-primary-600/30 backdrop-blur-sm text-primary-300 rounded-full text-sm font-bold border border-primary-500/50">
                                {item.category}
                              </span>
                            )}
                            <span className="text-gray-400 text-base">{item.date}</span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h2>
                        </div>
                        <div className="text-primary-400">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
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
    </div>
  )
}
