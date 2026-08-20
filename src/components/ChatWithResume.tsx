import { useState, useEffect, useRef, useCallback } from "react"
import { MessageCircle, X } from "lucide-react"
import { site } from "../data/site"
import { FOCUS_RING, TAP_TARGET } from "../lib/styles"
import { trackEvent } from "../lib/analytics"

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function ChatWithResume() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  // The full dialog contract: focus in, contained, Escape, restore, and the
  // page behind locked. Previously none of these existed while the panel
  // still declared role="dialog" aria-modal="true".
  useEffect(() => {
    if (!open) return

    closeRef.current?.focus()

    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== "Tab") return

      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (!nodes || nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (!first || !last) return

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = overflow
    }
  }, [open, close])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        data-print-hide
        onClick={() => {
          trackEvent("chat_open")
          setOpen(true)
        }}
        className={`${TAP_TARGET} fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 rounded-full bg-graphite text-white text-sm font-medium shadow-lg hover:bg-graphiteHover ${FOCUS_RING}`}
        aria-label="Chat with my resume"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
        <span className="hidden sm:inline">Chat with my resume</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-50 bg-black/20" aria-hidden onClick={close} />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-heading"
            className="fixed bottom-24 right-6 z-50 w-[min(360px,calc(100vw-3rem))] max-h-[calc(100svh-8rem)] overflow-y-auto rounded-2xl bg-white border border-black/10 shadow-xl p-6"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 id="chat-heading" className="text-base font-semibold text-graphite">
                Chat with my resume
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className={`${TAP_TARGET} -mr-2 inline-flex items-center justify-center rounded-full text-graphite/70 hover:text-graphite hover:bg-black/5 ${FOCUS_RING}`}
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="py-6 px-4 rounded-xl bg-sand border border-black/5 text-center">
              <p className="text-sm font-medium text-graphite/80 mb-1">Work in progress</p>
              <p className="text-sm text-graphite/70 mb-4">
                I&apos;ll be back with an update soon. Why not skip the automation and
                talk to the original?
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                onClick={() => trackEvent("email_click", { placement: "chat_panel" })}
                className={`${TAP_TARGET} inline-flex items-center justify-center px-6 rounded-full bg-graphite text-white text-sm font-medium hover:bg-graphiteHover ${FOCUS_RING}`}
              >
                Email me instead
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
