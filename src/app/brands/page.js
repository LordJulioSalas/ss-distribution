'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Brands() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
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
          className="glass-effect p-8 rounded-xl mb-12"
        >
          <p className="text-lg text-gray-300 text-center">
            {t.brands.description}
          </p>
        </motion.div>

        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          {t.brands.clientsTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.brands.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl hover:border-primary transition-all"
            >
              {/* Logo placeholder - add logos to public/clients/ folder */}
              <div className="flex justify-center mb-4 h-20 items-center">
                {/* Uncomment when you add the logo files:
                <img 
                  src={`/clients/${client.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                  alt={`${client.name} logo`}
                  className="max-h-16 object-contain"
                />
                */}
                <div className="text-3xl font-bold text-primary">{client.name}</div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-center">{client.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{client.description}</p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-xs text-gray-400 font-semibold mb-1">Products Supplied:</p>
                <p className="text-sm text-gray-300">{client.products}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-effect p-8 rounded-xl text-center"
        >
          <p className="text-gray-400 italic">
            {t.brands.note}
          </p>
        </motion.div>
      </div>
    </main>
  )
}
