import { GITHUB, EXT } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© 2026 Elijah Miracle</span>
        <span><a href={GITHUB} {...EXT}>GitHub</a> · Built with React</span>
      </div>
    </footer>
  );
}
