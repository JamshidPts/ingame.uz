import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import trashIcon from "../../assets/order/trash.svg"; // Проверь правильный путь
import { Link } from 'react-router-dom';

function Order() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <section className='bg-[#1a1a1a] min-h-[100vh] pt-[170px] pb-[50px] text-white'>
      <div className="container mx-auto px-4 max-w-[1300px]">
        <div className='flex justify-between '>
          <div>
            <div className='w-[800px] h-[40px] mb-[20px] px-[20px] flex justify-between bg-[#2d2d2d] items-center'>
              <div className='w-[55%]'>
                <h4>Товар</h4>
              </div>
              <div className='flex w-[55%] justify-between'>
                <h4>Наличие</h4>
                <h4 className='mr-[50px]'>Количество</h4>
                <h4>Цена</h4>
              </div>
            </div>
            <div>
              {cart.length > 0 ? cart.map((item) => (
                <div className='flex items-start' key={item.id}>
                  <div className='w-[55%] flex mb-[30px] gap-[20px]'>
                    <div className='bg-[#2d2d2d] p-[14px]'>
                      <img src={item.img || "/fallback-image.jpg"} alt={item.name} />
                    </div>
                    <div>
                      <h3 className='font-[600]'>{item.name}</h3>
                      <p className='text-[14px] text-[#a8a8a8]'>{item.description}</p>
                    </div>
                  </div>
                  <div className='w-[55%] flex justify-between items-center'>
                    <div className='text-center'>
                      <h5 className='font-[600]'>В наличии</h5>
                      <p className='text-[#a8a8a8]'>Отправка за 2-3 дня</p>
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
                      <p>{item.price * item.quantity} сум</p>
                    </div>
                  </div>
                </div>
              )) : <p>Корзина пуста</p>}
            </div>
          </div>
          <div>
            <div className='bg-black w-[430px] h-[158px] p-[40px]'>
              <div className='flex justify-between mb-[20px] text-[20px]'>
                <p>Итого:</p>
                <p className='font-[600]'>{cart.reduce((total, item) => total + item.price * item.quantity, 0)} сум</p>
              </div>
              <div className='text-center'>
                <Link to="/orderCar">
                  <button className='bg-[#D3176D] w-[100%] p-[10px]'>Продолжить</button>
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
