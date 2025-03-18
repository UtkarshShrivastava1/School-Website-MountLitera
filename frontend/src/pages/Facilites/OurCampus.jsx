import React from 'react'
import Header from '../../components/Heder'
import Footer from '../../components/Footer'
import OurCampusfeatures from '../../components/Facilities/OurCampusfeatures'
import ITInfrastructure from '../../components/Facilities/ITInfrastructure'
import SportsFacilities from '../../components/Facilities/SportsFacilitiess'

const OurCampus = () => {
  return (
    <>
    <Header />
    <OurCampusfeatures />
    <ITInfrastructure />
    <SportsFacilities />
    <Footer />
    </>
  )
}

export default OurCampus