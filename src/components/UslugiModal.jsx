import React from 'react';
import { useTranslation } from 'react-i18next';

function UslugiModal({ isOpen, onClose, service }) {
  if (!isOpen || !service || Object.keys(service).length === 0) return null;

  const { i18n } = useTranslation();

  const getTranslation = (field) => {
    return service?.translations?.find(trans => trans.locale === i18n.language)?.[field] || service[field] || "";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#0F0F0F] p-3 shadow-lg max-w-[400px] relative text-white rounded-lg">
        <button onClick={onClose} className="absolute top-0 right-0 w-[30px] h-[30px] bg-[#D3176D] text-white text-[16px] ">
          ✕
        </button>

        {service.image?.url && (
          <img src={service.image.url} alt="usluga" className="w-full h-[200px] object-cover rounded-md" />
        )}

        <h2 className="text-center text-[22px] font-bold mt-4 text-[#D3176D]">{getTranslation("name")}</h2>

        <p className="text-[14px] text-gray-300 mt-3 px-4">
          {getTranslation("description")}
        </p>

        <ul className="text-[12px] space-y-[10px] mt-[10px] list-disc text-[#ADADAD] px-4">
          {(getTranslation("services") || "").split(', ').map((serviceItem, index) => (
            <li key={index}>{serviceItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UslugiModal;
