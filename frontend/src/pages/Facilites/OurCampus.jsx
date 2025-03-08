import React from 'react'
import SportsFacilities from '../../components/facilites/Sports'
import ITInfrastructure from '../../components/facilites/ITinfrastructure'
import TransportFacilities from '../../components/facilites/Transport'
import Campusfacilities from '../../components/facilites/OurCampus'


const OurCampus = () => {
  return (
    <>
    <Campusfacilities />
   <SportsFacilities />
   <ITInfrastructure />
    <TransportFacilities />

    </>
  )
}

export default OurCampus