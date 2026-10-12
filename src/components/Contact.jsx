import { EMAIL, GITHUB, LINKEDIN, EXT } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal>
          <p className="lab">HAVE A PROJECT?</p>
          <h2>Let’s build something <em>useful</em>.</h2>
          <p className="sub">If you’re hiring, building a team or have a project in mind, I’d like to hear about it. Send a message and I’ll get back to you.</p>
          <div className="acts">
            <a className="btn p" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a className="btn" href={LINKEDIN} {...EXT}>LinkedIn</a>
            <a className="btn" href={GITHUB} {...EXT}>GitHub</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
