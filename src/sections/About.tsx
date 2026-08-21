import { Section } from "../components/Section"
import { motion, useReducedMotion } from "framer-motion"

/**
 * Register target: his spoken voice, not his written one. He uses contractions
 * constantly when talking and almost never when writing formally, and his own
 * bullet rule is "what you did -> how you did -> what is the result". Mechanism
 * before metric throughout: the one time a senior engineer read a bare
 * percentage of his aloud, the reaction was "that doesn't mean a whole lot to me".
 *
 * No em dashes anywhere in this copy, by his instruction. Use commas, colons,
 * semicolons or a full stop instead.
 */
const aboutCopy = `
I've always considered myself a problem solver. I like breaking down complex systems and building things that work in the real world.

Right now I'm at Acculevel, and this is the stage of my career I've enjoyed most. It's complete engineering: data pipelines, automation tools, full-stack applications, AI automations. Most of it starts the same way, by sitting with a business requirement until I actually understand it, then turning it into software that takes manual work off someone's plate. That translation is the part I like.

The main system is a review-attribution service on Azure that replaced a low-code workflow nobody could test, and which decided salesperson commissions. It closes the whole loop on its own: appointment, QR code, customer scan, Google review, advisor credit, with nobody in the middle. The part I'd actually talk about is choosing what to match on. Avatar image IDs looked like the obvious key until I measured them and found they were split across two Google namespaces, where display names were present on all 5,503 real reviews. An avatar-first matcher would have missed 2,053 of them and failed the first real payout on day one. That is the kind of thing measurement tells you and intuition does not.

Before that I spent close to three years at Infosys on a knowledge graph platform for Fortune 500 financial services clients. The work I'd point to first is the search layer. We integrated LLMs so the platform could translate natural English questions into Cypher queries, which made complex graph data accessible to non-technical users, and NLU accuracy went from 85% to 92%. The service itself was slow and barely documented, so I read the codebase and talked to whoever had touched it. The bottleneck was an intermediate step translating GraphQL into Cypher before anything reached Neo4j. I generated Cypher straight from the search service instead and skipped that hop, which took over 40% off the response time.

That shaped how I write software. Clean boundaries matter more than clever code, so I put an adapter boundary around the graph visualization module and the rendering implementation could then be swapped without touching a single caller. I also spent a long stretch inside NGINX's rewrite module, which gives you no real way to trace what it is doing. You are guessing until you go and read the source. That taught me more about diagnosis than any tutorial has.

At Maryland I finished an M.Eng in Software Engineering with a 3.93 GPA and worked as a research assistant on a plant disease prediction model. We had dozens of possible climate features and were picking them by trial and error, which was slow and had stalled the model's accuracy. I implemented stepwise regression in Python to select them statistically instead, then sat down with the plant scientist on our team to check the output against real biology. The features the algorithm kept, a four-hour humidity window and leaf wetness duration, were the ones that genuinely drive outbreaks. Accuracy improved by 17 percentage points. I also graded object-oriented programming for 50+ students a semester across three semesters, and mentored 160 students in data structures before that.

Outside of work I build retrieval and agent systems, mostly with LangGraph and LangChain. The most recent is a support triage agent: BM25 and dense embeddings fused with reciprocal rank fusion, an LLM rerank pass, and a verifier stage that rejects answers the retrieved evidence doesn't actually support. It runs deterministically, producing byte-identical output across rebuilds, and falls back to rules-only when no model is available, because I wrote most of it without an API key. One thing I've come to believe: you can usually get away with a predefined workflow instead of a full agent, and that saves you from chasing shiny objects.

Away from the terminal I lift, keep a consistent routine, and cook for people. It's a simple way to step away from the screen and spend real time with the people around me.
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
          className="text-graphite/80 text-eyebrow font-medium uppercase mb-2"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          About me
        </motion.p>
        <motion.h2
          id="about-heading"
          className="text-2xl md:text-4xl font-bold font-serif tracking-tight text-graphite mb-8 text-balance max-w-[34ch]"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          I&rsquo;ve always considered myself a problem solver
        </motion.h2>

        {/* Cards sit above the prose (order-first) rather than in a side
            column. The copy is long enough now that a 0.85fr sidebar left a
            tall band of dead space beside it, and the two columns disagreed
            about where the eye should start. */}
        <div className="flex flex-col gap-10 lg:gap-12">
          <div className="space-y-6 max-w-[68ch]">
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

          <div className="order-first grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
