export interface SkillCategory {
  category: string
  items: string[]
}

/**
 * Ordered current-stack-first within each group, because array order is render
 * order and first position reads as emphasis.
 *
 * RESTORED 2026-08-22 on his correction: Shell Scripting, RxJS, SCSS, HTML5 and
 * Flutter are all real. RxJS is the Angular analogue of NgRx, and Flutter backs
 * the mobile project in Projects. An earlier pass removed them for absence from
 * the source archive, but absence from his notes is not absence from his skill
 * set. Still out, and he has not contested: Django (contradicted; every backend
 * is FastAPI/Flask/Spring Boot), gRPC, Redis.
 */
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "SQL", "Java", "JavaScript", "Cypher", "Shell Scripting"],
  },
  {
    category: "AI/ML",
    items: ["RAG", "LangGraph", "MCP", "LangChain", "PyTorch", "TensorFlow"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "RxJS", "Tailwind", "SCSS", "HTML5", "Flutter"],
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
    category: "Cloud & DevOps",
    items: [
      "Azure (App Service, Functions, Key Vault)",
      "Databricks",
      "Docker",
      "Kubernetes",
      "AWS (Lambda, SageMaker, EC2)",
      "NGINX",
      "Cloudflare",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
    ],
  },
  {
    category: "Tools",
    items: ["Claude Code", "Cursor", "n8n"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Neo4j", "Firebase", "Supabase"],
  },
]
