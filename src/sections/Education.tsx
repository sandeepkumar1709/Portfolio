import { Section } from "../components/Section"
import { education } from "../data/education"

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-8 list-none">
        {education.map((entry) => (
          <li key={`${entry.school}-${entry.period}`}>
            <p className="font-semibold text-neutral-900">{entry.degree}</p>
            <p className="text-neutral-700">{entry.school}</p>
            <p className="text-sm text-neutral-500">
              {entry.period} · {entry.gpa}
            </p>
            {entry.highlights && (
              <p className="mt-1 text-sm text-neutral-600">{entry.highlights}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
