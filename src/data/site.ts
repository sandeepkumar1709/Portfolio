export const site = {
  name: "Sandeep Poloju",
  /** Single source of truth for the positioning line. Rendered by Hero. */
  role: "Backend-focused Full-stack Engineer & AI Infrastructure Architect",
  /**
   * Recruiters filter on these before they filter on skills, and the resume
   * PDF already states "Open to Relocation". Fill both in and they render as
   * one line under the Hero title; leave them empty and nothing renders.
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
