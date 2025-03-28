import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCategories } from '../api/front/category';
import { Link } from 'react-router-dom'; // Импортируем Link

function Catalog() {
  const { t, i18n } = useTranslation();
  const [catalogs, setCatalogs] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchCatalogs = async () => {
      const data = await getCategories();
      setCatalogs(data);
    };
    fetchCatalogs();
  }, []);

  const getTranslation = (item) => {
    return item.translations?.find((trans) => trans.locale === i18n.language)?.name || item.name;
  };

  return (
    <section className='min-h-[59.2vh] bg-[#0f0f0f] text-white'>
      <div className='container mx-auto py-[50px]'>
        <div className='flex flex-col items-center mb-[40px]'>
          <h2 className='uppercase text-[40px] font-[600] max-[510px]:text-[30px]'>{t('catalogTitle')}</h2>
          <p className='mt-[10px] mb-[16px] text-[22px] font-[400] max-[765px]:text-[20px] max-[765px]:max-w-[500px] max-[765px]:text-center max-[510px]:text-[18px] max-[510px]:max-w-[360px]'>
            {t('catalogDescr')}
          </p>
          <p className='w-[130px] border-[1.6px] border-top border-[#d3176d]'></p>
        </div>

        <div className='max-w-[950px] mx-auto flex flex-wrap justify-center items-center gap-5'>
          {catalogs.slice(0, 8).map((item, id) => (
            <Link to={`/products/${item.id}`} key={id}> {/* Используем название категории */}
              <div className='p-5 text-center flex flex-col items-center justify-between h-full max-[420px]:p-1 cursor-pointer'>
                <div className='w-40 mb-4 h-32 flex justify-center max-[420px]:w-21 max-[356px]:w-[100px]'>
                  <img src={item.icon?.url || ''} alt={getTranslation(item)} className='w-[120px] sm:w-[190px] max-h-full object-contain' />
                </div>
                <p className='text-lg font-normal max-[420px]:text-md'>{getTranslation(item)}</p>
              </div>
            </Link>
          ))}
        </div>

        {catalogs.length > 8 && (
          <div className='max-w-[950px] mx-auto flex flex-wrap justify-center items-center gap-5'>
            {catalogs.slice(8, showMore ? catalogs.length : 8).map((item, id) => (
              <Link to={`/products/${item.id}`} key={id}> {/* Используем название категории */}
                <div className='p-5 text-center flex flex-col items-center justify-between h-full max-[420px]:p-1 cursor-pointer'>
                  <div className='w-40 mb-4 h-32 flex justify-center max-[420px]:w-21 max-[356px]:w-[100px]'>
                    <img src={item.icon?.url || ''} alt={getTranslation(item)} className='max-w-full max-h-full object-contain' />
                  </div>
                  <p className='text-lg font-normal max-[420px]:text-md'>{getTranslation(item)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Кнопка "Показать еще" */}
        {catalogs.length > 10 && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-[#d3176d] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#b3155a]">
              {showMore ? 'Скрыть' : 'Показать еще'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Catalog;