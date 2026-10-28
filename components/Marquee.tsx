const words = ['Infrastructure', 'Fiber Optic', 'Development', 'AI・IoT・RPA', 'Work Style']

function Row() {
  return (
    <span className="text-outline whitespace-nowrap pr-[0.6em] font-display text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.02em] [font-stretch:125%]">
      {words.map((w) => (
        <span key={w}>
          {w} <b className="text-brand [-webkit-text-stroke:0]">／</b>{' '}
        </span>
      ))}
    </span>
  )
}

// 事業名がゆっくり横に流れる帯（マウスを乗せると止まる）
export default function Marquee() {
  return (
    <div className="group overflow-hidden border-b border-line py-[18px]" aria-hidden="true">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </div>
  )
}
