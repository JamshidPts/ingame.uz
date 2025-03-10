import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../api/front/blog";

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            const data = await blogs();
            const formattedData = data.map(item => ({
                ...item,
                created_at: new Date(item.created_at).toISOString().split("T")[0],
                image: item.attachments?.find(att => att.url.match(/\.(jpeg|jpg|png|webp)$/))?.url || "",
            }));
            setNews(formattedData);
        };
        fetchBlog();
    }, []);

    return (
        <section className="bg-[#1A1A1A] text-white py-[50px]">
            <div className="container mx-auto min-h-[68vh]">
                <h2 className="text-[40px] font-[600] mb-[40px] px-4">Блог и новости</h2>
                <div className="flex justify-center lg:justify-between flex-wrap items-center">
                    {news.map((item, id) => (
                        <div key={id} className="py-4">
                            <div className="relative w-[350px] sm:w-[400px]">
                                <img
                                    src={item.image || "https://via.placeholder.com/400x300"}
                                    alt="Preview"
                                    className="w-[400px] h-[290.14px] rounded-md"
                                />
                                <p className="absolute top-[93%] left-[8%] font-bold text-[18px] bg-[#D3176D] px-2 py-1 border">
                                    {item.created_at}
                                </p>
                            </div>
                            <div className="bg-[#0F0F0F] px-4 py-4 min-h-[250px] w-[350px] sm:w-[400px]">
                                <h5 className="pt-8 font-bold text-[22px] pb-1 pr-2 break-words overflow-y-auto">{item.name}</h5>
                                <p className="text-[14px] font-medium pb-2 pr-2 break-words overflow-y-auto min-h-[55px] max-h-[104px]">{item.description}</p>
                                <Link to={item.video_url || "#"} target="_blank" className="text-[#9A9A9A] border-b border-b-[#9A9A9A] my-3">
                                    Читать дальше
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default News;
