import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react"
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ChatWithResume } from "./components/ChatWithResume"

const DEFAULT_TITLE = "Sandeep Poloju | Software Engineer"
const HIDDEN_TITLE = "Come back to my portfolio"

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
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? HIDDEN_TITLE : DEFAULT_TITLE
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div
          className="fixed top-16 right-4 z-40 px-3 py-1.5 rounded-full text-xs font-medium text-graphite bg-white/95 border border-black/10 shadow-sm"
          aria-live="polite"
        >
          Work in progress
        </div>
        <div className="flex-1">
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <ChatWithResume />
        <Analytics />
      </div>
    </BrowserRouter>
  )
}
