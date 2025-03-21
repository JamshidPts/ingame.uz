import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import spark from '../assets/banner/banner_spark.png';
import sparkMobile from '../assets/banner/banner_sparkMobile.png';
import btnOutline from '../assets/banner/banner_btn.png';
import { banners } from '../api/front/banner';
import { useTranslation } from "react-i18next";
import Loader from './Loader'; // Импортируем Loader

function Banner() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true); // Устанавливаем состояние загрузки в true
        const data = await banners();
        setSlides(data);
      } catch (error) {
        console.error("Ошибка загрузки баннеров:", error);
      } finally {
        setLoading(false); // Устанавливаем состояние загрузки в false после завершения
      }
    };
    fetchBanners();
  }, [i18n.language]);

  // Прокрутка вверх при монтировании компонента
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  }, []);

  return (
    <div className="relative min-h-screen"> {/* Добавлен relative */}
      {loading && <Loader />} {/* Loader внутри компонента */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
        speed={600}
        loop
        className="w-full min-h-screen"
      >
        {slides.map((slide, id) => {
          const translation = slide.translations?.find((t) => t.locale === i18n.language) || slide;
          return (
            <SwiperSlide key={id}>
              <section className='relative bg-black text-white flex justify-center items-center min-h-screen overflow-hidden'>
                <img className='absolute right-0 bottom-0 z-10 w-auto h-auto hidden min-[861px]:block' src={spark} alt="image" />
                <div className="container mt-[160px] flex justify-between lg:mt-[100px] md:mt-[20px] items-center max-[860px]:flex-col-reverse max-[860px]:items-center max-[860px]:mt-[10px] relative z-20">
                  <div className='max-[860px]:text-center px-3 mt-5'>
                    <h1 className='text-[25px] font-bold font-orbitron md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] pt-5 md:pt-0'>{translation.name || "Без названия"}</h1>
                    <p className='text-[16px] md:text-[19px] sm:w-[550px] md:w-[350px] lg:w-full xl:text-[18px] 2xl:text-[22px] tracking-wide py-4 px-4 md:px-0 font-orbitron'>{translation.description || "Описание отсутствует"}</p>
                    <button className='w-[200px] h-[60px] text-[25px] font-[600] bg-cover bg-center lg:text-[22px] md:text-[20px]' style={{ backgroundImage: `url(${btnOutline})` }}>
                      <a href={slide.url} target='_blank'>{t('full')}</a>
                    </button>
                  </div>
                  <div className='relative z-10 px-3 mt-5'>
                    <img className="w-[290px] md:w-[400px] min-[861px]:w-[700px] lg:w-[550px]" src={slide.image.url} alt="PC image" />
                  </div>
                  <img src={sparkMobile} alt="spark" className='absolute top-0 w-full h-auto z-0 sm:hidden' />
                </div>
              </section>
            </SwiperSlide>
          );
        })}
        <style jsx="true">{`
        .swiper-pagination{
        margin-bottom:16px;
        }
        .swiper-pagination-bullet {
        background-color: #ffffff;
        border-radius: 0%;
        opacity: 0.8;
        width: 11px;
        height: 11px;
        margin-right: 12px !important;
        }
        .swiper-pagination-bullet-active {
        display: inline-block;
        width: 11px;
        height: 11px;
        background-color: #BD1863;
        }`}
        </style>
      </Swiper>
    </div>
  );
}

export default Banner;