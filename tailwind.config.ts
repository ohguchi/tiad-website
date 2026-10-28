import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ロゴの黒（文字・罫線の基本色）
        ink: '#0B0D1A',
        // ロゴの濃い青（ブランドカラー）
        brand: {
          DEFAULT: '#1D2188',
          dark: '#141763',
          light: '#B9C2EC',
        },
        // ロゴの明るい青（差し色。ごく少量だけ使う）
        sky: '#0A85CC',
        // 青みのある生成り（背景の切り替え用）
        paper: '#F3F5F9',
        // 罫線
        line: '#D6DAE4',
        // 補足テキスト
        mute: '#596079',
        // 日曜日の赤（カレンダー用）
        sun: '#C8322B',
      },
      fontFamily: {
        sans: ['var(--font-zen)', '"Hiragino Kaku Gothic ProN"', '"Yu Gothic"', 'sans-serif'],
        display: ['var(--font-archivo)', 'var(--font-zen)', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'Menlo', 'monospace'],
      },
      transitionTimingFunction: {
        sharp: 'cubic-bezier(.7, 0, .2, 1)',
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        // 日めくりのページが上に破れていく動き
        tear: {
          '0%': { transform: 'rotateX(0) translateY(0)', opacity: '1' },
          '60%': { opacity: '1' },
          '100%': { transform: 'rotateX(-118deg) translateY(-14px)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 48s linear infinite',
        tear: 'tear .75s cubic-bezier(.7, 0, .2, 1) forwards',
      },
    },
  },
  plugins: [],
}
export default config
