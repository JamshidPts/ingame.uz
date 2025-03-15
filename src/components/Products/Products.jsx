import React, { useEffect, useState, useContext } from 'react';
import ProductSidebar from './ProductSidebar';
import { getProducts } from '../../api/front/products';
import korzinaBtn from "../../assets/navbar/korzina_btn.svg";
import { useTranslation } from 'react-i18next';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [product, setProduct] = useState([]);
  const { t, i18n } = useTranslation();
  const { addToCart } = useContext(CartContext);
  const { selectedCurrency } = useContext(CartContext);

  const convertPrice = (price) => {
    if (!selectedCurrency) return price;
    return (price * selectedCurrency.conversions).toFixed(2);
  };

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(product.length / itemsPerPage);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log("Полученные данные:", data);
        setProduct(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Ошибка загрузки продуктов:", error);
      }
    };

    fetchProducts();
  }, []);

  const getTranslation = (item, field) => {
    return item?.translations?.find(trans => trans.locale === i18n.language)?.[field] || item[field] || "";
  };

  return (
    <section className='pt-[140px] pb-[40px] min-h-[1100px] bg-[#1A1A1A] text-white'>
      <div className="container mx-auto px-4">
        <div className='flex'>
          <div className='w-[16%] hidden lg:block'>
            <ProductSidebar />
          </div>
          <div className='w-[100%] pl-[0px] lg:pl-[40px] lg:w-[84%]'>
            <h2 className='text-[40px] font-[600] mb-[30px]'>{t("productTitle")}</h2>
            <div className='flex flex-wrap justify-center xl:justify-start gap-[20px] mx-auto'>
              {currentItems.map((item, id) => (
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
                    <p className='text-[20px] text-[#D3176D] font-[600] mb-[20px]'>{t('price')}: {convertPrice(item.price)} {selectedCurrency?.currency}</p>
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

            {/* Пагинация */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="py-2 px-4 mx-2 rounded-full bg-transparent text-white border-[1px] border-[#D3176D]"
                disabled={currentPage === 1}
              >
                {t('prev')}
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`py-2 px-4 mx-2 ${currentPage === index + 1 ? 'bg-[#D3176D]' : 'bg-transparent'} text-white border-[1px] border-[#D3176D]`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="py-2 px-4 mx-2 rounded-full bg-transparent text-white border-[1px] border-[#D3176D]"
                disabled={currentPage === totalPages}
              >
                {t('next')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
