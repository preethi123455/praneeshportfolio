'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      image: '/ecommerce-dashboard.jpg',
    },
    {
      title: 'Social Media App',
      description: 'Real-time chat and post sharing application with user authentication and notifications.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      github: '#',
      demo: '#',
      image: '/social-network-interface.jpg',
    },
    {
      title: 'Task Management Tool',
      description: 'Collaborative task management system with drag-and-drop functionality and team features.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion'],
      github: '#',
      demo: '#',
      image: '/task-management-board.jpg',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization and custom reporting capabilities.',
      tags: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#',
      image: '/data-analytics-dashboard.jpg',
    },
    {
      title: 'Weather App',
      description: 'Responsive weather application with real-time data, forecasts, and location services.',
      tags: ['React', 'API Integration', 'Geolocation', 'Chart.js'],
      github: '#',
      demo: '#',
      image: '/weather-forecast-app.jpg',
    },
    {
      title: 'Learning Platform',
      description: 'Online learning platform with video streaming, quizzes, and progress tracking.',
      tags: ['Next.js', 'Node.js', 'AWS S3', 'MongoDB'],
      github: '#',
      demo: '#',
      image: '/online-learning-platform.jpg',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-16 text-center"
        >
          Featured <span className="bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/20 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/20 glow-border">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-neutral-dark text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/20">
                    <a
                      href={project.github}
                      className="flex-1 px-4 py-2 bg-foreground text-white text-sm font-semibold rounded-lg hover:bg-primary transition-colors text-center"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
