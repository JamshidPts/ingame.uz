import React, { useState } from 'react'
import { data } from '../data/QuestionData'
import icon from '../assets/navbar/navbar_icon.svg'

function Question() {
    const [open, setOpen] = useState(null)

    const handleOpen = (index) => {
        setOpen(open === index ? null : index)
    }

    return (
        <section className='bg-[#1A1A1A] text-white py-[50px]'>
            <div className='container mx-auto min-h-[67vh]'>
                <div className="flex flex-col items-center text-center mb-[70px]">
                    <h3 className="uppercase text-[24px] sm:text-[35px] md:text-[40px] px-4 font-[600] mb-[25px]">
                        Часто задаваемые вопросы
                    </h3>
                    <span className="w-[130px] border-[1.6px] border-[#d3176d]"></span>
                </div>
                <div>
                    {data.map((item) => (
                        <div onClick={() => handleOpen(item.id)}  key={item.id} className='border-b border-b-[#757575] px-2 cursor-pointer'>
                            <ul className='flex justify-between items-center'>
                                <li className='font-semibold text-[14px] sm:text-[20px] w-full lg:text-[22px] py-5 px-2'>{item.title}</li>
                                <img src={icon} alt="icon" className={`w-[40px] px-2 transition-all duration-300 ease-in-out ${open === item.id ? "rotate-180" : ""}`}/>
                            </ul>
                            {open === item.id && (
                                <p className='text-[18px] text-gray-300 pb-4 px-2 list-disc'>{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Question