import React from 'react'

export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="overlay" />
      <div className="hero-content container">
        <h1>Babel Services Sécurité</h1>
        {/* { <span className="hero-subtitle">Sécurité</span> } */}
        <p className="hero-title">Votre sécurité, notre priorité absolue</p>
        <p className="hero-desc">
          Services de sécurité professionnels 24h/24, 7j/7. Protection des personnes et des biens
          avec une expertise reconnue depuis plus de 10 ans.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-services">Nos Services →</a>
          <a href="#contact" className="btn btn-urgence">Contact Urgence</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Service continu</span>
          </div>
          <div className="stat">
            <span className="stat-value">+ 10</span>
            <span className="stat-label">Années d'expérience</span>
          </div>
          <div className="stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">Satisfaction client</span>
          </div>
        </div>
        <div className="scroll-down">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-6-6m6 6l6-6" />
          </svg>
        </div>
      </div>
    </section>
  )
}