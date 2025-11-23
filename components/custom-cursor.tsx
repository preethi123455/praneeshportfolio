'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const glow = glowRef.current

    if (!dot || !glow) return

    let mouseX = 0
    let mouseY = 0
    let dotX = 0
    let dotY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Update glow immediately
      glow.style.left = `${mouseX}px`
      glow.style.top = `${mouseY}px`
    }

    const animate = () => {
      // Smooth follow for dot
      dotX += (mouseX - dotX) * 0.3
      dotY += (mouseY - dotY) * 0.3

      dot.style.left = `${dotX}px`
      dot.style.top = `${dotY}px`

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div
        ref={glowRef}
        className="fixed w-12 h-12 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
          borderRadius: '50%',
        }}
      />
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      />
      <style>{`
        * { cursor: none; }
        a, button { cursor: none; }
      `}</style>
    </>
  )
}
