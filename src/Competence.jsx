import Footer from './Footer.jsx'

function Competence() {
  const competencesTechniques = [
    { nom: "React", niveau: 20 },
    { nom: "JavaScript", niveau: 30 },
    { nom: "HTML / CSS", niveau: 90 },
    { nom: "Bootstrap", niveau: 30 },
    { nom: "Git / GitHub", niveau: 65 },
  ]

  const outils = [
    "VS Code",
    "Vite",
    "npm",
    "Figma",
    "Linux",
    "Firefox DevTools"
  ]

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-1 mt-5">Mes Compétences</h1>
        <p className="text-muted mb-4">Ce que je sais et ce sur quoi je progresse</p>

        <div className="row">

          <div className="col-md-7 mb-4">
            <div className="card h-100">
              <div className="card-body p-4">
                <h5 className="card-title mb-4">Compétences techniques</h5>
                {competencesTechniques.map((comp) => (
                  <div className="mb-3" key={comp.nom}>
                    <div className="d-flex justify-content-between mb-1">
                      <span className="fw-medium">{comp.nom}</span>
                      <span style={{ color: "var(--accent)" }} className="fw-semibold">{comp.niveau}%</span>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${comp.niveau}%` }}
                        aria-valuenow={comp.niveau}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-5 mb-4">
            <div className="card h-100">
              <div className="card-body p-4">
                <h5 className="card-title mb-4">Outils & Environnement</h5>
                <div className="d-flex flex-wrap gap-2">
                  {outils.map((outil) => (
                    <span className="badge bg-secondary fs-6" key={outil}>
                      {outil}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Competence