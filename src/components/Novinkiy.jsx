import React from 'react'
import { Novinki } from '../data/NovinkiySlider'
import { Swiper } from 'swiper/react'

function Novinkiy() {
  return (
    <section className='bg-[#1A1A1A] text-white py-[50px]'>
        <div className='container mx-auto min-h-[67vh]'>
            <h2 className='text-[40px] font-[600] mb-[40px]'>Новинки</h2>
            <div className='hidden lg:flex justify-between items-center'>
                {Novinki.map((item) => (
                    <div className='min-h-[500px] w-[320px] mx-5 px-5 py-10 bg-[#1E1E1E] relative' key={item.id}>
                        {item.status && (
                            <span className="absolute top-[-1.5rem] left-[0.3rem] border border-[#D3176D] px-3 py-1 font-bold text-lg">
                                {item.status}
                            </span>
                        )}
                        <img src={item.toLike} alt="like" className='absolute right-[2rem] md:right-[1rem] w-[30px] h-[30px] cursor-pointer'/>
                        <div className='w-[150px] m-auto relative'>
                            <img src={item.img} alt="stul" className='relative z-[1]'/>
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
                ))}
            </div>
            
        </div>
    </section>
  )
}

export default Novinkiy

// box-shadow: 0 0 80px 20px rgba(255, 255, 255, 0.75);
// background: rgba(255, 255, 255, 0.2);

// border-radius: 10px;
// width: 20px;
// height: 20px;