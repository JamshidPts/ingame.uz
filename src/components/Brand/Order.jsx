import React from 'react'
import { OrderData } from '../../data/Order'

function Order() {
  return (
    <section className='bg-[#1a1a1a] min-h-[50vh] py-[40px] text-[#b2b2b2] '>
      <div className="container mx-auto w-[1120px] ">
        <div>
          <div className='mb-[30px]'>
            <h3 className='text-white text-[40px] font-[600]'>Оплата и доставка</h3>
            <p className='my-[20px]'>Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.</p>
            <p>Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.</p>
          </div>
          <div className='flex justify-between items-center mb-[30px]'>
            {OrderData.map((item) => (
              <div className='w-[260px] bg-[#0f0f0f] p-[20px] text-center' key={item.id}>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div>
            <p className='mb-[20px]'>Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.</p>
            <p>Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order
