"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Comini Learning",
      location: "Remote",
      period: "2025 - Present",
      responsibilities: [
        "Develop and maintain backend systems for FastGraphs, a financial analytics platform used by investors",
        "Implement REST APIs, database optimisations, and secure authentication mechanisms to support scalable and high-performance data delivery",
        "Collaborate with frontend developers to ensure seamless integration between backend services and UI",
      ],
    },
    {
      title: "Data Engineering Intern",
      company: "Stork Rubber Pvt Ltd",
      location: "Gurgaon, India",
      period: "May 2023 - August 2023",
      responsibilities: [
        "Created dashboards with Python, improving report generation by 25%",
        "Managed large datasets and optimized queries for faster insights",
        "Collaborated with cross-functional teams to implement data-driven solutions",
      ],
    },
    {
      title: "Data Science Trainee",
      company: "Decrypton Pvt Ltd",
      location: "Remote",
      period: "January 2022 - April 2022",
      responsibilities: [
        "Developed an AI-driven web analytics dashboard with real-time insights",
        "Implemented machine learning models to predict user behavior",
        "Created data visualization tools for business intelligence",
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-sage-green mb-2 relative pb-4">
            My Journey So Far
            <span className="absolute bottom-0 left-0 w-full h-1 bg-sage-green transform -translate-y-1"></span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            The places I've worked, the things I've learned, and the impact I've made
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sage-green via-soft-lavender to-sage-green transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-sage-green transform -translate-x-1/2 z-10 shadow-lg shadow-sage-green/30"></div>

              <div className={`md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                <div className="bg-warm-cream-light/80 rounded-xl p-6 shadow-lg border border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 transform hover:-translate-y-2 gentle-glow">
                  <div className="flex items-center mb-3">
                    <Briefcase className="w-5 h-5 text-sage-green mr-2" />
                    <h3 className="text-xl font-semibold text-sage-green">{exp.title}</h3>
                  </div>

                  <h4 className="text-lg mb-2 text-text-primary">{exp.company}</h4>

                  <div className="flex items-center text-sm text-text-secondary mb-2">
                    <MapPin className="w-4 h-4 mr-1 text-sage-green" />
                    <span>{exp.location}</span>
                  </div>

                  <div className="flex items-center text-sm text-text-secondary mb-4">
                    <Calendar className="w-4 h-4 mr-1 text-sage-green" />
                    <span>{exp.period}</span>
                  </div>

                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-sage-green mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-text-secondary leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
