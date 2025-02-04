import React from 'react'
import logo from "../assets/logo_navbar.svg";
import vector from "../assets/navbar_icon.svg"
import searchBtn from "../assets/search_btn.svg"
import korzinaBtn from "../assets/korzina_btn.svg"

function Navbar() {
  return (
    <nav className='bg-[#1A1A1A] h-[8vh] w-full'>
        <div className='container m-auto h-full flex justify-between items-center'>
            <div className='flex items-center h-full'>
                <div className='flex items-center'>
                    <img src={logo} alt="ingame" className='w-[150px] xl:w-[200px]'/>
                    <div className='hidden text-white items-center sm:flex xl:justify-between cursor-pointer'>
                        <a href='#' className='px-[20px] text-[22px] flex items-center'>Продукция <span className='pl-[6px]'><img src={vector} alt="vector" className='w-[19px]'/></span></a>
                        <a href='#' className='px-[20px] text-[22px] flex items-center'>Услуги <span className='pl-[6px]'><img src={vector} alt="vector" className='w-[19px]'/></span></a>
                        <a href='#' className='px-[20px] text-[22px]'>О бренде</a>
                    </div>
                </div>
            </div>
            <div className='text-white flex items-center h-full cursor-pointer gap-[5px]'>
                <a className='border border-white py-[3px] px-[8px] text-[18px] font-sans' href="#">Связаться</a>
                <select className='bg-transparent font-orbitron' name="" id="">
                    <option className='bg-[#0A0A0A]' value="">RU</option>
                    <option className='bg-[#0A0A0A]' value="">UZ</option>
                </select>
                <select className='bg-transparent font-orbitron' name="" id="">
                    <option className='bg-[#0A0A0A]' value="">USZ</option>
                    <option className='bg-[#0A0A0A]' value="">USD</option>
                </select>
                <img className=' px-[10px]' src={searchBtn} alt="search" />
                <img className=' px-[10px]' src={korzinaBtn} alt="search" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar