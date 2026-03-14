import { useCallback } from "react"
import { site } from "../data/site"
import { Button } from "../components/Button"
import { useReducedMotion } from "../hooks/useReducedMotion"

export function Hero() {
  const reducedMotion = useReducedMotion()

  const scrollToProjects = useCallback(() => {
    const el = document.getElementById("projects")
    if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })
  }, [reducedMotion])

  return (
    <section className="min-h-[70vh] flex items-center py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-10 items-center w-full">
        <div className="flex justify-center md:justify-start order-1 mb-10 md:mb-0">
          <figure className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border border-neutral-200 bg-neutral-100 shadow-sm flex-shrink-0">
            <img
              src="/images/profile.jpg"
              alt="Portrait of Sandeep Poloju"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="text-center md:text-left order-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
            {site.name}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 mb-6">
            {site.role}
          </p>
          <ul
            className="text-sm sm:text-base text-neutral-600 mb-8 space-y-2 max-w-xl mx-auto md:mx-0 list-none"
            aria-label="Proof points"
          >
            {site.proofPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button as="button" variant="primary" onClick={scrollToProjects}>
              View Projects
            </Button>
            <Button as="a" href={site.resumeUrl} variant="secondary">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
