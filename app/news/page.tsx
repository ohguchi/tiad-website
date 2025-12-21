import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お知らせ | TiAD.LLC',
  description: 'TiADのお知らせ一覧',
}

interface NewsItem {
  id: number
  title: string
  date: string
  category?: string
}

const newsItems: NewsItem[] = [
  { id: 1, title: '新規案件受注のお知らせ', date: '2024.12.20', category: 'お知らせ' },
  { id: 2, title: 'コールセンター部門の立ち上げにつきまして', date: '2024.11.15', category: 'お知らせ' },
  { id: 3, title: '新規案件受注のお知らせ', date: '2024.10.10', category: 'お知らせ' },
  { id: 4, title: '2拠点間IPsec VPNの提供について', date: '2024.09.05', category: 'サービス' },
  { id: 5, title: '新規案件の受注', date: '2024.08.20', category: 'お知らせ' },
  { id: 6, title: 'ソフトウェア販売開始', date: '2024.07.15', category: 'サービス' },
  { id: 7, title: '新規案件の受注', date: '2024.06.10', category: 'お知らせ' },
  { id: 8, title: '新規案件の受注', date: '2024.05.25', category: 'お知らせ' },
]

export default function NewsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              NEWS
            </span>
          </h1>
          <p className="text-xl text-gray-400">お知らせ</p>
        </div>

        {/* ニュース一覧 */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-dark-800 rounded-xl p-6 hover:bg-dark-700 transition-all duration-300 border border-dark-700 hover:border-primary-500/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {item.category && (
                        <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-xs font-semibold">
                          {item.category}
                        </span>
                      )}
                      <span className="text-gray-500 text-sm">{item.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white">{item.title}</h2>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


