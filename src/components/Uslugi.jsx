import React, { useEffect, useState } from 'react'
import { Uslugiy } from "../data/UslugiData"
import { uslugi } from '../api/front/uslugi';

function Uslugi() {
  const [service, setService] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      const data = await uslugi();
      setService(data);
    }
    fetchService();
  }, []);

  return (
    <section className='bg-[#1A1A1A] text-white py-[50px]'>
      <div className='container mx-auto min-h-[100vh]'>
        <h2 className='text-[40px] font-[600] mb-[40px] px-4'>Услуги</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 place-items-center'>
          {service.map((item, id) => (
            <div key={id} className='w-[300px] min-h-[460px] bg-[#1E1E1E] rounded shadow-md'>
              <img src={item.image?.url || ""} alt="usluga" />
              <div className='p-4'>
                <p className='text-[#D3176D] text-[20px] font-semibold'>{item.name}</p>
                <p className='py-1 font-bold font-mono'>{item.type}</p>
                <p className='text-[14px] border-b border-b-[#D9D9D9] border-opacity-20 pb-[20px]'>{item.description}</p>
                <ul className='py-4 px-2 list-disc list-inside overflow-y-auto min-h-[104px] max-h-[104px]'>
                  {item.services.split(', ').map((serviceItem, index) => (
                    <li key={index}>{serviceItem}</li>
                  ))}
                </ul>
                <div className='flex justify-end px-2 pt-5'>
                  <button className='border-2 border-white px-5 py-1 rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-black'>Подробнее</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Uslugi