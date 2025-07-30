import React from 'react'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="inner">
        <a href="#accueil" className="logo">
          <img src="/logo.jpg" alt="Babel Services Securite" />
          <span>Babel Services Securite</span>
        </a>
        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#apropos">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="btn-urg">Urgence 24/7</a>
      </div>
    </header>
  )
}