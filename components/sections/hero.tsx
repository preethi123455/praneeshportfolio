'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const text = "MERN Stack Developer"
    const element = textRef.current
    if (!element) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        element.textContent = text.slice(0, index)
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="mb-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block text-sm font-semibold text-primary mb-4"
            >
              👋 Welcome to my portfolio
            </motion.div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm a
            <span
              ref={textRef}
              className="block bg-gradient-to-r from-primary via-accent-light to-primary bg-clip-text text-transparent min-h-20"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite',
              }}
            >
            </span>
          </h1>

          <p className="text-lg text-neutral-dark mb-8 leading-relaxed max-w-lg">
            Building beautiful, responsive web applications with modern technologies. Passionate about creating seamless user experiences.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent-light text-white rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all">
              Download CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12"
          >
            <div className="flex flex-col items-center text-primary text-sm">
              <span>Scroll down to explore</span>
              <svg className="w-6 h-6 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Floating Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 lg:h-full flex items-center justify-center"
        >
          {/* Floating shapes background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center opacity-20"
          >
            <div className="absolute w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10 w-64 h-64 lg:w-80 lg:h-80"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/30 glow-border">
              <img
                src="/developer-portrait.jpg"
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-72 h-72 lg:w-96 lg:h-96 border-2 border-primary/20 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

export default Hero
