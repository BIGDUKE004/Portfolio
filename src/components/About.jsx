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
            I’m a software engineer with experience building both frontend and backend applications, with a growing focus on understanding the full software development lifecycle. I’m currently expanding into DevOps and database administration, exploring how applications are built, deployed, managed, and maintained across different layers of technology.
          </p>
          <p>My current work spans FastAPI, REST APIs and Spring Boot, SQL, MongoDB and Postgres, JWT authentication, React and deployment workflows.</p>
        </Reveal>
        <Reveal>
          <figure className="ab-photo">
            <img src={photo} width="400" height="400" loading="lazy" alt="Portrait of Elijah Miracle wearing glasses and headphones" />
          </figure>
          <ol className="tl">
            <li style={{ "--i": 0 }}><small>2026 — PRESENT</small><h3>Software Engineering</h3><span>Semicolon Africa · Engineering and techpreneurship training.</span></li>
            <li style={{ "--i": 1 }}><small>NOW</small><h3>Independent Project Work</h3><span>Building backend and full-stack applications.</span></li>
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
