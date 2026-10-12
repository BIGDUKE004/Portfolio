import { useRef, useState } from "react";
import { PROJECTS, EXT } from "../data.js";
import Reveal from "./Reveal.jsx";
import ProjectViz from "./ProjectViz.jsx";
import eventpad from "../assets/shot-eventpad.webp";
import chemist from "../assets/shot-chemist.webp";
import ecommerce from "../assets/shot-ecommerce.webp";

// Real screenshots of the live apps, by project index (Project 02 is a backend, so it keeps an illustration)
const SHOTS = [
  { src: eventpad, alt: "EventPad home page: a dark interface with the headline 'Find the night. Keep the stub.', an event search bar and an 'Up next' ticket card for a Lagos jazz event" },
  null,
  { src: chemist, alt: "Chemist Management System sign-in page: headline 'Know what's on the shelf, before it's not', with Stock, Sales and Staff highlights and a registration form" },
  { src: ecommerce, alt: "SHOP.CO e-commerce home page with a navigation bar, product search and the headline 'Find clothes that match your style'" },
];

export default function Work() {
  const [i, setI] = useState(0);
  const tabs = useRef([]);
  const p = PROJECTS[i];
  const count = PROJECTS.length;

  const onKeyDown = (e) => {
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % count;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i + count - 1) % count;
    else return;
    e.preventDefault();
    setI(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="work">
      <div className="wrap">
        <Reveal>
          <p className="lab">SELECTED WORK</p>
          <h2>Projects built to <em>solve problems</em>.</h2>
          <p className="sub">I’d rather show working systems than fill a portfolio with tutorials.</p>
        </Reveal>

        <div className="work-grid">
          <div className="tabs" role="tablist" aria-label="Projects" aria-orientation="vertical" onKeyDown={onKeyDown}>
            {PROJECTS.map((q, k) => (
              <button
                key={q.n} ref={(el) => (tabs.current[k] = el)}
                role="tab" id={`tab${k}`} aria-selected={i === k} aria-controls="panel"
                tabIndex={i === k ? 0 : -1} className="tab" onClick={() => setI(k)}
              >
                <span className="n">{q.n}</span>
                <span className="t">{q.name}</span>
                <span className="c">{q.cat}</span>
              </button>
            ))}
          </div>

          <div key={i} className="panel" role="tabpanel" id="panel" aria-labelledby={`tab${i}`}>
            {SHOTS[i] ? (
              <figure className="viz shot" style={{ margin: 0 }}>
                <div className="shot-bar">{new URL(p.live).host}</div>
                <a href={p.live} {...EXT} aria-label={`Open ${p.name}`}>
                  <img src={SHOTS[i].src} width="1310" height="615" alt={SHOTS[i].alt} />
                </a>
                <figcaption>Screenshot of the live application</figcaption>
              </figure>
            ) : (
              <figure className="viz" style={{ margin: 0 }}>
                <ProjectViz index={i} />
                <figcaption>Illustrative composition, not a screenshot</figcaption>
              </figure>
            )}
            <div className="meta">
              <span>{p.n} / {p.cat.toUpperCase()}</span>
              <span className="st">{p.status}</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <ul className="pts">{p.pts.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            {p.live
              ? <a className="btn p" href={p.live} {...EXT}>View live project</a>
              : <p className="note">{p.note}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
