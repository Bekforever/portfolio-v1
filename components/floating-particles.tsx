"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 80) // Increased particle count

      const isDarkMode = theme === "dark"

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1.5, // Slightly larger particles
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: isDarkMode
            ? `hsla(217, 91%, 60%, ${Math.random() * 0.4 + 0.2})` // Brighter blue in dark mode
            : `hsla(221, 83%, 53%, ${Math.random() * 0.3 + 0.15})`, // Visible blue in light mode
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDarkMode = theme === "dark"

      particles.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles
        connectParticles(particle, i, isDarkMode)

        // Interact with mouse
        const dx = mousePosition.current.x - particle.x
        const dy = mousePosition.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (120 - distance) / 120

          particle.speedX += forceDirectionX * force * 0.03
          particle.speedY += forceDirectionY * force * 0.03
        }

        // Add some randomness
        if (Math.random() < 0.01) {
          particle.speedX += (Math.random() - 0.5) * 0.1
          particle.speedY += (Math.random() - 0.5) * 0.1
        }

        // Limit speed
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
        if (speed > 1) {
          particle.speedX = (particle.speedX / speed) * 1
          particle.speedY = (particle.speedY / speed) * 1
        }
      })

      animationFrameId.current = requestAnimationFrame(drawParticles)
    }

    const connectParticles = (particle: Particle, index: number, isDarkMode: boolean) => {
      for (let j = index + 1; j < particles.current.length; j++) {
        const otherParticle = particles.current[j]
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Increased connection distance and line visibility
        if (distance < 150) {
          ctx.beginPath()
          // More visible lines
          const opacity = isDarkMode
            ? (1 - distance / 150) * 0.5 // More visible in dark mode
            : (1 - distance / 150) * 0.3 // Visible but not too strong in light mode

          ctx.strokeStyle = isDarkMode
            ? `rgba(147, 197, 253, ${opacity})` // Light blue in dark mode
            : `rgba(59, 130, 246, ${opacity})` // Blue in light mode

          ctx.lineWidth = 0.8 // Slightly thicker lines
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    resizeCanvas()
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [theme]) // Added theme dependency to update when theme changes

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

