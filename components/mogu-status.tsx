"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Cat } from "lucide-react"

export default function MoguStatus() {
  const [currentActivity, setCurrentActivity] = useState("")
  const [mounted, setMounted] = useState(false)

  const moguActivities = [
    "walking over my keyboard",
    "sleeping zzz",
    "devouring tuna and chicken treats",
    "making biscuits",
    "airplane mode xD",
    "arguing with me",
    "loafing next to me",
    "demanding treats",
    "being a better debugger than me",
    "questioning my life choices",
    "perfecting the art of looking disappointed",
    "ensuring I take proper breaks",
    "conducting quality assurance on my chair"
  ]

  useEffect(() => {
    setMounted(true)
    
    const getRandomActivity = () => {
      const randomIndex = Math.floor(Math.random() * moguActivities.length)
      return moguActivities[randomIndex]
    }

    setCurrentActivity(getRandomActivity())

    // Update Mogu's activity every 30 seconds
    const interval = setInterval(() => {
      setCurrentActivity(getRandomActivity())
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  const refreshActivity = () => {
    const randomIndex = Math.floor(Math.random() * moguActivities.length)
    setCurrentActivity(moguActivities[randomIndex])
  }

  return (
    <motion.div 
      className="bg-warm-cream-light/80 px-4 py-3 rounded-2xl border border-sage-green/20 gentle-glow max-w-md mx-auto cursor-pointer hover:bg-warm-cream-light transition-colors duration-200"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onClick={refreshActivity}
      title="Click to see what else Mogu is up to"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 8
          }}
        >
          <Cat size={20} className="text-sage-green" />
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-sage-green">Mogu Status:</span>
            <motion.span 
              key={currentActivity}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-text-secondary"
            >
              {currentActivity}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
