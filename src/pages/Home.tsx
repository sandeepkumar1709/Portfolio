import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useReducedMotion } from "../hooks/useReducedMotion"
import { useDocumentMeta } from "../hooks/useDocumentMeta"
import { scrollToId } from "../lib/scroll"
import { Hero } from "../sections/Hero"
import { About } from "../sections/About"
import { Skills } from "../sections/Skills"
import { Experience } from "../sections/Experience"
import { Education } from "../sections/Education"
import { Projects } from "../sections/Projects"
import { Contact } from "../sections/Contact"
import { Certifications } from "../sections/Certifications"

export default function Home() {
  const { hash } = useLocation()
  const reducedMotion = useReducedMotion()

  useDocumentMeta(
    "Sandeep Poloju | Software Engineer, backend & scalable AI systems",
    "Software engineer building data pipelines, automation, full-stack services and applied AI on Azure and Databricks, with RAG and LangGraph. Previously Neo4j knowledge graphs and Cypher optimization for a Fortune 500 client. UMD M.Eng, 3.93 GPA."
  )

  useEffect(() => {
    if (!hash) return
    scrollToId(hash.slice(1), reducedMotion)
  }, [hash, reducedMotion])

  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <About variant="sand" />
      <Skills variant="linen" />
      <Experience variant="sand" />
      <Projects variant="linen" />
      <Education variant="sand" />
      <Certifications variant="linen" />
      <Contact variant="sand" />
    </main>
  )
}
