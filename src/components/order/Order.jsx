import React from 'react'
import { orderInfo } from '../../data/Cart'

function Order() {
  return (
    <section className='bg-[#1a1a1a] min-h-[100vh] pt-[170px] pb-[50px] text-white'>
      <div className="container mx-auto px-4 max-w-[1300px]">
        <div className='flex justify-between '>
          <div>
            <div className='w-[800px] h-[40px] mb-[20px] px-[20px] flex justify-between bg-[#2d2d2d] items-center'>
              <div className='w-[55%]'>
                <h4>Товар</h4>
              </div>
              <div className='flex w-[55%] justify-between'>
                <h4>Наличие</h4>
                <h4 className='mr-[50px]'>Количество</h4>
                <h4>Цена</h4>
              </div>
            </div>
            <div>
              {orderInfo.map((item) => (
                <div className='flex items-start' key={item.id}>
                  <div className='w-[55%] flex mb-[30px] gap-[20px]'>
                    <div className='bg-[#2d2d2d] p-[14px]'>
                      <img src={item.img} alt={item.img} />
                    </div>
                    <div>
                      <h3 className='font-[600]'>{item.title}</h3>
                      <p className='text-[14px] text-[#a8a8a8]'>{item.subtitle}</p>
                    </div>
                  </div>
                  <div className='w-[55%] flex justify-between items-center'>
                    <div className='text-center'>
                      <h5 className='font-[600]'>{item.orderTitle}</h5>
                      <p className='text-[#a8a8a8]'>{item.days}</p>
                    </div>
                    <div className='flex items-center '>
                      <button className='bg-[#2d2d2d] w-[25px] h-[30px]'>-</button>
                      <p className='bg-[#2d2d2d] w-[25px] h-[30px] px-[8px] pt-[2px]'>1</p>
                      <button className='bg-[#2d2d2d] w-[25px] h-[30px] '>+</button>
                      <img className='w-[14px] h-[18px] ml-[10px]' src={item.trashIcon} alt={item.trashIcon} />
                    </div>
                    <div>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='bg-black w-[430px] h-[158px] p-[40px]'>
              <div className='flex justify-between mb-[20px] text-[20px] '>
                <p>Итого: . . . . . . . . . . . . . . </p>
                <p className='font-[600]'>22 343 444 сум</p>
              </div>
              <div className='text-center'>
                <button className='bg-[#D3176D] w-[100%] p-[10px]'>Продолжить</button>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-[400px] flex justify-between'>
          <div className='flex w-[260px] bg-[#2d2d2d] p-[10px] gap-[20px]'>
            <p className='font-[600]'>Промокод</p>
            <p className='text-[#767575]'>____________________</p>
          </div>
          <button className='w-[120px] border-[2px] border-[#D3176D]'>Применить</button>
        </div>

      </div>
    </section>
  )
}

export default Order
