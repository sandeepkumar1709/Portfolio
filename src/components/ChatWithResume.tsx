import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function ChatWithResume() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-graphite text-white text-sm font-medium shadow-lg hover:bg-graphiteHover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
        aria-label="Chat with my resume"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
        <span className="hidden sm:inline">Chat with my resume</span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/20"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-label="Chat with resume"
            aria-modal="true"
            className="fixed bottom-24 right-6 z-50 w-[min(360px,calc(100vw-3rem))] rounded-2xl bg-white border border-black/10 shadow-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-graphite">Chat with my resume</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1 rounded-full text-graphite/70 hover:text-graphite hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-graphite focus-visible:ring-offset-2"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="py-6 px-4 rounded-xl bg-sand border border-black/5 text-center">
              <p className="text-sm font-medium text-graphite/80 mb-1">Work in progress</p>
              <p className="text-sm text-graphite/70">
              I will be back with an update soon. If you have questions in the meantime, feel free to reach out through the contact section. I would love to hear from you. Why not skip the automation and talk to the original?
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
