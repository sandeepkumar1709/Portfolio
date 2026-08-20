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
    role: "Software Developer Intern",
    organization: "GovieRates",
    period: "Mar 2026 – Present",
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
    highlights: [
      "Built full-stack AgriTech app predicting Brown Patch disease severity; ETL for 10GB+ data (TesseractOCR, BeautifulSoup, NOAA APIs → S3).",
      "Improved model accuracy from 74% to 91% via Köppen climate segmentation and feature engineering; deployed serverless inference (Lambda, API Gateway).",
    ],
    stack: "Python, SQL, AWS (S3, Lambda, API Gateway, SageMaker, EC2), TensorFlow, Scikit-learn",
  },
  {
    role: "Software Engineer",
    organization: "Infosys",
    period: "May 2021 – Dec 2023",
    highlights: [
      "Owned features end-to-end across UI and backend services for an enterprise Knowledge Graph platform in financial/insurance domains.",
      "Engineered Python translation layer (GraphQL → Neo4j Cypher); reduced graph query response times by over 40%.",
      "Optimized graph serialization and cut API payload by 68% (465KB → 148KB).",
      "Built RESTful APIs (Node.js, PostgreSQL) for user preferences; decoupled Graph Visualization module (Adapter pattern).",
      "Re-architected Cypher query for search suggestions; reduced latency by 90% (10X) via prioritized lookup and Protobuf serialization.",
      "Designed GNN microservice for link prediction across multi-hop entity traversals in insurance/financial datasets.",
      "Integrated LLMs into search layer; boosted NLU query accuracy from 85% to 92%.",
      "Led team of three to automate regression testing.",
      "Attained a 15% increase in Monthly Active Users (MAU) as measured by session tracking for assistive technology users, by engineering and launching a full-scale UI remediation that enhanced overall product accessibility.",
    ],
    stack:
      "Angular, TypeScript, Python, Java, Node.js, PostgreSQL, Neo4j, Cypher, GraphQL, Spring Boot, PyTorch, LLMs, NGINX, Docker, Kubernetes, Rancher, WCAG 2.1 compliance"
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
