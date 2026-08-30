import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <footer
      style={{ backgroundColor: 'var(--primary-dark)' }}
      className="text-white mt-5"
    >
      <div className="container py-5">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-md-4">
            <h4 className="fw-bold mb-2">
              <span style={{ color: 'var(--accent)' }}>Fa</span>ndresena
            </h4>

            <p
              className="text-white-50 mb-3"
              style={{ maxWidth: '280px' }}
            >
              Développeur web junior, basé à Madagascar.
              Je conçois des interfaces modernes et réactives.
            </p>

            <div className="d-flex gap-2">

              {/* Facebook */}
              <a
                href="https://facebook.com/heryaina.fandresena"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Fandresena67"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/261343603832"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div className="col-6 col-md-2">
            <h6
              className="text-uppercase fw-semibold mb-3 text-white"
              style={{
                fontSize: '0.8rem',
                letterSpacing: '1px'
              }}
            >
              Navigation
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link
                  to="/"
                  className="footer-link"
                  onClick={scrollTop}
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/competence"
                  className="footer-link"
                  onClick={scrollTop}
                >
                  Compétence
                </Link>
              </li>

              <li>
                <Link
                  to="/projet"
                  className="footer-link"
                  onClick={scrollTop}
                >
                  Projet
                </Link>
              </li>

              <li>
                <Link
                  to="/experience"
                  className="footer-link"
                  onClick={scrollTop}
                >
                  Expérience
                </Link>
              </li>
            </ul>
          </div>

          {/* Plus */}
          <div className="col-6 col-md-2">
            <h6
              className="text-uppercase fw-semibold mb-3 text-white"
              style={{
                fontSize: '0.8rem',
                letterSpacing: '1px'
              }}
            >
              Plus
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link
                  to="/langage"
                  className="footer-link"
                  onClick={scrollTop}
                >
                  Langage
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="footer-link"
                  onClick={scrollTop}
                >
                  Contact
                </Link>
              </li>

              <li>
                <a
                  href="/cv.pdf"
                  download="CV-Fandresena.pdf"
                  className="footer-link"
                >
                  Télécharger CV
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h6
              className="text-uppercase fw-semibold mb-3 text-white"
              style={{
                fontSize: '0.8rem',
                letterSpacing: '1px'
              }}
            >
              Contact
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-2">

              {/* Email */}
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-white"></i>

                <a
                  href="mailto:fandresenanatolo@gmail.com"
                  className="footer-link"
                >
                  fandresenanatolo@gmail.com
                </a>
              </li>

              {/* Téléphone */}
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-white"></i>

                <a
                  href="tel:+261343603832"
                  className="footer-link"
                >
                  +261 34 36 038 32
                </a>
              </li>

              {/* Localisation */}
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-white"></i>

                <span className="text-white-50">
                  Fianarantsoa, Madagascar
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

          <p className="text-white-50 small mb-0">
            © {year} Fandresena. Tous droits réservés.
          </p>

          <p className="text-white-50 small mb-0">
            Conçu et développé avec React & Bootstrap
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer