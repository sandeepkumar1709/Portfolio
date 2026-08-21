import { useState, useCallback, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { site } from "../data/site"
import { LiveClock } from "./LiveClock"
import { useReducedMotion } from "../hooks/useReducedMotion"
import { scrollToId, scrollToTop } from "../lib/scroll"
import { FOCUS_RING, TAP_TARGET } from "../lib/styles"
import { trackEvent } from "../lib/analytics"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname, hash } = useLocation()
  const reducedMotion = useReducedMotion()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => {
    setMobileOpen(false)
    // The panel is display:none when closed, which would destroy focus if it
    // still lived on one of the links. Put it back on the trigger.
    menuButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [mobileOpen, closeMenu])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()

      // Always write the hash. That is what makes sections shareable, gives
      // Back something to return to, and lets the active-nav state resolve.
      if (pathname === "/" && hash === href) {
        // Same target: no location change would fire, so scroll directly.
        scrollToId(href.slice(1), reducedMotion)
      } else {
        navigate(`/${href}`)
      }

      setMobileOpen(false)
    },
    [navigate, pathname, hash, reducedMotion]
  )

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-black/5 bg-linen/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            if (pathname === "/") {
              scrollToTop(reducedMotion)
            } else {
              navigate("/")
            }
            setMobileOpen(false)
          }}
          aria-label="Sandeep Poloju, back to top"
          className={`${TAP_TARGET} -ml-2 inline-flex items-center justify-center px-2 font-serif text-base font-bold tracking-tight text-graphite rounded-full ${FOCUS_RING}`}
        >
          SP
        </a>

        {/* Desktop nav moves in at lg, not md: at 768px the seven labels plus
            the clock and the CTA need ~833px and only have 720px. */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-4">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === "/" && hash === href
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    aria-current={active ? "true" : undefined}
                    className={`${TAP_TARGET} inline-flex items-center justify-center px-3 py-2 rounded-full text-sm font-medium ${FOCUS_RING} ${
                      active ? "text-graphite bg-black/5" : "text-graphite/70 hover:text-graphite"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          <LiveClock />

          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("resume_open", { placement: "navbar" })}
            className={`${TAP_TARGET} inline-flex items-center justify-center px-5 rounded-full bg-graphite text-white text-sm font-medium hover:bg-graphiteHover ${FOCUS_RING}`}
          >
            Resume
          </a>
        </nav>

        {/* Mobile: keep the resume reachable without opening the menu — it is
            the one action a recruiter came for. */}
        <div className="lg:hidden flex items-center gap-1">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("resume_open", { placement: "navbar_mobile" })}
            className={`${TAP_TARGET} inline-flex items-center justify-center px-4 rounded-full bg-graphite text-white text-sm font-medium hover:bg-graphiteHover ${FOCUS_RING}`}
          >
            Resume
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            id="menu-button"
            onClick={() => setMobileOpen((o) => !o)}
            className={`${TAP_TARGET} inline-flex items-center justify-center rounded-full text-graphite ${FOCUS_RING}`}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* A disclosure, not a dialog: it does not cover the page, so claiming
          role="dialog" promised modal behaviour that never existed. */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`lg:hidden border-t border-black/5 bg-linen/95 backdrop-blur-md ${mobileOpen ? "block" : "hidden"}`}
      >
        <ul className="px-4 py-3 space-y-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === "/" && hash === href
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  aria-current={active ? "true" : undefined}
                  className={`min-h-[44px] flex items-center px-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-inset ${
                    active ? "text-graphite font-medium bg-black/5" : "text-graphite/80 hover:text-graphite hover:bg-black/5"
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
