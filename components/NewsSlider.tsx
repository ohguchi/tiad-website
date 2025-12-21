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
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-64 md:h-80 bg-dark-800 rounded-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold mb-4">
                NEWS
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {newsItems[currentIndex].title}
              </h3>
              <p className="text-gray-400">{newsItems[currentIndex].date}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ナビゲーションボタン */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-700/80 hover:bg-dark-700 rounded-full flex items-center justify-center text-white transition-all z-10"
          aria-label="前へ"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-700/80 hover:bg-dark-700 rounded-full flex items-center justify-center text-white transition-all z-10"
          aria-label="次へ"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* インジケーター */}
      <div className="flex justify-center mt-6 space-x-2">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-primary-500'
                : 'w-2 bg-dark-600 hover:bg-dark-500'
            }`}
            aria-label={`スライド ${index + 1}`}
          />
        ))}
      </div>

      {/* 全てのニュースを見るリンク */}
      <div className="text-center mt-8">
        <Link
          href="/news"
          className="inline-block text-primary-400 hover:text-primary-300 transition-colors"
        >
          全てのニュースを見る →
        </Link>
      </div>
    </div>
  )
}


