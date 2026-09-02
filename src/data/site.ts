export const site = {
  name: "Mohsan Iqbal",
  firstName: "Mohsan",
  lastName: "Iqbal",
  role: "Front-End Web Developer",
  title: "Mohsan Iqbal | Front-End Web Developer",
  description:
    "Front-End Web Developer with a background in Software Engineering, specializing in React, Next.js, TypeScript, and Tailwind CSS.",
  greeting: "hi,i'M",
  terminal: {
    tab: "mohsan.dev",
    prompt: "mohsan@frontend:~$",
    staticCommand: "whoami",
    commands: [
      "npm create next-app",
      "git commit -m 'new feature'",
      "npm run dev",
      "Building Responsive Websites",
      "Developing with React & Next.js",
      "Creating Modern UI/UX",
      "Optimizing Website Performance",
      "Learning TypeScript",
      "Deploying Projects",
      "Software Engineering Graduate",
    ],
  },
  heroDescriptions: [
    {
      parts: [
        { text: "I am a " },
        { strong: "Front-End Web Developer" },
        {
          text: " with a background in Software Engineering, passionate about building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into clean, interactive digital experiences using the latest web technologies.",
        },
      ],
    },
    {
      parts: [
        { text: "Specializing in " },
        { strong: "React, Next.js, TypeScript, and Tailwind CSS" },
        {
          text: ", I focus on creating fast, scalable, and visually appealing interfaces. My goal is to develop web solutions that deliver exceptional user experiences while maintaining high performance and code quality.",
        },
      ],
    },
  ],
  resumeUrl: "https://mohsancv.netlify.app",
  heroImage: "/2.png",
  stats: [
    { number: "1+", label: "Years Experience" },
    { number: "10+", label: "Projects" },
    { number: "7+", label: "Client" },
  ],
  badge: "1+ Years Experience",
  heroCtas: [
    { label: "View Resume", href: "https://mohsancv.netlify.app", variant: "hero", external: true },
    { label: "Get In Touch", href: "#contact", variant: "secondary" },
    { label: "Games Development", href: "#ai-deployment", variant: "fire", badge: "LATEST" },
  ],
  socials: [
    { href: "https://github.com/MohsanCodes", label: "GitHub", icon: "fa-brands fa-github" },
    {
      href: "https://www.linkedin.com/in/mohsan-iqbal-1b581a327/",
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
    },
    {  href: "https://mail.google.com/mail/?view=cm&fs=1&to=mohsaniqbal041@gmail.com", label: "Email", icon: "fa-solid fa-envelope" },
  ],
  nav: [
    { href: "#top", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#ai-deployment", label: "AI Agentic Development", badge: "TRENDING" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Endorsements" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export const experience = [
  {
    location: "Remote",
    date: "Sep 2024 - Present",
    company: "SmashCloud",
    role: "Full-Stack MERN Stack Engineer",
    achievements: [
      "Architecting mission-critical full-stack ecosystems using React, Node.js, and TypeScript, achieving 3x faster development cycles through advanced Agentic AI workflows.",
      "Engineering autonomous AI agent platforms leveraging OpenAI's latest models, custom embeddings, and vector databases for sophisticated NLP task execution.",
      "Orchestrating robust serverless infrastructures on AWS (Lambda, DynamoDB, Cognito), optimizing for high availability and sub-second latency.",
      "Developing enterprise-grade REST and GraphQL API architectures with granular RBAC, real-time WebSockets, and military-grade security protocols.",
      "Mentoring engineering teams on AI-First development philosophies, streamlining CI/CD pipelines with automated intelligent testing.",
    ],
    tech: ["React.js", "Node.js", "Next.js", "AWS", "DynamoDB", "AI Integration", "TypeScript"],
  },
  {
    location: "Remote",
    date: "2023 - 2024",
    company: "Xero Bit Technologies",
    role: "Full-Stack Software Engineer",
    achievements: [
      "Engineered high-traffic full-stack platforms for global clients utilizing Svelte, Next.js, and PostgreSQL, focusing on pixel-perfect UIs and extreme performance.",
      "Scaled backend systems to handle concurrent users through Redis-backed caching and database query optimization.",
      "Owned the full SDLC of core modules, from conceptual design to production deployment, ensuring 99.9% uptime.",
      "Cultivated a culture of code excellence through rigorous peer reviews and the implementation of automated unit/integration testing suites.",
    ],
    tech: ["React.js", "Next.js", "Svelte", "Node.js", "PostgreSQL", "TypeScript", "Redis"],
  },
  {
    location: "Remote Contract",
    date: "Feb 2022 - Aug 2023",
    company: "CQ Technologies",
    role: "Full-Stack Software Engineer",
    achievements: [
      "Spearheaded the development of complex automation engines and large-scale data scrapers using Puppeteer and headless browser clusters.",
      "Designed and deployed real-time data synchronization layers using WebSockets and Redis for low-latency user experiences.",
      "Refactored legacy codebases into modern TypeScript modules, significantly reducing technical debt and improving maintainability.",
      "Collaborated with international stakeholders to deliver bespoke software solutions tailored to niche market requirements.",
    ],
    tech: ["React.js", "Node.js", "Puppeteer", "PostgreSQL", "TypeScript", "Redis", "WebSockets"],
  },
  {
    location: "On-site",
    date: "May 2020 - Feb 2022",
    company: "Fistix",
    role: "Full-Stack MERN Stack Developer",
    achievements: [
      "Championed the development of multi-platform mobile applications using React Native and Ionic, reaching thousands of active users.",
      "Optimized MongoDB schemas and backend logic for real-time applications, resulting in significant performance gains in data retrieval.",
      "Integrated complex third-party services including Firebase Auth, Cloud Messaging, and payment gateways.",
      "Resolved critical system bottlenecks through deep-dive debugging and custom performance profiling.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "TypeScript", "React Native", "Firebase", "Ionic"],
  },
] as const;

export const agenticProjects = [
  {
    name: "CareerLab AI",
    tagline: "Tutoring Ecosystem",
    href: "https://play.google.com/store/apps/details?id=io.ms.ten.ai",
    image:
      "https://play-lh.googleusercontent.com/L-rI5hHWrOm1VB4VKG2GdRkjtf2o2RZw3lyhyh8JC_2je9tj_mNYcjlg9Q3SliXCfECRKMZxZ2YVuNuH511KHLA=s256-rw",
  },
  {
    name: "Resume Reviewer",
    tagline: "Agentic NLP",
    href: "https://play.google.com/store/apps/details?id=io.ms.resume.reviewer",
    image:
      "https://play-lh.googleusercontent.com/ac6o0Xl6ytxDwgxE6kDsjraPYD11-AcTeixZZbOJufy8KyV2OUBzvS9N78AqbA0P9SqsSAAZ0IeQZdrrmK2t=s256-rw",
  },
  {
    name: "Math IQ Test",
    tagline: "Challenge Engine",
    href: "https://play.google.com/store/apps/details?id=io.ms.math.iq.test",
    image:
      "https://play-lh.googleusercontent.com/6GpgkTZ_tyM4eznBBTaes3pdmvPBMDqQQ76T3NHM8n3MeOyo694Sr0661enEczFAVXT3dCpVxDAaR7NQ7j866wY=s256-rw",
  },
  {
    name: "Word Connect",
    tagline: "Vocab Optimizer",
    href: "https://play.google.com/store/apps/details?id=io.ms.words",
    image:
      "https://play-lh.googleusercontent.com/1V6ExgdvW_7m9KAUCfbr_B6jPI_OkcshtdiLybIhyAyESPVaBW7P-P3EK9WzS7Ss2k5bkljA8VTFqQUiFZPR=s256-rw",
  },
  {
    name: "Tic Tac Toe AI",
    tagline: "Strategic Agent",
    href: "https://play.google.com/store/apps/details?id=com.tictacpro",
    image:
      "https://play-lh.googleusercontent.com/tvxA3XmxAFBNSu_cmirfMkVZ55cqLcfF7bhLMws5lduzIml4MEDM7G-2sHRmhOEPclLnpIVa___eiwkQfycKVRQ=s256-rw",
  },
  {
    name: "Ninja Typing",
    tagline: "Precision Engine",
    href: "https://play.google.com/store/apps/details?id=com.typingspeedchallenge",
    image:
      "https://play-lh.googleusercontent.com/-6Px3NuloqMKJS1JMZk888UZQmp-xrGWkWohyEdMTnUp7BFh0gpdLoLpis_4L5vVuR1bvEJnoFr1E_jKphbI9A=s256-rw",
  },
] as const;

export const projects = [
  {
    title: "AI-Powered Training Portal",
    badge: "AI",
    badgeClass: "project-card__badge--ai",
    description:
      "Architected a comprehensive intelligent training ecosystem featuring autonomous agent layers for workflow automation. Leveraged LLMs and machine learning for predictive performance analytics and personalized curriculum generation.",
    tech: ["React", "Node.js", "TypeScript", "OpenAI API", "GPT-based NLP", "Machine Learning", "AWS", "DynamoDB"],
  },
  {
    title: "LinkedIn/Indeed Scraping",
    badge: "Automation",
    badgeClass: "project-card__badge--automation",
    description:
      "Engineered a high-concurrency automation framework for cross-platform data extraction. Utilized headless browser clusters and intelligent proxy rotation to handle massive datasets with high reliability.",
    tech: ["Node.js", "Puppeteer", "TypeScript", "Web Scraping", "Automation", "REST APIs"],
  },
  {
    title: "Zerv.io",
    badge: "Web App",
    badgeClass: "project-card__badge--web",
    description:
      "Designed and scaled a multi-tenant wellness marketplace connecting thousands of users with healthcare providers. Implemented complex real-time scheduling algorithms and high-availability backend services.",
    tech: ["React", "Node", "Parse", "TypeScript", "Sass", "MongoDB"],
  },
  {
    title: "Brain Test Quiz | Increase IQ",
    badge: "Mobile",
    badgeClass: "project-card__badge--mobile",
    description:
      "A cognitively demanding mobile platform featuring complex algorithmic puzzles. Optimized for engagement through real-time feedback loops and adaptive difficulty scaling.",
    tech: ["Ionic React", "Firebase", "AdMob", "TypeScript", "HTML/CSS", "FireStore"],
  },
  {
    title: "Grow & Share App",
    badge: "Web App",
    badgeClass: "project-card__badge--web",
    description:
      "Engineered a scalable community-driven social infrastructure. Optimized for high-concurrency interactions and seamless user-generated content distribution.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Instant Space App",
    badge: "Web App",
    badgeClass: "project-card__badge--web",
    description:
      "Developed a real-time collaborative workspace environment. Features low-latency state synchronization and high-performance resource management protocols.",
    tech: ["React", "Next.js", "Node.js", "WebSockets", "TypeScript"],
  },
  {
    title: "Planet Re-bag",
    badge: "Mobile",
    badgeClass: "project-card__badge--mobile",
    description:
      "Built a cross-platform sustainability engine integrated with real-time tracking. Focused on user-centric design and high-efficiency mobile performance.",
    tech: ["React Native", "TypeScript", "Firebase", "Native App Development"],
  },
  {
    title: "Seller and Retail App",
    badge: "E-commerce",
    badgeClass: "project-card__badge--ecommerce",
    description:
      "Architected a full-cycle e-commerce infrastructure with advanced inventory intelligence and real-time transaction processing for large-scale retail operations.",
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript", "REST APIs"],
  },
  {
    title: "Doctor Appointment App",
    badge: "Mobile",
    badgeClass: "project-card__badge--mobile",
    description:
      "Spearheaded the development of a high-reliability healthcare scheduling system. Features complex doctor-patient matching logic and real-time appointment orchestration.",
    tech: ["React Native", "Firebase", "TypeScript"],
  },
] as const;

export const skillCategories = [
  {
    title: "AI Tools",
    skills: [
      { name: "Cursor", icon: "fa-solid fa-terminal", color: "cursor" },
      { name: "Google Antigravity", icon: "fa-brands fa-google", color: "google-antigravity" },
      { name: "ChatGPT", icon: "fa-solid fa-comment-dots", color: "chatgpt" },
      { name: "Google Gemini", icon: "fa-brands fa-google", color: "gemini" },
      { name: "Claude AI", icon: "fa-solid fa-microchip", color: "claude" },
      { name: "Perplexity AI", icon: "fa-solid fa-magnifying-glass", color: "perplexity" },
      { name: "GitHub Copilot", icon: "fa-brands fa-github", color: "copilot" },
      { name: "OpenAI API", icon: "fa-solid fa-plug", color: "openai" },
      { name: "Groq Ai", icon: "fa-solid fa-bolt", color: "groq" },
      { name: "z.ai", icon: "fa-solid fa-bolt", color: "zai" },
      { name: "Tabnine", icon: "fa-solid fa-wand-magic-sparkles", color: "tabnine" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "fa-brands fa-react", color: "react" },
      { name: "React Native", icon: "fa-solid fa-mobile-screen-button", color: "react-native" },
      { name: "Next.js", icon: "fa-solid fa-cube", color: "nextjs" },
      { name: "Svelte", icon: "fa-solid fa-bolt-lightning", color: "svelte" },
      { name: "TypeScript", icon: "fa-solid fa-file-code", color: "typescript" },
      { name: "JavaScript", icon: "fa-brands fa-js", color: "javascript" },
      { name: "HTML/CSS/SASS", icon: "fa-brands fa-html5", color: "html" },
      { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt", color: "tailwind" },
      { name: "Shadcn UI", icon: "fa-regular fa-window-maximize", color: "shadcn" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "bootstrap" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "fa-brands fa-node-js", color: "nodejs" },
      { name: "Express", icon: "fa-solid fa-server", color: "express" },
      { name: "Sails.js", icon: "fa-solid fa-ship", color: "sails" },
      { name: "Fast API", icon: "fa-solid fa-rocket", color: "fastapi" },
      { name: "REST APIs", icon: "fa-solid fa-right-left", color: "rest" },
      { name: "GraphQL", icon: "fa-solid fa-diagram-project", color: "graphql" },
      { name: "WebSockets", icon: "fa-solid fa-tower-broadcast", color: "websockets" },
      { name: "Puppeteer", icon: "fa-solid fa-paw", color: "puppeteer" },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", icon: "fa-solid fa-database", color: "mongodb" },
      { name: "PostgreSQL", icon: "fa-solid fa-database", color: "postgresql" },
      { name: "MySQL", icon: "fa-solid fa-database", color: "mysql" },
      { name: "DynamoDB", icon: "fa-solid fa-database", color: "dynamodb" },
      { name: "AWS / EC2", icon: "fa-brands fa-aws", color: "aws" },
      { name: "Docker", icon: "fa-brands fa-docker", color: "docker" },
      { name: "Firebase", icon: "fa-solid fa-fire-flame-curved", color: "firebase" },
      { name: "Google Cloud", icon: "fa-brands fa-google", color: "gcp" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "fa-brands fa-git-alt", color: "git" },
      { name: "Redis", icon: "fa-solid fa-layer-group", color: "redis" },
      { name: "Jest", icon: "fa-solid fa-flask-vial", color: "jest" },
      { name: "Knex.js", icon: "fa-solid fa-code", color: "knex" },
      { name: "AI Integration", icon: "fa-solid fa-brain", color: "ai-integration" },
      { name: "SQS", icon: "fa-solid fa-list-check", color: "sqs" },
      { name: "VPS", icon: "fa-solid fa-server", color: "vps" },
      { name: "npm / Yarn / PNPM", icon: "fa-brands fa-npm", color: "package-managers" },
      { name: "Postman / Swagger", icon: "fa-solid fa-paper-plane", color: "postman" },
      { name: "Monorepo", icon: "fa-solid fa-sitemap", color: "monorepo" },
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Raza Awan",
    title: "Software Engineer | Full Stack",
    quote:
      "I've had the pleasure of working with Mohsan Iqbal at Xerobit Technology. He is a hardworking and talented engineer with a strong command of both front-end and back-end development.",
    relationship: "Same Team",
  },
  {
    name: "kaleem ullah",
    title: "Software Engineer @ Interact CX",
    quote:
      "I had the pleasure of working closely with Mohsan on several projects, and I can confidently say that they are an exceptional developer. Their deep technical expertise and problem-solving skills are truly impressive.",
    relationship: "Same Team",
  },
  {
    name: "Usama Bashir",
    title: "Sr. Full Stack JavaScript Engineer",
    quote:
      "I highly recommend Mohsan Iqbal as a skilled and dedicated full stack MERN developer. His proficiency in MongoDB, Express.js, React, and Node.js is evident in the seamless applications he delivers.",
    relationship: "Same Team",
  },
  {
    name: "hafiz hasnain",
    title: "Full Stack Engineer | Node.js",
    quote:
      "Mohsan demonstrated a profound expertise in both front-end and back-end technologies. His analytical skills and systematic approach to problem-solving are impressive.",
    relationship: "Same Team",
  },
  {
    name: "HANAN AHMAD",
    title: "Full Stack Developer | GRAPHQL",
    quote:
      "It's been a real pleasure working with him. Mohsan is a proactive and motivated Full Stack Developer with the ability to make good, sometimes bold decisions. Loyal perfectionist.",
    relationship: "Reported to Muhammad",
  },
  {
    name: "Abdul Wahab Bhatti",
    title: "Assistant Web Application Developer",
    quote:
      "Mohsan is very talented, methodical, dedicated and hardworking developer. He is very professional and easy to work with. Mohsan's calm work style has won him great respect.",
    relationship: "Senior to Abdul Wahab",
  },
  {
    name: "Mudassir Maqbool",
    title: "Full Stack Web Developer",
    quote:
      "Mohsan is a great fellow and a very good professional. I have worked with him and found him very methodical. He takes care of every aspect of Quality before handing it over.",
    relationship: "Senior to Mudassir",
  },
  {
    name: "Raja Muhammad Usman",
    title: "Software Engineer | MERN",
    quote:
      "I highly recommend Mohsan Iqbal as a skilled and dedicated full stack MERN developer. He is very professional and easy to work with. Mohsan's calm work style has won him respect.",
    relationship: "Same Team",
  },
  {
    name: "Hamza Akbar",
    title: "Frontend Web Designer",
    quote:
      "In the projects I worked with Mohsan, I found him a detail oriented and a hardworking person. He was strong technically and was always focused on his work.",
    relationship: "Senior to Hamza",
  },
] as const;

export const contact = {
  intro:
    "Have a visionary project or a challenging problem to solve? I'm currently open to high-impact collaborations and engineering leadership roles. Let's build the future together.",
  email: "mohsaniqbal041@gmail.com",
  phone: "+92 3043285741",
  phoneHref: "tel:+923043285741",
  location: "bahawalpur, Pakistan",
  website: { label: "MohsanCodes.com", href: "" },
  whatsapp: { label: "Message Me Direct", href: "https://wa.me/923043285741" },
  linkedin: "https://www.linkedin.com/in/mohsan-iqbal-1b581a327/",
} as const;
