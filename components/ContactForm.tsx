'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '送信に失敗しました')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-bold">
            お名前 <span className="ml-1 font-mono text-[11px] text-brand">必須</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-none border border-line bg-white px-4 py-3 text-ink placeholder:text-mute/60 transition-colors focus:border-ink focus:outline-none"
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-bold">
            メールアドレス <span className="ml-1 font-mono text-[11px] text-brand">必須</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-none border border-line bg-white px-4 py-3 text-ink placeholder:text-mute/60 transition-colors focus:border-ink focus:outline-none"
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-bold">
          会社名
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-none border border-line bg-white px-4 py-3 text-ink placeholder:text-mute/60 transition-colors focus:border-ink focus:outline-none"
          placeholder="株式会社○○"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-bold">
          お問い合わせ種別 <span className="ml-1 font-mono text-[11px] text-brand">必須</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-none border border-line bg-white px-4 py-3 text-ink transition-colors focus:border-ink focus:outline-none"
        >
          <option value="">選択してください</option>
          <option value="service">サービスについて</option>
          <option value="consulting">コンサルティング</option>
          <option value="development">システム開発</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold">
          お問い合わせ内容 <span className="ml-1 font-mono text-[11px] text-brand">必須</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-none border border-line bg-white px-4 py-3 text-ink placeholder:text-mute/60 transition-colors focus:border-ink focus:outline-none"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className="border border-ink border-l-4 bg-paper p-4"
        >
          お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="border border-sun border-l-4 bg-white p-4 text-sun"
        >
          送信に失敗しました。しばらく時間をおいて再度お試しください。
        </motion.div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn w-full justify-center disabled:cursor-not-allowed disabled:border-line disabled:bg-line md:w-auto"
        >
          {isSubmitting ? '送信中...' : '送信する'} <span className="arr">→</span>
        </button>
      </div>
    </form>
  )
}
