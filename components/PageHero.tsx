import Link from 'next/link'
import Photo from './Photo'

interface PageHeroProps {
  en: string
  ja: string
  lead?: string
  image?: string
  imageAlt?: string
  // 画像を切り抜くときに残したい位置（例：'center 30%' なら上寄りを残す）
  imagePosition?: string
  // パンくず（現在のページより上の階層）
  parents?: { name: string; href: string }[]
}

// 下層ページ共通のページ見出し
export default function PageHero({ en, ja, lead, image, imageAlt = '', imagePosition, parents = [] }: PageHeroProps) {
  return (
    <section className="border-b border-line">
      <div className="wrap pb-14 pt-12 md:pb-20 md:pt-16">
        <nav aria-label="パンくずリスト" className="eyebrow mb-8 flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/" className="link-line hover:text-ink">
            Home
          </Link>
          {parents.map((p) => (
            <span key={p.href} className="flex gap-3">
              <span>/</span>
              <Link href={p.href} className="link-line hover:text-ink">
                {p.name}
              </Link>
            </span>
          ))}
          <span>/</span>
          <span className="text-ink">{en}</span>
        </nav>

        <h1 className="m-0">
          <span className="en block text-[clamp(52px,10vw,136px)]">{en}</span>
          <span className="mt-5 block text-xl font-bold tracking-[0.06em] md:text-2xl">{ja}</span>
        </h1>
        {lead && <p className="mb-0 mt-6 max-w-[40em] text-mute">{lead}</p>}
      </div>

      {image && (
        <div className="wrap pb-14 md:pb-20">
          <Photo src={image} alt={imageAlt} position={imagePosition} priority className="aspect-[16/9] w-full md:aspect-[21/8]" sizes="100vw" />
        </div>
      )}
    </section>
  )
}
