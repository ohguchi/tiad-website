import type { Metadata } from 'next'
import { Archivo, IBM_Plex_Mono, Zen_Kaku_Gothic_New } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MotionProvider from '@/components/MotionProvider'
import JsonLd from '@/components/JsonLd'

// 英字見出し用（幅を変えられる可変フォント）
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
})

// 本文用
const zen = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-zen',
})

// 日付・ラベル用（等幅）
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tiad.ai'),
  title: {
    default: 'TiAD合同会社｜名古屋のDX推進・AI/RPA導入・インフラ保守',
    template: '%s｜TiAD合同会社',
  },
  description:
    '名古屋市北区のTiAD合同会社。データセンターのサーバー保守、VMware運用、集合住宅向けインターネット回線導入、中小企業向けの業務改善アプリ開発とAI・RPA導入を行うDX推進企業です。',
  openGraph: { type: 'website', locale: 'ja_JP', siteName: 'TiAD合同会社', images: ['/images/og.png'] },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
}

// 会社の構造化データ（検索エンジン向け。電話番号は非公開のため入れない）
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://tiad.ai/#organization',
      name: 'TiAD合同会社',
      alternateName: 'TiAD.LLC',
      url: 'https://tiad.ai',
      logo: 'https://tiad.ai/images/logo.png',
      email: 'info@tiad.ai',
      foundingDate: '2019-04',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://tiad.ai/#service',
      name: 'TiAD合同会社',
      alternateName: 'TiAD.LLC',
      url: 'https://tiad.ai',
      logo: 'https://tiad.ai/images/logo.png',
      image: 'https://tiad.ai/images/og.png',
      email: 'info@tiad.ai',
      foundingDate: '2019-04',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'JP',
        postalCode: '462-0805',
        addressRegion: '愛知県',
        addressLocality: '名古屋市北区',
        streetAddress: '八龍町1丁目77番地',
      },
      areaServed: ['名古屋市', '愛知県', '日本'],
      parentOrganization: { '@id': 'https://tiad.ai/#organization' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${archivo.variable} ${zen.variable} ${plexMono.variable}`}>
        <JsonLd data={organizationJsonLd} />
        <MotionProvider>
          <Header />
          {/* overflow-x-clip：横にはみ出した分は隠すが、hidden と違って sticky（年表の固定）を妨げない */}
          <main className="overflow-x-clip">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
