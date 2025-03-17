import React from 'react'
import { OrderData } from '../../data/Order'
import { useTranslation } from 'react-i18next'

function Order() {

  const { t } = useTranslation();
  return (
    <section className='bg-[#1a1a1a] min-h-[50vh] py-[40px] text-[#b2b2b2] '>
      <div className="container mx-auto px-[20px] max-w-[1400px] xl:w-[1120px]">
        <div>
          <div className='mb-[30px]'>
            <h3 className='text-white text-[32px] sm:text-[40px] text-center font-[600] '>{t("OrderTitle")}</h3>
            < p className='my-[20px] text-[15px] sm:text-[16px]' >{t("OrderSubtitle1")}</p>
            <p className='text-[15px] sm:text-[16px]'>{t("OrderSubtitle2")}</p>
          </div>
          <div className='flex flex-wrap md:flex-nowrap gap-[20px] justify-center  xl:justify-between items-center mb-[30px]'>
            {OrderData.map((item) => (
              <div className='w-[280px] text-[15px]  bg-[#0f0f0f] text-center p-[24px] sm:p-[10px] lg:p-[20px] sm:text-[13px] xl:text-[16px] md:w-[260px] sm:w-[240px] ' key={item.id}>
                <p>{t("OrderSubtitle3")}</p>
              </div>
            ))}
          </div>
          <div className='text-[15px] sm:text-[16px]'>
            <p className='mb-[20px]'>{t("OrderSubtitle4")}</p>
            <p>{t("OrderSubtitle5")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order
