import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ | TiAD.LLC',
  description: 'TiADへのお問い合わせ - Contact Us',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              お問い合わせ
            </span>
          </h1>
          <p className="text-xl text-gray-400">Contact Us</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-700">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">お問い合わせフォーム</h2>
              <p className="text-gray-400">
                以下のフォームにご記入の上、送信してください。
                <br />
                お問い合わせ内容を確認次第、担当者よりご連絡いたします。
              </p>
            </div>

            <ContactForm />
          </div>

          {/* 連絡先情報 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
              <h3 className="text-xl font-bold text-white mb-4">営業時間</h3>
              <p className="text-gray-400">
                平日 10:00 - 18:00
                <br />
                （土日祝日を除く）
              </p>
            </div>
            <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
              <h3 className="text-xl font-bold text-white mb-4">お問い合わせ</h3>
              <p className="text-gray-400">
                メールフォームより
                <br />
                お気軽にお問い合わせください
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


