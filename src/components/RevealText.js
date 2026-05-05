'use client'
import { motion } from 'framer-motion'

export default function RevealText({ text, className = '', delay = 0 }) {
  const words = text.split(' ')

  return (
    <span className={`inline-flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.05,
              ease: [0.33, 1, 0.68, 1]
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
