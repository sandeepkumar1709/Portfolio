export const site = {
  name: "Sandeep Poloju",
  /**
   * Single source of truth for the positioning line. Rendered by Hero.
   * "scalable AI systems" is his own phrasing. The previous line claimed
   * "AI Infrastructure Architect" — a title that appears nowhere in any
   * source he wrote, so it could not survive an interview follow-up.
   * Keep index.html's title/og/twitter/JSON-LD in sync with this.
   */
  role: "Software Engineer, backend & scalable AI systems",
  /**
   * Recruiters filter on these before they filter on skills. NOTE: the shipped
   * resume PDF does NOT state "Open to Relocation" or any location, so this is
   * the only place in the funnel that can answer it. Fill both in and they
   * render as one line under the Hero title; leave them empty and nothing
   * renders, which is the current state.
   */
  location: "West Lafayette, IN",
  availability: "Open to relocation",
  resumeUrl: "/Sandeep-Poloju-Resume.pdf",
  contact: {
    email: "sandeep1709.sde@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sandeep-poloju",
    github: "https://github.com/sandeepkumar1709",
    // Phone removed 2026-08-22 at his request. It was live in the bundle AND
    // in git history, and a phone number cannot be rotated. Recruiters reach
    // out by email or InMail; the number is still in the resume PDF header for
    // anyone far enough along to call.
  },
} as const
