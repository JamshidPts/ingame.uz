import React from 'react'
import companyCar from '../../assets/aboutCompany/company1.png'
function AboutCompany() {
  return (
    <section className='bg-[#1a1a1a] min-h-[100vh] pt-[120px] pb-[50px] text-white'>
      <div className="container mx-auto w-[1400px] ">
        <div className='font-orbitron mb-[40px]'>
          <h1 className='text-[40px] font-[600] mb-[20px]'>О компании</h1>
          <p className='text-[#b2b2b2] '>Компания INGAME была основана в 20017 году. Мы — официальный партнер таких известных технологических гигантов, как NVIDIA, ASUS ROG, Cougar, Huntkey.
            Главный офис INGAME и производственный центр расположены в Ташкенте. Шоурум с компьютерами и периферией находится также в Ташкенте. Мы осуществляем доставку компьютеров по всему Узбекистану и миру. Наша компания работает как с частными, так и с юридическими лицами.</p>
        </div>
        <div className='flex justify-center'>
          <img className="object-cover" src={companyCar} alt="Company image" />
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
