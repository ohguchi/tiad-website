import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ページが見つかりません',
  robots: { index: false },
  // 親のcanonical（トップ）を引き継がないよう空にする
  alternates: {},
}

// 404ページ：日めくりと同じ大きな数字の意匠
export default function NotFound() {
  return (
    <section className="border-b border-line">
      <div className="wrap grid justify-items-start gap-6 py-[88px] md:py-[120px]">
        <p className="eyebrow m-0">404 — Not Found</p>
        <p className="m-0 font-display text-[clamp(112px,26vw,280px)] font-extrabold leading-none tracking-[-0.05em] tabular-nums">404</p>
        <h1 className="m-0 text-2xl font-bold tracking-[0.06em] md:text-3xl">この日は、まだ来ていません。</h1>
        <p className="eyebrow m-0 normal-case">The page you are looking for is not here yet.</p>
        <Link href="/" className="btn mt-4">
          トップへ戻る <span className="arr">→</span>
        </Link>
      </div>
    </section>
  )
}
