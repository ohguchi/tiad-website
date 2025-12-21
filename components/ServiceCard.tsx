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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -20, scale: 1.02 }}
      className="relative bg-dark-800/90 backdrop-blur-sm rounded-3xl p-10 hover:bg-dark-700/90 transition-all duration-500 border border-dark-700 hover:border-primary-500/50 group overflow-hidden"
    >
      {/* ホバー時の光るエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-primary-500/5 group-hover:to-primary-500/10 transition-all duration-500 rounded-3xl" />
      
      <div className="relative z-10">
        <motion.div
          className="text-primary-400 mb-8 group-hover:text-primary-300 transition-colors duration-300"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
      </div>

      {/* 装飾的なグラデーション */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}


