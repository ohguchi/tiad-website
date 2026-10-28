import PageHero from '@/components/PageHero'
import SectionHead from '@/components/SectionHead'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBand from '@/components/CtaBand'

const issues = [
  {
    title: '労働時間の削減のみに注目',
    desc: '時間外労働の制限や有給休暇取得の義務化など、時間を減らすことだけが焦点となっている',
  },
  {
    title: '生産性向上の課題',
    desc: '本来目指すべき「労働力不足の解消」「生産性の向上」が達成困難になっている',
  },
]

// TiADのアプローチ（この順番で進める）
const steps = [
  { title: '労働の削減', desc: 'AI・IoT・RPAを活用し、労働そのものを削減' },
  { title: '業務の最適化', desc: '人がすべき業務を明確にし、最適化を図る' },
  { title: '真の改革', desc: '生産性向上と労働力不足の解消を実現' },
]

const technologies = [
  { en: 'AI', desc: '機械学習による業務自動化と意思決定支援' },
  { en: 'IoT', desc: 'デバイス連携によるリアルタイムデータ活用' },
  { en: 'RPA', desc: '定型業務の自動化による効率化' },
]

export default function WorkStyleReformPage() {
  return (
    <>
      <PageHero
        en="Work Style"
        ja="働き方改革 ― 真の生産性向上へ"
        parents={[{ name: 'Approach', href: '/#approach' }]}
        image="/images/approach/work-reform.jpg"
        imageAlt="ホワイトボードの前で打ち合わせをするチーム"
        imageCaption={{ title: 'Work Style', scene: 'Office — Standing meeting' }}
      />

      {/* イントロ */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
          <p className="eyebrow m-0 md:pt-2">Introduction</p>
          <ScrollReveal className="grid max-w-[40em] gap-6 text-[17px] leading-[2.1]">
            <h2 className="m-0 text-[clamp(24px,3vw,36px)] font-bold leading-[1.6]">今、求められる働き方改革とは</h2>
            <p className="m-0 text-mute">
              今日本ではしきりに『働き方改革』が叫ばれています。特に２０１９年から働き方改革関連法が導入されたことにより一段と『働き方』について考える必要が出てきたのではないでしょうか？
            </p>
            <p className="m-0 text-mute">
              ただ現在の働き方改革は時間外労働の制限や有給休暇取得の義務化など「労働時間の削減」にばかり目を向けられており、このままでは本来目指すべき「労働力不足の解消」「生産性の向上」を図ることがますます難しくなってしまうのではないかと思います。
            </p>
            <p className="m-0 font-bold text-brand">
              私たちはAI・IoT・RPAなど新しい労働力となりうるICT技術を用いて、まずは労働そのものの削減、そして人がすべき業務の最適化を提案することが真の働き方改革へとつながっていくと考えています。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 現状の課題 */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead en="Issue" ja="現状の課題" />
          <div className="grid border-t border-ink md:grid-cols-2">
            {issues.map((issue) => (
              <div key={issue.title} className="border-b border-line py-8 md:border-b-0 md:px-8 md:first:border-r md:first:pl-0">
                <h3 className="m-0 text-xl font-bold tracking-[0.04em]">{issue.title}</h3>
                <p className="mb-0 mt-3 text-mute">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TiADのアプローチ */}
      <section className="border-b border-line bg-paper py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead en="Approach" ja="TiADのアプローチ" desc="単なる労働時間の削減ではなく、ICT技術による業務そのものの変革を通じて、真の働き方改革を実現します。" />
          <ol className="m-0 grid list-none border-t border-ink p-0 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="border-b border-line py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <span className="font-mono text-sm text-mute">STEP {String(i + 1).padStart(2, '0')}</span>
                <h3 className="mb-0 mt-3 text-2xl font-bold tracking-[0.04em]">{step.title}</h3>
                <p className="mb-0 mt-3 text-mute">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 活用技術 */}
      <section className="py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead en="Technology" ja="活用技術" />
          <div className="grid border-t border-ink md:grid-cols-3">
            {technologies.map((t) => (
              <div key={t.en} className="border-b border-line py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <p className="en m-0 text-6xl text-brand">{t.en}</p>
                <p className="mb-0 mt-4 text-mute">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lead="働き方改革について、貴社の業務課題をお聞かせください。" />
    </>
  )
}
