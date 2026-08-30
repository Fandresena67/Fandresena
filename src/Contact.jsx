import { useState } from "react"
import Footer from './Footer.jsx'

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://formspree.io/f/xlgaedkz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ nom: "", prenom: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h1 className="mb-1 mt-5">Me Contacter</h1>
          <p className="text-muted">Une question, une opportunité ? Écris-moi.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7 mb-4">
            <div className="card">
              <div className="card-body p-4">
                <h5 className="card-title mb-3 text-center">Envoie-moi un message</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-accent" disabled={status === "loading"}>
                      {status === "loading" ? "Envoi..." : "Envoyer"}
                    </button>
                  </div>
                  {status === "success" && <div className="alert alert-success mt-3">Message envoyé à Fandresena !</div>}
                  {status === "error" && <div className="alert alert-danger mt-3">Erreur. Réessaie.</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact