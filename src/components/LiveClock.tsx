import { useState, useEffect } from "react"

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}

export function LiveClock() {
  const [time, setTime] = useState(() => formatTime(new Date()))

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime(new Date()))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <time
      dateTime={new Date().toISOString()}
      className="tabular-nums text-sm font-medium text-graphite/80"
      aria-live="polite"
      aria-label={`Current time: ${time}`}
    >
      {time}
    </time>
  )
}
