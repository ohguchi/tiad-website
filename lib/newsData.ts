// ニュースデータの型定義とデータ
export interface NewsItem {
    id: number
    title: string
    date: string
    category: string
    slug: string
    content: string
    // 記事の最後に置くリンク（関連ページがあるとき）
    link?: { href: string; label: string }
}

// ニュースデータ
// 新しいお知らせを追加する場合は、このリストの先頭に追加してください
export const newsItems: NewsItem[] = [
    {
        id: 29,
        title: '自社サービス「IRIS」の提供を開始しました',
        date: '2026.11.01',
        category: 'お知らせ',
        slug: '2026-11-iris',
        content:
            '複数の店舗を展開する本部向けに、店舗のInstagram投稿をAIで評価するサービス「IRIS」の提供を開始しました。\n\n各店舗が投稿した写真と本文を、本部が定めた規定に照らしてAIが評価します。違反を見つけるだけでなく、推奨事項を満たした投稿を加点で評価し、良い投稿を他店舗へ横展開することで、店舗PRの品質向上とブランドの見せ方の共通化を支えます。',
        link: { href: '/services/portfolio/iris', label: 'IRISの詳細を見る' },
    },
    {
        id: 26,
        title: 'データセンターのFW切替業務を受注しました',
        date: '2026.08.01',
        category: 'お知らせ',
        slug: '2026-08-fw',
        content: '大手通信事業者のデータセンターにFW切替業務を受注しました。',
    },
    {
        id: 25,
        title: 'VMware ESXiのアップグレード業務を受注しました',
        date: '2026.07.01',
        category: 'お知らせ',
        slug: '2026-07-esxi',
        content: 'VMware ESXiのアップグレード業務を受注しました。',
    },
    {
        id: 24,
        title: 'データセンターのVMwareバージョンアップ業務を受注しました',
        date: '2026.06.01',
        category: 'お知らせ',
        slug: '2026-06-vmware',
        content: '大手通信事業者のデータセンターにてVMwareバージョンアップ業務を受注しました。',
    },
    {
        id: 27,
        title: '自社サービス「LINK」の提供を開始しました',
        date: '2026.02.01',
        category: 'お知らせ',
        slug: '2026-02-link',
        content:
            '営業・バックヤード（コールセンター）・エンドユーザーの3者をつなぐ業務Webアプリ「LINK」の提供を開始しました。\n\n営業が登録した案件を軸に、案件ごとの顧客管理、現地イベントの予約受付・アンケート、Web問い合わせ・コールバック予約、バックヤードでの情報・履歴・タスク管理までをひとつのサービスで行えます。',
        link: { href: '/services/portfolio/link', label: 'LINKの詳細を見る' },
    },
    {
        id: 23,
        title: 'VMware ESXiのアップグレード業務を受注しました',
        date: '2025.12.01',
        category: 'お知らせ',
        slug: '2025-12-esxi',
        content: 'VMware ESXiのアップグレード業務を受注しました。',
    },
    {
        id: 28,
        title: '自社サービス「NEXUS」の提供を開始しました',
        date: '2025.10.01',
        category: 'お知らせ',
        slug: '2025-10-nexus',
        content:
            '現場から経理まで、会社の業務をひとつにつなぐ基幹システム「NEXUS」の提供を開始しました。\n\n工程管理・従業員管理・勤怠管理・日報作成/経費精算・経理/会計の5つの業務を、ひとつのデータベースで結びます。現場で入力した日報や打刻が、そのまま原価・給与・仕訳にまで届くため、部署ごとの転記や二重入力が不要になります。',
        link: { href: '/services/portfolio/nexus', label: 'NEXUSの詳細を見る' },
    },
    {
        id: 22,
        title: 'データセンターのVM移行業務を受注しました',
        date: '2025.10.01',
        category: 'お知らせ',
        slug: '2025-10-vm',
        content: '大手通信事業者のデータセンターにてVM移行業務を受注しました。',
    },
    {
        id: 21,
        title: 'VMware ESXiのアップグレード業務を受注しました',
        date: '2025.06.01',
        category: 'お知らせ',
        slug: '2025-06-esxi',
        content: 'VMware ESXiのアップグレード業務を受注しました。',
    },
    {
        id: 20,
        title: 'データセンターのVM移行業務を受注しました',
        date: '2025.01.01',
        category: 'お知らせ',
        slug: '2025-01-vm',
        content: '大手通信事業者のデータセンターにてVM移行業務を受注しました。',
    },
    {
        id: 19,
        title: 'データセンターのクラウド仮想ルーター切替業務を受注しました',
        date: '2024.10.01',
        category: 'お知らせ',
        slug: '2024-10-vr',
        content: '大手通信事業者のデータセンターにクラウド仮想ルーター切替業務を受注しました。',
    },
    {
        id: 18,
        title: 'データセンターのクラウド仮想ルーター切替業務を受注しました',
        date: '2024.09.01',
        category: 'お知らせ',
        slug: '2024-09-vr',
        content: '大手通信事業者のデータセンターにクラウド仮想ルーター切替業務を受注しました。',
    },
    {
        id: 17,
        title: 'データセンターのVM移行業務を受注しました',
        date: '2024.06.01',
        category: 'お知らせ',
        slug: '2024-06-vm',
        content: '大手通信事業者のデータセンターにてVM移行業務を受注しました。',
    },
    {
        id: 16,
        title: 'データセンターのクラウド仮想ルーター切替業務を受注しました',
        date: '2023.06.01',
        category: 'お知らせ',
        slug: '2023-06-vr',
        content: '大手通信事業者のデータセンターにクラウド仮想ルーター切替業務を受注しました。',
    },
    {
        id: 15,
        title: '公営集合住宅向け光サービス更新の申請業務を受注しました',
        date: '2022.10.01',
        category: 'お知らせ',
        slug: '2022-10-fiber',
        content: '大手通信事業者の公営集合住宅向け光サービス更新の申請業務を受注しました。',
    },
    {
        id: 14,
        title: 'データセンターのクラウド仮想ルーター切替業務を受注しました',
        date: '2021.12.01',
        category: 'お知らせ',
        slug: '2021-12-vr',
        content: '大手通信事業者のデータセンターにクラウド仮想ルーター切替業務を受注しました。',
    },
    {
        id: 13,
        title: 'データセンターのVM移行業務を受注しました',
        date: '2021.10.01',
        category: 'お知らせ',
        slug: '2021-10-vm',
        content: '大手通信事業者のデータセンターにてVM移行業務を受注しました。',
    },
    {
        id: 12,
        title: 'データセンターのネットワーク監視機器切替業務を受注しました',
        date: '2021.08.01',
        category: 'お知らせ',
        slug: '2021-08-monitoring',
        content: '大手通信事業者のデータセンターにてネットワーク監視機器の切替業務を受注しました。',
    },
    {
        id: 11,
        title: 'データセンターのVLAN切替業務を受注しました',
        date: '2021.02.01',
        category: 'お知らせ',
        slug: '2021-02-vlan',
        content: '大手通信事業者のデータセンターにてVLAN切替業務を受注しました。',
    },
    {
        id: 10,
        title: '静岡エリアの通信基地局保守業務を受注しました',
        date: '2021.02.01',
        category: 'お知らせ',
        slug: '2021-02-base-station',
        content: '静岡エリアにてキャリア通信基地局の保守業務を受注しました。',
    },
    {
        id: 1,
        title: 'コールセンター部門の立ち上げにつきまして',
        date: '2021.01.15',
        category: 'お知らせ',
        slug: 'callcenter',
        content: '大手通信会社のインターネット開通サポートを行うコールセンター部門を立ち上げました。インターネット契約からサービス開通までに必要な調査、折衝を専門知識を持ったスタッフがオペレーションします。',
    },
    {
        id: 2,
        title: 'VMware ESXiのアップグレード業務を受注しました',
        date: '2020.12.19',
        category: 'お知らせ',
        slug: 'data-host1',
        content: 'VMware ESXiのアップグレード業務を受注しました。',
    },
    {
        id: 3,
        title: 'データセンターのVM移行業務を受注しました',
        date: '2020.12.19',
        category: 'お知らせ',
        slug: 'data-vm3',
        content: '大手通信事業者のデータセンターにてVM移行業務を受注しました。',
    },
    {
        id: 4,
        title: '2拠点間IPsec VPNの提供について',
        date: '2020.12.07',
        category: 'サービス',
        slug: 'ipsec-vpn',
        content: '弊社が運用しているオンプレミスサーバーをご利用いただいているお客様の新拠点展開に伴い、２拠点をIPsecを用いてVPN接続させることで、２つの拠点から社内サーバーへのアクセスを可能としました。事前の設計構築から導入後の運用保守まで一元的に弊社にて実施いたします。',
    },
    {
        id: 5,
        title: 'データセンターのVM移行業務を受注しました',
        date: '2020.04.04',
        category: 'お知らせ',
        slug: 'data-vm2',
        content: '大手通信事業者のデータセンターにてVM移行業務を受注しました。',
    },
    {
        id: 6,
        title: '業務用ソフトウェア29台の一斉入替業務を受注しました',
        date: '2020.03.12',
        category: 'お知らせ',
        slug: 'pc-replacement',
        content: '守山区の大手水道工事会社が業務使用しているソフトウェア29台を一斉入替する業務を受注しました。',
    },
    {
        id: 7,
        title: 'データセンターのクラウド仮想ルーター切替業務を受注しました',
        date: '2019.11.15',
        category: 'お知らせ',
        slug: 'data-vr',
        content: '大手通信事業者のデータセンターにクラウド仮想ルーター切替業務を受注しました。',
    },
    {
        id: 8,
        title: 'ソフトウェア販売開始',
        date: '2019.09.01',
        category: 'サービス',
        slug: 'software',
        content: '中小企業様を対象によりIT技術導入を支援する各種ソフトウェアをリリースしました。主要機能はパッケージ化されており、比較的簡単に導入することができ、会社や業界特有のルールなども予め適用させることで、早い段階で導入効果が見込めます。',
    },
    {
        id: 9,
        title: 'データセンターのVM移行業務を受注しました',
        date: '2019.08.19',
        category: 'お知らせ',
        slug: 'data-vm',
        content: '大手通信事業者のデータセンターにてVM移行業務を受注しました。',
    },
]

// slugからニュースアイテムを取得する関数
export function getNewsItemBySlug(slug: string): NewsItem | undefined {
    return newsItems.find((item) => item.slug === slug)
}

// 全てのslugを取得する関数（静的生成用）
export function getAllNewsSlugs(): string[] {
    return newsItems.map((item) => item.slug)
}
