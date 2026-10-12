import { PRINCIPLES } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Principles() {
  return (
    <section className="pr">
      <div className="wrap">
        <Reveal className="prl">
          {PRINCIPLES.map(([n, title, body], i) => (
            <div className="pb" key={n} style={{ "--i": i }}>
              <span className="big" aria-hidden="true">{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
