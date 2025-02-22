import React from 'react'
import pc from "../../assets/services/pcServices.png"
import btnOutline from "../../assets/services/btnOutline.png"
import btnArrow from "../../assets/services/btnArrow.svg"
import { servicesCards } from '../../data/Services'

function Usluga() {
    return (
        <section className='relative bg-[#000000] min-h-screen font-orbitron pt-[180px] text-white'>
            <div className=' container mx-auto px-4'>
                <div className='flex items-start justify-between '>
                    <div className='max-w-[520px]'>
                        <h2 className='text-[60px]'>Название услуги</h2>
                        <div className='text-[#B2B2B2] mb-[24px]'>
                            <p className='mb-[20px]'>съешь же ещё этих мягких французских булок, да выпей чаю съешь
                                же ещё этих мягких французских булок, да выпей чаю
                                съешь же ещё этих мягких
                                французских булок, да выпей чаю</p>
                            <p>съешь же ещё этих мягких французских булок, да выпей чаю съешь
                                же ещё этих мягких французских булок, да выпей чаю
                                съешь же ещё этих мягких
                                французских булок, да выпей чаю</p>
                        </div>
                        <button className='w-[279px] p-[10px] border-[2px] border-[#D3176D] text-[25px] font-[600] '>Заказать апгрейд</button>
                    </div>
                    <div className='absolute top-[100px] right-0'>
                        <img src={pc} alt="PC image" />
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute left-[0] right-[0] top-[160px]  flex justify-center gap-[40px] '  >
                        {servicesCards.map((item) => (
                            <div className='max-w-[180px] min-h-[231px] bg-cover bg-no-repeat bg-center text-center px-[20px] pt-[40px]' style={{ backgroundImage: `url(${btnOutline})` }} key={item.id}>
                                <img className='inline-block mb-[16px] max-w-auto h-[40px] object-contain' src={item.image} alt={item.image} />
                                <p className='mb-[24px]  min-h-[50px]'>{item.text}</p>
                                <button className='w-[32px] h-[32px] bg-[#D3176D] ml-[100px] rounded-[50%] pl-[9px]'><img src={btnArrow} alt={btnArrow} /></button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Usluga
