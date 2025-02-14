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
import Footer from '../../components/Footer'

function MainPage() {
  return (
    <>
      <Header />
      <Catalog />
      <OurPC />
      <Novinkiy />
      <Aksii />
      <Uslugi />
      <AboutUs title="Почему стоит выбрать нас?" text="Об этом лучше всего расскажут сами наши клиенты!" />
      <Question />
      <News />
      <Footer />
    </>
  )
}

export default MainPage
