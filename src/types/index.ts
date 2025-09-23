export interface NavigationItem {
  name: string;
  href: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface ContactInfo {
  platform: string;
  username: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}