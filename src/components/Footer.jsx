import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} Rudrapratapsinh Chavda
        </p>

        <p>
          Built with React · MERN
        </p>
      </div>
    </footer>
  )
}