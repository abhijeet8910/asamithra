import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import FeaturedProducts from './components/FeaturedProducts'
import FarmerSection from './components/FarmerSection'
import Footer from './components/Footer'

const Main = () => {
  return (
    <div>
      <Hero/>
      <HowItWorks/>
      <FeaturedProducts/>
      <FarmerSection/>
      <Footer/>
    </div>
  )
}

export default Main
