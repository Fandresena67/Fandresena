import Footer from './Footer.jsx'

function Langage() {
  const langages = [
    { nom: "JavaScript", niveau: "En apprentissage", desc: "" },
    { nom: "HTML5", niveau: "En apprentissage", desc: "" },
    { nom: "CSS3", niveau: "En apprentissage", desc: "" },
    { nom: "Python", niveau: "En apprentissage", desc: "" },
    { nom: "Java", niveau: "En apprentissage", desc: "" },
    { nom: "C#", niveau: "En apprentissage", desc: "" },
    { nom: "PHP", niveau: "En apprentissage", desc: "" },
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