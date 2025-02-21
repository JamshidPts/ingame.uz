import React from 'react'
import pc from "../../assets/services/pcServices.png"

function Usluga() {
  return (
    <section className='bg-[#000000] min-h-screen text-white'>
        <div className='container m-auto px-2 h-screen'>
            <div className='flex items-center flex-col-reverse lg:justify-between h-screen'>
                <div>
                    <h5 className='text-[60px]'>Название услуги</h5>
                </div>
                <div>
                    <img src={pc} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Usluga