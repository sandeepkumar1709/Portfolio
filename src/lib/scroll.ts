/**
 * Single entry point for programmatic scrolling.
 *
 * `behavior: "instant"` matters: `"auto"` defers to the element's computed
 * `scroll-behavior`, which is `smooth` globally in index.css — so "auto" would
 * still animate for a reduced-motion visitor.
 */
export function scrollToId(id: string, reducedMotion: boolean): boolean {
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" })
  return true
}

export function scrollToTop(reducedMotion: boolean): void {
  window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" })
}
