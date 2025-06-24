export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  avatar: string;
  resumeImage: string;
  [key: string]: any;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  liveDemo?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  description: string;
  logo: string;
  url: string;
  expiryDate?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  logo: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  logo: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}

export interface PortfolioState {
  profile: Profile;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  certificates: Certificate[];
  achievements: Achievement[];
  projects: Project[];
  isLoading: boolean;
  error: string | null;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  certificates: Certificate[];
  achievements: Achievement[];
  projects: Project[];
}