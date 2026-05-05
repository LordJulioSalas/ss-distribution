'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxImage({ src, alt, height = 'h-80', speed = 0.3, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-2xl ${height} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.3 }}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
