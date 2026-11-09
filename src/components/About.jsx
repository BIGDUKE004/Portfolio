import Reveal from "./Reveal.jsx";
import photo from "../assets/elijah-about.webp";

export default function About() {
  return (
    <section id="about">
      <div className="wrap ab">
        <Reveal>
          <p className="lab">ABOUT ME</p>
          <h2>Still learning. Still <em>shipping</em>.</h2>
          <p style={{ marginTop: 28 }}>
            I’m a full-stack software engineer who builds secured REST APIs and React front ends, and tests and deploys them. My strongest project, Motora, is a car maintenance platform with 70+ endpoints, Paystack payments and 169 automated tests. I’m now expanding into DevOps and cloud engineering to work across the whole software lifecycle.
          </p>
          <p>My work spans FastAPI, Spring Boot and Express, PostgreSQL, MySQL and MongoDB, JWT authentication, React with TypeScript, Docker, and deployment on Render and Vercel. I speak English and Yoruba fluently.</p>
        </Reveal>
        <Reveal>
          <figure className="ab-photo">
            <img src={photo} width="400" height="400" loading="lazy" alt="Portrait of Elijah Miracle wearing glasses and headphones" />
          </figure>
          <ol className="tl">
            <li style={{ "--i": 0 }}><small>2026 — PRESENT</small><h3>Software Engineering</h3><span>Semicolon Africa · Full-stack bootcamp with techpreneurship modules taught by Lagos Business School.</span></li>
            <li style={{ "--i": 1 }}><small>NOW</small><h3>Independent Project Work</h3><span>Building and deploying full-stack applications; DevOps and database administration next.</span></li>
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
