import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Video from './Video'
import Slider from './Slider'
import CanvasScrollAnimation from './ImgSeq'
import Pre_footer from './Pre_footer'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll()
  return (
    <>
      <Header />
      <Hero />
      <Video />
      <Slider />
      <CanvasScrollAnimation />
      <Pre_footer />
      <Footer />
    </>
  )
}

export default App
