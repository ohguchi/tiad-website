import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHead from '@/components/SectionHead'
import ScrollReveal from '@/components/ScrollReveal'
import Photo from '@/components/Photo'
import CtaBand from '@/components/CtaBand'
import type { Metadata } from 'next'

const services = [
  {
    id: 'datacenter',
    en: 'Infrastructure',
    title: 'データセンターサーバー保守業務',
    description:
      'VMwareや仮想ルーターの保守・メンテナンスを中心に、データセンターの安定稼働を支えるインフラ保守サービスを提供します。24時間365日の監視体制で、お客様のビジネス継続をサポートします。',
    image: '/images/service-datacenter.jpg',
    alt: 'データセンターのサーバーラック',
    scene: 'Server room — Rack check',
    features: [
      { title: 'VMware環境保守', desc: '仮想マシンの構築・運用・最適化' },
      { title: '仮想ルーター管理', desc: 'ネットワーク機器の設定・監視' },
      { title: '24/7監視体制', desc: '障害の早期検知と迅速な対応' },
      { title: '予防保全', desc: '定期点検によるトラブル未然防止' },
    ],
  },
  {
    id: 'apartment',
    en: 'Fiber Optic',
    title: '集合住宅向けインターネット回線導入',
    description:
      '集合住宅への光ファイバー設備導入により、物件の資産価値向上をご提案します。インターネット環境は今や入居者にとって必須のインフラ。入居率向上と差別化を実現します。',
    image: '/images/service-apartment.jpg',
    alt: '光回線を備えた集合住宅',
    scene: 'Residence — Blue hour',
    features: [
      { title: '資産価値向上', desc: '高速インターネット完備物件として差別化' },
      { title: '入居者満足度UP', desc: '快適なネット環境で長期入居促進' },
      { title: '導入コンサルティング', desc: '最適な設備プランをご提案' },
      { title: 'ワンストップサービス', desc: '調査から工事、保守まで一貫対応' },
    ],
  },
  {
    id: 'app-development',
    en: 'Development',
    title: '中小企業向け業務改善アプリケーション',
    description:
      '中小企業の業務に合わせたアプリケーションをフルスクラッチで作成します。既製品では対応できない独自の業務フローを、お客様専用のシステムで効率化。DX推進を強力にサポートします。',
    image: '/images/service-development.jpg',
    alt: '業務アプリの開発風景',
    scene: 'Studio — Review session',
    features: [
      { title: 'フルスクラッチ開発', desc: 'お客様専用のオーダーメイドシステム' },
      { title: '業務フロー最適化', desc: '現場の声を反映した使いやすさ' },
      { title: 'DX推進支援', desc: 'デジタル化による生産性革命' },
      { title: '継続的サポート', desc: '導入後の改善・機能追加も対応' },
    ],
  },
]

const reasons = [
  { title: 'ワンストップ対応', desc: 'コンサルティングから開発、保守まで一貫して対応。スムーズなプロジェクト進行を実現。' },
  { title: '中小企業に特化', desc: '中小規模案件も丁寧にサポート。お客様目線での最適な提案を心がけています。' },
  { title: 'DX推進パートナー', desc: '業務改善・生産性向上を実現するDX推進のパートナーとして伴走します。' },
]

export const metadata: Metadata = {
  title: '事業案内（データセンター保守・回線導入・業務アプリ開発）',
  description:
    'TiAD合同会社の3つの事業をご紹介します。データセンターのサーバー保守、集合住宅向け回線導入、中小企業向け業務アプリ開発。名古屋を拠点に全国のデータセンター案件に対応しています。',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero en="Service" ja="事業案内" lead="名古屋を拠点に、データセンターの保守から中小企業の業務改善まで。人とICTの共創により、ビジネスの生産性を革命的に向上させる。私たちは3つの事業でお客様に貢献します。" />

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-[68px] border-b border-line py-[88px] md:py-[120px]">
          <div className="wrap grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <p className="eyebrow m-0 mb-4 tabular-nums">{String(i + 1).padStart(2, '0')}</p>
              <p className="en m-0 text-[clamp(40px,6vw,80px)]">{s.en}</p>
              <h2 className="mb-0 mt-5 text-xl font-bold tracking-[0.04em] md:text-2xl">{s.title}</h2>
              <p className="mb-0 mt-5 text-mute">{s.description}</p>
              <dl className="m-0 mt-10 grid border-t border-ink sm:grid-cols-2">
                {s.features.map((f) => (
                  <div key={f.title} className="border-b border-line py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                    <dt className="font-bold">{f.title}</dt>
                    <dd className="m-0 mt-1 text-sm text-mute">{f.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Photo
              src={s.image}
              alt={s.alt}
              className={i % 2 === 1 ? 'md:order-1' : ''}
              frameClassName="aspect-[4/3] w-full"
              caption={{ title: s.en, scene: s.scene }}
            />
          </div>
        </section>
      ))}

      {/* 選ばれる理由 */}
      <section className="border-b border-line bg-paper py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="04" en="Why TiAD" ja="なぜTiADを選ぶのか" />
          <div className="grid border-t border-ink md:grid-cols-3">
            {reasons.map((r, i) => (
              <ScrollReveal
                key={r.title}
                delay={i * 0.08}
                className="border-b border-line py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <h3 className="m-0 text-xl font-bold tracking-[0.04em]">{r.title}</h3>
                <p className="m-0 mt-3 text-mute">{r.desc}</p>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/services/portfolio" className="btn btn-ghost">
              制作実績を見る <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand lead="サービスに関するご質問やお見積もりは、お気軽にお問い合わせください。" />
    </>
  )
}
