export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  certifications?: string[];
  projects?: Project[];
  languages?: string[];
  awards?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  bullets: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface TemplateInfo {
  id: number;
  name: string;
  category: 'classic' | 'modern' | 'creative' | 'technical' | 'executive';
  level: 'entry' | 'mid' | 'senior' | 'executive';
  description: string;
  tags: string[];
}
