"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Clock, MapPin, Mail } from "lucide-react"

export default function Availability() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-accent-color mb-2 relative pb-4">
            Availability
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-color transform -translate-y-1"></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-dark-card rounded-xl p-8 shadow-lg border border-dark-card/80"
        >
          <div className="text-center mb-6">
            <div className="inline-block bg-accent-color/20 text-accent-color px-4 py-2 rounded-full font-medium mb-4">
              Available for Job Opportunities
            </div>
            <h3 className="text-2xl font-semibold mb-2">Looking for Full-time Positions</h3>
            <p className="text-text-primary/80">
              I'm currently seeking opportunities in AI, Data Science, and Full Stack Development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-accent-color mr-3 mt-1" />
              <div>
                <h4 className="font-medium mb-1">Start Date</h4>
                <p className="text-text-primary/80">Available Immediately</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 text-accent-color mr-3 mt-1" />
              <div>
                <h4 className="font-medium mb-1">Work Preference</h4>
                <p className="text-text-primary/80">Full-time / Remote or Hybrid</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-accent-color mr-3 mt-1" />
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-text-primary/80">Gurgaon, India (Open to Relocation)</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-5 h-5 text-accent-color mr-3 mt-1" />
              <div>
                <h4 className="font-medium mb-1">Contact</h4>
                <p className="text-text-primary/80">divyanshi23.work@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-block bg-accent-color hover:bg-hover-color text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
