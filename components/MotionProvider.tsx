'use client'

import { MotionConfig } from 'framer-motion'

// OSの「視差効果を減らす」設定がオンの人には、移動系のアニメーションを止める
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
