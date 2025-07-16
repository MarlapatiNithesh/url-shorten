# URL Shortener App

A full-stack URL shortener application that allows users to generate short links for long URLs, track click statistics, and view analytics—all with a modern, responsive UI.

---

## Overview

This project is a robust URL shortener built with a Node.js + Express backend, a React + Tailwind CSS frontend, and MongoDB for persistent storage. Users can create short URLs, get redirected, and view usage stats. The app is designed for easy deployment and scalability.

---

## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** React, Tailwind CSS
- **Database:** MongoDB (with Mongoose)
- **Other:** shortid (for unique code generation)

---

## Features

- **Shorten URLs:** Submit a long URL and receive a unique, short URL.
- **Redirection:** Visit the short URL to be redirected to the original link. Each visit increments a click counter.
- **Stats:** Retrieve analytics for any short URL, including click count, original URL, and creation date.
- **Modern UI:** React frontend with Tailwind CSS for a clean, responsive experience.

---

## API Routes

| Method | Endpoint                | Description                                      |
|--------|------------------------ |--------------------------------------------------|
| POST   | `/api/shorten`          | Create a short URL from a long one               |
| GET    | `/:code`                | Redirect to the original URL, increment clicks   |
| GET    | `/api/stats/:code`      | Get stats: clicks, original URL, created date    |

---

## Setup Instructions

### Prerequisites

- Node.js & npm
- MongoDB instance (local or cloud)

### Backend

1. **Install dependencies:**
   ```sh
   cd Server
   npm install
   ```
2. **Configure environment:**
   - Create a `.env` file with your MongoDB URI and any other secrets.
3. **Start the server:**
   ```sh
   npm start
   ```
   The backend runs by default on `http://localhost:5000`.

### Frontend

1. **Install dependencies:**
   ```sh
   cd Client
   npm install
   ```
2. **Start the React app:**
   ```sh
   npm start
   ```
   The frontend runs by default on `http://localhost:3000`.

---

## AI Tools Used

- **GitHub Copilot**: Assisted in code generation, refactoring, and documentation.
- **OpenAI GPT**: Helped with code reviews and best practices.

---

## Deployment Notes

- **Environment Variables:** Ensure all secrets (MongoDB URI, etc.) are set in your deployment environment.
- **CORS:** If deploying frontend and backend separately, configure CORS on the backend.
- **Production Builds:** Use `npm run build` in the React app for optimized static files.
- **Cloud MongoDB:** Consider using MongoDB Atlas for managed database hosting.

---

## Contact Info

- **Author:** Nitheesh Marlapati
- **Email:** nitheeshchowdary2326@gmail.com
- **GitHub:** [MarlapatiNithesh](https://github.com/MarlapatiNithesh)

---

Feel free to fork, contribute, or reach out for questions and improvements!