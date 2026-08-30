import { useState, useEffect } from 'react'

// Domaines d'emails temporaires/jetables les plus utilisés
const DISPOSABLE_DOMAINS = [
  'mailinator.com', 'tempmail.com', 'temp-mail.org', 'guerrillamail.com',
  'guerrillamail.info', '10minutemail.com', 'yopmail.com', 'throwawaymail.com',
  'trashmail.com', 'fakeinbox.com', 'getnada.com', 'maildrop.cc',
  'mintemail.com', 'sharklasers.com', 'dispostable.com', 'mailnesia.com',
  'tempinbox.com', 'moakt.com', 'emailondeck.com', 'burnermail.io'
]

// Regex plus stricte que type="email" (exige un vrai TLD, pas d'espaces, etc.)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function isValidEmail(email) {
  const trimmed = email.trim().toLowerCase()

  if (!EMAIL_REGEX.test(trimmed)) {
    return { valid: false, reason: "Format d'email invalide." }
  }

  const domain = trimmed.split('@')[1]
  if (DISPOSABLE_DOMAINS.includes(domain)) {
    return { valid: false, reason: "Les emails temporaires ne sont pas acceptés." }
  }

  // Bloque les cas évidents genre "test@test.com", "aaa@aaa.com"
  const localPart = trimmed.split('@')[0]
  if (/^(test|aaa+|xxx+|abc|fake|none)$/i.test(localPart)) {
    return { valid: false, reason: "Merci d'entrer ton vrai email." }
  }

  return { valid: true, reason: "" }
}

function EmailGate() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visitorEmailGiven')
    if (!hasVisited) {
      setVisible(true)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const check = isValidEmail(email)
    if (!check.valid) {
      setError(check.reason)
      return
    }

    setStatus("loading")

    try {
      await fetch("https://formspree.io/f/xlgaedkz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message: "Nouveau visiteur sur le portfolio"
        })
      })
    } catch (err) {
      // même en cas d'erreur réseau, on laisse entrer le visiteur
    }

    sessionStorage.setItem('visitorEmailGiven', 'true')
    setStatus("success")
    setTimeout(() => setVisible(false), 400)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(26, 31, 46, 0.92)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div
        className="card"
        style={{ maxWidth: '420px', width: '100%' }}
      >
        <div className="card-body p-4 text-center">
          <h4 className="mb-2" style={{ color: "var(--primary)" }}>
            Bienvenue 👋
          </h4>
          <p className="text-muted mb-4">
            Entre ton email pour accéder à mon portfolio.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="ton.email@exemple.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
              }}
              required
            />
            {error && (
              <p className="text-danger small mb-2 text-start">{error}</p>
            )}
            <button
              type="submit"
              className="btn btn-accent w-100 mt-2"
              disabled={status === "loading"}
            >
              {status === "loading" ? "..." : "Accéder au site"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmailGate