import { useEffect } from "react"

const DEFAULT_TITLE = "Sandeep Poloju | Backend & AI Infrastructure Engineer"

/**
 * Per-route title and meta description.
 *
 * Note this only reaches clients that execute JS. Link-unfurl bots read the
 * static tags in index.html, so those remain the source of truth for sharing.
 */
export function useDocumentMeta(title: string, description?: string): void {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE

    if (!description) return
    const tag = document.querySelector('meta[name="description"]')
    if (!tag) return
    const previous = tag.getAttribute("content")
    tag.setAttribute("content", description)
    return () => {
      if (previous !== null) tag.setAttribute("content", previous)
    }
  }, [title, description])
}
