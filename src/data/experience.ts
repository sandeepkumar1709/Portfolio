export interface ExperienceEntry {
  role: string
  organization: string
  period: string
  highlights: string[]
  stack?: string
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer II",
    organization: "Infosys",
    period: "Oct 2022 – Dec 2023",
    highlights: [
      "Re-architected Cypher query for search suggestions; reduced latency by 90% (10X) via prioritized lookup and Protobuf serialization.",
      "Designed GNN microservice for link prediction across multi-hop entity traversals in insurance/financial datasets.",
      "Integrated LLMs into search layer; boosted NLU query accuracy from 85% to 92%.",
      "Built multi-tenant routing with NGINX; automated deployments on Rancher (Docker/Kubernetes). Led team of three to automate regression testing.",
    ],
    stack: "Python, Java, Neo4j, Cypher, PyTorch, LLMs, NGINX, Docker, Kubernetes, Rancher",
  },
  {
    role: "Software Engineer I",
    organization: "Infosys",
    period: "Aug 2021 – Oct 2022",
    highlights: [
      "Engineered Python translation layer (GraphQL → Neo4j Cypher); reduced graph query response times by over 40%.",
      "Optimized graph serialization — cut API payload by 68% (465KB → 148KB).",
      "Built RESTful APIs (Node.js, PostgreSQL) for user preferences; decoupled Graph Visualization module (Adapter pattern).",
    ],
    stack: "Angular, TypeScript, Python, Node.js, PostgreSQL, Neo4j, Cypher, GraphQL, Spring Boot",
  },
  {
    role: "Research Assistant / Software Engineer",
    organization: "University of Maryland",
    period: "Apr 2024 – Jan 2025",
    highlights: [
      "Built full-stack AgriTech app predicting Brown Patch disease severity; ETL for 10GB+ data (TesseractOCR, BeautifulSoup, NOAA APIs → S3).",
      "Improved model accuracy from 74% to 91% via Köppen climate segmentation and feature engineering; deployed serverless inference (Lambda, API Gateway).",
    ],
    stack: "Python, SQL, AWS (S3, Lambda, API Gateway, SageMaker, EC2), TensorFlow, Scikit-learn",
  },
  {
    role: "Software Developer & Instructor",
    organization: "Smart Interviews",
    period: "Feb 2021 – May 2021",
    highlights: [
      "Built interactive features for React-based SmartInterviews platform.",
      "Mentored 160 students in DSA; developed 'Recursive Leap of Faith' teaching heuristic.",
    ],
  },
]
