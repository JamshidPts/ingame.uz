import React from 'react'
import logo from "../assets/logo_navbar.svg";
import vector from "../assets/navbar_icon.svg"

function Navbar() {
  return (
    <nav className='bg-[#1A1A1A] h-[10vh] w-full'>
        <div className='container m-auto h-full'>
            <div className='flex items-center h-full'>
                <div className='flex items-center'>
                    <img src={logo} alt="ingame" className='w-[150px] xl:w-[200px]'/>
                    <div className='hidden text-white items-center sm:flex xl:justify-between cursor-pointer'>
                        <p className='px-[20px] text-[22px] flex items-center'>Продукция <span className='pl-[6px]'><img src={vector} alt="vector" className='w-[19px]'/></span></p>
                        <p className='px-[20px] text-[22px] flex items-center'>Услуги <span className='pl-[6px]'><img src={vector} alt="vector" className='w-[19px]'/></span></p>
                        <p className='px-[20px] text-[22px]'>О бренде</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar