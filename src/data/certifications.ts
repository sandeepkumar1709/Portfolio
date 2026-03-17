export type CredentialType = "certification" | "license" | "award"

export interface Certification {
  name: string
  issuer: string
  type: CredentialType
  issued: string
  expires?: string
  credentialId?: string
  credentialUrl?: string
  skills?: string[]
}

export interface Achievement {
  title: string
  detail: string
  href?: string
}

export const certifications: Certification[] = [
  {
    name: "Neo4j & GenerativeAI Fundamentals",
    issuer: "Neo4j",
    type: "certification",
    issued: "Nov 2025",
    credentialId: "77f05886-6881-487f-8875-5bb497b6e19b",
    credentialUrl: "https://graphacademy.neo4j.com/c/77f05886-6881-487f-8875-5bb497b6e19b/",
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
    name: "IBM watsonx Challenge",
    issuer: "IBM",
    type: "certification",
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
    name: "Problem Solving (Advanced) Certificate",
    issuer: "HackerRank",
    type: "certification",
    issued: "Sep 2020",
    credentialId: "C57DFB490B59",
    credentialUrl: "https://www.hackerrank.com/certificates/c57dfb490b59",
  },
]

export const achievements: Achievement[] = [
  {
    title: "HackWithInfy",
    detail: "Top 100 (0.06%) among 167k+ participants.",
    href: "https://drive.google.com/file/d/1UhveLciLayXD_lvvUPTM9ckJG-fDFMlu/view?usp=sharing",
  },
  {
    title: "LeetCode daily consistency",
    detail: "52-day streak with solutions + explanations (daily repo).",
    href: "https://github.com/sandeepkumar1709/Leetcode-Daily-Challenge",
  },
]

