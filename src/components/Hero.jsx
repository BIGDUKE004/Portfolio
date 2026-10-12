import { EMAIL } from "../data.js";
import photo from "../assets/elijah-hero.webp";

const SNAPSHOT = [
  ["whoami", "software_engineer"],
  ["primary_stack", "Java · Spring Boot · Python · FastAPI · React"],
  ["focus", "APIs · authentication · data · product thinking"],
];

const move = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Line = ({ i, children }) => (
  <span className="ln"><span style={{ "--i": i }}>{children}</span></span>
);

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <p className="avail fx" style={{ "--d": "0s" }}><i />AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES</p>
          <h1>
            <Line i={0}>I build</Line>
            <Line i={1}><em>software</em> that</Line>
            <Line i={2}><em>works</em>.</Line>
          </h1>
          <p className="lead fx" style={{ "--d": ".75s" }}>
            I’m Elijah Miracle, a software engineer who builds applications across the frontend and backend, with experience in Java, Python and JavaScript. I’m also expanding into DevOps and database administration to better understand and work across the full software development lifecycle.
          </p>
          <div className="acts fx" style={{ "--d": ".95s" }}>
            <a className="btn p" href="#work">Explore My Work</a>
            <a className="btn" href={`mailto:${EMAIL}`}>Let’s Talk</a>
          </div>
        </div>
        <div className="hero-art">
        <figure className="photo">
          <img src={photo} width="840" height="1050" fetchpriority="high"
            alt="Studio portrait of Elijah Miracle in a navy waistcoat, white shirt and burgundy tie, wearing glasses and over-ear headphones" />
        </figure>
        <div className="snap" aria-label="Engineering profile snapshot" onPointerMove={move}>
          <div className="bar"><span>PROFILE.SNAPSHOT</span><span>2026</span></div>
          {SNAPSHOT.map(([k, v], i) => (
            <div className="row" key={k} style={{ "--i": i }}>
              <small>{k} →</small>
              <span className="v">{v}{i === SNAPSHOT.length - 1 && <span className="caret" aria-hidden="true" />}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
