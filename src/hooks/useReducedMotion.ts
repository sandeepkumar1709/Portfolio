import { useState, useEffect } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

/**
 * Seeded synchronously from matchMedia so the very first committed render is
 * already correct — initialising to `false` and fixing it in an effect meant a
 * reduced-motion visitor got one frame (and one smooth scroll) of motion.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const handler = () => setPrefersReducedMotion(mq.matches)
    handler()
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return prefersReducedMotion
}
