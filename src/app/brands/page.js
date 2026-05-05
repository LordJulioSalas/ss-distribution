'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import TiltCard from '@/components/TiltCard'
import RevealText from '@/components/RevealText'

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
            <RevealText text={t.brands.title} />
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300"
          >
            {t.brands.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <TiltCard className="w-full rounded-2xl p-6" style={{ maxWidth: '900px', backgroundColor: 'var(--bg-secondary)' }}>
            <img
              src="/Clientes.png"
              alt="Nuestros Clientes"
              className="w-full rounded-xl object-contain"
            />
          </TiltCard>
        </motion.div>
      </div>
    </main>
  )
}
