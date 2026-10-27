import Link from 'next/link'
import Image from 'next/image'

const links = [
  { name: '会社概要', href: '/about' },
  { name: '事業案内', href: '/services' },
  { name: '制作実績', href: '/services/portfolio' },
  { name: 'お知らせ', href: '/news' },
  { name: 'お問い合わせ', href: '/contact' },
]

const approachLinks = [
  { name: 'AI・IoT・RPA', href: '/approach/ai-iot-rpa' },
  { name: '働き方改革', href: '/approach/work-style-reform' },
  { name: 'ICT活用', href: '/approach/ict-utilization' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-12 pb-10 pt-16 md:grid-cols-[1fr_auto_auto] md:gap-20">
        <div className="grid content-start gap-5">
          <Image src="/images/logo.png" alt="TiAD" width={120} height={38} className="h-[30px] w-auto" />
          <p className="m-0 text-sm text-mute">
            人財 × テクノロジー = ∞
            <br />
            ICTを最大限に活用し、働き方の最適化を提案します。
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4 mt-0">Menu</p>
          <ul className="m-0 grid list-none gap-2 p-0 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-line">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 mt-0">Approach</p>
          <ul className="m-0 grid list-none gap-2 p-0 text-sm">
            {approachLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-line">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line pt-5 md:col-span-3">
          <span className="eyebrow">愛知県名古屋市 ／ info@tiad.ai</span>
          <span className="eyebrow">
            <Link href="/privacy-policy" className="link-line mr-6">
              Privacy Policy
            </Link>
            © 2019-{currentYear} TiAD.LLC
          </span>
        </div>
      </div>
    </footer>
  )
}
