import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import BrandPage from '../pages/BrandPage/BrandPage';
import ServicesPage from '../pages/Services/ServicesPage';
import AdminPage from '../pages/admin/AdminPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import OrderCar from '../pages/OrderCarPage/OrderCar';
import Loader from '../components/Loader';

function AppRouter() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/brand' element={<BrandPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/orderCar' element={<OrderCar />} />
        <Route path="*" element={<h2 className='text-center'>404 Not Found</h2>} />
      </Routes>
    </>
  );
}

export default AppRouter;
