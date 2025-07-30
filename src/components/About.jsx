import React from 'react'

export default function About() {
  return (
    <section id="apropos" className="about-section">
      <div className="container">
        <h2>À propos</h2>
        <p className="lead">
          Leader dans le domaine de la sécurité privée, nous mettons notre expertise
          au service de votre tranquillité d’esprit.
        </p>

        <div className="about-grid">
          <div className="about-image">
            <img src="/about-image.jpg" alt="Innovation & Technologie" />
            <span className="image-caption">Innovation & Technologie</span>
          </div>
          <div className="about-content">
            <h3>Notre Mission</h3>
            <p>
              Depuis plus de 10 ans, Babel Services Sécurité s’engage à fournir des
              solutions de sécurité complètes et personnalisées. Notre équipe d’experts
              certifiés met son savoir-faire au service de la protection de vos biens et
              de votre personnel.
            </p>
            <ul className="features-list">
              <li>
                <strong>Fiabilité</strong>
                <span>Une expertise reconnue et une présence constante.</span>
              </li>
              <li>
                <strong>Professionnalisme</strong>
                <span>Des agents formés et certifiés selon les plus hauts standards.</span>
              </li>
              <li>
                <strong>Réactivité</strong>
                <span>Une réponse immédiate à vos besoins d’urgence.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-value">+ 10</span>
            <span className="stat-label">Années d’expérience</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">50+</span>
            <span className="stat-label">Agents qualifiés</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Service continu</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">100%</span>
            <span className="stat-label">Satisfaction client</span>
          </div>
        </div>
      </div>
    </section>
  )
}