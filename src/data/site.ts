export const site = {
  name: "Sandeep Poloju",
  /**
   * Single source of truth for the positioning line. Rendered by Hero.
   *
   * His own wording, taken from the resume's pdfsubject and adopted here
   * 2026-08-22. It replaced "Software Engineer, backend & scalable AI systems",
   * which was itself a correction of the unsupportable "AI Infrastructure
   * Architect". Two reasons for the change: it matches how he actually
   * describes the job ("complete engineering: data pipelines, automation tools,
   * full-stack applications, AI automations"), and it drops "scalable", which
   * nothing in the corpus supports since there is no throughput, concurrency or
   * load figure anywhere in his material.
   *
   * Every surface below must carry this string verbatim, EXCEPT the <title>
   * tags, which are deliberately shortened for the ~60-char SERP budget. That
   * exception is recorded in index.html; do not "fix" it back.
   */
  role: "Software Engineer: AI systems, data pipelines and full-stack applications",
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
