import { Link } from "react-router-dom"
import { Section } from "../components/Section"
import { Card } from "../components/Card"
import { projects } from "../data/projects"

interface ProjectsProps {
  variant?: "linen" | "sand"
}

export function Projects({ variant = "linen" }: ProjectsProps) {
  return (
    <Section id="projects" title="Projects" variant={variant}>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
        {projects.map((project) => (
          <li key={project.slug}>
            <Card>
              <h3 className="font-semibold text-neutral-900 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                {project.oneLiner}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techTags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded bg-neutral-100 text-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/projects/${project.slug}`}
                className="text-sm font-medium text-graphite hover:text-graphiteHover focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen rounded underline underline-offset-2"
              >
                View project
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
