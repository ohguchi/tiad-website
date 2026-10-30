import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getAllNewsSlugs, getNewsItemBySlug, newsItems } from '@/lib/newsData'

// 全記事を静的に生成する
export function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }))
}

// 記事ごとの title / description を自動生成する
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getNewsItemBySlug(params.slug)
  if (!item) return { title: 'ページが見つかりません', robots: { index: false } }
  return {
    title: `${item.title}（${item.date}）`,
    description: item.content.replace(/\s+/g, ' ').slice(0, 80),
    alternates: { canonical: `/news/${item.slug}` },
  }
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const newsItem = getNewsItemBySlug(slug)

  if (!newsItem) {
    notFound()
  }

  // 前後の記事を取得
  const currentIndex = newsItems.findIndex((item) => item.slug === slug)
  const prev = currentIndex > 0 ? newsItems[currentIndex - 1] : null
  const next = currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null

  // 記事の構造化データ（日付は YYYY.MM.DD を YYYY-MM-DD にして渡す）
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: newsItem.title,
    datePublished: newsItem.date.replace(/\./g, '-'),
    mainEntityOfPage: `https://tiad.ai/news/${newsItem.slug}`,
    publisher: { '@type': 'Organization', name: 'TiAD合同会社', url: 'https://tiad.ai', logo: { '@type': 'ImageObject', url: 'https://tiad.ai/images/logo.png' } },
  }

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="border-b border-line">
        <div className="wrap pb-14 pt-12 md:pb-20 md:pt-16">
          <nav aria-label="パンくずリスト" className="eyebrow mb-10 flex flex-wrap gap-x-3">
            <Link href="/" className="link-line hover:text-ink">
              Home
            </Link>
            <span>/</span>
            <Link href="/news" className="link-line hover:text-ink">
              News
            </Link>
          </nav>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <time className="font-mono text-sm tracking-[0.06em] tabular-nums">{newsItem.date}</time>
            <span className="border border-line px-2 font-mono text-[11px] tracking-[0.1em]">{newsItem.category}</span>
          </div>
          <h1 className="m-0 max-w-[24em] text-[clamp(26px,3.6vw,44px)] font-bold leading-[1.5] tracking-[0.04em]">{newsItem.title}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-16 md:grid-cols-[200px_1fr] md:gap-12">
          <p className="eyebrow m-0 md:pt-1.5">Article</p>
          <div className="max-w-[40em]">
            <p className="m-0 whitespace-pre-wrap text-[17px] leading-[2.1]">{newsItem.content}</p>

            {/* 前後の記事 */}
            <div className="mt-16 grid border-t border-ink sm:grid-cols-2">
              {prev ? (
                <Link href={`/news/${prev.slug}`} className="group border-b border-line py-6 sm:pr-6">
                  <span className="eyebrow">← 新しい記事</span>
                  <span className="mt-2 block font-medium transition-colors group-hover:text-brand">{prev.title}</span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next && (
                <Link href={`/news/${next.slug}`} className="group border-b border-line py-6 sm:border-l sm:pl-6 sm:text-right">
                  <span className="eyebrow">古い記事 →</span>
                  <span className="mt-2 block font-medium transition-colors group-hover:text-brand">{next.title}</span>
                </Link>
              )}
            </div>

            <div className="mt-10">
              <Link href="/news" className="btn btn-ghost btn-sm">
                お知らせ一覧に戻る <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
