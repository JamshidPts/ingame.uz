import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import car from '../../assets/orderCarPlace/car.svg';
import locate from '../../assets/orderCarPlace/locate.svg';
import key from '../../assets/orderCarPlace/key.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

function OrderCarPlace() {
  const { cart, clearCart } = useContext(CartContext); // Добавляем clearCart
  const { selectedCurrency } = useContext(CartContext);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Состояния для формы
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  const convertPrice = (price) => {
    if (!selectedCurrency) return price;
    return (price * selectedCurrency.conversions).toFixed(2);
  };

  const deliveryMethods = [
    { id: 1, icon: car, title: "deliveryTitle1", description: "deliveryDescr1" },
    { id: 2, icon: locate, title: "deliveryTitle2", description: "deliveryDescr2" },
    { id: 3, icon: key, title: "deliveryTitle3", description: "deliveryDescr3" },
  ];

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Функция для отправки заказа
  const handleSubmit = async () => {
    // Валидация ФИО
    if (!fullName.trim()) {
      toast.error(`${t('fio')}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  
    // Валидация номера телефона
    const phoneRegex = /^\+998\d{9}$/; // Формат: +998 и 9 цифр
    if (!phoneRegex.test(phone)) {
      toast.error(`${t('phone')}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  
    // Валидация адреса доставки
    if (!address.trim()) {
      toast.error(`${t('address')}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  
    // Валидация метода доставки
    if (!selected) {
      toast.error(`${t('selected')}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  
    // Валидация комментария (если заполнен)
    if (comment.length > 500) {
      toast.error(`${t('comment')}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
  
    // Если все проверки пройдены, отправляем заказ
    const orderData = {
      fullname: fullName,
      phone: phone,
      delivery_method_id: selected,
      address: address,
      comment: comment,
      items: cart.map(item => ({
        item_id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    };
  
    try {
      const response = await fetch('https://ingame1.azeme.uz/api/user/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error('Ошибка при отправке заказа');
      }
  
      const result = await response.json();
      console.log('Заказ успешно отправлен:', result);
  
      // Очищаем корзину после успешного оформления
      clearCart();
  
      // Показываем toast
      toast.success(`${t('success')}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
      // Сразу выполняем навигацию
      navigate("/");
  
    } catch (error) {
      console.error('Ошибка:', error);
      toast.error(`${t('error')}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section className='bg-[#1a1a1a] min-h-[100vh] pt-[140px] pb-[50px] text-white'>
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Блок с формой и корзиной */}
        <div className="relative flex flex-col md:flex-row justify-between mb-[30px]">
          <div className="w-[100%] md:w-[60%] flex flex-col xl:flex-row justify-between">
            <div className='mb-[40px] xl:mb-0'>
              <h3 className="text-[24px] font-bold mb-4">{t('order')}</h3>
              <form className="space-y-4 text-[15px]">
                <div className="flex items-center bg-[#2d2d2d] p-3 rounded-md">
                  <label className="w-[120px] text-white" htmlFor="name">{t('name')}</label>
                  <input
                    type="text"
                    id="name"
                    value={fullName}
                    required
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#D3176D] text-white px-2 py-1"
                  />
                </div>
                <div className="flex items-center bg-[#2d2d2d] p-3 rounded-md">
                  <label className="w-[200px] text-white" htmlFor="phone">{t('number')}</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#D3176D] text-white px-2 py-1"
                  />
                </div>
              </form>
            </div>

            {/* Корзина товаров */}
            <div className='w-[280px] sm:w-[444px] md:w-[244px] mx-auto md:mx-0 min-h-[100px] mb-[40px] md:mb-0 border border-[#D3176D] px-[10px] py-[20px] flex flex-col justify-center text-white'>
              <div className='flex justify-between mb-[40px]'>
                <span>{t('tovari')}:</span> <span className="font-semibold">{totalItems}</span>
              </div>
              <div className='flex justify-between'>
                <span>{t('last')}:</span> <span className="font-semibold">{convertPrice(totalPrice)} {selectedCurrency?.currency}</span>
              </div>
            </div>
          </div>

          {/* Черный блок с товарами */}
          <div className="static mx-auto md:mx-0 md:absolute right-0 top-[0px]  w-[100%] sm:w-[70%] md:w-[36%] lg:w-[32%] min-h-[400px] text-white bg-[#131212] px-[20px] pt-[40px] overflow-auto rounded-md">
            {cart.length > 0 ? cart.map((item) => (
              <div key={item.id} className="flex items-center mb-[20px] p-[20px] md:p-0">
                <div className="bg-gray-800 p-[30px] md:p-[20px] rounded-md">
                  <img src={item.image || "/fallback-image.jpg"} alt={item.name} className="w-[50px] h-[40px] sm:h-[50px]" />
                </div>
                <div className="ml-[40px] md:ml-[10px]">
                  <h4 className="text-sm font-bold">{item.name}</h4>
                  <p className="text-[15px] font-[600] text-gray-400">{t('availability')}: {item.quantity}</p>
                  <p className="text-[15px] font-[600]">{convertPrice(item.price)} {selectedCurrency?.currency} * {item.quantity}</p>
                </div>
              </div>
            )) : <p className="text-center">{t('korzina')}</p>}
          </div>
        </div>

        <div className="text-white mb-[20px] flex flex-col items-center md:static md:items-start">
          <h3 className="mb-[10px] font-bold">{t('deliveryTitle')}</h3>
          <div className='flex items-center gap-[30px]'>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="delivery" value="delivery" className="w-[16px] h-[16px] mr-[10px]" />
              {t('kuryer')}
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="delivery" value="pickup" className="w-[16px] h-[16px] mr-[10px]" />
              {t("samovivoz")}
            </label>
          </div>
        </div>


        {/* Выбор метода доставки */}
        <div className="flex flex-col gap-[10px] mb-[30px]">
          {deliveryMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center w-[100%] md:w-[340px] lg:w-[540px] p-[10px] border ${selected === method.id ? 'border-[#D3176D]' : 'border-[#B4B4B4]'} cursor-pointer`}
              onClick={() => setSelected(method.id)}>
              <img src={method.icon} alt={method.title} className="w-[30px] h-[30px]" />
              <div className="ml-[20px]">
                <p className="font-semibold">{t(method.title)}</p>
                <p className="text-gray-400">{t(method.description)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Адрес доставки */}
        <div className="flex items-center bg-[#2d2d2d] p-3 rounded-md w-[100%] md:w-[540px] mb-[30px]">
          <label className="w-[200px] text-white" htmlFor="address">{t("addressDelivery")}</label>
          <input
            type="text"
            id="address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-[#D3176D] text-white px-2 py-1"
          />
        </div>

        {/* Комментарий к заказу */}
        <div className='mb-[30px]'>
          <h3 className='mb-[10px] font-bold'>{t('commentary')}</h3>
          <textarea
            className='w-[100%] md:w-[644px] min-h-[105px] p-[10px] border border-gray-500 rounded-md bg-transparent text-white focus:border-[#D3176D] focus:outline-none'
            placeholder={t('placeholder')}
            value={comment}
            required
            onChange={(e) => setComment(e.target.value)}>
          </textarea>
        </div>

        {/* Кнопка оформления */}
        <div className='flex justify-center md:justify-start'>
          <button
            className='w-[350px] bg-[#D3176D] p-[10px] font-bold'
            onClick={handleSubmit}>
            {t('order')}
          </button>
        </div>

      </div>
    </section>
  );
}

export default OrderCarPlace;
