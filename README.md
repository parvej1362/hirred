<div align="center">

# 💼 Hirred - Modern Job Portal

### Find the Right Talent. Discover the Right Career.

A modern, responsive, and feature-rich Job Portal built with **React**, **Vite**, **Supabase**, **Clerk Authentication**, **Tailwind CSS v4**, and **Shadcn UI**.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8?logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?logo=supabase)
![Clerk](https://img.shields.io/badge/Authentication-Clerk-6C47FF)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# 📖 Overview

**Hirred** is a modern job portal designed to simplify the hiring process for both recruiters and job seekers. The platform provides a clean and intuitive interface where companies can publish job openings while candidates can browse opportunities, apply for jobs, and manage their profiles.

The application focuses on creating a seamless hiring experience with secure authentication, efficient job management, responsive UI, and scalable architecture.

---

# ✨ Features

## 👤 Authentication

- Secure authentication using Clerk
- Email & Social Login
- User session management
- Protected routes
- Role-based access

---

## 💼 Job Management

- Browse available jobs
- Search jobs
- Filter jobs
- View job details
- Apply for jobs
- Save jobs
- Manage job listings

---

## 🏢 Company Management

- Company Profiles
- Company Details
- Company Logos
- Available Vacancies
- Hiring Information

---

## 👨‍💻 Candidate Features

- Create Profile
- Upload Resume
- Apply to Jobs
- Track Applications
- Manage Profile

---

## 🏢 Recruiter Features

- Post New Jobs
- Edit Jobs
- Delete Jobs
- View Applicants
- Manage Listings

---

## 🎨 Modern UI

- Fully Responsive Design
- Mobile Friendly
- Dark Ready Components
- Reusable UI Components
- Fast Navigation

---

## 🔥 Additional Features

- Toast Notifications
- Form Validation
- Markdown Support
- Country & State Selection
- Interactive Components
- Loading States

---

# 🛠️ Tech Stack

## Frontend

- React 19
- Vite 6
- React Router DOM
- Tailwind CSS v4
- Shadcn UI
- Radix UI
- Lucide Icons

## Authentication

- Clerk Authentication

## Database

- Supabase

## Form Handling

- React Hook Form
- Zod Validation

## Notifications

- React Hot Toast

## UI Components

- Embla Carousel
- Vaul Drawer
- Radix UI Components

---

# 📂 Project Structure

```
Hirred/
│
├── public/
│   └── companies/
│
├── src/
│   ├── api/
│   ├── components/
│   │   └── ui/
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Before running the project, make sure you have:

- Node.js (v18 or later)
- npm
- Git
- Clerk Account
- Supabase Project

---

# 📥 Installation

Clone the repository

```bash
git clone https://github.com/your-username/hirred-job-portal.git
```

Navigate into the project

```bash
cd hirred-job-portal
```

Install dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

```env
VITE_SUPABASE_URL=

VITE_SUPABASE_ANON_KEY=

VITE_CLERK_PUBLISHABLE_KEY=
```

Fill these values from your Clerk and Supabase dashboards.

---

# ▶️ Run Development Server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 📦 Build Production

```bash
npm run build
```

---

# 👀 Preview Production Build

```bash
npm run preview
```

---

# 🧹 Lint Project

```bash
npm run lint
```

---

# 🔄 Application Workflow

```text
User

        │

        ▼

Authentication (Clerk)

        │

        ▼

Dashboard

        │

 ┌──────┴────────┐

 ▼               ▼

Recruiter     Candidate

 ▼               ▼

Post Jobs     Browse Jobs

 ▼               ▼

Manage Jobs   Apply Jobs

 ▼               ▼

Applicants    Track Applications
```

---

---

# 🌟 Future Improvements

- Resume Parsing
- AI Resume Analysis
- AI Job Recommendations
- Email Notifications
- Interview Scheduling
- Chat Between Recruiter & Candidate
- Saved Searches
- Advanced Analytics
- Company Dashboard
- Admin Panel
- Multi-language Support
- Dark Mode

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature/YourFeature
```

3. Commit your changes

```bash
git commit -m "Added New Feature"
```

4. Push your branch

```bash
git push origin feature/YourFeature
```

5. Create a Pull Request

---

# 📋 Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production version |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

# 📚 Dependencies

Some major libraries used in the project:

- React 19
- Vite
- Clerk
- Supabase
- Tailwind CSS v4
- Shadcn UI
- Radix UI
- React Router DOM
- React Hook Form
- Zod
- React Hot Toast
- Embla Carousel
- Lucide React

---

# 🔒 Security

- Clerk Authentication
- Secure Environment Variables
- Protected Routes
- Form Validation
- Client-side Authentication Checks

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

### **Parvej Mulani**

B.Tech Computer Science Engineering

GitHub: https://github.com/parvej1362

---

<div align="center">

### ⭐ If you found this project useful, don't forget to give it a star!

Made with ❤️ using React, Clerk & Supabase

</div>
