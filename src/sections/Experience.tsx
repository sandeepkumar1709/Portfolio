import { Section } from "../components/Section"
import { experience } from "../data/experience"

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200"
          aria-hidden
        />
        <ul className="space-y-10 list-none">
          {experience.map((entry) => (
            <li key={`${entry.organization}-${entry.period}`} className="relative pl-10">
              <span
                className="absolute left-0 w-4 h-4 rounded-full bg-neutral-300 border-2 border-white shadow-sm top-1"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-neutral-900">
                  {entry.role} · {entry.organization}
                </p>
                <p className="text-sm text-neutral-500 mb-2">{entry.period}</p>
                <ul className="list-disc list-inside text-neutral-700 space-y-1 text-sm">
                  {entry.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                {entry.stack && (
                  <p className="mt-2 text-xs text-neutral-500">{entry.stack}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
