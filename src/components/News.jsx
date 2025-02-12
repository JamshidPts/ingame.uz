import React from 'react'
import { news } from '../data/NewsData'
import { Link } from 'react-router-dom'
function News() {
  return (
    <section className='bg-[#1A1A1A] text-white py-[50px]'>
        <div className='container mx-auto min-h-[68vh]'>
            <h2 className='text-[40px] font-[600] mb-[40px] px-4'>Блог и новости</h2>
            <div className='flex justify-center lg:justify-between flex-wrap items-center p-4'>
                {news.map((item) => (
                    <div key={item.id} className='p-4'>
                        <div className='relative w-[350px] sm:w-[400px]'>
                            <img src={item.img1} alt="image" className='w-full'/>
                            <img src={item.img2} alt="predmeti" className='w-1/2 sm:w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'/>
                            <p className='absolute top-[18%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 z-0 font-bold text-[30px]'>{item.status}</p>
                            <p className='absolute top-[60%] left-[50%] font-bold text-[40px] z-20'>{item.price}</p>
                            <p className='absolute top-[93%] left-[8%] font-bold text-[18px] bg-[#D3176D] px-2 py-1 border'>{item.date}</p>
                        </div>
                        <div className='bg-[#0F0F0F] px-4 min-h-[200px] w-[350px] sm:w-[400px]'>
                            <h5 className='pt-8 font-bold text-[22px] pb-1'>{item.title}</h5>
                            <p className='text-[14px] font-medium pb-2'>{item.descr}</p>
                            <Link to="/" className="text-[#9A9A9A] border-b border-b-[#9A9A9A]">{item.url}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default News