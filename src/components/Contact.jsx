import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required('Prénom requis'),
  lastName:  Yup.string().required('Nom requis'),
  email:     Yup.string().email('Email invalide').required('Email requis'),
  service:   Yup.string().required('Sélection requise'),
  message:   Yup.string(),
})

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <p className="lead">
          Une question ? Un besoin urgent ? Notre équipe est à votre disposition
          pour vous répondre et vous accompagner.
        </p>

        <div className="contact-grid">
          <div className="contact-cards">
            <div className="info-card">
              <strong>Téléphone</strong>
              <p>01 23 45 67 89</p>
              <small>Lun–Ven 8h–18h</small>
            </div>
            <div className="info-card urgency">
              <strong>Urgence 24/7</strong>
              <p>06 12 34 56 78</p>
              <small>Disponible en permanence</small>
            </div>
            <div className="info-card">
              <strong>Email</strong>
              <p>contact@babel-securite.fr</p>
              <small>Réponse sous 24h</small>
            </div>
            <div className="info-card">
              <strong>Adresse</strong>
              <p>123 Avenue de la Sécurité<br/>75001 Paris, France</p>
            </div>
          </div>

          <div className="form-card">
            <h3>Demande de devis</h3>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                service: '',
                message: ''
              }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                // envoi API...
                setSubmitting(false)
                resetForm()
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-row">
                    <Field name="firstName" placeholder="Prénom *" />
                    <Field name="lastName" placeholder="Nom *" />
                  </div>
                  <ErrorMessage name="firstName" component="div" className="error" />
                  <ErrorMessage name="lastName" component="div" className="error" />

                  <Field name="email" type="email" placeholder="Email *" />
                  <ErrorMessage name="email" component="div" className="error" />

                  <Field name="phone" placeholder="Téléphone" />

                  <Field name="service" as="select">
                    <option value="">Type de service souhaité *</option>
                    <option>Gardiennage & Surveillance</option>
                    <option>Vidéosurveillance</option>
                    <option>Protection Rapprochée</option>
                    <option>Sécurité Événementielle</option>
                    <option>Transport Sécurisé</option>
                    <option>Intervention d’Urgence</option>
                  </Field>
                  <ErrorMessage name="service" component="div" className="error" />

                  <Field name="message" as="textarea" rows="4" placeholder="Message" />

                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    Envoyer la demande
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}