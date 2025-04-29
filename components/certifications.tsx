"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const certifications = [
    {
      name: "Artificial Intelligence Analyst",
      issuer: "IBM",
      date: "July 2024",
      description: "Advanced certification validating skills in machine learning, natural language processing, and AI ethics.",
      link: "/certificates/AI_Analyst_IBM.pdf",
    },
    {
      name: "Cloud Application Developer",
      issuer: "IBM",
      date: "May 2023",
      description: "Comprehensive certification for cloud-native application development using microservices architecture.",
      link: "/certificates/cloud application developer certificate.pdf",
    },
    {
      name: "Analytics Dashboard with Python and Plotly",
      issuer: "Udemy",
      date: "March 2024",
      description: "Mastery in creating interactive analytical dashboards with Python, Plotly, and Dash frameworks.",
      link: "/certificates/Dashboard Udemy Certificate.pdf",
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM",
      date: "March 2024",
      description: "In-depth study of machine learning algorithms, model training, and evaluation techniques with Python.",
      link: "/certificates/ml_ibm_certificate.pdf",
    },
    
    {
      name: "Python Programming: Rice University",
      issuer: "Coursera",
      date: "February 2023",
      description: "Fundamentals of Python programming with applications in mathematical computation and problem-solving.",
      link: "/certificates/Python Rice Certificate Coursera.pdf",
    },
    {
      name: "Introduction to Python",
      issuer: "IBM",
      date: "November 2023",
      description: "Python programming techniques including advanced data structures and optimization.",
      link: "/certificates/python certificate oct2023.pdf",
    },
    {
      name: "C++ Data Structures and Algorithms",
      issuer: "Udemy",
      date: "October 2024",
      description: "Comprehensive DSA training with C++",
      link: "/certificates/UC-99c7daf5-61c1-4c4f-90c7-c66ab31381b3.pdf",
    },
  ]

  return (
    <section id="certifications" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-accent-color mb-2 relative pb-4">
            Certifications
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-color transform -translate-y-1"></span>
          </h2>
          <p className="mt-6 text-text-primary/80 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technical domains, from AI and machine learning to cloud development and data science.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-dark-card rounded-xl p-6 shadow-lg border border-dark-card/80 hover:shadow-accent-color/10 hover:border-accent-color/30 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
            >
              <div className="flex flex-col items-center text-center flex-grow">
                <Award className="text-accent-color w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-accent-color mb-2">{cert.name}</h3>
                <p className="text-text-primary/80 mb-1">Issued by {cert.issuer}</p>
                <p className="text-text-primary/60 text-sm mb-4">{cert.date}</p>
                
                <p className="text-text-primary/70 text-sm mb-6 flex-grow">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-color hover:text-hover-color transition-colors duration-300 mt-auto"
                >
                  View Certificate <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
