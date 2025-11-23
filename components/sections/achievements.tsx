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
    {
      year: '2023',
      title: '100 Projects Milestone',
      description: 'Successfully completed and deployed 100+ web development projects.',
    },
    {
      year: '2022',
      title: 'Tech Speaker',
      description: 'Presented talks on modern web development practices at international conferences.',
    },
    {
      year: '2022',
      title: 'Startup Founder',
      description: 'Founded a tech startup focused on providing SaaS solutions to businesses.',
    },
    {
      year: '2021',
      title: 'First Major Project',
      description: 'Launched my first major commercial project serving 10,000+ users.',
    },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 bg-neutral-light/50">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-16 text-center"
        >
          Achievements &<span className="block bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">Milestones</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-accent-light"
          ></motion.div>

          {/* Timeline items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="glass p-6 rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all">
                    <div className="text-sm font-semibold text-primary mb-2">{achievement.year}</div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{achievement.title}</h3>
                    <p className="text-neutral-dark">{achievement.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg shadow-primary/50 flex-shrink-0 z-10"
                ></motion.div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
