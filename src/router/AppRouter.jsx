import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'

function AppRouter() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Header />}/>
    </Routes>   
    </>
  )
}

export default AppRouter