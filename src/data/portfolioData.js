// portfolioData.js - Enhanced data structure for modern portfolio

export const personalInfo = {
  name: process.env.REACT_APP_NAME || "Khushal Katariya",
  title: process.env.REACT_APP_TITLE || "Full Stack Developer | Cloud Architect",
  email: process.env.REACT_APP_EMAIL || "khushalkatariya743344@gmail.com",
  phone: process.env.REACT_APP_PHONE || "+91-6351299971",
  location: process.env.REACT_APP_LOCATION || "Pune, Maharashtra, IN",
  github: process.env.REACT_APP_GITHUB || "https://github.com/khushalkatariya",
  linkedin: process.env.REACT_APP_LINKEDIN || "https://linkedin.com/in/khushalkatariya",
  resumeUrl: process.env.REACT_APP_RESUME_URL || "#",
};

export const heroData = {
  greeting: "Hello, I'm",
  name: personalInfo.name,
  tagline: "Building Digital Experiences That Matter",
  description: "Full Stack Developer specializing in modern web & mobile applications with React, Django, and AWS cloud architecture. Transforming ideas into scalable, high-performance solutions.",
  avatar: "👨‍💻",
  stats: [
    { value: "5+", label: "Projects Launched" },
    { value: "1.5+", label: "Years of Experience" },
    { value: "100%", label: "Client Satisfaction" }
  ]
};

export const aboutData = {
  title: "About Me",
  subtitle: "Passionate Developer, Problem Solver, Continuous Learner",
  highlights: [
    {
      icon: "🎯",
      title: "Mission-Driven",
      description: "Focused on delivering impactful solutions that solve real-world problems"
    },
    {
      icon: "💡",
      title: "Innovation First",
      description: "Always exploring cutting-edge technologies and best practices"
    },
    {
      icon: "🤝",
      title: "Team Player",
      description: "Collaborative approach with strong communication skills"
    }
  ],
  paragraphs: [
    "I'm a Full Stack Developer with a passion for creating elegant solutions to complex problems. Currently at Kasa Eshna Limited, I architect and deploy enterprise applications from conception to production.",
    "My expertise spans the entire development stack - from crafting intuitive user interfaces with React and React Native, to building robust backends with Django and Spring Boot, to deploying scalable infrastructure on AWS.",
    "I believe in writing clean, maintainable code and leveraging modern DevOps practices to deliver high-quality software efficiently."
  ],
  experience: {
    current: {
      role: "Junior React & Python Developer",
      company: "Kasa Eshna Limited",
      period: "Nov 2024 - Present",
      location: "Pune, Maharashtra"
    },
    previous: {
      role: "Software Development Intern",
      company: "TOPS Technologies Pvt. Ltd",
      period: "Jan 2023 - Apr 2023",
      location: "Ahmedabad, Gujarat"
    }
  }
};

export const skillsData = {
  title: "Technical Expertise",
  subtitle: "Technologies & Tools I Work With",
  categories: [
    {
      title: "Frontend Development",
      level: "Expert",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "React Native", level: 85, icon: "📱" },
        { name: "JavaScript/ES6+", level: 90, icon: "🟨" },
        { name: "Tailwind CSS", level: 88, icon: "🎨" },
        { name: "Material-UI", level: 85, icon: "🎭" },
        { name: "HTML5/CSS3", level: 92, icon: "🌐" }
      ],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "Backend Development",
      level: "Expert",
      skills: [
        { name: "Django", level: 88, icon: "🐍" },
        { name: "Django REST", level: 85, icon: "🔧" },
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Spring Boot", level: 80, icon: "🍃" },
        { name: "Java", level: 82, icon: "☕" },
        { name: "RESTful APIs", level: 88, icon: "🔌" }
      ],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "Database & Storage",
      level: "Advanced",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "SQL", level: 88, icon: "📊" },
        { name: "Database Design", level: 82, icon: "📐" }
      ],
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Cloud & DevOps",
      level: "Advanced",
      skills: [
        { name: "AWS (EC2, S3, RDS)", level: 85, icon: "☁️" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "CI/CD", level: 82, icon: "🔄" },
        { name: "Nginx", level: 78, icon: "🌐" },
        { name: "Git/GitHub", level: 90, icon: "📦" },
        { name: "Linux", level: 85, icon: "🐧" }
      ],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ]
};

export const projectsData = {
  title: "Featured Projects",
  subtitle: "Real-World Solutions, Production-Ready Code",
  projects: [
    {
      id: 1,
      title: "CareConnect",
      subtitle: "Hospital Management System",
      description: "A comprehensive healthcare platform streamlining patient registration, appointment scheduling, and medical records management. Built with a focus on data security and HIPAA compliance.",
      longDescription: "CareConnect revolutionizes hospital operations by providing an integrated platform for patient management, appointment scheduling, and electronic health records. The system features real-time availability checking, automated appointment reminders, and secure document storage.",
      tech: ["React.js", "Django", "PostgreSQL", "AWS", "Cloudflare"],
      features: [
        "Patient portal with appointment booking",
        "Real-time doctor availability",
        "Electronic health records (EHR)",
        "Secure document management",
        "Automated email/SMS notifications",
        "Role-based access control"
      ],
      metrics: [
        { label: "Performance", value: "40% faster queries" },
        { label: "Uptime", value: "99.9%" },
        { label: "Users", value: "1000+ patients" }
      ],
      gradient: "from-blue-500 to-purple-600",
      lightGradient: "from-blue-50 to-purple-50",
      github: "https://github.com/KhushalKatariya/e-Hospital",
      demo: "#",
      image: "healthcare",
      featured: true,
      category: "Healthcare"
    },
    {
      id: 2,
      title: "MobileShop",
      subtitle: "E-Commerce Mobile Application",
      description: "Cross-platform e-commerce solution for Android and iOS with seamless shopping experience, real-time inventory sync, and secure payment integration.",
      longDescription: "MobileShop delivers a native-like shopping experience across platforms. Features include product catalog browsing, advanced search filters, shopping cart management, secure checkout, and order tracking.",
      tech: ["React Native", "Django REST", "AWS", "Stripe", "Cloudflare"],
      features: [
        "Cross-platform (iOS & Android)",
        "Real-time inventory sync",
        "Push notifications",
        "Secure payment gateway",
        "Order tracking",
        "Wishlist & favorites"
      ],
      metrics: [
        { label: "Downloads", value: "5000+" },
        { label: "Rating", value: "4.5/5" },
        { label: "Conversion", value: "12%" }
      ],
      gradient: "from-cyan-500 to-blue-600",
      lightGradient: "from-cyan-50 to-blue-50",
      github: "#",
      demo: "#",
      image: "ecommerce",
      featured: true,
      category: "E-Commerce"
    },
    {
      id: 3,
      title: "AdminHub",
      subtitle: "Enterprise Content Management",
      description: "Modern CMS with intuitive dashboard, data visualization, content workflows, and cloud-integrated media management for enterprise teams.",
      longDescription: "AdminHub provides enterprises with a powerful content management platform featuring customizable dashboards, advanced analytics, workflow automation, and seamless integration with cloud storage services.",
      tech: ["React.js", "Material-UI", "Django", "MySQL", "AWS S3"],
      features: [
        "Customizable dashboards",
        "Data visualization charts",
        "Content approval workflows",
        "S3-integrated media library",
        "Role & permission management",
        "Activity logging"
      ],
      metrics: [
        { label: "Organizations", value: "50+" },
        { label: "Content Items", value: "10k+" },
        { label: "Load Time", value: "<2s" }
      ],
      gradient: "from-purple-500 to-pink-600",
      lightGradient: "from-purple-50 to-pink-50",
      github: "#",
      demo: "#",
      image: "cms",
      featured: true,
      category: "Enterprise"
    },
    {
      id: 4,
      title: "QuickBite",
      subtitle: "Food Ordering Platform",
      description: "Restaurant ordering system with real-time menu management, inventory tracking, and integrated payment processing. Reduced order errors by 70%.",
      longDescription: "QuickBite connects restaurants with customers through an intuitive ordering platform. Features include menu customization, real-time order tracking, kitchen display system, and comprehensive analytics.",
      tech: ["React.js", "Django", "PostgreSQL", "AWS Elastic Beanstalk", "Razorpay"],
      features: [
        "Real-time order tracking",
        "Inventory management",
        "Payment gateway integration",
        "Kitchen display system",
        "Customer reviews & ratings",
        "Analytics dashboard"
      ],
      metrics: [
        { label: "Orders/Day", value: "500+" },
        { label: "Error Reduction", value: "70%" },
        { label: "Avg Order Time", value: "18 min" }
      ],
      gradient: "from-orange-500 to-red-600",
      lightGradient: "from-orange-50 to-red-50",
      github: "https://github.com/KhushalKatariya/FoodLite",
      demo: "#",
      image: "food",
      featured: true,
      category: "Food & Beverage"
    },
    {
      id: 5,
      title: "CinemaBook",
      subtitle: "Movie Ticket Booking System",
      description: "Complete cinema booking platform with real-time seat selection, payment processing, and optimized database achieving 60% faster queries.",
      longDescription: "CinemaBook modernizes the movie-going experience with features like interactive seat selection, multiple payment options, e-tickets, and loyalty rewards program.",
      tech: ["Java", "Spring Boot", "MySQL", "AWS EC2", "Razorpay"],
      features: [
        "Real-time seat selection",
        "Multiple payment options",
        "E-ticket generation",
        "Movie recommendations",
        "Loyalty rewards program",
        "Admin panel"
      ],
      metrics: [
        { label: "Bookings/Month", value: "10k+" },
        { label: "Query Speed", value: "60% faster" },
        { label: "Success Rate", value: "98%" }
      ],
      gradient: "from-green-500 to-emerald-600",
      lightGradient: "from-green-50 to-emerald-50",
      github: "https://github.com/KhushalKatariya/MovieZone",
      demo: "#",
      image: "cinema",
      featured: true,
      category: "Entertainment"
    }
  ]
};

export const contactData = {
  title: "Let's Work Together",
  subtitle: "Have a project in mind? Let's discuss how I can help bring your ideas to life.",
  formFields: {
    name: { placeholder: "Your Name", type: "text", required: true },
    email: { placeholder: "Your Email", type: "email", required: true },
    subject: { placeholder: "Subject", type: "text", required: false },
    message: { placeholder: "Your Message", type: "textarea", required: true, rows: 6 }
  },
  submitButton: "Send Message",
  successMessage: "Thank you for your message! I'll get back to you soon.",
  contactMethods: [
    {
      icon: "email",
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: "phone",
      title: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: "location",
      title: "Location",
      value: personalInfo.location,
      link: "#"
    }
  ]
};

export const navigationData = {
  logo: "KK",
  menuItems: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ]
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
  tagline: "Crafted with React, Tailwind CSS & Framer Motion",
  socialLinks: [
    { name: "GitHub", url: personalInfo.github, icon: "github" },
    { name: "LinkedIn", url: personalInfo.linkedin, icon: "linkedin" }
  ]
};

export const themeData = {
  colors: {
    primary: { main: "#3b82f6", light: "#60a5fa", dark: "#2563eb" },
    secondary: { main: "#06b6d4", light: "#22d3ee", dark: "#0891b2" },
    accent: { main: "#8b5cf6", light: "#a78bfa", dark: "#7c3aed" }
  }
};

export default {
  personal: personalInfo,
  hero: heroData,
  about: aboutData,
  skills: skillsData,
  projects: projectsData,
  contact: contactData,
  navigation: navigationData,
  footer: footerData,
  theme: themeData
};
