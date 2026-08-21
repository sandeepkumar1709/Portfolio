export interface SkillCategory {
  category: string
  items: string[]
}

/**
 * Ordered current-stack-first within each group, because array order is render
 * order and first position reads as emphasis. Removed for lack of evidence in
 * any source: Django, gRPC, Shell Scripting, RxJS, Redis. Removed because his
 * own Aug-2026 resume dropped them as "generic frontend breadth": NLP, Flutter,
 * HTML5, SCSS. The governing rule is his: a listed skill is an invitation to be
 * questioned on it.
 */
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "SQL", "Java", "JavaScript", "Cypher"],
  },
  {
    category: "AI/ML",
    items: ["RAG", "LangGraph", "MCP", "LangChain", "PyTorch", "TensorFlow"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "Tailwind"],
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
