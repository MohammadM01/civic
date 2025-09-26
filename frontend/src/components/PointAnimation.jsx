"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PointAnimationSystem() {
  const [animations, setAnimations] = useState([])

  const addPointAnimation = (points, reason, element) => {
    const rect = element?.getBoundingClientRect() || { left: window.innerWidth / 2, top: window.innerHeight / 2 }

    const newAnimation = {
      id: Math.random().toString(36).substr(2, 9),
      points,
      reason,
      x: rect.left,
      y: rect.top,
    }

    setAnimations((prev) => [...prev, newAnimation])

    // Remove animation after 3 seconds
    setTimeout(() => {
      setAnimations((prev) => prev.filter((anim) => anim.id !== newAnimation.id))
    }, 3000)
  }

  // Expose function globally for easy access
  useEffect(() => {
    window.showPointAnimation = addPointAnimation
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {animations.map((animation) => (
          <motion.div
            key={animation.id}
            initial={{
              x: animation.x,
              y: animation.y,
              opacity: 1,
              scale: 0.5,
            }}
            animate={{
              x: animation.x,
              y: animation.y - 100,
              opacity: 0,
              scale: 1.2,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute"
          >
            <div className="bg-accent text-accent-foreground px-3 py-2 rounded-full shadow-lg border-2 border-accent/20">
              <div className="text-lg font-bold">+{animation.points}</div>
              <div className="text-xs">{animation.reason}</div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
