"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Layers, Database, PenToolIcon as Tool } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8 text-accent-color" />,
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "C", proficiency: 75 },
        { name: "C++", proficiency: 80 },
        { name: "JavaScript", proficiency: 85 },
        { name: "TypeScript", proficiency: 80 },
        { name: "R", proficiency: 70 },
      ],
    },
    {
      title: "Frameworks",
      icon: <Layers className="w-8 h-8 text-accent-color" />,
      skills: [
        { name: "TensorFlow", proficiency: 85 },
        { name: "React.js", proficiency: 80 },
        { name: "Node.js", proficiency: 75 },
        { name: "Django", proficiency: 70 },
      ],
    },
    {
      title: "Tools",
      icon: <Tool className="w-8 h-8 text-accent-color" />,
      skills: [
        { name: "Plotly", proficiency: 90 },
        { name: "Matplotlib", proficiency: 85 },
        { name: "Dash", proficiency: 80 },
        { name: "IBM Cloud", proficiency: 75 },
        { name: "TensorFlow", proficiency: 85 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8 text-accent-color" />,
      skills: [
        { name: "MongoDB", proficiency: 80 },
        { name: "MySQL", proficiency: 85 },
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
    <section id="skills" ref={ref} className="py-20 px-4 bg-dark-bg/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-accent-color mb-2 relative pb-4">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-color transform -translate-y-1"></span>
          </h2>
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
              className="bg-dark-card rounded-xl p-6 shadow-lg border border-dark-card/80 hover:shadow-accent-color/10 hover:border-accent-color/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-dark-bg rounded-full">{category.icon}</div>
                <h3 className="text-xl font-semibold text-accent-color mb-6">{category.title}</h3>
                <div className="space-y-4 w-full">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="w-full">
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-accent-color">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-dark-bg rounded-full h-2.5">
                        <motion.div
                          className="bg-gradient-to-r from-accent-color to-secondary-color h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
