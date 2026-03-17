import { Section } from "../components/Section"
import { skills } from "../data/skills"
import { motion, useReducedMotion } from "framer-motion"
import {
  Code2,
  LayoutGrid,
  Server,
  Database,
  Cloud,
  Cpu,
  Sparkles,
  Wrench,
} from "lucide-react"

interface SkillsProps {
  variant?: "linen" | "sand"
}

type SkillCardStyle = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: string | number }>
  bg: string
}

const styleByCategory: Record<string, SkillCardStyle> = {
  // Intentionally "architectural" (linen + graphite) with soft neutrals—no pinks.
  Languages: { icon: Code2, bg: "bg-gradient-to-br from-slate-100/80 via-white/40 to-transparent" },
  "AI/ML": { icon: Sparkles, bg: "bg-gradient-to-br from-indigo-100/80 via-white/40 to-transparent" },
  Frontend: { icon: LayoutGrid, bg: "bg-gradient-to-br from-sky-100/80 via-white/40 to-transparent" },
  Backend: { icon: Server, bg: "bg-gradient-to-br from-emerald-100/80 via-white/40 to-transparent" },
  DevOps: { icon: Cloud, bg: "bg-gradient-to-br from-violet-100/80 via-white/40 to-transparent" },
  Databases: { icon: Database, bg: "bg-gradient-to-br from-amber-100/80 via-white/40 to-transparent" },
  Tools: { icon: Wrench, bg: "bg-gradient-to-br from-stone-100/80 via-white/40 to-transparent" },
}

const descriptionByCategory: Record<string, string> = {
  Languages: "Core languages for systems and product delivery.",
  "AI/ML": "RAG, orchestration, and production ML foundations.",
  Frontend: "Interfaces that stay fast, accessible, and calm.",
  Backend: "APIs, services, and integration patterns.",
  DevOps: "Shipping, deploying, and operating reliably.",
  Databases: "Relational + graph + document stores.",
  Tools: "Editor, AI tooling, and daily workflow.",
}

export function Skills({ variant = "linen" }: SkillsProps) {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="skills" variant={variant}>
      <motion.p
        className="text-graphite/80 text-[11px] font-medium tracking-[0.32em] uppercase mb-2 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        Technical skills
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-bold font-[&quot;Playfair Display&quot;,_serif] tracking-tight text-graphite mb-4 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        My expertise
      </motion.h2>
      <motion.p
        className="text-sm text-slate-700 max-w-2xl mb-10 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        A deliberately chosen toolkit for backend systems, AI infrastructure, and product delivery.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-5">
        {skills.map(({ category, items }, idx) => {
          const style = styleByCategory[category] ?? { icon: Cpu, bg: "bg-slate-100/70" }
          const Icon = style.icon
          const desc = descriptionByCategory[category] ?? ""

          // A bit of intentional bento variety (not a clone):
          // - Backend gets more horizontal room (reads like a "primary" capability)
          // - DevOps gets more room (ties to delivery/ownership)
          const span =
            category === "Backend"
              ? "xl:col-span-6"
              : category === "DevOps"
                ? "xl:col-span-6"
                : "xl:col-span-4"

          return (
            <motion.article
              key={category}
              className={[
                "relative overflow-hidden rounded-2xl border border-black/5",
                "shadow-[0_1px_0_rgba(0,0,0,0.02)] p-6",
                "transition-transform transition-shadow duration-200",
                "hover:-translate-y-0.5 hover:shadow-md",
                "focus-within:-translate-y-0.5 focus-within:shadow-md",
                style.bg,
                span,
              ].join(" ")}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: reducedMotion ? 0 : idx * 0.06 }}
            >
              {/* subtle “architectural” corner line */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-12 border border-black/5 bg-white/20"
              />

              <div className="flex items-start gap-3 mb-4">
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/5 text-[#2D3027]"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold tracking-tight text-[#2D3027]">
                      {category}
                    </h3>
                  </div>
                  {desc && (
                    <p className="mt-0.5 text-xs text-[#1A1A1A]/70">
                      {desc}
                    </p>
                  )}
                </div>
              </div>

              <ul className="flex flex-wrap gap-2 list-none" role="list">
                {items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/70 border border-black/5 text-xs text-[#1A1A1A] whitespace-nowrap"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
