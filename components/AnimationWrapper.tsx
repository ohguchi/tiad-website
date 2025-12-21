'use client'

import { useState, useEffect } from 'react'
import OpeningAnimation from './OpeningAnimation'

interface AnimationWrapperProps {
    children: React.ReactNode
}

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
    const [showAnimation, setShowAnimation] = useState(true)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        // セッションストレージでアニメーション表示済みかチェック
        const hasPlayed = sessionStorage.getItem('openingAnimationPlayed')
        if (hasPlayed) {
            setShowAnimation(false)
        }
    }, [])

    const handleAnimationComplete = () => {
        sessionStorage.setItem('openingAnimationPlayed', 'true')
        setShowAnimation(false)
    }

    // サーバーサイドレンダリング時はchildrenのみ
    if (!isClient) {
        return <>{children}</>
    }

    return (
        <>
            {showAnimation && <OpeningAnimation onComplete={handleAnimationComplete} />}
            <div
                style={{
                    opacity: showAnimation ? 0 : 1,
                    transition: 'opacity 0.3s ease-in-out',
                }}
            >
                {children}
            </div>
        </>
    )
}
