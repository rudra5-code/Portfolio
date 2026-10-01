import './Projects.css'

const PROJECTS = [
  {
    name: 'Urjayte Diet Clinic',
    description:
      'Developed a responsive React.js website for Urjayte – Diet & Weight Loss Clinic, featuring a modern healthcare-focused UI with reusable components and smooth navigation. The website includes Home, About, Services, Testimonials, Gallery, FAQ and Contact sections. Implemented responsive layouts, React Router navigation, dark/light theme functionality and interactive testimonial sections.',
    tags: ['React.js', 'JavaScript', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React Router'],
    live: '#',
    code: '#',
  },

  {
    name: 'Estore',
    description:
      'Built a responsive React.js e-commerce application with reusable product components, product filtering, search, cart functionality and a modern responsive user interface.',
    tags: ['React.js', 'JavaScript', 'CSS', 'Responsive Design'],
    live: '#',
    code: '#',
  },

  {
    name: 'Nestora Real Estate',
    description:
      'Developed a responsive real-estate website featuring property listings, detailed property information, modern UI and mobile-friendly layouts.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    live: '#',
    code: '#',
  },

  {
    name: 'HARIOM EV GARAGE',
    description:
      'Developed a responsive React.js website for a two-wheeler EV garage featuring services, customer reviews, FAQs, benefits and direct contact/WhatsApp integration.',
    tags: ['React.js', 'JavaScript', 'CSS', 'Responsive Design', 'Vercel'],
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
            A collection of projects built while developing my frontend and
            React.js skills.
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

                <a
                  href={p.live}
                  className="project__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live <ArrowIcon />
                </a>

                <a
                  href={p.code}
                  className="project__link"
                  target="_blank"
                  rel="noreferrer"
                >
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