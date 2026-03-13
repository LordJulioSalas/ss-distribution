'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Industries() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-16 text-center gradient-text"
        >
          {t.industries.title}
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.industries.list.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 rounded-xl hover:border-primary transition-all cursor-pointer"
            >
              <div className="text-6xl mb-4">{industry.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{industry.title}</h2>
              <p className="text-gray-400">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
