import { useEffect, useState } from "react";
import { EMAIL, GITHUB, EXT } from "../data.js";

const IDS = ["work", "stack", "about"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [prog, setProg] = useState(0);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProg(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      let cur = "";
      IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (id, label) => (
    <li><a href={`#${id}`} onClick={close} className={active === id ? "act" : ""} aria-current={active === id ? "true" : undefined}>{label}</a></li>
  );

  return (
    <header>
      <div className="wrap nav">
        <a className="mono-logo" href="#top" aria-label="Elijah Miracle, home">EM</a>
        <nav aria-label="Main">
          <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
          <ul id="menu" className={open ? "open" : ""}>
            {link("work", "Work")}
            {link("stack", "Stack")}
            {link("about", "About")}
            <li><a href={GITHUB} {...EXT}>GitHub</a></li>
            <li><a className="btn" href={`mailto:${EMAIL}`}>Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="prog" style={{ transform: `scaleX(${prog})` }} aria-hidden="true" />
    </header>
  );
}
