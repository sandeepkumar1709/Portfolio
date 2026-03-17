import { useState, useCallback } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { site } from "../data/site"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname, hash } = location

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()

      // If we're already on the home page, scroll directly to the section
      if (pathname === "/") {
        const id = href.startsWith("#") ? href.slice(1) : href
        const el = id ? document.getElementById(id) : null
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        } else {
          // Fallback: update hash so Home effect can handle it if needed
          navigate(href === "#" ? "/" : `/${href}`)
        }
      } else {
        // If we're on a different route, navigate so Home can handle the scroll on mount
        navigate(href === "#" ? "/" : `/${href}`)
      }

      setMobileOpen(false)
    },
    [navigate, pathname]
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            } else {
              e.preventDefault()
              navigate("/")
            }
            setMobileOpen(false)
          }}
          className="text-sm font-semibold tracking-tight text-[#2D3027] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3027] focus-visible:ring-offset-2 rounded-full"
        >
          SP
        </a>

        <nav aria-label="Main navigation" className="flex items-center gap-4">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-3 focus:py-2 focus:bg-neutral-800 focus:text-white focus:rounded"
          >
            Skip to main content
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                {/*
                  Basic active state: highlight when on home route
                  and the current hash matches the link target.
                */}
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3 py-2 rounded-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3027] focus-visible:ring-offset-2 ${
                    pathname === "/" && hash === href
                      ? "text-[#2D3027]"
                      : "text-[#2D3027]/70 hover:text-[#2D3027]"
                  }`.trim()}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={site.resumeUrl}
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#2D3027] text-white text-sm font-medium hover:bg-[#1F211B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3027] focus-visible:ring-offset-2"
          >
            Resume
          </a>

          <div className="md:hidden flex items-center gap-2">
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
        className={`md:hidden border-t border-neutral-200 ${mobileOpen ? "block" : "hidden"}`}
      >
        <ul className="px-4 py-3 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`min-h-[44px] flex items-center px-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-inset ${
                  pathname === "/" && hash === href
                    ? "text-neutral-900 font-medium bg-neutral-50"
                    : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                }`.trim()}
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
