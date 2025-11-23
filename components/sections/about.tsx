'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-center"
        >
          About <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
              <p className="text-neutral-dark leading-relaxed">
                I'm a passionate MERN stack developer with expertise in building modern, scalable web applications. I love combining beautiful design with robust functionality to create exceptional user experiences.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border-l-4 border-accent-light">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-neutral-dark leading-relaxed">
                I specialize in building responsive web applications, APIs, and database solutions. My focus is on writing clean, maintainable code and delivering projects that exceed expectations.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">My Passion</h3>
              <p className="text-neutral-dark leading-relaxed">
                I'm constantly learning new technologies and best practices. When I'm not coding, I enjoy contributing to open source, writing technical articles, and helping others in the developer community.
              </p>
            </div>
          </motion.div>

          {/* Stats or Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '5+', label: 'Years Experience' },
                { number: '100+', label: 'Happy Clients' },
                { number: '4.9★', label: 'Average Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass p-6 rounded-xl text-center hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-dark mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-3 text-neutral-dark">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Location: San Francisco, CA
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent-light rounded-full"></span>
                  Available for: Full-time & Freelance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Specialization: Full Stack Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent-light rounded-full"></span>
                  Response Time: Within 24 hours
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
