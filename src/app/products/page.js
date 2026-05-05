'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import TiltCard from '@/components/TiltCard'
import RevealText from '@/components/RevealText'
import ImageDistortion from '@/components/ImageDistortion'

export default function Products() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-16 text-center gradient-text"
        >
          <RevealText text={t.products.title} />
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Banner image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <ImageDistortion src="/images/Curacao_Koraal_Finished-6-1352x760.jpg" alt="Industrial solutions" className="h-56 mb-4" />
          </motion.div>
          {t.products.categories.map((product, index) => (
            <TiltCard key={index} className="glass-effect p-8 rounded-xl hover:border-primary transition-all">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-3 text-primary">{product.title}</h2>
                <p className="text-gray-300 mb-6">{product.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Applications */}
                {product.applications && (
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {t.products.applicationsLabel}
                    </p>
                    <ul className="space-y-1">
                      {product.applications.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">›</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Benefits */}
                {product.benefits && (
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {t.products.benefitsLabel}
                    </p>
                    <ul className="space-y-1">
                      {product.benefits.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">›</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Solutions */}
                {product.solutions && (
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {t.products.solutionsLabel}
                    </p>
                    <ul className="space-y-1">
                      {product.solutions.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">›</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Items / Categories */}
                {product.items && (
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {t.products.categoriesLabel}
                    </p>
                    <ul className="space-y-1">
                      {product.items.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">›</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </main>
  )
}
