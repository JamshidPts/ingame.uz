import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import trashIcon from "../../assets/order/trash.svg";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Order() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const { selectedCurrency } = useContext(CartContext);
  const { t } = useTranslation();

  const convertPrice = (price) => {
    if (!selectedCurrency) return price;
    return (price * selectedCurrency.conversions).toFixed(2);
  };

  return (
    <section className='bg-[#1a1a1a] min-h-[100vh] pt-[170px] pb-[50px] text-white'>
      <div className="container mx-auto px-4 max-w-[1300px]">
        <div className='flex flex-col xl:flex-row xl:justify-between '>
          <div className='mx-auto xl:mx-0 mb-[60px] lg:mb-0'>
            <div className='hidden md:flex w-[700px] lg:w-[870px] xl:w-[800px] h-[40px] mb-[20px] px-[20px] justify-between bg-[#2d2d2d] items-center'>
              <div className='w-[55%]'>
                <h4>{t('tovar')}</h4>
              </div>
              <div className='flex w-[55%] justify-between'>
                <h4 className='ml-0 lg:ml-[28px] xl:ml-0'>{t('sklad')}</h4>
                <h4 className='mr-[0px] xl:mr-[50px]'>{t('availability')}</h4>
                <h4>{t('price')}</h4>
              </div>
            </div>
            <div>
              {cart.length > 0 ? cart.map((item) => (
                <div className='flex flex-col items-center mb-[60px] md:mb-0 md:flex-row md:items-start w-[100%] md:w-[700px] lg:w-[860px] xl:w-[100%]' key={item.id}>
                  <div className='w-[55%] flex flex-col items-center md:flex-row md:items-start mb-[30px] gap-[20px]'>
                    <div className='bg-[#2d2d2d] p-[14px] mx-auto md:mx-0'>
                      <img className='w-[240px] sm:w-[100px] md:w-[50px]' src={item.image || "https://via.placeholder.com/150"} alt={item.name} />

                    </div>
                    <div className='text-center md:text-start'>
                      <h3 className='font-[600]'>{item.name}</h3>
                      <p className='text-[14px] text-[#a8a8a8]'>{item.description}</p>
                    </div>
                  </div>
                  <div className='w-[100%] md:w-[70%] lg:w-[55%] gap-[40px] flex flex-col sm:flex-row  justify-between items-center'>
                    <div className='text-center'>
                      <h5 className='font-[600]'>{t('isHave')}</h5>
                      <p className='text-[#a8a8a8]'>{t('pochta')}</p>
                    </div>
                    <div className='flex items-center '>
                      <button className='bg-[#2d2d2d] w-[25px] h-[30px]'
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1} // Запрещаем уменьшать ниже 1
                      >
                        -
                      </button>
                      <p className='bg-[#2d2d2d] w-[25px] h-[30px] px-[8px] pt-[2px]'>{item.quantity}</p>
                      <button className='bg-[#2d2d2d] w-[25px] h-[30px]'
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                      <img className='w-[14px] h-[18px] ml-[10px] cursor-pointer'
                        src={trashIcon} alt="Удалить"
                        onClick={() => removeFromCart(item.id)} />
                    </div>
                    <div>
                      <p>{convertPrice(item.price)} {selectedCurrency?.currency} * {item.quantity}</p>
                    </div>
                  </div>
                </div>
              )) : <p>{t('korzina')}</p>}
            </div>
          </div>
          <div className='mx-auto xl:mx-0'>
            <div className='bg-black w-[300px] sm:w-[430px] h-[158px] p-[20px] sm:p-[40px]'>
              <div className='flex justify-between mb-[20px] text-[20px]'>
                <p>{t('last')}:</p>
                <p className='font-[600]'>{cart.reduce((total, item) => {
                  const itemTotal = convertPrice(item.price) * item.quantity;
                  return total + itemTotal;
                }, 0).toFixed(2)} {selectedCurrency?.currency}</p>
              </div>
              <div className='text-center'>
                <Link to="/orderCar">
                  <button className='bg-[#D3176D] w-[100%] p-[10px]'>{t('go')}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
