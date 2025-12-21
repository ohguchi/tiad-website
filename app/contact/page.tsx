'use client'

import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import SectionDivider from '@/components/SectionDivider'
import { IconClock, IconMail } from '@/components/Icons'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ContactPage() {
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
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white"
      >
        {/* 装飾 */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary-100/50 to-secondary-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <motion.div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary-100/40 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

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
                CONTACT
              </motion.p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light-800">
                お問い合わせ
              </h1>
              <p className="text-lg text-light-500">Contact Us</p>
            </div>
          </ScrollReveal>
        </motion.div>
      </section>

      <SectionDivider variant="curve" color="#ffffff" />

      <div className="container mx-auto px-4 lg:px-8 py-16 bg-white">
        <ParallaxSection speed={0.05}>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-light-200 shadow-sm">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-light-800 mb-4">お問い合わせフォーム</h2>
                  <p className="text-light-500 leading-relaxed">
                    以下のフォームにご記入の上、送信してください。
                    <br />
                    お問い合わせ内容を確認次第、担当者よりご連絡いたします。
                  </p>
                </div>

                <ContactForm />
              </div>
            </ScrollReveal>

            {/* 連絡先情報 */}
            <ScrollReveal delay={0.2}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-light-50 rounded-2xl p-8 border border-light-200 hover:border-primary-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-4">
                    <IconClock size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-light-800 mb-2">営業時間</h3>
                  <p className="text-light-500">
                    平日 10:00 - 18:00
                    <br />
                    （土日祝日を除く）
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-light-50 rounded-2xl p-8 border border-light-200 hover:border-secondary-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center mb-4">
                    <IconMail size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-light-800 mb-2">お問い合わせ</h3>
                  <p className="text-light-500">
                    メールフォームより
                    <br />
                    お気軽にお問い合わせください
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </div>
    </div>
  )
}
