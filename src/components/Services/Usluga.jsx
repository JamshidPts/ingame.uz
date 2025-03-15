import React from 'react'
import pc from "../../assets/services/pcServices.png"
import btnOutline from "../../assets/services/btnOutline.png"
import btnArrow from "../../assets/services/btnArrow.svg"
import { servicesCards } from '../../data/Services'
import { useTranslation } from 'react-i18next'

function Usluga() {
    const { t } = useTranslation();

    return (
        <section className='relative bg-[#000000] min-h-[1100px] custom:min-h-[930px] md:min-h-[786px] font-orbitron pb-[40px] pt-[140px] custom:pt-[120px] md:pt-[180px]  text-white'>
            <div className=' container mx-auto px-4'>
                <div className='flex flex-col-reverse md:flex-row md:gap-[40px] items-center md:items-center md:justify-between'>
                    <div className='max-w-[90%] sm:max-w-[50%] md:max-w-[50%] text-center md:text-start'>
                        <h2 className='text-[34px] md:text-[44px] lg:text-[60px]'>{t('serviceTitle')}</h2>
                        <div className='text-[#B2B2B2] mb-[24px] text-[15px] xl:text-[16px]'>
                            <p className='mb-[20px]'>
                                {t('serviceDescr')}
                            </p>
                        </div>
                        <button className='w-[250px] custom:w-[279px] p-[10px] border-[2px] border-[#D3176D] text-[25px] font-[600] '>{t("book")}</button>
                    </div>
                    <div className='w-[100%] sm:w-[70%] md:w-[50%]'>
                        <img src={pc} alt="PC image" />
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute left-[0] right-[0] top-[40px] md:top-[180px] xl:top-[80px] 2xl:top-[10px] flex flex-wrap sm:flex-nowrap justify-center gap-[0px] md:gap-[20px] '  >
                        {servicesCards.map((item) => (
                            <div className='max-w-[140px] min-h-[100px] md:max-w-[180px] md:min-h-[231px] bg-contain bg-no-repeat bg-center text-center px-[20px] pt-[20px] sm:pt-[40px]' style={{ backgroundImage: `url(${btnOutline})` }} key={item.id}>
                                <img className='inline-block mb-[16px] max-w-auto h-[30px] md:h-[40px] object-contain' src={item.image} alt={item.image} />
                                <p className=' md:mb-[16px] text-[11.8px] md:text-[15px] min-h-[50px]'>{t(item.text)}</p>
                                <button className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] bg-[#D3176D] ml-[62px] sm:ml-[80px] mb-[20px] sm:mb-[40px] md:ml-[100px] rounded-[50%] pl-[5px] md:pl-[9px]'><img src={btnArrow} alt={btnArrow} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Usluga
