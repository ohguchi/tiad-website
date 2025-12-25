/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercelでは output: 'export' を削除してAPI Routesを使用可能にする
  images: {
    // 画像最適化を有効化
    unoptimized: false,
    // WebP/AVIFフォーマットで配信（サイズ大幅削減）
    formats: ['image/avif', 'image/webp'],
    // デバイスサイズに応じた最適化
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig

