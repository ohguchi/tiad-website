import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TiADとは | TiAD.LLC',
  description: 'TiADについて - Tomorrow is Another Day',
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              TiADとは
            </span>
          </h1>
          <p className="text-xl text-gray-400">What TiAD</p>
        </div>

        {/* メインコンテンツ */}
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">私たちの目指す働き方改革</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                今日本ではしきりに『働き方改革』が叫ばれています。
                特に２０１９年から働き方改革関連法が導入されたことにより一段と『働き方』について考える必要が出てきたのではないでしょうか？
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                ただ現在の働き方改革は時間外労働の制限や有給休暇取得の義務化など「労働時間の削減」にばかり目を向けられており、このままでは本来目指すべき「労働力不足の解消」「生産性の向上」を図ることがますます難しくなってしまうのではないかと思います。
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                私たちはAI・IoT・RPAなど新しい労働力となりうるICT技術を用いて、まずは労働そのものの削減、そして人がすべき業務の最適化を提案することが真の働き方改革へとつながっていくと考えています。
              </p>
            </div>
          </section>

          {/* コンセプトセクション */}
          <section className="bg-dark-800 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              人財 × テクノロジー = ∞
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-4">人財</div>
                <p className="text-gray-400">
                  人の持つ可能性を広げるために
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-4xl text-gray-500">×</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-4">テクノロジー</div>
                <p className="text-gray-400">
                  人との結びつきを強くするために
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <div className="text-6xl font-bold text-primary-500 mb-4">= ∞</div>
              <p className="text-gray-300 text-lg">
                私たちは新時代の技術を提供していきます
              </p>
            </div>
          </section>

          {/* ビジョンセクション */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">私たちのビジョン</h2>
            <div className="space-y-6">
              <div className="bg-dark-800 rounded-xl p-6 border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-white mb-3">ICTを最大限に活用</h3>
                <p className="text-gray-400">
                  最新のICT技術を活用し、業務効率化と生産性向上を実現します。
                </p>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-white mb-3">働き方の最適化</h3>
                <p className="text-gray-400">
                  単なる労働時間の削減ではなく、真の働き方改革を実現します。
                </p>
              </div>
              <div className="bg-dark-800 rounded-xl p-6 border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-white mb-3">持続可能な成長</h3>
                <p className="text-gray-400">
                  人とテクノロジーの融合により、持続可能な成長を支援します。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

