import React, { useState } from 'react';
import logo from "../assets/navbar/logo_navbar.svg";
import vector from "../assets/navbar/navbar_icon.svg";
import searchBtn from "../assets/navbar/search_btn.svg";
import searchBtnBlack from "../assets/navbar/search_btn_black.svg";
import korzinaBtn from "../assets/navbar/korzina_btn.svg";
import compareBtn from "../assets/navbar/compare_btn.svg";
import modal_nav from "../assets/navbar/mobile_modal.svg";
import closeBtn from "../assets/navbar/close_modal.svg";
import closeBtnBlack from "../assets/navbar/close_btn.svg";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ru"); // Состояние для языка
  const [currency, setCurrency] = useState("usd"); // Состояние для валюты
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  }

  return (
    <nav className="bg-[#1A1A1A] h-[8vh] w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full flex justify-between items-center px-4 sm:px-0">
        <div className="flex items-center">
          <NavLink to="/"><img src={logo} alt="ingame" className="w-[190px] xl:w-[200px]" /></NavLink>
          <div className="hidden lg:flex text-white space-x-6">
            <NavLink className="flex items-center text-[22px]">
              Продукция <img src={vector} alt="vector" className="ml-1 w-[19px]" />
            </NavLink>
            <NavLink className="flex items-center text-[22px]">
              Услуги <img src={vector} alt="vector" className="ml-1 w-[19px]" />
            </NavLink>
            <NavLink className="flex items-center text-[22px]">
              O бренде
            </NavLink>
          </div>
        </div>

        <div className="text-white flex items-center space-x-4 cursor-pointer">
          <div className="hidden lg:flex space-x-4">
            <Link to="#" className="border border-white py-1 px-3 text-[18px]">Связаться</Link>
            <select className="bg-transparent" onChange={(e) => setLanguage(e.target.value)} value={language}>
              <option className="bg-[#0A0A0A]" value="ru">RU</option>
              <option className="bg-[#0A0A0A]" value="uz">UZ</option>
            </select>
            <select className="bg-transparent" onChange={(e) => setCurrency(e.target.value)} value={currency}>
              <option className="bg-[#0A0A0A]" value="usz">USZ</option>
              <option className="bg-[#0A0A0A]" value="usd">USD</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <img className="p-2" src={compareBtn} alt="compare" />
            <img className="p-2 transition-transform duration-300 transform hover:scale-110" src={searchBtn} alt="search" onClick={toggleSearch}/>
            <img className="p-2 hidden lg:block" src={korzinaBtn} alt="korzina" />
          </div>

          {/* Бургер-иконка */}
          <img className="lg:hidden w-[50px] p-2 transition-transform duration-300 transform hover:scale-110" src={modal_nav} alt="menu" onClick={toggleMenu} />
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`fixed top-0 right-0 min-h-screen w-[300px] bg-[#0F0F0F] shadow-lg transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <img
            src={closeBtn}
            alt="close"
            className="w-[30px] pr-[10px] py-[10px] cursor-pointer transition-transform duration-300 transform hover:scale-110"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex flex-col items-center space-y-6 text-white mt-4">
          <NavLink className="flex items-center justify-between text-[18px] border-b-2 border-[#252525] pb-3 w-[250px]">
            Продукция <img src={vector} alt="vector" className="w-[20px]" />
          </NavLink>
          <NavLink className="flex items-center justify-between text-[18px] border-b-2 border-[#252525] pb-3 w-[250px]">
            Услуги <img src={vector} alt="vector" className="w-[20px]" />
          </NavLink>
          <NavLink className="flex items-center justify-between text-[18px] border-b-2 border-[#252525] pb-3 w-[250px]">
            O бренде
          </NavLink>

          <div className="lg:hidden flex items-center justify-evenly w-[200px]">
            <select className="bg-transparent w-[70px] text-center border border-white py-1" onChange={(e) => setLanguage(e.target.value)} value={language}>
              <option className="bg-[#0A0A0A]" value="ru">RU</option>
              <option className="bg-[#0A0A0A]" value="uz">UZ</option>
            </select>
            <select className="bg-transparent w-[70px] text-center border border-white py-1" onChange={(e) => setCurrency(e.target.value)} value={currency}>
              <option className="bg-[#0A0A0A]" value="usz">USZ</option>
              <option className="bg-[#0A0A0A]" value="usd">USD</option>
            </select>
          </div>
            <Link to="#" className="border-b border-white py-1 text-[18px]">Связаться</Link>
        </div>
      </div>
      {/* Search Panel */}
      <div className={`bg-[#D3176D] h-full transform transition-all duration-500 ease-in-out ${isSearchOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"} origin-top`}>
        <div className='container h-full m-auto pl-[25px] flex justify-start items-center px-[20px] cursor-pointer'>
          <input className='w-[656px] h-[32px] bg-[#1A1A1A] text-white p-[10px] focus:border-[#B3B3B3]' type="text" />
          <img src={searchBtnBlack} alt="search_black" className='px-[20px]'/>
          <img src={closeBtnBlack} alt="close_black" className='w-[70px] sm:w-[50px] md:w-[40px] transition-transform duration-300 transform hover:scale-110' onClick={toggleSearch}/>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
