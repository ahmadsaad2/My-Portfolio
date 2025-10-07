export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  shortDescription: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  screenshots?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  provider: string;
  year: string;
  image ?: string;
  credentialUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}