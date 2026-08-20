import { Section } from "../components/Section"
import { motion, useReducedMotion } from "framer-motion"
import { BadgeCheck, ExternalLink } from "lucide-react"
import { certifications } from "../data/certifications"

interface CertificationsProps {
  variant?: "linen" | "sand"
}

export function Certifications({ variant = "linen" }: CertificationsProps) {
  const reducedMotion = useReducedMotion()
  if (!certifications.length) return null

  const styleByIssuer: Record<string, { bg: string }> = {
    Neo4j: { bg: "bg-gradient-to-br from-emerald-100/70 via-white/40 to-transparent" },
    Coursera: { bg: "bg-gradient-to-br from-indigo-100/70 via-white/40 to-transparent" },
    HackerRank: { bg: "bg-gradient-to-br from-amber-100/70 via-white/40 to-transparent" },
    IBM: { bg: "bg-gradient-to-br from-sky-100/70 via-white/40 to-transparent" },
    "Smart Interviews": { bg: "bg-gradient-to-br from-violet-100/60 via-white/40 to-transparent" },
  }

  const styleByType: Record<string, { bg: string }> = {
    certification: { bg: "bg-gradient-to-br from-stone-100/70 via-white/40 to-transparent" },
    license: { bg: "bg-gradient-to-br from-amber-100/60 via-white/40 to-transparent" },
    award: { bg: "bg-gradient-to-br from-slate-100/70 via-white/40 to-transparent" },
  }

  return (
    <Section id="certifications" variant={variant}>
      <motion.p
        className="text-graphite/80 text-eyebrow font-medium uppercase mb-2 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        Certifications
      </motion.p>
      <motion.h2
        id="certifications-heading"
        className="text-2xl md:text-4xl font-bold font-serif tracking-tight text-graphite mb-4 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        Credentials
      </motion.h2>
      <motion.p
        className="text-sm text-ink/80 max-w-2xl mb-10 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Learning and professional credentials.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5">
        {certifications.map((cert, idx) => (
          <motion.article
            key={`${cert.name}-${cert.issuer}`}
            className={[
              "relative overflow-hidden rounded-2xl border border-black/5",
              "shadow-card p-6 md:p-7",
              "transition-[transform,box-shadow] duration-200",
              "hover:shadow-card-hover",
              "focus-within:shadow-card-hover",
              (styleByIssuer[cert.issuer]?.bg ??
                styleByType[cert.type]?.bg ??
                "bg-gradient-to-br from-stone-100/70 via-white/40 to-transparent"),
              // Slight bento variety: first card gets extra space on wide screens.
              idx === 0 ? "xl:col-span-7" : "xl:col-span-5",
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
                <BadgeCheck className="h-4 w-4" strokeWidth={1.6} />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold tracking-tight text-graphite">
                  {cert.name}
                </h3>
                <p className="mt-0.5 text-xs text-ink/70">
                  {cert.issuer} · Issued {cert.issued}
                </p>

                {(cert.credentialId || (cert.skills && cert.skills.length > 0)) && (
                  <div className="mt-4 space-y-2">
                    {cert.credentialId && (
                      <p className="text-xs text-ink/70">
                        <span className="font-medium text-graphite/80">Credential ID:</span> {cert.credentialId}
                      </p>
                    )}
                    {cert.skills && cert.skills.length > 0 && (
                      <ul className="flex flex-wrap gap-2 list-none" role="list">
                        {cert.skills.map((s) => (
                          <li
                            key={s}
                            className="px-3 py-1 rounded-full bg-white/70 border border-black/5 text-eyebrow text-ink whitespace-nowrap"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {cert.credentialUrl && (
                  <p className="mt-5">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-graphite hover:text-graphiteHover underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen rounded"
                    >
                      Show credential <ExternalLink className="h-4 w-4" strokeWidth={1.6} />
                    </a>
                  </p>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

    </Section>
  )
}

