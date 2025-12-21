import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              TiAD<span className="text-primary-400">.LLC</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Tomorrow is Another Day
              <br />
              ICTを最大限に活用し働き方の最適化を提案
            </p>
            <p className="text-sm text-gray-500">
              人財 × テクノロジー = ∞
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="text-white font-semibold mb-4">ナビゲーション</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  事業案内
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-white font-semibold mb-4">お問い合わせ</h4>
            <p className="text-gray-400 text-sm mb-4">
              ご質問やお問い合わせは
              <br />
              お気軽にご連絡ください
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>Copyright © 2019-{currentYear} TiAD.LLC All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}


