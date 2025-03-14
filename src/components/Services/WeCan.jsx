import React from 'react'
import { WeCanCards } from '../../data/WeCan'
import { useTranslation } from 'react-i18next'

function WeCan() {
  const { t } = useTranslation();
  return (
    <section className='bg-[#1a1a1a] min-h-screen py-[70px] custom:py-[180px] pb-[60px] text-white'>
      <div className="container font-orbitron mx-auto px-[20px]">
        <div className='flex flex-col items-center mb-[40px]'>
          <h2 className=' text-[40px] font-[600] max-[510px]:text-[30px] mb-[20px]'>{t("servicetitle")}</h2>
          <p className='w-[130px]  border-[1.6px] border-top border-[#d3176d]'></p>
        </div>

        <div className='flex flex-wrap justify-center gap-[40px]'>
          {WeCanCards.map((item) => (
            <div className='max-w-[504px] min-h-[220px] p-[20px] flex items-start gap-[16px] bg-black' key={item.id}>
              <div>
                <img className='w-[200px] sm:w-[136px] sm:h-[160px]' src={item.image} alt={item.image} />
              </div>
              <div className=' max-w-[310px] text-[#C7C7C7]'>
                <h3 className='text-white font-[600] mb-[8px]'>{t(item.title)}</h3>
                <ul className='text-[13px]'>{t(item.subtitle)}
                  <li className='ml-[10px]'>{t(item.list1)}</li>
                  <li className='ml-[10px]'>{t(item.list2)}</li>
                  <li className='ml-[10px]'>{t(item.list3)}</li>
                  <li className='ml-[10px]'>{t(item.list4)}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeCan
