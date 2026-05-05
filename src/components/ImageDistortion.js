'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function ImageDistortion({ src, alt, className = '' }) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  const moveX = (mousePos.x - 0.5) * 20
  const moveY = (mousePos.y - 0.5) * 20

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0.5, y: 0.5 }) }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? (mousePos.x - 0.5) * 15 : 0,
          rotateX: isHovered ? -(mousePos.y - 0.5) * 15 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          animate={{
            x: isHovered ? moveX * 0.5 : 0,
            y: isHovered ? moveY * 0.5 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="w-full h-full object-cover"
        />
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: isHovered
              ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(74,144,184,0.3) 0%, transparent 60%)`
              : 'transparent',
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>
    </div>
  )
}
