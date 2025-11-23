'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const cards = [
    {
      title: 'Full Stack Developer',
      description: "I'm a dedicated full-stack developer with expertise in creating scalable, responsive web applications. I enjoy blending clean code with intuitive designs to deliver seamless user experiences.",
      border: 'border-primary',
    },
    {
      title: 'AI & ML Enthusiast',
      description: "I'm a passionate AI & ML enthusiast, skilled in building intelligent systems that solve real-world problems. I love turning complex data into actionable insights and innovative solutions.",
      border: 'border-primary',
    },
    {
      title: 'What I Do',
      description: "I specialize in building responsive web applications, APIs, and database solutions. My focus is on writing clean, maintainable code and delivering projects that exceed expectations.",
      border: 'border-accent-light',
    },
    {
      title: 'My Passion',
      description: "I'm constantly learning new technologies and I’m passionate about AI & ML, full-stack development, problem-solving, and creating innovative, user-centric solutions. I love turning complex challenges into seamless, impactful digital experiences.",
      border: 'border-primary',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } items-center gap-8`}
            >
              <div className="glass p-8 rounded-2xl border-l-4 border-white/20 hover:border-primary/50 transition-all flex-1">
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-neutral-dark leading-relaxed">{card.description}</p>
              </div>
              {/* Optional image or illustration placeholder */}
              <div className="flex-1 hidden lg:block">
                {/* You can add an image or icon here */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
