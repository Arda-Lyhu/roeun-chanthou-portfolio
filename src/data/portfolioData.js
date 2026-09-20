/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION FILE
 * ==============================================================================
 * You can edit all your text, projects, skills, and links directly in this file!
 * Everything updates automatically across the entire website.
 */

// 1. BASIC PROFILE & BIO
export const profileData = {
  name: "Roeun Chanthou",
  preferredName: "Chanthou",
  title: "Flutter & ASP.NET Developer",
  roleTagline: "Mobile App Development (iOS & Android) • ASP.NET Web Systems",
  location: "Phnom Penh, Cambodia",
  email: "roeunchanthou1401@gmail.com",
  phone: "+855 (0) 96 905 8292",
  avatar: "/images/me.jpg", // Located in public/images/me.jpg
  resumeUrl: "/roeun_chanthou_flutter_developer.pdf", // Located in public/
  bio: "Software Developer with around 11–12 months of practical experience building and deploying cross-platform mobile apps for Android & iOS with Flutter, alongside backend and web features with ASP.NET Core Web API and ASP.NET MVC (focusing on billing, invoicing, and accounting reporting functions).",
  status: "Open to work & opportunities",

  // Real stats displayed in Hero & about
  yearsExperience: "11-12 Mos",
  completedProjects: "6+",
  contributions: "240+",
  repositories: "15+",
};

// 2. HERO ANIMATED ROLES (Cycles every 3 seconds)
export const heroRoles = [
  "Flutter Developer (iOS & Android)",
  "ASP.NET Core Web API Developer",
  "ASP.NET MVC (Billing & Reporting)",
  "Mobile App Deployment (Play Store / App Store)",
];

// 3. PROJECT FILTER CATEGORIES
export const projectCategories = ["All", "Mobile Apps", "Web & Backend"];

// 4. PROJECTS LIST
// To add a new project, simply copy one object and paste it below!
export const projects = [
  {
    id: "billing-accounting-system",
    title: "Billing & Financial Reporting Module",
    category: "Web & Backend",
    subtitle:
      "Invoicing, payment tracking, and accounting reports with ASP.NET MVC",
    description:
      "Web module developed using ASP.NET MVC, C#, and SQL Server. Handles customer invoicing, automated billing calculations, payment logs, and essential accounting reports (such as transaction histories, balance overviews, and revenue summaries).",
    image: "/projects/product.png",
    githubUrl: "https://github.com/Roeun-Chanthou",
    demoUrl: "https://github.com/Roeun-Chanthou",
    tech: [
      "ASP.NET MVC",
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework",
      "Bootstrap",
    ],
    featured: true,
    highlights: [
      "Generated customer invoices and billing calculations",
      "Created accounting reports (transaction logs, billing summaries, and payment status)",
      "Database queries using Entity Framework and LINQ for reporting data",
    ],
    stats: { stars: 5, forks: 1, year: "2024" },
  },
  {
    id: "e-shopping",
    title: "E-Shopping Mobile App",
    category: "Mobile Apps",
    subtitle: "Flutter e-commerce customer ordering app (iOS & Android)",
    description:
      "Mobile e-commerce application built with Flutter. Includes user login/register, product browsing, category filtering, cart management, and order checkout.",
    image: "/projects/e-shopping.png",
    githubUrl: "https://github.com/Roeun-Chanthou/customer_order_app",
    demoUrl: "https://github.com/Roeun-Chanthou/customer_order_app",
    tech: ["Flutter", "Dart", "REST API", "Provider", "iOS / Android Build"],
    featured: true,
    highlights: [
      "State management using Provider",
      "REST API integration for authentication and product data",
      "Configured and built release APK/AAB and iOS bundle",
    ],
    stats: { stars: 12, forks: 3, year: "2024" },
  },
  {
    id: "wingbank-clone",
    title: "Wing Bank App UI Clone",
    category: "Mobile Apps",
    subtitle: "Mobile banking user interface clone in Flutter",
    description:
      "Recreation of Wing Bank mobile app interface in Flutter, focusing on banking screens, transfer forms, account balance views, and UI animations.",
    image: "/projects/wingbank.png",
    githubUrl: "https://github.com/Roeun-Chanthou/WingBank-Clone-Flutter",
    demoUrl: "https://github.com/Roeun-Chanthou/WingBank-Clone-Flutter",
    tech: ["Flutter", "Dart", "Custom UI", "Animations"],
    featured: true,
    highlights: [
      "Clean UI replication with custom widgets and animations",
      "Transfer flow, account balance preview, and QR code screens",
    ],
    stats: { stars: 10, forks: 2, year: "2024" },
  },
  {
    id: "vityealay",
    title: "Vityealay — Khmer Learning App",
    category: "Mobile Apps",
    subtitle: "Khmer language learning and quiz app",
    description:
      "Educational mobile app for Khmer language and quiz practice, built with Flutter, local SQLite storage, and interactive lessons.",
    image: "/projects/vityealay.png",
    githubUrl: "https://github.com/Makra-Pov/Vityealay",
    demoUrl: "https://github.com/Makra-Pov/Vityealay",
    tech: ["Flutter", "Dart", "SQLite", "Firebase"],
    featured: true,
    highlights: [
      "Interactive quiz questions with immediate feedback",
      "Local data persistence using SQLite database",
    ],
    stats: { stars: 8, forks: 2, year: "2023" },
  },
  {
    id: "makeup-app",
    title: "MakeUp Product Catalog",
    category: "Mobile Apps",
    subtitle: "Product catalog and review interface",
    description:
      "Flutter application displaying cosmetic products with search, category filtering, detail views, and reviews.",
    image: "/projects/makeup.png",
    githubUrl: "https://github.com/Roeun-Chanthou/ecommerc_app",
    demoUrl: "https://github.com/Roeun-Chanthou/ecommerc_app",
    tech: ["Flutter", "Dart", "REST API", "Provider"],
    featured: false,
    highlights: [
      "REST API data fetching and JSON parsing",
      "Grid layout and product details page",
    ],
    stats: { stars: 6, forks: 1, year: "2023" },
  },
  {
    id: "ecommerce-api",
    title: "Flutter REST API Integration",
    category: "Web & Backend",
    subtitle: "API fetching, pagination & caching practice",
    description:
      "Practice project demonstrating REST API integration with Flutter, handling HTTP requests, search filters, and local data caching.",
    image: "/projects/product.png",
    githubUrl: "https://github.com/Roeun-Chanthou/flutter_fetch_api",
    demoUrl: "https://github.com/Roeun-Chanthou/flutter_fetch_api",
    tech: ["Flutter", "Dart", "REST API", "HTTP / Dio"],
    featured: false,
    highlights: [
      "Handling network errors and loading states",
      "Filtering and displaying remote JSON API data",
    ],
    stats: { stars: 15, forks: 5, year: "2024" },
  },
];

// 5. SKILLS MATRIX BY DOMAIN
// You can add, rename, or remove any skill easily here
export const skillCategories = [
  {
    category: "Mobile & Deployment",
    icon: "Smartphone",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Flutter", exp: "11-12 mos" },
      { name: "Dart", exp: "11-12 mos" },
      { name: "Android Deploy (APK / AAB)", exp: "11 mos" },
      { name: "iOS Deploy (Xcode / IPA)", exp: "10 mos" },
      { name: "Provider & State Management", exp: "11 mos" },
      { name: "REST API Integration", exp: "11 mos" },
    ],
  },
  {
    category: "Backend & .NET",
    icon: "Server",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "ASP.NET Core Web API", exp: "11-12 mos" },
      { name: "ASP.NET MVC", exp: "11-12 mos" },
      { name: "C# Programming", exp: "11-12 mos" },
      { name: "Entity Framework & LINQ", exp: "11 mos" },
      { name: "Billing & Invoicing Logic", exp: "11 mos" },
      { name: "Accounting Reports & Queries", exp: "10 mos" },
    ],
  },
  {
    category: "Databases & Web",
    icon: "Globe",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "SQL Server", exp: "11-12 mos" },
      { name: "MySQL & PostgreSQL", exp: "1 yr" },
      { name: "HTML / CSS / JavaScript", exp: "1+ yr" },
      { name: "Firebase (Auth / Firestore)", exp: "1 yr" },
      { name: "SQLite & Local Caching", exp: "10 mos" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "Cpu",
    color: "from-amber-500 to-rose-500",
    skills: [
      { name: "Git & GitHub", exp: "1+ yr" },
      { name: "Xcode & Android Studio", exp: "1+ yr" },
      { name: "Visual Studio & VS Code", exp: "1+ yr" },
      { name: "Postman API Testing", exp: "1 yr" },
      { name: "Figma (UI Implementation)", exp: "1 yr" },
    ],
  },
];

// 6. WORK EXPERIENCE TIMELINE
export const experiences = [
  {
    role: "Mobile App & ASP.NET Developer",
    company: "Software & Financial Solutions",
    location: "Phnom Penh, Cambodia",
    period: "2024 - Present (~11–12 Months)",
    type: "Full-Time",
    description:
      "Developing cross-platform mobile apps with Flutter, managing release builds for Android & iOS, and building ASP.NET Core & MVC web features for billing, invoicing, and accounting report queries.",
    achievements: [
      "Built and deployed Flutter mobile applications across Android (APK / App Bundle) and iOS (Xcode / TestFlight)",
      "Implemented billing and invoice generation features with payment tracking in ASP.NET MVC",
      "Created accounting reports (transaction logs, billing summaries, and customer statements) with SQL Server and Entity Framework",
      "Developed ASP.NET Core Web APIs to deliver data to Flutter mobile apps",
    ],
    tech: [
      "Flutter",
      "Dart",
      "iOS & Android Deploy",
      "ASP.NET Core",
      "ASP.NET MVC",
      "C#",
      "SQL Server",
    ],
  },
  {
    role: "Junior Mobile Developer / Learning Projects",
    company: "Self-Directed & Academic Projects",
    location: "Phnom Penh, Cambodia",
    period: "2023 - 2024",
    type: "Projects",
    description:
      "Practiced cross-platform mobile development with Flutter and explored mobile app compilation and packaging.",
    achievements: [
      "Completed multiple Flutter demo apps including e-commerce, quizzes, and banking UI clones",
      "Learned state management (Provider), REST API handling, APK compilation, and Git version control",
    ],
    tech: ["Flutter", "Dart", "REST API", "SQLite", "Firebase"],
  },
];

// 7. EDUCATION & LEARNING JOURNEY
export const educationAndLearning = [
  {
    title: "Computer Science / Software Development",
    institution: "University / Institute in Cambodia",
    year: "Ongoing / Graduate",
    description:
      "Core computer science fundamentals, object-oriented programming with C#, database design, and mobile development.",
  },
  {
    title: "Flutter & Mobile Development Course",
    institution: "Online Training & Practical Projects",
    year: "2023 - 2024",
    description:
      "Hands-on Flutter widgets, asynchronous Dart programming, state management, and API consumption.",
  },
  {
    title: "ASP.NET Core & MVC Web Development",
    institution: "Practical Enterprise Training",
    year: "2024",
    description:
      "C#, ASP.NET Core Web API, ASP.NET MVC architecture, Entity Framework Core, and SQL Server.",
  },
];

// 8. SOCIAL LINKS & CONTACT CHANNELS
export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Roeun-Chanthou",
    handle: "@Roeun-Chanthou",
    icon: "Github",
    color: "hover:text-cyan-400 hover:border-cyan-400/40",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/roeun-chanthou",
    handle: "Roeun Chanthou",
    icon: "Linkedin",
    color: "hover:text-blue-400 hover:border-blue-400/40",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100027840241518",
    handle: "Chanthou Roeun",
    icon: "Facebook",
    color: "hover:text-indigo-400 hover:border-indigo-400/40",
  },
  {
    name: "Email",
    url: "mailto:roeunchanthou1401@gmail.com",
    handle: "roeunchanthou1401@gmail.com",
    icon: "Mail",
    color: "hover:text-emerald-400 hover:border-emerald-400/40",
  },
];
