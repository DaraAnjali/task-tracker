# Task Tracker

A full-stack Task Tracker web application built using the MERN Stack. The application enables users to efficiently manage their daily tasks with complete CRUD functionality, RESTful APIs, MongoDB integration, search, filtering, dashboard statistics, and a responsive user interface.

---

## 🚀 Live Demo

**Frontend:** https://task-tracker-six-rho-56.vercel.app/

**Backend:** https://task-tracker-api-l31g.onrender.com

---

## 📂 GitHub Repository

https://github.com/DaraAnjali/task-tracker

---

# ✨ Features

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Search tasks by title
* Filter tasks by status
* Dashboard statistics
* Task priority management
* Due date management
* Form validation
* Toast notifications
* Responsive design
* Dynamic updates without page refresh
* RESTful API integration

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Axios
* Tailwind CSS
* React Toastify

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose

## Deployment

* Render
* Vercel

---

# 📁 Project Structure

```text
task-tracker
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🔗 REST API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/tasks`     | Get all tasks           |
| POST   | `/api/tasks`     | Create a new task       |
| PUT    | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task           |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/DaraAnjali/task-tracker.git
```

## Navigate to Project

```bash
cd task-tracker
```

---

# Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
```

Run the backend:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 📌 Bonus Features

* Search functionality
* Task filtering
* Dashboard statistics
* Toast notifications
* Responsive layout
* Environment variables
* Reusable React components

---

# 📷 Screenshots

Add screenshots after deployment.

* Dashboard
* Add Task Form
* Task Cards
* Search & Filter
* Mobile View

---

# 🔮 Future Enhancements

* User Authentication
* Dark Mode
* Task Categories
* Calendar View
* Drag and Drop Tasks
* Email Notifications

---

# 👨‍💻 Author

**Anjali Dara**

GitHub: https://github.com/DaraAnjali
