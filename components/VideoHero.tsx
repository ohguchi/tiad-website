'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface VideoHeroProps {
    children?: React.ReactNode
    overlayOpacity?: number
    className?: string
}

export default function VideoHero({ children, overlayOpacity = 0.3, className = '' }: VideoHeroProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = dimensions.width
        canvas.height = dimensions.height

        // パーティクル設定
        const particles: {
            x: number
            y: number
            radius: number
            vx: number
            vy: number
            opacity: number
            color: string
        }[] = []

        const colors = [
            'rgba(249, 115, 22, 0.4)',  // orange
            'rgba(251, 146, 60, 0.3)',  // lighter orange
            'rgba(20, 184, 166, 0.3)',  // teal
            'rgba(45, 212, 191, 0.2)',  // lighter teal
        ]

        // パーティクル初期化（30個に削減してパフォーマンス改善）
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1.5,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                opacity: Math.random() * 0.5 + 0.3,
                color: colors[Math.floor(Math.random() * colors.length)],
            })
        }

        // 波形設定
        let waveOffset = 0
        const waveSpeed = 0.015
        let frameCount = 0

        const animate = () => {
            frameCount++
            // 2フレームに1回描画してパフォーマンス改善
            if (frameCount % 2 === 0) {
                requestAnimationFrame(animate)
                return
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // グラデーション背景
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
            gradient.addColorStop(0, 'rgba(255, 247, 237, 0.9)')  // orange-50
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)')
            gradient.addColorStop(1, 'rgba(240, 253, 250, 0.9)')  // teal-50
            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // 波形を描画（ステップを15に増やして計算削減）
            ctx.beginPath()
            ctx.moveTo(0, canvas.height)
            for (let x = 0; x <= canvas.width; x += 15) {
                const y = canvas.height - 100 + Math.sin((x * 0.01) + waveOffset) * 30 + Math.sin((x * 0.02) + waveOffset * 0.5) * 20
                ctx.lineTo(x, y)
            }
            ctx.lineTo(canvas.width, canvas.height)
            ctx.closePath()
            ctx.fillStyle = 'rgba(249, 115, 22, 0.05)'
            ctx.fill()

            // 2つ目の波
            ctx.beginPath()
            ctx.moveTo(0, canvas.height)
            for (let x = 0; x <= canvas.width; x += 15) {
                const y = canvas.height - 60 + Math.sin((x * 0.015) + waveOffset * 1.2) * 20 + Math.cos((x * 0.01) + waveOffset) * 15
                ctx.lineTo(x, y)
            }
            ctx.lineTo(canvas.width, canvas.height)
            ctx.closePath()
            ctx.fillStyle = 'rgba(20, 184, 166, 0.05)'
            ctx.fill()

            waveOffset += waveSpeed

            // パーティクルを更新・描画
            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                // 境界でバウンス
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // パーティクル描画
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.fill()

                // 近いパーティクル同士を線で結ぶ（距離を100に短縮）
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const distSq = dx * dx + dy * dy
                    // sqrt を避けて distSq で判定（100^2 = 10000）
                    if (distSq < 10000) {
                        const dist = Math.sqrt(distSq)
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = `rgba(249, 115, 22, ${0.15 * (1 - dist / 100)})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                })
            })

            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationId)
    }, [dimensions])

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ width: '100%', height: '100%' }}
            />
            {/* オーバーレイ */}
            <div
                className="absolute inset-0 z-[1]"
                style={{ backgroundColor: `rgba(255, 255, 255, ${overlayOpacity})` }}
            />
            {/* コンテンツ */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
