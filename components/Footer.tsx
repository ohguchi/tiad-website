import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-light-800 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* 会社情報 */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="TiAD Logo"
              width={150}
              height={48}
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-light-300 mb-4 leading-relaxed">
              Tomorrow is Another Day
              <br />
              ICTを最大限に活用し働き方の最適化を提案
            </p>
            <p className="text-primary-400 font-medium">
              人財 × テクノロジー = ∞
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">ナビゲーション</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-light-300 hover:text-primary-400 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light-300 hover:text-primary-400 transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-light-300 hover:text-primary-400 transition-colors">
                  事業案内
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-300 hover:text-primary-400 transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-light-300 hover:text-primary-400 transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">お問い合わせ</h4>
            <p className="text-light-300 text-sm mb-6 leading-relaxed">
              ご質問やお問い合わせは
              <br />
              お気軽にご連絡ください
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors font-medium"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        <div className="border-t border-light-700 mt-12 pt-8 text-center text-light-400 text-sm">
          <p>Copyright © 2019-{currentYear} TiAD.LLC All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
