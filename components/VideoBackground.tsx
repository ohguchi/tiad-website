'use client'

import { useState, useRef, useEffect } from 'react'

interface VideoBackgroundProps {
  videoSrc?: string
  imageSrc?: string
  overlay?: boolean
  className?: string
  children?: React.ReactNode
}

export default function VideoBackground({
  videoSrc,
  imageSrc,
  overlay = true,
  className = '',
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // 自動再生が失敗した場合は無視
      })
    }
  }, [])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* 背景動画または画像 */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => setIsLoaded(true)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        ) : (
          // グラデーションフォールバック
          <div className="w-full h-full bg-gradient-to-br from-dark-900 via-primary-900 to-dark-800" />
        )}
      </div>

      {/* オーバーレイ */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900/80 z-10" />
      )}

      {/* コンテンツ */}
      {children && (
        <div className="relative z-20 w-full h-full">{children}</div>
      )}
    </div>
  )
}

