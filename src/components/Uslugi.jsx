import React, { useEffect, useState } from 'react';
import { getUslugi } from '../api/front/uslugi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { useTranslation } from 'react-i18next';
import UslugiModal from './UslugiModal';

function Uslugi() {
  const { t, i18n } = useTranslation();
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getUslugi();
        setServices(data);
      } catch (error) {
        console.error("Ошибка загрузки услуг:", error);
      }
    };
    fetchServices();
  }, [i18n.language]);

  const getTranslation = (item, field) => {
    return item?.translations?.find(trans => trans.locale === i18n.language)?.[field] || item[field] || "";
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section className="bg-[#1A1A1A] text-white py-[50px]">
      <div className="container mx-auto min-h-[70vh]">
        <h2 className="text-[40px] font-[600] mb-[40px] px-4">{t('navbarUsluga')}</h2>
        <Swiper
          modules={[FreeMode, Autoplay]}
          autoplay={{ delay: 4000 }}
          speed={600}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="p-2 gap-10"
        >
          {services.map((item) => (
            <SwiperSlide key={item.id || Math.random()}>
              <div className="w-[300px] min-h-[460px] bg-[#1E1E1E] mx-auto rounded shadow-md">
                <img src={item.image?.url || ""} alt="usluga" className="w-full h-[200px] object-cover rounded-t-md" />
                <div className="p-4">
                  <p className="text-[#D3176D] text-[20px] font-semibold break-words overflow-hidden max-h-[46px] py-2">
                    {getTranslation(item, "name")}
                  </p>
                  <p className="font-bold font-mono break-words overflow-hidden max-h-[40px] py-2">
                    {getTranslation(item, "type")}
                  </p>
                  <p className="text-[14px] border-b border-b-[#D9D9D9] border-opacity-20 break-words overflow-hidden max-h-[60px] py-2">
                    {getTranslation(item, "description")}
                  </p>
                  <ul className="py-4 px-2 list-disc list-inside overflow-y-hidden max-h-[90px]">
                    {(getTranslation(item, "services") || "").split(', ').map((serviceItem, index) => (
                      <li key={index}>{serviceItem}</li>
                    ))}
                  </ul>

                  <div className="flex justify-end px-2 pt-5">
                    <button
                      onClick={() => openModal(item)}
                      className="border-2 border-white px-5 py-1 rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-black">
                      {t('full')}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isModalOpen && selectedService && (
        <UslugiModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} service={selectedService} />
      )}
    </section>
  );
}

export default Uslugi;
