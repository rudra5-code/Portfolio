import './Projects.css'

const PROJECTS = [
  {
    name: 'ShopKart — E-commerce Platform',
    description:
      'A full-featured storefront with product search, cart, Stripe checkout, and an admin dashboard for managing inventory and orders.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    live: '#',
    code: '#',
  },
  {
    name: 'TaskFlow — Team Task Manager',
    description:
      'Kanban-style task boards with drag-and-drop, real-time updates via Socket.io, and role-based access for teams.',
    tags: ['React', 'Redux', 'Express', 'MongoDB', 'Socket.io'],
    live: '#',
    code: '#',
  },
  {
    name: 'ChatSphere — Real-time Chat App',
    description:
      'One-to-one and group messaging with JWT authentication, typing indicators, and message history stored in MongoDB.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: '#',
    code: '#',
  },
]

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11L11 3M11 3H4.5M11 3V9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="kicker">// projects</span>

          <h2>Selected work</h2>

          <p>
            Placeholder projects — swap these for your own repositories, live
            links, and screenshots.
          </p>
        </div>

        <div className="projects__list">
          {PROJECTS.map((p) => (
            <article className="project" key={p.name}>
              <div className="project__main">
                <h3>{p.name}</h3>

                <p>{p.description}</p>

                <ul className="project__tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className="project__links">
                <a href={p.live} className="project__link">
                  Live <ArrowIcon />
                </a>

                <a href={p.code} className="project__link">
                  Code <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}