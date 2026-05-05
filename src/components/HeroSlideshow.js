'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/images/Storage-edited-HDR_Snapseed-web-web.jpg',
  '/images/Port-picture.jpg',
  '/images/bullenbaai.jpg',
  '/images/oil-tankers-PDVSA.jpg',
  '/images/Aqualectra_raffinaderij_DUSHI.jpg',
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Ken Burns zoom effect */}
          <motion.img
            src={images[current]}
            alt=""
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 6, ease: 'linear' }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,15,0.88) 0%, rgba(26,26,46,0.82) 100%)' }} />
      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              backgroundColor: i === current ? 'var(--primary)' : 'rgba(255,255,255,0.4)'
            }}
          />
        ))}
      </div>
    </div>
  )
}
