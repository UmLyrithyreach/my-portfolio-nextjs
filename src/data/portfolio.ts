import {
  NavigationItem,
  Project,
  Skill,
  ContactInfo,
  SocialLink,
  Achievement,
} from "@/types";

export const navigationItems: NavigationItem[] = [
  { name: "home", href: "#home", label: "Home" },
  { name: "about", href: "#about", label: "About" },
  { name: "works", href: "#works", label: "Works" },
  { name: "contact", href: "#contact", label: "Contact" },
];

export const achievements: Achievement[] = [
  {
    id: "achievement-1",
    title: "Completed 100+ Projects",
    description: "Successfully completed a diverse range of projects, including web applications, mobile apps, and software tools.",
  },
  {
    id: "achievement-2",
    title: "Received 5+ Awards",
    description: "Awards for outstanding performance in various projects and competitions.",
  },
]

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
    liveUrl: "https://rithyreach-portfolio.vercel.app",
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
  {
    id: "chlartTask",
    title: "Chlart Task Management",
    description:
      "A task management system for small businesses to manage their tasks and projects efficiently.",
    image: "/projects/ChlartHero.png",
    technologies: [
      // Frontend
      "React",
      "Tailwind CSS",
      "Lucide React",

      // Development
      "Vite",
      "ESLint",
    ],
    githubUrl: "https://github.com/PhaySometh/Cadt_Y2_SE_G2_FE_Final_Project",
    category: ["Frontend Web Application", "School Project"],
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
  {
    id: "hostpital management",
    title: "Hospital Management System",
    description:
      "A comprehensive command-line Hospital Management System built with Dart that manages appointments, users, and hospital operations efficiently. Features multi-role authentication for patients, doctors, and administrators with appointment scheduling and management capabilities.",
    image: "/projects/hospital-management.png",
    technologies: [
      "Dart",
      "UUID",
      "JSON File Storage",
      "Test Framework",
    ],
    githubUrl: "https://github.com/Ming-99s/hostpital-managment.git",
    category: ["School Project"],
    // Optional additional fields based on your architecture
    features: [
      "Multi-role Authentication: Support for Patient, Doctor, and Admin users",
      "User Registration & Profile Management: Secure registration and profile management system",
      "Appointment Scheduling: Patients can book appointments with available doctors",
      "Appointment Tracking: Monitor appointments with multiple statuses (pending, approved, rejected, canceled)",
      "Role-Based Dashboards: Customized dashboards for each user type",
      "Doctor Availability Management: Doctors can manage their schedules and approve/reject appointments",
      "Administrative Oversight: Admins can manage all users and view system statistics",
      "JSON-based Data Persistence: File-based storage for users and appointments",
      "Comprehensive Unit Tests: Full test coverage for services, repositories, and domain logic",
    ],
    status: "Completed", // or "In Development"
  },
  {
    id: "clothes-store-management",
    title: "Clothes Store Management System",
    description:
      "A comprehensive Java-based Clothes Store Management System implemented as an object-oriented project. The system models customers, orders, clothes inventory, suppliers, and staff with complete CRUD operations and database persistence using MariaDB/MySQL.",
    image: "/projects/clothes-store.png",
    technologies: [
      "Java",
      "MariaDB",
      "JDBC",
      "OOP",
      "Maven",
    ],
    githubUrl: "https://github.com/UmLyrithyreach/GroupProjectOOP-JAVA-",
    category: ["School Project", "Group Project"],
    // Optional additional fields based on your architecture
    features: [
      "Customer Management: Add, update, and view customer details with contact information",
      "Order Processing: Create and track orders with status updates and payment management",
      "Inventory Management: Comprehensive clothes inventory with categorization and stock tracking",
      "Supplier Management: Store supplier details and track supplied products",
      "Staff Management: Employee information and role-based access control",
      "Database Integration: Full CRUD operations with MariaDB/MySQL database",
      "Data Persistence: SQL-based storage with proper schema design",
      "Business Logic Layer: Service classes for validation and transaction coordination",
      "MVC Architecture: Separation of concerns with Model-DAO-Service-UI layers",
    ],
    status: "Completed", // or "In Development"
  },
  {
    id: "intro to cyber",
    title: "Introducing to CyberSecurity Project",
    description:
      "A Python-based security tool designed to protect your computer against spyware, ransomware, worms, and other threats. This project demonstrates malware detection and prevention techniques, specifically targeting common malicious behaviors such as keyloggers, screen lockers, and data exfiltration.",
    technologies: [
      "Python",
      "PyQt5",
      "watchdog",
      "psutil",
      "pywin32",
      "GUI Development",
      "Windows Security",
      "Cybersecurity",
    ],
    githubUrl: "https://github.com/SeaHuyty/rnicrosoft-service",
    category: ["Security Tool", "Desktop Application", "School Project"],
    features: [
      "Real-Time Threat Detection: Keylogger detection, screenshot/webcam spyware detection, Chrome password stealer detection",
      "Telegram data exfiltration detection and screen locker ransomware detection",
      "Registry persistence detection (e.g., WindowsSystemUpdate) and USB worm detection",
      "Real-time file monitoring and manual scanning capabilities",
      "Emergency removal tools and quarantine system for malicious files",
      "PyQt5-based GUI with dashboard for easy threat management",
      "Simulates detection of 28+ different threat patterns",
    ],
    status: "Completed",
  },
  {
    id: "cadt-y2-se-g2-frontend",
    title: "CADT Y2 SE G2 - Frontend Final Project",
    description:
      "A modern frontend application built with React and Vite, featuring a comprehensive UI component library and responsive design. This full-featured React application showcases modern web development practices with HMR support for rapid development iteration.",
    liveUrl: "https://cadt-y2-se-g2-fe-final-project.vercel.app",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Headless UI",
      "Heroicons",
      "Lucide React",
      "DaisyUI",
      "React Router DOM",
      "Mantine",
      "Axios",
      "Express.js",
      "CORS",
    ],
    githubUrl: "https://github.com/PhaySometh/Cadt_Y2_SE_G2_FE_Final_Project",
    category: ["Frontend Web Application", "School Project"],
    features: [
      "Modern React 19 with Vite for optimized development and build",
      "Lightning-fast HMR (Hot Module Replacement) for rapid iteration",
      "Comprehensive UI component library with HeroUI and DaisyUI",
      "Responsive design with Tailwind CSS utility-first framework",
      "Client-side routing with React Router DOM",
      "Icon libraries: Heroicons and Lucide React",
      "Accessible components with Headless UI integration",
      "Mantine component library and custom hooks",
      "Promise-based HTTP requests with Axios",
      "Express backend with CORS support",
      "Environment variable management with Dotenv",
      "ESLint configured with React Hooks linting",
    ],
    status: "Completed",
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
