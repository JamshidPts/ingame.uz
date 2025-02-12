import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import BrandPage from '../pages/BrandPage/BrandPage'

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/brand' element={<BrandPage />} />
      </Routes>
    </>
  )
}

export default AppRouter
