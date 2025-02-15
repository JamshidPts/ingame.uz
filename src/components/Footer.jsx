import React from 'react'
import yandexMap from "../assets/footer/yandex_map.png"
import phone from "../assets/footer/phone.svg"
import time from "../assets/footer/time.svg"
import location from "../assets/footer/location.svg"
import instagram from "../assets/footer/instagram.svg"
import telegram from "../assets/footer/telegram.svg"

function Footer() {
  return (
    <footer className='bg-[#131212] text-white py-[50px]'>
        <div className='container m-auto min-h-full'>
            <div className='flex flex-col lg:flex-row items-center justify-evenly px-4'>
                <div className='flex justify-center gap-10 px-4 mb-8'>
                    <ul className='cursor-pointer'>
                        <li className='py-2 font-semibold'>Контакты</li>
                        <a className='flex items-center justify-start gap-2 text-[#777676] py-2'><span className='w-[20px]'><img src={phone} alt="phone" className='mx-auto' /></span>номер</a>
                        <a className='flex items-center justify-start gap-2 text-[#777676] py-2'><span className='w-[20px]'><img src={time} alt="phone" className='mx-auto' /></span>время работы</a>
                        <a className='flex items-center justify-start gap-2 text-[#777676] py-2'><span className='w-[20px]'><img src={location} alt="phone" className='mx-auto' /></span>локация</a>
                    </ul>
                    <ul className='cursor-pointer'>
                        <li className='py-2 font-semibold'>Наши соц. сети</li>
                        <a className='flex items-center justify-start gap-2 text-[#777676] py-2'><span className='w-[20px]'><img src={instagram} alt="phone" className='mx-auto' /></span>Instagram</a>
                        <a className='flex items-center justify-start gap-2 text-[#777676] py-2'><span className='w-[20px]'><img src={telegram} alt="phone" className='mx-auto' /></span>Telegram</a>
                    </ul>
                </div>
                <div>
                    <a href="https://yandex.uz/maps/org/ingame/216647171785/?ll=69.271787%2C41.339578&z=17.09" target='_blank'><img className='max-w-[300px] sm:max-w-[350px] lg:max-w-[507px]' src={yandexMap} alt="yandex" /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer