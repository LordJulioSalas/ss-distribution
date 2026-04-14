'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Brands() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            {t.brands.title}
          </h1>
          <p className="text-xl text-gray-300">{t.brands.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-full rounded-2xl p-6" style={{ maxWidth: '900px', backgroundColor: '#1a1a2e' }}>
            <img
              src="/Clientes.png"
              alt="Nuestros Clientes"
              className="w-full rounded-xl object-contain"
            />
          </div>
        </motion.div>
      </div>
    </main>
  )
}
