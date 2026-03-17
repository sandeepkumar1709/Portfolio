import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useReducedMotion } from "../hooks/useReducedMotion"
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

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const el = id ? document.getElementById(id) : null
      if (el) {
        el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })
      }
    }
  }, [hash, reducedMotion])

  return (
    <main id="main">
      <Hero />
      <About variant="sand" />
      <Skills variant="linen" />
      <Certifications variant="sand" />
      <Experience variant="linen" />
      <Education variant="sand" />
      <Projects variant="linen" />
      <Contact variant="sand" />
    </main>
  )
}
