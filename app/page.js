import React from 'react'
import HeroScrollCards from './components/HeroScrollCard'
import Navbar from './components/Navbar'
import MarqueeLogoScroller from './components/MarqueeLogoScroller'
import MagicTextSection from './components/MagicTextSection'
import FlyingCardsSection from './components/FlyingCardsSection'
import ServicesSection from './components/ServicesSection'
import StackingCardsSection from './components/StackingCardsSection'
import CardRevealSection from './components/CardRevealSection'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroScrollCards/>
      <MarqueeLogoScroller/>
      <MagicTextSection/>
      <FlyingCardsSection/>
      <ServicesSection/>
      <StackingCardsSection/>
      <CardRevealSection/>
      <BlogSection/>
      <Footer/>
      
    </div>
  )
}

export default page
