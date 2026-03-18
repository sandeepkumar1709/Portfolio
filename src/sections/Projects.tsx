import { Link } from "react-router-dom"
import { Section } from "../components/Section"
import { motion, useReducedMotion } from "framer-motion"
import { FolderGit, ExternalLink } from "lucide-react"
import { projects } from "../data/projects"

interface ProjectsProps {
  variant?: "linen" | "sand"
}

const styleByIndex: Record<number, string> = {
  0: "bg-gradient-to-br from-indigo-100/70 via-white/40 to-transparent",
  1: "bg-gradient-to-br from-emerald-100/70 via-white/40 to-transparent",
  2: "bg-gradient-to-br from-sky-100/70 via-white/40 to-transparent",
  3: "bg-gradient-to-br from-amber-100/70 via-white/40 to-transparent",
  4: "bg-gradient-to-br from-violet-100/60 via-white/40 to-transparent",
  5: "bg-gradient-to-br from-stone-100/70 via-white/40 to-transparent",
}

const defaultBg = "bg-gradient-to-br from-stone-100/70 via-white/40 to-transparent"

export function Projects({ variant = "linen" }: ProjectsProps) {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="projects" variant={variant}>
      <motion.p
        className="text-graphite/80 text-[11px] font-medium tracking-[0.32em] uppercase mb-2 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        Selected work
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-bold font-[&quot;Playfair Display&quot;,_serif] tracking-tight text-graphite mb-4 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        Projects
      </motion.h2>
      <motion.p
        className="text-sm text-slate-700 max-w-2xl mb-10 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        A mix of RAG systems, full-stack apps, and personal tools.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5">
        {projects.map((project, idx) => {
          const span = idx === 0 ? "xl:col-span-7" : idx === 1 ? "xl:col-span-5" : "xl:col-span-4"
          const bg = styleByIndex[idx] ?? defaultBg

          return (
            <motion.article
              key={project.slug}
              className={[
                "relative overflow-hidden rounded-2xl border border-black/5",
                "shadow-[0_1px_0_rgba(0,0,0,0.02)] p-6 md:p-7",
                "transition-transform transition-shadow duration-200",
                "hover:-translate-y-0.5 hover:shadow-md",
                "focus-within:-translate-y-0.5 focus-within:shadow-md",
                bg,
                span,
              ].join(" ")}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: reducedMotion ? 0 : idx * 0.06,
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-12 border border-black/5 bg-white/20"
              />

              <div className="flex items-start gap-3 mb-4">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/5 text-graphite"
                >
                  <FolderGit className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold tracking-tight text-graphite">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink/70 line-clamp-2">{project.oneLiner}</p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2 list-none mb-4" role="list">
                {project.techTags.slice(0, 5).map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/70 border border-black/5 text-[11px] text-ink whitespace-nowrap"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <Link
                to={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-graphite hover:text-graphiteHover underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen rounded"
              >
                View project <ExternalLink className="h-4 w-4" strokeWidth={1.6} />
              </Link>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
