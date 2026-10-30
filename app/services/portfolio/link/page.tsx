import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHead from '@/components/SectionHead'
import ScrollReveal from '@/components/ScrollReveal'
import LinkDiagram from '@/components/LinkDiagram'
import LinkScreens from '@/components/LinkScreens'
import CtaBand from '@/components/CtaBand'
import type { Metadata } from 'next'

// 実績の概要
const overview = [
  { label: 'Service', value: 'LINK' },
  { label: 'Category', value: '自社サービス（業務Webアプリ）' },
  { label: 'Users', value: '営業・バックヤード（コールセンター）・エンドユーザー' },
  { label: 'Release', value: '2026.02 提供開始' },
]

// 使う人ごとの機能
const roles = [
  {
    en: 'Sales',
    ja: '営業',
    lead: '案件を起点に、お客様の情報をまとめて管理',
    features: [
      { title: '案件登録', desc: '営業が案件を登録し、以降の情報はすべて案件にひも付けて管理' },
      { title: '案件ごとの顧客管理', desc: '案件単位で顧客を登録・管理。どの案件のお客様かが一目で分かる' },
      { title: '現地イベントの開催', desc: '案件にひも付けて説明会などの現地イベントを作成し、予約枠を設定' },
    ],
  },
  {
    en: 'End User',
    ja: 'エンドユーザー',
    lead: '電話がつながらなくても、Webから自分の都合で',
    features: [
      { title: 'イベント予約', desc: '案件ごとの現地イベントに、空いている枠を選んでWebから予約' },
      { title: 'アンケート', desc: '案件に合わせた設問に回答。回答は顧客情報にそのまま蓄積' },
      { title: 'Web問い合わせ', desc: '24時間いつでも、フォームから問い合わせ' },
      { title: 'コールバック予約', desc: '折り返してほしい日時を指定して、電話の予約' },
    ],
  },
  {
    en: 'Backyard',
    ja: 'バックヤード',
    lead: '案件と顧客の「いま」と「これまで」を、ひとつの画面で',
    features: [
      { title: '情報管理', desc: '案件・顧客ごとに、登録情報や予約・アンケート・問い合わせ内容を一元管理' },
      { title: '履歴管理', desc: '電話やWebでのやり取りを時系列で記録し、誰が対応しても経緯が分かる' },
      { title: 'タスク管理', desc: '折り返しや確認などの対応をタスク化し、抜け漏れを防止' },
    ],
  },
]

// 情報の流れ
const flow = [
  { step: '案件登録', who: '営業' },
  { step: '顧客登録', who: '営業' },
  { step: 'イベント・予約', who: 'エンドユーザー' },
  { step: '問い合わせ・コールバック', who: 'エンドユーザー' },
  { step: '履歴・タスク管理', who: 'バックヤード' },
]

export const metadata: Metadata = {
  title: 'LINK｜営業・バックヤード・エンドユーザーをつなぐ業務Webアプリ',
  description:
    'TiAD合同会社の自社サービス、業務Webアプリ「LINK」。営業の案件・顧客管理、エンドユーザーのイベント予約・アンケート・Web問い合わせ・コールバック予約、バックヤードの履歴・タスク管理をひとつにつなぎます。',
  alternates: { canonical: '/services/portfolio/link' },
}

export default function LinkCasePage() {
  return (
    <>
      <PageHero
        en="LINK"
        ja="営業・バックヤード・エンドユーザーをつなぐ業務Webアプリ"
        lead="案件を登録する営業、お客様対応を担うバックヤード（コールセンター）、そしてサービスを利用するエンドユーザー。これまで電話やメール、表計算ソフトに分かれていた情報を、案件を軸にひとつにつなぐ、TiADの自社サービスです。2026年2月より提供を開始しました。"
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
            ja="3者を、案件でリンクさせる"
            desc="営業が登録した案件に、顧客・イベント・問い合わせ・対応履歴がすべてひも付きます。誰がどこから見ても、同じ情報にたどり着けます。"
          />
          <ScrollReveal>
            <LinkDiagram />
          </ScrollReveal>
        </div>
      </section>

      {/* 画面イメージ */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="02" en="Screens" ja="画面イメージ" desc="営業・エンドユーザー・バックヤード、それぞれが使う画面の一例です。" />
          <ScrollReveal>
            <LinkScreens />
          </ScrollReveal>
        </div>
      </section>

      {/* 機能 */}
      <section className="border-b border-line bg-paper py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="03" en="Features" ja="使う人ごとの機能" />
          <div className="grid gap-16 md:gap-24">
            {roles.map((r, i) => (
              <ScrollReveal key={r.en} className="grid gap-8 border-t border-ink pt-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
                <div>
                  <p className="eyebrow m-0 mb-3 tabular-nums">{String(i + 1).padStart(2, '0')}</p>
                  <p className="en m-0 text-[clamp(40px,6vw,72px)]">{r.en}</p>
                  <h3 className="mb-0 mt-4 text-xl font-bold tracking-[0.06em] md:text-2xl">{r.ja}</h3>
                  <p className="m-0 mt-3 text-mute">{r.lead}</p>
                </div>
                <dl className="m-0 grid border-t border-line sm:grid-cols-2 md:border-t-0">
                  {r.features.map((f) => (
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
          <SectionHead index="04" en="Flow" ja="情報の流れ" light desc="案件の登録から、お客様とのやり取り、その後の対応まで。ひとつの流れとして記録が残ります。" />
          <ol className="m-0 grid list-none border-t border-white/25 p-0 md:grid-cols-5">
            {flow.map((f, i) => (
              <li key={f.step} className="border-b border-white/25 py-6 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0">
                <span className="font-mono text-[13px] tracking-[0.06em] text-brand-light tabular-nums">
                  STEP {String(i + 1).padStart(2, '0')}
                </span>
                <p className="m-0 mt-2 text-lg font-bold tracking-[0.04em]">{f.step}</p>
                <p className="m-0 mt-1 text-sm text-brand-light">{f.who}</p>
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
          <Link href="/news/2026-02-link" className="btn btn-ghost">
            提供開始のお知らせ <span className="arr">→</span>
          </Link>
        </div>
      </section>

      <CtaBand lead="LINKの導入や、自社の業務に合わせたシステムのご相談はお気軽にお問い合わせください。" />
    </>
  )
}
