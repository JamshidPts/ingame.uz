import React from 'react'
import { OrderData } from '../../data/Order'

function Order() {
  return (
    <section className='bg-[#1a1a1a] min-h-[50vh] py-[40px] text-[#b2b2b2] '>
      <div className="container mx-auto px-[20px] max-w-[1400px] xl:w-[1120px]">
        <div>
          <div className='mb-[30px]'>
            <h3 className='text-white text-[32px] sm:text-[40px] text-center font-[600] '>Оплата и доставка</h3>
            <p className='my-[20px] text-[15px] sm:text-[16px]'>Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.</p>
            <p className='text-[15px] sm:text-[16px]'>Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.</p>
          </div>
          <div className='flex flex-wrap md:flex-nowrap gap-[20px] justify-center  xl:justify-between items-center mb-[30px]'>
            {OrderData.map((item) => (
              <div className='w-[280px] text-[15px]  bg-[#0f0f0f] text-center p-[24px] sm:p-[10px] lg:p-[20px] sm:text-[13px] xl:text-[16px] md:w-[260px] sm:w-[240px] ' key={item.id}>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className='text-[15px] sm:text-[16px]'>
            <p className='mb-[20px]'>Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.</p>
            <p>Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order
