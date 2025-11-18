/**
 * Centralized CV/Resume Data Configuration
 *
 * This file contains all professional information displayed on the website.
 * Update this file to modify any CV/resume data across the entire site.
 *
 * For type definitions, see ./types.ts
 */

import type {
  PersonalInfo,
  Experience,
  Education,
  Skills,
  PortfolioProject,
  Certification,
  SocialLinks,
  SiteConfig,
} from './types';

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

export const siteConfig: SiteConfig = {
  name: "Taufik Soleh",
  title: "Software Engineer",
  description: "Software Engineer with 7+ years of expertise in mobile development, backend systems, and team leadership, delivering scalable solutions across diverse technology stacks.",
  url: "https://taufiksoleh.github.io/cv",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Android Developer",
    "Mobile Developer",
    "Backend Engineer",
    "Kotlin",
    "Java",
    "Golang",
    "Ruby on Rails",
    "Spring Boot",
    "Flutter",
  ],
};

// ============================================================================
// PERSONAL INFORMATION
// ============================================================================

export const personalInfo: PersonalInfo = {
  name: "Taufik Soleh",
  title: "Software Engineer",
  location: "Jakarta, Indonesia",
  email: "taufikhope@gmail.com",
  phone: "+62 xxx-xxxx-xxxx", // Not displayed on contact page
  linkedin: "https://id.linkedin.com/in/taufiksoleh",
  github: "https://github.com/taufiksoleh",
  description: `Software Engineer with 7+ years of experience building robust mobile and backend solutions. Passionate about crafting efficient, scalable systems while collaborating with teams to deliver meaningful results.`,
  professionalSummary: `Software Engineer with 7+ years of experience in mobile development, backend engineering, and technical leadership. Proven track record of delivering scalable solutions across Android, Flutter, Spring Boot, Golang, and Ruby on Rails. Experienced in leading cross-functional teams, implementing CI/CD pipelines, and providing architectural guidance. Committed to writing clean, maintainable code and continuously learning new technologies to solve complex problems.`,
};

// ============================================================================
// PROFESSIONAL EXPERIENCE
// ============================================================================

export const experience: Experience[] = [
  {
    id: 1,
    company: "Bukalapak (Buka Investasi Bersama)",
    position: "Full Stack Engineer",
    duration: "Jan 2023 - Present",
    location: "Jakarta, Indonesia",
    description: [
      "Developed and maintained Android and Flutter applications for BMoney and RM Tools",
      "Built backend services using Ruby on Rails, Spring Boot, and Golang",
      "Created CI/CD pipelines to improve deployment speed and reliability",
      "Implemented MVVM and Android Design Patterns to enhance code quality and scalability",
      "Collaborated with cross-functional teams to deliver features under tight deadlines",
    ],
    technologies: [
      "Kotlin",
      "Flutter",
      "Ruby on Rails",
      "Spring Boot",
      "Golang",
      "CI/CD",
      "MVVM",
      "Android",
    ],
  },
  {
    id: 2,
    company: "Bukalapak",
    position: "Mobile Application Developer",
    duration: "Jan 2022 - Dec 2022",
    location: "Jakarta, Indonesia",
    description: [
      "Built core features for Android and Flutter applications",
      "Implemented Continuous Integration and Design Patterns in mobile codebases",
      "Improved performance and stability for RM Tools and other internal systems",
    ],
    technologies: [
      "Android",
      "Flutter",
      "Kotlin",
      "CI/CD",
      "Design Patterns",
    ],
  },
  {
    id: 3,
    company: "Koltiva",
    position: "Mobile Developer (Contract)",
    duration: "Jul 2021 - Jan 2022",
    location: "Jakarta, Indonesia",
    description: [
      "Developed mobile applications for agriculture-based solutions",
      "Implemented Android features and integrated backend services",
    ],
    technologies: [
      "Android",
      "Kotlin",
      "REST API",
    ],
  },
  {
    id: 4,
    company: "PT Indonesia Teknologi Informatika",
    position: "Software Engineering Manager",
    duration: "Jul 2019 - Jun 2021",
    location: "Tangerang Selatan, Indonesia",
    description: [
      "Led engineering teams in backend and mobile development projects",
      "Oversaw technical design, architecture, and development lifecycle",
      "Ensured code quality, scalability, and project delivery timelines",
    ],
    technologies: [
      "Team Leadership",
      "Architecture Design",
      "Backend Development",
      "Mobile Development",
      "Agile/Scrum",
    ],
  },
  {
    id: 5,
    company: "PT Wise Pacific Venture",
    position: "Software Engineer (Contract)",
    duration: "Jul 2018 - Jul 2019",
    location: "Jakarta, Indonesia",
    description: [
      "Worked on multiple enterprise projects for major clients",
      "Implemented big data solutions, credential management systems, and REST APIs",
      "Built custom reporting and dashboard solutions",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Python Flask",
      "Hadoop",
      "Sqoop",
      "PostgreSQL",
      "Hive",
    ],
    projects: [
      {
        name: "BigData KMP Mandiri Taspen Cikini Jakarta",
        description: [
          "Collected data from AS400 and MsSQL to Hive DB using Sqoop",
          "Performed batch operations via Hadoop Console",
          "Built REST APIs using Flask Python",
          "Created custom reporting with Java Spring Web",
        ],
      },
      {
        name: "CA PAM (Privilege Access Manager) - Telkomsel Smart Office",
        description: [
          "Implemented A2A (Application to Application) module",
          "Developed features for credential automation (username/password rotate)",
          "Built Java programs for data collection from PAM to PostgreSQL",
          "Created dashboards and daily activity reports",
        ],
      },
    ],
  },
  {
    id: 6,
    company: "CODE.ID",
    position: "Software Engineer (Contract)",
    duration: "Oct 2017 - Jul 2018",
    location: "Jakarta, Indonesia",
    description: [
      "Developed REST APIs and database structures for enterprise applications",
      "Supported UAT and production deployments",
      "Managed versioning and code reviews via GitLab",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "GitLab",
      "REST API",
    ],
    projects: [
      {
        name: "Smartfren Sales Tracking System (STS)",
        description: [
          "Built REST APIs using Java Spring Boot",
          "Designed databases using PostgreSQL based on business requirements",
          "Managed versioning via GitLab and supported UAT and production deployments",
        ],
      },
      {
        name: "Smart Retail Information System (SRIS)",
        description: [
          "Developed REST API modules and database structures",
          "Added features to multiple internal applications",
          "Conducted debugging, maintenance, and GitLab versioning",
        ],
      },
    ],
  },
  {
    id: 7,
    company: "PT Probiz Prima Integrasi",
    position: "Junior Programmer",
    duration: "Apr 2016 - Oct 2017",
    location: "Jakarta, Indonesia",
    description: [
      "Developed various HRMS, POS, and e-commerce applications",
      "Maintained backend logic, databases, and system enhancements",
      "Supported deployment and debugging processes",
    ],
    technologies: [
      "Java",
      "PHP",
      "MySQL",
      "JavaScript",
    ],
  },
  {
    id: 8,
    company: "iBee International",
    position: "Android Developer (Freelance)",
    duration: "Aug 2015 - Feb 2016",
    location: "Yogyakarta, Indonesia",
    description: [
      "Built Android applications for medical seminar events",
      "Integrated mobile features, authentication, and offline support",
    ],
    technologies: [
      "Android",
      "Java",
      "SQLite",
    ],
  },
];

// ============================================================================
// EDUCATION
// ============================================================================

export const education: Education[] = [
  {
    id: 1,
    institution: "University Name",
    degree: "Bachelor's Degree in Computer Science",
    duration: "2014 - 2018",
    description: "Focused on software engineering and web development",
  },
];

// ============================================================================
// SKILLS
// ============================================================================

export const skills: Skills = {
  languages: [
    { name: "Kotlin", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Java", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Golang", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Ruby", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
    { name: "Dart", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "JavaScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ],
  mobile: [
    { name: "Android (Native)", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Flutter", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Jetpack Compose", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg" },
  ],
  backend: [
    { name: "Spring Boot", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Ruby on Rails", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
    { name: "Golang", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Node.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "REST API", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  ],
  architecture: [
    { name: "MVVM", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Clean Architecture", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Microservices", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Design Patterns", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ],
  tools: [
    { name: "Git", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitLab", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Jira", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Firebase", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Jenkins", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "CI/CD", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ],
  database: [
    { name: "PostgreSQL", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "ObjectBox", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Hive", level: 78, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  ],
  other: [
    { name: "Technical Documentation", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" },
    { name: "Leadership", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "Agile/Scrum", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Code Review", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ],
};

// ============================================================================
// PORTFOLIO PROJECTS (Optional - Update with your personal projects)
// ============================================================================

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "BMoney Android App",
    description: "Mobile banking application with investment features, built with Kotlin and MVVM architecture",
    image: "/projects/project1.jpg",
    technologies: ["Kotlin", "Android", "MVVM", "Firebase"],
    featured: true,
  },
  {
    id: 2,
    title: "RM Tools",
    description: "Relationship manager tools for internal business operations, built with Flutter",
    image: "/projects/project2.jpg",
    technologies: ["Flutter", "Dart", "REST API"],
    featured: true,
  },
  {
    id: 3,
    title: "Enterprise Backend Services",
    description: "Microservices architecture using Spring Boot and Golang for high-traffic applications",
    image: "/projects/project3.jpg",
    technologies: ["Spring Boot", "Golang", "PostgreSQL", "Microservices"],
    featured: true,
  },
];

// ============================================================================
// CERTIFICATIONS (Optional - Add your certifications)
// ============================================================================

export const certifications: Certification[] = [
  // Add your certifications here
  // Example:
  // {
  //   id: 1,
  //   name: "Android Developer Certification",
  //   issuer: "Google",
  //   date: "2023",
  // },
];

// ============================================================================
// SOCIAL LINKS
// ============================================================================

export const socialLinks: SocialLinks = {
  linkedin: "https://id.linkedin.com/in/taufiksoleh",
  github: "https://github.com/taufiksoleh",
  twitter: "https://twitter.com/taufiksoleh", // Update if you have Twitter
  email: "mailto:taufikhope@gmail.com",
};
