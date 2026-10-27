import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'

const portfolios = [
  {
    title: 'コールセンター部門の立ち上げ',
    description: 'コールセンター業務の効率化と顧客対応品質向上のためのシステム構築',
    category: 'システム開発',
    year: '2024',
  },
  {
    title: '2拠点間IPsec VPNの提供',
    description: 'セキュアな拠点間通信を実現するVPNネットワークの構築',
    category: 'ネットワーク構築',
    year: '2024',
  },
  {
    title: 'ソフトウェア販売開始',
    description: '業務効率化ソフトウェアの開発と販売開始',
    category: 'ソフトウェア開発',
    year: '2024',
  },
  {
    title: '新規案件受注',
    description: '複数の企業様から新規案件を承り、システム構築を実施',
    category: 'システム開発',
    year: '2024',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero en="Works" ja="制作実績" parents={[{ name: 'Service', href: '/services' }]} />

      <section className="py-[88px] md:py-[120px]">
        <div className="wrap">
          <ul className="m-0 list-none border-t border-ink p-0">
            {portfolios.map((p) => (
              <li key={p.title} className="grid gap-x-12 gap-y-2 border-b border-line py-8 md:grid-cols-[120px_180px_1fr]">
                <span className="font-mono text-[13px] tracking-[0.06em] text-mute tabular-nums">{p.year}</span>
                <span className="justify-self-start border border-line px-2 font-mono text-[11px] tracking-[0.1em]">{p.category}</span>
                <div>
                  <h2 className="m-0 text-xl font-bold tracking-[0.04em] md:text-2xl">{p.title}</h2>
                  <p className="m-0 mt-2 text-mute">{p.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand lead="実績に関するご質問や、同様のプロジェクトのご相談はお気軽にお問い合わせください。" />
    </>
  )
}
