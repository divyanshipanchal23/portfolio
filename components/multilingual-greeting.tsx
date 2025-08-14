"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function MultilingualGreeting() {
  const [currentGreeting, setCurrentGreeting] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateGreeting = () => {
      const hour = new Date().getHours()
      const greetings = [
        "Namaste",
        "Hello!",
        hour >= 5 && hour < 12 ? "Guten Morgen" : hour >= 12 && hour < 17 ? "Guten Tag" : "Guten Abend",
        "Bonjour",
        "Hola",
        "Ciao",
        "こんにちは",
        "안녕하세요"
      ].filter(Boolean)

      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
      setCurrentGreeting(randomGreeting)
    }

    updateGreeting()
    const interval = setInterval(updateGreeting, 4000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      className="mb-4 z-10 px-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          key={currentGreeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cursive text-sage-green/60 font-light tracking-wide"
          style={{
            fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
            textShadow: "2px 2px 4px rgba(156, 175, 136, 0.1)"
          }}
        >
          {currentGreeting}
        </motion.h1>
      </motion.div>
    </motion.div>
  )
}
