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
       * Six bullets as of 2026-09-26 (was seven). Sandeep's own compression:
       * the two RMS bullets merged into one because the RMS reads small next
       * to the ERP work, and the three edge/security bullets merged into one.
       * Two new bullets lead: the in-house CRM and the medallion data
       * platform. Both are stated in the RESUME'S wording at his explicit
       * direction (decision relayed 2026-09-26 after he saw the repo-level
       * evidence the master resume session raised: shared authorship on the
       * CRM and warehouse, $500K and $50K as his estimates). He chose to keep
       * "Built", "Solely re-architected", $500K, $50K and "63% to 99%" on the
       * resume, and the portfolio mirrors the resume so the two never
       * disagree side by side. Do not soften these to "co-built" / "team",
       * and do not restate them more strongly either. Source of truth is
       * ../../MyResume/FTE/overleaf.latex and RESUME_TODO.md sections J-K.
       *
       * Still deliberately absent: "$1M" (includes revenue, not retired
       * spend), "replaced Databricks" (the photo pipeline below still runs on
       * it), "module of the ERP" (RMS is integrated with it: the ERP calls
       * RMS to mint a review QR per lead and job), the 672-test / $13-a-month
       * figures, the Search Console analysis tooling, the avatar matching
       * key, the UI/UX audit and the edge rule-set design bullets. Do not
       * re-add any of these. Colleague names never appear here.
       *
       * The edge/security bullet is written at the level of reasoning only:
       * no origin addresses, no rule contents, no thresholds.
       */
      "Built the company's in-house CRM, replacing the Workiz field-service platform across sales, scheduling and job operations. Shipped in four months, and it retired roughly $500K a year in subscription spend.",
      /*
       * "Cut Databricks to a few jobs", never "replaced Databricks": the
       * photo pipeline two bullets down is one of the survivors, so the two
       * bullets confirm each other. Power BI reporting moved into the ERP,
       * not the CRM (his correction, 2026-09-26).
       */
      "Solely re-architected the medallion data platform around the CRM and ERP so dashboards stay current: moved Power BI reporting into the ERP and cut Databricks down to a few remaining jobs, retiring about $50K a year in licensing.",
      /*
       * 63% -> 99% is COVERAGE (share of reviews attributed), never
       * "accuracy". It was off the site until 2026-09-26; he chose to publish
       * it on the resume after review, so it is mirrored here as written.
       */
      "Sole engineer on the review-attribution service that decides sales commissions, now integrated with the ERP. I built it on FastAPI, React and Postgres to replace a low-code workflow nobody could test, and added Google SSO to the existing QR flow so a review resolves directly to the advisor who earned it, lifting coverage from 63% to 99%.",
      "Shipped two read-only Model Context Protocol (MCP) servers exposing Google Business Profile and Search Console as tools. Search Console runs on its read-only scope; the Business Profile API has none, so that server implements no write calls at all. The marketing team runs ranking and traffic-drop analysis directly in Claude instead of pulling exports by hand.",
      "Cut 25 hours a week of manual publishing with a daily Databricks pipeline that screens job-site photos with Claude vision for relevance and privacy risk before posting to the nearest stale listing, behind a geographic pre-filter that drops unplaceable jobs before spending anything on vision calls.",
      "Ran the CDN and firewall layer for the public site. Found that rules showing as live weren't reaching the root domain because our host runs its own CDN behind ours, and fixed it by moving the records to a CNAME. Later traced a site-wide 504 outage through 2,694 log events to crawler traffic exhausting the origin on pages the CDN can't cache: roughly three quarters of visits were non-billable bots, so I moved the blocking from our server out to the edge and kept the crawlers that bring in leads.",
    ],
    stack: "Python, FastAPI, Node.js (Fastify, Prisma), React, PostgreSQL, Azure (App Service, Container Apps, Functions, Key Vault), Databricks, MCP, Claude vision",
  },
  {
    role: "Software Engineer - Intern",
    organization: "GovieRates",
    // Corrected to Apr 2026 on 2026-08-22: he confirmed April, and LinkedIn
    // already said "Apr 2026 - May 2026 · 2 mos". The "Mar" here was the odd
    // one out and would have read as a padded internship next to the profile.
    period: "Apr 2026 – May 2026",
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
     * Aug 2021 - Dec 2023. FINAL, and this flipped twice, so read this before
     * changing it again.
     *
     * The archive was right all along: 17 documents said Aug 2021, including
     * the full title line "Specialist Programmer (Software Engineer) | Infosys
     * | Hyderabad, India | Aug 2021 - Dec 2023". On 2026-08-21 he told me May,
     * so it was changed to May on his word. On 2026-08-22 he corrected it back
     * to Aug. Aug is now both his statement and the documentary record, so
     * there is nothing left arguing for May.
     *
     * Tenure is ~2 yr 5 mo. That supports "two and a half years"; it does not
     * support "close to three years" and it never supported "3+".
     */
    period: "Aug 2021 – Dec 2023",
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
