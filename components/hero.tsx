"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, ArrowDown } from "lucide-react"
import StatusWidget from "./status-widget"
import MoguStatus from "./mogu-status"
import SpotifyStatus from "./spotify-status"
import MultilingualGreeting from "./multilingual-greeting"

interface HeroProps {
  onTabChange?: (tabId: string) => void
}

export default function Hero({ onTabChange }: HeroProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0
      const aboutPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = aboutPosition - navbarHeight - 30

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const goToContact = () => {
    if (onTabChange) {
      onTabChange("contact")
    }
    setTimeout(() => {
      const el = document.getElementById("tabs")
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 50)
  }

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center py-10 px-4 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Enhanced floating elements with more sophistication */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-candlelight-amber/40 rounded-full filter blur-3xl candle-flicker animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-soft-lavender/40 rounded-full filter blur-3xl animate-pulse"></div>
        
        {/* Additional floating orbs with better positioning */}
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-sage-green/30 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-candlelight-amber/25 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* More subtle particles for depth */}
        <div className="absolute top-1/6 right-1/6 w-16 h-16 bg-soft-lavender/25 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/6 left-1/6 w-20 h-20 bg-sage-green/15 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Enhanced floating dots with better timing */}
        <div className="absolute top-1/5 left-1/5 w-3 h-3 bg-sage-green/60 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/5 right-1/5 w-3 h-3 bg-candlelight-amber/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/5 left-2/5 w-3 h-3 bg-soft-lavender/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        
        {/* New sophisticated elements */}
        <div className="absolute top-1/8 left-2/3 w-24 h-24 bg-candlelight-amber/10 rounded-full filter blur-lg animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/8 right-2/3 w-28 h-28 bg-sage-green/10 rounded-full filter blur-lg animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-1/2 left-1/8 w-3 h-3 bg-soft-lavender/30 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-3/4 right-1/8 w-2 h-2 bg-candlelight-amber/30 rounded-full animate-ping" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-sage-green/30 rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
        
        {/* Soft gradient overlays for ambient lighting */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-candlelight-amber/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-soft-lavender/5 to-transparent"></div>
              </div>

      {/* Multilingual Greeting */}
      <MultilingualGreeting />

      {/* Status Widgets */}
      <motion.div
        className="mb-8 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <StatusWidget />
          <MoguStatus />
          <SpotifyStatus />
        </div>
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="bg-warm-cream-light/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-sage-green/20 gentle-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:flex items-center p-5 md:p-10 gap-6 md:gap-10">
            <motion.div
              className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 order-2 md:order-1"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-green mb-2" variants={item}>
                Divyanshi Panchal
              </motion.h1>
              
              <motion.p className="text-base md:text-lg text-text-secondary mb-4" variants={item}>
                (she/her)
              </motion.p>

              <motion.h2 className="text-lg md:text-2xl text-text-primary mb-6" variants={item}>
                Junior Software Engineer @ Comini Learning
              </motion.h2>

              <motion.p className="text-base md:text-lg text-text-secondary mb-8 max-w-lg mx-auto md:mx-0" variants={item}>
                Hi! I build things that matter. When I'm not debugging code, I'm doing the wordle and having very important meetings with my cat.
              </motion.p>

              <motion.div className="flex justify-center md:justify-start space-x-6" variants={item}>
                <motion.a
                  href="mailto:divyanshi23.work@gmail.com"
                  className="text-text-secondary hover:text-sage-green transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  title="Email"
                >
                  <Mail size={24} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/divyanshipanchal/"
                  target="_blank"
                  className="text-text-secondary hover:text-sage-green transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  title="LinkedIn"
                  rel="noreferrer"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com/divyanshipanchal23"
                  target="_blank"
                  className="text-text-secondary hover:text-sage-green transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  title="GitHub"
                  rel="noreferrer"
                >
                  <Github size={24} />
                </motion.a>
              </motion.div>

              <motion.div className="mt-8 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start" variants={item}>
                <button
                  className="inline-block bg-sage-green hover:bg-sage-green-light text-warm-cream font-medium py-2.5 px-5 md:py-3 md:px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  onClick={goToContact}
                >
                  Let's Chat
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border-2 border-sage-green text-sage-green hover:bg-sage-green/10 font-medium py-2.5 px-5 md:py-3 md:px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-1/2 flex justify-center order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-green to-soft-lavender rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img
                  src="/me.jpeg"
                  alt="Divyanshi Panchal"
                  className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full border-4 border-sage-green shadow-xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        onClick={scrollToNextSection}
      >
        <ArrowDown className="text-sage-green w-8 h-8" />
      </motion.div>
    </section>
  )
}
