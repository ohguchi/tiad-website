'use client'

import { useEffect, useState } from 'react'

// 名古屋（日本時間）の「HH:MM」を返す
function nowJst() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Tokyo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

// フッターの名古屋の現在時刻。1分ごとに更新する
export default function LocalClock() {
  // サーバーとの表示ずれを防ぐため、マウント後に表示する（初回は幅だけ確保）
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(nowJst())
    const t = setInterval(() => setTime(nowJst()), 60000)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="eyebrow inline-block min-w-[16ch] tabular-nums" suppressHydrationWarning>
      {time ? `Nagoya ${time} JST` : ''}
    </span>
  )
}
