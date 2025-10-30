"use client"

type HeroFullBleedProps = {
  imageSrc: string
  heading: string
  subheading: string
  primaryHref: string
  primaryLabel: string
  phoneHref: string
  phoneLabel: string
}

export default function HeroFullBleed({
  imageSrc,
  heading,
  subheading,
  primaryHref,
  primaryLabel,
  phoneHref,
  phoneLabel
}: HeroFullBleedProps) {
  return (
    <section 
      id="hero" 
      className="relative isolate min-h-[92vh] lg:min-h-screen overflow-hidden flex items-center"
      data-hero
    >
      {/* Background image */}
      <img
        src={imageSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center' }}
      />
      
      {/* Dark gradient overlay for readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/55"
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6">
          <div className="pt-20 pb-16 lg:pt-32 lg:pb-24 max-w-3xl">
            {/* Heading - supports line breaks */}
            <h1 className="font-serif text-white leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6">
              {heading.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < heading.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            
            {/* Subheading */}
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              {subheading}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Primary CTA - Book Consult */}
              <a
                href={primaryHref}
                className="group inline-flex items-center rounded-lg px-6 py-3 text-sm font-medium text-white bg-black/70 backdrop-blur-sm hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200"
              >
                {primaryLabel}
                <svg 
                  viewBox="0 0 24 24" 
                  width="18" 
                  height="18" 
                  className="ml-2 transition-transform group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"/>
                  <path d="M13 5l7 7-7 7"/>
                </svg>
              </a>

              {/* Secondary CTA - Phone */}
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-white/95 border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="16" 
                  height="16" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.75" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.16a2 2 0 0 1 2.11-.45c.8.27 1.64.47 2.5.59A2 2 0 0 1 22 16.92Z"/>
                </svg>
                {phoneLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - small white circle with chevron */}
      <div className="pointer-events-none absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          type="button"
          onClick={() => {
            const next = document.querySelector('#hero')?.nextElementSibling
            if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/80 bg-white/10 backdrop-blur-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 transition-all"
          aria-label="Scroll to next section"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="18" 
            height="18" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.75" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>
    </section>
  )
}


