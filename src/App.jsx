import React from 'react'
import Header from './components/Header'
import About from './components/About'
import CareerGap from './components/CareerGap'
import ResumeEmbed from './components/ResumeEmbed'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <Header />
      <main>
        <section id="about"><About /></section>
        <section id="career-gap"><CareerGap /></section>
        <section id="resume"><ResumeEmbed /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="footer">© {currentYear} Lesly M. Dsouza</footer>
    </div>
  )
}
