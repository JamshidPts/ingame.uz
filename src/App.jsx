import React from 'react'
import AppRouter from './router/AppRouter'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <>
    <ToastContainer
          style={{ zIndex: 9999 }}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
          />
      <AppRouter />
    </>
  )
}

export default App
