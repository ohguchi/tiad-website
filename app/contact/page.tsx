'use client'

import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import VideoBackground from '@/components/VideoBackground'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function ContactPage() {
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
                  お問い合わせ
                </span>
              </h1>
              <p className="text-2xl text-gray-300">Contact Us</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">
        <ParallaxSection speed={0.2}>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-3xl p-10 md:p-16 border border-dark-600 shadow-2xl">
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">お問い合わせフォーム</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
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
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollReveal delay={0.3} direction="up">
                  <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">営業時間</h3>
                    <p className="text-gray-300 text-lg">
                      平日 10:00 - 18:00
                      <br />
                      （土日祝日を除く）
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.4} direction="up">
                  <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">お問い合わせ</h3>
                    <p className="text-gray-300 text-lg">
                      メールフォームより
                      <br />
                      お気軽にお問い合わせください
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </div>
    </div>
  )
}


