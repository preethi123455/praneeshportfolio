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
                I'm a dedicated full-stack developer with expertise in creating scalable, responsive web applications. I enjoy blending clean code with intuitive designs to deliver seamless user experiences.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">AI & ML Enthusiast</h3>
              <p className="text-neutral-dark leading-relaxed">
                I'm a passionate AI & ML enthusiast, skilled in building intelligent systems that solve real-world problems. I love turning complex data into actionable insights and innovative solutions.
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
                I'm constantly learning new technologies and I’m passionate about AI & ML, full-stack development, problem-solving, and creating innovative, user-centric solutions. I love turning complex challenges into seamless, impactful digital experiences.
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
            

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass p-8 rounded-2xl"
            >
            
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
