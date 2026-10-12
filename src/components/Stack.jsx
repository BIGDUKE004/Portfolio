import { STACK } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <Reveal>
          <p className="lab">TECHNICAL STACK</p>
          <h2>Tools I use to build the thing.</h2>
        </Reveal>
        <Reveal className="stack">
          {STACK.map(([group, items]) => (
            <div className="grp" key={group}>
              <h3>{group.toUpperCase()}</h3>
              <ul>{items.map((t, k) => <li key={t} style={{ "--i": k }}>{t}</li>)}</ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
