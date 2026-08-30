import { Link } from 'react-router-dom'
import Footer from './Footer.jsx'

function Accueil() {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center mb-5" style={{ minHeight: "70vh" }}>

          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img
              src="/img.png"
              className="hero-photo rounded-circle border border-3 border-white"
              width="220"
              height="220"
              style={{ objectFit: "cover" }}
              alt="Photo de profil de Fandresena"
            />
          </div>

          <div className="col-md-7 mt-5">
            <div className="hero-card rounded-4 p-5">
              <p className="text-uppercase fw-semibold mb-2" style={{ color: "var(--accent)", letterSpacing: "1.5px", fontSize: "0.85rem" }}>
                Disponible pour un stage
              </p>
              <h1 className="display-4 fw-bold mb-3">
                Salut, moi c'est <span style={{ color: "var(--primary)" }}>Fandresena</span>
              </h1>
              <h2 className="fs-4 text-muted mb-4" style={{ fontWeight: 400 }}>
                Développeur web/Mobile junior, 
              </h2>
              <p className="lead mb-4">

                  Étudiant en informatique, 
                  je développe des applications web modernes et des solutions métier. 
                  Curieux et polyvalent, je m’adapte rapidement à de nouvelles technologies, 
                  environnements et problématiques de développement.
              </p>
              <div className="d-flex gap-3 flex-wrap position-relative" style={{ zIndex: 1 }}>
                <Link to="/projet" className="btn btn-accent btn-lg px-4">
                  Voir mes projets
                </Link>
                <a href="/cv.pdf" download="CV-Fandresena.pdf" className="btn btn-outline-primary btn-lg px-4">
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Accueil