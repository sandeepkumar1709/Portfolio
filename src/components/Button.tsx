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
      "bg-[#2D3027] text-white hover:bg-[#1F211B] focus-visible:ring-[#2D3027]",
    secondary:
      "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 focus-visible:ring-neutral-400 border border-neutral-300",
  }
  const combined = `${base} ${variants[variant]} ${className}`.trim()

  if (as === "a" && href !== undefined) {
    return (
      <a
        href={href}
        className={combined}
        style={{ backgroundColor: "#2D3027" }}
        {...(props as unknown as Record<string, unknown>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={combined}
      style={{ backgroundColor: "#2D3027" }}
      {...props}
    >
      {children}
    </button>
  )
}
