'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface PillarData {
    id: string
    title: string
    subtitle: string
    description: string
    icon: React.ReactNode
    gradient: string
    href: string
}

export default function BusinessPillars() {
    const pillars: PillarData[] = [
        {
            id: 'datacenter',
            title: 'インフラ保守',
            subtitle: 'Infrastructure',
            description: 'データセンターのサーバー・VM・仮想ルーター保守',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            gradient: 'from-blue-500 to-cyan-500',
            href: '/services#datacenter',
        },
        {
            id: 'apartment',
            title: '通信コンサル',
            subtitle: 'Fiber Optic',
            description: '集合住宅向け光ファイバー導入・資産価値向上提案',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            gradient: 'from-emerald-500 to-teal-500',
            href: '/services#apartment',
        },
        {
            id: 'app-development',
            title: 'アプリ開発',
            subtitle: 'Development',
            description: '中小企業向け業務改善アプリのフルスクラッチ開発',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            gradient: 'from-violet-500 to-purple-500',
            href: '/services#app-development',
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
                <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                    <Link href={pillar.href}>
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="relative h-full bg-white rounded-2xl p-8 border border-light-200 hover:border-primary-300 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                        >
                            {/* アイコン */}
                            <motion.div
                                whileHover={{ rotate: 5 }}
                                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white mb-6`}
                            >
                                {pillar.icon}
                            </motion.div>

                            {/* テキスト */}
                            <p className="text-xs text-primary-500 tracking-widest mb-1 font-medium">{pillar.subtitle}</p>
                            <h3 className="text-xl font-bold text-light-800 mb-3 group-hover:text-primary-500 transition-colors">
                                {pillar.title}
                            </h3>
                            <p className="text-light-500 text-sm leading-relaxed mb-4">
                                {pillar.description}
                            </p>

                            {/* 矢印 */}
                            <div className="flex items-center text-primary-500 text-sm font-medium">
                                詳しく見る
                                <motion.svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </motion.svg>
                            </div>

                            {/* 下部ライン */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        </motion.div>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}
