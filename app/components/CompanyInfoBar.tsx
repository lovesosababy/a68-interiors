"use client"

import { motion } from "framer-motion"
import { Star, Shield, Clock, Award } from "lucide-react"
import { useEffect, useState } from "react"

interface InfoItem {
  icon: React.ReactNode
  title: string
  subtitle: string
  ariaLabel: string
}

export default function CompanyInfoBar() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const items: InfoItem[] = [
    {
      icon: <Star className="w-5 h-5" aria-hidden="true" />,
      title: "5.0 Rating",
      subtitle: "50+ Reviews",
      ariaLabel: "5.0 rating with over 50 reviews"
    },
    {
      icon: <Shield className="w-5 h-5" aria-hidden="true" />,
      title: "Licensed & Insured",
      subtitle: "Fully Certified",
      ariaLabel: "Licensed and insured, fully certified"
    },
    {
      icon: <Clock className="w-5 h-5" aria-hidden="true" />,
      title: "Transparent Timelines",
      subtitle: "On-Time Delivery",
      ariaLabel: "Transparent timelines with on-time delivery"
    },
    {
      icon: <Award className="w-5 h-5" aria-hidden="true" />,
      title: "15+ Years",
      subtitle: "Experience",
      ariaLabel: "Over 15 years of experience"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.4 },
    },
  }

  return (
    <section 
      className="border-y border-line bg-bg py-8 md:py-12"
      aria-label="Company credentials and achievements"
    >
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4 justify-center sm:justify-start"
              role="listitem"
              aria-label={item.ariaLabel}
            >
              {/* Icon circle */}
              <div
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-panel border border-line text-fg"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              
              {/* Text content */}
              <div className="text-left">
                <div className="font-semibold text-fg text-sm md:text-base leading-tight">
                  {item.title}
                </div>
                <div className="text-muted text-xs md:text-sm leading-tight mt-0.5">
                  {item.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


