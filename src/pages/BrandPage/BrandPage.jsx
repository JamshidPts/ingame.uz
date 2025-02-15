import React from 'react'
import AboutUs from '../../components/AboutUs'
import Navbar from '../../components/Navbar'
import AboutCompany from '../../components/Brand/AboutCompany'
import AboutUsCom from '../../components/Brand/AboutUsCom'
import Choice from '../../components/Brand/Choice'
import Order from '../../components/Brand/Order'
import Question from '../../components/Question'
import Meneger from '../../components/Meneger'
import Guarantees from '../../components/Brand/Guarantees'
import Footer from '../../components/Footer'

function BrandPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <AboutCompany />
      <AboutUsCom />
      <Choice />
      <AboutUs title="Отзывы наших клиентов" text="Об этом лучше всего расскажут сами наши клиенты!" />
      <Order />
      <Guarantees />
      <Question />
      <Meneger />
      <Footer />
    </>
  )
}

export default BrandPage
