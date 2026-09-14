import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="section-head">
          <span className="kicker">// about</span>
          <h2>Building the full stack, end to end</h2>
          <p>
            I focus on shipping complete features — a React interface backed
            by a well-structured Express API, a MongoDB schema that won't
            fall over, and the small details that make an app feel solid.
          </p>
        </div>

        <div className="about__details">
          <p className="about__bio">
            I'm a MERN stack developer with a Computer Engineering background
            from C K Pithawala College of Engineering &amp; Technology. I
            enjoy the whole path from a rough idea to a deployed product —
            planning the data model, building the API, and turning it into an
            interface that's genuinely pleasant to use. Replace this
            paragraph with a couple of sentences about your own journey,
            interests, and what you're looking for next.
          </p>

          <dl className="about__meta">
            <div>
              <dt>Education</dt>
              <dd>
                B.E., Computer Engineering — C K Pithawala College of
                Engineering &amp; Technology
              </dd>
            </div>

            <div>
              <dt>Focus</dt>
              <dd>
                Full-stack web applications, REST APIs, React interfaces
              </dd>
            </div>

            <div>
              <dt>Based in</dt>
              <dd>Surat, Gujarat, India</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}