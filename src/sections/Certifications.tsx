import { Section } from "../components/Section"
import { motion, useReducedMotion } from "framer-motion"
import { BadgeCheck, ExternalLink } from "lucide-react"
import { certifications, achievements } from "../data/certifications"

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
        className="text-graphite/80 text-[11px] font-medium tracking-[0.32em] uppercase mb-2 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        Licenses & certifications
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-bold font-[&quot;Playfair Display&quot;,_serif] tracking-tight text-graphite mb-4 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        Credentials
      </motion.h2>
      <motion.p
        className="text-sm text-slate-700 max-w-2xl mb-10 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Verified learning and professional credentials that support the work I do.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5">
        {certifications.map((cert, idx) => (
          <motion.article
            key={`${cert.name}-${cert.issuer}`}
            className={[
              "relative overflow-hidden rounded-2xl border border-black/5",
              "shadow-[0_1px_0_rgba(0,0,0,0.02)] p-6 md:p-7",
              "transition-transform transition-shadow duration-200",
              "hover:-translate-y-0.5 hover:shadow-md",
              "focus-within:-translate-y-0.5 focus-within:shadow-md",
              (styleByIssuer[cert.issuer]?.bg ??
                styleByType[cert.type]?.bg ??
                "bg-gradient-to-br from-stone-100/70 via-white/40 to-transparent"),
              // Slight bento variety: first card gets extra space on wide screens.
              idx === 0 ? "xl:col-span-7" : "xl:col-span-5",
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
                <BadgeCheck className="h-4 w-4" strokeWidth={1.6} />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold tracking-tight text-graphite">
                  {cert.name}
                </h3>
                <p className="mt-0.5 text-xs text-[#1A1A1A]/70">
                  {cert.issuer} · Issued {cert.issued}
                  {cert.expires ? ` · Expires ${cert.expires}` : "" }
                </p>

                {(cert.credentialId || cert.skills?.length) && (
                  <div className="mt-4 space-y-2">
                    {cert.credentialId && (
                      <p className="text-xs text-[#1A1A1A]/70">
                        <span className="font-medium text-graphite/80">Credential ID:</span> {cert.credentialId}
                      </p>
                    )}
                    {cert.skills && cert.skills.length > 0 && (
                      <ul className="flex flex-wrap gap-2 list-none" role="list">
                        {cert.skills.map((s) => (
                          <li
                            key={s}
                            className="px-3 py-1 rounded-full bg-white/70 border border-black/5 text-[11px] text-ink whitespace-nowrap"
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

      {achievements.length > 0 && (
        <div className="mt-12">
          <motion.h3
            className="text-sm font-semibold tracking-tight text-graphite mb-3"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            Achievements
          </motion.h3>
          <ul className="space-y-2 list-none">
            {achievements.map((a) => (
              <li key={a.title} className="text-sm text-[#1A1A1A]/80">
                <span className="font-medium text-graphite">{a.title}:</span> {a.detail}
                {a.href ? (
                  <>
                    {" "}
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-graphite underline underline-offset-4 hover:text-graphiteHover"
                    >
                      Link
                    </a>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  )
}

