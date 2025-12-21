import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// 送信先メールアドレス（環境変数から取得、デフォルト値あり）
const TO_EMAIL = process.env.CONTACT_EMAIL || 'info@tiad.ai'
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@tiad.ai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'メールアドレスの形式が正しくありません' },
        { status: 400 }
      )
    }

    // お問い合わせ種別の日本語変換
    const subjectMap: Record<string, string> = {
      service: 'サービスについて',
      consulting: 'コンサルティング',
      development: 'システム開発',
      other: 'その他',
    }
    const subjectJa = subjectMap[subject] || subject

    // メール本文の作成
    const emailBody = `
お問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【お名前】
${name}

【メールアドレス】
${email}

【会社名】
${company || '未入力'}

【お問い合わせ種別】
${subjectJa}

【お問い合わせ内容】
${message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

このメールは、TiAD.LLCウェブサイトのお問い合わせフォームから送信されました。
`

    // APIキーのチェック
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'メール送信の設定が完了していません' },
        { status: 500 }
      )
    }

    // Resendの初期化（関数内で実行してビルド時のエラーを回避）
    const resend = new Resend(apiKey)

    // Resendでメール送信
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email, // 返信先を送信者のメールアドレスに設定
      subject: `【TiAD.LLC】お問い合わせ: ${subjectJa} - ${name}様`,
      text: emailBody,
      html: `
        <div style="font-family: 'Noto Sans JP', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            お問い合わせがありました
          </h2>
          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; background-color: #1e293b; color: #cbd5e1; font-weight: bold; width: 150px;">お名前</td>
              <td style="padding: 10px; background-color: #334155; color: #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #1e293b; color: #cbd5e1; font-weight: bold;">メールアドレス</td>
              <td style="padding: 10px; background-color: #334155; color: #f1f5f9;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #1e293b; color: #cbd5e1; font-weight: bold;">会社名</td>
              <td style="padding: 10px; background-color: #334155; color: #f1f5f9;">${company || '未入力'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #1e293b; color: #cbd5e1; font-weight: bold;">お問い合わせ種別</td>
              <td style="padding: 10px; background-color: #334155; color: #f1f5f9;">${subjectJa}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #1e293b; color: #cbd5e1; font-weight: bold; vertical-align: top;">お問い合わせ内容</td>
              <td style="padding: 10px; background-color: #334155; color: #f1f5f9; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #94a3b8; font-size: 12px;">
            このメールは、TiAD.LLCウェブサイトのお問い合わせフォームから送信されました。
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'メールの送信に失敗しました' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'お問い合わせを受け付けました' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    )
  }
}


