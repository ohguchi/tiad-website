'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { IconArrowRight } from './Icons'

interface PillarData {
    id: string
    title: string
    subtitle: string
    description: string
    image: string
    gradient: string
    overlayColor: string
    href: string
}

export default function BusinessPillars() {
    const pillars: PillarData[] = [
        {
            id: 'datacenter',
            title: 'INFRASTRUCTURE',
            subtitle: 'インフラ保守事業',
            description: 'データセンターのサーバー・VM・仮想ルーター保守',
            image: '/images/service-datacenter.png',
            gradient: 'from-blue-600/80 to-cyan-600/80',
            overlayColor: 'bg-blue-900/40',
            href: '/services#datacenter',
        },
        {
            id: 'apartment',
            title: 'FIBER OPTIC',
            subtitle: '通信コンサル事業',
            description: '集合住宅向け光ファイバー導入・資産価値向上提案',
            image: '/images/service-apartment.png',
            gradient: 'from-emerald-600/80 to-teal-600/80',
            overlayColor: 'bg-emerald-900/40',
            href: '/services#apartment',
        },
        {
            id: 'app-development',
            title: 'DEVELOPMENT',
            subtitle: 'アプリ開発事業',
            description: '中小企業向け業務改善アプリのフルスクラッチ開発',
            image: '/images/service-development.png',
            gradient: 'from-violet-600/80 to-purple-600/80',
            overlayColor: 'bg-violet-900/40',
            href: '/services#app-development',
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((pillar, index) => (
                <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="group"
                >
                    <Link href={pillar.href}>
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="relative h-[450px] md:h-[550px] rounded-xl overflow-hidden cursor-pointer"
                        >
                            {/* 背景画像 */}
                            <Image
                                src={pillar.image}
                                alt={pillar.subtitle}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* グラデーションオーバーレイ */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${pillar.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                            <div className={`absolute inset-0 ${pillar.overlayColor} group-hover:opacity-60 transition-opacity duration-500`} />

                            {/* コンテンツ */}
                            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                                {/* 上部テキスト */}
                                <div>
                                    <motion.h3
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-wide"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.2 }}
                                    >
                                        {pillar.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-white/90 text-sm md:text-base"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.3 }}
                                    >
                                        {pillar.subtitle}
                                    </motion.p>
                                </div>

                                {/* 下部テキスト */}
                                <div>
                                    <motion.p
                                        className="text-white/80 text-sm leading-relaxed mb-4 max-w-xs"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.4 }}
                                    >
                                        {pillar.description}
                                    </motion.p>

                                    {/* 矢印ボタン */}
                                    <motion.div
                                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <IconArrowRight size={20} className="text-white" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}
