'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface NewsItem {
  id: number
  title: string
  date: string
  category?: string
}

const newsItems: NewsItem[] = [
  { id: 1, title: '新規案件受注のお知らせ', date: '2024.12.20' },
  { id: 2, title: 'コールセンター部門の立ち上げにつきまして', date: '2024.11.15' },
  { id: 3, title: '新規案件受注のお知らせ', date: '2024.10.10' },
  { id: 4, title: '2拠点間IPsec VPNの提供について', date: '2024.09.05' },
  { id: 5, title: '新規案件の受注', date: '2024.08.20' },
  { id: 6, title: 'ソフトウェア販売開始', date: '2024.07.15' },
  { id: 7, title: '新規案件の受注', date: '2024.06.10' },
  { id: 8, title: '新規案件の受注', date: '2024.05.25' },
]

export default function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative h-80 md:h-96 bg-white rounded-3xl overflow-hidden border border-light-200 shadow-xl">
        {/* 背景パターン */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 flex items-center justify-center p-8 md:p-12"
          >
            <div className="text-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-block px-6 py-3 bg-primary-50 text-primary-500 rounded-full text-sm font-bold mb-6 border border-primary-100"
              >
                NEWS
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl font-bold text-light-800 mb-6 leading-tight"
              >
                {newsItems[currentIndex].title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-light-500 text-lg md:text-xl"
              >
                {newsItems[currentIndex].date}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ナビゲーションボタン */}
        <motion.button
          onClick={goToPrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-light-100 hover:bg-primary-500 rounded-full flex items-center justify-center text-light-600 hover:text-white transition-all z-10 border border-light-200 hover:border-primary-500 shadow-md"
          aria-label="前へ"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button
          onClick={goToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-light-100 hover:bg-primary-500 rounded-full flex items-center justify-center text-light-600 hover:text-white transition-all z-10 border border-light-200 hover:border-primary-500 shadow-md"
          aria-label="次へ"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* インジケーター */}
      <div className="flex justify-center mt-8 space-x-3">
        {newsItems.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full transition-all ${index === currentIndex
                ? 'w-10 h-3 bg-primary-500'
                : 'w-3 h-3 bg-light-300 hover:bg-light-400'
              }`}
            aria-label={`スライド ${index + 1}`}
          />
        ))}
      </div>

      {/* 全てのニュースを見るリンク */}
      <div className="text-center mt-8">
        <Link
          href="/news"
          className="inline-block text-primary-500 hover:text-primary-600 transition-colors font-medium"
        >
          全てのニュースを見る →
        </Link>
      </div>
    </div>
  )
}
