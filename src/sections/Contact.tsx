import { Section } from "../components/Section"
import { site } from "../data/site"

const linkClass =
  "inline-flex items-center min-h-[44px] text-graphite/80 hover:text-graphite focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen rounded underline underline-offset-2"

interface ContactProps {
  variant?: "linen" | "sand"
}

export function Contact({ variant = "linen" }: ContactProps) {
  return (
    <Section id="contact" title="Contact" variant={variant}>
      <ul className="space-y-4 list-none">
        <li>
          <a href={`mailto:${site.contact.email}`} className={linkClass}>
            {site.contact.email}
          </a>
        </li>
        <li>
          <a
            href={site.contact.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
        </li>
        <li>
          <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className={linkClass}>
            {site.contact.phone}
          </a>
        </li>
      </ul>
    </Section>
  )
}
