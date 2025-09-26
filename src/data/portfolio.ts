import {
  NavigationItem,
  Project,
  Skill,
  ContactInfo,
  SocialLink,
} from "@/types";

export const navigationItems: NavigationItem[] = [
  { name: "home", href: "#home", label: "Home" },
  { name: "about", href: "#about", label: "About" },
  { name: "works", href: "#works", label: "Works" },
  { name: "contact", href: "#contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    id: "portfolio-2",
    title: "Portfolio 2.0",
    description: "The portfolio you are viewing right now",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "ShadCN",
      "Radix UI",
      "EmailJS",
      "Dynamic Text Animation",
      "Git",
      "GitHub",
    ],
    image: "/projects/portfolio.png",
    liveUrl: "https://vercel.com/umlyrithyreachs-projects/rithyreach-portfolio",
    githubUrl: "https://github.com/UmLyrithyreach/my-portfolio-nextjs",
    category: ["Frontend Web Application"],
    status: "In Progress",
    features: [
      "A modern, responsive portfolio website built with Next.js and TypeScript.",
      "Utilizes Tailwind CSS for styling and Framer Motion for animations.",
      "Features a clean and intuitive user interface.",
      "Hosted on Vercel for fast and scalable deployment.",
    ],
  },
  {
    id: "automata-simulation",
    title: "Automata Simulation",
    description:
      "Welcome to the Automata Simulator, a full-stack web application designed to simulate and visualize Finite Automata. This comprehensive tool allows you to create, edit, and test both Deterministic Finite Automata (DFA) and Non-Deterministic Finite Automata (NFA).",
    image: "/projects/automata-project.png",
    technologies: [
      // FrontEnd
      "React",
      "Vite",
      "CSS",
      "TailwindCSS",
      "Heroicons",

      // BackEnd
      "Node.js",
      "Express.js",
      "Axios",
      "SQLite",
      "Sequelize",
      // CPP Areas
      "C++",
      "nlohmann/json",

      // Version Control
      "Git",
      "GitHub",
    ],
    githubUrl:
      "https://github.com/ShurikenBy6YoungTechStudents/automata-project.git",
    category: ["Full-Stack Web Application", "School Project"],
    status: "Completed",
    features: [
      "A full-stack web application that simulates and visualizes Finite Automata.",
      "Supports both Deterministic Finite Automata (DFA) and Non-Deterministic Finite Automata (NFA).",
      "Allows users to create, edit, and test automata models.",
      "Provides real-time visualization of the automata's behavior.",
      "Supports exporting automata models as JSON files.",
    ],
  },

  {
    id: "KhodKquiz",
    title: "KhodKquiz",
    description:
      "Academic Project - Full-Stack Web Development Cambodia Academy of Digital Technology. A comprehensive, enterprise-grade quiz application demonstrating modern web development practices, advanced database design, and professional software architecture. Built with React 19, Node.js, and PostgreSQL, featuring complete role-based access control, real-time analytics, and advanced admin management capabilities.",
    image: "/projects/KhodKquiz.png",
    technologies: [
      // Frontend
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Axios",
      "Lucide React",

      // Backend
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "bcrypt",

      // Development
      "Vite",
      "ESLint",
    ],
    githubUrl: "https://github.com/PhaySometh/KhodKquiz.git",
    category: ["Full-Stack Web Application", "School Project"],
    // Optional additional fields based on your architecture
    features: [
      "User Authentication & Authorization",
      "Real-time Stock Management",
      "PostgreSQL Database Integration",
      "Responsive Design",
      "RESTful API Architecture",
    ],
    status: "Completed", // or "In Development"
  },
];

export const skills: Skill[] = [
  { name: "PostgreSQL", category: "database" },
  { name: "Express.js", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
];

export const contactInfo: ContactInfo[] = [
  {
    platform: "Telegram",
    username: "@Durian_Lover67",
    url: "https://t.me/Durian_Lover67",
  },
  {
    platform: "Discord",
    username: "kaizen0734",
    url: "https://discord.com/users/kaizen0734",
  },
  {
    platform: "Email",
    username: "umlyrithyreach@gmail.com",
    url: "mailto:umlyrithyreach@gmail.com",
  },
  {
    platform: "Facebook",
    username: "lyrithyreach.um",
    url: "https://www.facebook.com/lyrithyreach.um",
  },
  {
    platform: "Instagram",
    username: "_.rithyreach._",
    url: "https://www.instagram.com/_.rithyreach._/",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/UmLyrithyreach",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lyrithyreach-um-848513364",
  },
];

export const personalInfo = {
  name: "Um Lyrithyreach",
  nickname: "Reach or Kaizen",
  title: "Web Developer",
  description: "Learn and develop responsive web applications to your needs.",
  specialization:
    "I'm a sophomore of Computer Science specialized in Software Development. I'm capable of creating Frond End designs and do a FULL stack projects. (Currently studying on PERN AND MERN stacks)",
  callToAction: "Let's create a user-friendly website together!",
  aboutText: `
    As a web development student at <span class="text-blue-600 text-xl font-bold">CADT</span> (Cambodia Academy of Digital Technology), 
    I've built a solid expertise in React and Next.js, complemented by hands-on experience with 
    <span class="text-orange-500">PERN</span> and <span class="text-orange-500">MERN</span> stacks. My recent full-stack 
    project showcases my proficiency in React, Next.js, Node.js, Express.js, and PostgreSQL. I'm excited to leverage 
    these skills in professional environments and continue growing as a versatile web developer.
    `,
  connectText:
    "I'm looking forward to being a part of your team! Let me help you develop your ideas into an internet reality.",
};
