import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
  className?: string
  variant?: "linen" | "sand"
}

export function Section({ id, title, children, className = "", variant = "linen" }: SectionProps) {
  const backgroundClass = variant === "sand" ? "bg-[#FAF9F2]" : "bg-[#FDFCF0]"

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center px-4 sm:px-6 ${backgroundClass} ${className}`.trim()}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div className="w-full max-w-5xl mx-auto">
        {title && (
          <h2
            id={`${id}-heading`}
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-8"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
