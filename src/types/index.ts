export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  location?: string;
  linkedin: string;
  github: string;
  status: string;
  shortBio: string;
  summary: string;
}

export interface SkillCategory {
  title: string;
  key: string;
  skills: string[];
  icon: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  location?: string;
  description: string[];
  techStack: string[];
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  tags: string[];
  overview: string;
  features: string[];
  architecture: string[];
  domain: 'ai' | 'blockchain' | 'web';
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
  cgpa?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  domain: string;
  credentialUrl?: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
