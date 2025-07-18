import React from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Qualification from './components/qualification/Qualification.jsx'
import Services from './components/services/Services.jsx'
import Projects from './components/projects/Project.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="main ">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Projects />
        <Contact />
        <Footer />

      </main>
     
    </>
  )
}

export default App
