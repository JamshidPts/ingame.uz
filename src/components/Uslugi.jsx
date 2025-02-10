import React from 'react'
import { Uslugiy } from "../data/UslugiData"

function Uslugi() {
  return (
    <section className='bg-[#1A1A1A] text-white py-[50px]'>
      <div className='container mx-auto min-h-[100vh]'>
        <h2 className='text-[40px] font-[600] mb-[40px] px-4'>Услуги</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 place-items-center'>
          {Uslugiy.map((item) => (
            <div key={item.id} className='w-[300px] min-h-[460px] bg-[#1E1E1E] rounded shadow-md'>
              <img src={item.image} alt="usluga" />
              <div className='p-4'>
                <p className='text-[#D3176D] text-[20px] font-semibold'>{item.title}</p>
                <p className='text-[14px] font-medium border-b border-b-[#D9D9D9] border-opacity-20 pb-[20px]'>{item.descr}</p>
                <div className='py-4 px-2'>
                  <li className=''>{item.descr1}</li>
                  <li className=''>{item.descr2}</li>
                  <li className=''>{item.descr3}</li>
                </div>
                <div className='flex justify-end px-2'>
                  <button className='border-2 border-white px-5 py-1 rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-black'>{item.btn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Uslugi