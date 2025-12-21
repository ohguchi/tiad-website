import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '制作実績 | TiAD.LLC',
  description: 'TiADの制作実績 - Production Results',
}

export default function PortfolioPage() {
  const portfolios = [
    {
      title: 'コールセンター部門の立ち上げ',
      description: 'コールセンター業務の効率化と顧客対応品質向上のためのシステム構築',
      category: 'システム開発',
      year: '2024',
    },
    {
      title: '2拠点間IPsec VPNの提供',
      description: 'セキュアな拠点間通信を実現するVPNネットワークの構築',
      category: 'ネットワーク構築',
      year: '2024',
    },
    {
      title: 'ソフトウェア販売開始',
      description: '業務効率化ソフトウェアの開発と販売開始',
      category: 'ソフトウェア開発',
      year: '2024',
    },
    {
      title: '新規案件受注',
      description: '複数の企業様から新規案件を承り、システム構築を実施',
      category: 'システム開発',
      year: '2024',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              制作実績
            </span>
          </h1>
          <p className="text-xl text-gray-400">Production Results</p>
        </div>

        {/* 実績一覧 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolios.map((portfolio, index) => (
              <div
                key={index}
                className="bg-dark-800 rounded-2xl p-8 hover:bg-dark-700 transition-all duration-300 border border-dark-700 hover:border-primary-500/50 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold">
                    {portfolio.category}
                  </span>
                  <span className="text-gray-500 text-sm">{portfolio.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {portfolio.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{portfolio.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* お問い合わせセクション */}
        <div className="mt-20 text-center">
          <div className="bg-dark-800 rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">お問い合わせ</h2>
            <p className="text-gray-400 mb-8">
              実績に関するご質問や、同様のプロジェクトのご相談はお気軽にお問い合わせください
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

