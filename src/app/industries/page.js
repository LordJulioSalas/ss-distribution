'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Industries() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="dark-overlay relative rounded-2xl overflow-hidden mb-16 h-64">
          <img src="/images/format_dji0015edit_5cde377a998c1.webp" alt="Industrial operations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: 'rgba(10,10,15,0.65)' }}>
            <h1 className="text-5xl font-bold gradient-text mb-3">{t.home.industriesTitle}</h1>
            <p className="text-gray-300 text-center max-w-xl px-4">{t.home.industriesDesc}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.home.industries.map((ind, i) => (            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="glass-effect p-8 rounded-xl hover:border-primary transition-all">
              <div className="text-5xl mb-4">{ind.icon}</div>
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--primary)' }}>{ind.name}</h2>
              {ind.items && (
                <ul className="space-y-2">
                  {ind.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-primary mt-1">›</span>{item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
        {/* Bottom image */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 rounded-2xl overflow-hidden h-64">
          <img src="/images/barges-harbour-curoil-sole-supplier-fuel-oils-curaçao-bonaire-your-one-stop-location-bunker-fuels-as-43882167.webp" alt="Caribbean operations" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </main>
  )
}
