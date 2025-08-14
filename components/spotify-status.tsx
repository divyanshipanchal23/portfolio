"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Music } from "lucide-react"

export default function SpotifyStatus() {
  const [currentTrack, setCurrentTrack] = useState("Some - Steve Lacy")
  const indexRef = useRef(0)

  const tracks: string[] = [
    "Some - Steve Lacy",
    "Here Comes The Sun - The Beatles",
    "Dancing Queen - ABBA",
    "Delilah (Pull Me Out Of This) - Fred Again",
    "Lights Out - Fred Again",
    "Gehra - Darzi",
    "Heeriye - Karun",
    "Video Games - Seedhe Maut",
    "Kohra - Seedhe Maut",
    "Tu Hi Hai - Amit Trivedi",
    "Mehram - Arijit Singh",
  ]

  useEffect(() => {
    // Immediately set the first track
    setCurrentTrack(tracks[indexRef.current % tracks.length])

    // Advance sequentially every 20s
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % tracks.length
      setCurrentTrack(tracks[indexRef.current])
    }, 20000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      className="bg-warm-cream-light/80 px-4 py-3 rounded-2xl border border-sage-green/20 gentle-glow max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      title="Rotates between your favorite songs every 20s"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1, 1.05, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 6
          }}
        >
          <Music size={20} className="text-sage-green" />
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-sage-green">Currently listening:</span>
            <motion.span 
              key={currentTrack}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-text-secondary"
            >
              {currentTrack}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
