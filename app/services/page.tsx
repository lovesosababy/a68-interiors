export default function ServicesPage() {
  const services = [
    {
      title: 'Full-Scope Interior Design',
      description: 'Concept, planning, materials, furnishings, and coordination — a seamless journey from idea to handover.',
      features: [
        'Concept & moodboards',
        'Space planning & 3D visualization',
        'Materials & finishes',
        'Furnishings & styling',
        'Vendor & trade coordination',
      ],
    },
    {
      title: 'Renovations',
      description: 'Kitchen, bath, and whole-home transformations with pragmatic scheduling and cost transparency.',
      features: [
        'Feasibility & scope',
        'Detailed drawings',
        'GC/trade liaison',
        'Procurement oversight',
        'Site supervision',
      ],
    },
    {
      title: 'Custom Millwork',
      description: 'Built-ins, closets, and statement kitchens with precise detailing and durable finishes.',
      features: [
        'Shop drawings',
        'Material & hardware specs',
        'Finish samples',
        'Install coordination',
      ],
    },
    {
      title: 'Styling & Furnishing',
      description: 'Curated furniture, textiles, lighting, and art programs tailored to your lifestyle.',
      features: [
        'Sourcing & procurement',
        'Logistics & install',
        'Final styling & photography',
      ],
    },
  ]

  return (
    <>
      <section className="section bg-bg pt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              From initial concept to final installation, we offer comprehensive design services tailored to your unique needs and vision.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-panel">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="card max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-semibold mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-fg flex items-start">
                      <span className="w-1.5 h-1.5 bg-fg rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-semibold mb-6">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-lg text-muted mb-8">
              Let&apos;s create a custom plan that brings your vision to life.
            </p>
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}


