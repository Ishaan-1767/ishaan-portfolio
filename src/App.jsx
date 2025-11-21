import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Writing from './components/Writing'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App(){
  return (
    <div>
      <Navbar />
      <main className="container">
        <Hero />
        <Skills />
        <Projects />
        <Writing />
        <Contact />
      </main>
    </div>
  )
}