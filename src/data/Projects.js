const projects = [
  {
    id: 1,
    title: "Campus Lost & Found Portal",
    category: "Full Stack",
    description:
      "A full-stack web application for reporting, searching, and managing lost and found items within a campus.",
    image: "/images/projects/lost-found.png",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind"
    ],
    github: "https://www.github.com/srikesav09/",
    live: "https://campuslostandfoundportal.netlify.app/",
    featured: true
  },

  {
    id: 2,
    title: "Student CRUD API",
    category: "Backend",
    description:
      "RESTful API implementing CRUD operations with Express.js and MongoDB.",
    image: "/images/projects/student-api.png",
    tech: [
      "Node.js",
      "Express",
      "MongoDB"
    ],
    github: "https://www.github.com/srikesav09/student-crud-api/",
    live: "https://student-crud-api-4lpk.onrender.com/"
  },

  {
    id: 3,
    title: "SilentSOS",
    category: "Embedded Systems",
    description:
      "Offline emergency alert system built using Raspberry Pi Pico and MicroPython.",
    image: "/images/projects/silent-sos.png",
    tech: [
      "MicroPython",
      "Raspberry Pi Pico",
      "Sensors"
    ],
    github: "",
    live: ""
  }
];

export default projects;