import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'

export default function ContactPage() {
  return (
    <>
      <PageHero
        en="Contact"
        ja="お問い合わせ"
        lead="以下のフォームにご記入の上、送信してください。お問い合わせ内容を確認次第、担当者よりご連絡いたします。"
      />

      <section className="py-[88px] md:py-[120px]">
        <div className="wrap grid gap-14 md:grid-cols-[280px_1fr] md:gap-16">
          <dl className="m-0 grid content-start border-t border-ink">
            <div className="border-b border-line py-6">
              <dt className="eyebrow">Hours</dt>
              <dd className="m-0 mt-2">
                <span className="font-bold">平日 10:00 - 18:00</span>
                <br />
                <span className="text-sm text-mute">（土日祝日を除く）</span>
              </dd>
            </div>
            <div className="border-b border-line py-6">
              <dt className="eyebrow">Mail</dt>
              <dd className="m-0 mt-2">
                <span className="select-all font-mono">info@tiad.ai</span>
                <br />
                <span className="text-sm text-mute">メールフォームより、お気軽にお問い合わせください。</span>
              </dd>
            </div>
          </dl>

          <div className="min-w-0">
            <h2 className="mb-8 mt-0 text-xl font-bold tracking-[0.04em]">お問い合わせフォーム</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
