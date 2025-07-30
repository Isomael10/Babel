import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import ServiceDetail from './components/ServiceDetail'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Contact />
              </>
            }
          />
          <Route path="/service/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}