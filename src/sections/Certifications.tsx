import { Section } from "../components/Section"
import { Card } from "../components/Card"
import { certifications } from "../data/certifications"

interface CertificationsProps {
  variant?: "linen" | "sand"
}

export function Certifications({ variant = "linen" }: CertificationsProps) {
  if (!certifications.length) return null

  return (
    <Section id="certifications" title="Certifications" variant={variant}>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none">
        {certifications.map((cert) => (
          <li key={`${cert.name}-${cert.issuer}`}>
            <Card>
              <h3 className="font-semibold text-neutral-900 mb-1">{cert.name}</h3>
              <p className="text-sm text-neutral-600">
                {cert.issuer} · {cert.date}
              </p>
              {cert.description && (
                <p className="mt-3 text-sm text-neutral-700">{cert.description}</p>
              )}
              {cert.link && (
                <p className="mt-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#2D3027] hover:text-[#151713] underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D3027] focus-visible:ring-offset-2 rounded"
                  >
                    View credential
                  </a>
                </p>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}

