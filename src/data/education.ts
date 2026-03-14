export interface EducationEntry {
  degree: string
  school: string
  period: string
  gpa: string
  highlights?: string
}

export const education: EducationEntry[] = [
  {
    degree: "Master of Engineering, Software Engineering",
    school: "University of Maryland, College Park",
    period: "Graduated Dec 2025",
    gpa: "GPA 3.93",
    highlights: "30 credits. Coursework: Software Engineering, ML, Cloud Security, Software Design & Implementation, Digital Forensics.",
  },
  {
    degree: "B.Tech, Computer Science",
    school: "CVR College of Engineering",
    period: "Aug 2017 – May 2021",
    gpa: "GPA 9.5/10",
  },
]
