import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import 'swiper/css';
import { useTranslation } from 'react-i18next';
import { getBlogs } from '../api/front/blog';
function News() {
    const [news, setNews] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchBlogs = async () => {
            const data = await getBlogs();
            const formattedData = data.map(item => ({
                ...item,
                created_at: new Date(item.created_at).toISOString().split("T")[0],
                image: item.attachments?.find(att => att.url.match(/\.(jpeg|jpg|png|webp)$/))?.url || "",
            }));

            setNews(formattedData);
        };

        fetchBlogs();
    }, [i18n.language]);

    const getTranslation = (item, field) => {
        return item?.translations?.find(trans => trans.locale === i18n.language)?.[field] || item[field] || "";
    };

    return (
        <section className="bg-[#1A1A1A] text-white py-[50px]">
            <div className="container mx-auto min-h-[68vh]">
                <h2 className="text-[40px] font-[600] mb-[40px] px-4">Блог и новости</h2>
                {/* <div className="flex justify-center lg:justify-between items-center"> */}
                <Swiper
                    modules={[FreeMode, Autoplay]}
                    autoplay={{ delay: 4000 }}
                    speed={600}
                    loop
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1.5 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    className='p-2'>
                    {news.map((item, id) => (
                        <SwiperSlide key={id}>
                            <div className="p-4">
                                <div className="relative w-[350px] sm:w-[400px] mx-auto">
                                    <img
                                        src={item.image || "https://via.placeholder.com/400x300"}
                                        alt="Preview"
                                        className="w-[400px] h-[290.14px] rounded-t-md"
                                    />
                                    <p className="absolute top-[93%] left-[8%] font-bold text-[18px] bg-[#D3176D] px-2 py-1 border">
                                        {item.created_at}
                                    </p>
                                </div>
                                <div className="bg-[#0F0F0F] px-4 py-4 min-h-[220px] w-[350px] sm:w-[400px] mx-auto">
                                    <h5 className="pt-8 font-bold text-[22px] pb-1 pr-2 break-words overflow-y-auto">{getTranslation(item, "name")}</h5>
                                    <p className="text-[14px] font-medium pb-3 pr-2 break-words overflow-y-auto min-h-[80px] max-h-[85px]">{getTranslation(item, "description")}</p>
                                    <Link to={item.video_url || "#"} target="_blank" className="text-[#9A9A9A] border-b border-b-[#9A9A9A] my-3">
                                        Читать дальше
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* </div> */}
            </div>
        </section>
    );
}

export default News;
