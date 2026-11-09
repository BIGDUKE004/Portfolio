export const EMAIL = "elijahmiracle2007@gmail.com";
export const GITHUB = "https://github.com/BIGDUKE004";
export const LINKEDIN = "https://www.linkedin.com/in/elijah-miracle-b716b5435/";
export const EXT = { target: "_blank", rel: "noopener noreferrer" };

// `viz` picks the illustration in ProjectViz; `shot` picks a real screenshot in Work.jsx (null = illustration).
export const PROJECTS = [
  {
    n: "01", id: "motora", viz: "workflow", shot: null, cat: "Full-stack",
    name: "Motora: Car Maintenance Platform",
    status: "Built · deployed",
    desc: "A payment-enabled workshop management platform for two roles, customers and workshop admins. A layered FastAPI backend with 70+ endpoints sits behind a React and TypeScript frontend, deployed on Render and Vercel.",
    tags: ["Python", "FastAPI", "SQLModel", "PostgreSQL", "React", "TypeScript", "Tailwind", "Paystack"],
    live: null,
    pts: [
      "JWT access and refresh tokens, email verification, password reset, bcrypt hashing and login rate limiting (5 attempts per 15 minutes)",
      "Paystack payments with initialisation, redirect callbacks and webhooks verified with HMAC-SHA512 signatures",
      "Seven-stage service workflow with inspection notes, customer approval and next-service dates",
      "Cloudinary image uploads, Resend email notifications and 169 Pytest tests across the service and API layers",
      "About 20 React pages with TanStack Query: a customer portal and an admin dashboard with a request workbench and reports",
    ],
    note: "The live link for this project is not listed here yet.",
  },
  {
    n: "02", id: "eventpad", viz: "ticket", shot: "eventpad", cat: "Full-stack",
    name: "EventPad!: Event Ticketing Platform",
    status: "Built · web client in development",
    desc: "An event ticketing platform: a layered REST API for events, ticket types, multi-item bookings, payments and tickets, with a React (Vite) frontend for browsing, booking and organiser tools.",
    tags: ["Python", "FastAPI", "MySQL", "SQLAlchemy", "React", "Docker", "JWT"],
    live: "https://eventpadi-steel.vercel.app",
    pts: [
      "JWT authentication and Argon2 password hashing",
      "Events, bookings and payments modelled in a relational MySQL schema with the SQLAlchemy ORM",
      "API containerised with Docker and configured for a hosted database and a separate frontend origin",
      "Frontend driven by the API's OpenAPI schema",
    ],
  },
  {
    n: "03", id: "chemist", viz: "inventory", shot: "chemist", cat: "Full-stack",
    name: "Chemist Management System",
    status: "Built · deployed",
    desc: "A pharmacy inventory and sales system: a Spring Boot and MongoDB REST API secured with JWT, plus a staff-facing React and Redux Toolkit dashboard.",
    tags: ["Java 17", "Spring Boot", "MongoDB", "JWT", "Docker", "React", "Redux Toolkit"],
    live: "https://apothic-orpin.vercel.app",
    pts: [
      "Drug CRUD, search, stock counts and dispensing, with DTO request and response models",
      "Spring Security and a JWT filter; account, password and stock rules enforced through a custom exception hierarchy and a global handler",
      "Repository and service layers tested with JUnit; multi-stage Docker build (Maven build, JRE 17 runtime)",
      "Dashboard keeps the JWT across refreshes and shows a live request / response activity log for debugging",
    ],
  },
  {
    n: "04", id: "bank", viz: "bank", shot: null, cat: "Backend / API",
    name: "Bank Transaction API",
    status: "Built",
    desc: "A layered Spring Boot REST API for fund transfers, airtime purchases and per-account transaction history, with a tiered discount engine and a request audit log.",
    tags: ["Java 21", "Spring Boot", "Spring Data JPA", "PostgreSQL", "JUnit 5"],
    live: null,
    pts: [
      "DTOs, Bean Validation and custom exceptions for invalid amounts and unknown accounts",
      "BigDecimal for all monetary arithmetic",
      "Discount engine applying tiered rates by customer type, transaction amount and history",
      "Servlet filter writing the method, path and status code of every request to a PostgreSQL audit table",
      "JUnit 5 unit and parameterized tests for the service logic and discount rules",
    ],
    note: "This one is shown as a case study; no live backend is listed.",
  },
  {
    n: "05", id: "shop", viz: "grid", shot: "ecommerce", cat: "Full-stack",
    name: "Shop: E-commerce Storefront",
    status: "Built",
    desc: "A responsive storefront with catalog, product-detail, cart, profile and sign-in pages, backed by an Express and SQLite API for sign-up, login and sessions.",
    tags: ["React 19", "RTK Query", "Tailwind 4", "Express", "SQLite"],
    live: "https://e-commerce-duke-ab30.vercel.app",
    pts: [
      "RTK Query data fetching and caching with a responsive Tailwind layout",
      "Salted password hashes and hashed session tokens",
    ],
  },
  {
    n: "06", id: "datheon", viz: "dash", shot: null, cat: "Frontend",
    name: "Datheon Internship: Front-End Projects",
    status: "Built",
    desc: "Three standalone front-end projects written in plain HTML, CSS and JavaScript with no frameworks, built during the Datheon Full-Stack Web Development Internship.",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    live: null,
    pts: [
      "Weather Telemetry: current conditions and a multi-day forecast from the OpenWeather API, showing temperature, humidity and wind",
      "Daymark: a task manager with categories, due dates, filtering, search and progress tracking, persisted in localStorage",
      "A responsive personal portfolio page presenting my tech stack and projects",
    ],
    note: "Live links for these three are not listed here yet.",
  },
];

export const STACK = [
  ["Languages", ["Python", "Java", "JavaScript", "TypeScript", "Go (fundamentals)"]],
  ["Backend & APIs", ["FastAPI", "Spring Boot", "Express", "REST API design", "JWT and refresh tokens", "Spring Security", "SQLAlchemy / SQLModel", "Pytest", "JUnit"]],
  ["Frontend", ["React", "TypeScript", "Redux Toolkit", "TanStack Query", "React Router", "Vite", "Tailwind CSS"]],
  ["Databases", ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Schema design and SQL"]],
  ["Integrations", ["Paystack payments and webhooks", "Resend", "Cloudinary"]],
  ["Tools & DevOps", ["Docker (multi-stage builds)", "Git", "GitHub", "Maven", "uv", "Render", "Vercel"]],
];

export const PRINCIPLES = [
  ["01", "Build solid foundations.", "Layered APIs, secure authentication and well-modelled data, so the backend is reliable and easy to work with."],
  ["02", "Build interfaces people can use.", "Clean, responsive frontends that make functionality simple to understand and use."],
  ["03", "Test it, ship it, improve it.", "Automated tests, containers and real deployments are part of development, not an afterthought."],
];
