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

Right now I'm at Acculevel, and this is the stage of my career I'm enjoying most. It's complete engineering: data pipelines, automation tools, full-stack applications, AI automations. Most of it starts the same way, by sitting with a business requirement until I actually understand it, then turning it into software that takes manual work off someone's plate. That translation is the part I like. It ranges from a review-attribution service that decides commissions, to an MCP server that lets people query our profile and search data directly, to a daily pipeline that screens job-site photos before they get published. A fair amount is unglamorous infrastructure work, and I've come to like that too: the outage you diagnose by first ruling out your own change from the day before.

Before that I spent close to three years at Infosys on a knowledge graph platform for a Fortune 500 financial services client. We integrated LLMs so it could translate natural English questions into Cypher queries, which made complex graph data usable by people who don't write queries, and lifted NLU accuracy from 85% to 92%.

Clean boundaries matter more to me than clever code. On that platform our graph visualization dependency turned out to be abandoned upstream, so I escalated it as a business risk; a senior engineer designed the abstraction layer that decoupled us from it, and I implemented it across the components that talked to it. I also spent a long stretch inside NGINX's rewrite module, which is basically a black box with no debugger, so you're guessing until you sit down with the docs. That taught me more about diagnosis than any tutorial has.

At Maryland I finished an M.Eng in Software Engineering with a 3.93 GPA and worked as a research assistant on a plant disease prediction model. Feature selection was manual trial and error and the accuracy had stalled, so I implemented stepwise regression to choose features statistically and checked the result with the plant scientist on our team. Accuracy improved by 17 percentage points.

Away from the terminal I lift, keep a consistent routine, and cook for people. It's a simple way to step away from the screen and spend real time with the people around me.
`.trim()

type HighlightCard = {
  title: string
  body: string
}

const highlights: HighlightCard[] = [
  {
    title: "Now, at Acculevel",
    body: "Data pipelines, automation and full-stack services on Azure and Databricks. Replaced an untestable workflow that decided commissions, and cut 25 hours a week of manual publishing.",
  },
  {
    title: "Engineering impact",
    body: "At Infosys: cut API payload 68% (465KB to 148KB) and search-suggestion latency to ~30ms per keystroke. Recipient of the “Tower of the Team” award.",
  },
  {
    title: "Academic & mentorship",
    body: "3.93/4.0 GPA at UMD. 500+ students supported: 160 mentored in data structures, and roughly 360 across three semesters of object-oriented programming.",
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
          How I work
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
