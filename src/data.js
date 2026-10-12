export const EMAIL = "elijahmiracle2007@gmail.com";
export const GITHUB = "https://github.com/BIGDUKE004";
export const LINKEDIN = "https://www.linkedin.com/in/elijah-miracle-b716b5435/";
export const EXT = { target: "_blank", rel: "noopener noreferrer" };

export const PROJECTS = [
  {
    n: "01", cat: "Frontend", name: "Event Ticketing Web Client",
    status: "Built · development ongoing",
    desc: "The web client for the Event Ticketing System, built as a separate frontend project with HTML, CSS and JavaScript. It is still under development.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://eventpadi-steel.vercel.app",
    pts: ["The user-facing half of the event-ticketing product", "Built as its own project, separate from the backend API", "Still being developed and improved"],
  },
  {
    n: "02", cat: "Backend / API", name: "Event Ticketing System",
    status: "Built · case study",
    desc: "A REST API for event management and ticketing, built with FastAPI and SQLAlchemy. The backend is split into focused modules for authentication, events, bookings, payments, tickets and ticket types.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "JWT", "REST APIs"],
    live: null,
    pts: ["Authentication module issues and checks JWTs", "Events, ticket types and tickets are separate modules", "Bookings and payments connect users to the tickets they buy", "Serves as the backend for the separate web client"],
    note: "No public repository or live backend is listed for this project, so it is shown as a case study.",
  },
  {
    n: "03", cat: "Full-stack backend", name: "Chemist Management System",
    status: "Built",
    desc: "A pharmacy/chemist management application focused on authentication, inventory and drug sales. The backend uses Spring Boot, MongoDB and JWT, with Docker/Render deployment work.",
    tags: ["Java", "Spring Boot", "MongoDB", "JWT", "Docker"],
    live: "https://apothic-orpin.vercel.app",
    pts: ["Authentication for staff access", "Inventory management for drugs", "Drug sales handled in the same system", "Containerised with Docker and deployed on Render"],
  },
  {
    n: "04", cat: "Frontend", name: "Ecommerce Webstore",
    status: "Built",
    desc: "A responsive e-commerce frontend designed to provide a clean and intuitive shopping experience, with product browsing, product details, and a streamlined interface for discovering and managing products.",
    tags: ["React", "Redux", "DummyAPI"],
    live: "https://e-commerce-duke-ab30.vercel.app",
    pts: ["Product browsing and discovery", "Dedicated product detail views", "Responsive layout built around usability"],
  },
];

export const STACK = [
  ["Languages", ["Java", "Python", "JavaScript"]],
  ["Backend", ["Spring Boot", "FastAPI", "REST APIs", "JWT"]],
  ["Frontend", ["React", "HTML", "CSS", "JavaScript"]],
  ["Databases", ["MySQL", "MongoDB", "SQLAlchemy", "Spring Data"]],
  ["Tools", ["Git", "GitHub", "Docker", "Postman"]],
];

export const PRINCIPLES = [
  ["01", "Build solid foundations.", "Design clear APIs, authentication and data flow so the backend is reliable and easy to work with."],
  ["02", "Build interfaces people can use.", "Create clean, responsive and intuitive frontend experiences that make functionality simple to understand and use."],
  ["03", "Ship, then improve.", "Deployment, monitoring and real-world usage are part of development, not an afterthought."],
];
