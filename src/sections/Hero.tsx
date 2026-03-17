import { site } from "../data/site"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pb-32">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <figure className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="/images/profile.jpg"
              alt="Portrait of Sandeep Poloju"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold font-[&quot;Playfair Display&quot;,_serif] text-[#2D3027] mb-4">
            {site.name}
          </h1>
          <p className="text-xl md:text-2xl font-sans tracking-tight text-[#2D3027] mb-4">
            Backend-focused Full-stack Engineer &amp; AI Infrastructure Architect
          </p>
          <p className="text-lg leading-relaxed max-w-2xl text-slate-600 mx-auto md:mx-0 mb-8">
            UMD Software Engineering Graduate (3.93 GPA) with 3+ years of professional experience
            building scalable platforms for Fortune 500 clients. I specialize in end-to-end product
            ownership, bridging the gap between robust backend infrastructure and Agentic AI through
            sophisticated RAG pipelines and LangGraph orchestrators.
          </p>

          <div className="flex flex-col gap-6 md:gap-4 items-center md:items-start">
            <div className="flex gap-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FDFCF0] border border-[#2D3027]/10 text-[#2D3027] hover:bg-[#2D3027]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3027]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FDFCF0] border border-[#2D3027]/10 text-[#2D3027] hover:bg-[#2D3027]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3027]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FDFCF0] border border-[#2D3027]/10 text-[#2D3027] hover:bg-[#2D3027]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3027]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#2D3027] text-white text-sm font-medium hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3027]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#2D3027] text-[#2D3027] text-sm font-medium hover:bg-[#2D3027]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3027]"
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
        className="group absolute bottom-10 left-1/2 -translate-x-1/2 inline-flex flex-col items-center justify-center text-sm font-medium text-slate-500 tracking-[0.25em] uppercase focus:outline-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ y: [0, 6, 0], transition: { duration: 0.8, repeat: Infinity } }}
      >
        <span className="group-hover:text-[#2D3027] transition-colors">
          Scroll to explore
        </span>
        <svg
          aria-hidden="true"
          className="mt-1 h-5 w-5 text-[#2D3027]"
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
