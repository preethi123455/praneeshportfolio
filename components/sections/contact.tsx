'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

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
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/Praneesh773' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/praneesh-c-56641132b/' },
    { name: 'Leetcode', icon: '⚡', url: '#' },
    { name: 'Email', icon: '✉️', url: 'mailto:praneesh582@gmail.com' },
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
          Get in{' '}
          <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-neutral-dark text-lg mb-12"
        >
          I’m always open to opportunities where I can apply my skills and contribute to impactful
          projects. Let’s connect and create something meaningful together.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {[ 
              { icon: '📧', title: 'Email', info: 'praneesh582@gmail.com' },
              { icon: '📱', title: 'Phone', info: '+91 97865 27455' },
              { icon: '📍', title: 'Location', info: 'Erode, Tamil Nadu, India' },
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
