# Full-Stack Authentication App

## Tech Stack
- Frontend: React
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT + bcrypt
- Deployment: Docker / Docker Compose

## Features
- Signup & Login with JWT authentication
- Role-based access (user/admin)
- Profile page
- Admin dashboard
- Remember me functionality

## Setup
1. Clone the repository
2. Navigate to the project folder
3. Ensure Docker is installed and running
4. Run `docker-compose up --build`
5. Frontend: http://localhost:3000
6. Backend: http://localhost:4000

## Environment Variables
Create `.env` file in `backend/`:
```
MONGO_URI=mongodb://mongo:27017/auth-app
JWT_SECRET=your_jwt_secret_here
PORT=4000
```

## Deployment Guide
- You can deploy the backend to Render or Railway
- Use MongoDB Atlas or managed MongoDB service for production
- Frontend can be deployed to Netlify, Vercel, or Render static site
- Set environment variables accordingly in deployment platforms