# React + Vite

# Project Setup Guide

This project uses several important packages for PDF text extraction, API requests, and global state management using Redux Toolkit.  
Follow the steps below to install and configure everything correctly.

---

## 📦 Required Dependencies

Run the following commands to install all required packages:

```bash
npm i react-pdftotext
npm i axios
npm i react-redux @reduxjs/toolkit

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Icons

- Lucide React (Modern SVG icon library)

### style library

Tailwind css
Prebuild ui(prebuild component)

## font

google font - outfit

## Backend Technologies Used

The backend of this project is built using modern Node.js tools and libraries:

- **Express.js** - Handles routing and API logic
- **dotenv** - Manages environment variables
- **cors** - Enables secure cross-origin API requests
- **bcryptjs** - Encrypts passwords for secure authentication
- **jsonwebtoken (JWT)** - Provides authentication and token-based security
- **mongoose** - Simplifies MongoDB database operations
- **multer** - Handles file uploads such as profile images

These technologies ensure scalable, secure, and efficient backend performance.

## Devlopmwnt Tool

- **Nodemon** - (used as a dev dependency for auto-restarting the server)


```
