'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-16 text-center gradient-text"
        >
          {t.contact.title}
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">{t.contact.infoTitle}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">{t.contact.location}</h3>
                <p className="text-gray-400">{t.contact.locationValue}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">{t.contact.email}</h3>
                <p className="text-gray-400">{t.contact.emailValue}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">{t.contact.phone}</h3>
                <p className="text-gray-400">{t.contact.phoneValue}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">{t.contact.schedule}</h3>
                <p className="text-gray-400">{t.contact.scheduleValue}</p>
                <p className="text-gray-400">{t.contact.hours}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">{t.contact.formTitle}</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">{t.contact.nameLabel}</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm">{t.contact.emailLabel}</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm">{t.contact.messageLabel}</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t.contact.messagePlaceholder}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-dark font-bold rounded-lg hover:animate-glow transition-all"
              >
                {t.contact.submitButton}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
