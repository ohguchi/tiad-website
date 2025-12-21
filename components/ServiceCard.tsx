'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-dark-800 rounded-2xl p-8 hover:bg-dark-700 transition-all duration-300 border border-dark-700 hover:border-primary-500/50 group"
    >
      <div className="text-primary-400 mb-6 group-hover:text-primary-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}

