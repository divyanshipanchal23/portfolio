"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-dark-card py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-accent-color mb-4">Divyanshi Panchal</h3>
            <p className="text-text-primary/70 mb-4">
              Computer Science student specializing in AI and Data Science, passionate about creating innovative
              solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/divyanshipanchal23"
                target="_blank"
                rel="noreferrer"
                className="text-text-primary/70 hover:text-accent-color transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/divyanshipanchal/"
                target="_blank"
                rel="noreferrer"
                className="text-text-primary/70 hover:text-accent-color transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:divyanshi23.work@gmail.com"
                className="text-text-primary/70 hover:text-accent-color transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent-color mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-text-primary/70 hover:text-accent-color transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault()
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
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-text-primary/70 hover:text-accent-color transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault()
                    const projectsSection = document.querySelector("#projects")
                    if (projectsSection) {
                      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0
                      const projectsPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset
                      const offsetPosition = projectsPosition - navbarHeight - 30

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-primary/70 hover:text-accent-color transition-colors duration-300"
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
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-primary/70 hover:text-accent-color transition-colors duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent-color mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-text-primary/70">
                <Mail size={16} className="mr-2" />
                divyanshi23.work@gmail.com
              </li>
              <li className="flex items-center text-text-primary/70">
                <Github size={16} className="mr-2" />
                @divyanshipanchal23
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-bg pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-primary/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Divyanshi Panchal. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-text-primary/60 hover:text-accent-color transition-colors duration-300"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
