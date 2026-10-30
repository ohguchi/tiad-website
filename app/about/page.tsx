import PageHero from '@/components/PageHero'
import SectionHead from '@/components/SectionHead'
import ScrollReveal from '@/components/ScrollReveal'
import InfinityDraw from '@/components/InfinityDraw'
import Photo from '@/components/Photo'
import CtaBand from '@/components/CtaBand'
import type { Metadata } from 'next'

const companyInfo = [
  { label: '会社名', value: 'TiAD合同会社（ティアド合同会社）' },
  { label: '英文名', value: 'TiAD.LLC' },
  { label: '代表者', value: '代表社員 大口 貴正' },
  { label: '設立', value: '2019年4月' },
  { label: '所在地', value: '〒462-0805 愛知県名古屋市北区八龍町1丁目77番地' },
  { label: '事業内容', value: 'ICTコンサルティング、システム開発、インフラ保守' },
  { label: 'メール', value: 'info@tiad.ai' },
]

const visions = [
  { title: 'ICTを最大限に活用', desc: '業務効率化と生産性向上' },
  { title: '働き方の最適化', desc: '真の働き方改革を実現' },
  { title: '持続可能な成長', desc: '人とテクノロジーの融合' },
]

export const metadata: Metadata = {
  title: '会社概要',
  description:
    '名古屋市北区のTiAD合同会社の会社情報。2019年4月設立。代表挨拶、ビジョン、所在地をご紹介します。',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero en="Company" ja="会社概要" lead="名古屋市北区から、ICTの力で明日の働き方をつくる会社です。" />

      {/* 代表挨拶 */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="01" en="Message" ja="代表挨拶" />
          <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-12">
            <p className="eyebrow m-0 md:pt-2">Tomorrow is Another Day</p>
            <ScrollReveal className="grid max-w-[40em] gap-6 text-[17px] leading-[2.1]">
              <p className="m-0">「明日は明日の風が吹く」ということわざがあります。</p>
              <p className="m-0">
                この言葉には様々な解釈がありますが、平成から令和に変わり、私たちの環境も目まぐるしく変わる今まさに『明日は別の日が来る』ような時代が訪れたのではないでしょうか？
              </p>
              <p className="m-0">
                特に昨今のICT（情報通信技術）の革新は著しく、その一方で せっかくの新しい技術を十分に活用しきれていない企業様も多いのではないでしょうか？
              </p>
              <p className="m-0 font-bold text-brand">
                私たちは日々更新されるICTの情報をいち早く取り込み、実際の事業形態に合わせた最適なサービスの提案を目指します。
              </p>
              <div className="mt-4 border-t border-line pt-6">
                <p className="m-0 text-sm text-mute">TiAD合同会社　代表</p>
                <p className="m-0 text-2xl font-bold tracking-[0.1em]">大口 貴正</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 理念 */}
      <section className="border-b border-line bg-paper py-[88px] md:py-[120px]">
        <div className="wrap grid gap-10 md:grid-cols-[200px_1fr] md:gap-12">
          <p className="eyebrow m-0 md:pt-3.5">
            <span className="mb-2 block tabular-nums">02</span>
            Philosophy
          </p>
          <div className="grid min-w-0 gap-12">
            <h2 className="m-0 flex flex-wrap items-center gap-x-[18px] gap-y-1 text-[clamp(30px,4.6vw,58px)] font-bold leading-[1.3]">
              <span>人財</span>
              <span className="font-display font-normal text-mute">×</span>
              <span>テクノロジー</span>
              <span className="font-display font-normal text-mute">=</span>
              <InfinityDraw className="w-[clamp(120px,15vw,200px)] text-brand" />
            </h2>
            <dl className="m-0 grid border-t border-ink md:grid-cols-3">
              {[
                { term: '人財', desc: '人の持つ可能性を広げるために' },
                { term: 'テクノロジー', desc: '人との結びつきを強くするために' },
                { term: '∞', desc: '私たちは新時代の技術を提供していきます' },
              ].map((item) => (
                <div key={item.term} className="border-b border-line py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                  <dt className="text-2xl font-bold">{item.term}</dt>
                  <dd className="m-0 mt-2 text-mute">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="03" en="Profile" ja="会社情報" />
          <dl className="m-0 border-t border-ink">
            {companyInfo.map((item) => (
              <div key={item.label} className="grid gap-1 border-b border-line py-5 md:grid-cols-[200px_1fr] md:gap-12">
                <dt className="text-sm font-bold">{item.label}</dt>
                <dd className="m-0 text-mute">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ビジョン */}
      <section className="py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead
            index="04"
            en="Vision"
            ja="私たちのビジョン"
            desc="ICT技術を活用し、人とテクノロジーの融合による持続可能な成長を支援します。"
          />
          <div className="grid gap-8 md:grid-cols-[5fr_7fr] md:items-start md:gap-16">
            <Photo
              src="/images/vision-work.jpg"
              alt="オフィスで話す社員たち"
              frameClassName="aspect-[3/2] w-full"
              caption={{ title: 'Team', scene: 'Hallway — Daily talk' }}
            />
            <ul className="m-0 list-none border-t border-ink p-0">
              {visions.map((v) => (
                <li key={v.title} className="border-b border-line py-7">
                  <h3 className="m-0 text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.4] tracking-[0.04em]">{v.title}</h3>
                  <p className="m-0 mt-1.5 text-mute">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
