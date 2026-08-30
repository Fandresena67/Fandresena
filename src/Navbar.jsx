import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active' : ''}`

  const closeMenu = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const menu = document.getElementById('menu')
    if (menu && menu.classList.contains('show')) {
      const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(menu)
      bsCollapse.hide()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-italic" to="/" onClick={closeMenu}>
          <span className="text-danger fs-3">Fa</span>ndresena
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={linkClass} to="/" end onClick={closeMenu}>Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/competence" onClick={closeMenu}>Compétence</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/projet" onClick={closeMenu}>Projet</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/langage" onClick={closeMenu}>Langage</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/experience" onClick={closeMenu}>Expérience</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/contact" onClick={closeMenu}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar