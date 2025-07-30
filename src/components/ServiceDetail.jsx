import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import services from '../servicesData'

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="container" style={{ padding: '4rem 0' }}>
        <p>Service introuvable.</p>
        <button onClick={() => navigate(-1)} className="btn btn-secondary mt-4">
          ← Retour
        </button>
      </div>
    )
  }

  return (
    <section className="service-detail container">
      {/* Retour vers la liste des services */}
      <Link to="/#Services" className="btn-sm">← Retour</Link>

      <header className="service-detail-header bg-primary text-white">
        <h1>{service.title}</h1>
        <p>{service.brief}</p>
      </header>

      <div className="grid" style={{ gap: '2rem', marginTop: '2rem' }}>
        <div>
          <div className="info-box">
            <h2>Description détaillée</h2>
            <p>{service.description}</p>
          </div>
          <div className="info-box">
            <h2>Caractéristiques du service</h2>
            <ul>
              {service.characteristics.map((c, i) => <li key={i}>✓ {c}</li>)}
            </ul>
          </div>
          <div className="info-box">
            <h2>Avantages</h2>
            <ul>
              {service.advantages.map((a, i) => <li key={i}>• {a}</li>)}
            </ul>
          </div>
        </div>

        <aside className="info-box">
          <h2>Informations pratiques</h2>
          <p><strong>Temps de réponse :</strong> {service.info.responseTime}</p>
          <p><strong>Tarif :</strong> {service.info.price}</p>

          <div style={{ marginTop: '1.5rem' }}>
            <a href="tel:+33123456789" className="btn btn-primary w-full mb-2">
              📞 Appeler maintenant
            </a>
            <a href="mailto:contact@babel-securite.com" className="btn btn-secondary w-full mb-2">
              ✉ Demande par email
            </a>
            <a href="tel:+33123456789" className="btn emergency-button w-full">
              Urgence 24/7
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}