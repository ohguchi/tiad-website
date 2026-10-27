import Link from 'next/link'

export default function NewsNotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="wrap">
        <p className="en m-0 text-[clamp(80px,16vw,200px)]">404</p>
        <p className="mb-10 mt-6 text-lg">お探しのお知らせは見つかりませんでした。</p>
        <Link href="/news" className="btn btn-ghost">
          お知らせ一覧に戻る <span className="arr">→</span>
        </Link>
      </div>
    </section>
  )
}
