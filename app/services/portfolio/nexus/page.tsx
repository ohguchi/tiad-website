import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHead from '@/components/SectionHead'
import ScrollReveal from '@/components/ScrollReveal'
import NexusDiagram from '@/components/NexusDiagram'
import NexusScreens from '@/components/NexusScreens'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { getProductBySlug, productJsonLd } from '@/lib/productsData'
import type { Metadata } from 'next'

// 実績の概要
const overview = [
  { label: 'Service', value: 'NEXUS' },
  { label: 'Category', value: '自社サービス（基幹業務システム）' },
  { label: 'Users', value: '経営・管理部門・現場・協力会社' },
  { label: 'Release', value: '2025.10 提供開始' },
]

// 業務ごとの機能
const modules = [
  {
    en: 'Process',
    ja: '工程管理',
    lead: '案件の受注から完了まで、段取りを見える化',
    features: [
      { title: '案件・物件管理', desc: '案件ごとに顧客・場所・担当・書類をまとめて管理' },
      { title: '工程表', desc: '工程と担当班をカレンダーで調整し、重なりや空きを把握' },
      { title: '協力会社への発注', desc: '発注内容と金額を記録し、支払締めまでつなげる' },
      { title: '写真台帳・施工記録', desc: '現場写真を案件にひも付け、台帳として出力' },
    ],
  },
  {
    en: 'People',
    ja: '従業員管理',
    lead: '人と、人が使う道具の情報をひとつに',
    features: [
      { title: '従業員台帳・権限', desc: '所属や役割に応じて、見られる画面と操作を制御' },
      { title: '勤務パターン・休日', desc: '個人ごとの勤務形態や会社カレンダーを設定' },
      { title: '有給・特別休暇の付与', desc: '付与日数と残日数を自動で計算' },
      { title: '車両・貸与品・アルコールチェック', desc: '車両予約、備品の貸出、運転前の確認記録まで管理' },
    ],
  },
  {
    en: 'Time',
    ja: '勤怠管理',
    lead: '打刻から月次集計まで、紙もExcelも使わずに',
    features: [
      { title: '打刻', desc: 'スマートフォンやタイムカードから出退勤を記録' },
      { title: '申請・承認', desc: '休暇・残業・打刻修正をWebで申請し、上長が承認' },
      { title: '残業・有給の状況把握', desc: 'チームごとの残業時間や有給取得状況をひと目で確認' },
      { title: '月次集計・出力', desc: '締め後のデータを給与計算に合わせた形式で出力' },
    ],
  },
  {
    en: 'Report',
    ja: '日報作成・経費精算',
    lead: '現場で書いたものが、そのまま会社の記録になる',
    features: [
      { title: '作業日報', desc: '案件・作業内容・時間を入力。スマートフォンから提出' },
      { title: '協力会社の日報', desc: 'アカウントを持たない協力会社も専用URLから提出' },
      { title: '経費精算', desc: '領収書を添付して申請し、承認後に支払・仕訳へ反映' },
      { title: 'カード明細の取り込み', desc: 'ガソリンカード・ETCカードの利用分を部署・案件に振り分け' },
    ],
  },
  {
    en: 'Accounting',
    ja: '経理・会計',
    lead: '日々の入力が、そのまま月次決算の材料に',
    features: [
      { title: '売上計上・入金管理', desc: '請求から入金の消込まで、案件単位で追跡' },
      { title: '支払・協力会社の支払締め', desc: '発注と日報の実績を突き合わせて支払額を確定' },
      { title: '仕訳・現金出納帳・預金帳', desc: '経費や支払から仕訳を起こし、帳簿をつける' },
      { title: '月次締め・損益の把握', desc: '部門別・案件別の損益と決算書をダッシュボードで確認' },
    ],
  },
]

// データのつながり（どの業務の入力が、どの業務に届くか）
const connections = [
  { from: { en: 'Time', ja: '勤怠の打刻' }, to: { en: 'Accounting', ja: '給与・労務費' }, desc: '実働時間が給与支払と案件の労務費に反映されます。' },
  { from: { en: 'Report', ja: '作業日報' }, to: { en: 'Process', ja: '案件の実績' }, desc: '誰がどの案件で何時間働いたかが、工程の進み具合と原価に残ります。' },
  { from: { en: 'Process', ja: '協力会社への発注' }, to: { en: 'Accounting', ja: '支払締め' }, desc: '発注額と協力会社の日報を照合し、月末の支払額を確定します。' },
  { from: { en: 'Report', ja: '経費申請' }, to: { en: 'Accounting', ja: '仕訳・案件経費' }, desc: '承認された経費は仕訳になり、案件ごとの経費として集計されます。' },
  { from: { en: 'People', ja: '従業員・権限' }, to: { en: 'All', ja: 'すべての画面' }, desc: '所属と役割の設定ひとつで、各業務の表示範囲と承認ルートが決まります。' },
]

// 情報の流れ
const flow = [
  { step: '案件登録・工程計画', desc: '案件を登録し、工程と協力会社への発注を決める', module: '工程管理' },
  { step: '人員・車両の配置', desc: '担当者と車両・備品を割り当てる', module: '従業員管理' },
  { step: '出退勤の打刻', desc: '現場からスマートフォンで打刻する', module: '勤怠管理' },
  { step: '日報・経費の提出', desc: '作業内容と立替経費をその日のうちに提出する', module: '日報・経費精算' },
  { step: '原価集計・月次決算', desc: '労務費・外注費・経費を集計し、損益を確定する', module: '経理・会計' },
]

export const metadata: Metadata = {
  title: 'NEXUS｜現場から経理までつなぐ基幹システム',
  description:
    'TiAD合同会社の自社サービス、基幹業務システム「NEXUS」。工程管理・従業員管理・勤怠管理・日報作成/経費精算・経理/会計をひとつのデータベースでつなぎ、現場の入力を原価・給与・仕訳まで届けます。',
  alternates: { canonical: '/services/portfolio/nexus' },
}

// lib/productsData.ts に登録している自社サービスの情報（構造化データ用）
const product = getProductBySlug('nexus')

export default function NexusCasePage() {
  return (
    <>
      {product && <JsonLd data={productJsonLd(product)} />}
      <PageHero
        en="NEXUS"
        ja="現場から経理まで、会社の業務をひとつにつなぐ基幹システム"
        lead="工程管理、従業員管理、勤怠管理、日報・経費精算、経理・会計。部署ごとに表計算ソフトや別々のシステムで管理していた情報を、ひとつのデータベースでつなぎます。現場で入力した日報や打刻が、そのまま原価・給与・仕訳にまで届く、TiADの自社サービスです。2025年10月より提供を開始しました。"
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
            ja="5つの業務を、ひとつの基盤で結ぶ"
            desc="案件・従業員・時間・お金。会社を動かす4つの情報を、NEXUSが中心で受け止めます。どの部署が入力しても、他の部署が同じ数字をそのまま使えます。"
          />
          <ScrollReveal>
            <NexusDiagram />
          </ScrollReveal>
        </div>
      </section>

      {/* 画面イメージ */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="02" en="Screens" ja="画面イメージ" desc="管理部門はPCで、現場はスマートフォンで。同じデータを、それぞれの立場に合った画面で扱います。" />
          <ScrollReveal>
            <NexusScreens />
          </ScrollReveal>
        </div>
      </section>

      {/* 機能 */}
      <section className="border-b border-line bg-paper py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="03" en="Features" ja="業務ごとの機能" desc="5つの業務それぞれに、日々の運用に必要な機能をそろえています。" />
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

      {/* データのつながり */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead
            index="04"
            en="Connections"
            ja="データのつながり"
            desc="NEXUSでは、一度入力した情報を別の業務で入力し直す必要がありません。主なつながりは次のとおりです。"
          />
          <ul className="m-0 list-none border-t border-ink p-0">
            {connections.map((c) => (
              <li
                key={`${c.from.ja}-${c.to.ja}`}
                className="grid grid-cols-[minmax(0,1fr)_32px_minmax(0,1fr)] items-center gap-x-4 gap-y-2 border-b border-line py-5 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)_minmax(0,1.4fr)]"
              >
                <div>
                  <span className="eyebrow block">{c.from.en}</span>
                  <b className="font-bold">{c.from.ja}</b>
                </div>
                {/* 矢印 */}
                <span aria-hidden className="relative block h-px bg-ink after:absolute after:-top-[4px] after:right-0 after:border-y-[4.5px] after:border-l-[7px] after:border-y-transparent after:border-l-ink after:content-['']" />
                <div>
                  <span className="eyebrow block">{c.to.en}</span>
                  <b className="font-bold">{c.to.ja}</b>
                </div>
                <p className="col-span-3 m-0 text-sm text-mute md:col-span-1">{c.desc}</p>
              </li>
            ))}
          </ul>
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
            desc="ひとつの案件が受注されてから月次決算に載るまで。途中で表計算ソフトに転記する工程はありません。"
          />
          <ol className="m-0 grid list-none border-t border-white/25 p-0 md:grid-cols-5">
            {flow.map((f, i) => (
              <li key={f.step} className="border-b border-white/25 py-6 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0">
                <span className="font-mono text-[13px] tracking-[0.06em] text-brand-light tabular-nums">
                  STEP {String(i + 1).padStart(2, '0')}
                </span>
                <p className="m-0 mt-2 text-lg font-bold tracking-[0.04em]">{f.step}</p>
                <p className="m-0 mt-1 text-sm text-brand-light">{f.desc}</p>
                <span className="mt-3 inline-block border border-white/40 px-2 font-mono text-[11px] tracking-[0.1em]">{f.module}</span>
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
          <Link href="/news/2025-10-nexus" className="btn btn-ghost">
            提供開始のお知らせ <span className="arr">→</span>
          </Link>
        </div>
      </section>

      <CtaBand lead="NEXUSの導入や、自社の業務に合わせた基幹システムのご相談はお気軽にお問い合わせください。" />
    </>
  )
}
