import { useState, useEffect } from "react"

const TIME_ZONE = "America/New_York"

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    // hourCycle is explicit: `hour12: false` historically resolved to h24 on
    // some engines, printing "24:07" for the hour after midnight.
    hourCycle: "h23",
    timeZone: TIME_ZONE,
  })
}

/**
 * Deliberately not a live region. `aria-live` on a value that changes every
 * second queued a screen-reader announcement per second, for the whole visit,
 * from the persistent header — burying every other announcement on the page.
 * A decorative clock is `aria-hidden`.
 *
 * Also ticks per minute rather than per second, and pauses when the tab is
 * hidden.
 */
export function LiveClock() {
  const [time, setTime] = useState(() => formatTime(new Date()))

  useEffect(() => {
    let id: number | undefined

    const start = () => {
      if (id !== undefined) return
      setTime(formatTime(new Date()))
      id = window.setInterval(() => setTime(formatTime(new Date())), 30_000)
    }
    const stop = () => {
      if (id === undefined) return
      window.clearInterval(id)
      id = undefined
    }

    const onVisibility = () => (document.hidden ? stop() : start())

    start()
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      stop()
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <span aria-hidden className="tabular-nums text-sm font-medium text-graphite/80">
      {time} ET
    </span>
  )
}
