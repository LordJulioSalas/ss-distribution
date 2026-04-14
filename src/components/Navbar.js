'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import LanguageSelector from './LanguageSelector'
import ThemeToggle from './ThemeToggle'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()
  const { theme } = useTheme()

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/products', label: t.nav.products },
    { href: '/industries', label: t.nav.industries },
    // { href: '/brands', label: t.nav.brands }, // temporarily hidden
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <img
              src={theme === 'light' ? '/ss_distribution_final.svg' : '/ss_distribution.svg'}
              alt="S&S Distribution"
              style={{ height: '75px', width: 'auto' }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-effect"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-300 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2 border-t border-gray-700 mt-1"></div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
