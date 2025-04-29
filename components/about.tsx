"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, Github, Linkedin } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-accent-color mb-12 relative pb-4">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-color transform -translate-y-1"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-dark-card rounded-xl p-8 shadow-lg border border-dark-card/80 md:col-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="md:flex gap-6 items-center mb-6">
                <div className="mb-6 md:mb-0 flex justify-center md:block">
                  <img 
                    src="/me.jpeg" 
                    alt="Divyanshi Panchal" 
                    className="w-32 h-32 object-cover rounded-full border-2 border-accent-color shadow-md"
                  />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-left">
                    Motivated and detail-oriented B.Tech Computer Science student specializing in AI and Data Science.
                    Extensive experience in AI-driven projects, including creating dashboards, training machine learning
                    models, and streamlining data pipelines.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed mb-6 text-left">
                I'm passionate about leveraging technology to solve real-world problems and create impactful solutions.
                My goal is to contribute to innovative projects that push the boundaries of what's possible with AI and
                data science.
              </p>

              <div className="mt-8 flex flex-wrap justify-start gap-4">
                <span className="px-4 py-2 bg-dark-bg rounded-full text-accent-color border border-accent-color/30">
                  AI Enthusiast
                </span>
                <span className="px-4 py-2 bg-dark-bg rounded-full text-accent-color border border-accent-color/30">
                  Data Scientist
                </span>
                <span className="px-4 py-2 bg-dark-bg rounded-full text-accent-color border border-accent-color/30">
                  Full Stack Developer
                </span>
                <span className="px-4 py-2 bg-dark-bg rounded-full text-accent-color border border-accent-color/30">
                  Problem Solver
                </span>
              </div>
            </motion.div>

            <motion.div
              className="bg-dark-card rounded-xl p-8 shadow-lg border border-dark-card/80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-accent-color mb-6 text-left">Professional Details</h3>

              <div className="space-y-4 text-left">
                <div>
                  <h4 className="text-sm text-text-primary/60 mb-1">Location</h4>
                  <p>Gurgaon, India</p>
                </div>

                <div>
                  <h4 className="text-sm text-text-primary/60 mb-1">Education</h4>
                  <p>B.Tech in Computer Science</p>
                </div>

                <div>
                  <h4 className="text-sm text-text-primary/60 mb-1">Specialization</h4>
                  <p>AI and Data Science</p>
                </div>

                <div>
                  <h4 className="text-sm text-text-primary/60 mb-1">Languages</h4>
                  <p>English, Hindi</p>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <a
                  href="https://github.com/divyanshipanchal23"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-text-primary hover:text-accent-color transition-colors duration-300"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/divyanshipanchal/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-text-primary hover:text-accent-color transition-colors duration-300"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-text-primary hover:text-accent-color transition-colors duration-300"
                >
                  <FileText size={20} />
                  <span>Resume</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
