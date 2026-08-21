export type CredentialType = "certification" | "license" | "award"

export interface Certification {
  name: string
  issuer: string
  type: CredentialType
  issued: string
  credentialId?: string
  credentialUrl?: string
  skills?: string[]
}

export interface Achievement {
  title: string
  detail: string
  href?: string
}

// Newest first. Array order is render order.
export const certifications: Certification[] = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic Education",
    type: "certification",
    issued: "Mar 2026",
    credentialId: "q6nbp99ka869",
    credentialUrl: "https://verify.skilljar.com/c/q6nbp99ka869",
    skills: ["Claude Code", "AI Engineering"],
  },
  {
    name: "Neo4j & Generative AI Fundamentals",
    issuer: "Neo4j",
    type: "certification",
    issued: "Nov 2025",
    credentialId: "77f05886-6881-487f-8875-5bb497b6e19b",
    credentialUrl: "https://graphacademy.neo4j.com/c/77f05886-6881-487f-8875-5bb497b6e19b/",
  },
  {
    name: "IBM watsonx Chatbot Challenge: Runner-up (95 teams)",
    issuer: "IBM",
    type: "award",
    issued: "Oct 2023",
    skills: ["Chatbot Development"],
    credentialUrl: "https://github.com/sandeepkumar1709/watsonX",
  },
  {
    name: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    type: "certification",
    issued: "Feb 2022",
    credentialId: "7AQNTFNSWYRV",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/7AQNTFNSWYRV",
  },
  {
    name: "Teaching Assistant",
    issuer: "Smart Interviews",
    type: "certification",
    issued: "Feb 2021",
    skills: ["Data Structures", "Algorithms"],
    credentialUrl: "https://smartinterviews.in/certificate/a30edf1e",
  },
  {
    name: "Problem Solving (Advanced) Certificate",
    issuer: "HackerRank",
    type: "certification",
    issued: "Sep 2020",
    credentialId: "c57dfb490b59",
    credentialUrl: "https://www.hackerrank.com/certificates/c57dfb490b59",
  },
]

export const achievements: Achievement[] = [
  {
    title: "Publication",
    detail:
      "“Analyzing Event Hype and Reality on Twitter”, co-author (2nd of 4), IJRAR Vol 10 Issue 3, July 2023.",
    href: "https://www.ijrar.org/papers/IJRAR23C1279.pdf",
  },
  {
    title: "HackWithInfy",
    detail: "Top 100 (0.06%) among 167,000+ participants.",
    href: "https://drive.google.com/file/d/1UhveLciLayXD_lvvUPTM9ckJG-fDFMlu/view?usp=sharing",
  },
  {
    title: "Competitive programming",
    detail:
      "600+ algorithmic problems solved. Highest rating: CodeChef 1799, Codeforces 1370.",
  },
  {
    title: "LeetCode daily consistency",
    detail: "52-day streak, with solutions and written explanations.",
    href: "https://github.com/sandeepkumar1709/Leetcode-Daily-Challenge",
  },
]

