import { site } from "../data/site"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pb-32 px-6 md:px-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center md:justify-start">
      <figure className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100">
        <img
          src="/images/profile.jpg"
          alt="Sandeep Poloju"
          className="w-full h-full object-cover transform-gpu backface-hidden antialiased"
          loading="eager"
          decoding="async"
        />
      </figure>
    </div>

        <div className="text-center md:text-left w-full max-w-none">
          <p className="text-graphite font-sans text-sm font-medium mb-2">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-[&quot;Playfair Display&quot;,_serif] text-graphite md:whitespace-nowrap">
            {site.name}
          </h1>
          <p className="text-[clamp(1rem,2.2vw,1.5rem)] font-sans tracking-tight text-graphite/80 font-semibold mt-2 md:whitespace-nowrap">
            Backend-focused Full-stack Engineer &amp; AI Infrastructure Architect
          </p>
          <p className="text-lg leading-relaxed max-w-3xl text-slate-700 mx-auto md:mx-0 mt-4 mb-8">
            UMD Software Engineering Graduate (3.93 GPA) with 3+ years of professional experience
            building scalable platforms for Fortune 500 clients. I specialize in end-to-end product
            ownership, bridging the gap between robust backend infrastructure and Agentic AI through
            sophisticated RAG pipelines and LangGraph orchestrators.
          </p>

          <div className="flex flex-col gap-6 md:gap-4 items-center md:items-start">
            <div className="flex gap-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-linen border border-graphite/10 text-graphite hover:bg-graphite/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-linen border border-graphite/10 text-graphite hover:bg-graphite/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-linen border border-graphite/10 text-graphite hover:bg-graphite/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-graphite text-white text-sm font-medium hover:bg-graphiteHover hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-graphite text-graphite text-sm font-medium hover:bg-graphite/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => {
          const el = document.getElementById("about")
          if (el) {
            el.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className="group absolute bottom-10 left-1/2 -translate-x-1/2 inline-flex flex-col items-center justify-center text-sm font-medium text-slate-600 tracking-[0.25em] uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen rounded-full px-2 py-1"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ y: [0, 6, 0], transition: { duration: 0.8, repeat: Infinity } }}
      >
        <span className="group-hover:text-graphite transition-colors">
          Scroll to explore
        </span>
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
    </section>
  )
}
