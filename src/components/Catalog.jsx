import React from 'react'
import { CatalogItems } from '../data/Catalog'

function Catalog() {
  return (
    <section className='min-h-[59.2vh] bg-[#0f0f0f] text-white'>
      <div className="container mx-auto py-[50px]">
        <div className='flex flex-col items-center mb-[40px]'>
          <h2 className='uppercase text-[40px] font-[600]'>КАТАЛОГ INGAME.UZ</h2>
          <p className='mt-[10px] mb-[16px] text-[22px font-[500]'>Выберите себе в каталоге  для максимально комфортной игры</p>
          <p className='w-[130px]  border-[1.6px] border-top border-[#d3176d]'></p>
        </div>
        <div className="max-w-[950px] mx-auto flex flex-wrap justify-center items-center gap-5">
          {CatalogItems.map((item) => (
            <div className="p-5 text-center flex flex-col items-center" key={item.id}>
              <div className="w-40 h-30 px-5 flex justify-center">
                <img src={item.image} alt={item.text} className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-lg font-normal">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Catalog
