'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

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
          {t.products.title}
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.products.categories.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-xl hover:border-primary transition-all"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">{product.title}</h2>
              <p className="text-gray-300 mb-6">{product.description}</p>
              
              <ul className="space-y-2 mb-4">
                {product.items.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              {product.featured && (
                <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary">
                  <p className="text-sm font-semibold text-primary">{t.products.featuredLabel}</p>
                  <p className="text-gray-300">{product.featured}</p>
                </div>
              )}
              
              {product.brand && (
                <p className="mt-4 text-sm text-gray-400 italic">{product.brand}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
