'use client'
import { useEffect, useRef } from 'react'

export default function HeroParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    // Particles
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '74,144,184' : '45,106,159',
    }))

    // Rings
    let angle = 0

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Draw rotating rings
      angle += 0.003
      const cx = w / 2, cy = h / 2

      for (let ring = 0; ring < 3; ring++) {
        const rx = cx + Math.cos(angle * (ring + 1) * 0.3) * 20
        const ry = cy + Math.sin(angle * (ring + 1) * 0.2) * 10
        const radius = [w * 0.25, w * 0.35, w * 0.45][ring]
        const opacity = [0.12, 0.08, 0.05][ring]

        ctx.beginPath()
        ctx.ellipse(rx, ry, radius, radius * 0.35, angle * 0.1 * (ring + 1), 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(74,144,184,${opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw particles + connections
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x
          const dy = particles[j].y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(74,144,184,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}
