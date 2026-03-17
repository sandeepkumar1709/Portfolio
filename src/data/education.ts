export interface EducationEntry {
  degree: string
  school: string
  period: string
  gpa: string
  highlights?: string
  courses?: string[]
}

export const education: EducationEntry[] = [
  {
    degree: "Master of Engineering, Software Engineering",
    school: "University of Maryland, College Park",
    period: "2024 – 2025",
    gpa: "GPA: 3.93 / 4.00",
    courses: [
      "Software Engineering",
      "Software Testing & Maintenance",
      "Cloud Security",
      "Software Design & Implementation",
      "Introduction to Machine Learning",
      "Reverse Software Engineering",
      "System & Software Requirements",
      "Managing Software Engineering Projects",
      "Information Assurance",
      "Digital Forensics & Incident Response",
    ],
  },
  {
    degree: "B.Tech, Computer Science",
    school: "CVR College of Engineering",
    period: "Aug 2017 – May 2021",
    gpa: "CGPA: 9.49 / 10.0",
    courses: [
      "Problem Solving through C",
      "Data Structures (C / Java)",
      "Design & Analysis of Algorithms",
      "Discrete Structures & Graph Theory",
      "Object-Oriented Programming (Java)",
      "Database Management Systems",
      "Operating Systems",
      "Computer Organization",
      "Data Communication & Computer Networks",
      "Automata & Compiler Design",
      "Unix & Shell Programming",
      "Web Technologies",
      "Machine Learning",
      "Web Services & Cloud Computing",
      "Internet of Things",
      "Data Warehousing & Data Mining",
      "Big Data Analytics",
    ],
  },
]
