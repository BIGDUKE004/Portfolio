const WORDS = ["Python", "Java", "TypeScript", "JavaScript", "FastAPI", "Spring Boot", "React", "REST APIs", "JWT", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git"];

export default function Marquee() {
  const row = WORDS.map((w) => <span key={w}>{w}<i>·</i></span>);
  return (
    <div className="mq" aria-hidden="true">
      <div className="mq-track">
        <div className="mq-row">{row}</div>
        <div className="mq-row">{row}</div>
      </div>
    </div>
  );
}
