"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Code, Briefcase, FolderOpen, Award, MessageCircle } from "lucide-react"

interface TabNavigationProps {
  onTabChange: (tab: string) => void
  activeTab: string
}

export default function TabNavigation({ onTabChange, activeTab }: TabNavigationProps) {
  const tabs = [
    { id: "about", label: "Who I Am", icon: User },
    { id: "tech", label: "Tech Stuff", icon: Code },
    { id: "experience", label: "My Journey", icon: Briefcase },
    { id: "certs", label: "Achievements", icon: Award },
    { id: "contact", label: "Get in Touch", icon: MessageCircle },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex flex-wrap justify-center gap-2 p-2 bg-warm-cream-light/50 rounded-2xl border border-sage-green/20">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative rounded-xl font-medium transition-all duration-200
                flex items-center gap-2 justify-center
                px-3 py-2 text-xs min-w-[100px]
                sm:px-4 sm:py-3 sm:text-sm sm:min-w-[120px]
                ${isActive 
                  ? 'text-warm-cream bg-sage-green shadow-lg' 
                  : 'text-text-secondary hover:text-sage-green hover:bg-sage-green/10'
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
              
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-sage-green rounded-xl"
                  layoutId="activeTab"
                  initial={false}
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
