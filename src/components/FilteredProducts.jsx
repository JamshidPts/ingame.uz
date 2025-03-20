import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProducts } from '../api/front/products';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import korzinaBtn from "../assets/navbar/korzina_btn.svg";
import ProductSidebar from './Products/ProductSidebar';
import Navbar from './Navbar';
import Question from './Question';
import { CartContext } from '../context/CartContext';

function FilteredProducts() {
    const { t, i18n } = useTranslation();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart, selectedCurrency } = useContext(CartContext);
    const { categoryId } = useParams(); // Теперь используем categoryName вместо categoryId

    // Функция для конвертации цены
    const convertPrice = (price) => {
        if (!selectedCurrency) return price;
        return (price * selectedCurrency.conversions).toFixed(2);
    };

    // Функция для прокрутки страницы вверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Плавная прокрутка
        });
    };
    const categoryName = filteredProducts[0]?.category?.translations
        ?.find(t => t.locale === i18n.language)?.name || t("filteredProductsTitle");

    // Используем useEffect для прокрутки вверх при изменении categoryName
    useEffect(() => {
        scrollToTop();
    }, [categoryName]);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            try {
                setLoading(true);
                const params = {
                    p: 100 // Пример параметра
                };
                const data = await getProducts(params);
                // Фильтруем по названию категории
                const filtered = data.filter(product =>
                    product.category.id === parseInt(categoryId)
                );
                setFilteredProducts(filtered);
            } catch (error) {
                console.error("Ошибка загрузки продуктов:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFilteredProducts();
    }, [categoryId, i18n.language]);


    const getTranslation = (item, field) => {
        return item?.translations?.find(trans => trans.locale === i18n.language)?.[field] || item[field] || "";
    };

    return (
        <>
            <section className='pt-[140px] pb-[40px] min-h-[1100px] bg-[#1A1A1A] text-white relative'>
                <div className="container mx-auto px-4">
                    <Navbar />
                    {loading && <Loader />}
                    <div className='flex'>
                        <div className='w-[16%] hidden lg:block'>
                            <ProductSidebar />
                        </div>
                        <div className='w-[100%] pl-[0px] lg:pl-[40px] lg:w-[84%]'>
                            {/* Используем categoryName в заголовке */}
                            <h2 className='text-[40px] font-[600] mb-[30px]'>{categoryName}</h2>
                            <div className='flex flex-wrap justify-center xl:justify-start gap-[20px] mx-auto'>
                                {filteredProducts.map((item, id) => (
                                    <div className='relative w-[290px] min-h-[390px] bg-[#1e1e1e] p-[30px] flex flex-col justify-between' key={id}>
                                        <div className='flex justify-end'>
                                            {item.icon && <img className='cursor-pointer' src={item.icon} alt="Иконка" />}
                                        </div>
                                        <div className='text-center'>
                                            {item.images?.[0]?.url && (
                                                <img className='mb-[50px] w-[40%] mx-auto' src={item.images[0].url} alt={item.name} />
                                            )}
                                        </div>

                                        <div>
                                            <h3 className='text-[20px] font-[600] mb-[20px]'>{getTranslation(item, "name")}</h3>
                                            <p className='line-through text-[18px]'>{item.discount}</p>
                                            {/* Используем convertPrice для отображения цены */}
                                            <p className='text-[20px] text-[#D3176D] font-[600] mb-[20px]'>
                                                {t('price')}: {convertPrice(item.price)} {selectedCurrency?.currency}
                                            </p>
                                            <p className='text-[15px]'>{getTranslation(item, "description")}</p>
                                            <div className='flex items-center justify-end space-x-[20px] mt-[30px]'>
                                                <button
                                                    className='py-[4px] px-[18px] border-[1px] border-[#D3176D]'
                                                    onClick={() => addToCart({
                                                        id: item.id,
                                                        name: getTranslation(item, "name"),
                                                        description: getTranslation(item, "description"),
                                                        price: item.price,
                                                        image: item.images?.[0]?.url || "",
                                                    })}
                                                >
                                                    {t('buy')}
                                                </button>
                                                <Link to="/order">
                                                    <button className='py-[6px] px-[8px] border-[1px] border-[#D3176D]'>
                                                        <img src={korzinaBtn} alt="Добавить в корзину" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Question />
        </>
    );
}

export default FilteredProducts;
