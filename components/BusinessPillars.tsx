'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconServer, IconBuilding, IconCode, IconArrowRight } from './Icons'

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
            icon: <IconServer size={28} className="text-white" />,
            gradient: 'from-blue-500 to-cyan-500',
            href: '/services#datacenter',
        },
        {
            id: 'apartment',
            title: '通信コンサル',
            subtitle: 'Fiber Optic',
            description: '集合住宅向け光ファイバー導入・資産価値向上提案',
            icon: <IconBuilding size={28} className="text-white" />,
            gradient: 'from-emerald-500 to-teal-500',
            href: '/services#apartment',
        },
        {
            id: 'app-development',
            title: 'アプリ開発',
            subtitle: 'Development',
            description: '中小企業向け業務改善アプリのフルスクラッチ開発',
            icon: <IconCode size={28} className="text-white" />,
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
                                whileHover={{ rotate: 5, scale: 1.05 }}
                                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-6 shadow-lg`}
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
                                <IconArrowRight size={16} className="ml-1" />
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
