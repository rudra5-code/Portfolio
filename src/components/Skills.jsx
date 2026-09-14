import './Skills.css'

const GROUPS = [
  {
    title: 'Frontend',
    items: ['React', 'Redux Toolkit', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API design', 'JWT Authentication', 'Socket.io'],
  },
  {
    title: 'Database & Tools',
    items: ['MongoDB', 'Mongoose', 'Git & GitHub', 'Postman', 'Vercel / Render'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <span className="kicker">// skills</span>
          <h2>What I work with</h2>
          <p>The core of the MERN stack, plus the tools that go with it day to day.</p>
        </div>

        <div className="skills__grid">
          {GROUPS.map((group) => (
            <div className="skills__group" key={group.title}>
              <h3>{group.title}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}