import { site } from "../data/site"
import { FOCUS_RING } from "../lib/styles"
import { trackEvent } from "../lib/analytics"

const links = [
  {
    label: "Email",
    href: `mailto:${site.contact.email}`,
    external: false,
    onClick: () => trackEvent("email_click", { placement: "footer" }),
  },
  {
    label: "LinkedIn",
    href: site.contact.linkedIn,
    external: true,
    onClick: () => trackEvent("social_click", { network: "linkedin" as const, placement: "footer" as const }),
  },
  {
    label: "GitHub",
    href: site.contact.github,
    external: true,
    onClick: () => trackEvent("social_click", { network: "github" as const, placement: "footer" as const }),
  },
  {
    label: "Resume",
    href: site.resumeUrl,
    external: true,
    onClick: () => trackEvent("resume_open", { placement: "footer" }),
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    // The mobile pb-24 existed only to keep the credit line clear of the fixed
    // chat button. That widget is unmounted, so the padding goes back to normal.
    <footer className="border-t border-black/5 bg-linen px-4 sm:px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-graphite/80 order-2 sm:order-1">
          © {year} Sandeep Poloju
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 order-1 sm:order-2">
          {links.map(({ label, href, external, onClick }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={onClick}
                className={`inline-flex items-center min-h-[44px] text-sm font-medium text-graphite/80 hover:text-graphite underline underline-offset-4 rounded-full ${FOCUS_RING}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
