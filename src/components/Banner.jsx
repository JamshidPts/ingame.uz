import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import spark from '../assets/banner/banner_spark.png'
import btnOutline from '../assets/banner/banner_btn.png';
import { slides } from '../data/BannerSlider';

function Banner() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 4000 }}
      speed={600}
      loop
      className="w-full h-screen"
    >
      {slides.map((slide, id) => (
        <SwiperSlide key={id}>
          <section className='relative bg-black text-white flex justify-center items-center h-screen overflow-hidden'>
            <img className='absolute right-0 bottom-0 z-10 w-auto h-auto' src={spark} alt="image" />

            <div className="container mt-[160px] flex justify-between items-start relative z-20">
              <div>
                <h1 className='text-[60px] font-[600]'>{slide.title}</h1>
                <p className='mb-[30px] font-[100] text-[22px] w-[630px]'>{slide.description}</p>
                <p className='mb-[24px] font-[100] text-[22px]'>{slide.subText}</p>
                <button className='w-[200px] h-[60px] text-[25px] font-[600] bg-cover bg-center'
                  style={{ backgroundImage: `url(${btnOutline})` }}>Подробнее</button>
              </div>
              <div className='relative z-20'>
                <img className='max-w-[500px]' src={slide.img} alt="PC image" />
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
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
  )
}

export default Banner
