"use client"

interface Service {
  title: string
  blurb: string
  image: string
  alt: string
  icon: "kitchen" | "bath" | "home" | "viz"
  href: string
}

interface ServicesGridProps {
  services: Service[]
}

const Icon = ({ name }: { name: string }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-fg"
    aria-hidden="true"
  >
    {name === "kitchen" && (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2"/>
        <path d="M7 8v6M12 8v8M17 8v6"/>
      </>
    )}
    {name === "bath" && (
      <>
        <path d="M4 12h16"/>
        <path d="M7 12v2a5 5 0 0 0 10 0v-2"/>
        <path d="M9 7h3"/>
        <path d="M12 7v3"/>
      </>
    )}
    {name === "home" && (
      <>
        <path d="M3 10l9-7 9 7"/>
        <path d="M9 22V12h6v10"/>
      </>
    )}
    {name === "viz" && (
      <>
        <rect x="3" y="3" width="18" height="14" rx="2"/>
        <path d="M7 17l4-4 3 3 3-4"/>
      </>
    )}
  </svg>
)

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <>
      {services.map((service, index) => (
        <article 
          key={index}
          className="card overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Image with overlapping icon badge */}
          <div className="relative">
            <img 
              src={service.image} 
              alt={service.alt}
              className="h-auto w-full aspect-[4/3] object-cover border-b border-line"
              loading="lazy"
            />
            
            {/* Circular icon badge - overlaps image bottom-left */}
            <div 
              className="absolute -bottom-3.5 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg shadow-sm"
              aria-hidden="true"
            >
              <Icon name={service.icon} />
            </div>
          </div>
          
          {/* Card content */}
          <div className="px-6 pt-7 pb-6">
            <h3 className="text-xl font-serif font-semibold text-fg mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {service.blurb}
            </p>
            <a 
              href={service.href}
              className="mt-4 inline-block text-sm text-fg underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-fg focus:ring-offset-2 transition-all"
              aria-label={`Learn more about ${service.title}`}
            >
              Learn More →
            </a>
          </div>
        </article>
      ))}
    </>
  )
}


