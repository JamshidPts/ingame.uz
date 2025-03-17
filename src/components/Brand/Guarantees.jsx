import React from 'react'
import { useTranslation } from 'react-i18next'

function Guarantees() {
  const { t } = useTranslation();
  return (
    <section className='bg-[#0f0f0f] min-h-[64vh] pt-[30px] pb-[60px] text-[#b2b2b2] '>
      <div className="container mx-auto px-[20px] max-w-[1400px] xl:w-[1120px]">
        <div className='flex flex-col items-center mb-[40px]'>
          <h2 className='text-[40px] font-[600] max-[510px]:text-[30px] mb-[20px] text-white'>{t("GuaranteesTitle")}</h2>
          <p className='w-[130px]  border-[1.6px] border-top border-[#d3176d]'></p>
        </div>
        <div>
          <div className='mb-[30px]'>
            <p className='mb-[20px]'>{t("GuaranteesText1")}</p>
            <p>{t("GuaranteesText2")}</p>
          </div>
          <div className='mb-[30px]'>
            <p className='mb-[20px]'>{t("GuaranteesText3")}</p>
            <p>{t("GuaranteesText4")}</p>
          </div>
          <div>
            <p className='mb-[20px]'>{t("GuaranteesText5")}</p>
            <p>{t("GuaranteesText6")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guarantees
