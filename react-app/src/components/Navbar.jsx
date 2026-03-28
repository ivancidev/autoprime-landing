import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">Auto<span>Prime</span></a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#catalogo" onClick={closeMenu}>Catálogo</a></li>
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#testimonios" onClick={closeMenu}>Testimonios</a></li>
          <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        </ul>
        <a href="#contacto" className="btn btn-nav">Cotizar ahora</a>
        <button
          className="hamburger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
