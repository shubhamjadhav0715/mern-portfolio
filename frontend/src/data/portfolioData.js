// Portfolio Data Configuration
// Update this file to customize your portfolio content

export const personalInfo = {
  name: "Shubham Baban Jadhav",
  title: "MERN Stack Developer | Software Developer",
  location: "Shirur, Pune – 412210",
  email: "shubhamjadhav0715@gmail.com",
  phone: "+91 70661 49532",
  
  // Profile image - place your image in public/assets/profile.png
  profileImage: "/assets/profile.png",
  
  // Resume PDF - place your resume in public/assets/resume.pdf
  resumeUrl: "/assets/resume.pdf",
  
  // Social Links
  social: {
    github: "https://github.com/shubhamjadhav0715",
    linkedin: "https://www.linkedin.com/in/shubhamjadhav7066149532/",
    telegram: "https://t.me/shubham_jadhav0715",
    whatsapp: "https://wa.me/917066149532"
  },
  
  // About Me
  about: {
    intro: "I'm an aspiring Software Engineer and MERN Stack Developer learning MongoDB, Express, React, and Node.js to build full-stack web applications.",
    description: "I have a strong foundation in HTML, CSS, JavaScript, and C, along with a growing interest in both front-end and back-end development. I'm passionate about creating user-friendly, efficient, and scalable web solutions while continuously improving my coding and problem-solving skills.",
    goal: "Currently, I'm looking for an entry-level opportunity where I can contribute, learn, and grow as a Software or Web Developer."
  }
};

export const skills = {
  technical: [
    { name: "HTML5", level: 90, icon: "FaHtml5" },
    { name: "CSS3", level: 85, icon: "FaCss3Alt" },
    { name: "JavaScript", level: 80, icon: "FaJs" },
    { name: "React.js", level: 75, icon: "FaReact" },
    { name: "Node.js", level: 75, icon: "FaNode" },
    { name: "Express.js", level: 70, icon: "SiExpress" },
    { name: "MongoDB", level: 70, icon: "SiMongodb" },
    { name: "SQL", level: 75, icon: "FaDatabase" }
  ],
  
  tools: [
    { name: "Git", icon: "FaGitAlt" },
    { name: "GitHub", icon: "FaGithub" },
    { name: "VS Code", icon: "VscCode" },
    { name: "Postman", icon: "SiPostman" },
    { name: "Jira", icon: "FaJira" },
    { name: "Maven", icon: "SiApachemaven" },
    { name: "Jenkins", icon: "SiJenkins" }
  ]
};

export const personalProjects = [
  {
    id: 1,
    title: "Ticket Booking Website",
    description: "A web application for booking bus and flight tickets online with user-friendly interface and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Bus ticket booking",
      "Flight ticket booking",
      "Responsive design",
      "User-friendly interface"
    ],
    liveUrl: "https://booking-nest-shubham.netlify.app/",
    githubUrl: "",
    image: "/assets/projects/ticket-booking.png"
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "Designed and developed a personal website to showcase projects and skills with modern design and smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Portfolio showcase",
      "About section",
      "Contact form",
      "Mobile-friendly layout"
    ],
    liveUrl: "https://all-about-shubham.netlify.app/",
    githubUrl: "",
    image: "/assets/projects/portfolio.png"
  }
];

export const campusProjectHub = {
  title: "Campus Project Hub",
  tagline: "Empowering BCA Students with Ready-Made Projects",
  description: "A comprehensive platform offering ready-made web development projects specifically designed for BCA students. Features interactive demos, clean code, and learning resources.",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
  features: [
    "Ready-made projects for BCA students",
    "Interactive project demos",
    "Clean and well-documented code",
    "Responsive design templates",
    "Learning resources included"
  ],
  projects: [
    {
      name: "Keeper App",
      description: "Note-taking application inspired by Google Keep",
      tech: ["React", "CSS"]
    },
    {
      name: "Simon Game",
      description: "Interactive memory game with sound effects",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Drum Kit",
      description: "Virtual drum kit with keyboard controls",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "Dice Game",
      description: "Fun dice rolling game for two players",
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ],
  liveUrl: "https://campus-project-hub.netlify.app/",
  githubUrl: "",
  image: "/assets/projects/campus-hub.png",
  stats: {
    totalProjects: "10+",
    happyStudents: "50+",
    downloads: "100+"
  }
};

export const experience = [
  {
    id: 1,
    title: "Junior Software Engineer (Intern)",
    company: "Cravita Technologies India Pvt. Ltd.",
    location: "Pune",
    duration: "Internship",
    description: [
      "Assisted in developing and maintaining responsive web applications",
      "Implemented UI components using HTML, CSS, and JavaScript",
      "Worked with MongoDB and SQL for basic data operations",
      "Collaborated with team members to meet client requirements",
      "Gained exposure to real-world project workflows and version control using GitHub"
    ]
  }
];

// Sample testimonials (these will be fetched from backend in production)
export const sampleTestimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "BCA Student",
    company: "Pune University",
    message: "The Campus Project Hub helped me complete my semester project on time. The code quality is excellent and well-documented!",
    rating: 5,
    image: ""
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "BCA Student",
    company: "Mumbai University",
    message: "Great resource for learning web development. The projects are practical and easy to understand.",
    rating: 5,
    image: ""
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Web Developer",
    company: "Tech Solutions",
    message: "Shubham's work is impressive. His attention to detail and code quality is commendable.",
    rating: 5,
    image: ""
  }
];
