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
          <label htmlFor="name" className="block text-sm font-medium text-light-700 mb-2">
            お名前 <span className="text-primary-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-light-50 border border-light-200 rounded-xl text-light-800 placeholder-light-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-light-700 mb-2">
            メールアドレス <span className="text-primary-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-light-50 border border-light-200 rounded-xl text-light-800 placeholder-light-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-light-700 mb-2">
          会社名
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-light-50 border border-light-200 rounded-xl text-light-800 placeholder-light-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="株式会社○○"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-light-700 mb-2">
          お問い合わせ種別 <span className="text-primary-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-light-50 border border-light-200 rounded-xl text-light-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">選択してください</option>
          <option value="service">サービスについて</option>
          <option value="consulting">コンサルティング</option>
          <option value="development">システム開発</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-light-700 mb-2">
          お問い合わせ内容 <span className="text-primary-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-light-50 border border-light-200 rounded-xl text-light-800 placeholder-light-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
        >
          お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
        >
          送信に失敗しました。しばらく時間をおいて再度お試しください。
        </motion.div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-10 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-light-300 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? '送信中...' : '送信する'}
        </button>
      </div>
    </form>
  )
}
