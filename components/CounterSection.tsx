'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterItemProps {
    end: number
    suffix?: string
    prefix?: string
    label: string
    duration?: number
}

function CounterItem({ end, suffix = '', prefix = '', label, duration = 2 }: CounterItemProps) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useEffect(() => {
        if (!isInView) return

        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [isInView, end, duration])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
        >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <span className="text-primary-500">
                    {prefix}{count}{suffix}
                </span>
            </div>
            <p className="text-light-500 text-sm md:text-base">{label}</p>
        </motion.div>
    )
}

export default function CounterSection() {
    const stats = [
        { end: 10, suffix: '年+', label: 'ICT業界での実績', duration: 2 },
        { end: 100, suffix: '+', label: '導入支援実績', duration: 2.5 },
        { end: 24, suffix: '/7', label: '監視・サポート体制', duration: 1.5 },
        { end: 98, suffix: '%', label: '顧客満足度', duration: 2 },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <CounterItem {...stat} />
                </motion.div>
            ))}
        </div>
    )
}
