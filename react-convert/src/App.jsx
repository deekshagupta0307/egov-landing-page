import React from 'react'
import TopNavbar from './components/TopNavbar'
import MainNavbar from './components/MainNavbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import SustainSection from './components/SustainSection'
import CTA from './components/CTA'
import LatestSection from './components/LatestSection'
import Supporters from './components/Supporters'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <Hero />
      <Stats />
      <Features />
      <SustainSection />
      <CTA />
      <LatestSection />
      <Supporters />
      <Footer />
    </>
  )
}

export default App