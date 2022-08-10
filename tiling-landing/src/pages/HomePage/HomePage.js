import React from 'react'
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection'
import MainSection from '../../components/MainSection/MainSection'
import OurServicesSection from '../../components/OurServicesSection/OurServicesSection'
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection'
import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <>
    <MainSection/>
    <AboutUsSection/>
    <OurServicesSection/>
    <ProjectsSection/>
    </>
  )
}

export default HomePage