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
    /**
     * Django and gRPC removed: no source in the corpus evidences either, and
     * the backend work is consistently FastAPI/Flask/Spring Boot. A listed
     * skill is an invitation to be questioned on it.
     */
    category: "Backend",
    items: ["Spring Boot", "FastAPI", "Flask", "GraphQL", "REST APIs"],
  },
  {
    category: "DevOps",
    items: [
      "AWS (Lambda, SageMaker, EC2)",
      "Docker",
      "Kubernetes",
      "NGINX",
      "GitHub Actions",
      "Vercel",
      "CI/CD",
    ],
  },
  {
    category: "Tools",
    items: ["Claude Code", "Cursor", "n8n"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Neo4j", "Redis", "Firebase", "Supabase"],
  },
]
