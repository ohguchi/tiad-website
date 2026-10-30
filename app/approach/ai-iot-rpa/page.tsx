import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHead from '@/components/SectionHead'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBand from '@/components/CtaBand'
import type { Metadata } from 'next'

const technologies = [
  {
    en: 'AI',
    title: 'AI（人工知能）',
    desc: '機械学習とディープラーニングを活用し、膨大なデータから価値ある洞察を引き出します。予測分析、パターン認識、自然言語処理などにより、人間の判断を支援し、業務の質を向上させます。',
    points: [
      { title: '予測分析', desc: '過去データから未来を予測' },
      { title: '自動判断', desc: 'ルールベースの意思決定自動化' },
      { title: '画像認識', desc: '視覚情報の自動処理' },
      { title: '自然言語処理', desc: 'チャットボットや文書分析' },
    ],
  },
  {
    en: 'IoT',
    title: 'IoT（モノのインターネット）',
    desc: 'あらゆるデバイスをインターネットに接続し、リアルタイムでデータを収集・分析。製造現場の監視、在庫管理、エネルギー最適化など、物理世界とデジタル世界を統合します。',
    points: [
      { title: 'リアルタイム監視', desc: '設備やプロセスの常時監視' },
      { title: '予知保全', desc: '故障前に異常を検知' },
      { title: '遠隔制御', desc: '離れた場所から操作' },
      { title: 'データ可視化', desc: 'センサーデータの視覚化' },
    ],
  },
  {
    en: 'RPA',
    title: 'RPA（ロボティック・プロセス・オートメーション）',
    desc: '反復的で時間のかかる定型業務を自動化。人間が行っていた作業をソフトウェアロボットが代行することで、ミスを削減し、従業員はより価値の高い業務に集中できます。',
    points: [
      { title: 'データ入力自動化', desc: '手作業入力をゼロに' },
      { title: 'レポート作成', desc: '定型レポートの自動生成' },
      { title: 'システム連携', desc: '複数システム間のデータ転送' },
      { title: '業務フロー最適化', desc: 'プロセス全体の効率化' },
    ],
  },
]

export const metadata: Metadata = {
  title: 'AI・IoT・RPAの活用',
  description:
    '中小企業向けの自動化支援。AI・IoT・RPAなど新しいテクノロジーで、繰り返し作業を自動化します。',
  alternates: { canonical: '/approach/ai-iot-rpa' },
}

export default function AIIoTRPAPage() {
  return (
    <>
      <PageHero
        en="AI・IoT・RPA"
        ja="新時代のテクノロジー活用"
        parents={[{ name: 'Approach', href: '/#approach' }]}
        image="/images/approach/ai-iot-rpa.jpg"
        imageAlt="工場の設備に取り付けられたセンサー"
        imageCaption={{ title: 'AI・IoT・RPA', scene: 'Factory — Sensors' }}
      />

      {/* イントロ */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
          <p className="eyebrow m-0 md:pt-2">Introduction</p>
          <ScrollReveal className="max-w-[40em]">
            <h2 className="m-0 text-[clamp(24px,3vw,36px)] font-bold leading-[1.6]">
              次世代技術で、<span className="text-brand">ビジネスを加速</span>する。
            </h2>
            <p className="mb-0 mt-6 text-[17px] leading-[2.1] text-mute">
              AI、IoT、RPAは単なる流行語ではありません。これらは実際のビジネス課題を解決し、競争力を高めるための強力なツールです。TiADは最新のテクノロジーを駆使して、お客様のビジネスに真の価値をもたらします。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3つの技術 */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead en="Technology" ja="3つの技術" />
          <div className="border-t border-ink">
            {technologies.map((t) => (
              <article key={t.en} className="grid gap-8 border-b border-line py-12 md:grid-cols-[200px_1fr] md:gap-12">
                <p className="en m-0 text-[clamp(56px,7vw,96px)] text-brand">{t.en}</p>
                <div className="min-w-0">
                  <h3 className="m-0 text-xl font-bold tracking-[0.04em] md:text-2xl">{t.title}</h3>
                  <p className="mb-0 mt-4 max-w-[40em] text-mute">{t.desc}</p>
                  <dl className="m-0 mt-8 grid border-t border-line sm:grid-cols-2">
                    {t.points.map((p) => (
                      <div key={p.title} className="border-b border-line py-4 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                        <dt className="font-bold">{p.title}</dt>
                        <dd className="m-0 mt-1 text-sm text-mute">{p.desc}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 統合的なアプローチ */}
      <section className="bg-ink py-[88px] text-white md:py-[120px]">
        <div className="wrap grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
          <p className="eyebrow m-0 text-brand-light md:pt-2">Integration</p>
          <div className="max-w-[40em]">
            <h2 className="m-0 text-[clamp(24px,3vw,36px)] font-bold leading-[1.6]">統合的なアプローチで、最大の効果を。</h2>
            <p className="mb-0 mt-6 text-[17px] leading-[2.1] text-brand-light">
              AI、IoT、RPAは個別でも価値がありますが、これらを統合することでシナジー効果が生まれ、ビジネスインパクトが飛躍的に向上します。
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/approach/work-style-reform" className="btn btn-white btn-sm">
                働き方改革へ <span className="arr">→</span>
              </Link>
              <Link href="/services" className="btn btn-sm border-white/40 bg-transparent hover:border-white hover:bg-white hover:text-ink">
                サービス一覧 <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand lead="AI・IoT・RPAの導入をご検討の方は、お気軽にご相談ください。" />
    </>
  )
}
