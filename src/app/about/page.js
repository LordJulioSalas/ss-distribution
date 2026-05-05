'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import TiltCard from '@/components/TiltCard'
import ImageDistortion from '@/components/ImageDistortion'
import RevealText from '@/components/RevealText'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <main className="min-h-screen pt-32 px-4 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Title + Intro */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold mb-8 gradient-text">
            <RevealText text={a.title} />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-0">
            <TiltCard className="glass-effect p-8 rounded-xl space-y-4 text-gray-300">
              <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{a.intro}</p>
              <p className="text-base">{a.introDesc}</p>
            </TiltCard>
            <ImageDistortion src="/images/Aqualectra_raffinaderij_DUSHI.jpg" alt="Industrial facility" className="h-72 shadow-2xl" />
          </div>
        </motion.div>

        {/* Operational Focus */}
        <TiltCard className="glass-effect p-8 rounded-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-primary">{a.operationalTitle}</h2>
            <p className="text-gray-300 mb-4">{a.operationalDesc}</p>
            <ul className="space-y-2 mb-4">
              {a.operationalItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400">
                  <span className="text-primary mt-1">›</span>{item}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 italic">{a.operationalFooter}</p>
          </motion.div>
        </TiltCard>

        {/* Core Capabilities */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 gradient-text">{a.capabilitiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {a.capabilities.map((cap, i) => (
              <TiltCard key={i} className="glass-effect p-6 rounded-xl hover:border-primary transition-all">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                  <h3 className="text-lg font-bold mb-2 text-primary">{cap.title}</h3>
                  <p className="text-xs text-gray-400 mb-3 italic">{cap.partner}</p>
                  <ul className="space-y-1 mb-4">
                    {cap.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-primary mt-1">›</span>{item}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-700 pt-3">
                    <span className="text-xs font-semibold text-primary">{a.impactLabel} </span>
                    <span className="text-xs text-gray-400">{cap.impact}</span>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        {/* Regional Distribution */}
        <TiltCard className="glass-effect p-8 rounded-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-primary">{a.regionalTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <p className="text-gray-300">{a.regionalDesc}</p>
              <ImageDistortion src="/images/export-incentives-cinex-image.jpg" alt="Regional distribution" className="h-48" />
            </div>
          </motion.div>
        </TiltCard>

        {/* Strategic Advantage */}
        <TiltCard className="glass-effect p-8 rounded-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-primary">{a.advantageTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-gray-300 mb-4">{a.advantageDesc}</p>
                <ul className="space-y-2">
                  {a.advantageItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <span className="text-primary mt-1">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <ImageDistortion src="/images/new-direction-for-damen-shiprepair-curacao-top.avif" alt="Strategic advantage" className="h-52" />
            </div>
          </motion.div>
        </TiltCard>

        {/* Our Approach */}
        <TiltCard className="glass-effect p-8 rounded-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4 text-primary">{a.approachTitle}</h2>
            <p className="text-gray-300 mb-4">{a.approachDesc}</p>
            <ul className="space-y-2">
              {a.approachItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400">
                  <span className="text-primary mt-1">›</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
        </TiltCard>

        {/* Closing */}
        <TiltCard className="glass-effect p-8 rounded-xl text-center border border-primary/30">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{a.closing}</p>
          </motion.div>
        </TiltCard>

      </div>
    </main>
  )
}
