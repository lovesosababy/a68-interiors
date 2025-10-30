import Image from 'next/image'
import { projects } from '@/content/projects'

export default function ProjectsPage() {

  return (
    <>
      <section className="section bg-bg pt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Explore our portfolio of residential and commercial projects, each one a unique reflection of our clients' vision and our design expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-panel">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article 
                key={project.slug} 
                className="group card overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-panel">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(min-width: 1024px) 560px, (min-width: 768px) 45vw, 90vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-fg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    {project.location} • {project.year}
                  </p>
                  <p className="text-muted leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-semibold mb-6">
              Let's Create Something Beautiful
            </h2>
            <p className="text-lg text-muted mb-8">
              Ready to start your own project? We'd love to hear from you.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

