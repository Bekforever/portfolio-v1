"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BackgroundGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })

      setIsMoving(true)

      // Reset the moving state after a short delay
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setIsMoving(false)
      }, 300)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[80px]"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
          scale: isMoving ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 0.5,
        }}
      />

      {/* Secondary smaller glow */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full bg-primary/10 dark:bg-primary/15 blur-[50px]"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
          scale: isMoving ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.3,
        }}
      />
    </div>
  )
}

