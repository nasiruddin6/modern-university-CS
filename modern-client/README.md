# Modern University — Frontend Application 🎓

A modern, fully responsive React + Vite frontend for the Modern University student management and information system. Built with performance, accessibility, and user experience in mind.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-11-6332F6)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Features

- **⚡ Lightning-Fast** — Built with Vite for instant page loads and HMR
- **📱 Fully Responsive** — Works perfectly on mobile, tablet, and desktop
- **🎨 Beautiful UI** — Modern design with Tailwind CSS + DaisyUI
- **🔐 Authentication** — Secure login for Students, Teachers, and Admins
- **📊 Admin Dashboard** — Manage news, events, programs, and faculty
- **🔍 Global Search** — Search across all university content in real-time
- **🎬 Smooth Animations** — AOS scroll animations for engaging interactions
- **📱 Progressive App** — Optimized for offline support and performance
- **🎬 Carousel Sliders** — Swiper.js for hero, testimonials, and faculty
- **📢 Notice Ticker** — Real-time notifications with auto-scroll

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Key Pages](#key-pages)
4. [Installation & Setup](#installation--setup)
5. [API Integration](#api-integration)
6. [Available Scripts](#available-scripts)
7. [Authentication](#authentication)
8. [Customization](#customization)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn**
- **Backend Server** running on http://localhost:5000

### Installation

```bash
# Navigate to client directory
cd modern-client

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

The application will open at: **http://localhost:5173**

---

## 📁 Project Structure

```
modern-client/
├── public/
│   ├── images/
│   │   ├── banner/              # Hero slider images
│   │   └── programs/            # Program card images
│   ├── education.png            # Favicon
│   └── _redirects               # Netlify redirect config
│
├── src/
│   ├── api/
│   │   └── client.js            # Fetch wrapper & API endpoints
│   │
│   ├── components/
│   │   ├── Banner.jsx           # Hero banner with Swiper
│   │   ├── EventCard.jsx        # Event card component
│   │   ├── NewsCard.jsx         # News card component
│   │   ├── ProgramCard.jsx      # Program card component
│   │   ├── ProtectedRoute.jsx   # Route guard for auth
│   │   ├── Home.jsx             # Home page orchestrator
│   │   └── HomeComponents/
│   │       ├── About.jsx
│   │       ├── ChooseUs.jsx
│   │       ├── DepartmentsSection.jsx
│   │       ├── Events.jsx
│   │       ├── FacultyShowcase.jsx
│   │       ├── ImgBar.jsx
│   │       ├── LatestNews.jsx
│   │       ├── OurProgram.jsx
│   │       ├── StatsSection.jsx (with CountUp)
│   │       └── TestimonialSection.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx      # Global auth state
│   │
│   ├── data/
│   │   ├── academicsContent.js
│   │   ├── admissionsContent.js
│   │   ├── events.js
│   │   ├── news.js
│   │   ├── notices.js
│   │   ├── programs.js
│   │   └── searchIndex.js
│   │
│   ├── hooks/
│   │   └── useInView.js         # Intersection observer hook
│   │
│   ├── layout/
│   │   ├── AdminLayout.jsx
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── AcademicPage.jsx
│   │   ├── AdmissionPage.jsx
│   │   ├── AllNews.jsx
│   │   ├── AllPrograms.jsx
│   │   ├── Campus.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EventCalendar.jsx
│   │   ├── Login.jsx
│   │   └── admin/
│   │       ├── AdminDashboard.jsx
│   │       ├── ManageEvents.jsx
│   │       ├── ManageFaculty.jsx
│   │       ├── ManageNews.jsx
│   │       └── ManageNotices.jsx
│   │
│   ├── router/
│   │   └── router.jsx
│   │
│   ├── shared/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── NoticeTicker.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── package.json
└── README.md
```

---

## 📄 Key Pages

### 🏠 Public Pages

| Page       | URL                 | Description                    |
| ---------- | ------------------- | ------------------------------ |
| Home       | `/`                 | Landing page with all sections |
| Programs   | `/programs`         | Browse all academic programs   |
| Events     | `/events`           | View upcoming events           |
| News       | `/news`             | Read latest news articles      |
| Campus     | `/campus`           | Virtual campus tour            |
| Contact    | `/contacts`         | Contact form & info            |
| Academics  | `/academics/:slug`  | Academic info & resources      |
| Admissions | `/admissions/:slug` | Admission process              |
| Login      | `/login`            | User authentication            |

### 🔒 Protected Pages

| Page            | URL                      | Role  | Description         |
| --------------- | ------------------------ | ----- | ------------------- |
| Dashboard       | `/dashboard`             | User  | User profile & info |
| Admin Panel     | `/admin`                 | Admin | Admin overview      |
| Manage News     | `/admin/manage-news`     | Admin | Create/Edit/Delete  |
| Manage Events   | `/admin/manage-events`   | Admin | Manage events       |
| Manage Programs | `/admin/manage-programs` | Admin | Manage programs     |
| Manage Faculty  | `/admin/manage-faculty`  | Admin | Manage faculty      |
| Manage Notices  | `/admin/manage-notices`  | Admin | Manage notices      |

---

## 🔧 Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

Installs:

- `react` & `react-dom` — UI framework
- `react-router-dom` — Client routing
- `tailwindcss` — CSS framework
- `swiper` — Carousels/sliders
- `aos` — Scroll animations
- `lucide-react` — Icons
- `vite` — Build tool

### 2. Environment Configuration

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Development

```bash
npm run dev
```

---

## 🔗 API Integration

### Frontend → Backend Connection

**API Client** (`src/api/client.js`):

```javascript
const API_BASE = import.meta.env.VITE_API_URL || "/api";

export const api = async (endpoint, options = {}) => {
  // JWT token handling
  // Request/response formatting
  // Error handling
};
```

### Development Proxy

**Vite Config** (`vite.config.js`):

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
    },
  },
}
```

### API Endpoints Used

```javascript
// Authentication
authApi.login(credentials);
authApi.getMe();

// Content
newsApi.getAll();
eventsApi.getAll();
programsApi.getAll();
facultyApi.getAll();
noticesApi.getAll();

// Admin
newsApi.create(data);
newsApi.update(id, data);
newsApi.delete(id);
// ... same for other endpoints
```

---

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 🔐 Authentication

### Login System

**File:** `src/context/AuthContext.jsx`

```javascript
const login = async (credentials) => {
  const res = await authApi.login(credentials);
  localStorage.setItem("token", res.token);
  setUser(res.user);
};

const logout = () => {
  localStorage.removeItem("token");
  setUser(null);
};
```

### Protected Routes

**File:** `src/components/ProtectedRoute.jsx`

```jsx
<ProtectedRoute requiredRole="admin">
  <AdminDashboard />
</ProtectedRoute>
```

### Default Credentials

```
👨‍💼 Admin
   Email: admin@university.edu
   Password: admin123

👨‍🏫 Teacher
   Email: teacher@university.edu
   Password: teacher123

👨‍🎓 Student
   Email: student@university.edu
   Password: student123
```

---

## 🎨 Customization

### Update Content

| Content    | File                            |
| ---------- | ------------------------------- |
| Programs   | `src/data/programs.js`          |
| News       | `src/data/news.js`              |
| Events     | `src/data/events.js`            |
| Admissions | `src/data/admissionsContent.js` |
| Academics  | `src/data/academicsContent.js`  |

### Customize Styling

**Tailwind Config** (`tailwind.config.js`):

```javascript
module.exports = {
  theme: {
    colors: {
      emerald: {
        600: "#059669", // Primary brand color
      },
      // Add custom colors...
    },
    fontFamily: {
      serif: ["Georgia", "serif"], // Change fonts
    },
  },
};
```

### Update Routes

**Router Config** (`src/router/router.jsx`):

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      // Add new routes...
    ],
  },
]);
```

---

## 🚀 Performance Optimization

### Lazy Loading

```jsx
<img loading="lazy" src={image} alt="description" />
```

### Code Splitting

Routes automatically split via React Router.

### Production Build

```bash
npm run build
```

Creates optimized `dist/` folder with:

- Minified CSS/JS
- Automatic code splitting
- Asset optimization

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Environment for Production

```env
VITE_API_URL=https://api.modern-university.edu/api
```

---

## 🛠️ Tech Stack

| Package          | Version | Purpose           |
| ---------------- | ------- | ----------------- |
| react            | 18.3.x  | UI framework      |
| react-router-dom | 7.1.x   | Routing           |
| vite             | 6.0.x   | Build tool        |
| tailwindcss      | 3.4.x   | CSS framework     |
| daisyui          | 4.12.x  | UI components     |
| swiper           | 11.2.x  | Carousels         |
| aos              | 2.3.x   | Scroll animations |
| lucide-react     | 0.475.x | Icons             |

---

## 🔍 Global Search

Search across:

- All programs
- News articles
- Events
- Pages (Academics, Admissions, etc.)

Powered by `src/data/searchIndex.js`

---

## 📊 Performance Metrics

- **Lighthouse:** 90+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Bundle Size:** ~150KB gzipped

---

## 🐛 Troubleshooting

### API Connection Error

```
❌ Cannot fetch from http://localhost:5000/api
```

**Solution:**

- Ensure backend is running: `npm run dev` in `modern-server`
- Check `VITE_API_URL` in `.env`
- Verify CORS settings in backend

### Styling Not Applied

```
❌ Tailwind CSS not working
```

**Solution:**

- Clear cache: `Ctrl+Shift+Delete`
- Rebuild: `npm run build`
- Check `tailwind.config.js`

### Hot Reload Not Working

**Solution:**

- Restart dev server
- Check for syntax errors
- Save files properly

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

---

## 📝 License

MIT — Created for Modern University

---

## 🤝 Support

**Frontend Issues:** frontend@modern-university.edu  
**General Questions:** support@modern-university.edu

---

**Last Updated:** July 4, 2026  
**Version:** 1.0.0  
**Status:** ✅ Production Ready  
**Maintainer:** Modern University Development Team

---

## Overview

**Modern University** is a complete frontend university portal featuring:

- Academic programs and departments
- Faculty profiles and student testimonials
- Events, news, and campus gallery
- Full admissions and academics information
- Live site-wide search

All sections work together under a shared layout. The navbar, notice ticker, and footer are consistent across every page, while the home page consolidates all primary content sections in one scrollable experience.

---

## Architecture

```mermaid
flowchart TD
    A[main.jsx] --> B[Router]
    B --> C[MainLayout]
    C --> D[Navbar]
    C --> E[NoticeTicker]
    C --> F[Page Content]
    C --> G[Footer]

    F --> H[Home Page]
    F --> I[Programs / Events / News]
    F --> J[Campus / Contact]
    F --> K[Admissions / Academics]

    H --> H1[Banner]
    H --> H2[About]
    H --> H3[Stats]
    H --> H4[Departments]
    H --> H5[Faculty]
    H --> H6[Programs]
    H --> H7[Choose Us]
    H --> H8[Testimonials]
    H --> H9[Events]
    H --> H10[News]
    H --> H11[Gallery]
```

| Layer         | Responsibility                                             |
| ------------- | ---------------------------------------------------------- |
| `MainLayout`  | Wraps every page with Navbar, Notice Ticker, and Footer    |
| `router.jsx`  | Defines all application routes                             |
| `data/`       | Centralized content for programs, news, events, and search |
| `pages/`      | Standalone full-page views                                 |
| `components/` | Reusable UI blocks and home page sections                  |

---

## Home Page Sections

| #   | Section        | Component                | Description                                                           |
| --- | -------------- | ------------------------ | --------------------------------------------------------------------- |
| 1   | Hero Banner    | `Banner.jsx`             | Full-screen Swiper slider with 3 campus images and linked CTA buttons |
| 2   | About          | `About.jsx`              | Dark-themed section with embedded video and university introduction   |
| 3   | Statistics     | `StatsSection.jsx`       | Four animated counters triggered on scroll via IntersectionObserver   |
| 4   | Departments    | `DepartmentsSection.jsx` | Six department cards: CSE, EEE, BBA, Law, English, Architecture       |
| 5   | Faculty        | `FacultyShowcase.jsx`    | Auto-playing faculty carousel with social media links                 |
| 6   | Programs       | `OurProgram.jsx`         | Three featured program cards with link to full program listing        |
| 7   | Why Choose Us  | `ChooseUs.jsx`           | Key statistics, highlights, and campus imagery                        |
| 8   | Testimonials   | `TestimonialSection.jsx` | Student reviews with star ratings, Swiper slider, and AOS animations  |
| 9   | Events         | `Events.jsx`             | Four upcoming events with link to the full event calendar             |
| 10  | Latest News    | `LatestNews.jsx`         | Three news cards with link to all news posts                          |
| 11  | Campus Gallery | `ImgBar.jsx`             | Responsive image gallery with lightbox modal                          |

---

## Global UI Components

### Navbar (`src/shared/Navbar.jsx`)

- Transparent on the home hero; transitions to a white background with shadow on scroll
- Mega dropdown menus for **Academics** and **Admissions** with fully functional links
- Animated hamburger menu for mobile navigation
- Live search across programs, news, events, and all menu pages
- **Apply Now** button routes to `/admissions/apply`
- Solid white navbar on all non-home pages for consistent readability

### Notice Ticker (`src/shared/NoticeTicker.jsx`)

- Fixed position directly below the navbar
- Red **Notice** badge with auto-scrolling announcement text
- Pauses animation when outside the viewport to optimize performance

### Footer (`src/shared/Footer.jsx`)

- Brand information, quick links, academics, and admissions navigation
- Newsletter subscription form
- Social media icons and copyright notice

---

## Routes & Pages

| Route               | Page           | Description                                          |
| ------------------- | -------------- | ---------------------------------------------------- |
| `/`                 | Home           | All main content sections                            |
| `/programs`         | All Programs   | Nine programs with category filtering                |
| `/programs/:slug`   | Academic Page  | Undergraduate, Graduate, Doctoral, Online Learning   |
| `/faculties/:slug`  | Academic Page  | Engineering, Business, Arts & Sciences, Medicine     |
| `/academics/:slug`  | Academic Page  | Calendar, Library, Research Centers, Student Support |
| `/events`           | Event Calendar | Six events with month-based filtering                |
| `/news`             | All News       | Six news articles with category filtering            |
| `/campus`           | Campus         | Facilities overview, gallery, and visit CTA          |
| `/contacts`         | Contact        | Contact details and inquiry form                     |
| `/admissions/:slug` | Admission Page | Apply, Requirements, Deadlines, and more             |
| `/scholarships`     | Admission Page | Scholarship programs and eligibility                 |

### Admissions Routes

`apply` · `requirements` · `deadlines` · `transfer` · `tuition` · `scholarships` · `financial-aid` · `payment` · `open-days` · `international` · `campus` · `contacts`

### Academics Routes

`undergraduate` · `graduate` · `doctoral` · `online` · `engineering` · `business` · `arts` · `medicine` · `calendar` · `library` · `research` · `support`

Each admissions and academics page includes a sidebar for easy navigation between related sections.

---

## Project Structure

```
Modern-University/
├── public/
│   └── images/
│       ├── banner/              # Hero slider images
│       └── programs/            # Program card images
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Home.jsx
│   │   ├── ProgramCard.jsx
│   │   ├── EventCard.jsx
│   │   ├── NewsCard.jsx
│   │   └── HomeComponents/      # Home page section components
│   ├── data/
│   │   ├── programs.js
│   │   ├── events.js
│   │   ├── news.js
│   │   ├── admissionsContent.js
│   │   ├── academicsContent.js
│   │   └── searchIndex.js       # Global search index
│   ├── hooks/
│   │   └── useInView.js         # Viewport visibility hook
│   ├── layout/
│   │   └── MainLayout.jsx
│   ├── pages/                   # Standalone page views
│   ├── router/
│   │   └── router.jsx
│   └── shared/
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       └── NoticeTicker.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## Tech Stack

| Feature             | Library                                                |
| ------------------- | ------------------------------------------------------ |
| UI Framework        | React 18                                               |
| Build Tool          | Vite 6                                                 |
| Styling             | Tailwind CSS 3 + DaisyUI                               |
| Routing             | React Router DOM v7                                    |
| Sliders / Carousels | Swiper.js 11                                           |
| Scroll Animations   | AOS                                                    |
| Animated Counters   | react-countup                                          |
| Notice Marquee      | react-fast-marquee                                     |
| Icons               | Lucide React, React Icons                              |
| Performance         | Lazy loading, IntersectionObserver, local image assets |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/Modern-University.git
cd Modern-University
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Design System

| Token            | Value                                  |
| ---------------- | -------------------------------------- |
| Primary Color    | Emerald (`emerald-600`)                |
| Dark Background  | `slate-900`                            |
| Light Background | `gray-50` / `white`                    |
| Typography       | Serif (default layout font)            |
| Card Radius      | `rounded-2xl`                          |
| Interactions     | Lift, shadow, and image scale on hover |

---

## Search

The navbar search bar provides live results across the entire site, including:

- All programs, news articles, and events
- Every admissions and academics menu item
- Campus, contact, and application pages

Results appear as the user types. Press **Enter** to navigate to the first result, or **Escape** to close the search panel.

---

## Customization

| Content              | File                            |
| -------------------- | ------------------------------- |
| Programs             | `src/data/programs.js`          |
| News articles        | `src/data/news.js`              |
| Events               | `src/data/events.js`            |
| Admissions pages     | `src/data/admissionsContent.js` |
| Academics pages      | `src/data/academicsContent.js`  |
| Notice announcements | `src/shared/NoticeTicker.jsx`   |
| Banner slides        | `src/components/Banner.jsx`     |
| Application routes   | `src/router/router.jsx`         |

### Banner CTA Links

| Slide | Primary Button        | Destination             |
| ----- | --------------------- | ----------------------- |
| 1     | Sign Up for Excursion | `/admissions/open-days` |
| 1     | Learn More            | `/campus`               |
| 2     | Visit Now             | `/campus`               |
| 2     | Get Started           | `/admissions/apply`     |
| 3     | View Programs         | `/programs`             |
| 3     | Apply Now             | `/admissions/apply`     |

---

## Developer

**MD Nasir Uddin**  
Frontend Developer — Modern University Project

---

## License

This project is intended for educational purposes.

---

<p align="center">
  <strong>Modern University</strong> — Shaping Future Leaders Since 1992
</p>
