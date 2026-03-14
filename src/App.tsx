import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import { Navbar } from "./components/Navbar"

const Home = lazy(() => import("./pages/Home"))
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"))

function Fallback() {
  return (
    <main id="main" className="min-h-[40vh] flex items-center justify-center">
      <p className="text-neutral-500">Loading…</p>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
