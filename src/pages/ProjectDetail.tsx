import { useParams, Link } from "react-router-dom"
import { getProjectBySlug } from "../data/projects"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <main id="main" className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-graphite/70">Project not found.</p>
        <Link
          to="/"
          className="mt-4 inline-block text-graphite/80 hover:text-graphite underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen rounded"
        >
          Back to home
        </Link>
      </main>
    )
  }

  return (
    <main id="main" className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link
        to="/#projects"
        className="inline-flex items-center min-h-[44px] text-graphite/70 hover:text-graphite text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen rounded mb-8"
      >
        ← Back to projects
      </Link>

      <h1 className="text-2xl font-bold text-graphite mb-2">{project.name}</h1>
      <p className="text-graphite/70 mb-6">{project.oneLiner}</p>

      <div className="space-y-8 text-ink/80">
        {project.contextProblem && (
          <section>
            <h2 className="text-lg font-semibold text-graphite mb-2">
              Context / Problem
            </h2>
            <p>{project.contextProblem}</p>
          </section>
        )}

        {project.role && (
          <section>
            <h2 className="text-lg font-semibold text-graphite mb-2">
              My role
            </h2>
            <p>{project.role}</p>
          </section>
        )}

        {project.architecture && (
          <section>
            <h2 className="text-lg font-semibold text-graphite mb-2">
              Architecture overview
            </h2>
            <p>{project.architecture}</p>
          </section>
        )}

        {project.contributions && project.contributions.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-graphite mb-2">
              Key contributions & metrics
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {project.contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        {(project.techStack || project.techTags?.length) && (
          <section>
            <h2 className="text-lg font-semibold text-graphite mb-2">
              Tech stack
            </h2>
            <p>{project.techStack || project.techTags?.join(", ")}</p>
          </section>
        )}

        {project.improvements && (
          <section>
            <h2 className="text-lg font-semibold text-graphite mb-2">
              What I'd improve
            </h2>
            <p>{project.improvements}</p>
          </section>
        )}

        {project.achievements && project.achievements.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-graphite mb-2">
              Achievements
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {project.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {project.href && (
        <p className="mt-8">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-graphite/80 hover:text-graphite underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen rounded"
          >
            View on GitHub
          </a>
        </p>
      )}
    </main>
  )
}
