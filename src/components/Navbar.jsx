import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import i18next, { changeLanguage } from "../i18n";
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
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { getDesktopTypes } from '../api/front/desktopTypes';
import { CartContext } from "../context/CartContext";
import { fetchCurrencies } from "../api/front/currency";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState("ru");
  const [languages, setLanguages] = useState([]);
  const [types, setTypes] = useState([]);
  // const [currencies, setCurrencies] = useState([]);
  const { cart } = useContext(CartContext); // Достаем корзину из контекста
  const { currencies, selectedCurrency, setSelectedCurrency } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNoResults, setIsNoResults] = useState(false);

  // Подсчет общего количества товаров в корзине
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { t } = useTranslation();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery.length > 2) { // Минимальная длина запроса для поиска
      setIsLoading(true);
      setIsNoResults(false);
  
      axios.get(`https://ingame1.azeme.uz/api/user/search-products?q=${searchQuery}`)
        .then(response => {
          if (response.data.data.length > 0) {
            setSearchResults(response.data.data);
            setIsNoResults(false);
          } else {
            setSearchResults([]);
            setIsNoResults(true);
          }
        })
        .catch(error => {
          console.error("Ошибка при поиске товаров:", error);
          setSearchResults([]);
          setIsNoResults(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setSearchResults([]);
      setIsNoResults(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      changeLanguage(storedLanguage);
    }
    const fetchLanguages = async () => {
      try {
        const response = await axios.get("https://ingame1.azeme.uz/api/user/langs");
        // console.log("API Response:", response.data); // Проверяем структуру
        if (Array.isArray(response.data.data)) {
          setLanguages(response.data.data); // Берем массив из `data`
        } else {
          console.error("Некорректный формат API:", response.data);
          setLanguages([]); // Если API снова поменяется, не ломаем код
        }
      } catch (error) {
        console.error("Ошибка загрузки языков:", error);
        setLanguages([]);
      }
    };
    const fetchDesktopTypes = async () => {
      const data = await getDesktopTypes();
      setTypes(Array.isArray(data) ? data : []);
    };
    fetchLanguages();
    fetchDesktopTypes();
  }, []);

  const handleLanguageChange = async (event) => {
    const lang = event.target.value;
    setLanguage(lang);
    localStorage.setItem("language", lang); // Сохраняем в localStorage
    await changeLanguage(lang);
  };
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

  const modalToggle = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false)
  }

  return (
    <>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      <nav className="bg-[#1A1A1A] h-[10vh] w-full fixed top-0 left-0 z-30">
        <div className="container mx-auto h-full flex justify-between items-center px-4 xl:px-3">
          <div className="flex items-center gap-8 xl:pl-[20px] h-full cursor-pointer">
            <NavLink to="/">
              <img src={logo} alt="ingame" className="w-[140px] xl:w-[150px] p-2" />
            </NavLink>
            <div className="relative hidden lg:flex text-white space-x-8">
              <NavLink to="/products" className={({ isActive }) => `text-[22px] transition-all duration-300 ease-in-out active:scale-95 p-2 ${isActive ? "text-[#D3176D]" : ""}`}>
                {t('navbarProduct')}
              </NavLink>
              <img src={vector} alt="vector" className="absolute top-[32%] left-[99px] ml-2 w-[19px]" onClick={toggleProducts} />
              <NavLink to="/services" className={({ isActive }) => `text-[22px] transition-all duration-300 ease-in-out active:scale-95 p-2 ${isActive ? "text-[#D3176D]" : ""}`}>
                {t('navbarUsluga')}
              </NavLink>
              <NavLink to="/brand" className={({ isActive }) => `text-[22px] transition-all duration-300 ease-in-out active:scale-95 p-2 ${isActive ? "text-[#D3176D]" : ""}`}>
                {t('navbarBrand')}
              </NavLink>
            </div>
          </div>

          <div className="text-white flex items-center h-full lg:gap-3 cursor-pointer">
            <div className="hidden lg:flex gap-5">
              <button onClick={modalToggle} className="border border-white py-1 px-3 text-[18px] transition-all duration-300 ease-in-out hover:rounded active:scale-95">
                {t('navbarSvyaz')}
              </button>
              <select className="bg-[#1A1A1A]" onChange={handleLanguageChange} value={language}>
                {languages.length > 0 ? (
                  languages.map((lang) => (
                    <option key={lang.id} value={lang.locale}>
                      {lang.locale.toUpperCase()}
                    </option>
                  ))
                ) : (
                  <option value="ru"></option>
                )}
              </select>
              <select className="bg-[#1A1A1A]" onChange={(e) => {
                const newCurrency = currencies.find(c => c.currency === e.target.value);
                setSelectedCurrency(newCurrency);
                localStorage.setItem("selectedCurrency", JSON.stringify(newCurrency)); // Сохраняем валюту в localStorage
              }} value={selectedCurrency?.currency}>
                {currencies.map((cur) => (
                  <option key={cur.id} value={cur.currency}>{cur.currency}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center pr-2 relative">
              <img className="p-2 lg:flex transition-all duration-300 ease-in-out transform hover:scale-95 active:scale-105" onClick={toggleSearch} src={searchBtn} alt="" />
              <Link to="/order">
                <img
                  className="p-2 lg:flex transition-all duration-300 ease-in-out transform hover:scale-95 active:scale-105"
                  src={korzinaBtn}
                  alt="korzina"
                />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
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
            <NavLink to="/products" className={({ isActive }) => `text-[18px] border-b border-[#252525] transition-all duration-300 ease-in-out active:scale-95 pb-3 w-[250px] ${isActive ? "text-[#D3176D]" : ""}`}>
              {t('navbarProduct')}
            </NavLink>
            <div className={`text-white z-50 transform transition-[opacity,transform] duration-500 ease-in-out ${isMobileMenu ? "opacity-100 overflow-hidden" : "opacity-0 hidden"
              } origin-top`}>
              <div className="py-2 flex flex-col justify-between">
                {types.map((item, id) => (
                  <Link to={`/desktops/${item.id}`} key={id} className="flex justify-between gap-20">
                    <p className="text-[20px] font-bold p-2">{item.name}</p>
                    <img src={vectorProduct} alt="vector" className="w-[15px]" />
                  </Link>
                ))}
              </div>
            </div>
            <img src={vector} alt="vector" className="absolute top-[-7%] left-[80%] ml-2 w-[19px]" onClick={mobileToggleProducts} />
            <NavLink to="/services" className={({ isActive }) => `text-[18px] border-b border-[#252525] transition-all duration-300 ease-in-out active:scale-95 pb-3 w-[250px] ${isActive ? "text-[#D3176D]" : ""}`}>
              {t('navbarUsluga')}
            </NavLink>
            <NavLink to="/brand" className={({ isActive }) => `text-[18px] border-b border-[#252525] transition-all duration-300 ease-in-out active:scale-95 pb-3 w-[250px] ${isActive ? "text-[#D3176D]" : ""}`}>
              {t('navbarBrand')}
            </NavLink>

            {/* Мобилный language and currency */}
            <div className="lg:hidden flex items-center justify-evenly w-[200px]">
              <select className="bg-[#0A0A0A] w-[70px] text-center border border-white py-1" onChange={handleLanguageChange} value={language}>
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.locale} className="bg-[#0A0A0A]">
                    {lang.locale.toUpperCase()}
                  </option>
                ))}
              </select>
              <select className="bg-[#1A1A1A]" onChange={(e) => {
                const newCurrency = currencies.find(c => c.currency === e.target.value);
                setSelectedCurrency(newCurrency);
                localStorage.setItem("selectedCurrency", JSON.stringify(newCurrency)); // Сохраняем валюту в localStorage
              }} value={selectedCurrency?.currency}>
                {currencies.map((cur) => (
                  <option key={cur.id} value={cur.currency}>{cur.currency}</option>
                ))}
              </select>
            </div>
            <button onClick={modalToggle} className="border-b border-white py-1 text-[18px] transition-all duration-300 ease-in-out active:scale-95">
              {t('navbarSvyaz')}
            </button>
          </div>
        </div>

        {/* Поиск панель*/}
        <div
          className={`bg-[#D3176D] h-[60px] absolute w-full z-50 top-full transform transition-all duration-500 ease-in-out ${
            isSearchOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}
        >
          <div className="container h-full m-auto pl-[25px] flex justify-start items-center pr-[20px] cursor-pointer">
              <input
                className="w-[500px] h-[32px] bg-[#1A1A1A] text-white p-[10px] focus:border-[#B3B3B3]"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="px-[10px]">
                <img src={searchBtnBlack} alt="search_black" className="w-[40px] sm:w-[30px] md:w-[25px] transition-transform duration-300 transform hover:scale-95 active:scale-100"/>
              </button>
              <img src={closeBtnBlack} alt="close_black" className="w-[60px] sm:w-[50px] md:w-[35px] transition-transform duration-300 transform hover:scale-95 active:scale-100" onClick={toggleSearch} />
          </div>

          {/* Блок с результатами поиска */}
          {isSearchOpen && (
            <div className="absolute top-[60px] left-0 w-full bg-[#1A1A1A] text-white z-50">
              {isLoading ? (
                <div className="p-4">Загрузка...</div>
              ) : isNoResults ? (
                <div className="p-4">Товар не найден</div>
              ) : (
                <div className="p-4">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      to={`/searched/${encodeURIComponent(product.name)}`} // Передаем имя товара
                      className="block p-2 hover:bg-[#D3176D]"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Продукт панель */}
        <div className={`bg-[#0A0A0A] transform text-white transition-all duration-500 ease-in-out ${isProductsOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}>
          <div className="container mx-auto px-20 py-10 flex flex-col gap-4">
            {types.map((item, id) => (
              <Link to={`/desktops/${item.id}`} key={id} className="flex justify-between w-[205px] gap-20">
                <p className="text-[20px] font-bold p-2">{item.name}</p>
                <img src={vectorProduct} alt="vector" className="w-[15px]" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
