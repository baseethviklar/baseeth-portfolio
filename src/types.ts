export type Mode = 'developer' | 'creative';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  tags: string[];
  devDescription: {
    summary: string;
    architecture: string[];
    technicalHighlights: string[];
  };
  creativeDescription: {
    summary: string;
    impact: string[];
    userExperience: string[];
  };
  link?: string;
  badge?: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  devPoints: string[];
  creativePoints: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  badge?: string;
}
