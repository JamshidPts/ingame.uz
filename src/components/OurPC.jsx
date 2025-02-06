import React from 'react'
import { Card, Icons } from '../data/OurPC'
import btnImg from '../assets/ourPc/images/ourPcBtn.png'
import compare from '../assets/navbar/compare_btn.svg'

function OurPC() {
  return (
    <section className='bg-[#1A1A1A] text-white py-[50px]'>
      <div className="container mx-auto min-h-[85vh] ">
        <h1 className='text-[40px] font-[600] mb-[40px]'>Наши ПК</h1>
        <div className='flex justify-evenly'>
          <div className='w-[359px] min-h-[600px] bg-[#1E1E1E] py-[20px] px-[16px]'>
            {Card.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="Image" />
                <div className='flex justify-between items-center mt-[20px] mb-[10px]'>
                  <p className='w-[118px] min-h-[24px] text-center text-[10px] bg-[#d3176d] p-[5px] rounded-[20px] font-[600]'>{item.set}</p>
                  <button className='w-[189px] min-h-[42px] bg-cover bg-center text-[18px] font-[600]' style={{ backgroundImage: `url(${btnImg})` }}>{item.price}</button>
                </div>
                <p className='text-right text-[14px] text-[#d3176d] mb-[10px]'>{item.discount}</p>
                <hr className='mb-[10px] opacity-20' />
                <h3 className='text-[#d3176d] text-[20px] font-[600]'>{item.heading}</h3>
                <p className='text-[14px] font-[500] mb-[15px]'>{item.subtitle}</p>
                {Icons.map((iconItem) => (
                  <div key={iconItem.id} className='flex mb-[17px]'>
                    <img src={iconItem.icon} alt={iconItem.title} />
                    <div className='ml-[10px]'>
                      <h4 className='text-[15px] font-[500] text-[#aaa7a7]'>{iconItem.title}</h4>
                      <p className='text-[14px]'>{iconItem.subtitle}</p>
                    </div>
                  </div>
                ))}
                <h3 className='mb-[10px]'>{item.tableTitle}</h3>
                <table className="table-auto border-collapse w-full mb-[20px]">
                  <tbody>
                    <tr>
                      <td className="border-t border-b border-l px-4 py-2">{item.tableName}</td>
                      <td className="border-t border-b  px-4 py-2">{item.tableQuality}</td>
                      <td className="border-t border-b border-r px-4 py-2">{item.tableSecondQuality}</td>
                    </tr>
                    <tr>
                      <td className="border-t border-b border-l px-4 py-2">{item.game}</td>
                      <td className="border-t border-b px-6 py-2">{item.gameFps}</td>
                      <td className="border-t border-b border-r px-7 py-2">{item.gameFps2}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='flex justify-between max-w-[290px] items-center'>
                  <button className='w-[121px] h-[30px] text-[14px] border-[3px] border-white'>Подробнее</button>
                  <button className='w-[121px] h-[30px] text-[14px] border-[3px] border-[#d3176d]'>Купить</button>
                  <img className='cursor-pointer' src={compare} alt="Compare icon" />
                </div>
              </div>
            ))}

          </div>
          <div className='w-[359px] min-h-[600px] bg-[#1E1E1E] py-[20px] px-[16px]'>
            {Card.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="Image" />
                <div className='flex justify-between items-center mt-[20px] mb-[10px]'>
                  <p className='w-[118px] min-h-[24px] text-center text-[10px] bg-[#d3176d] p-[5px] rounded-[20px] font-[600]'>{item.set}</p>
                  <button className='w-[189px] min-h-[42px] bg-cover bg-center text-[18px] font-[600]' style={{ backgroundImage: `url(${btnImg})` }}>{item.price}</button>
                </div>
                <p className='text-right text-[14px] text-[#d3176d] mb-[10px]'>{item.discount}</p>
                <hr className='mb-[10px] opacity-20' />
                <h3 className='text-[#d3176d] text-[20px] font-[600]'>{item.heading}</h3>
                <p className='text-[14px] font-[500] mb-[15px]'>{item.subtitle}</p>
                {Icons.map((iconItem) => (
                  <div key={iconItem.id} className='flex mb-[17px]'>
                    <img src={iconItem.icon} alt={iconItem.title} />
                    <div className='ml-[10px]'>
                      <h4 className='text-[15px] font-[500] text-[#aaa7a7]'>{iconItem.title}</h4>
                      <p className='text-[14px]'>{iconItem.subtitle}</p>
                    </div>
                  </div>
                ))}
                <h3 className='mb-[10px]'>{item.tableTitle}</h3>
                <table className="table-auto border-collapse w-full mb-[20px]">
                  <tbody>
                    <tr>
                      <td className="border-t border-b border-l px-4 py-2">{item.tableName}</td>
                      <td className="border-t border-b  px-4 py-2">{item.tableQuality}</td>
                      <td className="border-t border-b border-r px-4 py-2">{item.tableSecondQuality}</td>
                    </tr>
                    <tr>
                      <td className="border-t border-b border-l px-4 py-2">{item.game}</td>
                      <td className="border-t border-b px-6 py-2">{item.gameFps}</td>
                      <td className="border-t border-b border-r px-7 py-2">{item.gameFps2}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='flex justify-between max-w-[290px] items-center'>
                  <button className='w-[121px] h-[30px] text-[14px] border-[3px] border-white'>Подробнее</button>
                  <button className='w-[121px] h-[30px] text-[14px] border-[3px] border-[#d3176d]'>Купить</button>
                  <img className='cursor-pointer' src={compare} alt="Compare icon" />
                </div>
              </div>
            ))}

          </div>
          <div className='w-[359px] min-h-[600px] bg-[#1E1E1E] py-[20px] px-[16px]'>
            {Card.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="Image" />
                <div className='flex justify-between items-center mt-[20px] mb-[10px]'>
                  <p className='w-[118px] min-h-[24px] text-center text-[10px] bg-[#d3176d] p-[5px] rounded-[20px] font-[600]'>{item.set}</p>
                  <button className='w-[189px] min-h-[42px] bg-cover bg-center text-[18px] font-[600]' style={{ backgroundImage: `url(${btnImg})` }}>{item.price}</button>
                </div>
                <p className='text-right text-[14px] text-[#d3176d] mb-[10px]'>{item.discount}</p>
                <hr className='mb-[10px] opacity-20' />
                <h3 className='text-[#d3176d] text-[20px] font-[600]'>{item.heading}</h3>
                <p className='text-[14px] font-[500] mb-[15px]'>{item.subtitle}</p>
                {Icons.map((iconItem) => (
                  <div key={iconItem.id} className='flex mb-[17px]'>
                    <img src={iconItem.icon} alt={iconItem.title} />
                    <div className='ml-[10px]'>
                      <h4 className='text-[15px] font-[500] text-[#aaa7a7]'>{iconItem.title}</h4>
                      <p className='text-[14px]'>{iconItem.subtitle}</p>
                    </div>
                  </div>
                ))}
                <h3 className='mb-[10px]'>{item.tableTitle}</h3>
                <table className="table-auto border-collapse w-full mb-[20px]">
                  <tbody>
                    <tr>
                      <td className="border-t border-b border-l px-4 py-2">{item.tableName}</td>
                      <td className="border-t border-b  px-4 py-2">{item.tableQuality}</td>
                      <td className="border-t border-b border-r px-4 py-2">{item.tableSecondQuality}</td>
                    </tr>
                    <tr>
                      <td className="border-t border-b border-l px-4 py-2">{item.game}</td>
                      <td className="border-t border-b px-6 py-2">{item.gameFps}</td>
                      <td className="border-t border-b border-r px-7 py-2">{item.gameFps2}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='flex justify-between max-w-[290px] items-center'>
                  <button className='w-[121px] h-[30px] text-[14px] border-[3px] border-white'>Подробнее</button>
                  <button className='w-[121px] h-[30px] text-[14px] border-[3px] border-[#d3176d]'>Купить</button>
                  <img className='cursor-pointer' src={compare} alt="Compare icon" />
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section >
  )
}

export default OurPC
