"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      // Success - clear form and show success message
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setIsSubmitting(false)
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
      console.error('Error submitting form:', err)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-dark-bg/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-accent-color mb-2 relative pb-4">
            Contact Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-color transform -translate-y-1"></span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="md:col-span-2 bg-dark-card rounded-xl p-8 shadow-lg border border-dark-card/80"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-accent-color mb-6">Let's Connect</h3>
            <p className="text-text-primary/80 mb-8">
              Feel free to reach out for job opportunities, collaborations, or just to say hello!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dark-bg p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-accent-color" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:divyanshi23.work@gmail.com"
                    className="text-text-primary/80 hover:text-accent-color transition-colors"
                  >
                    divyanshi23.work@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dark-bg p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-accent-color" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-text-primary/80">Gurgaon, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="bg-dark-card rounded-xl p-8 text-center shadow-lg border border-accent-color/30 h-full flex flex-col justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle className="w-16 h-16 text-accent-color mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-text-primary/80">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-dark-card rounded-xl p-8 shadow-lg border border-dark-card/80"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-text-primary/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border border-dark-card p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color/50 transition-all duration-300"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-text-primary/80 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-bg border border-dark-card p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-color/50 transition-all duration-300"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-primary/80 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-bg border border-dark-card p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent-color/50 transition-all duration-300"
                  ></textarea>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-accent-color hover:bg-hover-color text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : "transform hover:scale-[1.02]"}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </div>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
