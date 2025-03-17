import React from 'react';
import companyCar from '../../assets/brand/company1.png'
import { useTranslation } from 'react-i18next'
function AboutCompany() {

  const { t } = useTranslation();
  return (
    <section className='bg-[#1a1a1a] min-h-[80vh] sm:min-h-[100vh]  pt-[120px] pb-[50px] text-white'>
      <div className="container mx-auto max-w-[1400px] md:max-w-[1120px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ">
        <div className='font-orbitron mb-[40px]'>
          <h1 className='text-[30px] sm:text-[35px] md:text-[40px] font-[600] mb-[20px]'>
            {t('BrandTitle')}
          </h1>
          <p className='text-[#b2b2b2] text-[13px] sm:text-[16px]  w-full'>
            {t('BrandSubtitle')}
          </p>
        </div>
        <div className='flex justify-center'>
          <img className="object-cover max-w-full" src={companyCar} alt="Company image" />
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
