import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Header from '../../components/Heder'
import News from '../../components/News'
import Carousel from '../../components/Carousal'
import School from '../../components/School'
import Testimonials from '../../components/Testimonial'
import Gallary from '../../components/Gallary'
import OurVideos from '../../components/OurVideos'
import Apply from '../../components/Apply'
import Welcome from '../../components/Welcome'
import Principle from '../../components/principle'

const Home = () => {
  return (
    <>
       {/* <Navbar /> */}
      
      <Header />
      <Carousel />
      <Welcome />
      <Principle />
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