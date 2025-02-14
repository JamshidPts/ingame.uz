import React from 'react'
import { ChoiceData } from '../../data/Brand'

function Choice() {
  return (
    <section className='bg-[#0f0f0f] min-h-[50vh] py-[40px] text-[#b2b2b2] '>
      <div className="container mx-auto w-[1120px] ">
        <div className='flex flex-col items-center mb-[40px]'>
          <h2 className='text-[40px] font-[600] max-[510px]:text-[30px] mb-[20px] text-white'>Почему стоит выбрать нас?</h2>
          <p className='w-[130px]  border-[1.6px] border-top border-[#d3176d]'></p>
        </div>
        <div>
          <div className='mb-[30px]'>
            <p className='mb-[20px]'>Компания была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми компаниями как Wargaming,<br></br> UbiSoft, Electronic Arts, Bethesda и Mail.Games.</p>
            <p>Главный офис и производственный центр расположены в Москве. Шоурум с компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.</p>
          </div>
          <div className='flex justify-between items-center'>
            {ChoiceData.map((item) => (
              <div className='w-[260px] bg-[#1a1a1a] p-[20px] text-center' key={item.id}>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choice
