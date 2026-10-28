import PageHero from '@/components/PageHero'
import SectionHead from '@/components/SectionHead'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBand from '@/components/CtaBand'

const reasons = [
  { title: '市場の変化', desc: '顧客のニーズや競争環境が急速に変化する中、デジタル技術による迅速な対応が求められています' },
  { title: '競争力強化', desc: 'デジタル技術を活用した企業とそうでない企業の差は拡大しており、DXは生き残りの鍵となっています' },
  { title: '生産性向上', desc: '労働人口の減少に伴い、テクノロジーによる業務効率化と生産性向上が不可欠です' },
  { title: '新価値創出', desc: 'データとテクノロジーを組み合わせることで、これまでにない製品やサービスを創出できます' },
]

const areas = [
  {
    en: 'Cloud',
    title: 'クラウドコンピューティング',
    desc: 'オンプレミスからクラウドへの移行により、初期投資を抑え、柔軟なスケーリングとグローバルなアクセスを実現。運用コストの削減とビジネスの俊敏性を同時に達成します。',
    tags: ['AWS', 'Azure', 'GCP', 'SaaS導入'],
  },
  {
    en: 'Data',
    title: 'データドリブン経営',
    desc: 'ビジネスデータを収集・分析し、意思決定を支援。BI（ビジネスインテリジェンス）ツールやデータウェアハウスにより、データを資産として活用し、戦略的な判断を可能にします。',
    tags: ['BIツール', 'データ分析', '可視化', '予測分析'],
  },
  {
    en: 'Integration',
    title: 'システム統合・連携',
    desc: '既存システムと新しいツールをシームレスに統合。API連携やマイクロサービスアーキテクチャにより、各システムの強みを活かしながら、全体最適化を実現します。',
    tags: ['API連携', 'ERP統合', 'レガシー移行', 'マイクロサービス'],
  },
]

// DX推進プロセス（この順番で進める）
const process = [
  { title: '現状分析', desc: '既存システムと業務フローを詳細に分析し、課題と改善機会を特定します' },
  { title: '戦略立案', desc: 'ビジネス目標に沿ったICT活用戦略とロードマップを策定します' },
  { title: 'ソリューション設計', desc: '最適な技術スタックを選定し、実装計画を設計します' },
  { title: '導入・実装', desc: 'アジャイル手法により、段階的にシステムを構築・導入します' },
  { title: '運用・改善', desc: '継続的なモニタリングと改善により、効果を最大化します' },
]

export default function ICTUtilizationPage() {
  return (
    <>
      <PageHero
        en="ICT"
        ja="ICT活用 ― デジタルトランスフォーメーション"
        parents={[{ name: 'Approach', href: '/#approach' }]}
        image="/images/approach/ict-utilization.jpg"
        imageAlt="書類の横でノートPCに入力する手元"
        imageCaption={{ title: 'ICT', scene: 'Desk — Paper to data' }}
        imagePosition="center 30%"
      />

      {/* イントロ */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap grid gap-8 md:grid-cols-[200px_1fr] md:gap-12">
          <p className="eyebrow m-0 md:pt-2">Introduction</p>
          <ScrollReveal className="max-w-[40em]">
            <h2 className="m-0 text-[clamp(24px,3vw,36px)] font-bold leading-[1.6]">
              ICTが拓く、<span className="text-brand">ビジネスの未来</span>。
            </h2>
            <p className="mb-0 mt-6 text-[17px] leading-[2.1] text-mute">
              情報通信技術（ICT）は、現代のビジネスにおいて不可欠な要素です。クラウド、データ分析、システム統合など、ICTを戦略的に活用することで、業務効率化、意思決定の高度化、新たなビジネスモデルの創出が可能になります。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* なぜDXが必要か */}
      <section className="border-b border-line bg-paper py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead en="Why DX" ja="なぜデジタルトランスフォーメーションが必要なのか" />
          <div className="grid border-t border-ink md:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="border-b border-line py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8">
                <h3 className="m-0 text-xl font-bold tracking-[0.04em]">{r.title}</h3>
                <p className="mb-0 mt-2 text-mute">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 主要領域 */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead en="Areas" ja="ICT活用の主要領域" />
          <div className="border-t border-ink">
            {areas.map((a) => (
              <article key={a.en} className="grid gap-6 border-b border-line py-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
                <div>
                  <p className="en m-0 text-[clamp(40px,5vw,64px)]">{a.en}</p>
                  <h3 className="mb-0 mt-4 text-lg font-bold tracking-[0.04em]">{a.title}</h3>
                </div>
                <div>
                  <p className="m-0 text-mute">{a.desc}</p>
                  <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
                    {a.tags.map((tag) => (
                      <li key={tag} className="border border-line px-2.5 py-0.5 font-mono text-xs tracking-[0.06em]">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DX推進プロセス */}
      <section className="py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead en="Process" ja="TiADのDX推進プロセス" />
          <ol className="m-0 grid list-none border-t border-ink p-0 md:grid-cols-5">
            {process.map((p, i) => (
              <li key={p.title} className="border-b border-line py-7 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                <span className="font-display text-4xl font-extrabold text-brand tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mb-0 mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mb-0 mt-2 text-sm text-mute">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand lead="デジタルトランスフォーメーションを始めましょう。ICT活用で、ビジネスを次のステージへ。" />
    </>
  )
}
