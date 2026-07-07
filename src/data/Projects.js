const projects = [
  {
    id: 1,
    title: "Campus Lost & Found Portal",
    category: "Full Stack Web Application",
    image: "/images/projects/campus.png",

    description:
      "A full-stack platform that enables students to report, search, and recover lost items within the campus through a clean and responsive interface.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "User Authentication",
      "Search & Filters",
      "REST API",
      "Responsive Design",
      "MongoDB Integration",
    ],

    github: "https://www.github.com/srikesav09/",
    live: "https://campuslostandfoundportal.netlify.app/",
  },

  {
    id: 2,
    title: "Student CRUD API",
    category: "Backend API",
    image: "/images/projects/student.png",

    description:
      "RESTful backend API supporting complete CRUD operations with Express.js and MongoDB.",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "REST Architecture",
      "CRUD Operations",
      "MongoDB",
      "Express Routing",
    ],

    github: "https://www.github.com/srikesav09/student-crud-api/",
    live: "https://student-crud-api-4lpk.onrender.com/",
  },

  {
    id: 3,
    title: "SilentSOS",
    category: "Embedded Systems",
    image: "/images/projects/sos.png",

    description:
      "Offline emergency alert system built using Raspberry Pi Pico and MicroPython for reliable emergency signaling without internet connectivity.",

    technologies: [
      "MicroPython",
      "Raspberry Pi Pico",
      "Embedded Systems",
    ],

    features: [
      "Offline Alerts",
      "Sensor Integration",
      "MicroPython",
    ],

    github: "https://www.github.com/srikesav09/",
    live: "",
  },
];

export default projects;