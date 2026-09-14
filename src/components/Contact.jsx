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
          <a href="mailto:rudrachavda266@gmail.com">
  rudrachavda266@gmail.com
</a>

          <a
            href="https://github.com/rudra5-code#"
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
          <a

            href="https://wa.me/917861931804?text=Hello%20Rudra%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."

            target="_blank"

            rel="noreferrer"

          >

            WhatsApp ↗

          </a>
        </div>
      </div>
    </section>
  )
}