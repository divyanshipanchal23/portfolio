"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import Hero from "@/components/hero"
import TabNavigation from "@/components/tab-navigation"
import TabContent from "@/components/tab-content"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-provider"
import MouseTracker from "@/components/mouse-tracker"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeTab, setActiveTab] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <main className="bg-dark-bg text-text-primary min-h-screen">
      <MouseTracker />
      <ThemeToggle />
      <Hero onTabChange={setActiveTab} />
      
      {/* Tab Navigation */}
      <div id="tabs" className="py-12 px-4">
        <div className="container mx-auto">
          <TabNavigation 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          <TabContent activeTab={activeTab} />
        </div>
      </div>
      
      <Footer />

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 bg-accent-color hover:bg-hover-color text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </main>
  )
}
