import Footer from './Footer.jsx'

function Projet() {
  const projets = [
    {

  id: 5,

  titre: "Système de réservation de voyage",

  description: "Architecture microservices complète : 6 services indépendants communiquant en REST et en événements asynchrones (RabbitMQ), avec API Gateway, authentification JWT et espace administrateur. Déployé en production (Render, Vercel, TiDB Cloud).",

  image: "/reservation-voyage.png",

  tech: ["React", "Node.js", "Express", "MySQL", "RabbitMQ", "Docker"],
 
  // https://github.com/Fandresena67/reservation-voyage

  // lienGithub: "https://github.com/Fandresena67/reservation-voyage",

  lienDemo: "https://reservation-voyage-two.vercel.app/",

},

{
  id: 6,
  titre: "Fandresena Hotel",
  description: "Application de gestion et réservation hôtelière full stack : frontend React/Vite avec Tailwind CSS, backend Node.js/Express, notifications par email via Resend. Déployé en production (Vercel pour le frontend, Railway pour le backend).",
  image: "/hotel-app.png",
  tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Resend"],
  lienDemo: "https://hotel-frotend.vercel.app/",
},


{
  id: 7,
  titre: "HotelManager",
  description: "Application desktop full Java de gestion hôtelière : authentification sécurisée (BCrypt), gestion des clients/chambres/réservations avec anti-double-réservation, check-in/check-out automatisé, suivi des paiements, facturation imprimable, rôles utilisateurs différenciés (Admin/Réceptionniste/Gestionnaire), et interface Swing avec base de données MySQL.",
  image: "/hotelmanager-app.png",
  tech: ["Java", "Swing", "MySQL", "JDBC", "BCrypt"],
  lienDemo: "https://github.com/Fandresena67/HotelManager",
},

//     {

//   id: 5,

//   titre: "Système de réservation de voyage",

//   description: "Application de réservation de vols en architecture microservices : inscription, recherche de vols, réservation, paiement et notifications en temps réel. Backend Node.js/Express (6 services + API Gateway), communication asynchrone via RabbitMQ, base de données MySQL, frontend React avec espace administrateur.",

//   image: "/reservation-voyage.png",

//   tech: ["React", "Node.js", "Express", "MySQL", "RabbitMQ", "Docker"],

//   // https://github.com/Fandresena67/reservation-voyage

//   lienGithub: "https://github.com/Fandresena67/reservation-voyage",

//   lienDemo: "https://reservation-voyage-two.vercel.app/",

// },


    {
      id: 1,
      titre: "Page CV en ligne",
      description: "CV interactif développé en HTML, CSS et JavaScript. Version web responsive hébergée sur GitHub Pages.",
      image: "/fa.png",
      tech: ["HTML5", "JavaScript", "Tailwind CSS", "React"],
      // https://fandresena67.github.io/PageCV
      lienDemo: "https://perso-web-react.vercel.app/",
    },
    {
      id: 2,
      titre: "App Météo",
      description: "Application météo qui utilise une API pour afficher la température d'une ville en temps réel.",
      image: "/meteo.png",
      tech: ["React", "API", "Bootstrap"],
      lienDemo: "https://app-meteo-f7.vercel.app",
    },
    {
      id: 3,
      titre: "Todo List",
      description: "Liste de tâches avec ajout, suppression et stockage local.",
      image: "/todo.png",
      tech: ["html", "LocalStorage", "Javacript", "CSS3"],
      lienDemo: "https://fandy7-todo-liste.vercel.app/",
    },

    {
  id: 4,
  titre: "STOCKPRO",
  description: "Application de gestion de stock pour boutique informatique avec suivi des mouvements, alertes de seuil critique et persistance des données via le LocalStorage.",
  image: "/stock.png",
  tech: [ "LocalStorage", "JavaScript", "CSS3", "HTML5"],
  lienDemo: "https://stock-app-two-beta.vercel.app/",
},


      

  ]

  return (
    <>
      
      <div className="container mt-5">
        <h1 className="display-5 fw-bold text-center mb-2 mt-5">Mes Projets</h1>
        <p className="text-center text-muted mb-5">
          Découvrez mes réalisations récentes
        </p>

        <div className="row">
          {projets.map((projet) => (
            <div key={projet.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 overflow-hidden">
                <img
                  src={projet.image}
                  className="card-img-top"
                  alt={projet.titre}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold">{projet.titre}</h5>
                  <p className="card-text text-muted flex-grow-1">{projet.description}</p>

                  <div className="mb-3">
                    {projet.tech.map((tech, i) => (
                      <span key={i} className="badge bg-primary me-1 mb-1">{tech}</span>
                    ))}
                  </div>

                  <a href={projet.lienDemo} className="btn btn-accent btn-sm" target="_blank" rel="noreferrer">
                    Voir le site →
                  </a>
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

export default Projet