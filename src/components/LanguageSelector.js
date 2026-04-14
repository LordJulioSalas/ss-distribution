'use client'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function LanguageSelector({ mobile = false }) {
  const { language, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'pap', name: 'Papiamentu', flag: '🇨🇼' }
  ]

  const currentLang = languages.find(lang => lang.code === language)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isOpen])

  if (mobile) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl transition-all ${
                language === lang.code
                  ? 'bg-primary/20 border border-primary'
                  : 'glass-effect'
              }`}
              style={{ color: language === lang.code ? 'var(--primary)' : 'var(--text-secondary)' }}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg glass-effect hover:border-primary transition-all"
        style={{ color: 'var(--text-primary)' }}
      >
        <span className="text-xl">{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile: dropdown down, aligned right */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute right-0 top-full mt-2 w-48 rounded-lg overflow-hidden z-50 shadow-xl"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)'
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-all ${
                    language === lang.code ? 'bg-primary/20 text-primary' : ''
                  }`}
                  style={language !== lang.code ? { color: 'var(--text-secondary)' } : {}}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </motion.div>

            {/* Desktop: dropdown down */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden md:block absolute right-0 top-full mt-2 w-48 rounded-lg overflow-hidden z-50 shadow-xl"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)'
              }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-all ${
                    language === lang.code ? 'bg-primary/20 text-primary' : ''
                  }`}
                  style={language !== lang.code ? { color: 'var(--text-secondary)' } : {}}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
