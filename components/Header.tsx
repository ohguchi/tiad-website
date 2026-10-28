'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: '会社概要', href: '/about', en: 'Company' },
  { name: '事業案内', href: '/services', en: 'Service' },
  { name: '制作実績', href: '/services/portfolio', en: 'Works' },
  { name: 'お知らせ', href: '/news', en: 'News' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // ページを移動したらメニューを閉じる
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // メニューを開いている間は背面をスクロールさせない
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <nav className="wrap flex h-[68px] items-center justify-between gap-6" aria-label="メイン">
        <Link href="/" className="relative z-50 shrink-0" aria-label="TiAD ホーム">
          <Image src="/images/logo.png" alt="TiAD Tomorrow is Another Day" width={120} height={38} className="h-[30px] w-auto" priority />
        </Link>

        {/* デスクトップ */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`link-line py-1 text-sm font-medium ${active ? 'after:!scale-x-100' : ''}`}
              >
                {item.name}
              </Link>
            )
          })}
          <Link href="/contact" className="btn btn-sm">
            お問い合わせ <span className="arr">→</span>
          </Link>
        </div>

        {/* モバイル：メニューボタン */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex items-center gap-3 font-mono text-xs tracking-[0.12em] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? 'CLOSE' : 'MENU'}
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ${isOpen ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ${isOpen ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {/* モバイル：全画面メニュー */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[68px] z-40 overflow-y-auto bg-white transition-[clip-path] duration-500 ease-sharp lg:hidden ${
          isOpen ? '[clip-path:inset(0_0_0_0)]' : 'pointer-events-none [clip-path:inset(0_0_100%_0)]'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="wrap py-6">
          {[{ name: 'ホーム', href: '/', en: 'Home' }, ...navItems, { name: 'お問い合わせ', href: '/contact', en: 'Contact' }].map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={isOpen ? 0 : -1}
                className="flex items-baseline justify-between border-b border-line py-5"
              >
                <span className="en text-4xl">{item.en}</span>
                <span className="text-sm font-bold">{item.name}</span>
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  )
}
