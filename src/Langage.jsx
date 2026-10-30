import Footer from './Footer.jsx'

function Langage() {
  const langages = [
    { nom: "JavaScript", niveau: "Avancé", desc: "React, Node.js, Express" },
    { nom: "TypeScript", niveau: "Avancé", desc: "Applications web typées avec React" },
    { nom: "Python", niveau: "Intermédiaire", desc: "FastAPI, Odoo et scripts" },
    { nom: "Dart", niveau: "Intermédiaire", desc: "Applications mobiles avec Flutter" },
    { nom: "Java", niveau: "Intermédiaire", desc: "Applications desktop avec Swing" },
    { nom: "PHP", niveau: "Intermédiaire", desc: "Développement web back-end" },
    { nom: "C#", niveau: "Notions", desc: "Applications desktop avec Avalonia UI" },
    { nom: "C", niveau: "Notions", desc: "Bases de la programmation système" },
  ]

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-1 mt-5">Langages</h1>
        <p className="text-muted mb-4">Les langages que j'utilise et que j'explore</p>

        <div className="row">
          {langages.map((lang) => (
            <div key={lang.nom} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body p-4">
                  <h5 className="card-title mb-1">{lang.nom}</h5>
                  <span
                    className="badge mb-3"
                    style={{ backgroundColor: "var(--accent-bg)", color: "var(--accent-dark)" }}
                  >
                    {lang.niveau}
                  </span>
                  <p className="card-text text-muted small mb-0">{lang.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Langage