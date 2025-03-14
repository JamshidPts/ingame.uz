import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import car from '../../assets/orderCarPlace/car.svg';
import locate from '../../assets/orderCarPlace/locate.svg';
import key from '../../assets/orderCarPlace/key.svg';

function OrderCarPlace() {
  const { cart } = useContext(CartContext);
  const [selected, setSelected] = useState(null);
  const { selectedCurrency } = useContext(CartContext);

  const convertPrice = (price) => {
      if (!selectedCurrency) return price;
      return (price * selectedCurrency.conversions).toFixed(2);
  };

  const deliveryMethods = [
    { id: 1, icon: car, title: "Стандартная доставка", description: "1 день" },
    { id: 2, icon: locate, title: "Бесплатная доставка по Ташкенту", description: "1 день" },
    { id: 3, icon: key, title: "Доставка в регионы", description: "По тарифу экспресс-почты BTS или Fargo" },
  ];

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className='bg-[#1a1a1a] min-h-[100vh] pt-[140px] pb-[50px] text-white'>
      <div className="container mx-auto px-4 max-w-[1400px]">

        {/* Блок с формой и корзиной */}
        <div className="relative flex justify-between mb-[30px]">
          <div className="w-[60%] flex justify-between">
            <div>
              <h3 className="text-[24px] font-bold mb-4">Оформить заказ</h3>
              <form className="space-y-4 text-[15px]">
                <div className="flex items-center bg-[#2d2d2d] p-3 rounded-md">
                  <label className="w-[120px] text-white" htmlFor="name">Ф.И.О.*</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#D3176D] text-white px-2 py-1"
                  />
                </div>
                <div className="flex items-center bg-[#2d2d2d] p-3 rounded-md">
                  <label className="w-[200px] text-white" htmlFor="phone">Номер телефона*</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#D3176D] text-white px-2 py-1"
                  />
                </div>
              </form>
            </div>

            {/* Корзина товаров */}
            <div className='w-[244px] min-h-[100px] border border-[#D3176D] px-[10px] py-[20px] flex flex-col justify-center text-white'>
              <div className='flex justify-between mb-[40px]'>
                <span>Товаров:</span> <span className="font-semibold">{totalItems}</span>
              </div>
              <div className='flex justify-between'>
                <span>Итого:</span> <span className="font-semibold">{convertPrice(totalPrice)} {selectedCurrency?.currency} сум</span>
              </div>
            </div>
          </div>

          {/* Черный блок с товарами */}
          <div className="absolute right-0 top-0 w-[32%] min-h-[400px] text-white bg-[#131212] px-[20px] pt-[40px] overflow-auto rounded-md">
            {cart.length > 0 ? cart.map((item) => (
              <div key={item.id} className="flex items-center mb-[20px]">
                <div className="bg-gray-800 p-[20px] rounded-md">
                  <img src={item.image || "/fallback-image.jpg"} alt={item.name} className="w-[50px] h-[50px]" />
                </div>
                <div className="ml-[10px]">
                  <h4 className="text-sm font-bold">{item.name}</h4>
                  <p className="text-[15px] font-[600] text-gray-400">Кол-во: {item.quantity}</p>
                  <p className="text-[15px] font-[600]">{convertPrice(item.price)} {selectedCurrency?.currency} * {item.quantity}</p>
                </div>
              </div>
            )) : <p className="text-center">Корзина пуста</p>}
          </div>
        </div>

        {/* Способы доставки */}
        <div className="text-white mb-[20px]">
          <h3 className="mb-[10px] font-bold">Способы получения заказа</h3>
          <div className='flex items-center gap-[30px]'>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="delivery" value="delivery" className="w-[16px] h-[16px] mr-[10px]" />
              Доставка
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="delivery" value="pickup" className="w-[16px] h-[16px] mr-[10px]" />
              Самовывоз
            </label>
          </div>
        </div>

        {/* Выбор метода доставки */}
        <div className="flex flex-col gap-[10px] mb-[30px]">
          {deliveryMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center w-[540px] p-[10px] border ${selected === method.id ? 'border-[#D3176D]' : 'border-[#B4B4B4]'} cursor-pointer`}
              onClick={() => setSelected(method.id)}
            >
              <img src={method.icon} alt={method.title} className="w-[30px] h-[30px]" />
              <div className="ml-[20px]">
                <p className="font-semibold">{method.title}</p>
                <p className="text-gray-400">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Адрес доставки */}
        <div className="flex items-center bg-[#2d2d2d] p-3 rounded-md w-[540px] mb-[30px]">
          <label className="w-[200px] text-white" htmlFor="address">Адрес доставки*</label>
          <input type="text" id="address" className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#D3176D] text-white px-2 py-1" />
        </div>

        {/* Условия доставки */}
        <div className='mb-[30px]'>
          <h3 className='mb-[10px] uppercase font-bold'>СТОИМОСТЬ И УСЛОВИЯ ДОСТАВКИ:</h3>
          <ul className='mb-[20px] list-disc text-[14px]'>
            <li>Доставка в течении 1 дня бесплатная.</li>
            <li>Доставка осуществляется по городу Ташкент до локации.</li>
            <li>Доставка мебели по городу Ташкент 100.000 сум (внутри ТКАД)</li>
            <li>Доставка в регионы по тарифу экспресс-почты BTS или Fargo.</li>
          </ul>
        </div>

        {/* Комментарий к заказу */}
        <div className='mb-[30px]'>
          <h3 className='mb-[10px] font-bold'>Комментарий к заказу</h3>
          <textarea className='w-[644px] min-h-[105px] p-[10px] border border-gray-500 rounded-md bg-transparent text-white focus:border-[#D3176D] focus:outline-none' placeholder="Введите ваш комментарий..."></textarea>
        </div>

        {/* Кнопка оформления */}
        <button className='w-[350px] bg-[#D3176D] p-[10px] font-bold'>Оформить заказ</button>

      </div>
    </section>
  );
}

export default OrderCarPlace;
