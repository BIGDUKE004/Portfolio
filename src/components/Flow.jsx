import Reveal from "./Reveal.jsx";

const NODES = [
  ["Client", "Request"],
  ["API", "Route + validate"],
  ["Auth", "Verify JWT"],
  ["Database", "Query + persist"],
  ["Response", "JSON to client"],
];

export default function Flow() {
  return (
    <section className="flowsec">
      <div className="wrap">
        <Reveal>
          <p className="lab">HOW A REQUEST MOVES</p>
          <h2>From click to database, and back.</h2>
          <p className="sub">A simplified view of the path I design in backend work. Illustrative, not a diagram of one specific project.</p>
        </Reveal>
        <ol className="flow-row" aria-label="Request flow: client, API, auth, database, response">
          {NODES.map(([name, what], i) => (
            <li className="fn" key={name} style={{ "--i": i }}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              <b>{name}</b>
              <span>{what}</span>
              {i < NODES.length - 1 && <span className="cn" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
