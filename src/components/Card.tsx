import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md ${className}`.trim()}
    >
      {children}
    </article>
  )
}
