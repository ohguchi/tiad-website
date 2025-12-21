'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionDivider from '@/components/SectionDivider'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function PrivacyPolicyPage() {
    const heroRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    const sections = [
        {
            title: '私たちについて',
            content: '私たちのサイトアドレスは https://tiad.ai です。'
        },
        {
            title: '法令等の遵守',
            content: '弊社は、個人情報の保護に関する法律（個人情報保護法）その他の関連法令、関係各省庁のガイドラインなどを遵守して、個人情報を適正に取り扱うとともに、安全管理について適切な措置を講じます。'
        },
        {
            title: '従業員教育',
            content: '弊社は、個人情報の取扱いが適正に行われるよう従業員への教育・指導を徹底します。'
        },
        {
            title: '個人情報の利用目的',
            content: '弊社は、取得した個人情報を、各部署ごとに適切に取扱い、業務の遂行に必要な範囲内で利用します。弊社が独自に別の業務等で適正に取得した個人情報について事前に承諾を得た場合に限り、弊社が取り扱う他の業務に係る商品、サービスのご案内を目的に利用させていただくことがあります。なお、その他の目的に利用することはありません。利用目的を変更する場合には相当の関連性を有すると合理的に認められる範囲においてのみ行い、その内容をご本人に対し、原則として書面等により通知し、または弊社のホームベージなどにより公表します。'
        },
        {
            title: '個人情報の取得',
            content: '弊社は、業務上必要な範囲内で、かつ、適法で公正な手段により個人情報を取得します。'
        },
        {
            title: '個人データの安全管理措置',
            content: '弊社は、取り扱う個人データの漏洩、滅失又はき損の防止、その他個人データの安全管理のため、安全管理に関する取扱規程などの整備及び実施体制の整備など、十分なセキュリティ対策を講じるとともに、利用目的の達成に必要とされる正確性・最新性を確保するための適切な措置を講じています。'
        },
        {
            title: '個人データの第三者への提供',
            content: '弊社は、法令で定められた場合を除き、事前にご本人の同意なく第三者に個人データを提供しません。'
        },
        {
            title: 'センシティブ情報のお取扱い',
            content: '弊社は、政治的見解、信教（宗教、思想及び信条をいいます。）、労働組合への加盟、人種及び民族、門地及び本籍地、保健医療及び性生活並びに犯罪歴に関する個人情報（「センシティブ情報」といいます。）については、法令・諸規則に定められた場合のほか、取得、利用又は第三者提供を行いません。また、適切な業務運営を確保する必要から、センシティブ情報を取得、利用又は第三者提供する場合には、ご本人から同意を得るものとし、厳正な取扱いを行います。'
        },
        {
            title: '見直し・改善',
            content: '弊社の個人情報の取扱い及び安全管理に係る適切な措置については、適宜見直し、改善いたします。'
        },
        {
            title: '個人情報保護法に基づく保有個人データの開示、訂正、利用停止など',
            content: '個人情報保護法に基づく保有個人データに関する開示、訂正又は利用停止などに関するご請求については、ご請求者がご本人であることを確認させていただいたうえで手続きを行います。保険会社や他社の保有個人データに関しては当該会社に対してお取次ぎいたします。弊社の保有個人データに関し、必要な調査を行った結果、ご本人に関する情報が不正確である場合は、その結果に基づいて正確なものに変更させていただきます。手続きを希望される方は、下記お問い合わせ窓口までお申し付けください。'
        },
        {
            title: 'お問い合わせ・ご相談・苦情へのご対応',
            content: '弊社は、個人情報の取扱いに関するご相談・苦情に迅速に対応します。ご連絡先は下記のお問い合わせ窓口となります。また、保険事故に関する照会については下記お問い合わせ窓口のほか、保険証券記載の保険会社の事故相談窓口にもお問い合わせいただくことができます。なお、ご照会者がご本人であることをご確認させていただいたうえで、ご対応させていただきますので、あらかじめご了承願います。'
        },
    ]

    return (
        <div className="pt-0 pb-0">
            {/* ヒーローセクション */}
            <section
                ref={heroRef}
                className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-light-100 via-white to-white"
            >
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="container mx-auto px-4 lg:px-8 relative z-10 py-24"
                >
                    <ScrollReveal>
                        <div className="text-center">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-primary-500 text-sm md:text-base mb-4 tracking-widest font-medium"
                            >
                                PRIVACY POLICY
                            </motion.p>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-light-800">
                                プライバシーポリシー
                            </h1>
                            <p className="text-lg text-light-500">個人情報の取り扱いについて</p>
                        </div>
                    </ScrollReveal>
                </motion.div>
            </section>

            <SectionDivider variant="curve" color="#ffffff" />

            <div className="container mx-auto px-4 lg:px-8 py-16 bg-white">
                <div className="max-w-3xl mx-auto">
                    {/* 目次 */}
                    <ScrollReveal>
                        <div className="bg-light-50 rounded-2xl p-8 mb-12 border border-light-200">
                            <h2 className="text-xl font-bold text-light-800 mb-6">目次</h2>
                            <nav className="space-y-2">
                                {sections.map((section, index) => (
                                    <motion.a
                                        key={index}
                                        href={`#section-${index + 1}`}
                                        className="flex items-start text-light-600 hover:text-primary-500 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-primary-500 font-semibold mr-3 min-w-[24px]">{index + 1}.</span>
                                        <span>{section.title}</span>
                                    </motion.a>
                                ))}
                            </nav>
                        </div>
                    </ScrollReveal>

                    {/* 各セクション */}
                    {sections.map((section, index) => (
                        <ScrollReveal key={index} delay={0.1}>
                            <section id={`section-${index + 1}`} className="mb-12">
                                <h2 className="text-xl md:text-2xl font-bold text-light-800 mb-4 flex items-start">
                                    <span className="text-primary-500 mr-3">{index + 1}.</span>
                                    {section.title}
                                </h2>
                                <p className="text-light-600 leading-relaxed pl-8">{section.content}</p>
                            </section>
                        </ScrollReveal>
                    ))}

                    {/* お問い合わせ先 */}
                    <ScrollReveal>
                        <section className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-light-200">
                            <h2 className="text-xl font-bold text-light-800 mb-4">お問い合わせ先</h2>
                            <div className="space-y-2 text-light-600">
                                <p className="font-semibold text-light-800">TiAD合同会社</p>
                                <p>MAIL：<a href="mailto:info@tiad.ai" className="text-primary-500 hover:text-primary-600 transition-colors">info@tiad.ai</a></p>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* 戻るリンク */}
                    <ScrollReveal>
                        <div className="mt-12 text-center">
                            <motion.div whileHover={{ x: -5 }} className="inline-block">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors font-medium"
                                >
                                    ← 会社概要に戻る
                                </Link>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}
