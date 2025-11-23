'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setFormState({ name: '', email: '', message: '' })
  }

  const socials = [
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Email', icon: '✉️', url: '#' },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-6 text-center"
        >
          Get in <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-neutral-dark text-lg mb-12"
        >
          Have a project in mind? Let's collaborate and create something amazing together.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white border-2 border-neutral-medium rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white border-2 border-neutral-medium rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={5}
                className="w-full px-4 py-3 bg-white border-2 border-neutral-medium rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-accent-light text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            {[
              { icon: '📧', title: 'Email', info: 'hello@example.com' },
              { icon: '📱', title: 'Phone', info: '+1 (555) 123-4567' },
              { icon: '📍', title: 'Location', info: 'San Francisco, CA' },
              { icon: '⏰', title: 'Available', info: 'Mon - Fri, 9AM - 6PM' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="glass p-6 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-neutral-dark">{item.info}</p>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg text-center font-semibold transition-all"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <div className="text-xs mt-2">{social.name}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
