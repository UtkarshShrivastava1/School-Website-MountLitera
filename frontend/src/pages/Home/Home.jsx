import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Heder'
// import News from '../../components/News'
// import Carousel from '../../components/Carousal'
import School from '../../components/School'
// import Testimonials from '../../components/Testimonial'
import {Gallary} from '../../components/Gallary'
import OurVideos from '../../components/OurVideos'
// import Apply from '../../components/Apply'
// import Welcome from '../../components/Welcome'
// import Principle from '../../components/principle'


const Home = () => {
  const cards = [
    {
      id: 1,
      imageUrl: "https://images.pexels.com/photos/12935123/pexels-photo-12935123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // ✅ Corrected
      content: "Annual Day",
      description: "Slogan writing competition",
    },
    {
      id: 2,
      imageUrl: "https://images.pexels.com/photos/31003854/pexels-photo-31003854/free-photo-of-high-school-rugby-match-in-action-on-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // ✅ Corrected
      content: "Sports Day",
      description: "Football Match",
    },
    {
      id: 3,
      imageUrl: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // ✅ Corrected (changed `thumbnail` to `image`)
      content: "Semeniar",
      description: "Semeniar on Science",
    },
    {
      id: 4,
      imageUrl: "https://images.pexels.com/photos/5530483/pexels-photo-5530483.jpeg?auto=compress&cs=tinysrgb&w=600", // ✅ Corrected
      content: "Computer Lab",
      description: "Computer Lab",
    },
  ];

  
  return (
    <>
       {/* <Navbar /> */}
      
       <Header />
      {/* <Carousel />
      <Welcome />
      <Principle />
      <News />  
      <Gallary cards={cards} />*/}
      <OurVideos />
    {/*   <School /> 
      <Testimonials />
      <Apply />*/}
      <Footer /> 
     
     
    </>
  )
}

export default Home