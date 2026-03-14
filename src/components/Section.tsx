import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 ${className}`.trim()}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      {title && (
        <h2
          id={`${id}-heading`}
          className="text-2xl font-semibold text-neutral-900 mb-8"
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
