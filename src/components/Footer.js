'use client'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'

export default function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  
  return (
    <footer className="glass-effect mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src={theme === 'light' ? '/ss_distribution_final.svg' : '/ss_distribution.svg'}
              alt="S&S Distribution"
              style={{ height: '80px', width: 'auto' }}
              className="mb-4"
            />
            <p className="text-gray-400">{t.footer.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactTitle}</h4>
            <p className="text-gray-400">{t.footer.location}</p>
            <p className="text-gray-400">{t.footer.email}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.scheduleTitle}</h4>
            <p className="text-gray-400">{t.footer.schedule}</p>
            <p className="text-gray-400">{t.footer.hours}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} S&S Distribution. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
