import Hero from '@/components/Hero'
import NewsSlider from '@/components/NewsSlider'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const services = [
    {
      title: 'AI・IoT・RPA',
      description: '新しい労働力となりうるICT技術を用いて、労働そのものの削減と業務の最適化を提案します。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: '働き方改革',
      description: '労働時間の削減だけでなく、真の働き方改革を実現するためのソリューションを提供します。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'ICT活用',
      description: 'ICTを最大限に活用し、働き方の最適化を提案。人の持つ可能性を広げる技術を提供します。',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="pt-20">
      <Hero />
      
      {/* メッセージセクション */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                人財 × テクノロジー = ∞
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                人の持つ可能性を広げるために
                <br />
                人との結びつきを強くするために
                <br />
                私たちは新時代の技術を提供していきます
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ニュースセクション */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">NEWS</h2>
          <NewsSlider />
        </div>
      </section>

      {/* サービス紹介セクション */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">私たちのサービス</h2>
            <p className="text-gray-400 text-lg">
              ICT技術を活用した働き方改革のソリューション
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            働き方改革やICT活用について、お気軽にご相談ください
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </div>
  )
}

