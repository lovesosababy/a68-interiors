export default function ContactPage() {
  return (
    <>
      <section className="section bg-bg pt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Ready to transform your space? We'd love to hear about your project and discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-panel">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:a68interiors@gmail.com" className="text-muted hover:text-fg transition-colors">
                    a68interiors@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:+16729995370" className="text-muted hover:text-fg transition-colors">
                    +1 (672) 999-5370
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted">
                    Vancouver, BC, Canada
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p className="text-muted">
                    Monday - Friday: 9:00 - 18:00<br />   
                    Saturday: 10:00 - 16:00<br />
                    Sunday: Closed<br />
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h3 className="text-2xl font-serif font-semibold mb-6">
                Start Your Project
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-bg border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-fg"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-bg border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-fg"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-bg border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-fg"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


