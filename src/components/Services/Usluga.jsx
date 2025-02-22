import React from 'react'
import pc from "../../assets/services/pcServices.png"

function Usluga() {
    return (
        <section className='relative bg-[#000000] min-h-screen pt-[180px] text-white'>
            <div className=' container mx-auto px-4'>
                <div className='flex items-start justify-between h-screen'>
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
            </div>
        </section>
    )
}

export default Usluga
