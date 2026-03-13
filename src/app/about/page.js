'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 gradient-text"
        >
          {t.about.title}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect p-8 rounded-xl space-y-6 text-gray-300"
        >
          <p className="text-lg">
            {t.about.paragraph1}
          </p>
          
          <p className="text-lg">
            {t.about.paragraph2}
          </p>
          
          <p className="text-lg">
            {t.about.paragraph3}
          </p>
          
          <p className="text-lg font-semibold text-primary">
            {t.about.paragraph4}
          </p>
        </motion.div>
      </div>
    </main>
  )
}
