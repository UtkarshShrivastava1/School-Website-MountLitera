import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Heder'
import News from '../components/News'
import Carousel from '../components/Carousal'
import School from '../components/School'
import Testimonials from '../components/Testimonial'
import Gallary from '../components/Gallary'
import OurVideos from '../components/OurVideos'
import Apply from '../components/Apply'

const Home = () => {
  return (
    <>
       {/* <Navbar /> */}
      
      <Header />
      <Carousel />
      <News />
      <Gallary />
      <School /> 
      <OurVideos />
      <Testimonials />
      <Apply />
      <Footer />
     
     
    </>
  )
}

export default Home