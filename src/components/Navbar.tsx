import { useState, useCallback } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useReducedMotion } from "../hooks/useReducedMotion"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const

function scrollToSection(href: string, reducedMotion: boolean) {
  const id = href.slice(1)
  const el = id ? document.getElementById(id) : null
  if (el) {
    el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })
  }
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (location.pathname !== "/") {
        e.preventDefault()
        navigate(href === "#" ? "/" : `/${href}`)
        setMobileOpen(false)
      } else {
        e.preventDefault()
        scrollToSection(href, reducedMotion)
        setMobileOpen(false)
      }
    },
    [reducedMotion, location.pathname, navigate]
  )

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a
          href="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" })
            }
            setMobileOpen(false)
          }}
          className="text-lg font-semibold text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 rounded"
        >
          SP
        </a>

        <nav aria-label="Main navigation">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-3 focus:py-2 focus:bg-neutral-800 focus:text-white focus:rounded"
          >
            Skip to main content
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3 py-2 text-neutral-600 hover:text-neutral-900 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              id="menu-button"
              onClick={() => setMobileOpen((o) => !o)}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 text-neutral-700"
            >
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile menu"
        className={`md:hidden border-t border-neutral-200 bg-white ${mobileOpen ? "block" : "hidden"}`}
      >
        <ul className="px-4 py-3 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="min-h-[44px] flex items-center px-3 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-inset"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
