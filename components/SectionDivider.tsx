'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
    variant?: 'wave' | 'diagonal' | 'curve' | 'zigzag'
    color?: string
    flip?: boolean
    className?: string
}

export default function SectionDivider({
    variant = 'diagonal',
    color = 'white',
    flip = false,
    className = '',
}: SectionDividerProps) {
    const renderDivider = () => {
        switch (variant) {
            case 'wave':
                return (
                    <svg
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className={`w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeInOut' }}
                            d="M0,60 C320,100 420,20 720,60 C1020,100 1120,20 1440,60 L1440,120 L0,120 Z"
                            fill={color}
                        />
                    </svg>
                )

            case 'diagonal':
                return (
                    <svg
                        viewBox="0 0 1440 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className={`w-full h-12 md:h-20 ${flip ? 'rotate-180' : ''}`}
                    >
                        <polygon points="0,80 1440,0 1440,80" fill={color} />
                    </svg>
                )

            case 'curve':
                return (
                    <svg
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className={`w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}
                    >
                        <motion.path
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
                            fill={color}
                        />
                    </svg>
                )

            case 'zigzag':
                return (
                    <svg
                        viewBox="0 0 1440 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className={`w-full h-8 md:h-14 ${flip ? 'rotate-180' : ''}`}
                    >
                        <polygon
                            points="0,60 60,0 120,60 180,0 240,60 300,0 360,60 420,0 480,60 540,0 600,60 660,0 720,60 780,0 840,60 900,0 960,60 1020,0 1080,60 1140,0 1200,60 1260,0 1320,60 1380,0 1440,60 1440,60 0,60"
                            fill={color}
                        />
                    </svg>
                )

            default:
                return null
        }
    }

    return (
        <div className={`relative w-full overflow-hidden leading-none ${className}`}>
            {renderDivider()}
        </div>
    )
}
