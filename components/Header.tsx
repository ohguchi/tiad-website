'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'ホーム', href: '/', en: 'Home' },
    {
      name: '会社概要',
      href: '/about',
      en: "Company's Outline",
      submenu: [{ name: 'TiADとは', href: '/about', en: 'What TiAD' }],
    },
    {
      name: '事業案内',
      href: '/services',
      en: 'Business Information',
      submenu: [{ name: '制作実績', href: '/services/portfolio', en: 'Production Results' }],
    },
    { name: 'お問い合わせ', href: '/contact', en: 'Contact Us' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-light-200' : 'bg-white/80 backdrop-blur-sm'
        }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <Image
              src="/images/logo.png"
              alt="TiAD Logo"
              width={120}
              height={38}
              className="h-8 w-auto"
            />
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-light-600 hover:text-primary-500 transition-colors duration-200 py-2 font-medium"
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-light-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-3 text-sm text-light-600 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* CTAボタン */}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-light-700 p-2 z-50"
            aria-label="メニュー"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-light-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-light-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-light-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-light-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-light-700 hover:text-primary-500 transition-colors border-b border-light-100"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-light-400">{item.en}</span>
                    </div>
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-light-500 hover:text-primary-500 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
