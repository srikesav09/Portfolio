![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![AWS](https://img.shields.io/badge/AWS-EC2%20%7C%20ECR-FF9900?logo=amazonaws)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?logo=githubactions)
![Deployment](https://img.shields.io/badge/Deployment-Vercel%20%26%20AWS-success?logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green)

# 🚀 Srikesav M | Developer Portfolio

A modern, responsive, and cloud-deployed developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. This project showcases my technical skills, projects, certifications, and demonstrates an end-to-end deployment workflow using **Docker**, **Amazon ECR**, **AWS EC2**, and **GitHub Actions CI/CD**.

---

# 🌐 Live Demo

### Portfolio

👉 https://portfolio-theta-nine-9zokujvsi5.vercel.app/

---

# ✨ Features

- Modern UI with responsive design
- Smooth scrolling and animations using Framer Motion
- Professional project showcase
- Technical skills section
- Certifications section
- Contact form powered by EmailJS
- Resume download
- SEO optimized
- Open Graph & Twitter Card support
- Reusable component architecture
- Mobile-friendly navigation
- Dockerized production build
- Automated CI/CD pipeline using GitHub Actions
- Cloud deployment on AWS EC2

---

# 🛠 Tech Stack

## Frontend

- React
- Tailwind CSS
- Framer Motion

## Libraries

- React Icons
- EmailJS
- React Hot Toast

## DevOps

- Docker
- Nginx
- Docker Compose
- GitHub Actions

## Cloud

- Amazon EC2
- Amazon Elastic Container Registry (ECR)
- AWS CLI
- IAM

## Deployment

- Vercel
- AWS EC2

---

# 📂 Project Structure

```text
Portfolio
│
├── .github
│   └── workflows
│       └── deploy.yml
│
├── public
│   ├── favicon.svg
│   ├── og-image.webp
│   └── resume.pdf
│
├── src
│   ├── components
│   │   ├── common
│   │   ├── layout
│   │   ├── hero
│   │   ├── stats
│   │   ├── skills
│   │   ├── projects
│   │   ├── profile
│   │   ├── certifications
│   │   └── contact
│   │
│   ├── data
│   ├── App.jsx
│   └── main.jsx
│
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .dockerignore
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/srikesav09/Portfolio.git
```

## Navigate into the Project

```bash
cd Portfolio
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Visit

```
http://localhost:5173
```

---

# 🔧 Production Build

```bash
npm run build
```

Preview

```bash
npm run preview
```

---

# 🐳 Docker Deployment

## Build Image

```bash
docker build -t portfolio .
```

## Run Container

```bash
docker run -d -p 8080:80 portfolio
```

Visit

```
http://localhost:8080
```

---

# ☁ AWS Deployment

This project is also deployed using AWS services.

Deployment workflow:

```
GitHub
    │
    ▼
GitHub Actions
    │
    ▼
Docker Build
    │
    ▼
Amazon ECR
    │
    ▼
AWS EC2
    │
    ▼
Docker Container
    │
    ▼
Nginx
    │
    ▼
Live Portfolio
```

---

# 🔄 CI/CD Pipeline

Every push to the **main** branch automatically:

- Builds a Docker image
- Pushes the image to Amazon ECR
- Connects to AWS EC2
- Pulls the latest image
- Restarts the portfolio container

No manual deployment is required.

---

# 🔐 Environment Variables

Create a `.env` file.

```env
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

---

# 📬 Contact Form

The contact form is integrated with **EmailJS**, allowing visitors to send messages directly without requiring a backend server.

---

# 📄 Portfolio Sections

- Hero
- Highlights
- Projects
- Skills
- Beyond the Code
- Certifications
- Contact
- Footer

---

# 📈 Performance & Best Practices

- Responsive Design
- SEO Optimized
- Open Graph Metadata
- Twitter Card Support
- Lazy Loaded Assets
- Component-Based Architecture
- Docker Multi-stage Build
- Nginx Production Server
- Automated Cloud Deployment

---

# 📚 Learning Outcomes

This project helped me strengthen my understanding of:

- React Component Architecture
- Tailwind CSS
- Responsive UI Design
- Framer Motion
- EmailJS Integration
- Docker
- Nginx
- AWS EC2
- Amazon ECR
- GitHub Actions
- CI/CD Pipelines
- Linux Server Deployment
- Modern Deployment Strategies

---

# 📬 Connect With Me

### Portfolio

https://portfolio-theta-nine-9zokujvsi5.vercel.app/

### GitHub

https://github.com/srikesav09

### LinkedIn

https://www.linkedin.com/in/srikesav-m-53446b324/

---

# 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.