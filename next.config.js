/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercelでは output: 'export' を削除してAPI Routesを使用可能にする
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

