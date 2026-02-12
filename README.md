# 🧠 AI Resume Builder

An end-to-end **AI-powered resume builder** that helps users create, enhance, and manage professional resumes using modern web technologies and Generative AI.

🌐 **Live Demo:** https://talentinkai.vercel.app

---

## 🚀 Features

- 🔐 User authentication (JWT based)
- 📝 Create and edit resumes
- 📤 Upload existing resumes (PDF/Text)
- 🤖 AI-powered resume summary & job description enhancement
- 🖼️ Image upload & management using ImageKit
- 📄 Resume preview & download
- 🌍 Fully deployed (Frontend + Backend)

---

## 🏗️ High-Level Architecture

![Architecture](./docs/architecture.jpeg)

## 🔄 Request Flow

1. **User (Browser)** interacts with the web app  
2. **Frontend (React + Vite)** handles UI and state  
3. **Axios** sends REST API requests  
4. **Backend (Node.js + Express)** processes logic  
5. **MongoDB Atlas** stores resume data  
6. **Google Gemini AI** enhances content  
7. **ImageKit** manages images



---

## 🧑‍💻 Tech Stack

### Frontend (Client)
- ⚛️ React 19
- ⚡ Vite
- 🧭 React Router DOM
- 🗂️ Redux Toolkit
- 🎨 Tailwind CSS
- 🌐 Axios

### Backend (Server)
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB + Mongoose
- 🔐 JWT Authentication
- 🤖 Google Gemini AI (`@google/generative-ai`)
- 🖼️ ImageKit
- 📦 Multer (file uploads)
