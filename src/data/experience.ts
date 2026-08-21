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
      "Sole engineer on a review-attribution platform from requirements to production, replacing an untestable low-code workflow that decided salesperson commissions; FastAPI, React and Postgres on Azure across 200 Google Business Profiles.",
      "Raised review-attribution accuracy from 63% to 99% by adding Google SSO to the existing QR flow, replacing an inference from appointment time and listing with a direct identity match.",
      "Built and shipped a Model Context Protocol (MCP) server exposing Google Business Profile and Search Console as queryable tools, read-only by construction, so executives run ranking, decay and traffic-drop analysis without manual pulls.",
      "Cut 25 hours a week of manual publishing with a daily Databricks pipeline that screens job-site photos for relevance and privacy risk before posting to the stalest listing.",
    ],
    stack: "Python, FastAPI, React, PostgreSQL, Azure (App Service, Functions, Key Vault), Databricks, MCP",
  },
  {
    role: "Software Engineer - Intern",
    organization: "GovieRates",
    period: "Mar 2026 – May 2026",
    location: "Largo, MD",
    highlights: [
      "Built a middleware REST API layer (Java Spring Boot) that syncs data between the GovieRates accounting platform and Project Magnus (DCAA-compliant timesheet system), eliminating mismatches across client accounts.",
      "Built an end-to-end onboarding flow: SSO JWT entry from GovieRates, Stripe subscriptions with a 7-tier pricing model, and automated multi-tenant provisioning—onboarded 30+ clients and grew subscriptions from $1,000 to $5,000/month.",
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
      "Ran stepwise regression to isolate which weather signals actually predicted outbreaks, then took the result to a plant scientist who confirmed the four-hour humidity window and leaf-wetness duration were biologically real rather than statistical artifacts.",
    ],
    stack: "Python, SQL, AWS (S3, Lambda, API Gateway, SageMaker, EC2), TensorFlow, Scikit-learn",
  },
  {
    role: "Graduate Aide — Object-Oriented Programming",
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
     * Aug, not May. May 2021 collides with two other endings — his Bachelor's
     * and the Smart Interviews role both close that month — and the title line
     * in his own notes reads "Aug 2021 – Dec 2023". ~2 yr 5 mo, so never "3+".
     */
    period: "Aug 2021 – Dec 2023",
    location: "Hyderabad, India",
    highlights: [
      "Owned features end-to-end across UI and backend services for an enterprise Knowledge Graph platform serving Fortune 500 financial services clients.",
      "Integrated LLMs into the search layer to translate natural English questions into Cypher queries, making complex graph data accessible to non-technical users; lifted NLU query accuracy from 85% to 92%.",
      "Built a Python GraphQL → Cypher translation layer for the graph API, then took it out of the search path once profiling showed the extra hop dominated — cutting search service response time by over 40%.",
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
