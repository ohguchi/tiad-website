'use client'

import ScrollReveal from '@/components/ScrollReveal'
import ParallaxSection from '@/components/ParallaxSection'
import VideoBackground from '@/components/VideoBackground'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function AboutPage() {
  return (
    <div className="pt-0 pb-0">
      {/* ヒーローセクション */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <VideoBackground
          imageSrc="/images/hero-pattern.svg"
          overlay={true}
          className="absolute inset-0"
        >
          <AnimatedBackground />
        </VideoBackground>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                  TiADとは
                </span>
              </h1>
              <p className="text-2xl text-gray-300">What TiAD</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">

        {/* メインコンテンツ */}
        <div className="max-w-5xl mx-auto">
          <ParallaxSection speed={0.3}>
            <ScrollReveal>
              <section className="mb-24">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                  <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                    私たちの目指す働き方改革
                  </span>
                </h2>
                <div className="space-y-6">
                  <ScrollReveal delay={0.2}>
                    <p className="text-gray-200 leading-relaxed text-xl">
                      今日本ではしきりに『働き方改革』が叫ばれています。
                      特に２０１９年から働き方改革関連法が導入されたことにより一段と『働き方』について考える必要が出てきたのではないでしょうか？
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4}>
                    <p className="text-gray-200 leading-relaxed text-xl">
                      ただ現在の働き方改革は時間外労働の制限や有給休暇取得の義務化など「労働時間の削減」にばかり目を向けられており、このままでは本来目指すべき「労働力不足の解消」「生産性の向上」を図ることがますます難しくなってしまうのではないかと思います。
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.6}>
                    <p className="text-gray-200 leading-relaxed text-xl">
                      私たちはAI・IoT・RPAなど新しい労働力となりうるICT技術を用いて、まずは労働そのものの削減、そして人がすべき業務の最適化を提案することが真の働き方改革へとつながっていくと考えています。
                    </p>
                  </ScrollReveal>
                </div>
              </section>
            </ScrollReveal>
          </ParallaxSection>

          {/* コンセプトセクション */}
          <section className="relative bg-gradient-to-br from-dark-800 via-dark-700 to-dark-800 rounded-3xl p-12 md:p-16 mb-24 overflow-hidden border border-dark-600">
            <div className="absolute inset-0 opacity-10">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23000'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%230ea5e9' stroke-width='0.5'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-white">
                <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                  人財 × テクノロジー = ∞
                </span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
              <ScrollReveal delay={0.2}>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary-400 mb-6">人財</div>
                  <p className="text-gray-300 text-lg">
                    人の持つ可能性を広げるために
                  </p>
                </div>
              </ScrollReveal>
              <div className="flex items-center justify-center">
                <ScrollReveal delay={0.3}>
                  <div className="text-5xl md:text-6xl text-primary-500">×</div>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={0.4}>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-primary-400 mb-6">テクノロジー</div>
                  <p className="text-gray-300 text-lg">
                    人との結びつきを強くするために
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="text-center mt-12 relative z-10">
              <ScrollReveal delay={0.5}>
                <div className="text-7xl md:text-9xl font-bold text-primary-500 mb-6">= ∞</div>
                <p className="text-gray-200 text-xl">
                  私たちは新時代の技術を提供していきます
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* ビジョンセクション */}
          <ParallaxSection speed={0.2}>
            <section>
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white">
                  <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                    私たちのビジョン
                  </span>
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ScrollReveal delay={0.2} direction="up">
                  <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">ICTを最大限に活用</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      最新のICT技術を活用し、業務効率化と生産性向上を実現します。
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.4} direction="up">
                  <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">働き方の最適化</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      単なる労働時間の削減ではなく、真の働き方改革を実現します。
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.6} direction="up">
                  <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">持続可能な成長</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      人とテクノロジーの融合により、持続可能な成長を支援します。
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          </ParallaxSection>
        </div>
      </div>
    </div>
  )
}


