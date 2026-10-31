import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHead from '@/components/SectionHead'
import ScrollReveal from '@/components/ScrollReveal'
import IrisDiagram from '@/components/IrisDiagram'
import IrisScreens from '@/components/IrisScreens'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { getProductBySlug, productJsonLd } from '@/lib/productsData'
import type { Metadata } from 'next'

// 実績の概要
const overview = [
  { label: 'Service', value: 'IRIS' },
  { label: 'Category', value: '自社サービス（SNS投稿評価システム）' },
  { label: 'Users', value: '複数店舗を展開する本部' },
  { label: 'Release', value: '2026.11 提供開始' },
]

// 考え方（監視ではなく、良さを見つけて広げる）
const approaches = [
  {
    en: 'Score',
    title: '減点だけでなく、加点で見る',
    desc: '規定に反していないかを確かめるだけでなく、推奨事項を満たした投稿にはしっかり加点。店舗の工夫や頑張りが、数字として見えるようになります。',
  },
  {
    en: 'Share',
    title: '良い投稿を、全店舗の手本に',
    desc: '評価の高い投稿は、他店舗への好事例として共有できます。一店舗の成功が、ブランド全体の発信力につながります。',
  },
  {
    en: 'Align',
    title: 'ブランドの見せ方をそろえる',
    desc: '本部の規定をAIが同じ基準で当てはめるため、担当者による判断のばらつきがありません。店舗ごとの個性を生かしながら、品質をそろえられます。',
  },
]

// 機能
const modules = [
  {
    en: 'Collect',
    ja: '投稿の取得',
    lead: '各店舗のInstagram投稿を、本部でまとめて把握',
    features: [
      { title: 'Instagramとの連携', desc: '店舗のビジネスアカウントと連携し、新しい投稿を自動で取り込み' },
      { title: '手動での登録', desc: '連携前の店舗の投稿も、画像と本文を登録して評価の対象に' },
      { title: '事業部・店舗・アカウント管理', desc: '1店舗で複数のアカウントを運用している場合にも対応' },
    ],
  },
  {
    en: 'Evaluate',
    ja: 'AIによる評価',
    lead: '写真と本文をまとめて読み取り、規定に照らして採点',
    features: [
      { title: '写真の判定', desc: '写っているもの・明るさ・構図などを、AIが画像から読み取って判定' },
      { title: '本文・ハッシュタグの判定', desc: 'キャプションの表現や、必要なハッシュタグの有無を確認' },
      { title: '加点・減点のスコア', desc: '基準点から、推奨事項は加点、禁止事項は減点してスコアを算出' },
      { title: '判定の理由を表示', desc: 'どの規定に、なぜ当てはまったのかを文章で確認できる' },
    ],
  },
  {
    en: 'Review',
    ja: '本部の確認',
    lead: '最終的な判断は人が行う、半自動の運用',
    features: [
      { title: '確定・却下', desc: 'AIの評価を担当者が確認し、確定または却下（誤検知）を選択' },
      { title: '要確認の検出', desc: '人物の映り込みなど、違反とは限らない項目は減点せず「要確認」に' },
      { title: '規定の管理', desc: '禁止事項・要確認・推奨事項と、その重みを本部で登録・調整' },
      { title: 'チャット通知', desc: '違反が確定した投稿は、チャットツールで担当者にすぐ知らせる' },
    ],
  },
  {
    en: 'Report',
    ja: 'レポート・横展開',
    lead: '店舗ごとの発信の質を、月ごとに振り返る',
    features: [
      { title: '月次レポート', desc: '事業部・店舗・アカウントごとに、投稿数・加点・違反・スコアを集計' },
      { title: 'ランキング', desc: 'スコアの高い店舗や前月からの伸びを、ひと目で把握' },
      { title: '好事例の抽出', desc: '評価の高い投稿を一覧にし、他店舗への共有に活用' },
      { title: 'CSV・PDF出力', desc: '本部内の共有や会議資料にそのまま使える形式で出力' },
    ],
  },
]

// 情報の流れ
const flow = [
  { step: '店舗が投稿', desc: 'いつもどおりInstagramに投稿する', who: '店舗' },
  { step: 'AIが評価', desc: '写真と本文を規定に照らして採点する', who: 'IRIS' },
  { step: '本部が確認', desc: '評価を確定し、必要に応じて店舗へフィードバック', who: '本部' },
  { step: '月次で振り返り', desc: '店舗別のスコアとランキングを集計する', who: '本部' },
  { step: '好事例を横展開', desc: '評価の高い投稿を、他店舗の手本として共有する', who: '全店舗' },
]

export const metadata: Metadata = {
  title: 'IRIS｜AIによる店舗Instagram投稿の評価',
  description:
    'TiAD合同会社の自社サービス「IRIS」。複数店舗を展開する本部向けに、各店舗のInstagram投稿の写真と本文をAIが規定に照らして加点・減点で評価。良い投稿の横展開と、ブランドの発信品質の共通化を支えます。',
  alternates: { canonical: '/services/portfolio/iris' },
}

// lib/productsData.ts に登録している自社サービスの情報（構造化データ用）
const product = getProductBySlug('iris')

export default function IrisCasePage() {
  return (
    <>
      {product && <JsonLd data={productJsonLd(product)} />}
      <PageHero
        en="IRIS"
        ja="店舗のInstagram投稿を、AIの目で評価・共有するサービス"
        lead="複数の店舗を展開する本部のためのサービスです。各店舗が投稿したInstagramの写真と本文を、本部の規定に照らしてAIが評価します。違反を見つけるだけでなく、良い投稿を加点で評価し、他店舗への横展開につなげることで、店舗PRの品質を高め、ブランドの見せ方をそろえます。2026年11月より提供を開始します。"
        parents={[
          { name: 'Service', href: '/services' },
          { name: 'Works', href: '/services/portfolio' },
        ]}
      />

      {/* 概要 */}
      <section className="border-b border-line">
        <div className="wrap">
          <dl className="m-0 grid sm:grid-cols-2 md:grid-cols-4">
            {overview.map((o) => (
              <div key={o.label} className="border-b border-line py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                <dt className="eyebrow">{o.label}</dt>
                <dd className="m-0 mt-1 font-bold">{o.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* コンセプト */}
      <section className="border-b border-line bg-paper py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead
            index="01"
            en="Concept"
            ja="AIの目で、店舗と本部をつなぐ"
            desc="店舗の投稿を、本部の規定に照らしてAIが評価。本部が確認した結果は、店舗へのフィードバックと、他店舗への横展開に生かされます。"
          />
          <ScrollReveal>
            <IrisDiagram />
          </ScrollReveal>
        </div>
      </section>

      {/* 考え方 */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="02" en="Approach" ja="見張るのではなく、良さを見つける" />
          <div className="grid border-t border-ink md:grid-cols-3">
            {approaches.map((a, i) => (
              <ScrollReveal
                key={a.en}
                delay={i * 0.08}
                className="border-b border-line py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <p className="en m-0 text-[clamp(32px,4vw,48px)]">{a.en}</p>
                <h3 className="mb-0 mt-4 text-xl font-bold tracking-[0.04em]">{a.title}</h3>
                <p className="m-0 mt-3 text-mute">{a.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 画面イメージ */}
      <section className="border-b border-line bg-paper py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="03" en="Screens" ja="画面イメージ" desc="投稿の一覧から、AIの評価、月ごとのレポートまで。本部の担当者が使う画面の一例です。" />
          <ScrollReveal>
            <IrisScreens />
          </ScrollReveal>
        </div>
      </section>

      {/* 機能 */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="04" en="Features" ja="主な機能" />
          <div className="grid gap-16 md:gap-24">
            {modules.map((m, i) => (
              <ScrollReveal key={m.en} className="grid gap-8 border-t border-ink pt-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
                <div>
                  <p className="eyebrow m-0 mb-3 tabular-nums">{String(i + 1).padStart(2, '0')}</p>
                  <p className="en m-0 text-[clamp(40px,6vw,72px)]">{m.en}</p>
                  <h3 className="mb-0 mt-4 text-xl font-bold tracking-[0.06em] md:text-2xl">{m.ja}</h3>
                  <p className="m-0 mt-3 text-mute">{m.lead}</p>
                </div>
                <dl className="m-0 grid border-t border-line sm:grid-cols-2 md:border-t-0">
                  {m.features.map((f) => (
                    <div key={f.title} className="border-b border-line py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                      <dt className="font-bold">{f.title}</dt>
                      <dd className="m-0 mt-1 text-sm text-mute">{f.desc}</dd>
                    </div>
                  ))}
                </dl>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 情報の流れ */}
      <section className="border-b border-line bg-ink py-[88px] text-white md:py-[120px]">
        <div className="wrap">
          <SectionHead
            index="05"
            en="Flow"
            ja="情報の流れ"
            light
            desc="店舗はいつもどおり投稿するだけ。評価から振り返り、横展開までを本部がまとめて回せます。"
          />
          <ol className="m-0 grid list-none border-t border-white/25 p-0 md:grid-cols-5">
            {flow.map((f, i) => (
              <li key={f.step} className="border-b border-white/25 py-6 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0">
                <span className="font-mono text-[13px] tracking-[0.06em] text-brand-light tabular-nums">
                  STEP {String(i + 1).padStart(2, '0')}
                </span>
                <p className="m-0 mt-2 text-lg font-bold tracking-[0.04em]">{f.step}</p>
                <p className="m-0 mt-1 text-sm text-brand-light">{f.desc}</p>
                <span className="mt-3 inline-block border border-white/40 px-2 font-mono text-[11px] tracking-[0.1em]">{f.who}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 戻る */}
      <section className="py-16 md:py-20">
        <div className="wrap flex flex-wrap gap-4">
          <Link href="/services/portfolio" className="btn btn-ghost">
            制作実績一覧へ戻る <span className="arr">→</span>
          </Link>
          <Link href="/news/2026-11-iris" className="btn btn-ghost">
            提供開始のお知らせ <span className="arr">→</span>
          </Link>
        </div>
      </section>

      <CtaBand lead="IRISの導入や、店舗のSNS運用の品質向上についてのご相談はお気軽にお問い合わせください。" />
    </>
  )
}
