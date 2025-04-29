"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, ArrowDown } from "lucide-react"

export default function Hero() {
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-color/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-color/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="bg-dark-card/40 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-dark-card/80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:flex items-center p-6 md:p-10 gap-10">
            <motion.div
              className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 order-2 md:order-1"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-color mb-4" variants={item}>
                Divyanshi Panchal
              </motion.h1>

              <motion.h2 className="text-xl md:text-2xl text-text-primary/90 mb-6" variants={item}>
                Computer Science Student | AI and Data Science Enthusiast
              </motion.h2>

              <motion.div className="flex justify-center md:justify-start space-x-6" variants={item}>
                <motion.a
                  href="mailto:divyanshi23.work@gmail.com"
                  className="text-text-primary hover:text-accent-color transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  title="Email"
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a
                  href="tel:+917303557381"
                  className="text-text-primary hover:text-accent-color transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  title="Phone"
                >
                  <Phone size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/divyanshipanchal/"
                  target="_blank"
                  className="text-text-primary hover:text-accent-color transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  title="LinkedIn"
                  rel="noreferrer"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com/divyanshipanchal23"
                  target="_blank"
                  className="text-text-primary hover:text-accent-color transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  title="GitHub"
                  rel="noreferrer"
                >
                  <Github size={24} />
                </motion.a>
              </motion.div>

              <motion.div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start" variants={item}>
                <a
                  href="#contact"
                  className="inline-block bg-accent-color hover:bg-hover-color text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  onClick={(e) => {
                    e.preventDefault()
                    const contactSection = document.querySelector("#contact")
                    if (contactSection) {
                      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0
                      const contactPosition = contactSection.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = contactPosition - navbarHeight - 30

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border-2 border-accent-color text-accent-color hover:bg-accent-color/10 font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
                <div className="absolute inset-0 bg-gradient-to-br from-accent-color to-secondary-color rounded-full blur-xl opacity-20 animate-pulse"></div>
                <img
                  src="/me.jpeg"
                  alt="Divyanshi Panchal"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-accent-color shadow-xl relative z-10"
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
        <ArrowDown className="text-accent-color w-8 h-8" />
      </motion.div>
    </section>
  )
}
