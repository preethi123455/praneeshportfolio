'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const achievements = [
    {
      year: '2025',
      title: 'SENIOR CITIZEN PORTAL',
      description: 'Won 2nd Prize in KEC Hackathon for outstanding contributions to the project.',
    },
    {
      year: '2025',
      title: 'BLOOD DONATION PLATFORM',
      description: 'Won 2nd Prize in Hackons, Trivandrum, Kerala at Mohandas College of Engineering and Technology.',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-neutral-light/50">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-16 text-center"
        >
          Achievements & <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">Milestones</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl border border-white/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full"
            >
              <div className="text-sm font-semibold text-primary mb-2">{achievement.year}</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{achievement.title}</h3>
              <p className="text-neutral-dark flex-1">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
