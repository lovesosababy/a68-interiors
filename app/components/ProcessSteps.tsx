"use client"

type Step = { 
  num: string
  title: string
  body: string
  icon: "call" | "design" | "build" | "check"
}

const Icon = ({ name }: { name: Step["icon"] }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="text-fg"
    aria-hidden="true"
  >
    {name === "call" && (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.16a2 2 0 0 1 2.11-.45c.8.27 1.64.47 2.5.59A2 2 0 0 1 22 16.92Z"/>
    )}
    {name === "design" && (
      <>
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </>
    )}
    {name === "build" && (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </>
    )}
    {name === "check" && (
      <>
        <path d="M9 12l2 2 4-4"/>
        <circle cx="12" cy="12" r="9"/>
      </>
    )}
  </svg>
)

export default function ProcessSteps() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Discovery Call",
      body: "We start with a free consultation to understand your vision, needs, and budget. Share your inspiration and let's explore what's possible.",
      icon: "call",
    },
    {
      num: "02",
      title: "Design & Planning",
      body: "Our team creates detailed 3D renderings and plans. You'll see exactly how your space will look before any work begins.",
      icon: "design",
    },
    {
      num: "03",
      title: "Expert Construction",
      body: "Our licensed craftsmen bring the design to life with precision and care. We keep you informed with regular updates throughout.",
      icon: "build",
    },
    {
      num: "04",
      title: "Final Walkthrough",
      body: "We ensure every detail meets our high standards and your expectations. Your satisfaction is our ultimate measure of success.",
      icon: "check",
    },
  ]

  return (
    <div className="relative">
      {/* Timeline line - hidden on mobile, visible on sm+ */}
      <div 
        className="pointer-events-none absolute left-0 right-0 top-[62px] hidden h-px bg-line sm:block" 
        aria-hidden="true"
      />
      
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.num} className="relative text-center sm:text-left">
            {/* Faint step number */}
            <div className="font-serif text-5xl lg:text-6xl text-black/10 select-none leading-none mb-3">
              {step.num}
            </div>
            
            {/* Circular icon badge sitting on the line */}
            <div className="relative mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-panel text-fg shadow-sm">
                <Icon name={step.icon} />
              </div>
            </div>
            
            {/* Title and description */}
            <h3 className="font-semibold text-fg text-base mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}


