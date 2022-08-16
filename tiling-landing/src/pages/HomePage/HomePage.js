import React from 'react'
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection'
import BlogSection from '../../components/BlogSection/BlogSection'
import Footer from '../../components/Footer/Footer'
import MainSection from '../../components/MainSection/MainSection'
import OurServicesSection from '../../components/OurServicesSection/OurServicesSection'
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection'
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection'
import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <>
    <MainSection/>
    <AboutUsSection/>
    <OurServicesSection/>
    <ProjectsSection/>
    <ReviewsSection/>
    <BlogSection/>
    <Footer/>
    </>
  )
}

export default HomePage