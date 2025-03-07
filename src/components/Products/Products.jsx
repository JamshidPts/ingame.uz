import React, { useState } from 'react'
import ProductSidebar from './ProductSidebar'
import { PCproducts } from '../../data/Products'

function Products() {
  // Состояние для текущей страницы
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;  // Количество товаров

  // Вычисление индексов для текущего отображаемого блока товаров
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  //отображение на текущей "странице"
  const currentItems = PCproducts.slice(indexOfFirstItem, indexOfLastItem);

  // Функция для переключения страниц
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Вычисление общего количества страниц
  const totalPages = Math.ceil(PCproducts.length / itemsPerPage);

  return (
    <section className='pt-[140px] pb-[40px] min-h-[1100px] bg-[#1A1A1A] text-white'>
      <div className="container mx-auto px-4">
        <div className='flex'>
          <div className='w-[16%]'>
            <ProductSidebar />
          </div>
          <div className='w-[84%] pl-[40px]'>
            <h2 className='text-[40px] font-[600] mb-[30px]'>Игровые ПК</h2>

            <div className='flex flex-wrap justify-around'>
              {currentItems.map((item, index) => (
                <div className='relative max-w-[300px] min-h-[490px] bg-[#1e1e1e] p-[20px] mb-[40px]' key={item.id}>
                  {index === 0 && (
                    <div className='absolute top-[-14px] left-[10px] text-center'>
                      <p className='w-[68px] min-h-[36px] p-[4px] font-[700] border-[1px] border-[#D3176D]'>
                        {item.discount}
                      </p>
                    </div>
                  )}
                  <div className='absolute top-[-14px] left-[20px]'>
                    <img src={item.fireIcon} alt={item.fireIcon} />
                  </div>
                  <div className='flex justify-end'>
                    <img className='cursor-pointer' src={item.icon} alt={item.icon} />
                  </div>
                  <img className='mb-[50px]' src={item.img} alt={item.img} />
                  <div>
                    <h3 className='text-[20px] font-[600] mb-[20px]'>{item.title}</h3>
                    <p className='line-through text-[18px]'>{item.oldPrice}</p>
                    <p className='text-[20px] text-[#D3176D] font-[600] mb-[20px]'>{item.newPrice}</p>
                    <p className='text-[15px]'>{item.descr1}</p>
                    <p className='text-[15px] mb-[30px]'>{item.descr2}</p>
                    <div className='flex items-center justify-end space-x-[20px]'>
                      <button className='py-[4px] px-[18px] border-[1px] border-[#D3176D]'>{item.btnBuy}</button>
                      <button className='py-[6px] px-[8px] border-[1px] border-[#D3176D]'>
                        <img src={item.btnCompare} alt={item.btnCompare} />
                      </button>
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
                Назад
              </button>

              {/* Кнопки пагинации */}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
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
                Вперед
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
