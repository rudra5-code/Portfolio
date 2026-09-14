import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="section-head">
          <span className="kicker">// contact</span>

          <h2>Let's build something useful.</h2>

          <p>
            Have a project in mind or looking for a MERN developer?
            I'm always open to a good conversation.
          </p>
        </div>

        <div className="contact__details">
          <a href="mailto:rudrapratapsinh@example.com">
            rudrapratapsinh@example.com
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}