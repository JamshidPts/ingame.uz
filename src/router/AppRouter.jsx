import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import BrandPage from '../pages/BrandPage/BrandPage'
import ServicesPage from '../pages/Services/ServicesPage'
import AdminPage from '../pages/admin/AdminPage'

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminPage />}/>
        <Route path='/' element={<MainPage />} />
        <Route path='/brand' element={<BrandPage />} />
        <Route path='/services' element={<ServicesPage />}/>
        <Route path="*" element={<h2 className='text-center'>404 Not Found</h2>} />
      </Routes>
    </>
  )
}

export default AppRouter
