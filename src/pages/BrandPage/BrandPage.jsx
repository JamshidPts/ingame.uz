import React from 'react'
import AboutUs from '../../components/AboutUs'
import Navbar from '../../components/Navbar'
import AboutCompany from '../../components/Brand/AboutCompany'

function BrandPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <AboutCompany />
      <AboutUs />
    </>
  )
}

export default BrandPage
