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

### Flow Overview
User (Browser)
↓
Frontend (React + Vite)
↓ REST API (Axios)
Backend (Node.js + Express)
↓
MongoDB Atlas
↓
Google Gemini AI
↓
ImageKit (Images)



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

---

## 📁 Project Structure

AI-Resume-Builder/
├── client/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
│
├── server/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middlewares/
│ ├── server.js
│ └── package.json
│
├── docs/
│ └── architecture.jpeg
│
└── README.md
