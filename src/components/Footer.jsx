import React from 'react'
import img from '../assets/footer/footer_img.png'
import icon from '../assets/footer/footer_btn_icon.svg'


function Footer() {
    return (
        <footer className='bg-[#1A1A1A] text-white py-[50px]'>
            <div className='container mx-auto min-h-[54vh] px-6'>
                <div className='bg-[#0F0F0F] h-[402px] relative py-[50px]'>
                    <h2 className='text-center mx-auto text-[39px] w-[770px] mb-[15px] font-[600]'>Одним онлайн-звонком мы изменим ваш игровой опыт навсегда</h2>
                    <p className='text-center w-[740px] mx-auto mb-[20px] text-[18px]'>Назначим звонок, узнаем о ваших запросах, предложим подгодящую конфигурацию.
                        После разбора мы возьмем на себя все заботы по поддержке и <br />
                        дальнейшей доставке и сбору ПК
                    </p>
                    <button className='flex items-center text-center mx-auto bg-[#D3176D] px-[40px] py-[10px] text-[20px] relative pl-[50px]'><img src={icon} alt="icon" className='absolute left-[1.5rem] ' /> Заказать звонок</button>
                    <img src={img} alt="image" className='flex  absolute right-[-0.01rem] bottom-[1.5rem]'/>
                </div>
            </div>
        </footer>
    )
}

export default Footer