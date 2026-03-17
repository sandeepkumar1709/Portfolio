import { Section } from "../components/Section"
import { education } from "../data/education"
import { Building2, ChevronDown } from "lucide-react"

interface EducationProps {
  variant?: "linen" | "sand"
}

export function Education({ variant = "linen" }: EducationProps) {
  return (
    <Section id="education" variant={variant}>
      <p className="text-graphite/80 text-[11px] font-medium tracking-[0.32em] uppercase mb-2 text-center md:text-left">
        Education
      </p>
      <h2 className="text-2xl md:text-4xl font-bold font-[&quot;Playfair Display&quot;,_serif] tracking-tight text-graphite mb-10 text-center md:text-left">
        Academic background
      </h2>

      <div className="relative">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-black/10" aria-hidden />

        <ul className="space-y-10 list-none">
          {education.map((entry, idx) => {
            const dot = idx === 0 ? "bg-emerald-400" : "bg-indigo-400"

            return (
              <li key={`${entry.school}-${entry.period}-${entry.degree}`} className="relative pl-10">
                <span
                  className={["absolute left-0 top-2 h-3 w-3 rounded-full ring-4 ring-linen", dot].join(" ")}
                  aria-hidden
                />

                <div className="rounded-2xl border border-black/5 bg-white/50 shadow-[0_1px_0_rgba(0,0,0,0.02)] p-6 md:p-7">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <p className="text-xs text-graphite/70">{entry.period}</p>
                      <p className="mt-2 text-sm md:text-base font-semibold tracking-tight text-graphite">
                        {entry.degree}
                      </p>
                      <p className="mt-2 inline-flex items-center gap-2 text-sm text-graphite/70">
                        <Building2 className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                        <span className="truncate">{entry.school}</span>
                      </p>
                    </div>

                    <div className="md:pt-6 md:text-right">
                      <p className="text-sm font-semibold text-emerald-700">{entry.gpa}</p>
                    </div>
                  </div>

                  {entry.courses && entry.courses.length > 0 && (
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
                        <ul className="flex flex-wrap gap-2 list-none">
                          {entry.courses.map((c) => (
                            <li
                              key={c}
                              className="px-3 py-1 rounded-full bg-white/70 border border-black/5 text-[11px] text-ink whitespace-nowrap"
                            >
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  )}

                  {entry.highlights ? (
                    <p className="mt-5 text-sm text-ink/80">{entry.highlights}</p>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
