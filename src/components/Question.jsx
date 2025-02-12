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
                    <h3 className="uppercase text-[40px] font-[600] mb-[25px]">
                        Часто задаваемые вопросы
                    </h3>
                    <div className="w-[130px] border-[1.6px] border-[#d3176d]"></div>
                </div>

                <div>
                    {data.map((item) => (
                        <div key={item.id} className='border-b-[1px] px-[50px]'>
                            <ul className='flex  w-full justify-between items-center'>
                                <li className='font-semibold text-[18px] lg:text-[22px] py-[20px] list-disc'>{item.title}</li>
                                <button onClick={() => handleOpen(item.id)}><img src={icon} alt="icon" /></button>
                            </ul>
                            {open === item.id && (
                                <p className='text-[18px] text-gray-300  py-4 px-4'>{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Question