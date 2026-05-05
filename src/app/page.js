'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import HeroSlideshow from '@/components/HeroSlideshow'
import TiltCard from '@/components/TiltCard'
import MagneticButton from '@/components/MagneticButton'
import RevealText from '@/components/RevealText'
import ImageDistortion from '@/components/ImageDistortion'

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

      {/* ═══ HERO ═══ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="flex justify-center mb-8"
          >
            <img
              src={theme === 'light' ? '/ss_distribution_final.svg' : '/ss_distribution.svg'}
              alt="S&S Distribution"
              style={{ height: '160px', width: 'auto', maxWidth: '90vw', filter: 'drop-shadow(0 0 40px rgba(74,144,184,0.6))' }}
            />
          </motion.div>

          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            <RevealText text={t.home.heroTitle} delay={0.4} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base md:text-lg text-gray-300 mb-3 max-w-3xl mx-auto"
          >
            {t.home.heroDesc}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-sm md:text-base text-gray-400 mb-3 max-w-3xl mx-auto"
          >
            {t.home.heroDesc2}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-sm md:text-base mb-10"
            style={{ color: 'var(--primary)' }}
          >
            {t.home.heroRegion}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <MagneticButton
              href="/products"
              className="px-10 py-4 bg-primary font-bold rounded-lg text-lg"
              style={{ color: '#0a0a0f', display: 'inline-block' }}
            >
              {t.home.ourSolutions}
            </MagneticButton>
            <MagneticButton
              href="/contact"
              className="px-10 py-4 glass-effect border-2 border-primary rounded-lg text-lg"
              style={{ color: '#ffffff', display: 'inline-block' }}
            >
              {t.home.contactUs}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 rounded-full flex items-start justify-center pt-1"
            style={{ borderColor: 'var(--primary)' }}
          >
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ STRATEGIC PARTNERSHIPS ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">{t.home.partnershipsTitle}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.home.partnershipsDesc}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <TiltCard key={i} className="glass-effect p-8 rounded-2xl border border-white/5">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.6 }} viewport={{ once: true }}>
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
              </TiltCard>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-gray-400 mt-12 max-w-2xl mx-auto italic">
            {t.home.partnershipsFooter}
          </motion.p>
        </div>
      </section>

      {/* ═══ WHAT WE DO ═══ */}
      <section className="py-24 px-4" style={{ background: 'var(--glass-bg)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">{t.home.whatWeDoTitle}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.home.whatWeDoDesc}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-xl flex items-start gap-4 hover:border-primary transition-all"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <p style={{ color: 'var(--text-secondary)' }}>{s.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <ImageDistortion src="/images/eisencps.jpg" alt="Industrial operations" className="h-80 shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WHY S&S - full bleed image bg ═══ */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/bullenbaai.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,15,0.85)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl font-bold text-center mb-16 gradient-text">
            {t.home.whyTitle}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <TiltCard key={i} className="glass-effect p-8 rounded-2xl text-center">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}>
                  <div className="text-5xl mb-4">{r.icon}</div>
                  <h3 className="font-bold mb-2 text-primary text-lg">{r.title}</h3>
                  <p className="text-sm text-gray-400">{r.desc}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="py-24 px-4" style={{ background: 'var(--glass-bg)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 gradient-text">{t.home.industriesTitle}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.home.industriesDesc}</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {industries.map((ind, i) => (
              <TiltCard key={i} className="glass-effect p-5 rounded-xl text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                  <div className="text-4xl mb-3">{ind.icon}</div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--primary)' }}>{ind.name}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
          <div className="text-center">
            <MagneticButton
              href="/industries"
              className="inline-block px-8 py-3 glass-effect border border-primary rounded-lg text-sm font-semibold"
              style={{ color: 'var(--primary)', display: 'inline-block' }}
            >
              View All Industries →
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ═══ REGIONAL PRESENCE ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <ImageDistortion src="/images/Port-picture.jpg" alt="Caribbean port" className="h-96 shadow-2xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <h2 className="text-5xl font-bold mb-6 gradient-text">{t.home.regionalTitle}</h2>
              <p className="text-gray-400 mb-10 text-lg">{t.home.regionalDesc}</p>
              <div className="flex flex-wrap gap-4">
                {regions.map((region, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15, type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect px-10 py-5 rounded-2xl border border-primary/30 hover:border-primary transition-all cursor-default"
                  >
                    <p className="text-xl font-bold" style={{ color: 'var(--primary)' }}>{region}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/oil-tankers-PDVSA.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,15,0.82)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
            className="glass-effect p-14 rounded-3xl border border-primary/30"
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text">{t.home.ctaTitle}</h2>
            <p className="text-gray-400 mb-10 text-lg">{t.home.ctaDesc}</p>
            <MagneticButton
              href="/contact"
              className="inline-block px-12 py-5 bg-primary font-bold rounded-xl text-xl"
              style={{ color: '#0a0a0f', display: 'inline-block' }}
            >
              {t.home.ctaButton}
            </MagneticButton>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
