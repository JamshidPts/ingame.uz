import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { getDesktops } from '../api/front/desktop';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

function OurPC() {
  const [desktop, setDesktop] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchDesktops = async () => {
      const data = await getDesktops();
      // console.log("Полученные данные:", data); // ✅ Проверяем в консоли
      setDesktop(Array.isArray(data) ? data : []); // ✅ Гарантируем, что это массив
    };
    fetchDesktops();
  }, [])

  const getTranslation = (item, field) => {
      return item?.translations?.find(trans => trans.locale === i18n.language)?.[field] || item[field] || "";
  };


  return (
    <section className="bg-[#1A1A1A] text-white pt-[40px] pb-[40px]">
      <div className="container mx-auto min-h-[80vh]">
        <h1 className="text-[40px] font-[600] mb-[40px] px-4">Наши ПК</h1>
        <div className='p-4 flex justify-between'>
          <Swiper modules={[Autoplay]}
          // autoplay={{ delay: 3000 }}
          speed={600}
          spaceBetween={20}
          loop
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
            {desktop.length > 0 ? (
              desktop.map((item) => (
                <SwiperSlide key={item.id} className="min-h-[400px] bg-[#1E1E1E] p-4">
                  <img src={item.image?.url} alt={item.name} className="mx-auto w-[350px] h-[200px] object-cover" />
                  <h3 className="text-[#d3176d] text-[20px] font-[600] mt-3">{getTranslation(item, "name")}</h3>
                  <p className="text-[14px] font-[500]">{getTranslation(item, "description")}</p>
                  <p className="text-right text-[16px] font-bold mt-1 line-through">Цена: {item.price} $</p>
                  <p className="text-right text-[14px] text-[#d3176d] mt-2">Скидка: {item.discount} $</p>
                  {item.attributes && item.attributes.length > 0 && (
                    <div className="mt-3 p-2 border border-gray-600 rounded">
                      <h4 className="text-[#d3176d] font-[600] mb-2">Характеристики:</h4>
                      <ul className="text-[14px]">
                        {item.attributes.map((attr) => (
                          <li key={attr.id} className="flex justify-between border-b border-gray-500 py-1">
                            <span className="text-gray-400">{getTranslation(attr, "name")}</span>
                            <span className="text-white">{attr.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {Array.isArray(item.desktop_fps) && item.desktop_fps.length > 0 && (
                    <div className="mt-3 p-2 border border-gray-600 rounded">
                      <p>Perfomance</p>
                      <ul>
                      {item.desktop_fps.map((fpsItem, id) => (
                        <li key={id} className='flex justify-between px-4'>
                          {fpsItem.game.name}
                          <ul>
                            {fpsItem.fps &&
                              Object.entries(fpsItem.fps).map(([resolution, fpsValue]) => (
                                <li key={resolution}>
                                  {resolution}: FPS: {fpsValue}
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                      </ul>
                    </div>
                  )}
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center text-gray-400">Загрузка данных...</p>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default OurPC