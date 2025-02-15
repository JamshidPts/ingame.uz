import React, { useState } from 'react'
import img from '../assets/footer/footer_img.png'
import icon from '../assets/footer/footer_btn_icon.svg'
import Modal from './Modal';


function Meneger() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalToggle = () => {
        setIsModalOpen(true);
        setIsMenuOpen(false)
    }

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            <section className='bg-[#1A1A1A] text-white py-[50px]'>
                <div className='container mx-auto px-6 min-h-[60vh]'>
                    <div className='bg-[#0F0F0F] text-center relative'>
                        <h5 className='mx-auto text-[17px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-sans font-bold max-w-[896px] pt-10 px-5'>Одним онлайн-звонком мы изменим ваш игровой опыт навсегда</h5>
                        <p className='mx-auto max-w-[650px] sm:max-w-[600px] text-[#787676] text-[15px] md:text-[17px] lg:text-[18px] py-3 px-6 sm:px-5 lg:px-0'>
                            Назначим звонок, узнаем о ваших запросах, предложим подгодящую конфигурацию.
                            После разбора мы возьмем на себя все заботы по поддержке и
                            дальнейшей доставке и сбору ПК
                        </p>
                        <div className='pb-5 flex flex-col lg:flex-row items-center lg:gap-[7%] xl:gap-[4%] 2xl:gap-[12%] md:justify-end'>
                            <button onClick={modalToggle} className='flex items-center gap-2 text-[17px] lg:text-[20px] font-bold bg-[#D3176D] my-2 px-5 py-2 max-h-[46px]'><img src={icon} alt="" />Заказать звонок</button>
                            <img src={img} alt="pc" className='my-4 w-[200px] sm:w-[300px] xl:w-[450px] p-2'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Meneger