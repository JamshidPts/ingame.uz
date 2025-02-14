import React from 'react'
import AboutUs from '../../components/AboutUs'
import Navbar from '../../components/Navbar'
import AboutCompany from '../../components/Brand/AboutCompany'
import AboutUsCom from '../../components/Brand/AboutUsCom'

function BrandPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <AboutCompany />
      <AboutUsCom />
      <AboutUs />
    </>
  )
}

export default BrandPage
