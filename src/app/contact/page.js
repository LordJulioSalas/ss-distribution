'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { t } = useLanguage()
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }
  
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
                <a
                  href={`https://wa.me/59995283385?text=${encodeURIComponent('Hello! I would like more information about S&S Distribution products.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg text-white font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
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
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">{t.contact.nameLabel}</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm">{t.contact.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm">{t.contact.messageLabel}</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t.contact.messagePlaceholder}
                ></textarea>
              </div>

              {status === 'success' && (
                <p className="text-green-400 text-sm">{t.contact.successMessage}</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">{t.contact.errorMessage}</p>
              )}
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-primary text-dark font-bold rounded-lg hover:opacity-90 transition-all disabled:opacity-60"
              >
                {status === 'sending' ? t.contact.sending : t.contact.submitButton}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
