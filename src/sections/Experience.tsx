import { Section } from "../components/Section"
import { experience } from "../data/experience"
import { motion, useReducedMotion } from "framer-motion"
import { Building2, CalendarDays, MapPin } from "lucide-react"

interface ExperienceProps {
  variant?: "linen" | "sand"
}

export function Experience({ variant = "linen" }: ExperienceProps) {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="experience" variant={variant}>
      <motion.p
        className="text-graphite/80 text-[11px] font-medium tracking-[0.32em] uppercase mb-2 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        Professional journey
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-bold font-[&quot;Playfair Display&quot;,_serif] tracking-tight text-graphite mb-10 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        Work experience
      </motion.h2>

      <div className="relative">
        <div
          className="absolute left-2 top-2 bottom-2 w-px bg-black/10"
          aria-hidden
        />

        <ul className="space-y-8 md:space-y-10 list-none">
          {experience.map((entry, idx) => {
            const dot =
              entry.organization === "University of Maryland"
                ? "bg-indigo-400"
                : entry.organization === "Infosys"
                  ? "bg-emerald-400"
                  : "bg-amber-400"

            return (
              <li key={`${entry.organization}-${entry.period}-${entry.role}`} className="relative pl-10">
                <span
                  className={[
                    "absolute left-0 top-6 h-3 w-3 rounded-full",
                    "ring-4 ring-linen",
                    dot,
                  ].join(" ")}
                  aria-hidden
                />

                <motion.article
                  className={[
                    "rounded-2xl border border-black/5 bg-white/50",
                    "shadow-[0_1px_0_rgba(0,0,0,0.02)]",
                    "p-6 md:p-7",
                  ].join(" ")}
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: reducedMotion ? 0 : idx * 0.04 }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-sm md:text-base font-semibold tracking-tight text-graphite">
                        {entry.role}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-2 text-sm text-graphite/70">
                        <Building2 className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                        <span className="truncate">{entry.organization}</span>
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-graphite/70 md:items-end">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                        <span className="truncate">Remote / Hybrid</span>
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                        <span className="truncate">{entry.period}</span>
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 list-disc list-inside text-sm text-ink/80">
                    {entry.highlights.map((h) => (
                      <li key={h} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>

                  {entry.stack && (
                    <p className="mt-5 text-xs text-ink/70">
                      <span className="font-medium text-graphite/80">Stack:</span> {entry.stack}
                    </p>
                  )}
                </motion.article>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
