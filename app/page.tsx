import Link from 'next/link'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import InfinityDraw from '@/components/InfinityDraw'
import SectionHead from '@/components/SectionHead'
import Photo from '@/components/Photo'
import ScrollReveal from '@/components/ScrollReveal'
import CtaBand from '@/components/CtaBand'
import { newsItems } from '@/lib/newsData'

const services = [
  {
    en: 'Infrastructure',
    ja: 'インフラ保守事業',
    desc: 'データセンターのサーバー、VM、仮想ルーターの保守。24時間365日の監視体制で、事業の継続を支えます。',
    image: '/images/service-datacenter.jpg',
    alt: 'データセンターのサーバーラック',
    scene: 'Server room — Rack check',
    href: '/services#datacenter',
  },
  {
    en: 'Fiber Optic',
    ja: '通信コンサル事業',
    desc: '集合住宅への光ファイバー導入をご提案。入居者の満足度と、物件の資産価値を高めます。',
    image: '/images/service-apartment.jpg',
    alt: '光回線を備えた集合住宅',
    scene: 'Residence — Blue hour',
    href: '/services#apartment',
  },
  {
    en: 'Development',
    ja: 'アプリ開発事業',
    desc: '中小企業向けの業務改善アプリを、フルスクラッチで開発します。現場の手間を一つずつ減らします。',
    image: '/images/service-development.jpg',
    alt: '業務アプリの開発風景',
    scene: 'Studio — Review session',
    href: '/services#app-development',
  },
]

const approaches = [
  { title: 'AI・IoT・RPA', desc: '新しいテクノロジーで、繰り返し作業を自動化する。', href: '/approach/ai-iot-rpa' },
  { title: '働き方改革', desc: '時間ではなく、成果で働ける仕組みをつくる。', href: '/approach/work-style-reform' },
  { title: 'ICT活用', desc: 'クラウドとデータで、会社の動きを見えるようにする。', href: '/approach/ict-utilization' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />

      {/* 理念・ミッション */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap grid gap-10 md:grid-cols-[200px_1fr] md:gap-x-12 md:gap-y-[72px]">
          <p className="eyebrow m-0 md:pt-3.5">Philosophy</p>
          <div className="grid min-w-0 gap-10">
            <ScrollReveal>
              <h2 className="m-0 flex flex-wrap items-center gap-x-[18px] gap-y-1 text-[clamp(30px,4.6vw,58px)] font-bold leading-[1.3] tracking-[0.02em]">
                <span>人財</span>
                <span className="font-display font-normal text-mute">×</span>
                <span>テクノロジー</span>
                <span className="font-display font-normal text-mute">=</span>
                <InfinityDraw className="w-[clamp(120px,15vw,200px)] text-brand" />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="grid max-w-[34em] gap-1 text-[clamp(17px,1.6vw,20px)] leading-[2]">
                <p className="m-0">人の持つ可能性を広げるために。</p>
                <p className="m-0">人との結びつきを強くするために。</p>
                <p className="m-0 text-mute">私たちは、新しい時代の技術を提供していきます。</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 border-t border-line pt-10 md:col-start-2 md:grid-cols-[200px_1fr] md:gap-x-12">
            <p className="eyebrow m-0 md:pt-2">Mission</p>
            <ScrollReveal className="grid min-w-0 gap-4">
              <p className="m-0 text-[clamp(20px,2.2vw,26px)] font-bold leading-[1.8]">
                人とICTの共創により、<em className="not-italic text-brand">ビジネスの生産性を革命的に向上させる</em>
                DX推進を提案します。
              </p>
              <p className="m-0 max-w-[40em] text-mute">
                単なるシステム導入ではなく、お客様のビジネスを根本から変えるパートナーとして、最新のICT技術を活用した働き方改革を実現します。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 事業 */}
      <section className="border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead
            index="01"
            en="Service"
            ja="私たちが取り組む事業"
            desc="ICTを活用してビジネスの生産性を高めるための取り組みです。お客様と協力し、新しい仕組みを一緒につくります。"
          />
          <div className="border-t border-ink">
            {services.map((s) => (
              <Link
                key={s.en}
                href={s.href}
                className="group grid gap-x-8 gap-y-4 border-b border-line py-7 md:grid-cols-[1.25fr_1fr_280px] md:items-center md:py-9"
              >
                <div>
                  <div className="en text-[clamp(36px,5.2vw,68px)] transition-[transform,color] duration-500 ease-sharp group-hover:translate-x-2.5 group-hover:text-brand">
                    {s.en}
                  </div>
                  <h3 className="mb-0 mt-3 text-[13px] font-bold tracking-[0.1em]">{s.ja}</h3>
                </div>
                <div>
                  <p className="m-0 text-mute">{s.desc}</p>
                  <span className="mt-3.5 inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.08em]">
                    <span className="inline-grid h-9 w-9 place-items-center border border-ink transition-[background,color,transform] duration-300 ease-sharp group-hover:translate-x-1 group-hover:bg-ink group-hover:text-white">
                      →
                    </span>
                    詳しく見る
                  </span>
                </div>
                <Photo
                  src={s.image}
                  alt={s.alt}
                  frameClassName="aspect-[16/10] w-full"
                  sizes="(min-width: 768px) 280px, 100vw"
                  caption={{ title: s.en, scene: s.scene }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* アプローチ */}
      <section id="approach" className="scroll-mt-[68px] border-b border-line py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="02" en="Approach" ja="私たちのアプローチ" desc="ICT技術を活用した、働き方改革のためのソリューションを提供します。" />
          <div className="grid gap-8 md:grid-cols-[5fr_7fr] md:items-start md:gap-16">
            <Photo
              src="/images/approach-work.jpg"
              alt="ノートPCで仕事をする社員"
              caption={{ title: 'Work Style', scene: 'Office — Morning light' }}
              position="68% center"
              frameClassName="aspect-[4/5] max-h-[560px] w-full"
            />
            <div className="border-t border-ink">
              {approaches.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1.5 border-b border-line py-7"
                >
                  <h3 className="m-0 text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.4] tracking-[0.04em] transition-colors group-hover:text-brand">
                    {a.title}
                  </h3>
                  <p className="col-start-1 m-0 text-mute">{a.desc}</p>
                  <span className="col-start-2 row-span-2 row-start-1 font-display text-[22px] transition-transform duration-500 ease-sharp group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* お知らせ */}
      <section className="py-[88px] md:py-[120px]">
        <div className="wrap">
          <SectionHead index="03" en="News" ja="お知らせ" />
          <div className="border-t border-ink">
            {newsItems.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-line py-[22px] md:grid-cols-[120px_120px_1fr_auto]"
              >
                <time className="font-mono text-[13px] tracking-[0.06em] text-mute tabular-nums">{item.date}</time>
                <span className="justify-self-start border border-line px-2 font-mono text-[11px] tracking-[0.1em]">{item.category}</span>
                <span className="col-span-2 font-medium transition-colors group-hover:text-brand md:col-span-1">{item.title}</span>
                <span className="hidden md:block">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-7">
            <Link href="/news" className="btn btn-ghost btn-sm">
              お知らせ一覧 <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
