<p align="center">
  <img src="https://img.shields.io/badge/CINEVERSE-E50914?style=for-the-badge&logoColor=white&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTIwIDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yek0xMCAxNi41di05bDYgNC41LTYgNC41eiIvPjwvc3ZnPg==" alt="Cineverse"/>
</p>

<h1 align="center">🎬 CineVerse — Streaming Platform</h1>

<p align="center">
  A Netflix-inspired streaming UI built with <strong>React 19</strong>, <strong>Vite</strong>, and <strong>Three.js</strong>.<br/>
  Features authentication, RBAC, ticket booking, and an immersive 3D glassmorphism interface.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite" />
  <img src="https://img.shields.io/badge/Three.js-3D-000000?style=flat-square&logo=threedotjs" />
  <img src="https://img.shields.io/badge/Axios-API-5A29E4?style=flat-square&logo=axios" />
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter" />
</p>

---

## 📁 Project Structure

The repository is organized by development phase:

```
CineVerse/
├── day1/          # Day 1 — Core UI & Component Architecture (React)
├── day2/          # Day 2 — Auth, Routing, Booking, 3D & API Layer (React)
├── day3/          # Day 3 — Authentication Service (Spring Boot Backend)
├── day4/          # Day 4 — API Gateway (Spring Cloud Gateway)
├── day5/          # Day 5 — Movie Catalog Service (Spring Boot + MongoDB)
├── day6/          # Day 6 — Booking Service (Spring Boot + PostgreSQL)
└── day7/          # Day 7 — Redis Caching & Seat Locking (Booking Service Update)
```

Each folder is a **self-contained React + Vite project** that can be run independently.

---

## 🗓️ Day 1 — Core UI & Component Architecture

> Foundation of the streaming platform — modular components, responsive design, and a polished Netflix-style interface.

### Features
- 🎨 **Design System** — CSS custom properties, Inter font, custom scrollbar, utility animations
- 🧭 **Navbar** — Sticky navigation with search, notifications, profile dropdown, mobile hamburger menu
- 🖼️ **Hero Banner** — Full-width featured movie showcase with gradient overlays
- 🎞️ **Content Rows** — Horizontal scrollable carousels with arrow navigation
- 🃏 **Movie Cards** — Poster thumbnails with rich hover-expand cards (actions, metadata, genres)
- 🪟 **Movie Modal** — Detailed overlay with cast info, ratings, and maturity details
- 📄 **Pages** — Home, Browse (with sort & grid/list toggle), My List, Search (real-time filtering)
- 📱 **Fully Responsive** — Mobile-first design across all breakpoints

### Tech Stack
| Tech | Purpose |
|------|---------|
| React 19 | Component UI library |
| Vite 8 | Build tool & dev server |
| React Router 7 | SPA routing |
| React Icons | Icon library (Feather Icons) |
| Vanilla CSS | Custom design system with BEM naming |

### Component Architecture
```
src/
├── components/
│   ├── ContentRow/      # Scrollable movie carousels
│   ├── Footer/          # Site footer with links
│   ├── HeroBanner/      # Featured movie hero section
│   ├── MovieCard/        # Card with hover-expand preview
│   ├── MovieModal/       # Full detail overlay
│   └── Navbar/           # Top navigation bar
├── pages/
│   ├── HomePage/         # Hero + content rows
│   ├── BrowsePage/       # Grid view with sorting
│   ├── MyListPage/       # Saved titles
│   └── SearchPage/       # Real-time search
└── data/
    └── movies.js         # Mock TMDB-style dataset
```

---

## 🗓️ Day 2 — Auth, Routing, Booking, 3D & API Layer

> Builds on Day 1 by adding authentication, role-based access control, a ticket booking system, Axios API integration, and an immersive 3D background.

### New Features
- 🔐 **Authentication** — Login/Signup page with JWT simulation (localStorage token management)
- 🛡️ **RBAC (Role-Based Access Control)** — Three roles: `user`, `owner`, `admin` with conditional UI rendering
- 🚧 **Protected Routes** — Unauthenticated users are redirected to `/login`
- 🎟️ **Ticket Booking** — Interactive seat selection grid with real-time pricing and checkout
- 🌐 **Axios API Service** — Pre-configured with request/response interceptors and JWT header injection
- 🎆 **3D Background** — Interactive Three.js scene with glassmorphism torus knots, floating orbs, stars, and mouse-tracking camera
- 🪟 **Glassmorphism UI** — Translucent cards, frosted-glass navbar, and backdrop-blur effects throughout

### New Tech
| Tech | Purpose |
|------|---------|
| Three.js | 3D WebGL rendering |
| @react-three/fiber | React renderer for Three.js |
| @react-three/drei | Helper components (Float, Stars, Sparkles, etc.) |
| Axios | HTTP client with interceptors |
| React Context API | Global auth state management |

### New Files Added
```
src/
├── context/
│   └── AuthContext.jsx          # Auth state provider (login, logout, role)
├── routes/
│   └── AppRoutes.jsx            # Centralized route definitions
├── services/
│   └── api.js                   # Axios instance with JWT interceptors
├── components/
│   ├── ProtectedRoute/          # Route guard component
│   └── ThreeBackground/         # Interactive 3D canvas
└── pages/
    ├── LoginPage/               # Sign In / Sign Up screen
    └── BookingPage/             # Seat selection & checkout
```

### RBAC Roles
| Feature | User | Theatre Owner | Admin |
|---------|------|---------------|-------|
| View Movies | ✅ | ✅ | ✅ |
| Book Tickets | ✅ | ❌ | ❌ |
| Manage Shows | ❌ | ✅ | ✅ |
| Manage Users | ❌ | ❌ | ✅ |

> **Login hints:** Use `admin@cineverse.com` for Admin, `owner@cineverse.com` for Theatre Owner, or any other email for User role.

---

## 🗓️ Day 3 — Backend Authentication Service

> The foundation of the backend architecture. Provides secure, stateless authentication and authorization using Spring Boot, PostgreSQL, and JWT.

### Features
- 🔐 **Stateless Authentication** — JSON Web Tokens (JWT) for secure, scalable session management
- 🛡️ **Role-Based Access Control (RBAC)** — Enforces USER, THEATRE_OWNER, and ADMIN roles at the API level
- 💾 **Data Persistence** — PostgreSQL database integration via Spring Data JPA
- 🔒 **Security** — BCrypt password hashing and Spring Security filter chains
- ⚠️ **Validation & Error Handling** — Global exception handling and DTO validation

### Tech Stack
| Tech | Purpose |
|------|---------|
| Java 17 | Core programming language |
| Spring Boot 3.2 | Backend framework |
| Spring Security | Authentication & Authorization |
| PostgreSQL | Relational database |
| Spring Data JPA | ORM and database access |

---

## 🗓️ Day 4 — API Gateway & Microservices Communication

> The central entry point for the backend system, built with Spring Cloud Gateway to route and secure all microservice requests.

### Features
- 🚪 **Centralized Entry Point** — Abstracted internal microservice structure from the frontend
- 🔀 **Dynamic Routing** — Request routing to appropriate microservices (Auth, Movie, Booking)
- 🛂 **Centralized JWT Validation** — Global filters to intercept and validate tokens before forwarding
- ⚡ **Reactive Architecture** — Built on Spring WebFlux and WebClient for non-blocking, high-throughput communication

### Tech Stack
| Tech | Purpose |
|------|---------|
| Spring Cloud Gateway | Reactive API Gateway |
| Spring WebFlux | Non-blocking reactive programming |
| WebClient | Asynchronous inter-service HTTP calls |
| Eureka (Optional) | Service discovery |

---

## 🗓️ Day 5 — Movie Catalog Service

> The data-heavy service responsible for managing the platform's movies, optimized for fast reads and flexible schemas using MongoDB.

### Features
- 🗄️ **NoSQL Document Storage** — Uses MongoDB for flexible, high-performance data modeling
- 🔎 **Search & Filtering** — Efficient retrieval of movies by title, genre, and ratings
- 📄 **Pagination & Sorting** — Handles large datasets with optimized queries
- ⭐️ **Reviews & Ratings** — User feedback aggregation system
- 🖼️ **Media Upload Handling** — Configured for handling poster and image uploads

### Tech Stack
| Tech | Purpose |
|------|---------|
| Spring Boot 3 | Backend framework |
| MongoDB | NoSQL Document database |
| Spring Data MongoDB | Repository abstraction & MongoTemplate |

---

## 🗓️ Day 6 — Booking Service & Seat Management

> The transaction-critical service responsible for handling theatre creation, scheduling shows, and preventing double-bookings.

### Features
- 🏗️ **Theatre & Screen Modeling** — Hierarchical data models for locations, theatres, and screens (audis)
- 💺 **Seat Layouts & Status** — 2D grid representations for seat selection and dynamic pricing
- ⏱️ **Concurrency Control** — Optimistic/Pessimistic and temporary locking mechanisms to prevent double-bookings
- 📅 **Show Scheduling** — Manages time slots and prevents overlapping shows
- 🔄 **State Machine Workflow** — Manages booking lifecycle (INITIATED, LOCKED, CONFIRMED, CANCELLED)

### Tech Stack
| Tech | Purpose |
|------|---------|
| Spring Boot 3 | Backend framework |
| PostgreSQL | Relational database for strong consistency |
| Spring Data JPA | ORM and transactional locking |

---

## 🗓️ Day 7 — Redis Caching & Seat Locking

> Introduces an in-memory data store to handle high-concurrency seat locking and optimize the overall performance of the booking system.

### Features
- ⚡ **High-Speed Caching** — Caches frequently accessed data (like seat layouts) in memory to reduce database load
- 🔒 **Distributed Seat Locking** — Temporarily reserves seats upon selection to prevent double-booking race conditions
- ⏳ **TTL (Time-To-Live)** — Uses automatic expiration for seat locks (e.g., 5-minute holds before release)
- 🚀 **Optimized Read Performance** — Employs a Cache-Aside strategy for fetching show and theatre data

### Tech Stack
| Tech | Purpose |
|------|---------|
| Spring Boot 3 | Backend framework |
| Redis | In-memory data store for caching and locking |
| Spring Data Redis | Redis integration and template operations |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Sharingan001/CineVerse.git
cd CineVerse

# Run Day 1
cd day1
npm install
npm run dev

# Or run Day 2 (recommended — includes all features)
cd day2
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📸 Key Screens

| Screen | Description |
|--------|-------------|
| **Login** | Netflix-style auth with RBAC role simulation |
| **Home** | Hero banner + scrollable content rows |
| **Browse** | Grid/List view with sort by title, year, or match |
| **Search** | Real-time filtering across titles, genres, descriptions |
| **Movie Modal** | Detailed view with Book Tickets button |
| **Booking** | Interactive seat map with checkout summary |

---

## 🏗️ Architecture Highlights

- **Component-Based Design** — Co-located `.jsx` and `.css` files using BEM methodology
- **Static-First Development** — Mock data layer (`movies.js`) enables parallel frontend/backend development
- **API-Ready Structure** — Axios service layer prepared for seamless backend integration
- **Performance** — `useMemo` for expensive computations, `useCallback` for stable references, CSS transitions at 60fps
- **Clean Architecture** — Separated concerns: components → pages → routes → services → context

---

## 📄 License

This project is built for academic and learning purposes.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Sharingan001">Sharingan001</a>
</p>
