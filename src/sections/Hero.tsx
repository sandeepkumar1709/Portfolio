import { site } from "../data/site"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"
import { useReducedMotion } from "../hooks/useReducedMotion"
import { scrollToId } from "../lib/scroll"
import { FOCUS_RING, TAP_TARGET } from "../lib/styles"
import { trackEvent } from "../lib/analytics"

const iconLink = `${TAP_TARGET} inline-flex items-center justify-center rounded-full bg-linen border border-graphite/10 text-graphite hover:bg-graphite/5 transition-colors ${FOCUS_RING}`

export function Hero() {
  const reducedMotion = useReducedMotion()
  const meta = [site.location, site.availability].filter(Boolean).join(" · ")

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-vscreen flex items-center px-4 sm:px-6 pt-24 pb-32 bg-linen"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          {/* aspect-square + shrink-0 stop the figure collapsing to a
              264x320 ellipse when the grid track is narrower than w-80. */}
          <figure className="relative aspect-square shrink-0 w-56 sm:w-64 md:w-64 lg:w-80 rounded-full overflow-hidden border-4 border-linen shadow-xl bg-sand">
            <img
              src="/images/profile.jpg"
              alt="Sandeep Poloju"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>

        <div className="text-center md:text-left w-full max-w-none">
          <p className="text-graphite font-medium text-sm mb-2">Hello, I&apos;m</p>

          {/* No md:whitespace-nowrap: the grid track is minmax(0,1fr) and can
              never grow to fit, so nowrap forced document-level horizontal
              scroll at every width from 768px up. */}
          <h1
            id="hero-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-graphite text-balance"
          >
            {site.name}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl tracking-tight text-graphite/80 font-semibold mt-2 text-balance">
            {site.role}
          </p>

          {meta && (
            <p className="mt-3 text-sm font-medium text-graphite/70">{meta}</p>
          )}

          <p className="text-lg leading-relaxed max-w-[62ch] text-ink/80 mx-auto md:mx-0 mt-4 mb-8">
            UMD Software Engineering graduate (3.93 GPA) with 3+ years of professional
            experience building scalable platforms for Fortune 500 clients. I work across
            backend infrastructure and agentic AI, with RAG pipelines and LangGraph
            orchestration.
          </p>

          <div className="flex flex-col gap-6 md:gap-4 items-center md:items-start">
            <div className="flex gap-3">
              <a
                href={`mailto:${site.contact.email}`}
                onClick={() => trackEvent("email_click", { placement: "hero" })}
                className={iconLink}
                aria-label="Email"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", { network: "linkedin", placement: "hero" })}
                className={iconLink}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social_click", { network: "github", placement: "hero" })}
                className={iconLink}
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("resume_open", { placement: "hero" })}
                className={`${TAP_TARGET} inline-flex items-center justify-center px-8 rounded-full bg-graphite text-white text-sm font-medium hover:bg-graphiteHover transition-colors ${FOCUS_RING}`}
              >
                Resume
              </a>
              <a
                href="#projects"
                className={`${TAP_TARGET} inline-flex items-center justify-center px-8 rounded-full border border-graphite text-graphite text-sm font-medium hover:bg-graphite/5 transition-colors ${FOCUS_RING}`}
              >
                View my work
              </a>
              <a
                href="#contact"
                className={`${TAP_TARGET} inline-flex items-center justify-center px-8 rounded-full border border-graphite text-graphite text-sm font-medium hover:bg-graphite/5 transition-colors ${FOCUS_RING}`}
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Centring lives on a static wrapper. Framer writes `transform` to the
          inline style attribute, which beat the -translate-x-1/2 class and
          pushed this ~103px right of centre, off-screen on a phone. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <motion.button
          type="button"
          onClick={() => scrollToId("about", reducedMotion)}
          className={`group pointer-events-auto inline-flex flex-col items-center justify-center px-3 py-2 text-sm font-medium text-graphite/70 tracking-[0.25em] uppercase rounded-full ${FOCUS_RING}`}
          animate={reducedMotion ? undefined : { y: [0, 10, 0] }}
          transition={reducedMotion ? undefined : { duration: 2, repeat: 3, ease: "easeInOut" }}
        >
          <span className="group-hover:text-graphite transition-colors">Scroll to explore</span>
          <svg
            aria-hidden="true"
            className="mt-1 h-5 w-5 text-graphite"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="M7 14l5 5 5-5" />
          </svg>
        </motion.button>
      </div>
    </section>
  )
}
