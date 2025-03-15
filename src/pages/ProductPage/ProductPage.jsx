import React from 'react'
import Navbar from '../../components/Navbar'
import Question from '../../components/Question'
import News from '../../components/News'
import Meneger from '../../components/Meneger'
import Footer from '../../components/Footer'
import AboutUs from '../../components/AboutUs'
import Products from '../../components/Products/Products'

function ProductPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Products />
      <AboutUs title="Отзывы наших клиентов" text="Об этом лучше всего расскажут сами наши клиенты!" />
      <Question />
      <News />
      <Meneger />
      <Footer />
    </>
  )
}

export default ProductPage
