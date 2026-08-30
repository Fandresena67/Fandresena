import Footer from './Footer.jsx'

function Experience() {
  const experiences = [
    {
      poste: "Développeur web",
      entreprise: "Projet Personnel / Formation",
      periode: "2025",
      description: "Développement d'applications web avec React et Bootstrap. Création de ce portfolio, intégration d'API, gestion des routes avec React Router."
    },
    // {
    //   poste: "Étudiant en Développement Web",
    //   entreprise: "Autodidacte / Formations en ligne",
    //   periode: "2026",
    //   description: "Apprentissage HTML, CSS, JavaScript ES6+. Réalisation de projets pratiques : Todo List, Calculatrice, Clone de sites web."
    // }
  ]

  return (
    <>
      <div className="container mt-5">
        <h1 className="display-5 fw-bold text-center mb-1 mt-5">Mon Expérience</h1>
        <p className="text-center text-muted mb-5">Mon parcours jusqu'ici</p>

        <div className="row justify-content-center">
          <div className="col-md-9">
            {experiences.map((exp, index) => (
              <div key={index} className="card mb-4">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap gap-2">
                    <h4 style={{ color: "var(--primary)" }} className="mb-0">{exp.poste}</h4>
                    <span
                      className="badge"
                      style={{ backgroundColor: "var(--accent-bg)", color: "var(--accent-dark)" }}
                    >
                      {exp.periode}
                    </span>
                  </div>
                  <h6 className="card-subtitle mb-3 text-muted">{exp.entreprise}</h6>
                  <p className="card-text">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Experience