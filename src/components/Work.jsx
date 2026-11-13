import { useRef, useState } from "react";
import { PROJECTS, EXT } from "../data.js";
import Reveal from "./Reveal.jsx";
import ProjectViz from "./ProjectViz.jsx";
import motora from "../assets/shot-motora.webp";
import eventpad from "../assets/shot-eventpad.webp";
import chemist from "../assets/shot-chemist.webp";
import ecommerce from "../assets/shot-ecommerce.webp";

// Real screenshots of the live apps, keyed by project `shot`; projects without one keep an illustration
const SHOTS = {
  motora: { src: motora, w: 1314, h: 621, alt: "Motora home page: a dark car-care site with the headline 'The art of automotive care.', a Book Service button and a grey sports car behind the text" },
  eventpad: { src: eventpad, w: 1314, h: 626, alt: "EventPad home page: a dark interface with the headline 'Tickets to the good stuff.', a short line about finding events and hosting with ticket tiers, and a Log in button" },
  chemist: { src: chemist, alt: "Chemist Management System sign-in page: headline 'Know what's on the shelf, before it's not', with Stock, Sales and Staff highlights and a registration form" },
  ecommerce: { src: ecommerce, alt: "SHOP.CO e-commerce home page with a navigation bar, product search and the headline 'Find clothes that match your style'" },
};

export default function Work() {
  const [i, setI] = useState(0);
  const tabs = useRef([]);
  const p = PROJECTS[i];
  const shot = p.shot ? SHOTS[p.shot] : null;
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
          <p className="sub">Full-stack systems with authentication, payments, tests and real deployments, not tutorial clones.</p>
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
            {shot && p.live ? (
              <figure className="viz shot" style={{ margin: 0 }}>
                <div className="shot-bar">{new URL(p.live).host}</div>
                <a href={p.live} {...EXT} aria-label={`Open ${p.name}`}>
                  <img src={shot.src} width={shot.w || 1310} height={shot.h || 615} alt={shot.alt} />
                </a>
                <figcaption>Screenshot of the live application</figcaption>
              </figure>
            ) : (
              <figure className="viz" style={{ margin: 0 }}>
                <ProjectViz kind={p.viz} />
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
            {!p.live && p.note && <p className="note">{p.note}</p>}
            {(p.live || p.repo) && (
              <div className="acts">
                {p.live && <a className="btn p" href={p.live} {...EXT}>View live project</a>}
                {p.repo && <a className={p.live ? "btn" : "btn p"} href={p.repo} {...EXT}>View code</a>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
