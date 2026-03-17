import { Section } from "../components/Section"
import { motion, useReducedMotion } from "framer-motion"

const aboutCopy = `
I started at Infosys building a Knowledge Graph platform for enterprise financial and insurance clients. On a team that moved fast and owned outcomes, I shipped features end-to-end, from Angular UI work to re-architecting Neo4j/Cypher queries that reduced search latency by ~90%.

That experience shaped how I write software. The best code is not just clever; it is scalable, maintainable, and built with the end-user in mind. One habit I carried forward is clean lower-level design: I used adapter-style boundaries to decouple tightly coupled modules so we could swap implementations without rewriting the system, and keep changes local and testable.

At the University of Maryland (M.Eng in Software Engineering, GPA 3.93), I worked as a Research Assistant on an AgriTech ML pipeline that processed 10GB+ of heterogeneous data and improved disease prediction accuracy from 74% to 91% using AWS (S3, SageMaker, Lambda/API Gateway). Mentorship is a real part of how I work. As a Graduate Teaching Assistant for Object-Oriented Programming and as a mentor across multiple semesters, I have helped 500+ students build strong fundamentals through structured problem solving, design principles, and thoughtful feedback.

Today I focus on AI infrastructure and backend systems, especially retrieval pipelines and stateful orchestration with LangGraph. I also built a RAG system designed to handle 10,000+ PDFs and large document libraries while keeping retrieval reliable and latency predictable.
`.trim()

type HighlightCard = {
  title: string
  body: string
}

const highlights: HighlightCard[] = [
  {
    title: "Academic & Mentorship",
    body: "3.93/4.0 GPA at UMD. Mentored 500+ students in OOP and Data Structures.",
  },
  {
    title: "Industry Impact",
    body: "10X latency reduction for enterprise search. Recipient of the “Tower of the Team” award at Infosys.",
  },
  {
    title: "Algorithmic Edge",
    body: "Top 100 (0.06%) in HackWithInfy (167k+ participants). 600+ problems solved across platforms with a 52-day LeetCode streak.",
  },
]

interface AboutProps {
  variant?: "linen" | "sand"
}

export function About({ variant = "linen" }: AboutProps) {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="about" variant={variant}>
      <div className="w-full">
        <motion.p
          className="text-graphite/80 text-[11px] font-medium tracking-[0.32em] uppercase mb-2 text-center md:text-left"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          About me
        </motion.p>
        <motion.h2
          className="text-2xl md:text-4xl font-bold font-[&quot;Playfair Display&quot;,_serif] tracking-tight text-graphite mb-8 text-center md:text-left"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Passionate about technology and innovation
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
          <div className="space-y-6">
            {aboutCopy.split("\n\n").map((para) => (
              <motion.p
                key={para.slice(0, 24)}
                className="text-[#1A1A1A]/80 leading-relaxed"
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5">
            {highlights.map((card, idx) => (
              <motion.div
                key={card.title}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-black/5",
                  "shadow-[0_1px_0_rgba(0,0,0,0.02)] p-6 md:p-7",
                  "transition-transform transition-shadow duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md",
                  "focus-within:-translate-y-0.5 focus-within:shadow-md",
                  idx === 0
                    ? "bg-gradient-to-br from-amber-100/60 via-white/40 to-transparent"
                    : idx === 1
                      ? "bg-gradient-to-br from-emerald-100/60 via-white/40 to-transparent"
                      : "bg-gradient-to-br from-indigo-100/60 via-white/40 to-transparent",
                ].join(" ")}
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: reducedMotion ? 0 : idx * 0.06 }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-12 border border-black/5 bg-white/20"
                />
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/5 text-graphite"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <rect
                        x="7"
                        y="7"
                        width="10"
                        height="10"
                        rx="2"
                        transform="rotate(45 12 12)"
                        opacity="0.9"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-graphite">
                      {card.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                      {card.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
