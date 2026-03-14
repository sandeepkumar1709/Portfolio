export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Cypher", "Shell Scripting"],
  },
  {
    category: "AI/ML",
    items: ["RAG", "LangChain", "LangGraph", "MCP", "PyTorch", "TensorFlow", "NLP"],
  },
  {
    category: "Frontend",
    items: ["Angular", "React", "Flutter", "HTML5", "SCSS", "RxJS"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "FastAPI", "Flask", "GraphQL", "gRPC"],
  },
  {
    category: "DevOps",
    items: ["AWS (Lambda, SageMaker, EC2)", "Docker", "Kubernetes", "NGINX", "GitHub Actions", "Vercel", "CI/CD"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Neo4j", "Redis"],
  },
]
