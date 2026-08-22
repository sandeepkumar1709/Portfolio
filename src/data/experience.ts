export interface ExperienceEntry {
  role: string
  organization: string
  period: string
  /**
   * Per-role location. Previously "Remote / Hybrid" was hardcoded in the
   * component and shown for every employer; leave blank and nothing renders.
   */
  location?: string
  highlights: string[]
  stack?: string
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software AI Engineer",
    organization: "Acculevel",
    period: "Jun 2026 – Present",
    location: "Lafayette, IN",
    highlights: [
      /*
       * Seven bullets (was eight; the origin-lockdown bullet came out 2026-08-21
       * because he could not tell what it meant). Deliberately dropped:
       * the Search Console analysis tooling and the 672-test/cost bullet (both
       * substantially agent-authored, and he does not want credit for them),
       * plus the UI/UX-review-and-audit bullet and the edge-rule-design bullet
       * on length. The avatar-vs-display-name matching story came off too: it
       * reads bigger than it felt to him. Do not re-add any of these.
       *
       * The edge/security bullets are written at the level of reasoning only:
       * no origin addresses, no rule contents, no thresholds. Those would be
       * an evasion map for a site that is still live, and one half of the
       * origin-lockdown finding is deliberately still open.
       */
      "Owned a review-attribution platform from requirements to production as its sole engineer, replacing an untestable low-code workflow that decided salesperson commissions. It runs across 200 Google Business Profiles with no manual step between a customer scanning the QR code and the advisor being credited.",
      /*
       * The 63% -> 99% figure is deliberately absent. It appears only in the
       * Aug-2026 resume with no antecedent anywhere else, and two nearby 63%
       * figures in the archive are about key COVERAGE, not accuracy. Sandeep
       * agreed 2026-08-22 to leave it off rather than publish a number whose
       * measurement he cannot point to. The mechanism carries the bullet.
       */
      "Replaced an inference from appointment time and listing with a direct identity match, by adding Google SSO to the existing QR flow so a review resolves to the advisor who earned it.",
      "Built and shipped a Model Context Protocol (MCP) server exposing Google Business Profile and Search Console as queryable tools. It is read-only by construction: the API has no read-only scope, so no write call was ever implemented. Executives pull profile and search performance data without manual exports.",
      "Cut 25 hours a week of manual publishing with a daily Databricks pipeline that screens job-site photos for relevance and privacy risk before posting to the stalest listing, behind a geographic pre-filter that drops unplaceable jobs before spending anything on vision calls.",
      /*
       * The origin-lockdown / double-CDN bullet was removed 2026-08-21: he
       * could not tell what it meant, which is fatal for a bullet he has to
       * defend out loud. Do not re-add it in that form. If it ever returns it
       * needs plain language, not the dossier's vocabulary.
       */
      "Found that firewall rules I had deployed were not reaching traffic on the root domain even though the dashboard showed them live. Our host runs its own CDN behind ours, and stacking the two only works through a CNAME rather than A records, so after switching the records caching started working and the rules were finally in the path.",
      "Showed the hosting ceiling was bot traffic rather than growth: roughly three quarters of visits were non-billable crawler traffic. We were already blocking much of it, but at our own server, after we had paid for it, so I moved the same blocking out to the CDN edge where it stops before it costs anything.",
      "Diagnosed a site-wide 504 outage. I had deployed firewall rules the day before, so I ruled my own change out first, then went through 2,694 log events and found the origin was being exhausted by crawler traffic hitting pages the CDN cannot cache. Blocked the offending crawlers at the edge and kept the ones that bring in leads.",
    ],
    stack: "Python, FastAPI, React, PostgreSQL, Azure (App Service, Functions, Key Vault), Databricks, MCP, LLM vision",
  },
  {
    role: "Software Engineer - Intern",
    organization: "GovieRates",
    period: "Mar 2026 – May 2026",
    location: "Largo, MD",
    highlights: [
      "Built a middleware REST API layer (Java Spring Boot) that syncs data between the GovieRates accounting platform and Project Magnus (a DCAA-compliant timesheet system), eliminating mismatches across client accounts.",
      "Built an end-to-end onboarding flow: SSO JWT entry from GovieRates, Stripe subscriptions with a 7-tier pricing model, and automated multi-tenant provisioning; onboarded 30+ existing clients and added $5,000/month in recurring revenue.",
      "Prototyped an agentic layer with LangGraph so users could ask questions in plain English across GovieRates and Project Magnus; it was still a prototype when the internship ended.",
    ],
    stack: "Next.js 15, Java Spring Boot, MongoDB Atlas, JWT, Stripe, LangGraph, Azure Container Apps, SendGrid",
  },
  {
    role: "Graduate Research Assistant",
    organization: "University of Maryland",
    period: "Apr 2024 – Jan 2025",
    location: "College Park, MD",
    highlights: [
      "Built a full-stack AgriTech app predicting Brown Patch disease outbreaks, with ETL over 10GB+ of heterogeneous data (TesseractOCR, BeautifulSoup, NOAA APIs → S3).",
      "Improved model accuracy by 17 percentage points by replacing manual feature selection with stepwise regression over climate-segmented data; deployed serverless inference (Lambda, API Gateway).",
      "Replaced manual trial-and-error feature selection with stepwise regression in Python, then checked the selected features, a four-hour humidity window and leaf wetness duration, with the plant scientist on our team.",
    ],
    stack: "Python, SQL, AWS (S3, Lambda, API Gateway, SageMaker, EC2), TensorFlow, Scikit-learn",
  },
  {
    role: "Graduate Aide, Object-Oriented Programming",
    organization: "University of Maryland, College of Information",
    /**
     * Two separate appointments, not one continuous span — LinkedIn renders
     * them as two positions, so a merged "Aug 2024 – Dec 2025" would read as
     * a parity mismatch to anyone comparing the two.
     */
    period: "Aug 2024 – May 2025 · Aug 2025 – Dec 2025",
    location: "College Park, MD",
    highlights: [
      "Graded and taught Object-Oriented Programming across four sections, roughly 120 students a semester, for three semesters, writing design feedback rather than only marking output.",
      "Traced a failing autograder to the test harness rather than the submitted code by reproducing the submission locally, unblocking grading for the affected cohort.",
    ],
  },
  {
    role: "Software Engineer",
    organization: "Infosys",
    /**
     * May 2021, confirmed directly by Sandeep 2026-08-21. Documents in the
     * archive lean "Aug 2021", but he states May and his undergrad also ended
     * that month, so the overlap is real rather than a copy error. Tenure is
     * ~2 yr 7 mo, which supports "close to three years" but not "3+".
     */
    period: "May 2021 – Dec 2023",
    location: "Hyderabad, India",
    highlights: [
      /*
       * CORRECTED 2026-08-22 by Sandeep. The query change and the serialization
       * change were ONE effort, not two, and the 90% is their combined result.
       * An earlier pass split them because his notes file them as Story 1 and
       * Story 4, and then removed Protobuf as an unearned keyword. Both were
       * wrong. Protobuf belongs here, and Avro is the rejected alternative he
       * actually tested. Do not split this bullet again.
       */
      "Traced per-keystroke suggestion latency to a full-database scan, then re-ranked the knowledge graph on node degree count so the match predicate ran over a small candidate set, and moved the payload to Protobuf after trying Avro, cutting benchmarked latency from ~200ms to ~20-30ms per keystroke.",
      "Owned features end-to-end across UI and backend services for an enterprise Knowledge Graph platform serving a Fortune 500 financial services client.",
      "Integrated LLMs into the search layer to translate natural English questions into Cypher queries, making complex graph data accessible to non-technical users; lifted NLU query accuracy from 85% to 92%.",
      /*
       * Corrected 2026-08-21. This previously claimed he built the translation
       * layer and then removed his own abstraction. His own account says the
       * queries "were being translated" already: he found an existing hop and
       * routed around it. He inherited the layer, he did not author it.
       */
      "Worked through an undocumented codebase to find the AI search service translating GraphQL into Cypher before anything reached Neo4j, then generated Cypher directly from the service to skip that hop.",
      "Reshaped graph serialization into a minimal response payload, cutting API payload 68% (465KB → 148KB).",
      "Implemented multi-tenant dynamic routing in NGINX with rewrite-module capture groups, removing a dedicated routing microservice from the request path.",
      "Integrated a PyTorch GNN link-prediction service (GCN/GraphSAGE) into the graph UI with confidence thresholds and confidence-based highlighting, so analysts could see how far to trust each predicted link.",
      "Built RESTful APIs (Node.js, PostgreSQL) for user preferences. Found that our graph visualization dependency had been abandoned upstream and escalated it as a business risk; a senior engineer designed the abstraction layer that decoupled us from it, and I implemented it across the key components, cutting bug tickets on that module by 40%.",
      /*
       * Accessibility restored 2026-08-22 on his correction: the WCAG work is
       * real, only the measurements were not. So the claim is stated at the
       * level of the work and nothing more. Deliberately absent: "standardized",
       * "Level AA" (a compliance claim an interviewer can audit) and
       * "resolving 40+ UI barriers" (the disproved metric). Do not re-add those.
       * The Adapter Design Pattern is also deliberately left out here: that
       * abstraction was the senior engineer's design, credited in the bullet
       * below, and naming it twice would blur who did what.
       */
      "Refactored a legacy Angular front end and worked through WCAG accessibility issues across the UI.",
      "Led a team of three to automate regression testing, eliminating 20 hours of manual QA effort per release.",
    ],
    stack:
      "Angular, TypeScript, Python, Java, Node.js, PostgreSQL, Neo4j, JanusGraph, Cypher, GraphQL, Spring Boot, PyTorch, Rasa, Protobuf, NGINX, Docker, Kubernetes, Rancher"
  },
  {
    role: "Teaching Assistant & Software Developer",
    organization: "Smart Interviews",
    period: "Feb 2021 – May 2021",
    highlights: [
      "Built interactive features for the React-based Smart Interviews platform.",
      "Mentored 160 students in data structures and algorithms.",
    ],
  },
]
