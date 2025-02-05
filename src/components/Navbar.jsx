import React from 'react'
import logo from "../assets/logo_navbar.svg";
import vector from "../assets/navbar_icon.svg"
import searchBtn from "../assets/search_btn.svg"
import korzinaBtn from "../assets/korzina_btn.svg"
import compareBtn from "../assets/compare_btn.svg"
import modal_nav from "../assets/mobile_modal.svg"
import closeBtn from "../assets/close_modal.svg"
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-[#1A1A1A] h-[8vh] w-full'>
        <div className='container m-auto h-full flex justify-between items-center'>
            <div className='flex items-center h-full'>
                <div className='flex items-center'>
                    <img src={logo} alt="ingame" className='w-[150px] xl:w-[200px]'/>
                    <div className='hidden sm:hidden text-white items-center lg:flex lg:justify-between cursor-pointer'>
                        <NavLink className="flex items-center justify-center"><p className='pl-[25px] pr-[5px] text-[22px]'>Продукция</p><img src={vector} alt="vector" className='w-[19px]'/></NavLink>
                        <NavLink className="flex items-center justify-center"><p className='pl-[25px] pr-[5px] text-[22px]'>Услуги</p><img src={vector} alt="vector" className='w-[19px]'/></NavLink>
                        <NavLink className="flex items-center justify-center"><p className='pl-[25px] pr-[5px] text-[22px]'>O бренде</p><img src={vector} alt="vector" className='w-[19px]'/></NavLink>
                    </div>
                </div>
            </div>
            <div className='text-white flex items-center h-full cursor-pointer px-[10px]'>
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
                </div>
                <div className='flex items-center h-full'>
                    <img className='p-[10px]' src={compareBtn} alt="compare" />
                    <img className='p-[10px]' src={searchBtn} alt="search" />
                    <img className='p-[10px] lg:block hidden sm:hidden' src={korzinaBtn} alt="kozina" />
                </div>
                    <img className='lg:hidden w-[50px] p-[10px]' src={modal_nav} alt="modal" />
            </div>
        </div>
        <div className='absolute right-0 top-0 text-white flex flex-col items-end lg:hidden bg-[#0F0F0F] min-w-[250px]'>
            <div className='w-full flex justify-end'>
                <img src={closeBtn} alt="close" className='w-[75px] px-[26px] py-[30px]'/>
            </div>
            <NavLink className="flex items-center justify-between mx-auto border-b-2 border-b-[#252525] w-[200px]">
                <p className='py-[10px] font-sans text-[19px]'>Продукция</p><img src={vector} alt="vector" className='w-[25px] py-[17px]'/>
            </NavLink>
            <NavLink className="flex items-center justify-between mx-auto border-b-2 border-b-[#252525] w-[200px]">
                <p className='py-[10px] font-sans text-[19px]'>Услуги</p><img src={vector} alt="vector" className='w-[25px] py-[17px]'/>
            </NavLink>
            <NavLink className="flex items-center justify-between mx-auto border-b-2 border-b-[#252525] w-[200px]">
                <p className='py-[10px] font-sans text-[19px]'>O бренде</p><img src={vector} alt="vector" className='w-[25px] py-[17px]'/>
            </NavLink>
            
        </div>
    </nav>
  )
}

export default Navbar