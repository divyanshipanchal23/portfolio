"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Layers, Database, PenToolIcon as Tool } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skillCategories = [
    {
      title: "Languages I Love",
      icon: <Code className="w-8 h-8 text-sage-green" />,
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "C++",
        "C",
        "R",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-8 h-8 text-sage-green" />,
      skills: [
        "React.js",
        "Node.js",
        "TensorFlow",
        "Django",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Tool className="w-8 h-8 text-sage-green" />,
      skills: [
        "Plotly",
        "Matplotlib",
        "Dash",
        "IBM Cloud",
      ],
    },
    {
      title: "Data Storage",
      icon: <Database className="w-8 h-8 text-sage-green" />,
      skills: [
        "MongoDB",
        "MySQL",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div ref={ref} className="py-8">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-sage-green mb-2 relative pb-4">
            The Tech Stuff
            <span className="absolute bottom-0 left-0 w-full h-1 bg-sage-green transform -translate-y-1"></span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Languages, frameworks, and tools I know how to use.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={item}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-warm-cream-light/80 rounded-xl p-6 shadow-lg border border-sage-green/20 hover:shadow-sage-green/20 hover:border-sage-green/40 transition-all duration-300 transform hover:-translate-y-2 gentle-glow"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-sage-green/10 rounded-full">{category.icon}</div>
                <h3 className="text-xl font-semibold text-sage-green mb-6">{category.title}</h3>
                <div className="space-y-3 w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill} className="text-center">
                      <span className="inline-block px-3 py-2 bg-sage-green/5 text-text-primary rounded-lg border border-sage-green/10 hover:bg-sage-green/10 transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
