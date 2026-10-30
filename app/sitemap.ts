import type { MetadataRoute } from 'next'
import { newsItems } from '@/lib/newsData'

const BASE = 'https://tiad.ai'

// 静的ページの一覧
const staticPaths = [
  '/',
  '/about',
  '/services',
  '/services/portfolio',
  '/services/portfolio/link',
  '/services/portfolio/nexus',
  '/news',
  '/contact',
  '/privacy-policy',
  '/approach/ai-iot-rpa',
  '/approach/ict-utilization',
  '/approach/work-style-reform',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticPaths.map((path) => ({ url: `${BASE}${path === '/' ? '' : path}` }))
  // お知らせは記事の日付（YYYY.MM.DD）を最終更新日にする
  const news = newsItems.map((item) => ({
    url: `${BASE}/news/${item.slug}`,
    lastModified: new Date(item.date.replace(/\./g, '-')),
  }))
  return [...pages, ...news]
}
