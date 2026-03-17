export interface Certification {
  name: string
  issuer: string
  date: string
  link?: string
  description?: string
}

export const certifications: Certification[] = [
  {
    name: "HackWithInfy Finalist",
    issuer: "Infosys",
    date: "2020",
    description: "Competitive programming and problem-solving competition conducted by Infosys.",
  },
  {
    name: "Neo4j Certified Professional",
    issuer: "Neo4j",
    date: "Planned",
    description: "Placeholder entry — update with your actual graph and database certifications.",
  },
]

