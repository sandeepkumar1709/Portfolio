import { Section } from "../components/Section"
import { skills } from "../data/skills"

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-3">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2 list-none" role="list">
              {items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-800 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
