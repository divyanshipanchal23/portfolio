"use client"

import { motion, AnimatePresence } from "framer-motion"
import About from "./about"
import Skills from "./skills"
import Experience from "./experience"
import Projects from "./projects"
import Certifications from "./certifications"
import Contact from "./contact"

interface TabContentProps {
  activeTab: string
}

export default function TabContent({ activeTab }: TabContentProps) {
  const tabContent = {
    about: <About />,
    tech: (
      <div className="space-y-12">
        <Skills />
        <Projects />
      </div>
    ),
    experience: <Experience />,
    certs: <Certifications />,
    contact: <Contact />,
  }

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[400px]"
        >
          {tabContent[activeTab as keyof typeof tabContent]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
