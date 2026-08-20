import { Link } from "react-router-dom"
import { useDocumentMeta } from "../hooks/useDocumentMeta"
import { FOCUS_RING, TAP_TARGET } from "../lib/styles"

interface NotFoundProps {
  /** Shown when a project slug resolved to nothing, vs. an unknown route. */
  kind?: "route" | "project"
}

export default function NotFound({ kind = "route" }: NotFoundProps) {
  const isProject = kind === "project"
  useDocumentMeta(
    `${isProject ? "Project not found" : "Page not found"} | Sandeep Poloju`
  )

  return (
    <main id="main" tabIndex={-1} className="min-h-[70vh] flex items-center px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto py-16">
        <p className="font-mono text-eyebrow font-medium uppercase text-graphite/70 mb-2">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-graphite mb-4">
          {isProject ? "That project doesn't exist" : "That page doesn't exist"}
        </h1>
        <p className="text-ink/80 max-w-prose mb-8">
          The link may be out of date. Everything is one click away from here.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/#projects"
            className={`${TAP_TARGET} inline-flex items-center justify-center px-8 rounded-full bg-graphite text-white text-sm font-medium hover:bg-graphiteHover ${FOCUS_RING}`}
          >
            Browse all projects
          </Link>
          <Link
            to="/"
            className={`${TAP_TARGET} inline-flex items-center justify-center px-8 rounded-full border border-graphite/40 text-graphite text-sm font-medium hover:bg-graphite/5 ${FOCUS_RING}`}
          >
            Back to home
          </Link>
          <Link
            to="/#contact"
            className={`${TAP_TARGET} inline-flex items-center justify-center px-8 rounded-full border border-graphite/40 text-graphite text-sm font-medium hover:bg-graphite/5 ${FOCUS_RING}`}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  )
}
