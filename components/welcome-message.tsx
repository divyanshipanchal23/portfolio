"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Coffee } from "lucide-react"

export default function WelcomeMessage() {
  const [greeting, setGreeting] = useState("")
  const [icon, setIcon] = useState(<Sun size={20} />)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateGreeting = () => {
      const hour = new Date().getHours()
      let newGreeting = ""
      let newIcon = <Sun size={20} />

      if (hour >= 5 && hour < 12) {
        newGreeting = "Good morning!"
        newIcon = <Sun size={20} />
      } else if (hour >= 12 && hour < 17) {
        newGreeting = "Good afternoon!"
        newIcon = <Sun size={20} />
      } else if (hour >= 17 && hour < 21) {
        newGreeting = "Good evening!"
        newIcon = <Coffee size={20} />
      } else {
        newGreeting = "Good night!(you should be sleeping)"
        newIcon = <Moon size={20} />
      }

      setGreeting(newGreeting)
      setIcon(newIcon)
    }

    updateGreeting()
    const interval = setInterval(updateGreeting, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      className="mb-6 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-center gap-3 bg-warm-cream-light/80 px-6 py-4 rounded-2xl border border-sage-green/20 gentle-glow max-w-md mx-auto">
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1, 1.05, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 10
          }}
          className="text-sage-green"
        >
          {icon}
        </motion.div>
        <span className="text-text-primary font-medium text-lg">
          {greeting}
        </span>
      </div>
    </motion.div>
  )
}
