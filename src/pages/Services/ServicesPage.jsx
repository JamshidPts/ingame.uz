import React from 'react'
import Navbar from '../../components/Navbar'
import AboutUs from '../../components/AboutUs'
import Question from '../../components/Question'
import News from '../../components/News'
import Meneger from '../../components/Meneger'
import Footer from '../../components/Footer'
import Usluga from '../../components/Services/Usluga'

function ServicesPage() {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <Usluga />
        <AboutUs title="Отзывы наших клиентов" text="Об этом лучше всего расскажут сами наши клиенты!"/>
        <Question />
        <News />
        <Meneger />
        <Footer />
    </>
  )
}

export default ServicesPage