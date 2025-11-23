'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Technologies from '@/components/sections/technologies'
import Projects from '@/components/sections/projects'
import Achievements from '@/components/sections/achievements'
import Contact from '@/components/sections/contact'
import Navigation from '@/components/navigation'
import BackgroundAnimation from '@/components/background-animation'
import CustomCursor from '@/components/custom-cursor'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'technologies', 'projects', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full overflow-x-hidden">
      <CustomCursor />
      <BackgroundAnimation />
      <Navigation activeSection={activeSection} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="technologies">
          <Technologies />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="achievements">
          <Achievements />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}
