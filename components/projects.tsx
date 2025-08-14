"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Maximize2, X, Github } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "DragCraft - Website Builder",
      description:
        "A modern website builder with intuitive drag-and-drop interface and form-based customization. Built with React, TypeScript, TailwindCSS, and React DnD for a seamless website creation experience.",
      image: "/dragcraft.png",
      link: null,
      github: "https://github.com/divyanshipanchal23/dragcraft",
      category: "web",
      technologies: ["React", "TypeScript", "TailwindCSS", "React DnD"],
    },
    {
      title: "The Sum Side Up - Educational Game",
      description:
        "An interactive educational game that teaches addition through visual intuition using a balance scale. Built with Vue.js, Firebase, and features adaptive difficulty levels for personalized learning.",
      image: "/ssu.png",
      link: "https://the-sum-side-up.vercel.app/",
      github: "https://github.com/divyanshipanchal23/the-sum-side-up",
      category: "web",
      technologies: ["Vue.js", "Firebase", "JavaScript"],
    },
    {
      title: "AI-Driven Legal Document Reviewer",
      description:
        "An AI-powered legal tech tool with 95% accuracy in risk flagging and compliance checks. Built with SpaCy, Legal-BERT, React.js, and Node.js.",
      image: "/legal.jpeg",
      link: null,
      github: "https://github.com/divyanshipanchal23/scamurAI",
      category: "ai",
      technologies: ["SpaCy", "BERT", "React", "Node.js"],
    },
    {
      title: "AI Web Analytics Dashboard",
      description:
        "A predictive analytics dashboard developed using Dash and OpenAI API, providing actionable insights for web optimization.",
      image: "/dash.jpeg",
      link: null,
      github: "https://github.com/divyanshipanchal23/ai-analytics",
      category: "ai",
      technologies: ["Python", "Dash", "OpenAI API", "Plotly"],
    },
  ]

  const filters = [
    { name: "All", value: "all" },
    { name: "Web Development", value: "web" },
    { name: "AI & Data Science", value: "ai" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="inline-block text-3xl md:text-4xl font-bold text-sage-green mb-2 relative pb-4">
          Things I've Built
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sage-green transform -translate-y-1"></span>
        </h2>

          <div className="flex justify-center mt-8 mb-10 flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-sage-green text-warm-cream"
                    : "bg-sage-green/10 text-text-secondary hover:bg-sage-green/20"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5 }}
              className="bg-warm-cream-light/80 rounded-xl overflow-hidden shadow-lg border border-sage-green/20 hover:shadow-sage-green/20 hover:border-sage-green/40 transition-all duration-300 transform hover:-translate-y-2 gentle-glow"
            >
              <div className="relative overflow-hidden cursor-pointer group" onClick={() => setSelectedProject(index)}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white w-12 h-12" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-sage-green mb-3">{project.title}</h3>
                <p className="text-text-primary/90 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-sage-green/10 rounded-full text-sage-green border border-sage-green/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-text-secondary hover:text-sage-green transition-colors duration-300"
                    >
                      <Github className="mr-1 w-4 h-4" /> Code
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-text-secondary hover:text-sage-green transition-colors duration-300"
                    >
                      <ExternalLink className="mr-1 w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-warm-cream-light max-w-4xl w-full rounded-xl overflow-hidden relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-text-primary bg-sage-green/20 p-2 rounded-full z-10 hover:bg-sage-green/30 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>

                <img
                  src={projects[selectedProject].image || "/placeholder.svg"}
                  alt={projects[selectedProject].title}
                  className="w-full h-80 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-sage-green mb-4">{projects[selectedProject].title}</h3>
                  <p className="text-text-primary mb-6">{projects[selectedProject].description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-sage-green/10 rounded-full text-sage-green border border-sage-green/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {projects[selectedProject].github && (
                      <a
                        href={projects[selectedProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-sage-green/10 hover:bg-sage-green/20 text-text-primary py-2 px-4 rounded-lg transition-colors duration-300"
                      >
                        <Github className="mr-2 w-4 h-4" /> View Code
                      </a>
                    )}

                    {projects[selectedProject].link && (
                      <a
                        href={projects[selectedProject].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-sage-green hover:bg-sage-green-light text-warm-cream py-2 px-4 rounded-lg transition-colors duration-300"
                      >
                        <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}
