import React from 'react'

const brands = [
  "GIGABYTE Aorus",
  "ALIENWARE AURORA",
  "Lenovo Legion T7",
  "Acer Predator Orion",
  "ARENA 9604",
  "GAMER PRO RYZEN"
];

const monitors = ["24’’", "27’’", "32’’"];
const mice = ["Игровая", "Офисная"];

function ProductSidebar() {
  return (
    <>
      <div className='mt-[80px]'>
        <h6 className='font-bold'>Цена</h6>
        <form className='flex justify-between mt-[10px]' action="#">
          <div>
            <input id="minPrice" className='w-[108px] h-[35px] bg-transparent border-[1px] border-white px-[4px]' type="text" />
          </div>
          <div>
            <input id="maxPrice" className='w-[108px] h-[35px] bg-transparent border-[1px] border-white px-[4px]' type="text" />
          </div>
        </form>
        <div className='h-[1px] bg-[#707070] my-[20px]'></div>
      </div>

      <div>
        <h6 className='font-bold'>Бренды</h6>
        <form className="flex flex-col space-y-2 mt-[5px]" action="#">
          {brands.map((brand, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" name="brands[]" id={`brand${index}`} value={brand} className="checkbox-input" />
              <span>{brand}</span>
            </label>
          ))}
        </form>

        <div className='h-[1px] bg-[#707070] my-[20px]'></div>

        <h6 className='font-bold'>Мониторы</h6>
        <form className="flex flex-col space-y-2 mt-[5px]" action="#">
          {monitors.map((monitor, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" name="monitors[]" id={`monitor${index}`} value={monitor} className="checkbox-input" />
              <span>{monitor}</span>
            </label>
          ))}
        </form>

        <div className='h-[1px] bg-[#707070] my-[20px]'></div>

        <h6 className='font-bold'>Мышка</h6>
        <form className="flex flex-col space-y-2 mt-[5px]" action="#">
          {mice.map((mouse, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" name="mice[]" id={`mouse${index}`} value={mouse} className="checkbox-input" />
              <span>{mouse}</span>
            </label>
          ))}
        </form>

        <div className='mt-[30px] text-center'>
          <button className='py-[6px] px-[50px] mb-[10px] bg-transparent border-[1px] border-[#D3176D]'>Применить</button>
          <p className='text-gray-500 cursor-pointer'>Сбросить фильтр</p>
        </div>
      </div>

      <style>{`
  .checkbox-input {
    display: none;
  }

  .checkbox-input + span::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: transparent;
    margin-right: 10px;
    vertical-align: middle;
    transition: background-color 0.3s, border-color 0.3s;
  }

  .checkbox-input:checked + span::before {
    background-color: white;
    border-color: white;
  }

  .checkbox-input + span:hover::before {
    background-color: #f1f1f1;
  }

  .checkbox-input:focus + span::before {
    outline: 2px solid #D3176D;
  }
`}</style>

    </>
  );
}

export default ProductSidebar;
