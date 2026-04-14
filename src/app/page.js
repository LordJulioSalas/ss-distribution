'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'

export default function Home() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const partners = t.home.partners
  const services = t.home.services
  const reasons = t.home.reasons
  const industries = t.home.industries
  const regions = t.home.regions

  return (
    <main className="min-h-screen pt-20">

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/Storage-edited-HDR_Snapseed-web-web.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,15,0.85) 0%, rgba(26,26,46,0.80) 100%)' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 z-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex justify-center mb-8">
            <img src={theme === 'light' ? '/ss_distribution_final.svg' : '/ss_distribution.svg'} alt="S&S Distribution" style={{ height: '160px', width: 'auto', maxWidth: '90vw' }} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.home.heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-base md:text-lg text-gray-300 mb-3 max-w-3xl mx-auto">
            {t.home.heroDesc}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="text-sm md:text-base text-gray-400 mb-3 max-w-3xl mx-auto">
            {t.home.heroDesc2}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-sm md:text-base mb-8" style={{ color: 'var(--primary)' }}>
            {t.home.heroRegion}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-4 bg-primary font-bold rounded-lg hover:opacity-90 transition-all" style={{ color: 'var(--bg-primary)' }}>
              {t.home.ourSolutions}
            </Link>
            <Link href="/contact" className="px-8 py-4 glass-effect border-2 border-primary rounded-lg hover:bg-primary/10 transition-all" style={{ color: 'var(--text-primary)' }}>
              {t.home.contactUs}
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div key={i} className="absolute w-2 h-2 bg-primary rounded-full"
              initial={{ x: Math.random() * 1920, y: Math.random() * 1080 }}
              animate={{ y: [null, Math.random() * 1080], opacity: [0, 1, 0] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-4 gradient-text">
            {t.home.partnershipsTitle}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            {t.home.partnershipsDesc}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl hover:border-primary transition-all">
                <div className="h-16 flex items-center justify-center mb-6">
                  {partner.url ? (
                    <a href={partner.url} target="_blank" rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-all">
                      {partner.name}
                      <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-2xl font-bold text-primary">{partner.name}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4">{partner.description}</p>
                <ul className="space-y-2">
                  {partner.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-primary mt-1">›</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-gray-400 mt-10 max-w-2xl mx-auto">
            {t.home.partnershipsFooter}
          </motion.p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4" style={{ background: 'var(--glass-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-4 gradient-text">
            {t.home.whatWeDoTitle}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            {t.home.whatWeDoDesc}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                  className="glass-effect p-6 rounded-xl flex items-start gap-4">
                  <span className="text-3xl">{s.icon}</span>
                  <p style={{ color: 'var(--text-secondary)' }}>{s.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/eisencps.jpg" alt="Industrial operations" className="w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why S&S */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-16 gradient-text">
            {t.home.whyTitle}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="glass-effect p-6 rounded-xl text-center hover:border-primary transition-all">
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="font-bold mb-2 text-primary">{r.title}</h3>
                <p className="text-sm text-gray-400">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4" style={{ background: 'var(--glass-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-4 gradient-text">
            {t.home.industriesTitle}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            {t.home.industriesDesc}
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="glass-effect p-5 rounded-xl hover:border-primary transition-all text-center">
                <div className="text-3xl mb-2">{ind.icon}</div>
                <p className="font-semibold text-sm" style={{ color: 'var(--primary)' }}>{ind.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/industries" className="inline-block px-6 py-3 glass-effect border border-primary rounded-lg hover:bg-primary/10 transition-all text-sm font-semibold" style={{ color: 'var(--primary)' }}>
              View All Industries →
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/Port-picture.jpg" alt="Caribbean port" className="w-full h-80 object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6 gradient-text">{t.home.regionalTitle}</h2>
              <p className="text-gray-400 mb-8">{t.home.regionalDesc}</p>
              <div className="flex flex-wrap gap-4">
                {regions.map((region, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                    className="glass-effect px-8 py-4 rounded-xl border border-primary/30 hover:border-primary transition-all">
                    <p className="text-lg font-bold" style={{ color: 'var(--primary)' }}>{region}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-effect p-12 rounded-2xl border border-primary/30">
            <h2 className="text-4xl font-bold mb-6 gradient-text">{t.home.ctaTitle}</h2>
            <p className="text-gray-400 mb-8">{t.home.ctaDesc}</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-primary font-bold rounded-lg hover:opacity-90 transition-all text-lg" style={{ color: 'var(--bg-primary)' }}>
              {t.home.ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
