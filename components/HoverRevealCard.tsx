'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowRight } from './Icons'

interface HoverRevealCardProps {
    title: string
    subtitle: string
    image: string
    href: string
    textColor?: string
    hoverTextColor?: string
}

export default function HoverRevealCard({
    title,
    subtitle,
    image,
    href,
    textColor = 'text-light-800',
    hoverTextColor = 'text-white',
}: HoverRevealCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link href={href}>
            <motion.div
                className="relative h-[200px] md:h-[250px] overflow-hidden cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ y: -5 }}
            >
                {/* 背景 - 通常時は白、ホバー時は画像 */}
                <div className="absolute inset-0 bg-white transition-opacity duration-500" />

                {/* 背景画像 - ホバー時に表示 */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 1.1
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    {/* 暗いオーバーレイ */}
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>

                {/* コンテンツ */}
                <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12">
                    <div className="flex items-center gap-4">
                        <motion.h3
                            className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-300 ${isHovered ? hoverTextColor : textColor
                                }`}
                        >
                            {title}
                        </motion.h3>

                        {/* 矢印アイコン */}
                        <motion.div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-primary-500' : 'bg-primary-500'
                                }`}
                            animate={{ x: isHovered ? 5 : 0 }}
                        >
                            <IconArrowRight size={16} className="text-white" />
                        </motion.div>
                    </div>

                    <motion.p
                        className={`text-sm md:text-base mt-2 transition-colors duration-300 ${isHovered ? 'text-white/80' : 'text-primary-500'
                            }`}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* 左側のアクセントライン */}
                <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ originY: 0 }}
                />
            </motion.div>
        </Link>
    )
}
