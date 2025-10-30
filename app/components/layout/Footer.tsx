import Link from "next/link"

const Icon = {
  phone: (
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.16a2 2 0 0 1 2.11-.45c.8.27 1.64.47 2.5.59A2 2 0 0 1 22 16.92Z"/>
    </svg>
  ),
  mail: (
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
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M22 6l-10 7L2 6"/>
    </svg>
  ),
  pin: (
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
      <path d="M12 22s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Main footer grid - 4 columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column A: Brand + Blurb + Contact */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-fg mb-3">
              A68 Interiors
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Transforming Vancouver homes with expert design and craftsmanship since 2009.
            </p>
            <ul className="space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                {Icon.phone}
                <a 
                  href="tel:+16729995370" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  (672) 999-5370
                </a>
              </li>
              <li className="flex items-center gap-2">
                {Icon.mail}
                <a 
                  href="mailto:a68interiors@gmail.com" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  a68interiors@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                {Icon.pin}
                <span>Vancouver, BC</span>
              </li>
            </ul>
          </div>

          {/* Column B: Services */}
          <nav aria-label="Services">
            <h4 className="font-serif text-base font-semibold text-fg mb-3">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link 
                  href="/services#kitchen" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#bathroom" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  Bathroom Retreats
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#full-home" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  Full-Home Design
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#visualizations" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  3D Visualizations
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column C: Company */}
          <nav aria-label="Company">
            <h4 className="font-serif text-base font-semibold text-fg mb-3">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link 
                  href="/projects" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/process" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link 
                  href="/reviews" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column D: Business Hours */}
          <div>
            <h4 className="font-serif text-base font-semibold text-fg mb-3">
              Business Hours
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>Monday – Friday: 8am – 6pm</li>
              <li>Saturday: 10am – 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Divider line */}
        <hr className="my-8 border-t border-line" />

        {/* Bottom bar: Copyright + Policy links */}
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {currentYear} A68 Interiors & Renovations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-fg hover:underline transition-colors focus:outline-none focus:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


