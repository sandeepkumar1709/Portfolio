import { Section } from "../components/Section"
import { motion, useReducedMotion } from "framer-motion"

/**
 * Register target: his spoken voice, not his written one. He uses contractions
 * constantly when talking and almost never when writing formally, and his own
 * bullet rule is "what you did -> how you did -> what is the result". Mechanism
 * before metric throughout — the one time a senior engineer read a bare
 * percentage of his aloud, the reaction was "that doesn't mean a whole lot to me".
 */
const aboutCopy = `
I've always considered myself a problem solver. I like breaking down complex systems and building things that work in the real world. That's most of what I did for over two years at Infosys, on a knowledge graph platform for Fortune 500 financial services clients.

The work I'd point to first is the search layer. We integrated LLMs so the platform could translate natural English questions into Cypher queries, which made complex graph data accessible to non-technical users. NLU accuracy went from 85% to 92%. I'd also built a GraphQL to Cypher translation layer for the graph API — and then took it back out of the search path, because profiling showed that extra hop was what was costing us. Search got over 40% faster. Deleting my own abstraction turned out to be the right call.

That shaped how I write software. Clean boundaries matter more than clever code. I put an adapter boundary around the graph visualization module so the rendering implementation could be swapped without touching a single caller. I also spent a long stretch inside NGINX's rewrite module, which offers no real way to trace what it's doing — you're guessing until you go read the source. That taught me more about diagnosis than any tutorial has.

At Maryland I finished an M.Eng in Software Engineering with a 3.93 GPA and worked as a research assistant on an AgriTech ML pipeline: 10GB+ of heterogeneous data, disease prediction accuracy from 74% to 91%. The part I'm actually proud of isn't the number. I took the regression result to a plant scientist and asked whether the four-hour humidity window was biologically real or whether I'd just found a pattern in noise. It was real. I also graded object-oriented programming for 50+ students a semester across three semesters, and mentored 160 students in data structures before that.

These days I work on backend systems and applied AI retrieval. The most recent one is a support triage agent: BM25 and dense embeddings fused with reciprocal rank fusion, LLM reranking, and a verifier stage that rejects answers the retrieved evidence doesn't actually support. It runs deterministically — byte-identical output across rebuilds — and falls back to rules-only when no model is available, because I wrote most of it without an API key. One thing I've come to believe: you can usually get away with a predefined workflow instead of a full agent, and that saves you from chasing shiny objects.

Outside the terminal I lift, keep a consistent routine, and cook for people. It's a simple way to step away from the screen and spend real time with the people around me.
`.trim()

type HighlightCard = {
  title: string
  body: string
}

const highlights: HighlightCard[] = [
  {
    title: "Academic & Mentorship",
    body: "3.93/4.0 GPA at UMD. Mentored 160 students in data structures, and graded object-oriented programming for 50+ students a semester.",
  },
  {
    title: "Industry Impact",
    body: "Cut search-suggestion latency from ~200ms to ~30ms per keystroke and API payload by 68%. Recipient of the “Tower of the Team” award at Infosys.",
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
          className="text-graphite/80 text-eyebrow font-medium uppercase mb-2 text-center md:text-left"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          About me
        </motion.p>
        <motion.h2
          id="about-heading"
          className="text-2xl md:text-4xl font-bold font-serif tracking-tight text-graphite mb-8 text-center md:text-left"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          I&rsquo;ve always considered myself a problem solver
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
          <div className="space-y-6">
            {aboutCopy.split("\n\n").map((para) => (
              <motion.p
                key={para.slice(0, 24)}
                className="text-ink/80 leading-relaxed"
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
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
                  "shadow-card p-6 md:p-7",
                  "transition-[transform,box-shadow] duration-200",
                  "hover:shadow-card-hover",
                  "focus-within:shadow-card-hover",
                  idx === 0
                    ? "bg-gradient-to-br from-amber-100/60 via-white/40 to-transparent"
                    : idx === 1
                      ? "bg-gradient-to-br from-emerald-100/60 via-white/40 to-transparent"
                      : "bg-gradient-to-br from-indigo-100/60 via-white/40 to-transparent",
                ].join(" ")}
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                whileHover={reducedMotion ? undefined : { y: -2 }}
                viewport={{ once: true, amount: "some" }}
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
                    <p className="mt-1 text-sm leading-relaxed text-ink/80">
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
