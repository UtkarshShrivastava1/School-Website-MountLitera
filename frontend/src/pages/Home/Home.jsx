import React from 'react'
import News from '../../components/Home/News'
import Carousel from '../../components/Home/Carousal'
import School from '../../components/Home/School'
import Testimonials from '../../components/Home/Testimonial'
import Gallary from '../../components/Home/Gallary'
import OurVideos from '../../components/Home/OurVideos'
import Apply from '../../components/Home/Apply'
import Welcome from '../../components/Home/Welcome'
import Principle from '../../components/Home/principle'

const Home = () => {
  return (
    <>
       
      <Carousel />
      <Welcome />
      <Principle />
      <News />
      <Gallary />
      <School /> 
      <OurVideos />
      <Testimonials />
      <Apply />
      
     
     
    </>
  )
}

export default Home