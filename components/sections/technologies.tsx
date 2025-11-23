'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Technologies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'CSS', icon: '🛠️', color: 'from-orange-400 to-red-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'Express', icon: '🚀', color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-emerald-700' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-indigo-700' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Git', icon: '📦', color: 'from-orange-500 to-red-700' },
    { name: 'Python', icon: '🐍', color: 'from-blue-400 to-blue-700' },
    { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-red-500' },
  { name: 'Bootstrap', icon: '🎨', color: 'from-purple-400 to-purple-600' },
    { name: 'Figma (UI/UX)', icon: '🖌️', color: 'from-pink-400 to-pink-600' },
  { name: 'C & C++', icon: '💻', color: 'from-blue-600 to-gray-700' },
  { name: 'Java & JavaScript', icon: '☕', color: 'from-red-400 to-yellow-500' },
 { name: 'Data Structures in C', icon: '📚', color: 'from-indigo-400 to-indigo-600' },
 { name: 'Artificial Intelligence (Model Training)', icon: '🤖', color: 'from-purple-500 to-pink-600' },

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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
          Technologies & <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">Tools</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <div className="h-40 bg-white rounded-2xl border-2 border-primary/30 p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 glow-border"
                style={{
                  animation: `pulse-glow 2s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="text-5xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-bold text-center text-foreground">{tech.name}</h3>
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}

export default Technologies
