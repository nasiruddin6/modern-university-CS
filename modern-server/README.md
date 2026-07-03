# Modern University — Backend API

Express + MongoDB backend for the Modern University frontend.

## Features

- **MongoDB** — Real data storage for users, notices, news, events, faculty, and programs
- **JWT Authentication** — Student, teacher, and admin login
- **Admin CRUD** — Protected API routes for managing content
- **Public API** — Dynamic data for the React frontend

## Quick Start

### Prerequisites

- Node.js 18+
- MongoDB running locally (or MongoDB Atlas URI)

### Setup

```bash
cd modern-server
cp .env.example .env   # edit MONGODB_URI if needed
npm install
npm run seed           # populate database with sample data
npm run dev            # start API on http://localhost:5000
```

### Default Login Credentials

| Role    | Email                    | Password    |
|---------|--------------------------|-------------|
| Admin   | admin@university.edu     | admin123    |
| Teacher | teacher@university.edu   | teacher123  |
| Student | student@university.edu   | student123  |

## API Endpoints

| Method | Endpoint              | Access        | Description              |
|--------|-----------------------|---------------|--------------------------|
| POST   | /api/auth/login       | Public        | Login                    |
| POST   | /api/auth/register    | Public/Admin  | Register (student public) |
| GET    | /api/auth/me          | Auth          | Current user             |
| GET    | /api/notices          | Public        | List notices             |
| POST   | /api/notices          | Admin         | Create notice            |
| PUT    | /api/notices/:id      | Admin         | Update notice            |
| DELETE | /api/notices/:id      | Admin         | Delete notice            |
| GET    | /api/news             | Public        | List news                |
| POST   | /api/news             | Admin         | Create news              |
| PUT    | /api/news/:id         | Admin         | Update news              |
| DELETE | /api/news/:id         | Admin         | Delete news              |
| GET    | /api/events           | Public        | List events              |
| POST   | /api/events           | Admin         | Create event             |
| PUT    | /api/events/:id       | Admin         | Update event             |
| DELETE | /api/events/:id       | Admin         | Delete event             |
| GET    | /api/faculty          | Public        | List faculty             |
| POST   | /api/faculty          | Admin         | Create faculty           |
| PUT    | /api/faculty/:id      | Admin         | Update faculty           |
| DELETE | /api/faculty/:id      | Admin         | Delete faculty           |
| GET    | /api/programs         | Public        | List programs            |
| POST   | /api/programs         | Admin         | Create program           |

## Frontend Integration

The React client (`modern-client`) proxies `/api` to `http://localhost:5000` in development.

Run both:

```bash
# Terminal 1
cd modern-server && npm run dev

# Terminal 2
cd modern-client && npm run dev
```

Admin panel: http://localhost:5173/admin  
Login: http://localhost:5173/login
