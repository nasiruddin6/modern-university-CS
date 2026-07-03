# Modern University — Backend API 🎓

A robust **Express.js + MongoDB** backend powering the Modern University student management and content delivery system.

![Node.js](https://img.shields.io/badge/Node.js-18+-43853d?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.21-black?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.4-13aa52?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-ff7e3f?logo=auth0&logoColor=white)

---

## 🌟 Features

- **🔐 JWT Authentication** — Secure login for Students, Teachers, and Admins
- **💾 MongoDB Integration** — Real-time data persistence with Mongoose
- **📋 Content Management** — Admin CRUD for News, Events, Programs, Faculty, and Notices
- **🛡️ Role-Based Access** — Student, Teacher, and Admin authorization levels
- **⚡ RESTful API** — Clean, scalable API endpoints
- **🐳 Docker Support** — Containerized deployment ready
- **📊 Error Handling** — Comprehensive error middleware
- **✅ Data Validation** — Request validation using Mongoose schemas

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas)

### Installation

```bash
# Clone and navigate
cd modern-server

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Seed demo data
npm run seed

# Start development server
npm run dev
```

The API will be available at: **http://localhost:5000**

---

## 📁 Project Structure

```
modern-server/
├── src/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── newsController.js     # News CRUD operations
│   │   ├── eventController.js    # Event CRUD operations
│   │   ├── facultyController.js  # Faculty CRUD operations
│   │   ├── programController.js  # Program CRUD operations
│   │   └── noticeController.js   # Notice CRUD operations
│   ├── middleware/
│   │   ├── auth.js               # JWT protection & authorization
│   │   └── errorHandler.js       # Centralized error handling
│   ├── models/
│   │   ├── User.js               # User schema (Student, Teacher, Admin)
│   │   ├── News.js               # News schema
│   │   ├── Event.js              # Event schema
│   │   ├── Faculty.js            # Faculty schema
│   │   ├── Program.js            # Program schema
│   │   └── Notice.js             # Notice schema
│   ├── routes/
│   │   ├── authRoutes.js         # /api/auth endpoints
│   │   ├── newsRoutes.js         # /api/news endpoints
│   │   ├── eventRoutes.js        # /api/events endpoints
│   │   ├── facultyRoutes.js      # /api/faculty endpoints
│   │   ├── programRoutes.js      # /api/programs endpoints
│   │   ├── noticeRoutes.js       # /api/notices endpoints
│   │   └── index.js              # Route aggregator
│   ├── utils/
│   │   ├── formatters.js         # Response formatting utilities
│   │   └── seed.js               # Database seeding script
│   └── server.js                 # Application entry point
├── .env                          # Environment variables (git ignored)
├── .env.example                  # Example environment template
├── package.json
├── docker-compose.yml
└── README.md
```

---

## 📡 API Endpoints

### 🔑 Authentication (`/api/auth`)

| Method   | Endpoint     | Access | Description          |
| -------- | ------------ | ------ | -------------------- |
| `POST`   | `/login`     | Public | User login           |
| `POST`   | `/register`  | Public | Register new student |
| `GET`    | `/me`        | Auth   | Get current user     |
| `GET`    | `/users`     | Admin  | List all users       |
| `PUT`    | `/users/:id` | Admin  | Update user          |
| `DELETE` | `/users/:id` | Admin  | Delete user          |

### 📰 News (`/api/news`)

| Method   | Endpoint | Access | Description     |
| -------- | -------- | ------ | --------------- |
| `GET`    | `/`      | Public | List all news   |
| `GET`    | `/:id`   | Public | Get single news |
| `POST`   | `/`      | Admin  | Create news     |
| `PUT`    | `/:id`   | Admin  | Update news     |
| `DELETE` | `/:id`   | Admin  | Delete news     |

### 🎉 Events (`/api/events`)

| Method   | Endpoint | Access | Description      |
| -------- | -------- | ------ | ---------------- |
| `GET`    | `/`      | Public | List all events  |
| `GET`    | `/:id`   | Public | Get single event |
| `POST`   | `/`      | Admin  | Create event     |
| `PUT`    | `/:id`   | Admin  | Update event     |
| `DELETE` | `/:id`   | Admin  | Delete event     |

### 📚 Programs (`/api/programs`)

| Method   | Endpoint | Access | Description         |
| -------- | -------- | ------ | ------------------- |
| `GET`    | `/`      | Public | List programs       |
| `GET`    | `/:slug` | Public | Get program by slug |
| `POST`   | `/`      | Admin  | Create program      |
| `PUT`    | `/:id`   | Admin  | Update program      |
| `DELETE` | `/:id`   | Admin  | Delete program      |

### 👨‍🏫 Faculty (`/api/faculty`)

| Method   | Endpoint | Access | Description    |
| -------- | -------- | ------ | -------------- |
| `GET`    | `/`      | Public | List faculty   |
| `POST`   | `/`      | Admin  | Add faculty    |
| `PUT`    | `/:id`   | Admin  | Update faculty |
| `DELETE` | `/:id`   | Admin  | Delete faculty |

### 📢 Notices (`/api/notices`)

| Method   | Endpoint | Access | Description         |
| -------- | -------- | ------ | ------------------- |
| `GET`    | `/`      | Public | List active notices |
| `POST`   | `/`      | Admin  | Create notice       |
| `PUT`    | `/:id`   | Admin  | Update notice       |
| `DELETE` | `/:id`   | Admin  | Delete notice       |

### 🏥 Health Check

| Method | Endpoint      | Description |
| ------ | ------------- | ----------- |
| `GET`  | `/api/health` | API status  |

---

## 🔐 Authentication

### Login Request

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@university.edu",
    "password": "admin123",
    "role": "admin"
  }'
```

### Login Response

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "System Admin",
    "email": "admin@university.edu",
    "role": "admin"
  }
}
```

### Using Token in Requests

```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer <YOUR_JWT_TOKEN>"
```

---

## 🔓 Default Login Credentials

```
👨‍💼 ADMIN
   Email: admin@university.edu
   Password: admin123

👨‍🏫 TEACHER
   Email: teacher@university.edu
   Password: teacher123

👨‍🎓 STUDENT
   Email: student@university.edu
   Password: student123
```

---

## 🔧 Environment Configuration

Create `.env` file in the `modern-server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/modern-university?retryWrites=true&w=majority

# JWT
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=7d

# CORS
CLIENT_URL=http://localhost:5173
```

### MongoDB Atlas Setup

1. Create account at [mongodb.com](https://mongodb.com)
2. Create a new cluster
3. Create database user with read/write access
4. Whitelist your IP in Network Access
5. Copy connection string and paste in `MONGODB_URI`

---

## 💻 Development

### Available Commands

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Seed demo database
npm run seed

# Test database connection
npm run test:db
```

---

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# The API will be available at http://localhost:5000
```

---

## 🛠️ Tech Stack

| Package      | Version | Purpose               |
| ------------ | ------- | --------------------- |
| express      | 4.21.x  | Web framework         |
| mongoose     | 8.9.x   | MongoDB ODM           |
| bcryptjs     | 2.4.x   | Password hashing      |
| jsonwebtoken | 9.0.x   | JWT tokens            |
| cors         | 2.8.x   | Cross-origin requests |
| dotenv       | 16.4.x  | Environment variables |

---

## 🚀 Deployment

### Production Environment

Update `.env` with:

```env
NODE_ENV=production
MONGODB_URI=<your-production-mongodb-uri>
JWT_SECRET=<your-secure-random-secret>
CLIENT_URL=<your-frontend-domain>
```

### Heroku Deployment

```bash
heroku create modern-university-api
heroku config:set MONGODB_URI=<production-uri>
git push heroku main
```

---

## 📦 Frontend Integration

The React client (`modern-client`) connects via:

```javascript
// Development: Proxied through Vite
/api → http://localhost:5000/api

// Production: Direct API call
VITE_API_URL=https://api.modern-university.edu/api
```

### Run Both Servers

```bash
# Terminal 1 - Backend
cd modern-server && npm run dev

# Terminal 2 - Frontend
cd modern-client && npm run dev
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error

```
❌ MongooseServerSelectionError: connect ECONNREFUSED
```

**Solution:**

- Verify MongoDB is running
- Check `MONGODB_URI` in `.env`
- Ensure IP is whitelisted in MongoDB Atlas
- Test connection: `npm run test:db`

### CORS Error

```
❌ Access-Control-Allow-Origin header missing
```

**Solution:**

- Ensure `CLIENT_URL` matches frontend URL in `.env`
- Check CORS middleware in `server.js`

### JWT Token Error

```
❌ JsonWebTokenError: invalid token
```

**Solution:**

- User needs to login again
- Verify `JWT_SECRET` matches frontend expectation
- Check token expiration: `JWT_EXPIRES_IN`

---

## 📊 Performance Optimization

- ✅ Connection pooling with Mongoose
- ✅ Request validation at middleware level
- ✅ Error handling with try-catch
- ✅ CORS pre-flight caching
- ✅ Production-ready middleware

---

## 📝 License

MIT — Created for Modern University

---

## 🤝 Support

**Issues?** Contact: development@modern-university.edu  
**Documentation:** Check inline code comments for detailed explanations

---

**Last Updated:** July 4, 2026  
**Status:** ✅ Fully Operational  
**Version:** 1.0.0
