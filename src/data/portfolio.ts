import { NavigationItem, Project, Skill, ContactInfo, SocialLink } from '@/types';

export const navigationItems: NavigationItem[] = [
  { name: 'home', href: '#home', label: 'Home' },
  { name: 'about', href: '#about', label: 'About' },
  { name: 'works', href: '#works', label: 'Works' },
  { name: 'contact', href: '#contact', label: 'Contact' },
];

export const projects: Project[] = [
  {
    id: 'portfolio-2',
    title: 'Portfolio 2.0',
    description: 'The portfolio you are viewing right now',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'ott-streaming',
    title: 'OTT Streaming Platform',
    description: 'Users can stream movies',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 'warehouse-stocking',
    title: 'Warehouse Stocking',
    description: 'A website to save and display Stock',
    technologies: ['React', 'Firebase', 'Material-UI'],
  },
];

export const skills: Skill[] = [
  { name: 'MongoDB', icon: '🍃', category: 'database' },
  { name: 'Express.js', icon: 'ex', category: 'backend' },
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'TypeScript', icon: '🔧', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🌊', category: 'frontend' },
];

export const contactInfo: ContactInfo[] = [
  {
    platform: 'Telegram',
    username: '@nashnc11',
    url: 'https://t.me/nashnc11',
    icon: '✈️',
  },
  {
    platform: 'Discord',
    username: 'nashnc11',
    url: '#',
    icon: '🎮',
  },
  {
    platform: 'Email',
    username: 'nash.nc@gmail.com',
    url: 'mailto:nash.nc@gmail.com',
    icon: '✉️',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/nashnc',
    icon: '🐙',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nashnc',
    icon: '💼',
  },
];

export const personalInfo = {
  name: 'Avinash',
  nickname: 'Nash',
  title: 'Web Developer',
  description: 'who develops responsive and interactive websites that are coherent to your needs.',
  specialization: 'I specialize in Front End Development and Full Stack (trained in MERN stack development).',
  callToAction: "Let us craft user-friendly websites together!",
  aboutText: `I'm an aspiring web developer with a strong foundation in the MERN stack. As a recent full-stack development trainee, I'm eager to apply my skills to real-world projects and grow into a confident, industry-ready developer. While I've trained across the full stack, I'm especially passionate about front-end development and creating clean, responsive, and engaging user experiences. I'm constantly learning, building side projects, and staying updated with the latest web development trends. I'm excited to join a team where I can contribute, learn from experienced developers, and sharpen my skills every day.`,
  connectText: "I'm looking forward to being a part of your team! Let me help you develop your ideas into an internet reality.",
};