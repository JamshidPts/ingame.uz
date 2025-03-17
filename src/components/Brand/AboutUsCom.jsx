import React from 'react'
import aboutUsImg from '../../assets/brand/aboutUs.png'
import { useTranslation } from 'react-i18next';

function AboutUsCom() {
  const { t } = useTranslation();

  return (
    <section className='bg-[#1a1a1a] min-h-[50vh] py-[20px] pb-[60px] text-white'>
      <div className="container max-w-[1400px] xl:w-[1120px] font-orbitron mx-auto px-[20px]">
        <div className='flex flex-col items-center mb-[40px]'>
          <h2 className='text-[40px] font-[600] max-[510px]:text-[30px] mb-[20px]'>{t('BrandAboutTitle')}</h2>
          <p className='w-[130px]  border-[1.6px] border-top border-[#d3176d]'></p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row items-center  justify-center gap-[30px]'>
          <div>
            <img src={aboutUsImg} alt="Image" />
          </div>
          <div className='text-[#b2b2b2]'>
            <div className='text-[14px] text-start md:text-[16px] sm:text-center md:text-start'>
              <p className='mb-[20px] text-center md:text-start'>{t('BrandAboutSubtitle1')}</p>
              <p className='mb-[20px]'>{t('BrandAboutSubtitle2')}</p>
              <p className='mb-[20px]'>{t('BrandAboutSubtitle3')}</p>
            </div>
            <div className='max-w-full md:max-w-[600px] lg:max-w-[640px]  border-[#D3176D] border-[1px] p-[10px]'>
              <h4 className='text-white text-[18px] '>{t('BrandMissionTitle')}</h4>
              <p className='text-[14px] md-[text-16px]'>{t('BrandMissionSubtitle')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsCom
