import './Projects.css'

const PROJECTS = [
  {
    name: 'Urjayate Diet Clinic',
    description:
      'Developed a responsive React.js website for Urjayte – Diet & Weight Loss Clinic, featuring a modern healthcare-focused UI with reusable components and smooth navigation. The website includes sections for Home, About, Services, Testimonials, Gallery, FAQ and Contact. Implemented responsive layouts for mobile and desktop, React Router navigation, dark/light theme functionality, interactive testimonial sections and a structured user-friendly interface. Used React.js, JavaScript, CSS, Bootstrap/Tailwind CSS and React Router DOM to create a professional and responsive web experience.',
    
    live: '#',
    code: '#',
  },
  {
    name: 'Estore',
    description:
      'E-Store – React E-Commerce Website: Built a responsive React.js e-commerce application with reusable product components, product filtering, search, cart functionality and modern responsive UI.',

    live: '#',
    code: '#',
  },
  {
    name: 'Real-Estate-Wbesite',
    description:
      'Nestora – Real Estate Website: Developed a responsive real-estate website featuring property listings, detailed property information, modern UI and mobile-friendly layouts.',

    live: '#',
    code: '#',
  },
  {
    name: 'HARIOM-EV-GARAGE',
    description:
      'HARIOM EV GARAGE – EV Service Website: Developed a responsive React.js website for a two-wheeler EV garage featuring services, customer reviews, FAQs, benefits and direct contact/WhatsApp integration.',
    
    live: '#',
    code: '#',
  }
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