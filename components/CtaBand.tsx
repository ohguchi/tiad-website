import Link from 'next/link'

interface CtaBandProps {
  lead?: string
}

// ページ下部のお問い合わせ帯（ブランドの紺一色）
export default function CtaBand({ lead = 'DX推進や業務改善について、お気軽にご相談ください。' }: CtaBandProps) {
  return (
    <section className="bg-brand text-white">
      <div className="wrap grid gap-8 py-20 md:py-28">
        <p className="eyebrow m-0 text-brand-light">Let&apos;s talk about tomorrow</p>
        <h2 className="en m-0 text-[clamp(56px,11vw,150px)]">Contact</h2>
        <p className="m-0 text-[17px] text-brand-light">{lead}</p>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-white/25 pt-8">
          <Link href="/contact" className="btn btn-white">
            お問い合わせフォームへ <span className="arr">→</span>
          </Link>
          <span className="select-all font-mono text-sm tracking-[0.06em]">info@tiad.ai</span>
        </div>
      </div>
    </section>
  )
}
