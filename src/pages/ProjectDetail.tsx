import { useParams, Link } from "react-router-dom"
import { getProjectBySlug } from "../data/projects"
import { useDocumentMeta } from "../hooks/useDocumentMeta"
import { FOCUS_RING } from "../lib/styles"
import NotFound from "./NotFound"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  // Per-route title and description. Without this every project page shared
  // the home page's title in search results and browser history.
  useDocumentMeta(
    project ? `${project.name} — Sandeep Poloju` : "Project not found | Sandeep Poloju",
    project?.oneLiner
  )

  if (!project) return <NotFound kind="project" />

  return (
    <main id="main" tabIndex={-1} className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link
        to="/#projects"
        className={`inline-flex items-center min-h-[44px] text-graphite/70 hover:text-graphite text-sm rounded-full mb-8 ${FOCUS_RING}`}
      >
        ← Back to projects
      </Link>

      <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-graphite mb-3 text-balance">
        {project.name}
      </h1>
      <p className="text-lg text-ink/80 mb-8 max-w-[62ch]">{project.oneLiner}</p>

      <div className="space-y-8 text-ink/80">
        {project.contextProblem && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-graphite mb-2">
              Context / Problem
            </h2>
            <p>{project.contextProblem}</p>
          </section>
        )}

        {project.role && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-graphite mb-2">
              My role
            </h2>
            <p>{project.role}</p>
          </section>
        )}

        {project.architecture && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-graphite mb-2">
              Architecture overview
            </h2>
            <ol role="list" className="space-y-1.5">
              {project.architecture.split("→").map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden className="select-none text-graphite/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step.trim().replace(/\.$/, "")}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {project.contributions && project.contributions.length > 0 && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-graphite mb-2">
              Key contributions & metrics
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {project.contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        {(project.techStack || project.techTags.length > 0) && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-graphite mb-2">
              Tech stack
            </h2>
            <p>{project.techStack || project.techTags.join(", ")}</p>
          </section>
        )}

        {project.improvements && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-graphite mb-2">
              What I'd improve
            </h2>
            <p>{project.improvements}</p>
          </section>
        )}

        {project.achievements && project.achievements.length > 0 && (
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-graphite mb-2">
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
            className={`inline-flex items-center min-h-[44px] text-graphite/80 hover:text-graphite underline underline-offset-4 rounded-full ${FOCUS_RING}`}
          >
            View on GitHub
          </a>
        </p>
      )}
    </main>
  )
}
