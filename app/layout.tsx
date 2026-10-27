import type { Metadata } from 'next'
import { Archivo, IBM_Plex_Mono, Zen_Kaku_Gothic_New } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MotionProvider from '@/components/MotionProvider'

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
  title: 'TiAD.LLC | Tomorrow is Another Day',
  description: '人財×テクノロジー=∞ ICTを最大限に活用し働き方の最適化を提案するDX推進企業',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${archivo.variable} ${zen.variable} ${plexMono.variable}`}>
        <MotionProvider>
          <Header />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
