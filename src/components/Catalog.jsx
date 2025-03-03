import React, { useEffect, useState } from 'react'
// import { CatalogItems } from '../data/Catalog'
import { categories } from '../api/front/category';

function Catalog() {
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    const fetchCatalogs = async () => {
      const data = await categories();
      setCatalogs(data);
    };
    fetchCatalogs();
  }, []);
  return (
    <section className='min-h-[59.2vh] bg-[#0f0f0f] text-white'>
      <div className="container mx-auto py-[50px]">
        <div className='flex flex-col items-center mb-[40px]'>
          <h2 className='uppercase text-[40px] font-[600] max-[510px]:text-[30px]'>КАТАЛОГ INGAME.UZ</h2>
          <p className='mt-[10px] mb-[16px] text-[22px] font-[400] max-[765px]:text-[20px] max-[765px]:max-w-[500px] max-[765px]:text-center max-[510px]:text-[18px] max-[510px]:max-w-[360px]'>Выберите себе в каталоге  для максимально комфортной игры</p>
          <p className='w-[130px]  border-[1.6px] border-top border-[#d3176d]'></p>
        </div>
        <div className="max-w-[950px] mx-auto flex flex-wrap justify-center items-center gap-5 ">
          {catalogs.map((item, id) => (
            <div className="p-5 text-center flex flex-col items-center justify-between h-full max-[420px]:p-1 cursor-pointer" key={id}>
              <div className="w-40 mb-4 h-32 flex justify-center max-[420px]:w-21 max-[356px]:w-[100px]">
                <img src={item.icon} alt={item.text} className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-lg font-normal max-[420px]:text-md">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog
