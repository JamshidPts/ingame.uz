import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import korzinaBtn from "../assets/navbar/korzina_btn.svg";
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import Question from './Question';
import Navbar from './Navbar';

function Searched() {
    const { t } = useTranslation();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart, selectedCurrency } = useContext(CartContext);
    const { name } = useParams(); // Используем name из URL

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);

                // Загружаем все товары с пагинацией (1000 товаров)
                const response = await axios.get('https://ingame1.azeme.uz/api/user/products?p=100000');
                const products = response.data.data; // Предполагаем, что товары находятся в поле `data`

                // Ищем товар по имени
                const foundProduct = products.find(
                    (product) => product.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
                );

                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setError("Товар не найден");
                }
            } catch (error) {
                console.error("Ошибка загрузки продукта:", error);
                setError("Произошла ошибка при загрузке товара");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [name]);

    const convertPrice = (price) => {
        if (!selectedCurrency) return price;
        return (price * selectedCurrency.conversions).toFixed(2);
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div className="pt-[140px] pb-[40px] min-h-[80vh] bg-[#1A1A1A] text-white relative">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[40px] font-[600] mb-[30px]">{error}</h2>
                    </div>
                </div>
                <Question />
            </>
        );
    }

    if (!product) {
        return (
            <>
                <Navbar />
                <div className="pt-[140px] pb-[40px] min-h-[80vh] bg-[#1A1A1A] text-white relative">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[40px] font-[600] mb-[30px]">Товар не найден</h2>
                    </div>
                </div>
                <Question />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="pt-[140px] pb-[40px] min-h-[80vh] bg-[#1A1A1A] text-white relative">
                <div className="container mx-auto px-4">
                    <h2 className="text-[40px] font-[600] mb-[30px]">{product.name}</h2>
                    <div className="flex flex-wrap justify-center xl:justify-start gap-[20px] mx-auto">
                        <div className="relative w-[290px] min-h-[390px] bg-[#1e1e1e] p-[30px] flex flex-col justify-between">
                            <div className="flex justify-end">
                                {product.icon && <img className="cursor-pointer" src={product.icon} alt="Иконка" />}
                            </div>
                            <div className="text-center">
                                {product.images?.[0]?.url && (
                                    <img className="mb-[50px] w-[40%] mx-auto" src={product.images[0].url} alt={product.name} />
                                )}
                            </div>
                            <div>
                                <h3 className="text-[20px] font-[600] mb-[20px]">{product.name}</h3>
                                <p className="line-through text-[18px]">{product.discount}</p>
                                <p className="text-[20px] text-[#D3176D] font-[600] mb-[20px]">
                                    {t('price')}: {convertPrice(product.price)} {selectedCurrency?.currency}
                                </p>
                                <p className="text-[15px]">{product.description}</p>
                                <div className="flex items-center justify-end space-x-[20px] mt-[30px]">
                                    <button
                                        className="py-[4px] px-[18px] border-[1px] border-[#D3176D]"
                                        onClick={() => addToCart({
                                            id: product.id,
                                            name: product.name,
                                            description: product.description,
                                            price: product.price,
                                            image: product.images?.[0]?.url || "",
                                        })}
                                    >
                                        {t('buy')}
                                    </button>
                                    <Link to="/order">
                                        <button className="py-[6px] px-[8px] border-[1px] border-[#D3176D]">
                                            <img src={korzinaBtn} alt="Добавить в корзину" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Question />
        </>
    );
}

export default Searched;