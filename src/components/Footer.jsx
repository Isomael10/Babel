import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-col about">
          <div className="logo-block">
            <svg viewBox="0 0 24 24" className="footer-icon">
              <path d="M12 2l7 4v6a8 8 0 11-14 0V6l7-4z" fill="currentColor"/>
            </svg>
            <div>
              <h3>Babel Services Securite</h3>
              <span className="subtitle">Sécurité</span>
            </div>
          </div>
          <p className="about-text">
            Votre partenaire de confiance pour tous vos besoins en sécurité. Plus de 10 ans d'expertise.
          </p>
          <div className="footer-cta">
            <svg viewBox="0 0 24 24" className="cta-icon">
              <path d="M12 2a10 10 0 00-3.54.65 1 1 0 01-1.14-1.67A12 12 0 1123 12h-3a1 1 0 01-1-1 10 10 0 00-7-9.35zM13 7h-2v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor"/>
            </svg>
            <span>Service 24/7 disponible</span>
          </div>
        </div>

        <div className="footer-col nav">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/#accueil">Accueil</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#apropos">À propos</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col services">
          <h4>Nos Services</h4>
          <ul>
            <li><Link to="/service/gardiennage-surveillance">Gardiennage</Link></li>
            <li><Link to="/service/videosurveillance">Vidéosurveillance</Link></li>
            <li><Link to="/service/protection-rapprochee">Protection rapprochée</Link></li>
            <li><Link to="/service/securite-evenements">Sécurité événements</Link></li>
            <li><Link to="/service/transport-securise">Transport sécurisé</Link></li>
            <li><Link to="/service/intervention-urgence">Intervention urgence</Link></li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>
              <svg viewBox="0 0 24 24" className="contact-icon">
                <path d="M6.62 10.79a15.05..."/>
              </svg>
              <div>
                <span>01 23 45 67 89</span>
                <small>Lun–Ven 8h–18h</small>
              </div>
            </li>
            <li className="urgency">
              <svg viewBox="0 0 24 24" className="contact-icon">
                <path d="M12 2a10 10 0..."/>
                <path d="M13 7h-2v6l5.25..."/>
              </svg>
              <div>
                <span>06 12 34 56 78</span>
                <small>Urgences 24/7</small>
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="contact-icon">
                <path d="M2 5a2 2 0..."/>
              </svg>
              <div>
                <span>contact@babel-securite.fr</span>
                <small>Réponse sous 24h</small>
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="contact-icon">
                <path d="M12 2C8.13 2..."/>
              </svg>
              <div>
                <span>123 Avenue de la Sécurité</span>
                <small>75001 Paris, France</small>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-mid container">
        <ul className="legal-links">
          <li><Link to="/legal">Mentions légales</Link></li>
          <li><Link to="/privacy">Politique de confidentialité</Link></li>
          <li><Link to="/terms">Conditions générales</Link></li>
          <li><Link to="/rgpd">RGPD</Link></li>
        </ul>
        <p>© {year} Babel Services Sécurité. Tous droits réservés.</p>
        <p className="agreement">Agrément Préfectoral n° CNAPS-XXX-XXXX-XX-XX</p>
      </div>

      <div className="footer-bottom emergency-banner">
        <svg viewBox="0 0 24 24" className="banner-icon">
          <path d="M6.62 10.79..."/>
        </svg>
        <div className="banner-text">
          <span className="banner-title">URGENCE 24/7</span>
          <span>En cas d'urgence, contactez immédiatement le <strong>06 12 34 56 78</strong></span>
        </div>
      </div>
    </footer>
  )
}