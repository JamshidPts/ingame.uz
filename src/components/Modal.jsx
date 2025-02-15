import React, { useState } from 'react'

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [phone, setPhone] = useState("");

    const formatPhoneNumber = (value) => {
        // Удаляем все символы, кроме цифр
        const digits = value.replace(/\D/g, "");
    
        // Ограничиваем длину номера до 12 цифр (без учета "+998")
        let formatted = "+998";
    
        if (digits.length > 3) formatted += " " + digits.slice(3, 5);
        if (digits.length > 5) formatted += " " + digits.slice(5, 8);
        if (digits.length > 8) formatted += " " + digits.slice(8, 10);
        if (digits.length > 10) formatted += " " + digits.slice(10, 12);
    
        return formatted;
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setPhone(formatPhoneNumber(value));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#0F0F0F] p-10 shadow-lg max-w-[350px] sm:max-w-[500px] relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"> ✕ </button>
                <h5 className="text-white text-center text-[20px] sm:text-[25px] font-bold"><span className="text-[#D3176D]">Оставьте заявку</span> и наш менеджер свяжется с Вами</h5>
                <form action="" className="text-white flex flex-col max-w-[250px] sm:max-w-[300px] mx-auto py-5">
                    <label htmlFor="name" className="font-semibold py-2">Как Зовут?</label>
                    <input type="name" id="name" placeholder="Ф.И.О" className="p-2 border border-[#D0D5DD] focus:rounded focus:outline-none text-[#444444] font-semibold"/>
                    <label htmlFor="phone" className="font-semibold py-2">Номер телефона</label>
                    <input type="text" value={phone} onChange={handleChange} maxLength="17" id="phone" placeholder="+998" className="p-2 border border-[#D0D5DD] focus:rounded focus:outline-none text-[#444444] font-semibold"/>
                    <input type="submit" className="bg-[#D3176D] cursor-pointer mt-5 py-2 text-[20px] font-bold active:bg-[#af316a]"/>
                </form>
                <p className="text-[#D3176D] text-center">Либо свяжитесь с нами в <a href="" className="text-white">Telegram</a></p>
            </div>
        </div>
    )
}

export default Modal