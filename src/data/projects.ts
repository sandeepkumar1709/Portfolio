export interface ProjectCard {
  slug: string
  name: string
  oneLiner: string
  techTags: string[]
  href: string
}

export interface ProjectDetail extends ProjectCard {
  contextProblem: string
  role: string
  techStack: string
  /** `null` means "deliberately not written yet", not "forgotten". */
  architecture: string | null
  improvements: string | null
  contributions?: string[]
  achievements?: string[]
}

export const projects: ProjectDetail[] = [
  {
    slug: "support-triage-agent",
    name: "Support Triage Agent",
    oneLiner: "Terminal-based AI agent that triages support tickets across HackerRank, Claude, and Visa, grounded entirely in a local help-center corpus with citation-enforced replies. Built solo in 24 hours for the HackerRank Orchestrate hackathon.",
    techTags: ["Python", "Hybrid RAG", "BM25", "BGE Embeddings", "Nebius AI", "LLM-as-judge"],
    href: "https://github.com/sandeepkumar1709/hackerrank-orchestrate-may26",
    contextProblem: "Support tickets across three ecosystems must be classified, answered safely, or escalated, using only a local markdown corpus, with zero hallucinated policy and no live web access at runtime.",
    role: "Sole developer.",
    architecture: "CSV row → triage (rules + LLM) → hybrid retrieval (BM25 + BGE-small embeddings + reciprocal rank fusion + LLM rerank) → deterministic 14-trigger safety gate → grounded reply with inline [#N] citations or templated escalation → independent verifier (different model family) → schema-validated row → output CSV.",
    contributions: [
      "Hybrid BM25 + dense-embedding retriever with RRF and an LLM rerank pass over ~765 help-center articles.",
      "Deterministic-first safety gate (14 hard-rule triggers) so risky tickets escalate before any LLM call.",
      "Citation-enforced specialist responder verified by an independent judge model to prevent self-grading bias and unsupported claims.",
      "Resume-safe, append-with-flush CSV pipeline with per-row audit trace JSON; two dry-run passes produce byte-identical output.",
    ],
    techStack: "Python, Nebius AI Studio (Llama 3.3 70B, Qwen3 30B), sentence-transformers (BGE-small), rank-bm25, tiktoken",
    improvements: "Async per-row concurrency for larger ticket volumes; FAISS-backed retrieval if the corpus grows past ~50k chunks.",
    achievements: [
      "Built and shipped end-to-end in 24 hours for a live hackathon judge interview.",
      "Verified byte-identical, deterministic output across repeated dry runs.",
    ],
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
    techTags: ["Python", "FastAPI", "SQLAlchemy", "Angular", "JWT"],
    href: "https://github.com/sandeepkumar1709/medical-scheduling-system",
    contextProblem: "Healthcare providers need optimal appointment scheduling across multiple providers and care paths.",
    role: "Full-stack developer.",
    contributions: [
      "NumPy-based 2D sliding window matrix algorithm for optimal windows.",
      "Interactive grid UI with drag-selection and care path composer.",
    ],
    techStack: "Python, FastAPI, SQLAlchemy, SQLite, Angular 18, JWT",
    architecture: null,
    improvements: null,
  },
  {
    slug: "n8n-weather-monitoring",
    name: "n8n Weather Monitoring System",
    oneLiner: "Automated daily weather pipeline: fetches multi-city data, detects alerts (heat/frost/precipitation), stores in Supabase, sends AI-summarized email reports.",
    techTags: ["n8n", "JavaScript", "Supabase", "OpenWeatherMap", "OpenAI"],
    href: "https://github.com/sandeepkumar1709/n8n-weather-monitoring-system",
    contextProblem: "Users need automated daily weather insights across multiple cities with alert detection and formatted email delivery.",
    role: "Sole developer.",
    architecture: "Cron → CONFIG → OpenWeatherMap API → Transform (parse, detect alerts) → LLM (optional AI summary) → Merge → Supabase + SMTP email.",
    contributions: [
      "Built n8n workflow with custom JS nodes for data transform and AI insight merging.",
      "Implemented weather alert detection (extreme heat, frost, precipitation) and graceful error handling for invalid cities.",
      "Integrated Supabase for persistent weather logs and configurable multi-recipient email delivery.",
    ],
    techStack: "n8n, JavaScript, OpenWeatherMap API, Supabase, SMTP (Gmail), OpenAI (optional)",
    improvements: "City-specific reports per recipient.",
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
    architecture: null,
    improvements: null,
  },
  {
    slug: "local-rag",
    name: "Local-RAG",
    oneLiner: "Privacy-focused tool for chatting with PDF documents offline; zero cost, zero data leakage.",
    techTags: ["Python", "LangChain", "ChromaDB", "Chainlit", "Ollama"],
    href: "https://github.com/sandeepkumar1709/Local-RAG",
    contextProblem: "Users need to query PDFs locally without sending data to external APIs.",
    role: "Sole developer.",
    techStack: "Python, LangChain, ChromaDB, Chainlit, Ollama",
    architecture: null,
    improvements: null,
  },
  {
    slug: "tweet-sentiment-analyzer",
    name: "Tweet Sentiment Analyzer",
    oneLiner: "Web app that analyzes tweet sentiment using NLP; interactive UI for classifying text as positive, negative, or neutral.",
    techTags: ["Python", "NLP", "Flask", "HTML", "CSS"],
    href: "https://github.com/sandeepkumar1709/Tweet-Sentiment-Analyzer",
    contextProblem: "Users need a simple tool to analyze sentiment of short text (e.g., tweets) for research or monitoring.",
    role: "Full-stack developer.",
    contributions: [
      "Built NLP pipeline for sentiment classification (positive/negative/neutral).",
      "Created interactive web UI for input and visualization of results.",
    ],
    techStack: "Python, Flask, NLP (TextBlob/NLTK), HTML, CSS",
    architecture: null,
    improvements: null,
  },
  {
    slug: "crime-reporter",
    name: "Crime Reporter",
    oneLiner: "Flutter Android app for citizens to report crimes with photo upload, location sharing with police, ambulance request, and report status tracking.",
    techTags: ["Flutter", "Dart", "Android", "Firebase"],
    href: "https://github.com/sandeepkumar1709/CrimeReporter",
    contextProblem: "The public needs a fast way to report crimes and get emergency help; response time and coordination with police/ambulance/hospitals matter.",
    role: "Sole developer.",
    contributions: [
      "Built crime report submission with photo upload and location sharing to nearest police station.",
      "Integrated ambulance request and hospital notification for victim health assistance.",
      "Implemented report status tracking and updates from authorities.",
    ],
    techStack: "Flutter, Dart, Android, Firebase",
    architecture: null,
    improvements: null,
  },
]

// Array order is the render order, and index 0/1 get the wide bento spans.
const slugs = projects.map((p) => p.slug)
if (new Set(slugs).size !== slugs.length) {
  throw new Error(`Duplicate project slug: ${slugs.join(", ")}`)
}
for (const p of projects) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) {
    throw new Error(`Project slug is not URL-safe: ${p.slug}`)
  }
  if (!p.href.startsWith("https://")) {
    throw new Error(`Project href must be absolute https: ${p.slug}`)
  }
  if (p.techTags.length === 0) {
    throw new Error(`Project has no techTags: ${p.slug}`)
  }
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug)
}
