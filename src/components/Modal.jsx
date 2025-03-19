import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { zayavka } from '../api/front/zayavka';
import { useTranslation } from 'react-i18next';

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("+998");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { t } = useTranslation();

    const handlePhoneChange = (e) => {
        const digits = e.target.value.replace(/\D/g, "").slice(0, 12);
        setPhone("+998 " + digits.slice(3, 5) + " " + digits.slice(5, 8) + " " + digits.slice(8, 10) + " " + digits.slice(10, 12));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            await zayavka(fullname, phone);
            setSuccess(t("ModalSuccess"));
            setFullname("");
            setPhone("+998");
        } catch (err) {
            setError(err.message || t("ModalError"));
        } finally {
            setLoading(false);
        }
    };

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#0F0F0F] p-10 shadow-lg max-w-[350px] sm:max-w-[500px] relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-[25px] transition-all duration-300 ease-in-out text-white hover:text-[#D3176D]">✕</button>
                <h5 className="text-white text-center text-[20px] sm:text-[25px] font-bold">
                    <span className="text-[#D3176D]">{t("ModalTitle")}</span> {t("ModalSubtitle")}
                </h5>
                <form onSubmit={handleSubmit} className="text-white flex flex-col max-w-[250px] sm:max-w-[300px] mx-auto py-5">
                    <label htmlFor="name" className="font-semibold py-2">{t("ModalName")}</label>
                    <input required type="text" id="name" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder={t('fio')} className="p-2 border border-[#D0D5DD] text-[#444444] font-semibold" />
                    <label htmlFor="phone" className="font-semibold py-2">{t("ModalNumber")}</label>
                    <input required type="text" value={phone} onChange={handlePhoneChange} maxLength="17" id="phone" className="p-2 border border-[#D0D5DD] text-[#444444] font-semibold" />
                    <button type="submit" className="bg-[#D3176D] cursor-pointer mt-5 py-2 text-[20px] font-bold active:bg-[#af316a]" disabled={loading}>
                        {loading ? t("ModalSending") : t("ModalBtn")}
                    </button>
                </form>
                {error && <p className="text-red-500 text-center font-semibold">{error}</p>}
                {success && <p className="text-green-500 text-center font-semibold">{success}</p>}
                <p className="text-[#D3176D] text-center font-bold text-[18px] sm:text-[22px] mx-auto">
                    {t("ModalLink")} <a href="#" className="text-white border-b border-b-white">Telegram</a>
                </p>
            </div>
        </div>,
        document.body
    );
}

export default Modal;
