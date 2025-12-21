import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimationWrapper from '@/components/AnimationWrapper'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
})

export const metadata: Metadata = {
  title: 'TiAD.LLC | Tomorrow is Another Day',
  description: '人財×テクノロジー=∞ ICTを最大限に活用し働き方の最適化を提案するDX推進企業',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="dark scroll-smooth">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <AnimationWrapper>
          <Header />
          <main className="min-h-screen overflow-x-hidden">{children}</main>
          <Footer />
        </AnimationWrapper>
      </body>
    </html>
  )
}
