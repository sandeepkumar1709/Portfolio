import { Section } from "../components/Section"
import { site } from "../data/site"
import { motion, useReducedMotion } from "framer-motion"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

const contactItems: Array<{
  label: string
  value: string
  href: string
  icon: typeof Mail
  bg: string
  external?: boolean
}> = [
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: Mail,
    bg: "bg-gradient-to-br from-sky-100/70 via-white/40 to-transparent",
  },
  {
    label: "Phone",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
    icon: Phone,
    bg: "bg-gradient-to-br from-emerald-100/70 via-white/40 to-transparent",
  },
  {
    label: "LinkedIn",
    value: "sandeep-poloju",
    href: site.contact.linkedIn,
    external: true,
    icon: Linkedin,
    bg: "bg-gradient-to-br from-indigo-100/70 via-white/40 to-transparent",
  },
  {
    label: "GitHub",
    value: "sandeepkumar1709",
    href: site.contact.github,
    external: true,
    icon: Github,
    bg: "bg-gradient-to-br from-amber-100/70 via-white/40 to-transparent",
  },
]

const invitationCopy =
  "I am at my best when I am solving real problems or finding ways to improve how people work. If you have a vision you are building or just want to connect over a shared interest in software, fitness, or cooking, I would love to hear from you. I value good conversations and new perspectives. Let's connect."

interface ContactProps {
  variant?: "linen" | "sand"
}

export function Contact({ variant = "linen" }: ContactProps) {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="contact" variant={variant}>
      <motion.p
        className="text-graphite/80 text-[11px] font-medium tracking-[0.32em] uppercase mb-2 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        Get in touch
      </motion.p>
      <motion.h2
        className="text-2xl md:text-4xl font-bold font-[&quot;Playfair Display&quot;,_serif] tracking-tight text-graphite mb-4 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        Let&apos;s connect
      </motion.h2>
      <motion.p
        className="text-sm text-ink/80 max-w-2xl mb-10 text-center md:text-left leading-relaxed"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {invitationCopy}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {contactItems.map((item, idx) => {
          const Icon = item.icon
          const linkProps = item.external
            ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
            : {}

          return (
            <motion.a
              key={item.label}
              href={item.href}
              {...linkProps}
              className={[
                "group relative overflow-hidden rounded-2xl border border-black/5",
                "shadow-[0_1px_0_rgba(0,0,0,0.02)] p-6",
                "transition-transform transition-shadow duration-200",
                "hover:-translate-y-0.5 hover:shadow-md",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen rounded-2xl",
                item.bg,
              ].join(" ")}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: reducedMotion ? 0 : idx * 0.06,
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-12 border border-black/5 bg-white/20"
              />

              <div className="flex flex-col items-start gap-3">
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/60 ring-1 ring-black/5 text-graphite"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium tracking-wider uppercase text-graphite/70">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-graphite truncate group-hover:text-graphiteHover">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          )
        })}
      </div>

      <motion.div
        className="mt-10 text-center md:text-left"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <a
          href={`mailto:${site.contact.email}`}
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-graphite text-white text-sm font-medium hover:bg-graphiteHover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
        >
          <Mail className="h-4 w-4 mr-2" strokeWidth={1.6} />
          Send me an email
        </a>
      </motion.div>
    </Section>
  )
}

