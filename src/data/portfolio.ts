// Single source of truth for all portfolio content.

export const profile = {
  name: 'Jeeva M',
  firstName: 'Jeeva',
  role: 'Java Backend Developer',
  tagline: 'I build scalable backends and clean REST APIs.',
  location: 'Chennai, Tamil Nadu, India',
  available: true,
  email: 'mjeeva7695@gmail.com',
  phone: '+91 7695821889',
  resumeUrl: '/resume.pdf',
  intro:
    'Recent B.Tech Information Technology graduate (2026) with Java Full Stack Development training. Skilled in Java, Spring Boot, REST API development, MySQL, HTML, CSS, and JavaScript. Hands-on experience in MVC architecture, database integration, and Data Structures & Algorithms.',
  profession: 'Java Full Stack Developer — Spring Boot · REST API · MySQL',
  achievements: [
    'B.Tech Information Technology — Dr. M.G.R. Educational and Research Institute, Chennai (CGPA: 7.0)',
    'Java Full Stack Development Training — SLA Institute, Chennai',
    'Built a production-grade Smart Library Management System with Spring Boot & MySQL',
    'Developed a Crop Yield Prediction web app integrating ML via Flask REST API',
  ],
  stats: [
    { label: 'Projects Built', value: 2, suffix: '+' },
    { label: 'CGPA', value: 7, suffix: '.0' },
    { label: 'Skills Mastered', value: 15, suffix: '+' },
    { label: 'Graduation Year', value: 2026, suffix: '' },
  ],
};

export type NavItem = { label: string; path: string };

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Writing', path: '/articles' },
  { label: 'Profiles', path: '/profiles' },
  { label: 'Resume', path: '/resume' },
  { label: 'Hire me', path: '/start' },
  { label: 'Contact', path: '/contact' },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: 'Smart Library Management System',
    category: 'Backend / API',
    description:
      'RESTful API system for managing books, users, and reservation workflows. Implements full CRUD with Spring Data JPA, Hibernate, and MySQL, following a clean MVC architecture validated via Postman.',
    tags: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Hibernate', 'Spring Data JPA'],
    image: 'https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=900',
    link: 'https://github.com',
    year: '2024',
  },
  {
    title: 'Crop Yield Prediction System',
    category: 'B.Tech Major Project',
    description:
      'Web application that integrates a responsive HTML/CSS/JavaScript frontend with a Flask REST API to deliver ML-based crop yield and fertilizer recommendations in real time.',
    tags: ['Python', 'Flask', 'REST API', 'HTML', 'CSS', 'JavaScript', 'Machine Learning'],
    image: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=900',
    link: 'https://github.com',
    year: '2025',
  },
];

export type Skill = { name: string; level: number; icon: string; color: string };

export const skills: Skill[] = [
  { name: 'Java', level: 88, icon: 'Coffee', color: '#f97316' },
  { name: 'Spring Boot', level: 82, icon: 'Leaf', color: '#22c55e' },
  { name: 'REST API', level: 85, icon: 'Globe', color: '#22d3ee' },
  { name: 'MySQL / SQL', level: 80, icon: 'Database', color: '#3b82f6' },
  { name: 'HTML & CSS', level: 85, icon: 'Layout', color: '#f472b6' },
  { name: 'JavaScript', level: 75, icon: 'Zap', color: '#fbbf24' },
  { name: 'Git & GitHub', level: 78, icon: 'GitBranch', color: '#e7eaf3' },
  { name: 'Data Structures & Algorithms', level: 72, icon: 'Network', color: '#a78bfa' },
];

export type Article = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  link: string;
};

export const articles: Article[] = [
  {
    title: 'Building RESTful APIs with Spring Boot — A Beginner\'s Walkthrough',
    excerpt:
      'A step-by-step guide to scaffolding a Spring Boot project, defining controllers, services, and repositories, and testing endpoints with Postman.',
    date: 'Jun 2025',
    readTime: '8 min',
    tag: 'Spring Boot',
    link: '#',
  },
  {
    title: 'Understanding MVC Architecture in Java Web Apps',
    excerpt:
      'A practical look at how the Controller–Service–Repository pattern keeps backend code clean, testable, and maintainable.',
    date: 'Apr 2025',
    readTime: '6 min',
    tag: 'Architecture',
    link: '#',
  },
  {
    title: 'Hibernate & Spring Data JPA: What\'s the Difference?',
    excerpt:
      'Demystifying the relationship between Hibernate ORM and Spring Data JPA — and when to reach for each.',
    date: 'Feb 2025',
    readTime: '7 min',
    tag: 'Java',
    link: '#',
  },
  {
    title: 'MySQL Query Optimisation Tips Every Developer Should Know',
    excerpt:
      'Practical indexing strategies, EXPLAIN plans, and query rewrites that cut response times in real projects.',
    date: 'Dec 2024',
    readTime: '5 min',
    tag: 'Database',
    link: '#',
  },
  {
    title: 'DSA Patterns I Wish I Knew Earlier',
    excerpt:
      'Sliding window, two pointers, and backtracking — the recurring patterns that unlock LeetCode mediums.',
    date: 'Oct 2024',
    readTime: '9 min',
    tag: 'DSA',
    link: '#',
  },
];

export type CodingProfile = {
  platform: string;
  handle: string;
  stat: string;
  statLabel: string;
  link: string;
  color: string;
};

export const codingProfiles: CodingProfile[] = [
  { platform: 'GitHub', handle: '@Jeeva', stat: 'Active', statLabel: 'Repositories', link: 'https://github.com/jeeva0331', color: '#e7eaf3' },
  { platform: 'HackerRank', handle: '@Jeeva', stat: 'Practicing', statLabel: 'DSA Problems', link: 'https://www.hackerrank.com/profile/mjeeva7695', color: '#fbbf24' },
  { platform: 'LinkedIn', handle: 'Jeeva', stat: 'Open', statLabel: 'to opportunities', link: 'https://www.linkedin.com/in/jeeva-m-1966372a1?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: '#0a66c2' },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
  color: string;
};

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin', color: '#0a66c2' },
  { label: 'GitHub', href: 'https://github.com', icon: 'Github', color: '#e7eaf3' },
  { label: 'Email', href: 'mailto:mjeeva7695@gmail.com', icon: 'Mail', color: '#22d3ee' },
];
