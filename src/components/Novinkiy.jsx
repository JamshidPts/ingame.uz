import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Novinki } from '../data/NovinkiySlider';

function Aksii() {
  return (
    <section className='bg-[#1A1A1A] text-white py-[50px]'>
        <div className='container mx-auto min-h-[67vh]'>
            <h2 className='text-[40px] font-[600] mb-[40px] px-4'>Новинки</h2>
            <Swiper 
                modules={[Navigation]} 
                navigation
                breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: {slidesPerView: 4},
                }} 
                className='p-2 gap-10'>
                {Novinki.map((item) => (
                    <SwiperSlide key={item.id} className='py-6'>
                        <div className='min-h-[500px] w-[280px] md:w-[280px] lg:w-[300px] 2xl:w-[320px] mx-auto px-5 py-10 bg-[#1E1E1E] relative'>
                            {item.status && (
                                <span className="absolute top-[-1.5rem] left-[0.3rem] border border-[#D3176D] px-3 py-1 font-bold text-lg">
                                    {item.status}
                                </span>
                            )}
                            <img src={item.toLike} alt="like" className='absolute right-[2rem] md:right-[1rem] w-[30px] h-[30px] cursor-pointer'/>
                            <div className='w-[150px] m-auto relative'>
                                <img src={item.img} alt="stul" className='relative z-[1] w-[100px] h-[180px] mx-auto lg:h-[230px] lg:w-[150px]'/>
                                <span className="absolute inset-0 m-auto z-0 shadow-custom-white bg-white-transparent w-[20px] h-[20px] rounded-[10px]"></span>
                            </div>
                            <p className='text-[22px] font-bold py-[15px]'>{item.title}</p>
                            <p className="text-white text-xl font-bold line-through">{item.price}</p>
                            <p className='text-[#D3176D] text-2xl font-bold'>{item.forSale}</p>
                            <p className='py-4 font-light'>{item.descr}</p>
                            <div className='flex items-center justify-end gap-3'>
                                <button className='text-[18px] active:bg-[#D3176D] hover:bg-[#D3176D] transition-transform duration-300 transform hover:scale-110 active:scale-100 font-bold px-4 py-2 border border-[#D3176D]'>{item.buy}</button>
                                <img src={item.korzina} alt="korzina" className='border border-white p-2'/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Aksii