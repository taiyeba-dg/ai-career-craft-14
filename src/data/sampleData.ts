import { ResumeData } from '@/types/resume';

export const sampleResume: ResumeData = {
  name: "Alexandra Chen",
  title: "Senior Software Engineer",
  email: "alex.chen@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "alexchen.dev",
  linkedin: "linkedin.com/in/alexchen",
  github: "github.com/alexchen",
  summary: "Results-driven senior software engineer with 8+ years of experience building scalable web applications. Expert in React, TypeScript, and cloud architecture. Led teams that delivered products serving 2M+ users, improving system performance by 40% and reducing infrastructure costs by 25%.",
  experience: [
    {
      id: "exp1",
      company: "TechCorp Inc.",
      role: "Senior Software Engineer",
      startDate: "2021",
      endDate: "Present",
      location: "San Francisco, CA",
      bullets: [
        "Led development of microservices architecture serving 2M+ daily active users, improving response times by 40%",
        "Mentored team of 6 junior engineers, establishing code review practices that reduced bug rate by 35%",
        "Designed and implemented real-time data pipeline processing 500K+ events/day using Kafka and Redis",
        "Spearheaded migration from monolith to microservices, reducing deployment time from 2 hours to 15 minutes"
      ]
    },
    {
      id: "exp2",
      company: "StartupXYZ",
      role: "Full Stack Developer",
      startDate: "2018",
      endDate: "2021",
      location: "New York, NY",
      bullets: [
        "Built React-based dashboard used by 50K+ businesses, increasing user engagement by 60%",
        "Developed RESTful APIs handling 10K+ requests/minute with 99.9% uptime",
        "Implemented CI/CD pipeline reducing release cycles from bi-weekly to daily deployments",
        "Collaborated with product team to launch 3 major features that drove $2M in new ARR"
      ]
    },
    {
      id: "exp3",
      company: "Digital Agency Co.",
      role: "Frontend Developer",
      startDate: "2016",
      endDate: "2018",
      location: "Boston, MA",
      bullets: [
        "Developed responsive web applications for 20+ clients across e-commerce, healthcare, and fintech sectors",
        "Reduced page load times by 50% through code splitting, lazy loading, and performance optimization",
        "Created reusable component library adopted by 3 development teams, improving development speed by 30%"
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      school: "Massachusetts Institute of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2012",
      endDate: "2016",
      gpa: "3.8"
    }
  ],
  skills: [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "Kubernetes", "GraphQL", "Redis", "Kafka",
    "CI/CD", "Agile/Scrum", "System Design", "Team Leadership"
  ],
  certifications: [
    "AWS Solutions Architect – Professional",
    "Google Cloud Professional Data Engineer"
  ],
  projects: [
    {
      id: "proj1",
      name: "OpenSource Dashboard",
      description: "Built an open-source analytics dashboard with 2K+ GitHub stars, used by 500+ companies worldwide",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "github.com/alexchen/dashboard"
    },
    {
      id: "proj2",
      name: "AI Code Review Tool",
      description: "Developed an AI-powered code review assistant that analyzes PRs and suggests improvements",
      technologies: ["Python", "OpenAI API", "FastAPI", "Redis"],
      link: "github.com/alexchen/ai-reviewer"
    }
  ],
  languages: ["English (Native)", "Mandarin (Fluent)", "Spanish (Conversational)"],
  awards: ["Tech Innovator Award 2023", "Best Open Source Project — DevConf 2022"]
};
