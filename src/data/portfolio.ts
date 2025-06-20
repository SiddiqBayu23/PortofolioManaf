export const portfolioData = {
  personal: {
    name: "Inariko",
    title: "Vtuber Model, Rigging",
    subtitle: "Building digital experiences that matter",
    bio: "I'm a passionate 2D/3D VTuber modeler and rigger with 5+ years of experience crafting expressive, high-quality avatars for content creators. I specialize in Live2D and Unity-based rigging, focusing on smooth facial expressions, natural motion, and seamless tracking integration to enhance virtual performance and viewer engagement.",
    location: "Semarang Central Java, Indonesia",
    email: "alex@example.com",
    phone: "+62 858-4894-9085",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    twitter: "https://twitter.com/alexjohnson"
  },
  
  skills: [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Vue.js", level: 80, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "AWS", level: 80, category: "DevOps" },
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "Git", level: 95, category: "Tools" }
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, payment processing, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.pexels.com/photos/7709305/pexels-photo-7709305.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://taskflow-app.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      liveUrl: "https://weather-insights.netlify.app",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media managers with real-time data visualization and automated reporting.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/alexjohnson/social-analytics",
      liveUrl: "https://social-insights.vercel.app",
      featured: true
    }
  ],

  experience: [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Lead development of customer-facing web applications serving 100K+ users. Architected scalable microservices and mentored junior developers.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led team of 5 developers on major platform redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built MVP and core features for B2B SaaS platform. Collaborated with product and design teams to deliver user-centric solutions.",
      achievements: [
        "Developed core platform features from scratch",
        "Integrated multiple third-party APIs and services",
        "Reduced loading times by 50% through code optimization"
      ]
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      period: "2019 - 2020",
      description: "Created responsive websites and web applications for various clients. Specialized in React development and modern CSS frameworks.",
      achievements: [
        "Delivered 20+ client projects on time and budget",
        "Improved client satisfaction scores by 25%",
        "Established best practices for team development workflow"
      ]
    }
  ]
};