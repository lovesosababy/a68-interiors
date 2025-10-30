"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ScrollCueProps {
  targetId: string
}

export default function ScrollCue({ targetId }: ScrollCueProps) {
  const [visible, setVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    // Set up intersection observer for hero visibility
    let observer: IntersectionObserver
    const setupObserver = () => {
      const heroElement = document.querySelector('[data-hero]')
      
      if (heroElement) {
        observer = new IntersectionObserver(
          ([entry]) => {
            setVisible(entry.isIntersecting)
          },
          { 
            threshold: 0.1,
            rootMargin: "-64px 0px 0px 0px"
          }
        )
        observer.observe(heroElement)
      }
    }

    // Wait a bit for DOM to be ready
    const timer = setTimeout(setupObserver, 100)

    return () => {
      clearTimeout(timer)
      mediaQuery.removeEventListener("change", handleChange)
      if (observer) observer.disconnect()
    }
  }, [])

  const handleClick = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleClick()
    }
  }

  if (!visible) return null

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center z-20">
      <motion.button
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label="Scroll to services section"
        tabIndex={0}
        initial={{ opacity: 0 }}
        animate={
          prefersReducedMotion
            ? { opacity: 1 }
            : { 
                opacity: 1,
                y: [0, 8, 0]
              }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.3 }
            : { 
                y: {
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                },
                opacity: { duration: 0.5 }
              }
        }
        className="group pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-line bg-bg text-fg shadow-sm hover:bg-bg-inv hover:text-fg-inv focus:outline-none focus:ring-2 focus:ring-fg focus:ring-offset-2 transition-colors duration-200"
      >
        <svg 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="currentColor" 
          strokeWidth="1.75" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:translate-y-0.5"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </motion.button>
    </div>
  )
}


