import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import spark from '../assets/banner/banner_spark.png'
import sparkMobile from '../assets/banner/banner_sparkMobile.png'
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
            <img className='absolute right-0 bottom-0 z-10 w-auto h-auto hidden min-[861px]:block' src={spark} alt="image" />
            <img src={sparkMobile} alt="spark" className='absolute top-[80px] w-full h-auto z-10 sm:hidden'/>
            <div className="container mt-[160px] flex justify-between lg:mt-[100px] md:mt-[20px] items-start max-[860px]:flex-col-reverse max-[860px]:items-center max-[860px]:mt-[10px]  relative z-20">
              <div className='max-[860px]:text-center px-3 mt-5'>
                <h1 className='text-[25px] font-bold font-orbitron md:text-[30px] lg:text-[40px] xl:text-[60px] pt-5 md:pt-0'>{slide.title}</h1>
                <p className='text-[16px] md:text-[17px] xl:text-[22px] tracking-wide py-4 px-4 md:px-0 font-orbitron'>{slide.description}</p>
                <p className='mb-[24px] font-[100] text-[22px] lg:text-[20px] md:text-[18px] max-[860px]:text-[19px] max-[570px]:text-[16px] hidden md:block'>{slide.subText}</p>
                <button className='w-[200px] h-[60px] text-[25px] font-[600] bg-cover bg-center lg:text-[22px] md:text-[20px]'
                  style={{ backgroundImage: `url(${btnOutline})` }}>Подробнее</button>
              </div>
              <div className='relative z-10 px-3 mt-5'>
                <img className="w-[290px] md:w-[400px] min-[861px]:w-[900px] lg:w-[550px]" src={slide.img} alt="PC image" />
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
