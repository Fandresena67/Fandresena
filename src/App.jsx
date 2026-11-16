import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Accueil from './Accueil.jsx'
import Projet from './Projet.jsx'
import Competence from './Competence.jsx'
import Experience from './Experience.jsx'
import Langage from './Langage.jsx'
import Contact from './Contact.jsx'
import { Analytics } from '@vercel/analytics/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/competence" element={<Competence />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/langage" element={<Langage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App