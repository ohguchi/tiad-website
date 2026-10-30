import Link from 'next/link'
import PageHero from '@/components/PageHero'
import LinkDiagram from '@/components/LinkDiagram'
import CtaBand from '@/components/CtaBand'
import type { Metadata } from 'next'

// 実績の一覧（新しい年が上。年は該当するお知らせの年。継続案件は最上段）
const portfolios = [
  // 継続中の「2019–」は最上段に置く
  {
    title: 'データセンターのVM移行・仮想ルーター切替・FW切替',
    description:
      '大手通信事業者のデータセンターで、2019年から継続して受注。VMware ESXiのアップグレード、ネットワーク監視機器やVLANの切替も含む',
    category: 'インフラ保守',
    year: '2019–',
  },
  {
    title: '公営集合住宅向け光サービス更新の申請',
    description: '大手通信事業者の公営集合住宅向け光サービス更新に伴う申請業務',
    category: '申請業務',
    year: '2022',
  },
  {
    title: '静岡エリアの通信基地局保守',
    description: 'キャリア通信基地局の保守業務',
    category: 'インフラ保守',
    year: '2021',
  },
  {
    title: 'コールセンター部門の立ち上げ',
    description: '大手通信会社のインターネット開通サポート。調査・折衝を専門スタッフが運用',
    category: '業務立ち上げ',
    year: '2021',
  },
  {
    title: '2拠点間IPsec VPNの提供',
    description: 'オンプレミスサーバー利用企業の新拠点展開に合わせ、設計から運用保守まで一元対応',
    category: 'ネットワーク構築',
    year: '2020',
  },
  {
    title: '業務用ソフトウェア29台の一斉入替',
    description: '名古屋市守山区の水道工事会社。業務を止めない入替計画と実施',
    category: '導入支援',
    year: '2020',
  },
  {
    title: '中小企業向けソフトウェアのリリース',
    description: '主要機能をパッケージ化し、業界特有のルールを事前に適用できる業務支援ソフトウェア',
    category: 'ソフトウェア開発',
    year: '2019',
  },
]

export const metadata: Metadata = {
  title: '実績',
  description:
    'TiAD合同会社の2019年からの受注・提供実績。業務Webアプリ「LINK」の開発、データセンター保守、ネットワーク構築、ソフトウェア開発など。',
  alternates: { canonical: '/services/portfolio' },
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero en="Works" ja="制作実績" parents={[{ name: 'Service', href: '/services' }]} />

      {/* 特集：業務Webアプリ「LINK」 */}
      <section className="border-b border-line bg-paper py-[88px] md:py-[120px]">
        <div className="wrap">
          <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow m-0 mb-4">Featured — Webアプリケーション開発 / 2026</p>
              <h2 className="m-0">
                <span className="en block text-[clamp(72px,14vw,200px)]">LINK</span>
                <span className="mt-5 block text-xl font-bold tracking-[0.06em] md:text-2xl">
                  営業・バックヤード・エンドユーザーをつなぐ業務Webアプリ
                </span>
              </h2>
              <p className="mb-0 mt-5 max-w-[40em] text-mute">
                営業が登録した案件を軸に、顧客管理、現地イベントの予約・アンケート、Web問い合わせ・コールバック予約、バックヤードでの履歴・タスク管理までをひとつにつなぎます。
              </p>
            </div>
            <Link href="/services/portfolio/link" className="btn justify-self-start">
              LINKの詳細を見る <span className="arr">→</span>
            </Link>
          </div>
          <LinkDiagram />
        </div>
      </section>

      <section className="py-[88px] md:py-[120px]">
        <div className="wrap">
          <ul className="m-0 list-none border-t border-ink p-0">
            {portfolios.map((p) => (
              <li key={p.title} className="grid gap-x-12 gap-y-2 border-b border-line py-8 md:grid-cols-[120px_180px_1fr] md:items-baseline">
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
