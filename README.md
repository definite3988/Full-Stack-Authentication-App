# Full-Stack Authentication App

**Project Description**
A full-stack authentication app with **secure signup/login**, **role-based access**, and **user/admin dashboards**. Built with modern web technologies for a seamless **frontend and backend experience**.

---

## 🛠 Tech Stack

**Frontend:** React
**Backend:** Node.js + Express
**Database:** MongoDB
**Authentication:** JWT + bcrypt
**Deployment:** Docker / Docker Compose

---

## ✨ Features

* **Signup & Login** with JWT authentication
* **Role-based access**: user/admin
* **Profile page** for users
* **Admin dashboard** for managing users
* **Remember Me** functionality for persistent login

---

## ⚡ Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/definite3988/Full-Stack-Authentication-App.git
   ```
2. Navigate to the project folder:

   ```bash
   cd Full-Stack-Authentication-App
   ```
3. Ensure **Docker** is installed and running
4. Start the application with Docker Compose:

   ```bash
   docker-compose up --build
   ```

* **Frontend:** [http://localhost:3000](http://localhost:3000)
* **Backend:** [http://localhost:4000](http://localhost:4000)

---

## 📝 Environment Variables

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=mongodb://mongo:27017/auth-app
JWT_SECRET=your_jwt_secret_here
PORT=4000
```

---

## 🚀 Deployment

* **Backend:** Deploy to Render or Railway
* **Database:** Use MongoDB Atlas or other managed MongoDB service for production
* **Frontend:** Deploy to Netlify, Vercel, or Render static site
* Set environment variables accordingly on your deployment platform

---

## 📦 Tools Used

* JavaScript (React, Node.js)
* MongoDB
* JWT, bcrypt
* Docker / Docker Compose
* Git & GitHub
