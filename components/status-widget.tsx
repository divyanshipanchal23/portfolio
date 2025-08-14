"use client"

import { useState, useEffect } from "react"
import { Clock, Target } from "lucide-react"

export default function StatusWidget() {
  const [currentTime, setCurrentTime] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const updateTime = () => {
      const now = new Date()
      // Convert to Gurgaon time (UTC+5:30)
      const gurgaonTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}))
      const timeString = gurgaonTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-4 text-sm text-text-secondary bg-warm-cream-light px-4 py-2 rounded-full border border-sage-green/20 gentle-glow">
      <div className="flex items-center gap-1">
        <Clock size={14} className="text-sage-green" />
        <span>Gurgaon • {currentTime}</span>
      </div>
      
      <div className="w-1 h-1 bg-sage-green rounded-full"></div>
      
      <div className="flex items-center gap-1">
        <Target size={14} className="text-sage-green" />
        <span>Today's Wordle: 4 tries</span>
      </div>
    </div>
  )
}
