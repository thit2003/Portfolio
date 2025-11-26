import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}
