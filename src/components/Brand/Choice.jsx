import React from 'react'
import { ChoiceData } from '../../data/Brand'
import { useTranslation } from 'react-i18next'

function Choice() {

  const { t } = useTranslation();

  return (
    <section className='bg-[#0f0f0f] min-h-[50vh] py-[40px] text-[#b2b2b2] '>
      <div className="container mx-auto max-w-[1400px] md:max-w-[1120px] px-[20px]">
        <div className='flex flex-col items-center mb-[40px]'>
          <h2 className='text-[32px] text-center sm:text-[40px] font-[600] mb-[20px] text-white'>{t('BrandWhyTitle')}</h2>
          <p className='w-[130px]  border-[1.6px] border-top border-[#d3176d]'></p>
        </div>
        <div>
          <div className='mb-[30px] text-[15px] sm:text-[16px]'>
            <p className='mb-[20px]'>{t("BrandWhyText1")}</p>
            <p>{t("BrandWhyText2")}</p>
          </div>
          <div className='flex flex-wrap justify-center  md:flex-nowrap  gap-[20px] md:justify-between lg:gap-0 items-center'>
            {ChoiceData.map((item) => (
              <div className='w-[280px] sm:w-[240px] text-[15px] sm:text-[13px] lg:text-[16px] bg-[#1a1a1a] p-[24px] sm:p-[10px] lg:p-[20px] text-center xl:w-[260px]' key={item.id}>
                <p>{t("BrandWhyBlock")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choice
