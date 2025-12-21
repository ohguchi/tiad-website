import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '事業案内 | TiAD.LLC',
  description: 'TiADの事業案内 - Business Information',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'AI・IoT・RPAソリューション',
      description: '最新のAI、IoT、RPA技術を活用した業務自動化と効率化のソリューションを提供します。',
      features: [
        '業務プロセスの自動化',
        'データ分析と予測',
        'IoTデバイス連携',
        'RPAによる定型業務の効率化',
      ],
    },
    {
      title: '働き方改革コンサルティング',
      description: 'ICT技術を活用した真の働き方改革を実現するためのコンサルティングサービスです。',
      features: [
        '業務フロー分析',
        'ICT活用提案',
        '導入支援',
        '効果測定と改善',
      ],
    },
    {
      title: 'システム開発',
      description: 'お客様のニーズに合わせたカスタムシステムの開発を行います。',
      features: [
        'Webアプリケーション開発',
        'モバイルアプリ開発',
        'クラウドシステム構築',
        '既存システムのリニューアル',
      ],
    },
    {
      title: 'ネットワーク構築',
      description: '安全で効率的なネットワークインフラの構築と運用をサポートします。',
      features: [
        'VPN構築（IPsec等）',
        'セキュリティ対策',
        'ネットワーク設計',
        '運用・保守サポート',
      ],
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              事業案内
            </span>
          </h1>
          <p className="text-xl text-gray-400">Business Information</p>
        </div>

        {/* サービス一覧 */}
        <div className="max-w-6xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-2xl p-8 md:p-12 hover:bg-dark-700 transition-all duration-300 border border-dark-700 hover:border-primary-500/50"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">{service.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <svg
                      className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTAセクション */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">お問い合わせ</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              サービスに関するご質問やお見積もりは、お気軽にお問い合わせください
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>

        {/* 制作実績へのリンク */}
        <div className="mt-12 text-center">
          <Link
            href="/services/portfolio"
            className="inline-block text-primary-400 hover:text-primary-300 transition-colors text-lg"
          >
            制作実績を見る →
          </Link>
        </div>
      </div>
    </div>
  )
}


