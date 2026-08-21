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
    period: "June 2026 – Present",
    location: "Lafayette, IN",
    highlights: [
      /*
       * Eight bullets, chosen with Sandeep 2026-08-21. Deliberately dropped:
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
      "Sole engineer on a review-attribution platform from requirements to production, replacing an untestable low-code workflow that decided salesperson commissions; FastAPI, React and Postgres on Azure across 200 Google Business Profiles. It closes the loop with no human in the path: appointment, QR code, customer scan, Google review, advisor credit.",
      "Raised review-attribution accuracy from 63% to 99% by adding Google SSO to the existing QR flow, replacing an inference from appointment time and listing with a direct identity match.",
      "Built and shipped a Model Context Protocol (MCP) server exposing Google Business Profile and Search Console as queryable tools, read-only by construction, so executives run ranking, decay and traffic-drop analysis without manual pulls.",
      "Cut 25 hours a week of manual publishing with a daily Databricks pipeline that screens job-site photos for relevance and privacy risk before posting to the stalest listing, behind a geographic pre-filter that drops unplaceable jobs before spending anything on vision calls.",
      /*
       * The origin-lockdown / double-CDN bullet was removed 2026-08-21: he
       * could not tell what it meant, which is fatal for a bullet he has to
       * defend out loud. Do not re-add it in that form. If it ever returns it
       * needs plain language, not the dossier's vocabulary.
       */
      "Found the apex domain being served by proxied A records instead of a CNAME, so the firewall rules that looked live in the dashboard were never applying to root-domain traffic. Switching to a proxied CNAME made caching start working and put the rules in front of production traffic for the first time.",
      "Established that roughly three quarters of billed traffic was non-human crawling and that the busiest URLs accounted for only a fraction of bandwidth, so no per-asset optimisation could have won. Moved blocking from the origin to the edge, where requests stop before they are paid for.",
      "Diagnosed a site-wide 504 outage by first clearing my own firewall change from the day before, then attributing 2,694 events across cloud scrapers, AI crawlers and our own uptime monitor, while explicitly preserving the search crawlers that generate leads.",
    ],
    stack: "Python, FastAPI, React, PostgreSQL, Azure (App Service, Functions, Key Vault), Databricks, MCP, LLM vision",
  },
  {
    role: "Software Engineer - Intern",
    organization: "GovieRates",
    period: "Mar 2026 – May 2026",
    location: "Largo, MD",
    highlights: [
      "Built a middleware REST API layer (Java Spring Boot) that syncs data between the GovieRates accounting platform and Project Magnus (DCAA-compliant timesheet system), eliminating mismatches across client accounts.",
      "Built an end-to-end onboarding flow: SSO JWT entry from GovieRates, Stripe subscriptions with a 7-tier pricing model, and automated multi-tenant provisioning; onboarded 30+ clients and grew subscriptions from $1,000 to $5,000/month.",
      "Designing an agentic AI layer (LangGraph) to enable natural language querying and intelligent automation across GovieRates and Project Magnus.",
    ],
    stack: "Next.js 15, Java Spring Boot, MongoDB Atlas, JWT, Stripe, LangGraph, Azure Container Apps, SendGrid",
  },
  {
    role: "Research Software Engineer",
    organization: "University of Maryland",
    period: "Apr 2024 – Jan 2025",
    location: "College Park, MD",
    highlights: [
      "Built full-stack AgriTech app predicting Brown Patch disease severity; ETL for 10GB+ data (TesseractOCR, BeautifulSoup, NOAA APIs → S3).",
      "Improved model accuracy from 74% to 91% via Köppen climate segmentation and feature engineering; deployed serverless inference (Lambda, API Gateway).",
      "Replaced manual trial-and-error feature selection with stepwise regression in Python, then had a plant scientist on the team confirm the selected features, a four-hour humidity window and leaf wetness duration, were the biologically relevant ones.",
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
      "Graded Object-Oriented Programming coursework and wrote design feedback for 50+ students a semester across three semesters.",
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
      "Owned features end-to-end across UI and backend services for an enterprise Knowledge Graph platform serving Fortune 500 financial services clients.",
      "Integrated LLMs into the search layer to translate natural English questions into Cypher queries, making complex graph data accessible to non-technical users; lifted NLU query accuracy from 85% to 92%.",
      /*
       * Corrected 2026-08-21. This previously claimed he built the translation
       * layer and then removed his own abstraction. His own account says the
       * queries "were being translated" already: he found an existing hop and
       * routed around it. He inherited the layer, he did not author it.
       */
      "Traced slow AI-search response times through an undocumented codebase to an intermediate step translating GraphQL into Cypher before it reached Neo4j, then generated Cypher directly from the search service to skip that hop, cutting search response time by over 40%.",
      "Diagnosed a latency bottleneck in the search-suggestion API and re-architected the Cypher query and serialization layer, cutting response time from ~200ms to ~30ms per keystroke under profiling.",
      "Reshaped graph serialization into a minimal response payload, cutting API payload 68% (465KB → 148KB).",
      "Implemented multi-tenant dynamic routing in NGINX with rewrite-module capture groups, removing a dedicated routing microservice from the request path.",
      "Integrated a PyTorch GNN link-prediction service (GCN/GraphSAGE) into the graph UI with confidence thresholds and confidence-based highlighting, so analysts could see how far to trust each predicted link.",
      "Built RESTful APIs (Node.js, PostgreSQL) for user preferences and decoupled the graph visualization module behind an adapter boundary, so the rendering implementation could be swapped without touching callers.",
      "Led a team of three to automate regression testing, eliminating 20 hours of manual QA effort per release.",
    ],
    stack:
      "Angular, TypeScript, Python, Java, Node.js, PostgreSQL, Neo4j, JanusGraph, Cypher, GraphQL, Spring Boot, PyTorch, Rasa, Protobuf, NGINX, Docker, Kubernetes, Rancher"
  },
  {
    role: "Software Developer & Instructor",
    organization: "Smart Interviews",
    period: "Feb 2021 – May 2021",
    highlights: [
      "Built interactive features for React-based SmartInterviews platform.",
      "Mentored 160 students in data structures and algorithms.",
    ],
  },
]
