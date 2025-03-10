import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import arrow from '../assets/aboutUs/arrow.svg';
import play from '../assets/aboutUs/playIcon.svg';
import { reviews } from "../api/front/review";

function AboutUs({ title, text }) {
  const [review, setReview] = useState([]);
  const [playingId, setPlayingId] = useState(null); // Храним ID активного видео

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await reviews();
      setReview(data);
    };
    fetchReviews();
  }, []);

  return (
    <section className="min-h-[87.3vh] py-[50px] bg-[#0f0f0f] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-[40px] text-center">
          <h3 className="text-[22px] sm:text-[30px] md:text-[40px] font-[600] px-4">
            {title}
          </h3>
          <p className="mt-[10px] mb-[16px] w-[300px] md:w-full px-2 text-[#959494] text-[16px] sm:text-[18px] md:text-[22px] font-[400]">
            {text}
          </p>
          <div className="w-[130px] border-[1.6px] border-[#d3176d]"></div>
        </div>
      </div>

      {/* Swiper */}
      <div className="relative pl-[50px] md:pl-[110px]">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={'auto'}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: null,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
        >
          {review.map((item, id) => {
            // Найдём картинку и видео в attachments
            const image = item.attachments.find(att => att.url.match(/\.(jpeg|jpg|png|webp)$/))?.url;
            const video = item.attachments.find(att => att.url.match(/\.(mp4|mov|avi|webm)$/))?.url;

            return (
              <SwiperSlide key={id} className="!w-[261px] overflow-visible">
                <div className="relative">
                  <p className="absolute top-0 px-[10px] font-bold py-[8px] bg-[#bd1863] rounded-t-[10px]">
                    {item.comment}
                  </p>

                  {/* Если активное видео - показываем его, иначе картинку */}
                  {playingId === id && video ? (
                    <video
                      className="h-[500px] w-full object-cover rounded-md"
                      src={video}
                      controls
                      autoPlay
                      onEnded={() => setPlayingId(null)} // Сброс после завершения
                      controlsList="nodownload"
                    />
                  ) : (
                    <img
                      src={image || " "}
                      alt="Review"
                      className="h-[500px] w-full object-cover rounded-md"
                    />
                  )}

                  <div className="absolute bottom-[20px] left-[20px] text-start">
                    <h5 className="text-[16px] font-[700]">{item.fullname}</h5>
                    <p className="text-[13px] mt-[4px] mb-[10px]">{item.profession}</p>

                    {video && playingId !== id && (
                      <button
                        onClick={() => setPlayingId(id)}
                        className="relative pr-[14px] font-orbitron font-[600] text-[16px] w-[80px] h-[30px] rounded-md bg-[#d3176d]"
                      >
                        Play
                        <img className="absolute right-[10px] bottom-[7px]" src={play} alt="play icon" />
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Кнопка "Next" */}
        <div className="bg-white p-[10px] rounded-full custom-next absolute z-20 bottom-[40%] right-[50px] transform -translate-y-1/2 cursor-pointer">
          <img src={arrow} alt="arrow icon" />
        </div>
      </div>

      {/* Пагинация */}
      <div className="custom-pagination mt-10 w-full flex justify-center "></div>

      <style jsx="true">{`
        .swiper-pagination {
          margin-bottom: 16px;
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
        }
      `}</style>
    </section>
  );
}

export default AboutUs;
