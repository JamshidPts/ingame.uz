import React from 'react'
import logo from "../assets/logo_navbar.svg";
import vector from "../assets/navbar_icon.svg"
import searchBtn from "../assets/search_btn.svg"
import korzinaBtn from "../assets/korzina_btn.svg"
import compareBtn from "../assets/compare_btn.svg"
import modal_nav from "../assets/mobile_modal.svg"
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-[#1A1A1A] h-[8vh] w-full'>
        <div className='container m-auto h-full flex justify-between items-center'>
            <div className='flex items-center h-full'>
                <div className='flex items-center'>
                    <img src={logo} alt="ingame" className='w-[150px] xl:w-[200px]'/>
                    <div className='hidden sm:hidden text-white items-center lg:flex lg:justify-between cursor-pointer'>
                        <NavLink className={({ isActive }) => (isActive ? "text-[#D3176D]" : "text-white px-[20px] text-[22px] flex items-center")}>
                            <a href='#' className='px-[20px] text-[22px] flex items-center'>Продукция <span className='pl-[6px]'><img src={vector} alt="vector" className='w-[19px]'/></span></a>
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-[#D3176D]" : "text-white px-[20px] text-[22px] flex items-center")}>
                            <a href='#' className='px-[20px] text-[22px] flex items-center'>Услуги <span className='pl-[6px]'><img src={vector} alt="vector" className='w-[19px]'/></span></a>
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "text-[#D3176D]" : "text-white px-[20px] text-[22px] flex items-center")}>
                            <a href='#' className='px-[20px] text-[22px]'>O бренде</a>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='text-white flex items-center h-full cursor-pointer gap-[10px] px-[10px]'>
                <div className='hidden sm:hidden lg:flex lg:justify-between gap-[10px]'>
                    <a className='border border-white py-[3px] px-[8px] text-[18px] font-sans' href="#">Связаться</a>
                    <select className='bg-transparent font-orbitron' name="" id="">
                        <option className='bg-[#0A0A0A]' value="">RU</option>
                        <option className='bg-[#0A0A0A]' value="">UZ</option>
                    </select>
                    <select className='bg-transparent font-orbitron' name="" id="">
                        <option className='bg-[#0A0A0A]' value="">USZ</option>
                        <option className='bg-[#0A0A0A]' value="">USD</option>
                    </select>
                    <img className='px-[10px]' src={korzinaBtn} alt="kozina" />
                </div>
                <div className='flex justify-between'>
                    <img className='px-[10px]' src={searchBtn} alt="search" />
                    <img className='px-[10px]' src={compareBtn} alt="compare" />
                </div>
                    <img className='lg:hidden' src={modal_nav} alt="modal" />
                    <div>
                        
                    </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar