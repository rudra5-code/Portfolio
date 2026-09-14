import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">

        <a href="#top" className="nav__mark">
          <span className="nav__bracket">{'<'}</span>
          RC
          <span className="nav__bracket">{'/>'}</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary nav__cta">
          Let's talk
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

   <a

  href="https://wa.me/917861931804"

  className="btn btn-primary"

  target="_blank"

  rel="noopener noreferrer"

  onClick={() => setOpen(false)}

>

  Let's talk

</a>
        </div>
      )}
    </header>
  )
}