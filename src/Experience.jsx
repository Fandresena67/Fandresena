import Footer from './Footer.jsx'

function Experience() {
  const experiences = [
    {
      poste: "Stagiaire Développeur Mobile & Intégration ERP",
      entreprise: "Commune Urbaine de Fianarantsoa — Service de l'Innovation Technologique",
      periode: "Août - Octobre 2026",
      description: "Développement d'une application mobile (Flutter, Dart) de vérification des paiements de taxes communales, intégrée à Odoo 17 via XML-RPC. Développement d'un module Odoo 17 en Python (cash points, paiements, statuts, références de quittance automatiques et rapports PDF), journal de consultation et tableau de bord statistique. PostgreSQL, Docker et Git. Stage validé avec attestation délivrée le 9 octobre 2026."
    },
    {
      poste: "Développeur Web Full Stack",
      entreprise: "Projets personnels",
      periode: "2025 - Aujourd'hui",
      description: "Conception et développement d'applications web et desktop : MADA STOCK (SaaS de gestion de stock multi-entreprises), MADA DIGITAL AGENCY, Tourisme Voyage Madagascar, système de réservation en microservices, Fandresena Hotel, HotelManager, Yummy Restaurant et MADA-COMMUNE (Odoo 19). React, Node.js, Python, PostgreSQL, Tailwind CSS, Docker et Git."
    }
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