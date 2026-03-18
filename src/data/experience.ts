export interface ExperienceEntry {
  role: string
  organization: string
  period: string
  highlights: string[]
  stack?: string
}

export const experience: ExperienceEntry[] = [
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
      "Attained a 15% increase in Monthly Active Users (MAU) as measured by session tracking for assistive technology users, by engineering and launching a full-scale UI remediation that enhanced  overall product accessibility.",
    ],
    stack:
      "Angular, TypeScript, Python, Java, Node.js, PostgreSQL, Neo4j, Cypher, GraphQL, Spring Boot, PyTorch, LLMs, NGINX, Docker, Kubernetes, Rancher, WACAG2.1 Compliance"
  },
  {
    role: "Software Developer & Instructor",
    organization: "Smart Interviews",
    period: "Feb 2021 – May 2021",
    highlights: [
      "Built interactive features for React-based SmartInterviews platform.",
      "Mentored 160 students in DSA",
    ],
  },
]
