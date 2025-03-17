import React from 'react'
import Header from '../../components/Header'
import Catalog from '../../components/Catalog'
import OurPC from '../../components/OurPC'
import Novinkiy from '../../components/Novinkiy'
import Aksii from '../../components/Aksii'
import Uslugi from '../../components/Uslugi'
import AboutUs from '../../components/AboutUs'
import Question from '../../components/Question'
import News from '../../components/News'
import Meneger from '../../components/Meneger'
import Footer from '../../components/Footer'

function MainPage() {
  return (
    <>
      <Header />
      <Catalog />
      <OurPC />
      {/* <Novinkiy /> */}
      <Aksii />
      <Uslugi />
      <AboutUs />
      <Question />
      <News />
      <Meneger />
      <Footer />
    </>
  )
}

export default MainPage
