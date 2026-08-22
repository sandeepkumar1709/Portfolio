import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ErrorBoundary } from "./components/ErrorBoundary"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

// Home is imported statically: it is the only route anyone lands on, and
// lazy-loading it cost a serial round trip plus a guaranteed layout shift to
// defer under a kilobyte. ProjectDetail stays split.
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"))

function Fallback() {
  return (
    <main id="main" tabIndex={-1} className="min-h-screen flex items-center justify-center">
      <p className="text-graphite/70">Loading…</p>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* First focusable element in the document, and outside <nav> so it is
            announced as a page-level bypass rather than a nav item. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-full focus:bg-graphite focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <Navbar />

        <div className="flex-1">
          <ErrorBoundary>
            <Suspense fallback={<Fallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>

        <Footer />
        <Analytics />
      </div>
    </BrowserRouter>
  )
}
