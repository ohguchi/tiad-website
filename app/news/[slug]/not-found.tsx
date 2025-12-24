'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { motion } from 'framer-motion'

export default function NewsNotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light-100 via-white to-white">
            <div className="container mx-auto px-4 lg:px-8 py-24">
                <ScrollReveal>
                    <div className="text-center">
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-light-800">
                            404
                        </h1>
                        <p className="text-xl text-light-600 mb-8">
                            お探しのお知らせは見つかりませんでした
                        </p>
                        <motion.div whileHover={{ x: -5 }} className="inline-block">
                            <Link
                                href="/news"
                                className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors font-medium"
                            >
                                ← ニュース一覧に戻る
                            </Link>
                        </motion.div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}
