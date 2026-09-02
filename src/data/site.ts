export const site = {
  name: "Mohsan Iqbal",
  firstName: "Mohsan",
  lastName: "Iqbal",
  role: "AI-Powered Full-Stack Web Developer",
  title: "Mohsan Iqbal | AI-Powered Full-Stack Web Developer",
  description:
    "AI-Powered Full-Stack Web Developer focused on building modern, responsive, and scalable web applications with React, Next.js, TypeScript, Go, REST APIs, and database-backed architectures.",
  greeting: "hi,i'M",
  terminal: {
    tab: "mohsan.dev",
    prompt: "mohsan@fullstack:~$",
    staticCommand: "whoami",
    commands: [
      "npm create next-app",
      "go run main.go",
      "git commit -m 'new feature'",
      "npm run dev",
      "Building Full-Stack Web Apps",
      "Developing with React & Next.js",
      "Writing Go REST APIs",
      "Creating Modern UI/UX",
      "Optimizing Website Performance",
      "Integrating REST APIs",
      "Deploying to Production",
      "Software Engineering Graduate",
    ],
  },
  heroDescriptions: [
    {
      parts: [
        { text: "I am an " },
        { strong: "AI-Powered Full-Stack Web Developer" },
        {
          text: " focused on building modern, responsive, and scalable web applications with React, Next.js, TypeScript, Go, REST APIs, and database-backed architectures. Skilled in turning UI/UX designs into reusable components, integrating APIs, and delivering production-ready web experiences.",
        },
      ],
    },
    {
      parts: [
        { text: "Comfortable using " },
        { strong: "modern AI-assisted development workflows" },
        {
          text: " to speed up research, debugging, UI iteration, testing, and code quality while keeping the final implementation clean, maintainable, and user-focused.",
        },
      ],
    },
  ],
  resumeUrl: "https://resume-phi-ten-72.vercel.app/",
  playStoreDevUrl: "https://play.google.com/store/apps/dev?id=4676958373919906847",
  heroImage: "/2.png",
  stats: [
    { number: "1+", label: "Years Experience" },
    { number: "4+", label: "Projects" },
    { number: "1", label: "Company" },
  ],
  badge: "1+ Years Experience",
  heroCtas: [
    { label: "View Resume", href: "https://resume-phi-ten-72.vercel.app/", variant: "hero", external: true },
    { label: "Get In Touch", href: "#contact", variant: "secondary" },
    { label: "Unity Games", href: "#ai-deployment", variant: "fire", badge: "LATEST" },
  ],
  socials: [
    { href: "https://github.com/MohsanCodes", label: "GitHub", icon: "fa-brands fa-github" },
    {
      href: "https://www.linkedin.com/in/mohsan-iqbal-1b581a327/",
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
    },
    { href: "https://stackoverflow.com/users/32572176/mohsan-iqbal", label: "StackOverflow", icon: "fa-brands fa-stack-overflow" },
    { href: "https://mail.google.com/mail/?view=cm&fs=1&to=mohsaniqbal041@gmail.com", label: "Email", icon: "fa-solid fa-envelope" },
  ],
  nav: [
    { href: "#top", label: "Home" },
    { href: "#ai-deployment", label: "Unity Game Dev", badge: "PLAY STORE" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Endorsements" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export const experience = [
  {
    location: "Remote",
    date: "Apr 2025 - Present",
    company: "",
    role: "Full-Stack Web Developer | React, Next.js & Go",
    achievements: [
      "Developed responsive and scalable web applications using React.js, Next.js, TypeScript, Go REST APIs, and Tailwind CSS.",
      "Converted Figma and UI/UX designs into pixel-perfect, reusable, and maintainable frontend components.",
      "Built dynamic user interfaces with reusable components, custom hooks, and modern React patterns.",
      "Integrated REST APIs, handled client-side state, and connected frontend features with backend services.",
      "Worked with database-driven application patterns using MongoDB, PostgreSQL, and API-first development.",
      "Optimized website performance, accessibility, SEO, and responsiveness across desktop, tablet, and mobile devices.",
      "Collaborated with designers and backend developers to implement new features and improve existing products.",
      "Maintained clean, reusable, and well-documented code following industry best practices.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Go", "JWT Auth", "bcrypt", "REST APIs", "MongoDB", "PostgreSQL", "Supabase", "Git & GitHub"],
  },
  {
    location: "Remote",
    date: "2024 - Present",
    company: "Personal Projects",
    role: "Web UI & Frontend Developer",
    achievements: [
      "Created responsive landing pages, portfolio screens, dashboard layouts, and reusable UI sections using React, Next.js, Tailwind CSS, and Bootstrap.",
      "Practiced converting design references into clean frontend components with attention to spacing, typography, mobile responsiveness, and browser consistency.",
      "Implemented forms, navigation, cards, grids, modals, and reusable component patterns for real-world web app interfaces.",
      "Used GitHub, npm, VS Code, Chrome DevTools, and deployment platforms to manage, debug, and publish web projects.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Responsive Design", "GitHub", "Netlify"],
  },
  {
    location: "Remote",
    date: "2025 - Present",
    company: "Logic Crack Hub",
    role: "Full-Stack Platform Developer",
    achievements: [
      "Built the platform architecture around a Next.js frontend calling protected Go REST API endpoints through Netlify Functions.",
      "Implemented authentication requirements including registration, login, JWT bearer tokens, bcrypt password hashing, email verification OTPs, and password reset flows.",
      "Planned role-based access for guests, registered users, and admins, including protected user routes and admin-only asset/user management.",
      "Designed credit economy workflows for asset purchases, ownership checks, credit transactions, and Stripe Checkout webhook confirmation.",
      "Defined database responsibilities for users, assets, favorites, reviews, downloads, credit purchases, requests, messages, notifications, and OTP verification records.",
      "Integrated production services including Supabase PostgreSQL, Supabase Storage, Brevo transactional email, Stripe Checkout, GitHub, and Netlify environment variables.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Go", "REST APIs", "JWT", "bcrypt", "Supabase PostgreSQL", "Supabase Storage", "Brevo Email API", "Stripe Checkout", "Stripe Webhooks", "Netlify Functions", "Git", "GitHub"],
  },
] as const;

export const unityGames = [
  {
    id: "lcs.grow.sell.market.simulator",
    name: "Grow & Sell: Market Simulator",
    tagline: "3D Farm & Market Simulation",
    href: "https://play.google.com/store/apps/details?id=lcs.grow.sell.market.simulator",
    image:
      "https://play-lh.googleusercontent.com/PGvNrmOQ56MiaHiFRXHuRx-1jHIyxACf1RVRqm5ahpvSDGMgTvqfnhBruT5n2hIccLcy8x1RuebQaZJVlS8YMd4=s256-rw",
    status: "LIVE",
  },
] as const;

export const agenticProjects = unityGames;

export const projects = [
  {
    title: "Logic Crack Hub",
    badge: "Full-Stack",
    badgeClass: "project-card__badge--ai",
    description:
      "Next.js + Go platform with JWT authentication, credit economy, Stripe payments, role-based access, and Supabase database/storage. Built with production-grade architecture.",
    tech: ["Next.js", "React", "TypeScript", "Go", "REST APIs", "JWT", "Supabase", "Stripe", "Netlify Functions"],
    href: "https://logic-crack-hub.vercel.app/",
  },
  {
    title: "ChatSphere",
    badge: "Web App",
    badgeClass: "project-card__badge--web",
    description:
      "Responsive real-time chat web application with modern UI, built for seamless communication experiences across devices.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Real-time"],
    href: "https://chat-sphere-ruby.vercel.app/",
  },
  {
    title: "Logic Crack Studio",
    badge: "Website",
    badgeClass: "project-card__badge--web",
    description:
      "Official business website connected to developer consoles for showcasing published apps and digital products.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Netlify"],
    href: "https://logiccrackstudio.netlify.app/",
  },
  {
    title: "Mini Games",
    badge: "Web App",
    badgeClass: "project-card__badge--web",
    description:
      "Collection of fun and interactive browser mini-games built with modern web technologies for engaging gameplay experiences.",
    tech: ["React", "Next.js", "TypeScript", "JavaScript", "CSS3"],
    href: "https://mini-games-peach.vercel.app/",
  },
] as const;

export const skillCategories = [
  {
    title: "AI Development",
    skills: [
      { name: "AI-Assisted Development", icon: "fa-solid fa-robot", color: "ai-integration" },
      { name: "Prompt Engineering", icon: "fa-solid fa-terminal", color: "cursor" },
      { name: "LLM Integration Basics", icon: "fa-solid fa-microchip", color: "claude" },
      { name: "Cursor AI / Copilot", icon: "fa-solid fa-wand-magic-sparkles", color: "copilot" },
      { name: "Debugging with AI Tools", icon: "fa-solid fa-bug", color: "chatgpt" },
    ],
  },
  {
    title: "Frontend Stack",
    skills: [
      { name: "React.js", icon: "fa-brands fa-react", color: "react" },
      { name: "Next.js", icon: "fa-solid fa-cube", color: "nextjs" },
      { name: "TypeScript", icon: "fa-solid fa-file-code", color: "typescript" },
      { name: "JavaScript (ES6+)", icon: "fa-brands fa-js", color: "javascript" },
      { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt", color: "tailwind" },
      { name: "HTML5 & CSS3", icon: "fa-brands fa-html5", color: "html" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "bootstrap" },
      { name: "State Management", icon: "fa-solid fa-layer-group", color: "redux" },
      { name: "Figma to Code", icon: "fa-solid fa-pen-ruler", color: "shadcn" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Go REST APIs", icon: "fa-solid fa-server", color: "express" },
      { name: "REST API Development", icon: "fa-solid fa-right-left", color: "rest" },
      { name: "JWT Authentication", icon: "fa-solid fa-lock", color: "websockets" },
      { name: "bcrypt Hashing", icon: "fa-solid fa-shield-halved", color: "sails" },
      { name: "MongoDB", icon: "fa-solid fa-database", color: "mongodb" },
      { name: "PostgreSQL", icon: "fa-solid fa-database", color: "postgresql" },
      { name: "Supabase", icon: "fa-solid fa-bolt", color: "fastapi" },
      { name: "Authentication Flows", icon: "fa-solid fa-user-lock", color: "puppeteer" },
      { name: "API Integration", icon: "fa-solid fa-plug", color: "graphql" },
      { name: "Server-Side Rendering", icon: "fa-solid fa-server", color: "nodejs" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    skills: [
      { name: "Git & GitHub", icon: "fa-brands fa-git-alt", color: "git" },
      { name: "VS Code", icon: "fa-solid fa-code", color: "knex" },
      { name: "npm / Yarn", icon: "fa-brands fa-npm", color: "package-managers" },
      { name: "Chrome DevTools", icon: "fa-brands fa-chrome", color: "google-antigravity" },
      { name: "Deployment & Hosting", icon: "fa-solid fa-cloud-arrow-up", color: "vps" },
      { name: "Firebase", icon: "fa-solid fa-fire-flame-curved", color: "firebase" },
      { name: "AWS Basics", icon: "fa-brands fa-aws", color: "aws" },
      { name: "Netlify Functions", icon: "fa-solid fa-sitemap", color: "monorepo" },
      { name: "Stripe Checkout", icon: "fa-solid fa-credit-card", color: "sqs" },
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
    "Have a project idea or looking for a developer to build your next web application? I'm currently open to freelance work, collaborations, and full-time opportunities. Let's build something great together.",
  email: "mohsaniqbal041@gmail.com",
  phone: "+92 3043285741",
  phoneHref: "tel:+923043285741",
  location: "Bahawalpur, Pakistan",
  website: { label: "logiccrackstudio.netlify.app", href: "https://logiccrackstudio.netlify.app/" },
  whatsapp: { label: "Message Me Direct", href: "https://wa.me/923043285741" },
  linkedin: "https://www.linkedin.com/in/mohsan-iqbal-1b581a327/",
} as const;
