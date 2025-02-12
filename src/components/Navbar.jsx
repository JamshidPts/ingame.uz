import React, { useState } from "react";
import logo from "../assets/navbar/logo_navbar.svg";
import vector from "../assets/navbar/navbar_icon.svg";
import searchBtn from "../assets/navbar/search_btn.svg";
import searchBtnBlack from "../assets/navbar/search_btn_black.svg";
import korzinaBtn from "../assets/navbar/korzina_btn.svg";
import compareBtn from "../assets/navbar/compare_btn.svg";
import modal_nav from "../assets/navbar/mobile_modal.svg";
import closeBtn from "../assets/navbar/close_modal.svg";
import closeBtnBlack from "../assets/navbar/close_btn.svg";
import vectorProduct from "../assets/navbar/vector_products.svg"
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ru"); // Состояние для языка
  const [currency, setCurrency] = useState("usd"); // Состояние для валюты
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
    setIsMobileMenu(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
    setIsProductsOpen(false)
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
    setIsSearchOpen(false)
  }

  const mobileToggleProducts = () => {
    setIsMobileMenu(!isMobileMenu);
  }

  return (
    <>
      <nav className="bg-[#1A1A1A] h-[10vh] w-full fixed top-0 left-0 z-50">
        <div className="container mx-auto h-full flex justify-between items-center px-4 xl:px-3">
          <div className="flex items-center gap-8 xl:pl-[20px] h-full cursor-pointer">
            <NavLink to="/">
              <img src={logo} alt="ingame" className="w-[140px] xl:w-[150px] p-2" />
            </NavLink>
            <div className="relative hidden lg:flex text-white space-x-8">
              <NavLink to="/products" className={({isActive}) => `text-[22px] transition-all duration-300 ease-in-out active:scale-95 p-2 ${isActive ? "text-[#D3176D]" : ""}`}>
                Продукция
              </NavLink>
              <img src={vector} alt="vector" className="absolute top-[32%] left-[24%] ml-2 w-[19px]" onClick={toggleProducts} />
              <NavLink to="/services" className={({isActive}) => `text-[22px] transition-all duration-300 ease-in-out active:scale-95 p-2 ${isActive ? "text-[#D3176D]" : ""}`}>
                Услуги
              </NavLink>
              <NavLink to="/brand" className={({isActive}) => `text-[22px] transition-all duration-300 ease-in-out active:scale-95 p-2 ${isActive ? "text-[#D3176D]" : ""}`}>
                O бренде
              </NavLink>
            </div>
          </div>

          <div className="text-white flex items-center h-full lg:gap-3 cursor-pointer">
            <div className="hidden lg:flex gap-5">
              <button className="border border-white py-1 px-3 text-[18px] transition-all duration-300 ease-in-out hover:rounded active:scale-95">
                Связаться
              </button>
              <select
                className="bg-[#1A1A1A] font-orbitron "
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
              >
                <option className="bg-[#0A0A0A]" value="ru">
                  RU
                </option>
                <option className="bg-[#0A0A0A]" value="uz">
                  UZ
                </option>
              </select>
              <select
                className="bg-[#1A1A1A] font-orbitron "
                onChange={(e) => setCurrency(e.target.value)}
                value={currency}
              >
                <option className="bg-[#0A0A0A]" value="usz">
                  USZ
                </option>
                <option className="bg-[#0A0A0A]" value="usd">
                  USD
                </option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/compare">
                <img className="p-2 transition-all duration-300 ease-in-out transform hover:scale-95 active:scale-105" src={compareBtn} alt="compare" />
              </Link>
              <img className="p-2 transition-all duration-300 ease-in-out transform hover:scale-95 active:scale-105" src={searchBtn} alt="search" onClick={toggleSearch} />
              <Link to="/korzina">
                <img className="p-2 hidden lg:flex transition-all duration-300 ease-in-out transform hover:scale-95 active:scale-105" src={korzinaBtn} alt="korzina" />
              </Link>
            </div>

            {/* Бургер-иконка */}
            <img className="lg:hidden w-[50px] p-2 transition-transform duration-300 transform hover:scale-95 active:scale-105" src={modal_nav} alt="menu" onClick={toggleMenu} />
          </div>
        </div>

        {/* Мобильное меню */}
        <div
          className={`fixed top-0 right-0 min-h-screen w-[300px] bg-[#0F0F0F] shadow-lg transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-end p-4">
            <img src={closeBtn} alt="close" className="w-[30px] pr-[10px] py-[10px] cursor-pointer transition-transform duration-300 transform hover:scale-95 active:scale-105" onClick={toggleMenu} />
          </div>
          <div className="flex flex-col items-center relative font-medium space-y-6 text-white mt-4 cursor-pointer">
            <NavLink to="/products" className={({isActive}) => `text-[18px] border-b border-[#252525] transition-all duration-300 ease-in-out active:scale-95 pb-3 w-[250px] ${isActive ? "text-[#D3176D]" : ""}`}>
              Продукция
            </NavLink>
            <img src={vector} alt="vector" className="absolute top-[-7%] left-[80%] ml-2 w-[19px]" onClick={mobileToggleProducts} />
            <NavLink to="/services" className={({isActive}) => `text-[18px] border-b border-[#252525] transition-all duration-300 ease-in-out active:scale-95 pb-3 w-[250px] ${isActive ? "text-[#D3176D]" : ""}`}>
              Услуги
            </NavLink>
            <NavLink to="/brand" className={({isActive}) => `text-[18px] border-b border-[#252525] transition-all duration-300 ease-in-out active:scale-95 pb-3 w-[250px] ${isActive ? "text-[#D3176D]" : ""}`}>
              O бренде
            </NavLink>

            {/* Мобилный language and currency */}
            <div className="lg:hidden flex items-center justify-evenly w-[200px]">
              <select
                className="bg-[#0A0A0A] w-[70px] text-center border border-white py-1"
                onChange={(e) => setLanguage(e.target.value)}
                value={language}
              >
                <option className="bg-[#0A0A0A]" value="ru">
                  RU
                </option>
                <option className="bg-[#0A0A0A]" value="uz">
                  UZ
                </option>
              </select>
              <select
                className="bg-[#0A0A0A] w-[70px] text-center border border-white py-1"
                onChange={(e) => setCurrency(e.target.value)}
                value={currency}
              >
                <option className="bg-[#0A0A0A]" value="usz">
                  USZ
                </option>
                <option className="bg-[#0A0A0A]" value="usd">
                  USD
                </option>
              </select>
            </div>
            <button className="border-b border-white py-1 text-[18px] transition-all duration-300 ease-in-out active:scale-95">
              Связаться
            </button>
          </div>
        </div>

        {/* Поиск панель*/}
        <div
          className={`bg-[#D3176D] h-[60px] absolute w-full z-50 top-full transform transition-all duration-500 ease-in-out ${isSearchOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            } origin-top`}
        >
          <div className="container h-full m-auto pl-[25px] flex justify-start items-center pr-[20px] cursor-pointer">
            <input
              className="w-[656px] h-[32px] bg-[#1A1A1A] text-white p-[10px] focus:border-[#B3B3B3]"
              type="text"
            />
            <img src={searchBtnBlack} alt="search_black" className="px-[20px]" />
            <img src={closeBtnBlack} alt="close_black" className="w-[60px] sm:w-[50px] md:w-[35px] transition-transform duration-300 transform hover:scale-95 active:scale-100" onClick={toggleSearch} />
          </div>
        </div>

        {/* Продукт панель */}
        <div className={`bg-[#0A0A0A] h-[370px] transform text-white transition-all duration-500 ease-in-out ${isProductsOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}>
          <div className="container mx-auto px-20 py-10 flex flex-col gap-4">
            <Link className="flex items-center gap-24">
              <p className="flex flex-col text-[20px]">Игровые ПК<span className="text-[#9D9D9D] text-[18px]">Лучшее времяпрепровождение</span></p>
              <img src={vectorProduct} alt="vector" className="w-[15px]" />
            </Link>
            <Link className="flex items-center gap-24">
              <p className="flex flex-col text-[20px]">Ноутбуки<span className="text-[#9D9D9D] text-[18px]">Лучшее времяпрепровождение</span></p>
              <img src={vectorProduct} alt="vector" className="w-[15px]" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
