"use client"

import Link from 'next/link'
import HeroFullBleed from './components/hero/HeroFullBleed'
import CompanyInfoBar from './components/CompanyInfoBar'
import ServicesGrid from './components/ServicesGrid'
import ProcessSteps from './components/ProcessSteps'

export default function Home() {
  const services = [
    {
      title: "Kitchen Renovations",
      blurb: "Custom kitchens designed for how you live. From modern minimalism to classic elegance, we create spaces that inspire culinary creativity.",
      image: "/images/services/kitchen.jpg",
      alt: "Modern renovated kitchen with island and large windows",
      icon: "kitchen" as const,
      href: "/services#kitchen"
    },
    {
      title: "Bathroom Retreats",
      blurb: "Transform your bathroom into a spa-like sanctuary. Thoughtful design meets premium materials for the ultimate daily escape.",
      image: "/images/services/bath.jpg",
      alt: "Luxury bathroom with freestanding tub and natural light",
      icon: "bath" as const,
      href: "/services#bathroom"
    },
    {
      title: "Full-Home Design",
      blurb: "Comprehensive renovations that reimagine your entire living space. Cohesive design that flows seamlessly from room to room.",
      image: "/images/services/home.jpg",
      alt: "Bright living room with modern furniture and hardwood floors",
      icon: "home" as const,
      href: "/services#full-home"
    },
    {
      title: "3D Design & Visualizations",
      blurb: "See your dream space before construction begins. Photorealistic renderings help you make confident decisions every step of the way.",
      image: "/images/services/viz.jpg",
      alt: "3D visualization rendering of modern interior space",
      icon: "viz" as const,
      href: "/services#visualizations"
    },
  ]


  return (
    <>
      {/* HERO SECTION - Full-bleed background image */}
      <HeroFullBleed
        imageSrc="/images/hero-kitchen.jpg"
        heading="Transform Your Home
With Confident Design
& Craftsmanship"
        subheading="Expert kitchen, bathroom, and whole-home renovations in Vancouver. From concept to completion, we bring your vision to life with precision and care."
        primaryHref="/contact"
        primaryLabel="Book Your Free Design Consult"
        phoneHref="tel:+17783819338"
        phoneLabel="(778) 381-9338"
      />

      {/* Company Info Bar */}
      <CompanyInfoBar />

      {/* SERVICES SECTION */}
      <section id="services" className="section bg-panel">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Comprehensive renovation solutions tailored to your vision and lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
            <ServicesGrid services={services} />
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section id="process" className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A proven approach that delivers exceptional results, on time and on budget
            </p>
          </div>
          
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section bg-panel">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted mb-8">
              Let&apos;s discuss your project and create a space you&apos;ll love.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/projects" className="btn-ghost">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

