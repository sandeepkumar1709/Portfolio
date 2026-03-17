import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-xl border border-neutral-200 p-5 shadow-sm transition-colors transition-transform transition-shadow duration-150 hover:shadow-md hover:-translate-y-0.5 focus-within:shadow-md focus-within:-translate-y-0.5 ${className}`.trim()}
    >
      {children}
    </article>
  )
}
