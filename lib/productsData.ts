// 自社サービス（NEXUS・LINK・IRIS）の共通データ
// トップページ・事業案内・制作実績の一覧と、各詳細ページの構造化データで使う。
//
// 追加・変更するときの決まり
// - 提供開始の古い順に並べる（年表と同じ並び）
// - release は 'YYYY.MM' 形式
// - 詳細ページは app/services/portfolio/<slug>/page.tsx

export interface Product {
  slug: string
  name: string
  release: string
  category: string
  tagline: string
  lead: string
}

export const products: Product[] = [
  {
    slug: 'nexus',
    name: 'NEXUS',
    release: '2025.10',
    category: '基幹業務システム',
    tagline: '現場から経理まで、会社の業務をひとつにつなぐ基幹システム',
    lead: '工程管理・従業員管理・勤怠管理・日報作成/経費精算・経理/会計を、ひとつのデータベースで結びます。現場の入力が、原価・給与・仕訳までそのまま届きます。',
  },
  {
    slug: 'link',
    name: 'LINK',
    release: '2026.02',
    category: '業務Webアプリ',
    tagline: '営業・バックヤード・エンドユーザーをつなぐ業務Webアプリ',
    lead: '営業が登録した案件を軸に、顧客管理、現地イベントの予約・アンケート、Web問い合わせ・コールバック予約、バックヤードでの履歴・タスク管理までをひとつにつなぎます。',
  },
  {
    slug: 'iris',
    name: 'IRIS',
    release: '2026.11',
    category: 'SNS投稿評価システム',
    tagline: '店舗のInstagram投稿を、AIの目で評価・共有するサービス',
    lead: '各店舗が投稿した写真と本文を、本部の規定に照らしてAIが加点・減点で評価します。良い投稿を他店舗へ横展開し、店舗PRの品質とブランドの見せ方をそろえます。',
  },
]

// 詳細ページのURL（サイト内リンク用）
export function productHref(p: Product): string {
  return `/services/portfolio/${p.slug}`
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

// 検索エンジン向けの構造化データ（ソフトウェア製品として登録する）
export function productJsonLd(p: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: p.name,
    alternateName: `${p.name}（${p.category}）`,
    description: `${p.tagline}。${p.lead}`,
    url: `https://tiad.ai${productHref(p)}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    // 'YYYY.MM' を 'YYYY-MM' にして渡す
    datePublished: p.release.replace('.', '-'),
    author: { '@id': 'https://tiad.ai/#organization' },
    provider: { '@id': 'https://tiad.ai/#organization' },
  }
}
