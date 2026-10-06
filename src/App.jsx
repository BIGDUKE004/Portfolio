import { useEffect, useState } from 'react'

const github = 'https://github.com/BIGDUKE004'
const linkedin = 'https://www.linkedin.com/in/elijah-miracle-b716b5435/'
const email = 'mailto:elijahmiracle2007@gmail.com'

const projects = [
  {
    number: '01',
    title: 'Event Ticketing System',
    type: 'Backend / API',
    description:
      'A REST API for event management and ticketing, built with FastAPI and SQLAlchemy. The backend is split into focused modules for authentication, events, bookings, payments, tickets and ticket types.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'JWT', 'REST'],
    repo: null,
    live: null,
    status: 'Built',
  },
  {
    number: '02',
    title: 'Event Ticketing Web Client',
    type: 'Frontend',
    description:
      'The web client for the Event Ticketing System, built as a separate frontend project with HTML, CSS and JavaScript. It is still under development.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repo: null,
    live: 'https://eventpadi-steel.vercel.app',
    status: 'Built',
  },
  {
    number: '03',
    title: 'Chemist Management System',
    type: 'Full-stack backend project',
    description:
      'A pharmacy/chemist management application focused on authentication, inventory and drug sales. The backend uses Spring Boot, MongoDB and JWT, with Docker/Render deployment work.',
    stack: ['Java', 'Spring Boot', 'MongoDB', 'JWT', 'Docker'],
    repo: null,
    live: 'https://apothic-orpin.vercel.app',
    status: 'Built',
  },
{
    number: '04',
    title: 'Ecommerce Webstore',
    type: 'Frontend',
    description:
      'A responsive e-commerce frontend designed to provide a clean and intuitive shopping experience, with product browsing, product details, and a streamlined interface for discovering and managing products.',
    stack: ['react-redux', 'dummyApi' ],
    repo: null,
    live: 'https://e-commerce-duke-ab30.vercel.app',
    status: 'Built',
}
]

const skillGroups = [
  ['Languages', 'Java', 'Python', 'JavaScript'],
  ['Backend', 'Spring Boot', 'FastAPI', 'REST APIs', 'JWT'],
  ['Frontend', 'React', 'HTML', 'CSS', 'JavaScript'],
  ['Databases', 'MySQL', 'MongoDB', 'SQLAlchemy', 'Spring Data'],
  ['Tools', 'Git', 'GitHub', 'Docker', 'Postman'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const reveal = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )

    reveal.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const go = id => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="nav">
        <button className="brand" onClick={() => go('home')} aria-label="Go home">
          <span className="brand-mark">EM</span>
          <span>ELIJAH MIRACLE</span>
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => go('work')}>Work</button>
          <button onClick={() => go('stack')}>Stack</button>
          <button onClick={() => go('about')}>About</button>
          <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(value => !value)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="hero-person">
              <img src="/profile.jpg" alt="Elijah Miracle" className="profile-photo" />
              <p className="eyebrow"><span className="pulse" /> AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES</p>
            </div>
            <h1>
              I build software
              <em> that works.</em>
            </h1>
            <p className="hero-text">
I’m Elijah Miracle, a software engineer who builds applications across the frontend and backend, with experience in Java, Python and JavaScript. I’m also expanding into DevOps and database administration to better understand and work across the full software development lifecycle.

            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => go('work')}>View my work <span>↓</span></button>
              <a className="button ghost" href={email}>Let's talk <span>↗</span></a>
            </div>
          </div>

          <div className="terminal reveal">
            <div className="terminal-top">
              <div className="dots"><i /><i /><i /></div>
              <span>elijah@dev:~</span>
              <span className="terminal-status">● online</span>
            </div>
            <div className="terminal-body">
              <p><b>$</b> whoami</p>
              <h2>software_engineer</h2>
              <p><b>$</b> primary_stack</p>
              <div className="terminal-grid">
                <span>java</span><span>spring_boot</span>
                <span>python</span><span>fastapi</span>
                <span>javascript</span><span>react</span>
                <span>mysql</span><span>mongodb</span>
              </div>
              <p><b>$</b> focus</p>
              <p className="muted">APIs · authentication · data · product thinking</p>
              <p className="cursor-line"><b>$</b> <span className="cursor" /></p>
            </div>
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Projects built<br /><em>to solve problems.</em></h2>
            </div>
            <p className="section-note">I’d rather show working systems than fill a portfolio with tutorials.</p>
          </div>

          <div className="project-layout reveal">
            <div className="project-list">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  className={activeProject === index ? 'project-tab active' : 'project-tab'}
                  onClick={() => setActiveProject(index)}
                >
                  <span>{project.number}</span>
                  <strong>{project.title}</strong>
                  <small>{project.type}</small>
                  <b>↗</b>
                </button>
              ))}
            </div>

            <article className="project-detail">
              <div className="project-meta">
                <span>{projects[activeProject].status}</span>
                <span>{projects[activeProject].number}</span>
              </div>
              <h3>{projects[activeProject].title}</h3>
              <p>{projects[activeProject].description}</p>

              <div className="stack-tags">
                {projects[activeProject].stack.map(item => <span key={item}>{item}</span>)}
              </div>

              <div className="project-actions">
                {projects[activeProject].live && (
                  <a href={projects[activeProject].live} target="_blank" rel="noreferrer" className="button primary">
                    Live project ↗
                  </a>
                )}
                {!projects[activeProject].live && (
                  <span className="not-public">Live link not publicly verified yet</span>
                )}
              </div>
            </article>
          </div>

        </section>

        <section id="stack" className="section stack-section">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">TECHNICAL STACK</p>
              <h2>Tools I use to<br /><em>build the thing.</em></h2>
            </div>
          </div>

          <div className="skills-grid reveal">
            {skillGroups.map(group => (
              <div className="skill-card" key={group[0]}>
                <span className="skill-index">{group[0]}</span>
                <div>
                  {group.slice(1).map(skill => <strong key={skill}>{skill}</strong>)}
                </div>
              </div>
            ))}
          </div>

          <div className="principles reveal">
           <div><span>01</span><strong>Build solid foundations.</strong><p>Design clear APIs, authentication and data flow so the backend is reliable and easy to work with.</p></div>
            <div><span>02</span><strong>Build interfaces people can use.</strong><p>Create clean, responsive and intuitive frontend experiences that make functionality simple to understand and use.</p></div>
            <div><span>03</span><strong>Ship, then improve.</strong><p>Deployment, monitoring and real-world usage are part of development, not an afterthought.</p></div>

          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-copy reveal">
            <p className="eyebrow">ABOUT ME</p>
            <h2>Still learning.<br /><em>Still shipping.</em></h2>
            <p>
I’m a software engineer with experience building both frontend and backend applications, with a growing focus on understanding the full software development lifecycle. I’m currently expanding into DevOps and database administration, exploring how applications are built, deployed, managed, and maintained across different layers of technology.

            </p>
            <p>
              My current work spans FastAPI, RESTAPI and Spring Boot, SQL, MongoDB and Postgres, JWT
              authentication, REST APIs, React and deployment workflows.
            </p>
          </div>

          <div className="timeline reveal">
            <div className="timeline-item">
              <span>2026 — PRESENT</span>
              <div><h3>Software Engineering</h3><p>Semicolon Africa · Engineering & techpreneurship training</p></div>
            </div>
            <div className="timeline-item">
              <span>NOW</span>
              <div><h3>Independent Project Work</h3><p>Building backend and full-stack applications</p></div>
            </div>
          </div>
        </section>

        <section className="contact section reveal">
          <p className="eyebrow">HAVE A PROJECT?</p>
          <h2>Let’s build something<br /><em>useful.</em></h2>
          <div className="contact-actions">
            <a className="button primary large" href={email}>elijahmiracle2007@gmail.com ↗</a>
            <a className="button ghost large" href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Elijah Miracle</span>
        <span>Built with React · No </span>
        <a href={github} target="_blank" rel="noreferrer">BIGDUKE004 ↗</a>
      </footer>
    </div>
  )
}

export default App
