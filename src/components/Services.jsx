import React from 'react'
import { Link } from 'react-router-dom'
import services from '../servicesData'

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Nos Services de Sécurité</h2>
        <p className="lead">
          Une gamme complète de services de sécurité adaptée à vos besoins spécifiques,
          avec une expertise reconnue et une disponibilité permanente.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l7 4v6a8 8 0 11-14 0V6l7-4z" />
                </svg>
              </div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-brief">{s.brief}</p>
              <ul className="card-list">
                {s.characteristics.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <Link to={`/service/${s.slug}`} className="card-btn">
                En savoir plus
              </Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h4>Besoin d’une solution sur mesure ?</h4>
          <p>Contactez-nous pour une étude personnalisée de vos besoins en sécurité.</p>
          <div className="cta-buttons">
            <button  href="#contact"className="btn btn-outline">Demander un devis</button>
            <button  className="btn btn-secondary">Urgence 24/7</button>
          </div>
        </div>
      </div>
    </section>
  )
}