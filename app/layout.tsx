import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from './components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'A68 Interiors — Interior Design & Renovation',
  description: 'Thoughtful design. Clean execution.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-line bg-bg sticky top-0 z-50">
          <div className="container">
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="text-2xl font-serif font-semibold text-fg hover:opacity-70 transition-opacity">
                A68 Interiors
              </Link>
              
              <nav className="flex items-center gap-8">
                <Link href="/services" className="text-fg hover:text-muted transition-colors">
                  Services
                </Link>
                <Link href="/projects" className="text-fg hover:text-muted transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="text-fg hover:text-muted transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>
        
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  )
}

