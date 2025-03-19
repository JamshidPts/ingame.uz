import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import BrandPage from '../pages/BrandPage/BrandPage';
import ServicesPage from '../pages/Services/ServicesPage';
import AdminPage from '../pages/admin/AdminPage';
import ProductPage from '../pages/ProductPage/ProductPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import OrderCar from '../pages/OrderCarPage/OrderCar';
import Filtered from '../components/Filtered';
import FilteredProducts from '../components/FilteredProducts';

function AppRouter() {

  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/brand' element={<BrandPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/desktops/:slug' element={<Filtered />} />
        <Route path='/products/:categoryId' element={<FilteredProducts />} /> {/* Новый маршрут */}
        <Route path='/orderCar' element={<OrderCar />} />
        <Route path="*" element={<h2 className='text-center'>404 Not Found</h2>} />
      </Routes>
    </>
  );
}

export default AppRouter;
