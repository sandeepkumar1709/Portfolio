import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary"
  as?: "button" | "a"
  href?: string
}

export function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-8 py-3 rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
  const variants = {
    primary:
      "bg-graphite text-white hover:bg-graphiteHover focus-visible:ring-graphite focus-visible:ring-offset-linen",
    secondary:
      "bg-transparent text-graphite border border-graphite/40 hover:bg-graphite/5 focus-visible:ring-graphite focus-visible:ring-offset-linen",
  }
  const combined = `${base} ${variants[variant]} ${className}`.trim()

  if (as === "a" && href !== undefined) {
    return (
      <a href={href} className={combined} {...(props as unknown as Record<string, unknown>)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={combined} {...props}>
      {children}
    </button>
  )
}
