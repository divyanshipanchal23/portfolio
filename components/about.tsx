"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="inline-block text-3xl md:text-4xl font-bold text-sage-green mb-12 relative pb-4">
          Who I Am
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sage-green transform -translate-y-1"></span>
        </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-warm-cream-light/80 rounded-xl p-8 shadow-lg border border-sage-green/20 md:col-span-2 gentle-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6 text-left">
                                          <p className="text-lg leading-relaxed text-text-primary">
                            I enjoy a slower, more thoughtful pace in life. I work with FastGraphs, where I maintain and build features that keep things running smoothly.
                          </p>
                
                                          <p className="text-lg leading-relaxed text-text-secondary">
                            I'm drawn to warm lighting, soft colors, and the comfort of small rituals, like lighting a scented candle, journaling, or making coffee in my Hogwarts mug. I'm more introverted, but I value deep connections, shared laughter, and time spent with friends and family.
                          </p>
                
                                          <p className="text-lg leading-relaxed text-text-secondary">
                            Away from my screen, I like doing the wordle, reading books, journaling, or spending time with my cat. I gravitate toward music, podcasts, and the occasional online game, and I find comfort in spaces that feel lived in and calm.
                          </p>
                
                                          <p className="text-lg leading-relaxed text-text-secondary">
                            To me, relationships should be clear, dependable, and built to last which is also how I like my code.
                          </p>
              </div>

              <div className="mt-8 flex flex-wrap justify-start gap-3">
                <span className="px-4 py-2 bg-sage-green/10 rounded-full text-sage-green border border-sage-green/30 font-medium">
                  Software Engineer
                </span>
                <span className="px-4 py-2 bg-sage-green/10 rounded-full text-sage-green border border-sage-green/30 font-medium">
                  Wordle Enthusiast
                </span>
                <span className="px-4 py-2 bg-sage-green/10 rounded-full text-sage-green border border-sage-green/30 font-medium">
                  Playlist Virtuoso
                </span>
              </div>
            </motion.div>

            <motion.div
              className="bg-warm-cream-light/80 rounded-xl p-8 shadow-lg border border-sage-green/20 gentle-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-sage-green mb-6 text-left">A Little More About Me</h3>

              <div className="space-y-5 text-left">
                <div className="p-4 bg-sage-green/5 rounded-lg border-l-4 border-sage-green/30">
                  <h4 className="text-sm font-medium text-sage-green mb-2">Home Base</h4>
                  <p className="text-text-secondary">Gurgaon, India</p>
                </div>

                <div className="p-4 bg-sage-green/5 rounded-lg border-l-4 border-sage-green/30">
                  <h4 className="text-sm font-medium text-sage-green mb-2">Learning Journey</h4>
                  <p className="text-text-secondary">B.Tech in Computer Science</p>
                  <p className="text-xs text-text-secondary/70 mt-1">Specialized in AI & Data Science</p>
                </div>

                <div className="p-4 bg-sage-green/5 rounded-lg border-l-4 border-sage-green/30">
                  <h4 className="text-sm font-medium text-sage-green mb-2">Languages</h4>
                  <p className="text-text-secondary">English, Hindi, a little bit of German</p>
                  <p className="text-xs text-text-secondary/70 mt-1">and fluent cat</p>
                </div>

                <div className="p-4 bg-sage-green/5 rounded-lg border-l-4 border-sage-green/30">
                  <h4 className="text-sm font-medium text-sage-green mb-2">Currently</h4>
                  <p className="text-text-secondary">Maintaining the codebase @ FastGraphs</p>
                  <p className="text-xs text-text-secondary/70 mt-1">remote work</p>
                </div>
              </div>
            </motion.div>
          </div>
      </motion.div>
    </div>
  )
}
