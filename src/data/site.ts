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
  location: "",
  availability: "",
  resumeUrl: "/Sandeep-Poloju-Resume.pdf",
  contact: {
    email: "sandeep1709.sde@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sandeep-poloju",
    github: "https://github.com/sandeepkumar1709",
    phone: "+1 (240) 733-9851",
  },
} as const
