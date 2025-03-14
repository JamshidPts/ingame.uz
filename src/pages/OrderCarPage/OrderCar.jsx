import React from 'react'
import OrderCarPlace from '../../components/orderCar/OrderCarPlace'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function OrderCar() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <OrderCarPlace />
      <Footer />
    </>

  )
}

export default OrderCar
