import Link from 'next/link'
import { productHref, products } from '@/lib/productsData'

// 自社サービスの一覧（トップページと事業案内で共通）。3列に並べ、名前をクリックすると詳細ページへ
export default function ProductList() {
  return (
    <div className="grid border-t border-ink md:grid-cols-3">
      {products.map((p) => (
        <Link
          key={p.slug}
          href={productHref(p)}
          className="group grid content-start gap-3 border-b border-line py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
        >
          <span className="eyebrow tabular-nums">
            {p.release} 提供開始 — {p.category}
          </span>
          <span className="en block text-[clamp(40px,5.2vw,64px)] transition-[transform,color] duration-500 ease-sharp group-hover:translate-x-2.5 group-hover:text-brand">
            {p.name}
          </span>
          <span className="block text-[15px] font-bold leading-[1.7] tracking-[0.04em]">{p.tagline}</span>
          <span className="mt-1 inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em]">
            <span className="inline-grid h-9 w-9 place-items-center border border-ink transition-[background,color,transform] duration-300 ease-sharp group-hover:translate-x-1 group-hover:bg-ink group-hover:text-white">
              →
            </span>
            詳しく見る
          </span>
        </Link>
      ))}
    </div>
  )
}
