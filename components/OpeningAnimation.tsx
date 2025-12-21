'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface OpeningAnimationProps {
    onComplete: () => void
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
    const [phase, setPhase] = useState<'text' | 'infinity' | 'logo' | 'exit'>('text')

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase('infinity'), 1800),
            setTimeout(() => setPhase('logo'), 3000),
            setTimeout(() => setPhase('exit'), 4200),
            setTimeout(() => onComplete(), 5000),
        ]
        return () => timers.forEach(clearTimeout)
    }, [onComplete])

    const textLine1 = '人財×テクノロジー'
    const infinitySymbol = '∞'

    return (
        <AnimatePresence>
            {phase !== 'exit' ? null : (
                <motion.div
                    key="exit"
                    initial={{ y: 0 }}
                    animate={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999]"
                />
            )}
            <motion.div
                key="opening"
                initial={{ opacity: 1 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 z-[9999] bg-dark-900 flex items-center justify-center overflow-hidden"
            >
                {/* 背景パターン */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.3) 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>

                {/* グローエフェクト */}
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <div className="relative z-10 text-center">
                    {/* Phase 1: テキスト表示 */}
                    <AnimatePresence mode="wait">
                        {phase === 'text' && (
                            <motion.div
                                key="text-phase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                                    {textLine1.split('').map((char, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: index * 0.08,
                                                duration: 0.4,
                                                ease: 'easeOut',
                                            }}
                                            className="inline-block bg-gradient-to-r from-white via-primary-300 to-white bg-clip-text text-transparent"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Phase 2: ∞ シンボル */}
                        {phase === 'infinity' && (
                            <motion.div
                                key="infinity-phase"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.5 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="flex flex-col items-center"
                            >
                                <motion.div
                                    className="text-8xl md:text-[12rem] lg:text-[16rem] font-bold text-primary-400"
                                    animate={{
                                        textShadow: [
                                            '0 0 20px rgba(14, 165, 233, 0.5)',
                                            '0 0 60px rgba(14, 165, 233, 0.8)',
                                            '0 0 20px rgba(14, 165, 233, 0.5)',
                                        ],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {infinitySymbol}
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-xl md:text-2xl text-gray-400 mt-4"
                                >
                                    無限の可能性へ
                                </motion.p>
                            </motion.div>
                        )}

                        {/* Phase 3: ロゴ表示 */}
                        {(phase === 'logo' || phase === 'exit') && (
                            <motion.div
                                key="logo-phase"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="flex flex-col items-center"
                            >
                                <motion.div
                                    animate={{
                                        filter: [
                                            'drop-shadow(0 0 10px rgba(14, 165, 233, 0.3))',
                                            'drop-shadow(0 0 30px rgba(14, 165, 233, 0.6))',
                                            'drop-shadow(0 0 10px rgba(14, 165, 233, 0.3))',
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <Image
                                        src="/images/logo.png"
                                        alt="TiAD Logo"
                                        width={396}
                                        height={127}
                                        priority
                                        className="w-auto h-16 md:h-24 lg:h-32"
                                    />
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg md:text-xl text-gray-400 mt-6"
                                >
                                    Tomorrow is Another Day
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 下部のプログレスバー */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-700">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-400"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4.5, ease: 'linear' }}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
