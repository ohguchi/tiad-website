import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { newsItems, NewsItem } from '@/lib/newsData'
import type { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: 'お知らせ',
  description:
    'TiAD合同会社の受注・サービスのお知らせ一覧です。',
  alternates: { canonical: '/news' },
}

export default function NewsPage() {
  const groupedNews = groupNewsByYear(newsItems)
  const years = Object.keys(groupedNews).sort((a, b) => Number(b) - Number(a))

  return (
    <>
      <PageHero en="News" ja="お知らせ" lead={`TiADからの最新情報をお届けします。（全${newsItems.length}件）`} />

      <section className="py-[88px] md:py-[120px]">
        <div className="wrap grid gap-16">
          {years.map((year) => (
            <div key={year} className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-12">
              <h2 className="en m-0 text-5xl md:sticky md:top-[100px] md:self-start">{year}</h2>
              <div className="border-t border-ink">
                {groupedNews[year].map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="group grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2 border-b border-line py-6 md:grid-cols-[80px_110px_1fr_auto]"
                  >
                    <time className="font-mono text-[13px] tracking-[0.06em] text-mute tabular-nums">
                      {item.date.split('.').slice(1).join('.')}
                    </time>
                    <span className="justify-self-start border border-line px-2 font-mono text-[11px] tracking-[0.1em]">{item.category}</span>
                    <div className="col-span-2 min-w-0 md:col-span-1">
                      <h3 className="m-0 text-lg font-bold transition-colors group-hover:text-brand">{item.title}</h3>
                      <p className="m-0 mt-1 line-clamp-2 text-sm text-mute">{item.content}</p>
                    </div>
                    <span className="hidden transition-transform duration-500 ease-sharp group-hover:translate-x-1.5 md:block">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand lead="サービスに関するご質問やお見積もりのご依頼など、お気軽にお問い合わせください。" />
    </>
  )
}
