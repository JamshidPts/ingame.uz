import React from 'react'
import Order from '../../components/order/Order'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function OrderPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Order />
      <Footer />
    </>
  )
}

export default OrderPage
