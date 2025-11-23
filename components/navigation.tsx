'use client'

import { useEffect, useState } from 'react'

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'technologies', label: 'Tech' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">
            Portfolio
          </div>

          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-primary'
                    : 'text-neutral-dark hover:text-primary'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary to-accent-light text-white rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all">
            Resume
          </button>
        </div>
      </nav>

      {/* Dot Navigation (Side) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === section.id
                ? 'bg-primary w-8 shadow-lg shadow-primary/50'
                : 'bg-neutral-medium hover:bg-neutral-dark'
            }`}
            title={section.label}
          />
        ))}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-primary/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
        id="back-to-top"
      >
        ↑
      </button>

      <style>{`
        #back-to-top {
          opacity: 0;
          transition: opacity 0.3s;
        }
        window.addEventListener('scroll', () => {
          const btn = document.getElementById('back-to-top');
          if (btn) {
            btn.style.opacity = window.scrollY > 300 ? '1' : '0';
          }
        });
      `}</style>
    </>
  )
}
