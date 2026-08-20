import { Component, type ErrorInfo, type ReactNode } from "react"
import { FOCUS_RING, TAP_TARGET } from "../lib/styles"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * `Suspense` handles pending, never rejected. Without a boundary, a lazy chunk
 * that 404s after a redeploy throws past the root and React unmounts the whole
 * tree — a blank white page with no navbar, no footer, and no way back.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled render error:", error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <main id="main" tabIndex={-1} className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-graphite mb-3">
            Something went wrong
          </h1>
          <p className="text-ink/80 mb-6">
            This usually means the page was updated while you had it open.
            Reloading should fix it.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className={`${TAP_TARGET} inline-flex items-center justify-center px-8 rounded-full bg-graphite text-white text-sm font-medium hover:bg-graphiteHover ${FOCUS_RING}`}
          >
            Reload the page
          </button>
        </div>
      </main>
    )
  }
}
