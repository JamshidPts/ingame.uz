import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import korzinaBtn from "../assets/navbar/korzina_btn.svg";
import { getNewProducts } from '../api/front/products';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Novinkiy() {
    const { t, i18n } = useTranslation();
    const [product, setProduct] = useState([]);
    const { addToCart } = useContext(CartContext);
    const { selectedCurrency } = useContext(CartContext);
    
    const convertPrice = (price) => {
        if (!selectedCurrency) return price;
        return (price * selectedCurrency.conversions).toFixed(2);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getNewProducts();
                console.log(data);
    
                const filteredProducts = data.reduce((acc, status) => {
                    const isNovinkaOrYangi = status.translations?.some(trans =>
                        trans.name === "новинка" || trans.name === "yangi"
                    );
    
                    if (isNovinkaOrYangi && status.products) {
                        status.products.forEach(product => {
                            if (!acc.some(p => p.id === product.id)) {
                                acc.push(product);
                            }
                        });
                    }
    
                    return acc;
                }, []);
    
                setProduct(filteredProducts);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, []);

    const getTranslation = (item, field) => {
        return item?.translations?.find(trans => trans.locale === i18n.language)?.[field] || item[field] || "";
    };

    return (
        <section className='bg-[#1A1A1A] text-white py-[50px]'>
            <div className='container mx-auto min-h-[67vh]'>
                <h2 className='text-[40px] font-[600] mb-[40px] px-4'>{t('NovinkiTitle')}</h2>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className='p-2'>
                    {product.map((item, id) => (
                        <SwiperSlide key={id} className='py-6'>
                            <div className='min-h-[500px] w-[280px] md:w-[280px] lg:w-[300px] 2xl:w-[320px] mx-auto px-5 py-10 bg-[#1E1E1E] relative'>
                                <div className='m-auto relative'>
                                    <img src={item.images?.url || "default-image-url"} alt="stul" className='relative z-[1] w-[100px] h-[180px] mx-auto lg:h-[230px] lg:w-[150px] object-contain' />
                                    <span className="absolute inset-0 m-auto z-0 shadow-custom-white bg-white-transparent w-[20px] h-[20px] rounded-[10px]"></span>
                                </div>
                                <p className='text-[22px] font-bold py-[15px]'>{getTranslation(item, "name")}</p>
                                <p className="text-white text-xl font-bold">{t('price')}: {convertPrice(item.price)} {selectedCurrency?.currency}</p>
                                <p className='py-4 font-light'>{getTranslation(item, "description")}</p>
                                <div className='flex items-center justify-end gap-3 cursor-pointer'>
                                    <button className='text-[18px] active:bg-[#D3176D] hover:bg-[#D3176D] transition-transform duration-300 transform hover:scale-110 active:scale-100 font-bold px-4 py-2 border border-[#D3176D]'
                                        onClick={() => addToCart({
                                            id: item.id,
                                            name: getTranslation(item, "name"),
                                            description: getTranslation(item, "description"),
                                            price: item.price,
                                            image: item.images?.[0]?.url || "",
                                        })} > {t('buy')}
                                    </button>

                                    <Link to="/order">
                                        <img
                                            src={korzinaBtn}
                                            alt="korzina"
                                            className='border border-white p-2 transition-transform duration-300 transform hover:scale-110 active:scale-100'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Novinkiy;
