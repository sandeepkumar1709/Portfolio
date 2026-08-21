# Portfolio

This portfolio is a simple reflection of how I approach software engineering: build for performance, keep code clean, and make user experience clear and practical.  
It focuses on sharing real project context, decisions, and measurable outcomes in a straightforward way.

---

## Engineering Philosophy

I try to make software that is fast, understandable, and easy to maintain. I care about writing clean code, keeping boundaries clear, and making thoughtful trade-offs so the product remains reliable as it grows.

---

## What This Portfolio Communicates

This site highlights experience building production systems across:
- **End-to-end delivery at Acculevel** (data pipelines, automation, full-stack services on Azure and
  Databricks, and applied AI, taking manual work out of business processes)
- **Applied AI and retrieval** (RAG pipelines, LangGraph, MCP tool servers, hybrid search with
  reranking and citation-enforced answers)
- **Knowledge graph and search infrastructure** (Neo4j/Cypher, multi-tenant routing, query
  optimization) at Infosys, for a Fortune 500 financial services client

It is tailored to explain the **why** behind engineering decisions, not just list technologies.

---

## Selected Impact Metrics

Only figures that survive a source check appear here. Anything unmeasured is stated as a mechanism
instead of a number.

| Area | Outcome |
| --- | --- |
| API payload | Reduced from **465KB to 148KB (68%)** by reshaping graph serialization |
| Support-ticket triage | **29 tickets in 5:07** against a 765-article, 4,987-chunk corpus; 15 answered with citations, 14 escalated |
| Determinism | Byte-identical output across repeated rebuilds, confirmed by diff |
| Search-suggestion latency | **~200ms to ~30ms** per keystroke, by ranking on node degree before applying the search predicate |
| NLU search quality | Improved from **85% to 92%** with LLM integration |
| ML model performance | Accuracy improved by **17 percentage points** via climate-based segmentation |
| Data pipeline | ETL over **10GB+** of heterogeneous data |
| Mentorship | **160 students** mentored in data structures; **50+ students a semester** graded across three semesters |

---

## Architecture and Build Decisions

| Decision | Why It Matters |
| --- | --- |
| Section-driven page composition | Keeps content modular and easy to evolve |
| Strong separation of content from presentation | Fast updates to narrative without risky UI rewrites |
| Low-motion, high-contrast UI patterns | Better readability and accessibility for broad audiences |
| Route-based project detail pages | Allows deeper technical storytelling per project |
| Typed frontend stack (TypeScript) | Improves maintainability and reduces regressions |

---

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, TypeScript, Vite, Tailwind CSS, React Router |
| UI/UX | Framer Motion (purposeful, minimal motion), Lucide icons |
| Data Modeling | Structured project/experience content in TypeScript data modules |
| Engineering Focus Areas (from project work) | Python, Java, FastAPI, Spring Boot, Neo4j, PostgreSQL, LangGraph, MCP, Docker, Kubernetes, AWS |

---

## Featured Work Themes

- **AI Systems:** Student Q&A RAG System, Local-RAG, workflow automation with tool-augmented agents  
- **Platform Engineering:** Knowledge Graph search optimization, multi-tenant routing, backend performance tuning  
- **Product Delivery:** End-to-end ownership from API design to UI and deployment

---

## Professional Profile

For a broader professional snapshot and project highlights, see my GitHub profile README:  
[github.com/sandeepkumar1709/sandeepkumar1709](https://github.com/sandeepkumar1709/sandeepkumar1709)

---

Built using this stack and deployed on **Vercel**.
