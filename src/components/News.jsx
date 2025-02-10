import React from 'react'
import { news } from '../data/NewsData'
function News() {
  return (
    <section className='bg-[#1A1A1A] text-white py-[50px]'>
        <div className='container mx-auto min-h-[68vh]'>
            <h2 className='text-[40px] font-[600] mb-[40px] px-4'>Блог и новости</h2>
            <div className='flex justify-center space-x-[41px] items-center'>
            {news.map((item) => (
                <div key={item.id} className='relative'>
                    <img src={item.img1} alt="image"  className='w-[470px] h-[364px] '/>
                    <img src={item.img2} alt="image" className='w-[280px] h-[280px] absolute top-[2.9rem] left-[5.7rem] z-10'/>
                    <p className='text-[33px] font-[600] absolute top-[3rem] left-[4.5rem]'>{item.status}</p>
                    <p className='text-[40px] font-[500] absolute top-[14.4rem] left-[13.7rem] z-20'>ОТ <span className='font-[700]'>{item.price}</span></p>
                    <p className='text-[20px] font-[700] bg-[#D3176D] w-[90px] h-[36px] text-center absolute top-[21.6rem] left-[1rem] p-[2px]'>{item.date}</p>
                    <div className='bg-[#0F0F0F] h-[180px] px-[20px] py-[30px]'>
                        <p className='text-[20px] font-[600] mb-[10px]'>{item.title}</p>
                        <p className='w-[380px] text-[14px] pb-[10px]'>{item.descr}</p>
                        <a href="#" className='text-[14px] text-[#9A9A9A] underline '>{item.url}</a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default News