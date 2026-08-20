import { Section } from "../components/Section"
import { education } from "../data/education"
import { achievements } from "../data/certifications"
import { Building2, ChevronDown } from "lucide-react"

interface EducationProps {
  variant?: "linen" | "sand"
}

export function Education({ variant = "linen" }: EducationProps) {
  return (
    <Section id="education" variant={variant}>
      <p className="text-graphite/80 text-eyebrow font-medium uppercase mb-2 text-center md:text-left">
        Education
      </p>
      <h2 id="education-heading" className="text-2xl md:text-4xl font-bold font-serif tracking-tight text-graphite mb-10 text-center md:text-left">
        Academic background
      </h2>

      <div className="relative">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-black/10" aria-hidden />

        <ul role="list" className="space-y-10 list-none">
          {education.map((entry, idx) => {
            const dot = idx === 0 ? "bg-graphite" : "bg-graphite/40"

            return (
              <li key={`${entry.school}-${entry.period}-${entry.degree}`} className="relative pl-10">
                <span
                  className={["absolute left-0 top-2 h-3 w-3 rounded-full ring-4 ring-linen", dot].join(" ")}
                  aria-hidden
                />

                <div className="rounded-2xl border border-black/5 bg-white/50 shadow-card p-6 md:p-7">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <p className="text-xs text-graphite/70">{entry.period}</p>
                      <h3 className="mt-2 text-sm md:text-base font-semibold tracking-tight text-graphite">
                        {entry.degree}
                      </h3>
                      <p className="mt-2 inline-flex items-center gap-2 text-sm text-graphite/70">
                        <Building2 className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                        <span className="truncate">{entry.school}</span>
                      </p>
                    </div>

                    <div className="md:pt-6 md:text-right">
                      <p className="text-sm font-semibold text-graphite">{entry.gpa}</p>
                    </div>
                  </div>

                  {entry.courses.length > 0 && (
                    <details className="mt-6 group">
                      <summary className="list-none cursor-pointer select-none rounded-full border border-black/5 bg-white/70 px-4 py-3 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen">
                        <span className="text-sm font-medium text-graphite">Academic Courses</span>
                        <ChevronDown
                          className="h-4 w-4 text-graphite/70 transition-transform duration-200 group-open:rotate-180"
                          strokeWidth={1.8}
                          aria-hidden
                        />
                      </summary>

                      <div className="mt-4">
                        <ul role="list" className="flex flex-wrap gap-2 list-none">
                          {entry.courses.map((c) => (
                            <li
                              key={c}
                              className="px-3 py-1 rounded-full bg-white/70 border border-black/5 text-eyebrow text-ink"
                            >
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      {achievements.length > 0 ? (
        <div className="mt-10 rounded-2xl border border-black/5 bg-white/60 p-6 md:p-7">
          <h3 className="text-sm font-semibold tracking-tight text-graphite mb-3">Achievements</h3>
          <ul role="list" className="space-y-2 list-none">
            {achievements.map((a) => (
              <li key={a.title} className="text-sm text-ink/80">
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
      ) : null}
    </Section>
  )
}
