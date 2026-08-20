import { track } from "@vercel/analytics"

/**
 * Typed wrapper so event names and properties stay bounded.
 *
 * Never pass a data object through here. `track("email_click", item)` would
 * ship the phone number from `contactItems` into a third-party store — always
 * enumerate properties explicitly.
 *
 * `track()` is a silent no-op if Web Analytics is disabled for the project or
 * the script is blocked, so treat every count as a floor.
 */
type Events = {
  resume_open: { placement: "navbar" | "navbar_mobile" | "hero" | "footer" }
  email_click: { placement: "hero" | "contact_card" | "contact_cta" | "chat_panel" | "footer" }
  social_click: { network: "linkedin" | "github"; placement: "hero" | "contact_card" | "footer" }
  project_open: { slug: string }
  chat_open: Record<string, never>
}

export function trackEvent<K extends keyof Events>(name: K, props?: Events[K]): void {
  try {
    track(name, props as Record<string, string> | undefined)
  } catch {
    // Analytics must never break a navigation.
  }
}
