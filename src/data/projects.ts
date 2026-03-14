export interface ProjectCard {
  slug: string
  name: string
  oneLiner: string
  techTags: string[]
  href?: string
}

export interface ProjectDetail extends ProjectCard {
  contextProblem?: string
  role?: string
  architecture?: string
  contributions?: string[]
  techStack?: string
  improvements?: string
  achievements?: string[]
}

export const projects: ProjectDetail[] = [
  {
    slug: "knowledge-graph-infosys",
    name: "Knowledge Graph Platform",
    oneLiner: "Multi-tenant SaaS for Fortune 500 clients: graph visualization, NL search, GNN link prediction, Cypher optimization.",
    techTags: ["Angular", "Neo4j", "Python", "PyTorch", "Docker", "Kubernetes", "NGINX"],
    href: "https://github.com/sandeepkumar1709",
    contextProblem: "Fortune 500 financial/insurance clients needed to explore complex connected data visually and via natural language.",
    role: "Software Engineer I/II — full-stack and backend ownership.",
    architecture: "Angular frontend, Python/Java/Spring Boot microservices, Neo4j, multi-tenant routing via NGINX, deployments on Rancher (K8s).",
    contributions: [
      "Re-architected Cypher query for search suggestions; 90% latency reduction.",
      "Designed GNN microservice for link prediction.",
      "Integrated LLMs; NLU accuracy 85% → 92%.",
      "Built multi-tenant routing; automated deployments.",
    ],
    techStack: "Angular, TypeScript, Python, Java, Spring Boot, Neo4j, Cypher, PyTorch, NGINX, Docker, Kubernetes, Rancher",
    improvements: "Further schema flexibility and graph analytics dashboards.",
    achievements: ["Tower of the Team award at Infosys."],
  },
  {
    slug: "umd-agritech",
    name: "UMD AgriTech — Brown Patch Prediction",
    oneLiner: "Full-stack app predicting turfgrass disease severity; 74% → 91% accuracy via climate segmentation and AWS deployment.",
    techTags: ["Python", "AWS", "SageMaker", "Lambda", "TensorFlow", "SQL"],
    href: "https://github.com/sandeepkumar1709",
    contextProblem: "Turfgrass researchers needed accurate Brown Patch disease severity prediction using climate, soil, and fungicide data.",
    role: "Research Assistant / Software Engineer.",
    architecture: "ETL (PDFs, web, NOAA) → S3; SQL transforms; SageMaker training; Lambda + API Gateway for inference.",
    contributions: [
      "ETL for 10GB+ heterogeneous data; stepwise regression for feature selection.",
      "Köppen climate-based regional segmentation; improved accuracy 74% → 91%.",
      "Deployed serverless inference on AWS.",
    ],
    techStack: "Python, SQL, TesseractOCR, BeautifulSoup, AWS S3, Lambda, API Gateway, SageMaker, EC2, TensorFlow, Scikit-learn",
    improvements: "Real-time weather integration and more regional models.",
  },
  {
    slug: "student-qa-rag",
    name: "Student Q&A RAG System",
    oneLiner: "RAG pipeline over academic PDFs with LangGraph orchestration, MCP web search, and dual LLM provider support.",
    techTags: ["FastAPI", "LangGraph", "MCP", "ChromaDB", "Docker", "Ollama"],
    href: "https://github.com/sandeepkumar1709/student-qa-rag",
    contextProblem: "Students need to ask questions over academic PDFs conversationally, with optional web fallback for off-topic queries.",
    role: "Sole developer.",
    architecture: "FastAPI → LangGraph (classify → retrieve or web_search → generate); ChromaDB for vectors; MCP for DuckDuckGo; provider-agnostic LLM (Nebius/Ollama).",
    contributions: [
      "LangGraph stateful orchestration with conditional routing.",
      "MCP server for web search; provider-agnostic LLM layer for air-gap deployment.",
      "Dockerized with Ollama host access.",
    ],
    techStack: "FastAPI, LangGraph, MCP, ChromaDB, Docker, Ollama",
    improvements: "Streaming responses and more document types.",
  },
  {
    slug: "medical-scheduling-system",
    name: "Medical Scheduling System",
    oneLiner: "Full-stack healthcare scheduling with NumPy-based 2D sliding window algorithm for optimal appointment windows.",
    techTags: ["Python", "FastAPI", "SQLAlchemy", "Angular 18", "JWT"],
    href: "https://github.com/sandeepkumar1709/medical-scheduling-system",
    contextProblem: "Healthcare providers need optimal appointment scheduling across multiple providers and care paths.",
    role: "Full-stack developer.",
    contributions: [
      "NumPy-based 2D sliding window matrix algorithm for optimal windows.",
      "Interactive grid UI with drag-selection and care path composer.",
    ],
    techStack: "Python, FastAPI, SQLAlchemy, SQLite, Angular 18, JWT",
  },
  {
    slug: "greboost",
    name: "GREBoost",
    oneLiner: "E-learning platform with RESTful APIs and Angular frontend; deployed on Vercel with CI/CD.",
    techTags: ["Angular", "TypeScript", "Flask", "MongoDB", "Vercel", "GitHub Actions"],
    href: "https://github.com/sandeepkumar1709/GREBoost",
    contextProblem: "Students need a structured e-learning platform for GRE preparation.",
    role: "Full-stack developer.",
    techStack: "Angular, TypeScript, Flask, MongoDB, Vercel, GitHub Actions",
  },
  {
    slug: "local-rag",
    name: "Local-RAG",
    oneLiner: "Privacy-focused tool for chatting with PDF documents offline; zero cost, zero data leakage.",
    techTags: ["Python", "LangChain", "ChromaDB", "Chainlit", "Ollama"],
    href: "https://github.com/sandeepkumar1709",
    contextProblem: "Users need to query PDFs locally without sending data to external APIs.",
    role: "Sole developer.",
    techStack: "Python, LangChain, ChromaDB, Chainlit, Ollama",
  },
]

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug)
}
