import { Section } from "../components/Section"
import { site } from "../data/site"

const linkClass =
  "inline-flex items-center min-h-[44px] text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 rounded underline underline-offset-2"

export function Contact() {
  return (
    <Section id="contact" title="Contact">
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
