import React, { useState } from 'react'
import { zayavka } from '../api/front/zayavka';

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

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
    const handlePhoneChange = (e) => {
        setPhone(formatPhoneNumber(e.target.value));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            await zayavka(fullname, phone);
            setSuccess("Заявка успешно отправлена!");
            setFullname("");
            setPhone("+998");
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#0F0F0F] p-10 shadow-lg max-w-[350px] sm:max-w-[500px] relative">
                <button onClick={onClose} className="absolute top-2 right-[5%] text-[25px] transition-all duration-300 ease-in-out text-white hover:text-[#D3176D]"> ✕ </button>
                <h5 className="text-white text-center text-[20px] sm:text-[25px] font-bold"><span className="text-[#D3176D]">Оставьте заявку</span> и наш менеджер свяжется с Вами</h5>
                <form onSubmit={handleSubmit} action="" className="text-white flex flex-col max-w-[250px] sm:max-w-[300px] mx-auto py-5">
                    <label htmlFor="name" className="font-semibold py-2">Как Зовут?</label>
                    <input required type="name" id="name" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Ф.И.О" className="p-2 border border-[#D0D5DD] focus:rounded focus:outline-none text-[#444444] font-semibold"/>
                    <label htmlFor="phone" className="font-semibold py-2">Номер телефона</label>
                    <input required type="text" value={phone} onChange={handlePhoneChange} maxLength="17" id="phone" placeholder="+998" className="p-2 border border-[#D0D5DD] focus:rounded focus:outline-none text-[#444444] font-semibold"/>
                    <button type="submit" className="bg-[#D3176D] cursor-pointer mt-5 py-2 text-[20px] font-bold active:bg-[#af316a]" disabled={loading}>
                        {loading ? "Отправка..." : "Отправить"}
                    </button>
                </form>
                {error && <p className="text-red-500 text-center font-semibold">{error}</p>}
                {success && <p className="text-green-500 text-center font-semibold">{success}</p>}
                <p className="text-[#D3176D] text-center font-bold text-[18px] sm:text-[22px] max-w-[250px] sm:max-w-[300px] mx-auto">Либо свяжитесь с нами в <a href="" className="text-white border-b border-b-white ">Telegram</a></p>
            </div>
        </div>
    )
}

export default Modal