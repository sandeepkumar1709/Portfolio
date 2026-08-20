import type { ReactNode } from "react"

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  variant?: "linen" | "sand"
}

/**
 * Every section labels itself from the heading it renders (`${id}-heading`),
 * which is what exposes it as a `region` landmark — an eight-screen page is
 * unskimmable without them.
 *
 * `100svh` rather than `100vh`: on mobile `vh` resolves against the *large*
 * viewport, so each "full-viewport" section was ~15% taller than the visible
 * area. `dvh` would be wrong here — eight stacked dvh sections would move the
 * document height ~480px during a single scroll gesture.
 */
export function Section({ id, children, className = "", variant = "linen" }: SectionProps) {
  const backgroundClass = variant === "sand" ? "bg-sand" : "bg-linen"

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`min-h-vscreen scroll-mt-16 flex items-center px-4 sm:px-6 py-24 ${backgroundClass} ${className}`.trim()}
    >
      <div className="w-full max-w-5xl mx-auto">{children}</div>
    </section>
  )
}
