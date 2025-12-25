// ニュースデータの型定義とデータ
export interface NewsItem {
    id: number
    title: string
    date: string
    category: string
    slug: string
    content: string
}

// ニュースデータ
// 新しいお知らせを追加する場合は、このリストの先頭に追加してください
export const newsItems: NewsItem[] = [
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
        title: '新規案件受注のお知らせ',
        date: '2020.12.19',
        category: 'お知らせ',
        slug: 'data-host1',
        content: 'VMware ESXi のアップグレード業務を受注しました。',
    },
    {
        id: 3,
        title: '新規案件受注のお知らせ',
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
        title: '新規案件の受注',
        date: '2020.04.04',
        category: 'お知らせ',
        slug: 'data-vm2',
        content: '大手通信事業者のデータセンターにてVM移行業務を受注しました。',
    },
    {
        id: 6,
        title: '新規案件の受注',
        date: '2020.03.12',
        category: 'お知らせ',
        slug: 'pc-replacement',
        content: '守山区の大手水道工事会社が業務使用しているソフトウェア29台を一斉入替する業務を受注しました。',
    },
    {
        id: 7,
        title: '新規案件の受注',
        date: '2019.11.15',
        category: 'お知らせ',
        slug: 'data-vr',
        content: '大手通信事業者のデータセンターにクラウド仮想ルータ切替業務を受注しました。',
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
        title: '新規案件の受注',
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
