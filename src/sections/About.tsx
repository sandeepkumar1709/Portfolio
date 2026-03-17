import { Section } from "../components/Section"

const aboutCopy = `
I'm a software engineer with 3+ years at Infosys building a Knowledge Graph platform for Fortune 500 clients, and research experience at the University of Maryland on AgriTech and ML pipelines. I completed my M.Eng in Software Engineering at UMD (GPA 3.93) and hold a B.Tech in Computer Science from CVR College of Engineering.

My strengths lie in backend systems, graph data (Neo4j, Cypher), RAG and LLM integration, and full-stack delivery. I'm curious, disciplined, and detail-oriented — I care about code that any developer can understand and systems that scale.

I'm interested in scalable systems, AI infrastructure, and the intersection of research and production engineering.
`.trim()

interface AboutProps {
  variant?: "linen" | "sand"
}

export function About({ variant = "linen" }: AboutProps) {
  return (
    <Section id="about" title="About" variant={variant}>
      <div className="prose prose-neutral max-w-none">
        <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
          {aboutCopy}
        </p>
      </div>
    </Section>
  )
}
